(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 2525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2526);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2527);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2530);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2531);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2533);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2539);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2542);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2544);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Explorer = function (_React$Component) {
    _inherits(Explorer, _React$Component);

    function Explorer(props) {
        _classCallCheck(this, Explorer);

        var _this = _possibleConstructorReturn(this, (Explorer.__proto__ || Object.getPrototypeOf(Explorer)).call(this, props));

        _this.state = {
            tabs: [{
                name: "blocks",
                link: "/explorer/blocks",
                translate: "explorer.blocks.title",
                content: _BlocksContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
            }, {
                name: "assets",
                link: "/explorer/assets",
                translate: "explorer.assets.title",
                content: _AssetsContainer__WEBPACK_IMPORTED_MODULE_6__["default"]
            }, {
                name: "accounts",
                link: "/explorer/accounts",
                translate: "explorer.accounts.title",
                content: _AccountsContainer__WEBPACK_IMPORTED_MODULE_7__["default"]
            }, {
                name: "witnesses",
                link: "/explorer/witnesses",
                translate: "explorer.witnesses.title",
                content: _Witnesses__WEBPACK_IMPORTED_MODULE_2__["default"]
            }, {
                name: "committee_members",
                link: "/explorer/committee-members",
                translate: "explorer.committee_members.title",
                content: _CommitteeMembers__WEBPACK_IMPORTED_MODULE_3__["default"]
            }, {
                name: "markets",
                link: "/explorer/markets",
                translate: "markets.title",
                content: _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, {
                name: "fees",
                link: "/explorer/fees",
                translate: "fees.title",
                content: _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_4__["default"]
            }]
        };
        return _this;
    }

    _createClass(Explorer, [{
        key: "render",
        value: function render() {
            var tab = this.props.match.params.tab;

            var defaultActiveTab = this.state.tabs.findIndex(function (t) {
                return t.name === tab;
            });

            var tabs = [];

            for (var i = 0; i < this.state.tabs.length; i++) {
                var currentTab = this.state.tabs[i];

                var TabContent = currentTab.content;
                var isLinkTo = defaultActiveTab == i ? "" : currentTab.link;

                tabs.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"],
                    { key: i, title: currentTab.translate, isLinkTo: isLinkTo },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContent, null)
                ));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"],
                {
                    defaultActiveTab: defaultActiveTab,
                    segmented: false,
                    setting: "explorer-tabs",
                    className: "account-tabs",
                    tabsClass: "account-overview bordered-header content-block",
                    contentClass: "tab-content explorer-tab-content padding"
                },
                tabs
            );
        }
    }]);

    return Explorer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explorer);

/***/ }),

/***/ 2527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(524);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1228);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(878);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(417);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1006);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1391);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(770);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(712);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(711);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(726);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1421);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















__webpack_require__(2528);

var WitnessCard = function (_React$Component) {
    _inherits(WitnessCard, _React$Component);

    function WitnessCard() {
        _classCallCheck(this, WitnessCard);

        return _possibleConstructorReturn(this, (WitnessCard.__proto__ || Object.getPrototypeOf(WitnessCard)).apply(this, arguments));
    }

    _createClass(WitnessCard, [{
        key: "_onCardClick",
        value: function _onCardClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.witness.get("name"));
        }
    }, {
        key: "render",
        value: function render() {
            var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getWitnessById(this.props.witness.get("id"));
            if (!witness_data) return null;
            var total_votes = witness_data.get("total_votes");

            var witness_aslot = witness_data.get("last_aslot");
            var color = {};
            if (this.props.most_recent - witness_aslot > 100) {
                color = { borderLeft: "1px solid #FCAB53" };
            } else {
                color = { borderLeft: "1px solid #50D2C2" };
            }
            var last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: "grid-content account-card",
                    onClick: this._onCardClick.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "card", style: color },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "h4",
                        { className: "text-center" },
                        "#",
                        this.props.rank,
                        ": ",
                        this.props.witness.get("name")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "card-content" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "text-center" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                account: this.props.witness.get("name"),
                                size: { height: 64, width: 64 }
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "table",
                            { className: "table key-value-table" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tbody",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "td",
                                        null,
                                        "Votes"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "td",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            amount: total_votes,
                                            asset: "1.3.0",
                                            decimalOffset: 5
                                        })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "td",
                                        null,
                                        "Last\xA0Block"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "td",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            time: new Date(last_aslot_time)
                                        })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "td",
                                        null,
                                        "Missed"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "td",
                                        null,
                                        witness_data.get("total_missed")
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WitnessCard;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessCard.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired
};

WitnessCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(WitnessCard);
WitnessCard = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(WitnessCard);

var WitnessRow = function (_React$Component2) {
    _inherits(WitnessRow, _React$Component2);

    function WitnessRow() {
        _classCallCheck(this, WitnessRow);

        return _possibleConstructorReturn(this, (WitnessRow.__proto__ || Object.getPrototypeOf(WitnessRow)).apply(this, arguments));
    }

    _createClass(WitnessRow, [{
        key: "_onRowClick",
        value: function _onRowClick(e) {
            e.preventDefault();
            this.props.history.push("/account/" + this.props.witness.get("name"));
        }

        // componentWillUnmount() {
        //     ChainStore.unSubFrom("witnesses", ChainStore.getWitnessById( this.props.witness.get("id") ).get("id"));
        // }

    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                witness = _props.witness,
                isCurrent = _props.isCurrent,
                rank = _props.rank;

            var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getWitnessById(this.props.witness.get("id"));
            if (!witness_data) return null;
            var total_votes = witness_data.get("total_votes");

            var witness_aslot = witness_data.get("last_aslot");
            var color = {};
            if (this.props.most_recent - witness_aslot > 100) {
                color = { borderLeft: "1px solid #FCAB53" };
            } else {
                color = { borderLeft: "1px solid #50D2C2" };
            }
            var last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

            var currentClass = isCurrent ? "active-witness" : "";

            var missed = witness_data.get("total_missed");
            var missedClass = classnames__WEBPACK_IMPORTED_MODULE_13___default()("txtlabel", { success: missed <= 500 }, { info: missed > 500 && missed <= 1250 }, { warning: missed > 1250 && missed <= 2000 }, { error: missed >= 200 });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tr",
                { className: currentClass, onClick: this._onRowClick.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    rank
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { style: color },
                    witness.get("name")
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"], { time: new Date(last_aslot_time) })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    witness_data.get("last_confirmed_block_num")
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { className: missedClass },
                    missed
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        amount: witness_data.get("total_votes"),
                        asset: "1.3.0",
                        decimalOffset: 5
                    })
                )
            );
        }
    }]);

    return WitnessRow;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessRow.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired
};

WitnessRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(WitnessRow);
WitnessRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(WitnessRow);

var WitnessList = function (_React$Component3) {
    _inherits(WitnessList, _React$Component3);

    function WitnessList() {
        _classCallCheck(this, WitnessList);

        var _this3 = _possibleConstructorReturn(this, (WitnessList.__proto__ || Object.getPrototypeOf(WitnessList)).call(this));

        _this3.state = {
            sortBy: "rank",
            inverseSort: true
        };

        _this3.handleBlockIdClick = _this3.handleBlockIdClick.bind(_this3);
        return _this3;
    }

    _createClass(WitnessList, [{
        key: "_setSort",
        value: function _setSort(field) {
            this.setState({
                sortBy: field,
                inverseSort: field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort
            });
        }
    }, {
        key: "handleBlockIdClick",
        value: function handleBlockIdClick(blockId) {
            var _this4 = this;

            return function () {
                _this4.props.history.push("/block/" + blockId);
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var _props2 = this.props,
                witnesses = _props2.witnesses,
                current = _props2.current,
                cardView = _props2.cardView,
                witnessList = _props2.witnessList;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort;

            var most_recent_aslot = 0;
            var ranks = {};

            witnesses.filter(function (a) {
                if (!a) {
                    return false;
                }
                return witnessList.indexOf(a.get("id")) !== -1;
            }).sort(function (a, b) {
                if (a && b) {
                    return parseInt(b.get("total_votes"), 10) - parseInt(a.get("total_votes"), 10);
                }
            }).forEach(function (w, index) {
                if (w) {
                    var s = w.get("last_aslot");
                    if (most_recent_aslot < s) {
                        most_recent_aslot = s;
                    }

                    ranks[w.get("id")] = index + 1;
                }
            });

            var dataSource = [];
            if (witnesses.length > 0 && witnesses[1]) {
                dataSource = witnesses.filter(function (a) {
                    if (!a) {
                        return false;
                    }
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(a.get("witness_account"));
                    if (!witness) return false;

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getWitnessById(witness.get("id"));
                    if (!witness_data) return false;

                    var name = witness.get("name");
                    if (!name) return false;
                    return name.indexOf(_this5.props.filter) !== -1;
                }).map(function (a) {
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(a.get("witness_account"));

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getWitnessById(witness.get("id"));

                    var witness_aslot = witness_data.get("last_aslot");

                    var last_aslot_time = new Date(Date.now() - (_this5.props.current_aslot - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

                    return {
                        id: a.get("id"),
                        key: witness.get("name"),
                        rank: ranks[a.get("id")],
                        name: witness.get("name"),
                        signing_key: witness_data.get("signing_key"),
                        url: witness_data.get("url"),
                        lastConfirmedBlock: {
                            id: witness_data.get("last_confirmed_block_num"),
                            timestamp: last_aslot_time.getTime()
                        },
                        blocksMissed: witness_data.get("total_missed"),
                        votes: witness_data.get("total_votes")
                    };
                });
            }

            var urlValid = function urlValid(item) {
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                return regex.test(item);
            };

            var urlRender = function urlRender(item) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Popover"],
                    {
                        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            { href: item, target: "_blank" },
                            item
                        ),
                        trigger: "hover"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "link" })
                );
            };

            var keyRender = function keyRender(item) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Popover"],
                    { content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            item
                        ), trigger: "hover" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "key" })
                );
            };

            var columns = [{
                key: "#",
                title: "#",
                dataIndex: "rank",
                sorter: function sorter(a, b) {
                    return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                }
            }, {
                key: "name",
                title: "NAME",
                dataIndex: "name",
                sorter: function sorter(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }
            }, {
                key: "url",
                title: "URL",
                dataIndex: "url",
                align: "center",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { width: "100%", textAlign: "center" } },
                        item && urlValid(item) && urlRender(item) || null
                    );
                }
            }, {
                key: "lastConfirmedBlock",
                title: "LAST CONFIRMED BLOCK",
                dataIndex: "lastConfirmedBlock",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                style: { display: "inline-block", minWidth: "100px" },
                                href: "javascript:void(0)",
                                onClick: _this5.handleBlockIdClick(item.id)
                            },
                            "#",
                            Number(item.id).toLocaleString()
                        ),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"], { time: new Date(item.timestamp) })
                    );
                },
                sorter: function sorter(a, b) {
                    return a.lastConfirmedBlock.timestamp > b.lastConfirmedBlock.timestamp ? -1 : a.lastConfirmedBlock.timestamp < b.lastConfirmedBlock.timestamp ? 1 : 0;
                }
            }, {
                key: "blocksMissed",
                title: "BLOCKS MISSED",
                dataIndex: "blocksMissed",
                render: function render(item) {
                    var blocksMissedClassName = classnames__WEBPACK_IMPORTED_MODULE_13___default()("txtlabel", { success: item <= 500 }, { info: item > 500 && item <= 1250 }, { warning: item > 1250 && item <= 2000 }, { error: item >= 200 });
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: blocksMissedClassName },
                        item
                    );
                },
                sorter: function sorter(a, b) {
                    return a.blocksMissed > b.blocksMissed ? 1 : a.blocksMissed < b.blocksMissed ? -1 : 0;
                }
            }, {
                key: "votes",
                title: "VOTES",
                dataIndex: "votes",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        amount: item,
                        asset: "1.3.0",
                        decimalOffset: 5
                    });
                },
                sorter: function sorter(a, b) {
                    return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
                }
            }, {
                key: "key",
                title: "KEY",
                dataIndex: "signing_key",
                align: "center",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { textAlign: "center", width: "100%" } },
                        keyRender(item)
                    );
                }
            }];

            var getRowClassName = function getRowClassName(record) {
                if (record.id === current) return "active-witness";

                return "";
            };

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Table"], {
                rowClassName: getRowClassName,
                columns: columns,
                dataSource: dataSource,
                pagination: false
            });
        }
    }]);

    return WitnessList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessList.propTypes = {
    witnesses: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObjectsList.isRequired
};

WitnessList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(WitnessList, {
    show_loader: true
});
WitnessList = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(WitnessList);

var Witnesses = function (_React$Component4) {
    _inherits(Witnesses, _React$Component4);

    function Witnesses(props) {
        _classCallCheck(this, Witnesses);

        var _this6 = _possibleConstructorReturn(this, (Witnesses.__proto__ || Object.getPrototypeOf(Witnesses)).call(this, props));

        _this6.state = {
            filterWitness: props.filterWitness || "",
            cardView: props.cardView
        };
        return _this6;
    }

    _createClass(Witnesses, [{
        key: "_onFilter",
        value: function _onFilter(e) {
            e.preventDefault();
            this.setState({ filterWitness: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                filterWitness: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_toggleView",
        value: function _toggleView() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                cardView: !this.state.cardView
            });

            this.setState({
                cardView: !this.state.cardView
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                dynGlobalObject = _props3.dynGlobalObject,
                globalObject = _props3.globalObject;

            dynGlobalObject = dynGlobalObject.toJS();
            globalObject = globalObject.toJS();

            var current = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(dynGlobalObject.current_witness),
                currentAccount = null;
            if (current) {
                currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(current.get("witness_account"));
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-content " },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "explore-witness--info" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "table",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "explorer.witnesses.current" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "explorer.blocks.active_witnesses" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "explorer.witnesses.participation" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "explorer.witnesses.pay" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "explorer.witnesses.budget" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "explorer.witnesses.next_vote" })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "tbody",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                currentAccount ? currentAccount.get("name") : null
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                Object.keys(globalObject.active_witnesses).length
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                dynGlobalObject.participation,
                                                "%"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                    amount: globalObject.parameters.witness_pay_per_block,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                    amount: dynGlobalObject.witness_budget,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                    time: new Date(dynGlobalObject.next_maintenance_time + "Z")
                                                })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Input"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("explorer.witnesses.filter_by_name"),
                                onChange: this._onFilter.bind(this),
                                style: {
                                    width: "200px",
                                    marginBottom: "12px",
                                    marginTop: "4px"
                                },
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "search" })
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WitnessList, {
                                current_aslot: dynGlobalObject.current_aslot,
                                current: current ? current.get("id") : null,
                                witnesses: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(globalObject.active_witnesses),
                                witnessList: globalObject.active_witnesses,
                                filter: this.state.filterWitness,
                                cardView: this.state.cardView
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Witnesses;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Witnesses.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired
};
Witnesses.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0"
};

Witnesses = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(Witnesses);

var WitnessStoreWrapper = function (_React$Component5) {
    _inherits(WitnessStoreWrapper, _React$Component5);

    function WitnessStoreWrapper() {
        _classCallCheck(this, WitnessStoreWrapper);

        return _possibleConstructorReturn(this, (WitnessStoreWrapper.__proto__ || Object.getPrototypeOf(WitnessStoreWrapper)).apply(this, arguments));
    }

    _createClass(WitnessStoreWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Witnesses, this.props);
        }
    }]);

    return WitnessStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

WitnessStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_10__["connect"])(WitnessStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().viewSettings.get("cardView"),
            filterWitness: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().viewSettings.get("filterWitness")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (WitnessStoreWrapper);

/***/ }),

/***/ 2528:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(524);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(878);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(770);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(712);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1006);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(711);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1421);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var CommitteeMemberList = function (_React$Component) {
    _inherits(CommitteeMemberList, _React$Component);

    function CommitteeMemberList() {
        _classCallCheck(this, CommitteeMemberList);

        return _possibleConstructorReturn(this, (CommitteeMemberList.__proto__ || Object.getPrototypeOf(CommitteeMemberList)).call(this));
    }

    _createClass(CommitteeMemberList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                committee_members = _props.committee_members,
                membersList = _props.membersList;


            var dataSource = null;

            var ranks = {};

            committee_members.filter(function (a) {
                if (!a) {
                    return false;
                }
                return membersList.indexOf(a.get("id")) !== -1;
            }).forEach(function (c, index) {
                if (c) {
                    ranks[c.get("id")] = index + 1;
                }
            });

            if (committee_members.length > 0 && committee_members[1]) {
                dataSource = committee_members.filter(function (a) {
                    if (!a) {
                        return false;
                    }
                    var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("committee_member_account"));
                    if (!account) {
                        return false;
                    }

                    var account_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getCommitteeMemberById(account.get("id"));

                    if (!account_data) return false;

                    return account.get("name").indexOf(_this2.props.filter || "") !== -1;
                }).map(function (a) {
                    var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("committee_member_account"));

                    var account_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getCommitteeMemberById(account.get("id"));

                    return {
                        key: a.get("id"),
                        rank: ranks[a.get("id")],
                        name: account.get("name"),
                        votes: account_data.get("total_votes"),
                        url: account_data.get("url")
                    };
                });
            }

            var columns = [{
                key: "#",
                title: "#",
                dataIndex: "rank",
                sorter: function sorter(a, b) {
                    return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                }
            }, {
                key: "name",
                title: "NAME",
                dataIndex: "name",
                sorter: function sorter(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }
            }, {
                key: "votes",
                title: "VOTES",
                dataIndex: "votes",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        amount: item,
                        asset: "1.3.0",
                        decimalOffset: 5
                    });
                },
                sorter: function sorter(a, b) {
                    return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
                }
            }, {
                key: "url",
                title: "WEBPAGE",
                dataIndex: "url",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "a",
                        { href: item, target: "_blank" },
                        item
                    );
                }
            }];

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Table"], {
                columns: columns,
                dataSource: dataSource,
                pagination: false
            });
        }
    }]);

    return CommitteeMemberList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CommitteeMemberList.propTypes = {
    committee_members: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
};

CommitteeMemberList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMemberList, {
    show_loader: true
});

var CommitteeMembers = function (_React$Component2) {
    _inherits(CommitteeMembers, _React$Component2);

    function CommitteeMembers(props) {
        _classCallCheck(this, CommitteeMembers);

        var _this3 = _possibleConstructorReturn(this, (CommitteeMembers.__proto__ || Object.getPrototypeOf(CommitteeMembers)).call(this, props));

        _this3.state = {
            filterCommitteeMember: props.filterCommitteeMember || ""
        };
        return _this3;
    }

    _createClass(CommitteeMembers, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.globalObject, this.props.globalObject) || nextState.filterCommitteeMember !== this.state.filterCommitteeMember || nextState.cardView !== this.state.cardView;
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(e) {
            e.preventDefault();
            this.setState({ filterCommitteeMember: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting({
                filterCommitteeMember: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "render",
        value: function render() {
            var globalObject = this.props.globalObject;

            globalObject = globalObject.toJS();

            var activeCommitteeMembers = [];
            for (var key in globalObject.active_committee_members) {
                if (globalObject.active_committee_members.hasOwnProperty(key)) {
                    activeCommitteeMembers.push(globalObject.active_committee_members[key]);
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical medium-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-content" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("explorer.witnesses.filter_by_name"),
                                onChange: this._onFilter.bind(this),
                                style: {
                                    width: "200px",
                                    marginBottom: "12px",
                                    marginTop: "4px"
                                },
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Icon"], { type: "search" })
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommitteeMemberList, {
                                filter: this.state.filterCommitteeMember,
                                committee_members: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(globalObject.active_committee_members),
                                membersList: globalObject.active_committee_members
                            })
                        )
                    )
                )
            );
        }
    }]);

    return CommitteeMembers;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CommitteeMembers.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};
CommitteeMembers.defaultProps = {
    globalObject: "2.0.0"
};

CommitteeMembers = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMembers);

var CommitteeMembersStoreWrapper = function (_React$Component3) {
    _inherits(CommitteeMembersStoreWrapper, _React$Component3);

    function CommitteeMembersStoreWrapper() {
        _classCallCheck(this, CommitteeMembersStoreWrapper);

        return _possibleConstructorReturn(this, (CommitteeMembersStoreWrapper.__proto__ || Object.getPrototypeOf(CommitteeMembersStoreWrapper)).apply(this, arguments));
    }

    _createClass(CommitteeMembersStoreWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommitteeMembers, this.props);
        }
    }]);

    return CommitteeMembersStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CommitteeMembersStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(CommitteeMembersStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("cardViewCommittee"),
            filterCommitteeMember: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("filterCommitteeMember")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (CommitteeMembersStoreWrapper);

/***/ }),

/***/ 2531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FeesContainer = function (_React$Component) {
    _inherits(FeesContainer, _React$Component);

    function FeesContainer() {
        _classCallCheck(this, FeesContainer);

        return _possibleConstructorReturn(this, (FeesContainer.__proto__ || Object.getPrototypeOf(FeesContainer)).apply(this, arguments));
    }

    _createClass(FeesContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fees__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)
            );
        }
    }]);

    return FeesContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FeesContainer);

/***/ }),

/***/ 2532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(524);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1054);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(878);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1006);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2449);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(417);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainTypes"].operations;

var ops = Object.keys(operations);

// Define groups and their corresponding operation ids
var fee_grouping = {
    general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 40, 41],
    asset: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 42, 43, 44, 47, 48],
    market: [1, 2, 3, 4, 45, 46],
    account: [5, 6, 7, 8, 9],
    business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36]
};

// Operations that require LTM
var ltm_required = [5, 7, 20, 21, 34];

var FeeGroup = function (_React$Component) {
    _inherits(FeeGroup, _React$Component);

    function FeeGroup(props) {
        _classCallCheck(this, FeeGroup);

        return _possibleConstructorReturn(this, (FeeGroup.__proto__ || Object.getPrototypeOf(FeeGroup)).call(this, props));
    }

    _createClass(FeeGroup, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !immutable__WEBPACK_IMPORTED_MODULE_1___default.a.is(nextProps.globalObject, this.props.globalObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                globalObject = _props.globalObject,
                settings = _props.settings,
                opIds = _props.opIds,
                title = _props.title;

            globalObject = globalObject.toJSON();
            var core_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset("1.3.0");

            var current_fees = globalObject.parameters.current_fees;
            var network_fee = globalObject.parameters.network_percent_of_fee / 1e4;
            var scale = current_fees.scale;
            var feesRaw = current_fees.parameters;
            var preferredUnit = settings.get("unit") || core_asset.get("symbol");

            var trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.trxTypes");

            var fees = opIds.map(function (opID) {
                var feeIdx = feesRaw.findIndex(function (f) {
                    return f[0] === opID;
                });
                if (feeIdx === -1) {
                    console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx", opID);
                    return; // FIXME, if I ask for a fee that does not exist?
                }

                var feeStruct = feesRaw[feeIdx];

                var opId = feeStruct[0];
                var fee = feeStruct[1];
                var operation_name = ops[opId];
                var feename = trxTypes[operation_name];

                var feeRateForLTM = network_fee;
                if (opId === 10) {
                    // See https://github.com/bitshares/bitshares-ui/issues/996
                    feeRateForLTM = 0.5 + 0.5 * network_fee;
                }

                var rows = [];
                var headIncluded = false;
                var labelClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()("label", "info");

                for (var key in fee) {
                    var amount = fee[key] * scale / 1e4;
                    var amountForLTM = amount * feeRateForLTM;
                    var feeTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.feeTypes");
                    var assetAmount = amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: amount, asset: "1.3.0" }) : feeTypes["_none"];
                    var equivalentAmount = amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__["EquivalentValueComponent"], {
                        fromAsset: "1.3.0",
                        fullPrecision: true,
                        amount: amount,
                        toAsset: preferredUnit,
                        fullDecimals: true
                    }) : feeTypes["_none"];
                    var assetAmountLTM = amountForLTM ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], { amount: amountForLTM, asset: "1.3.0" }) : feeTypes["_none"];
                    var equivalentAmountLTM = amountForLTM ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__["EquivalentValueComponent"], {
                        fromAsset: "1.3.0",
                        fullPrecision: true,
                        amount: amountForLTM,
                        toAsset: preferredUnit,
                        fullDecimals: true
                    }) : feeTypes["_none"];
                    var _title = null;

                    if (!headIncluded) {
                        headIncluded = true;
                        _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { rowSpan: "6", style: { width: "15em" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: labelClass },
                                feename
                            )
                        );
                    }

                    if (ltm_required.indexOf(opId) < 0) {
                        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            {
                                key: opId.toString() + key,
                                className: feeTypes[key] === "Annual Membership" ? "linethrough" : ""
                            },
                            _title,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feeTypes[key]
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                assetAmount,
                                amount !== 0 && preferredUnit !== "BTS" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    "\xA0/\xA0",
                                    equivalentAmount
                                ) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                feeIdx !== 8 ? assetAmountLTM : null,
                                feeIdx !== 8 && amount !== 0 && preferredUnit !== "BTS" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    "\xA0/\xA0",
                                    equivalentAmountLTM
                                ) : null
                            )
                        ));
                    } else {
                        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: opId.toString() + key },
                            _title,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feeTypes[key]
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                "- ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "sup",
                                    null,
                                    "*"
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { style: { textAlign: "right" } },
                                assetAmountLTM,
                                amount !== 0 && preferredUnit !== "BTS" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    "\xA0/\xA0",
                                    equivalentAmountLTM
                                ) : null
                            )
                        ));
                    }
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    { key: feeIdx },
                    rows
                );
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    this.props.title
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.block.op" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.type" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.fee" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.fees.feeltm" })
                            )
                        )
                    ),
                    fees
                )
            );
        }
    }]);

    return FeeGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeeGroup.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired
};
FeeGroup.defaultProps = {
    globalObject: "2.0.0"
};

FeeGroup = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(FeeGroup);

var Fees = function (_React$Component2) {
    _inherits(Fees, _React$Component2);

    function Fees() {
        _classCallCheck(this, Fees);

        return _possibleConstructorReturn(this, (Fees.__proto__ || Object.getPrototypeOf(Fees)).apply(this, arguments));
    }

    _createClass(Fees, [{
        key: "render",
        value: function render() {
            var FeeGroupsTitle = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("transaction.feeGroups");
            var feeGroups = [];

            for (var groupName in fee_grouping) {
                var groupNameText = FeeGroupsTitle[groupName];
                var feeIds = fee_grouping[groupName];
                feeGroups.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeeGroup, {
                    key: groupName,
                    settings: this.props.settings,
                    opIds: feeIds,
                    title: groupNameText
                }));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical", style: { overflow: "visible" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 shrink",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__["default"], { path: "components/Fees" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 ",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        feeGroups
                    )
                )
            );
        }
    }]);

    return Fees;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Fees);

/***/ }),

/***/ 2533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(780);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2534);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlocksContainer = function (_React$Component) {
    _inherits(BlocksContainer, _React$Component);

    function BlocksContainer() {
        _classCallCheck(this, BlocksContainer);

        return _possibleConstructorReturn(this, (BlocksContainer.__proto__ || Object.getPrototypeOf(BlocksContainer)).apply(this, arguments));
    }

    _createClass(BlocksContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        latestBlocks: function latestBlocks() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestBlocks;
                        },
                        latestTransactions: function latestTransactions() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestTransactions;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blocks__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return BlocksContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlocksContainer);

/***/ }),

/***/ 2534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(726);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1007);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1389);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2535);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(878);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1224);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2536);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2537);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(568);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(524);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1391);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1006);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2411);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2434);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















__webpack_require__(1387);

var BlockTimeAgo = function (_React$Component) {
    _inherits(BlockTimeAgo, _React$Component);

    function BlockTimeAgo() {
        _classCallCheck(this, BlockTimeAgo);

        return _possibleConstructorReturn(this, (BlockTimeAgo.__proto__ || Object.getPrototypeOf(BlockTimeAgo)).apply(this, arguments));
    }

    _createClass(BlockTimeAgo, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.blockTime !== this.props.blockTime;
        }
    }, {
        key: "render",
        value: function render() {
            var blockTime = this.props.blockTime;

            // let timePassed = Date.now() - blockTime;

            var timePassed = new Date().getTime() - new Date(blockTime).getTime();

            var textClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: timePassed <= 6000 }, { info: timePassed > 6000 && timePassed <= 15000 }, { warning: timePassed > 15000 && timePassed <= 25000 }, { error: timePassed > 25000 });

            return blockTime ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "h3",
                { className: textClass },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__["default"], { time: blockTime })
            ) : null;
        }
    }]);

    return BlockTimeAgo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Blocks = function (_React$Component2) {
    _inherits(Blocks, _React$Component2);

    function Blocks(props) {
        _classCallCheck(this, Blocks);

        var _this2 = _possibleConstructorReturn(this, (Blocks.__proto__ || Object.getPrototypeOf(Blocks)).call(this, props));

        _this2.state = {
            animateEnter: false,
            operationsHeight: null,
            blocksHeight: null
        };

        _this2._updateHeight = _this2._updateHeight.bind(_this2);
        return _this2;
    }

    _createClass(Blocks, [{
        key: "_getBlock",
        value: function _getBlock(height, maxBlock) {
            if (height) {
                height = parseInt(height, 10);
                actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__["default"].getLatest(height, maxBlock);
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._updateHeight, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._updateHeight);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.latestBlocks.size === 0) {
                return this._getInitialBlocks();
            } else if (!this.state.animateEnter) {
                this.setState({
                    animateEnter: true
                });
            }

            var maxBlock = nextProps.dynGlobalObject.get("head_block_number");
            if (nextProps.latestBlocks.size >= 20 && nextProps.dynGlobalObject.get("head_block_number") !== nextProps.latestBlocks.get(0).id) {
                return this._getBlock(maxBlock, maxBlock);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getInitialBlocks();
            var oc = this.refs.operations;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(oc);
            var blocks = this.refs.blocks;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(blocks);
            this._updateHeight();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_14___default.a.is(nextProps.latestBlocks, this.props.latestBlocks) || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this._updateHeight();
        }
    }, {
        key: "_getInitialBlocks",
        value: function _getInitialBlocks() {
            var maxBlock = parseInt(this.props.dynGlobalObject.get("head_block_number"), 10);
            if (maxBlock) {
                for (var i = 19; i >= 0; i--) {
                    var exists = false;
                    if (this.props.latestBlocks.size > 0) {
                        for (var j = 0; j < this.props.latestBlocks.size; j++) {
                            if (this.props.latestBlocks.get(j).id === maxBlock - i) {
                                exists = true;
                                break;
                            }
                        }
                    }
                    if (!exists) {
                        this._getBlock(maxBlock - i, maxBlock);
                    }
                }
            }
        }
    }, {
        key: "_updateHeight",
        value: function _updateHeight() {
            var containerHeight = this.refs.outerWrapper.offsetHeight;
            var operationsTextHeight = this.refs.operationsText.offsetHeight;
            var blocksTextHeight = this.refs.blocksText.offsetHeight;

            this.setState({
                operationsHeight: containerHeight - operationsTextHeight,
                blocksHeight: containerHeight - blocksTextHeight
            }, this.psUpdate);
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            var oc = this.refs.operations;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(oc);
            var blocks = this.refs.blocks;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(blocks);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                latestBlocks = _props.latestBlocks,
                latestTransactions = _props.latestTransactions,
                globalObject = _props.globalObject,
                dynGlobalObject = _props.dynGlobalObject,
                coreAsset = _props.coreAsset;
            var _state = this.state,
                blocksHeight = _state.blocksHeight,
                operationsHeight = _state.operationsHeight;

            var dynamicObject = this.props.getDynamicObject(coreAsset.get("dynamic_asset_data_id"));
            var blocks = null,
                transactions = null;
            var headBlock = null;
            var trxCount = 0,
                blockCount = latestBlocks.size,
                trxPerSec = 0,
                blockTimes = [],
                avgTime = 0;

            if (latestBlocks && latestBlocks.size >= 20) {
                var previousTime = void 0;

                var lastBlock = void 0,
                    firstBlock = void 0;

                // Map out the block times for the latest blocks and count the number of transactions
                latestBlocks.filter(function (a, index) {
                    // Only use consecutive blocks counting back from head block
                    return a.id === dynGlobalObject.get("head_block_number") - index;
                }).sort(function (a, b) {
                    return a.id - b.id;
                }).forEach(function (block, index) {
                    trxCount += block.transactions.length;
                    if (index > 0) {
                        blockTimes.push([block.id, (block.timestamp - previousTime) / 1000]);
                        lastBlock = block.timestamp;
                    } else {
                        firstBlock = block.timestamp;
                    }
                    previousTime = block.timestamp;
                });

                // Output block rows for the last 20 blocks
                blocks = latestBlocks.sort(function (a, b) {
                    return b.id - a.id;
                }).take(20).map(function (block) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: block.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                { to: "/block/" + block.id },
                                "#",
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(block.id, 0)
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedDate"], {
                                value: block.timestamp,
                                format: "time"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__["default"], { witness: block.witness })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(block.transactions.length, 0)
                        )
                    );
                }).toArray();

                var trxIndex = 0;

                transactions = latestTransactions.sort(function (a, b) {
                    return b.block_num - a.block_num;
                }).take(20).map(function (trx) {
                    var opIndex = 0;
                    return trx.operations.map(function (op) {
                        if (trxIndex > 15) return null;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            key: trxIndex++,
                            op: op,
                            result: trx.operation_results[opIndex++],
                            block: trx.block_num,
                            hideFee: true,
                            hideOpLabel: false,
                            current: "1.2.0",
                            hideDate: true,
                            hidePending: true
                        });
                    }).filter(function (a) {
                        return !!a;
                    });
                }).toArray();

                headBlock = latestBlocks.first().timestamp;
                avgTime = blockTimes.reduce(function (previous, current, idx, array) {
                    return previous + current[1] / array.length;
                }, 0);

                trxPerSec = trxCount / ((lastBlock - firstBlock) / 1000);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "outerWrapper", className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-horizontal blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.current_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                "#",
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(dynGlobalObject.get("head_block_number"), 0)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.last_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockTimeAgo, { blockTime: headBlock })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_sec"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(trxPerSec, 2)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.avg_conf_time"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(avgTime / 2, 2),
                                "s"
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-horizontal  blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.active_witnesses"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                { className: "txtlabel success" },
                                globalObject.get("active_witnesses").size
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.active_committee_members"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                { className: "txtlabel success" },
                                globalObject.get("active_committee_members").size
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                null,
                                common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].format_number(trxCount / blockCount || 0, 2)
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-6 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.recently_missed_blocks"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h2",
                                {
                                    className: "txtlabel warning",
                                    style: { fontWeight: "100" }
                                },
                                dynGlobalObject.get("recently_missed_count")
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "align-center grid-block shrink small-vertical medium-horizontal blocks-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.asset.summary.current_supply"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                { className: "txtlabel" },
                                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    amount: dynamicObject.get("current_supply"),
                                    asset: coreAsset.get("id"),
                                    decimalOffset: 5
                                }) : null
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.block_times"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                blockTimes: blockTimes,
                                head_block_number: dynGlobalObject.get("head_block_number")
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.blocks.trx_per_block"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TransactionChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                blocks: latestBlocks,
                                head_block: dynGlobalObject.get("head_block_number")
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block text-center small-12 medium-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow clear-fix" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "txtlabel" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    component: "span",
                                    content: "explorer.asset.summary.stealth_supply"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                { className: "txtlabel" },
                                dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    amount: dynamicObject.get("confidential_supply"),
                                    asset: coreAsset.get("id"),
                                    decimalOffset: 5
                                }) : null
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { ref: "transactionsBlock", className: "grid-block no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block small-12 medium-6 vertical no-overflow",
                            style: { paddingBottom: 0 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { ref: "operationsText" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "block-content-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.recent" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.votes.info" })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: {
                                        maxHeight: operationsHeight || "400px",
                                        overflow: "hidden"
                                    },
                                    ref: "operations"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        transactions
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block medium-6 show-for-medium vertical no-overflow",
                            style: { paddingBottom: 0, paddingLeft: 5 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { ref: "blocksText" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "block-content-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                        component: "span",
                                        content: "explorer.blocks.recent"
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block vertical",
                                    style: {
                                        maxHeight: blocksHeight || "438px",
                                        overflow: "hidden"
                                    },
                                    ref: "blocks"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table fixed-height-2rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "thead",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.id"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.date"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.witness"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                                    component: "span",
                                                    content: "explorer.block.count"
                                                })
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__["default"],
                                        {
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        blocks
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Blocks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Blocks.propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired
};
Blocks.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0",
    latestBlocks: {},
    assets: {},
    accounts: {},
    height: 1
};


Blocks = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(Blocks, { show_loader: true });
Blocks = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__["default"])(Blocks, {
    propNames: ["coreAsset"],
    withDynamic: true
});
/* harmony default export */ __webpack_exports__["default"] = (Blocks);

/***/ }),

/***/ 2535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(878);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1342);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LinkToWitnessById = function (_React$Component) {
    _inherits(LinkToWitnessById, _React$Component);

    function LinkToWitnessById() {
        _classCallCheck(this, LinkToWitnessById);

        return _possibleConstructorReturn(this, (LinkToWitnessById.__proto__ || Object.getPrototypeOf(LinkToWitnessById)).apply(this, arguments));
    }

    _createClass(LinkToWitnessById, [{
        key: "render",
        value: function render() {
            var witness_account = this.props.witness.get("witness_account");
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: witness_account });
        }
    }]);

    return LinkToWitnessById;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

LinkToWitnessById.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};

LinkToWitnessById = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkToWitnessById);

/* harmony default export */ __webpack_exports__["default"] = (LinkToWitnessById);

/***/ }),

/***/ 2536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2510);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TransactionChart = function (_React$Component) {
    _inherits(TransactionChart, _React$Component);

    function TransactionChart() {
        _classCallCheck(this, TransactionChart);

        return _possibleConstructorReturn(this, (TransactionChart.__proto__ || Object.getPrototypeOf(TransactionChart)).apply(this, arguments));
    }

    _createClass(TransactionChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.blocks.size < 20) {
                return false;
            }
            var chart = this.refs.trx_chart ? this.refs.trx_chart.chart : null;
            if (chart && nextProps.blocks !== this.props.blocks) {
                var _getData2 = this._getData(nextProps),
                    trxData = _getData2.trxData,
                    colors = _getData2.colors;

                var series = chart.series[0];
                var finalValue = series.xData[series.xData.length - 1];

                // console.log("chart:", chart, "series:", series.data, "finalValue:", finalValue);
                if (series.xData.length) {
                    trxData.forEach(function (point) {
                        if (point[0] > finalValue) {
                            series.addPoint(point, false, series.xData.length >= 30);
                        }
                    });

                    chart.options.plotOptions.column.colors = colors;

                    chart.redraw();
                    return false;
                }
            }
            return nextProps.blocks !== this.props.blocks || nextProps.head_block !== this.props.head_block;
        }
    }, {
        key: "_getData",
        value: function _getData(props) {
            var blocks = props.blocks,
                head_block = props.head_block;


            var trxData = [];
            var max = 0;
            trxData = blocks.filter(function (a) {
                return a.id >= head_block - 30;
            }).sort(function (a, b) {
                return a.id - b.id;
            }).takeLast(30).map(function (block) {
                max = Math.max(block.transactions.length, max);
                return [block.id, block.transactions.length];
            }).toArray();

            var colors = trxData.map(function (entry) {
                // console.log("entry:", entry);
                if (entry[1] <= 5) {
                    return "#50D2C2";
                } else if (entry[1] <= 10) {
                    return "#A0D3E8";
                } else if (entry[1] <= 20) {
                    return "#FCAB53";
                } else {
                    return "#deb869";
                }
            });

            return {
                colors: colors,
                trxData: trxData,
                max: max
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _getData3 = this._getData(this.props),
                trxData = _getData3.trxData,
                colors = _getData3.colors,
                max = _getData3.max;

            var tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("explorer.blocks.transactions");

            var config = {
                chart: {
                    type: "column",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [0, 0, 5, 0],
                    height: 100
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    formatter: function formatter() {
                        return tooltipLabel + ": " + this.y;
                    }
                },
                series: [{
                    name: "Transactions",
                    data: trxData,
                    color: "#50D2C2"
                }],
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: Math.max(1.5, max + 0.5),
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0,
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        animation: true,
                        minPointLength: 5,
                        colorByPoint: true,
                        colors: colors,
                        borderWidth: 0
                    }
                }
            };

            return trxData.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a, { ref: "trx_chart", config: config }) : null;
        }
    }]);

    return TransactionChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TransactionChart);

/***/ }),

/***/ 2537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2538);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2510);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlocktimeChart = function (_React$Component) {
    _inherits(BlocktimeChart, _React$Component);

    function BlocktimeChart() {
        _classCallCheck(this, BlocktimeChart);

        return _possibleConstructorReturn(this, (BlocktimeChart.__proto__ || Object.getPrototypeOf(BlocktimeChart)).apply(this, arguments));
    }

    _createClass(BlocktimeChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.blockTimes.length < 19) {
                return false;
            } else if (this.props.blockTimes.length === 0) {
                return true;
            }

            var chart = this.refs.chart ? this.refs.chart.chart : null;
            if (chart) {
                var _getData2 = this._getData(nextProps),
                    blockTimes = _getData2.blockTimes,
                    colors = _getData2.colors;

                var series = chart.series[0];
                var finalValue = series.xData[series.xData.length - 1];

                if (series.xData.length) {
                    // console.log(chart, "series:", series.data, "finalValue:", finalValue);
                    blockTimes.forEach(function (point) {
                        if (point[0] > finalValue) {
                            series.addPoint(point, false, series.xData.length >= 30);
                        }
                    });

                    chart.options.plotOptions.column.colors = colors;

                    chart.redraw();
                    return false;
                }
            }

            return nextProps.blockTimes[nextProps.blockTimes.length - 1][0] !== this.props.blockTimes[this.props.blockTimes.length - 1][0] || nextProps.blockTimes.length !== this.props.blockTimes.length;
        }
    }, {
        key: "_getData",
        value: function _getData() {
            var _props = this.props,
                blockTimes = _props.blockTimes,
                head_block = _props.head_block;


            blockTimes.filter(function (a) {
                return a[0] >= head_block - 30;
            });

            if (blockTimes && blockTimes.length) {
                blockTimes = Object(lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__["default"])(blockTimes, 30);
            }

            var colors = blockTimes.map(function (entry) {
                if (entry[1] <= 5) {
                    return "#50D2C2";
                } else if (entry[1] <= 10) {
                    return "#A0D3E8";
                } else if (entry[1] <= 20) {
                    return "#FCAB53";
                } else {
                    return "#deb869";
                }
            });

            return {
                blockTimes: blockTimes,
                colors: colors
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _getData3 = this._getData(this.props),
                blockTimes = _getData3.blockTimes,
                colors = _getData3.colors;

            var tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("explorer.blocks.block_time");

            var config = {
                chart: {
                    type: "column",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [0, 0, 5, 0],
                    height: 100
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    formatter: function formatter() {
                        return tooltipLabel + ": " + this.y + "s";
                    }
                },
                series: [{
                    name: "Block time",
                    data: blockTimes,
                    color: "#50D2C2"
                }],
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 0,
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                plotOptions: {
                    column: {
                        animation: true,
                        minPointLength: 3,
                        colorByPoint: true,
                        colors: colors,
                        borderWidth: 0
                    }
                }
            };

            return blockTimes.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_2___default.a, { ref: "chart", config: config }) : null;
        }
    }]);

    return BlocktimeChart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlocktimeChart);

/***/ }),

/***/ 2538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(990);



/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n);
  n = length - n;
  return Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, n < 0 ? 0 : n, length);
}

/* harmony default export */ __webpack_exports__["default"] = (takeRight);


/***/ }),

/***/ 2539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1295);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(711);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2540);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AssetsContainer = function (_React$Component) {
    _inherits(AssetsContainer, _React$Component);

    function AssetsContainer() {
        _classCallCheck(this, AssetsContainer);

        return _possibleConstructorReturn(this, (AssetsContainer.__proto__ || Object.getPrototypeOf(AssetsContainer)).apply(this, arguments));
    }

    _createClass(AssetsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                    stores: [stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"]],
                    inject: {
                        assets: function assets() {
                            return stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().assets;
                        },
                        filterMPA: function filterMPA() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterMPA");
                        },
                        filterUIA: function filterUIA() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterUIA");
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets__WEBPACK_IMPORTED_MODULE_4__["default"], null)
            );
        }
    }]);

    return AssetsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetsContainer);

/***/ }),

/***/ 2540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(729);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1296);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(726);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(524);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1342);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1023);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1006);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1223);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(417);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(568);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(863);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(715);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2541);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(486);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var accountStorage = new common_localStorage__WEBPACK_IMPORTED_MODULE_16__["default"]("__graphene__");

var Assets = function (_React$Component) {
    _inherits(Assets, _React$Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this));

        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_18__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);else chainID = "4018d784";

        _this.state = {
            chainID: chainID,
            foundLast: false,
            lastAsset: "",
            isLoading: false,
            totalAssets: _typeof(accountStorage.get("totalAssets_" + chainID)) != "object" ? accountStorage.get("totalAssets_" + chainID) : chainID && chainID === "4018d784" ? 3000 : 50, // mainnet has 3000+ assets, other chains may not have that many
            assetsFetched: 0,
            activeFilter: "market",
            filterUIA: props.filterUIA || "",
            filterMPA: props.filterMPA || "",
            filterPM: props.filterPM || ""
        };
        return _this;
    }

    _createClass(Assets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_5___default.a.is(nextProps.assets, this.props.assets) || !common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkAssets(this.props.assets, true);
        }
    }, {
        key: "_checkAssets",
        value: function _checkAssets(assets, force) {
            this.setState({ isLoading: true });
            var lastAsset = assets.sort(function (a, b) {
                if (a.symbol > b.symbol) {
                    return 1;
                } else if (a.symbol < b.symbol) {
                    return -1;
                } else {
                    return 0;
                }
            }).last();

            if (assets.size === 0 || force) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer("A", 100);
                this.setState({ assetsFetched: 100 });
            } else if (assets.size >= this.state.assetsFetched) {
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer(lastAsset.symbol, 100);
                this.setState({ assetsFetched: this.state.assetsFetched + 99 });
            }

            if (assets.size > this.state.totalAssets) {
                accountStorage.set("totalAssets_" + this.state.chainID, assets.size);
            }

            if (this.state.assetsFetched >= this.state.totalAssets - 100) {
                this.setState({ isLoading: false });
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.assets !== this.props.assets) {
                this._checkAssets(nextProps.assets);
            }
        }
    }, {
        key: "linkToAccount",
        value: function linkToAccount(name_or_id) {
            if (!name_or_id) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "-"
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__["default"], { account: name_or_id });
        }
    }, {
        key: "_toggleFilter",
        value: function _toggleFilter(filter) {
            this.setState({
                activeFilter: filter
            });
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(type, e) {
            this.setState(_defineProperty({}, type, e.target.value.toUpperCase()));
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeViewSetting(_defineProperty({}, type, e.target.value.toUpperCase()));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var assets = this.props.assets;
            var activeFilter = this.state.activeFilter;


            var placeholder = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("markets.filter").toUpperCase();
            var coreAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAsset("1.3.0");

            var uia = void 0;
            var mia = void 0;
            var pm = void 0;

            if (activeFilter == "user") {
                uia = assets.filter(function (a) {
                    return !a.market_asset && a.symbol.indexOf(_this2.state.filterUIA) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: asset.symbol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                { to: "/asset/" + asset.symbol },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: asset.symbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            _this2.linkToAccount(asset.issuer)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                amount: asset.dynamic.current_supply,
                                asset: asset.id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                {
                                    className: "button outline",
                                    to: "/market/" + marketID
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                            )
                        )
                    );
                }).sort(function (a, b) {
                    if (a.key > b.key) {
                        return 1;
                    } else if (a.key < b.key) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).toArray();
            }

            if (activeFilter == "market") {
                mia = assets.filter(function (a) {
                    return a.bitasset_data && !a.bitasset_data.is_prediction_market && a.symbol.indexOf(_this2.state.filterMPA) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: asset.symbol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                { to: "/asset/" + asset.symbol },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: asset.symbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            _this2.linkToAccount(asset.issuer)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                amount: asset.dynamic.current_supply,
                                asset: asset.id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                {
                                    className: "button outline",
                                    to: "/market/" + marketID
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                            )
                        )
                    );
                }).sort(function (a, b) {
                    if (a.key > b.key) {
                        return 1;
                    } else if (a.key < b.key) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).toArray();
            }

            if (activeFilter == "prediction") {
                pm = assets.filter(function (a) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(a.options.description);

                    return a.bitasset_data && a.bitasset_data.is_prediction_market && (a.symbol.toLowerCase().indexOf(_this2.state.filterPM.toLowerCase()) !== -1 || description.main.toLowerCase().indexOf(_this2.state.filterPM.toLowerCase()) !== -1);
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);
                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: asset.id.split(".")[2] },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { width: "80%" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: { paddingTop: 10, fontWeight: "bold" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                    { to: "/asset/" + asset.symbol },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: asset.symbol })
                                ),
                                description.condition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    " (",
                                    description.condition,
                                    ")"
                                ) : null
                            ),
                            description ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "10px 20px 5px 0",
                                        lineHeight: "18px"
                                    }
                                },
                                description.main
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "0 20px 5px 0",
                                        lineHeight: "18px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__["default"], { account: asset.issuer }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    " ",
                                    "-",
                                    " ",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        amount: asset.dynamic.current_supply,
                                        asset: asset.id
                                    })
                                ),
                                description.expiry ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    " - ",
                                    description.expiry
                                ) : null
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { width: "20%" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                                {
                                    className: "button outline",
                                    to: "/market/" + marketID
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                            )
                        )
                    );
                }).sort(function (a, b) {
                    if (a.key > b.key) {
                        return -1;
                    } else if (a.key < b.key) {
                        return 1;
                    } else {
                        return 0;
                    }
                }).toArray();
            }

            var assetListHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        component: "span",
                        content: "explorer.assets.symbol"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        component: "span",
                        content: "explorer.assets.issuer"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { component: "span", content: "markets.supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null)
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "header-selector" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "selector" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("inline-block", {
                                                inactive: activeFilter != "market"
                                            }),
                                            onClick: this._toggleFilter.bind(this, "market")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.market" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("inline-block", {
                                                inactive: activeFilter != "user"
                                            }),
                                            onClick: this._toggleFilter.bind(this, "user")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.user" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("inline-block", {
                                                inactive: activeFilter != "prediction"
                                            }),
                                            onClick: this._toggleFilter.bind(this, "prediction")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.prediction" })
                                    )
                                )
                            ),
                            this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], null) : null,
                            activeFilter == "market" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block shrink" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { maxWidth: "500px" },
                                        placeholder: placeholder,
                                        type: "text",
                                        value: this.state.filterMPA,
                                        onChange: this._onFilter.bind(this, "filterMPA")
                                    })
                                )
                            ) : null,
                            activeFilter == "market" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    header: assetListHeader,
                                    rows: mia
                                })
                            ) : null,
                            activeFilter == "user" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block shrink" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { maxWidth: "500px" },
                                        placeholder: placeholder,
                                        type: "text",
                                        value: this.state.filterUIA,
                                        onChange: this._onFilter.bind(this, "filterUIA")
                                    })
                                )
                            ) : null,
                            activeFilter == "user" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    header: assetListHeader,
                                    rows: uia
                                })
                            ) : null,
                            activeFilter == "prediction" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block shrink" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { maxWidth: "500px" },
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("markets.search").toUpperCase(),
                                        type: "text",
                                        value: this.state.filterPM,
                                        onChange: this._onFilter.bind(this, "filterPM")
                                    })
                                )
                            ) : null,
                            activeFilter == "prediction" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_17__["default"], { rows: pm, pageSize: 6 })
                            ) : null
                        )
                    )
                )
            );
        }
    }]);

    return Assets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Assets.defaultProps = {
    assets: {}
};

Assets.propTypes = {
    assets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ }),

/***/ 2541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1422);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2434);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PaginatedList = function (_React$Component) {
    _inherits(PaginatedList, _React$Component);

    function PaginatedList(props) {
        _classCallCheck(this, PaginatedList);

        var _this = _possibleConstructorReturn(this, (PaginatedList.__proto__ || Object.getPrototypeOf(PaginatedList)).call(this, props));

        _this.state = {
            page: 1,
            pageSize: props.pageSize
        };
        return _this;
    }

    _createClass(PaginatedList, [{
        key: "onChange",
        value: function onChange(page, pageSize) {
            this.setState({ page: page, pageSize: pageSize });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                page = _state.page,
                pageSize = _state.pageSize;
            var _props = this.props,
                header = _props.header,
                rows = _props.rows,
                extraRow = _props.extraRow;

            var total = rows.length;

            var currentRows = getRows(page, pageSize);

            function getRows(page, pageSize) {
                var r = [];
                for (var i = (page - 1) * pageSize; i < Math.min(total, page * pageSize); i++) {
                    r.push(rows[i]);
                }
                return r;
            }

            /* Paginated too far or filtered out options without changing the page */
            if (!currentRows.length && total) {
                currentRows = getRows(1, pageSize);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: this.props.className },
                    header ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        header
                    ) : null,
                    this.props.withTransition && page === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__["default"],
                        {
                            component: "tbody",
                            transitionName: "newrow"
                        },
                        currentRows,
                        extraRow
                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        currentRows,
                        extraRow
                    )
                ),
                total > pageSize ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
                    style: {
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        paddingLeft: this.props.leftPadding || null
                    },
                    total: total,
                    showTotal: function showTotal(total) {
                        return counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate(_this2.props.label, {
                            count: total
                        });
                    },
                    pageSize: pageSize,
                    current: page,
                    onChange: this.onChange.bind(this)
                }) : null,
                this.props.children
            );
        }
    }]);

    return PaginatedList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PaginatedList.defaultProps = {
    rows: [],
    pageSize: 15,
    label: "utility.total_x_items",
    className: "table",
    extraRow: null,
    style: { paddingBottom: "1rem" }
};
/* harmony default export */ __webpack_exports__["default"] = (PaginatedList);

/***/ }),

/***/ 2542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(550);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2543);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AccountsContainer = function (_React$Component) {
    _inherits(AccountsContainer, _React$Component);

    function AccountsContainer() {
        _classCallCheck(this, AccountsContainer);

        return _possibleConstructorReturn(this, (AccountsContainer.__proto__ || Object.getPrototypeOf(AccountsContainer)).apply(this, arguments));
    }

    _createClass(AccountsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        searchAccounts: function searchAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchAccounts;
                        },
                        searchTerm: function searchTerm() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchTerm;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accounts__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return AccountsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AccountsContainer);

/***/ }),

/***/ 2543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(729);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(726);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(524);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(566);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(877);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(784);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(878);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1238);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(550);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(770);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(863);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2541);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var AccountRow = function (_React$Component) {
    _inherits(AccountRow, _React$Component);

    function AccountRow() {
        _classCallCheck(this, AccountRow);

        return _possibleConstructorReturn(this, (AccountRow.__proto__ || Object.getPrototypeOf(AccountRow)).apply(this, arguments));
    }

    _createClass(AccountRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.contacts !== this.props.contacts || nextProps.account !== this.props.account;
        }
    }, {
        key: "_onAddContact",
        value: function _onAddContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].addAccountContact(account);
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeAccountContact(account);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                contacts = _props.contacts;


            if (!account) return null;
            var balance = account.getIn(["balances", "1.3.0"]) || null;
            var accountName = account.get("name");

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "tr",
                { key: account.get("id") },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    account.get("id")
                ),
                contacts.has(accountName) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { onClick: this._onRemoveContact.bind(this, accountName) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        name: "minus-circle",
                        title: "icons.minus_circle.remove_contact"
                    })
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    { onClick: this._onAddContact.bind(this, accountName) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        name: "plus-circle",
                        title: "icons.plus_circle.add_contact"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                        { to: "/account/" + accountName + "/overview" },
                        accountName
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__["default"], { balance: balance })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "td",
                    null,
                    !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        balance: balance,
                        asPercentage: true
                    })
                )
            );
        }
    }]);

    return AccountRow;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AccountRow.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount.isRequired
};
AccountRow.defaultProps = {
    tempComponent: "tr",
    autosubscribe: false
};

AccountRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountRow);

var AccountRowWrapper = function AccountRowWrapper(props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountRow, props);
};

AccountRowWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_12__["connect"])(AccountRowWrapper, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            contacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().accountContacts
        };
    }
});

var Accounts = function (_React$Component2) {
    _inherits(Accounts, _React$Component2);

    function Accounts(props) {
        _classCallCheck(this, Accounts);

        var _this2 = _possibleConstructorReturn(this, (Accounts.__proto__ || Object.getPrototypeOf(Accounts)).call(this));

        _this2.state = {
            searchTerm: props.searchTerm,
            isLoading: false
        };

        _this2._searchAccounts = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2._searchAccounts, 200);
        return _this2;
    }

    _createClass(Accounts, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.searchAccounts, this.props.searchAccounts) || nextState.searchTerm !== this.state.searchTerm || nextState.isLoading !== this.state.isLoading;
        }
    }, {
        key: "_onSearchChange",
        value: function _onSearchChange(e) {
            this.setState({
                searchTerm: e.target.value.toLowerCase(),
                isLoading: true
            });
            this._searchAccounts(e.target.value);
        }
    }, {
        key: "_searchAccounts",
        value: function _searchAccounts(searchTerm) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].accountSearch(searchTerm);
            this.setState({ isLoading: false });
        }
    }, {
        key: "render",
        value: function render() {
            var searchAccounts = this.props.searchAccounts;
            var searchTerm = this.state.searchTerm;

            var accountRows = [];

            if (searchAccounts.size > 0 && searchTerm && searchTerm.length > 0) {
                accountRows = searchAccounts.filter(function (a) {
                    /*
                    * This appears to return false negatives, perhaps from
                    * changed account name rules when moving to graphene?. Either
                    * way, trying to resolve invalid names fails in the ChainStore,
                    * which in turn breaks the BindToChainState wrapper
                    */
                    // if (!ChainValidation.is_account_name(a, true)) {
                    //     return false;
                    // }
                    return a.indexOf(searchTerm) !== -1;
                }).sort(function (a, b) {
                    if (a > b) {
                        return 1;
                    } else if (a < b) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).map(function (account, id) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountRowWrapper, { key: id, account: account });
                }).toArray();
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical medium-6 medium-offset-3" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-content shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            component: "h3",
                            content: "explorer.accounts.title"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            value: this.state.searchTerm,
                            onChange: this._onSearchChange.bind(this)
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "explorer.assets.id"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    name: "user",
                                    title: "icons.user.account"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "account.name"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "gateway.balance"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "account.percent"
                                })
                            )
                        ),
                        rows: accountRows,
                        pageSize: 20
                    }),
                    this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { textAlign: "center", padding: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "three-bounce" })
                    ) : null
                )
            );
        }
    }]);

    return Accounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Accounts.defaultProps = {
    searchAccounts: {}
};

Accounts.propTypes = {
    searchAccounts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Accounts);

/***/ }),

/***/ 2544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1273);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1295);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(711);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2545);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MarketsContainer = function (_React$Component) {
    _inherits(MarketsContainer, _React$Component);

    function MarketsContainer() {
        _classCallCheck(this, MarketsContainer);

        return _possibleConstructorReturn(this, (MarketsContainer.__proto__ || Object.getPrototypeOf(MarketsContainer)).apply(this, arguments));
    }

    _createClass(MarketsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_4___default.a,
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        starredMarkets: function starredMarkets() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
                        },
                        lookupResults: function lookupResults() {
                            return stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().lookupResults;
                        },
                        marketBase: function marketBase() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketBase;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_5__["default"], null)
            );
        }
    }]);

    return MarketsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MarketsContainer);

/***/ }),

/***/ 2545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2460);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Markets = function (_React$Component) {
    _inherits(Markets, _React$Component);

    function Markets() {
        _classCallCheck(this, Markets);

        var _this = _possibleConstructorReturn(this, (Markets.__proto__ || Object.getPrototypeOf(Markets)).call(this));

        _this.state = {
            height: null
        };

        _this._setDimensions = _this._setDimensions.bind(_this);
        return _this;
    }

    _createClass(Markets, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var height = this.refs.wrapper.offsetHeight;

            if (height !== this.state.height) {
                this.setState({ height: height });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block page-layout no-overflow" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    style: { width: "100%", padding: 20 },
                    listHeight: this.state.height ? this.state.height - 82 : null,
                    className: "no-overflow",
                    headerStyle: { paddingTop: 0, borderTop: "none" },
                    columns: [{ name: "star", index: 1 }, { name: "market", index: 2 }, { name: "quoteSupply", index: 3 }, { name: "vol", index: 4 }, { name: "price", index: 5 }, { name: "change", index: 6 }]
                })
            );
        }
    }]);

    return Markets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Markets);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuYWIxY2Y5ZDI4Y2E2NWRjYjM1NTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9XaXRuZXNzZXMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL3dpdG5lc3Nlcy5zY3NzPzBlM2QiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0NvbW1pdHRlZU1lbWJlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3NDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvVHJhbnNhY3Rpb25DaGFydC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Jsb2NrdGltZUNoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Rha2VSaWdodC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQWNjb3VudHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9BY2NvdW50cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IFdpdG5lc3NlcyBmcm9tIFwiLi9XaXRuZXNzZXNcIjtcbmltcG9ydCBDb21taXR0ZWVNZW1iZXJzIGZyb20gXCIuL0NvbW1pdHRlZU1lbWJlcnNcIjtcbmltcG9ydCBGZWVzQ29udGFpbmVyIGZyb20gXCIuLi9CbG9ja2NoYWluL0ZlZXNDb250YWluZXJcIjtcbmltcG9ydCBCbG9ja3NDb250YWluZXIgZnJvbSBcIi4vQmxvY2tzQ29udGFpbmVyXCI7XG5pbXBvcnQgQXNzZXRzQ29udGFpbmVyIGZyb20gXCIuL0Fzc2V0c0NvbnRhaW5lclwiO1xuaW1wb3J0IEFjY291bnRzQ29udGFpbmVyIGZyb20gXCIuL0FjY291bnRzQ29udGFpbmVyXCI7XG5pbXBvcnQgTWFya2V0c0NvbnRhaW5lciBmcm9tIFwiLi4vRXhjaGFuZ2UvTWFya2V0c0NvbnRhaW5lclwiO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJsb2Nrc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9ibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLmJsb2Nrcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBCbG9ja3NDb250YWluZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhc3NldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYXNzZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5hc3NldHMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQXNzZXRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWNjb3VudHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYWNjb3VudHNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLmFjY291bnRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEFjY291bnRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwid2l0bmVzc2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL3dpdG5lc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIud2l0bmVzc2VzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFdpdG5lc3Nlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbW1pdHRlZV9tZW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2NvbW1pdHRlZS1tZW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5jb21taXR0ZWVfbWVtYmVycy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBDb21taXR0ZWVNZW1iZXJzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9tYXJrZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJtYXJrZXRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IE1hcmtldHNDb250YWluZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2ZlZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImZlZXMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogRmVlc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7dGFifSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICBsZXQgZGVmYXVsdEFjdGl2ZVRhYiA9IHRoaXMuc3RhdGUudGFicy5maW5kSW5kZXgodCA9PiB0Lm5hbWUgPT09IHRhYik7XG5cbiAgICAgICAgbGV0IHRhYnMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSB0aGlzLnN0YXRlLnRhYnNbaV07XG5cbiAgICAgICAgICAgIGxldCBUYWJDb250ZW50ID0gY3VycmVudFRhYi5jb250ZW50O1xuICAgICAgICAgICAgbGV0IGlzTGlua1RvID0gZGVmYXVsdEFjdGl2ZVRhYiA9PSBpID8gXCJcIiA6IGN1cnJlbnRUYWIubGluaztcblxuICAgICAgICAgICAgdGFicy5wdXNoKFxuICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpfSB0aXRsZT17Y3VycmVudFRhYi50cmFuc2xhdGV9IGlzTGlua1RvPXtpc0xpbmtUb30+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYj17ZGVmYXVsdEFjdGl2ZVRhYn1cbiAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHNldHRpbmc9XCJleHBsb3Jlci10YWJzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzcz1cInRhYi1jb250ZW50IGV4cGxvcmVyLXRhYi1jb250ZW50IHBhZGRpbmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWJzfVxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZXI7XG4iLCJpbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1RhYmxlLCBJY29uLCBJbnB1dCwgUG9wb3Zlcn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5yZXF1aXJlKFwiLi93aXRuZXNzZXMuc2Nzc1wiKTtcblxuY2xhc3MgV2l0bmVzc0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHdpdG5lc3M6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgX29uQ2FyZENsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHt0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwibmFtZVwiKX1gKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB3aXRuZXNzX2RhdGEgPSBDaGFpblN0b3JlLmdldFdpdG5lc3NCeUlkKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aXRuZXNzLmdldChcImlkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGlmICghd2l0bmVzc19kYXRhKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IHRvdGFsX3ZvdGVzID0gd2l0bmVzc19kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpO1xuXG4gICAgICAgIGxldCB3aXRuZXNzX2FzbG90ID0gd2l0bmVzc19kYXRhLmdldChcImxhc3RfYXNsb3RcIik7XG4gICAgICAgIGxldCBjb2xvciA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb3N0X3JlY2VudCAtIHdpdG5lc3NfYXNsb3QgPiAxMDApIHtcbiAgICAgICAgICAgIGNvbG9yID0ge2JvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNGQ0FCNTNcIn07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xvciA9IHtib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjNTBEMkMyXCJ9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0X2FzbG90X3RpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIERhdGUubm93KCkgLVxuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1vc3RfcmVjZW50IC0gd2l0bmVzc19hc2xvdCkgKlxuICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldE9iamVjdChcIjIuMC4wXCIpLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9ja19pbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgICAgIF0pICpcbiAgICAgICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IGFjY291bnQtY2FyZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DYXJkQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17Y29sb3J9PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICN7dGhpcy5wcm9wcy5yYW5rfToge3RoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy53aXRuZXNzLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3toZWlnaHQ6IDY0LCB3aWR0aDogNjR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvdGVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0b3RhbF92b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MYXN0Jm5ic3A7QmxvY2s8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e25ldyBEYXRlKGxhc3RfYXNsb3RfdGltZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NaXNzZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfbWlzc2VkXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2l0bmVzc0NhcmQgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NDYXJkKTtcbldpdG5lc3NDYXJkID0gd2l0aFJvdXRlcihXaXRuZXNzQ2FyZCk7XG5cbmNsYXNzIFdpdG5lc3NSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHdpdG5lc3M6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgX29uUm93Q2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYWNjb3VudC8ke3RoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJuYW1lXCIpfWApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vICAgICBDaGFpblN0b3JlLnVuU3ViRnJvbShcIndpdG5lc3Nlc1wiLCBDaGFpblN0b3JlLmdldFdpdG5lc3NCeUlkKCB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwiaWRcIikgKS5nZXQoXCJpZFwiKSk7XG4gICAgLy8gfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdG5lc3MsIGlzQ3VycmVudCwgcmFua30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJpZFwiKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXdpdG5lc3NfZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCB0b3RhbF92b3RlcyA9IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKTtcblxuICAgICAgICBsZXQgd2l0bmVzc19hc2xvdCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2FzbG90XCIpO1xuICAgICAgICBsZXQgY29sb3IgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9zdF9yZWNlbnQgLSB3aXRuZXNzX2FzbG90ID4gMTAwKSB7XG4gICAgICAgICAgICBjb2xvciA9IHtib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjRkNBQjUzXCJ9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSB7Ym9yZGVyTGVmdDogXCIxcHggc29saWQgIzUwRDJDMlwifTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdF9hc2xvdF90aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tb3N0X3JlY2VudCAtIHdpdG5lc3NfYXNsb3QpICpcbiAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjAuMFwiKS5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2tfaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgICAgICBdKSAqXG4gICAgICAgICAgICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudENsYXNzID0gaXNDdXJyZW50ID8gXCJhY3RpdmUtd2l0bmVzc1wiIDogXCJcIjtcblxuICAgICAgICBsZXQgbWlzc2VkID0gd2l0bmVzc19kYXRhLmdldChcInRvdGFsX21pc3NlZFwiKTtcbiAgICAgICAgbGV0IG1pc3NlZENsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgIHtzdWNjZXNzOiBtaXNzZWQgPD0gNTAwfSxcbiAgICAgICAgICAgIHtpbmZvOiBtaXNzZWQgPiA1MDAgJiYgbWlzc2VkIDw9IDEyNTB9LFxuICAgICAgICAgICAge3dhcm5pbmc6IG1pc3NlZCA+IDEyNTAgJiYgbWlzc2VkIDw9IDIwMDB9LFxuICAgICAgICAgICAge2Vycm9yOiBtaXNzZWQgPj0gMjAwfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjdXJyZW50Q2xhc3N9IG9uQ2xpY2s9e3RoaXMuX29uUm93Q2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPHRkPntyYW5rfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb2xvcn0+e3dpdG5lc3MuZ2V0KFwibmFtZVwiKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17bmV3IERhdGUobGFzdF9hc2xvdF90aW1lKX0gLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57d2l0bmVzc19kYXRhLmdldChcImxhc3RfY29uZmlybWVkX2Jsb2NrX251bVwiKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e21pc3NlZENsYXNzfT57bWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17d2l0bmVzc19kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cbldpdG5lc3NSb3cgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NSb3cpO1xuV2l0bmVzc1JvdyA9IHdpdGhSb3V0ZXIoV2l0bmVzc1Jvdyk7XG5cbmNsYXNzIFdpdG5lc3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB3aXRuZXNzZXM6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc29ydEJ5OiBcInJhbmtcIixcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2sgPSB0aGlzLmhhbmRsZUJsb2NrSWRDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zZXRTb3J0KGZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc29ydEJ5OiBmaWVsZCxcbiAgICAgICAgICAgIGludmVyc2VTb3J0OlxuICAgICAgICAgICAgICAgIGZpZWxkID09PSB0aGlzLnN0YXRlLnNvcnRCeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVCbG9ja0lkQ2xpY2soYmxvY2tJZCkge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9ibG9jay8ke2Jsb2NrSWR9YCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdG5lc3NlcywgY3VycmVudCwgY2FyZFZpZXcsIHdpdG5lc3NMaXN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c29ydEJ5LCBpbnZlcnNlU29ydH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgbW9zdF9yZWNlbnRfYXNsb3QgPSAwO1xuICAgICAgICBsZXQgcmFua3MgPSB7fTtcblxuICAgICAgICB3aXRuZXNzZXNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdG5lc3NMaXN0LmluZGV4T2YoYS5nZXQoXCJpZFwiKSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYi5nZXQoXCJ0b3RhbF92b3Rlc1wiKSwgMTApIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGEuZ2V0KFwidG90YWxfdm90ZXNcIiksIDEwKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaCgodywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHcuZ2V0KFwibGFzdF9hc2xvdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vc3RfcmVjZW50X2FzbG90IDwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdF9yZWNlbnRfYXNsb3QgPSBzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmFua3Nbdy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcbiAgICAgICAgaWYgKHdpdG5lc3Nlcy5sZW5ndGggPiAwICYmIHdpdG5lc3Nlc1sxXSkge1xuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHdpdG5lc3Nlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRuZXNzID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpdG5lc3MpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aXRuZXNzX2RhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHdpdG5lc3MuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdG5lc3MgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzc19hc2xvdCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2FzbG90XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X2FzbG90X3RpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmN1cnJlbnRfYXNsb3QgLSB3aXRuZXNzX2FzbG90KSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrX2ludGVydmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB3aXRuZXNzLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiByYW5rc1thLmdldChcImlkXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHdpdG5lc3MuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pbmdfa2V5OiB3aXRuZXNzX2RhdGEuZ2V0KFwic2lnbmluZ19rZXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHdpdG5lc3NfZGF0YS5nZXQoXCJ1cmxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q29uZmlybWVkQmxvY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogd2l0bmVzc19kYXRhLmdldChcImxhc3RfY29uZmlybWVkX2Jsb2NrX251bVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGxhc3RfYXNsb3RfdGltZS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NNaXNzZWQ6IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF9taXNzZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3Rlczogd2l0bmVzc19kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxWYWxpZCA9IGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3Kik/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiUhXFwtXFwvXSkpPy87XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdChpdGVtKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1cmxSZW5kZXIgPSBpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcImhvdmVyXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibGlua1wiIC8+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBrZXlSZW5kZXIgPSBpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgY29udGVudD17PHNwYW4+e2l0ZW19PC9zcGFuPn0gdHJpZ2dlcj17XCJob3ZlclwifT5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCIjXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJyYW5rXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5yYW5rID4gYi5yYW5rID8gMSA6IGEucmFuayA8IGIucmFuayA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTkFNRVwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IGEubmFtZSA8IGIubmFtZSA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVUkxcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGl0ZW0gJiYgdXJsVmFsaWQoaXRlbSkgJiYgdXJsUmVuZGVyKGl0ZW0pKSB8fCBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJsYXN0Q29uZmlybWVkQmxvY2tcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMQVNUIENPTkZJUk1FRCBCTE9DS1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJsYXN0Q29uZmlybWVkQmxvY2tcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtaW5XaWR0aDogXCIxMDBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJsb2NrSWRDbGljayhpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAje051bWJlcihpdGVtLmlkKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvIHRpbWU9e25ldyBEYXRlKGl0ZW0udGltZXN0YW1wKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGIubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXAgPFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmxvY2tzTWlzc2VkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQkxPQ0tTIE1JU1NFRFwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJibG9ja3NNaXNzZWRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja3NNaXNzZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eHRsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge3N1Y2Nlc3M6IGl0ZW0gPD0gNTAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvOiBpdGVtID4gNTAwICYmIGl0ZW0gPD0gMTI1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7d2FybmluZzogaXRlbSA+IDEyNTAgJiYgaXRlbSA8PSAyMDAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcjogaXRlbSA+PSAyMDB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Jsb2Nrc01pc3NlZENsYXNzTmFtZX0+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5ibG9ja3NNaXNzZWQgPiBiLmJsb2Nrc01pc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuYmxvY2tzTWlzc2VkIDwgYi5ibG9ja3NNaXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVk9URVNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidm90ZXNcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudm90ZXMgPiBiLnZvdGVzID8gMSA6IGEudm90ZXMgPCBiLnZvdGVzID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImtleVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIktFWVwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzaWduaW5nX2tleVwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHdpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2tleVJlbmRlcihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGdldFJvd0NsYXNzTmFtZSA9IHJlY29yZCA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLmlkID09PSBjdXJyZW50KSByZXR1cm4gXCJhY3RpdmUtd2l0bmVzc1wiO1xuXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPXtnZXRSb3dDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XaXRuZXNzTGlzdCA9IEJpbmRUb0NoYWluU3RhdGUoV2l0bmVzc0xpc3QsIHtcbiAgICBzaG93X2xvYWRlcjogdHJ1ZVxufSk7XG5XaXRuZXNzTGlzdCA9IHdpdGhSb3V0ZXIoV2l0bmVzc0xpc3QpO1xuXG5jbGFzcyBXaXRuZXNzZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIixcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBcIjIuMS4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJXaXRuZXNzOiBwcm9wcy5maWx0ZXJXaXRuZXNzIHx8IFwiXCIsXG4gICAgICAgICAgICBjYXJkVmlldzogcHJvcHMuY2FyZFZpZXdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfb25GaWx0ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcldpdG5lc3M6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlVmlldygpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGNhcmRWaWV3OiAhdGhpcy5zdGF0ZS5jYXJkVmlld1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhcmRWaWV3OiAhdGhpcy5zdGF0ZS5jYXJkVmlld1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZHluR2xvYmFsT2JqZWN0LCBnbG9iYWxPYmplY3R9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0ID0gZHluR2xvYmFsT2JqZWN0LnRvSlMoKTtcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gZ2xvYmFsT2JqZWN0LnRvSlMoKTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGR5bkdsb2JhbE9iamVjdC5jdXJyZW50X3dpdG5lc3MpLFxuICAgICAgICAgICAgY3VycmVudEFjY291bnQgPSBudWxsO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgY3VycmVudEFjY291bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICBjdXJyZW50LmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxvcmUtd2l0bmVzcy0taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMuY3VycmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hY3RpdmVfd2l0bmVzc2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLnBhcnRpY2lwYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMucGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLmJ1ZGdldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5uZXh0X3ZvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50QWNjb3VudC5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfd2l0bmVzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bkdsb2JhbE9iamVjdC5wYXJ0aWNpcGF0aW9ufSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LnBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRuZXNzX3BheV9wZXJfYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3Qud2l0bmVzc19idWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdC5uZXh0X21haW50ZW5hbmNlX3RpbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLndpdG5lc3Nlcy5maWx0ZXJfYnlfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0bmVzc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc2xvdD17ZHluR2xvYmFsT2JqZWN0LmN1cnJlbnRfYXNsb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnQgPyBjdXJyZW50LmdldChcImlkXCIpIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0bmVzc2VzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfd2l0bmVzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3NMaXN0PXtnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcldpdG5lc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRWaWV3PXt0aGlzLnN0YXRlLmNhcmRWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XaXRuZXNzZXMgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3Nlcyk7XG5cbmNsYXNzIFdpdG5lc3NTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxXaXRuZXNzZXMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuV2l0bmVzc1N0b3JlV3JhcHBlciA9IGNvbm5lY3QoXG4gICAgV2l0bmVzc1N0b3JlV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRWaWV3OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcImNhcmRWaWV3XCIpLFxuICAgICAgICAgICAgICAgIGZpbHRlcldpdG5lc3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImZpbHRlcldpdG5lc3NcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRuZXNzU3RvcmVXcmFwcGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7SWNvbiwgSW5wdXQsIFRhYmxlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIENvbW1pdHRlZU1lbWJlckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y29tbWl0dGVlX21lbWJlcnMsIG1lbWJlcnNMaXN0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBudWxsO1xuXG4gICAgICAgIGxldCByYW5rcyA9IHt9O1xuXG4gICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXJzTGlzdC5pbmRleE9mKGEuZ2V0KFwiaWRcIikpICE9PSAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICByYW5rc1tjLmdldChcImlkXCIpXSA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29tbWl0dGVlX21lbWJlcnMubGVuZ3RoID4gMCAmJiBjb21taXR0ZWVfbWVtYmVyc1sxXSkge1xuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IGNvbW1pdHRlZV9tZW1iZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiY29tbWl0dGVlX21lbWJlcl9hY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfZGF0YSA9IENoYWluU3RvcmUuZ2V0Q29tbWl0dGVlTWVtYmVyQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRfZGF0YSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcIm5hbWVcIikuaW5kZXhPZih0aGlzLnByb3BzLmZpbHRlciB8fCBcIlwiKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJjb21taXR0ZWVfbWVtYmVyX2FjY291bnRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9kYXRhID0gQ2hhaW5TdG9yZS5nZXRDb21taXR0ZWVNZW1iZXJCeUlkKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGEuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiByYW5rc1thLmdldChcImlkXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzOiBhY2NvdW50X2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFjY291bnRfZGF0YS5nZXQoXCJ1cmxcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIiNcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInJhbmtcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJhbmsgPiBiLnJhbmsgPyAxIDogYS5yYW5rIDwgYi5yYW5rID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJOQU1FXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVk9URVNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidm90ZXNcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudm90ZXMgPiBiLnZvdGVzID8gMSA6IGEudm90ZXMgPCBiLnZvdGVzID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInVybFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldFQlBBR0VcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5Db21taXR0ZWVNZW1iZXJMaXN0ID0gQmluZFRvQ2hhaW5TdGF0ZShDb21taXR0ZWVNZW1iZXJMaXN0LCB7XG4gICAgc2hvd19sb2FkZXI6IHRydWVcbn0pO1xuXG5jbGFzcyBDb21taXR0ZWVNZW1iZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IHByb3BzLmZpbHRlckNvbW1pdHRlZU1lbWJlciB8fCBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5nbG9iYWxPYmplY3QsIHRoaXMucHJvcHMuZ2xvYmFsT2JqZWN0KSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlciAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlciB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmNhcmRWaWV3ICE9PSB0aGlzLnN0YXRlLmNhcmRWaWV3XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtnbG9iYWxPYmplY3R9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gZ2xvYmFsT2JqZWN0LnRvSlMoKTtcblxuICAgICAgICBsZXQgYWN0aXZlQ29tbWl0dGVlTWVtYmVycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVycykge1xuICAgICAgICAgICAgaWYgKGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbW1pdHRlZU1lbWJlcnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1trZXldXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21taXR0ZWVNZW1iZXJMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJDb21taXR0ZWVNZW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyc0xpc3Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbkNvbW1pdHRlZU1lbWJlcnMgPSBCaW5kVG9DaGFpblN0YXRlKENvbW1pdHRlZU1lbWJlcnMpO1xuXG5jbGFzcyBDb21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q29tbWl0dGVlTWVtYmVycyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5Db21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyID0gY29ubmVjdChcbiAgICBDb21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZFZpZXc6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImNhcmRWaWV3Q29tbWl0dGVlXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyQ29tbWl0dGVlTWVtYmVyXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWl0dGVlTWVtYmVyc1N0b3JlV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEZlZXMgZnJvbSBcIi4vRmVlc1wiO1xuXG5jbGFzcyBGZWVzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbU2V0dGluZ3NTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3NcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGZWVzIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCB7RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50fSBmcm9tIFwiLi4vVXRpbGl0eS9FcXVpdmFsZW50VmFsdWVDb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZSwgQ2hhaW5UeXBlcyBhcyBncmFwaGVuZUNoYWluVHlwZXN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xubGV0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xuXG4vLyBEZWZpbmUgZ3JvdXBzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiBpZHNcbmxldCBmZWVfZ3JvdXBpbmcgPSB7XG4gICAgZ2VuZXJhbDogWzAsIDI1LCAyNiwgMjcsIDI4LCAzMiwgMzMsIDM3LCAzOSwgNDAsIDQxXSxcbiAgICBhc3NldDogWzEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAzOCwgNDIsIDQzLCA0NCwgNDcsIDQ4XSxcbiAgICBtYXJrZXQ6IFsxLCAyLCAzLCA0LCA0NSwgNDZdLFxuICAgIGFjY291bnQ6IFs1LCA2LCA3LCA4LCA5XSxcbiAgICBidXNpbmVzczogWzIwLCAyMSwgMjIsIDIzLCAyNCwgMjksIDMwLCAzMSwgMzQsIDM1LCAzNl1cbn07XG5cbi8vIE9wZXJhdGlvbnMgdGhhdCByZXF1aXJlIExUTVxubGV0IGx0bV9yZXF1aXJlZCA9IFs1LCA3LCAyMCwgMjEsIDM0XTtcblxuY2xhc3MgRmVlR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5nbG9iYWxPYmplY3QsIHRoaXMucHJvcHMuZ2xvYmFsT2JqZWN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Z2xvYmFsT2JqZWN0LCBzZXR0aW5ncywgb3BJZHMsIHRpdGxlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTT04oKTtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKTtcblxuICAgICAgICBsZXQgY3VycmVudF9mZWVzID0gZ2xvYmFsT2JqZWN0LnBhcmFtZXRlcnMuY3VycmVudF9mZWVzO1xuICAgICAgICBsZXQgbmV0d29ya19mZWUgPSBnbG9iYWxPYmplY3QucGFyYW1ldGVycy5uZXR3b3JrX3BlcmNlbnRfb2ZfZmVlIC8gMWU0O1xuICAgICAgICBsZXQgc2NhbGUgPSBjdXJyZW50X2ZlZXMuc2NhbGU7XG4gICAgICAgIGxldCBmZWVzUmF3ID0gY3VycmVudF9mZWVzLnBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBwcmVmZXJyZWRVbml0ID0gc2V0dGluZ3MuZ2V0KFwidW5pdFwiKSB8fCBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBsZXQgdHJ4VHlwZXMgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi50cnhUeXBlc1wiKTtcblxuICAgICAgICBsZXQgZmVlcyA9IG9wSWRzLm1hcChvcElEID0+IHtcbiAgICAgICAgICAgIGxldCBmZWVJZHggPSBmZWVzUmF3LmZpbmRJbmRleChmID0+IGZbMF0gPT09IG9wSUQpO1xuICAgICAgICAgICAgaWYgKGZlZUlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIFwiQXNraW5nIGZvciBub24tZXhpc3RpbmcgZmVlIGlkICVkISBDaGVjayBncm91cCBzZXR0aW5ncyBpbiBGZWVzLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICBvcElEXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEZJWE1FLCBpZiBJIGFzayBmb3IgYSBmZWUgdGhhdCBkb2VzIG5vdCBleGlzdD9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZlZVN0cnVjdCA9IGZlZXNSYXdbZmVlSWR4XTtcblxuICAgICAgICAgICAgbGV0IG9wSWQgPSBmZWVTdHJ1Y3RbMF07XG4gICAgICAgICAgICBsZXQgZmVlID0gZmVlU3RydWN0WzFdO1xuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbl9uYW1lID0gb3BzW29wSWRdO1xuICAgICAgICAgICAgbGV0IGZlZW5hbWUgPSB0cnhUeXBlc1tvcGVyYXRpb25fbmFtZV07XG5cbiAgICAgICAgICAgIGxldCBmZWVSYXRlRm9yTFRNID0gbmV0d29ya19mZWU7XG4gICAgICAgICAgICBpZiAob3BJZCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JpdHNoYXJlcy9iaXRzaGFyZXMtdWkvaXNzdWVzLzk5NlxuICAgICAgICAgICAgICAgIGZlZVJhdGVGb3JMVE0gPSAwLjUgKyAwLjUgKiBuZXR3b3JrX2ZlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGxldCBoZWFkSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBsYWJlbENsYXNzID0gY2xhc3NOYW1lcyhcImxhYmVsXCIsIFwiaW5mb1wiKTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGZlZSkge1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSAoZmVlW2tleV0gKiBzY2FsZSkgLyAxZTQ7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudEZvckxUTSA9IGFtb3VudCAqIGZlZVJhdGVGb3JMVE07XG4gICAgICAgICAgICAgICAgbGV0IGZlZVR5cGVzID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24uZmVlVHlwZXNcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0QW1vdW50ID0gYW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXthbW91bnR9IGFzc2V0PVwiMS4zLjBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBlcXVpdmFsZW50QW1vdW50ID0gYW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsUHJlY2lzaW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Fzc2V0PXtwcmVmZXJyZWRVbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbERlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldEFtb3VudExUTSA9IGFtb3VudEZvckxUTSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YW1vdW50Rm9yTFRNfSBhc3NldD1cIjEuMy4wXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXF1aXZhbGVudEFtb3VudExUTSA9IGFtb3VudEZvckxUTSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFByZWNpc2lvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50Rm9yTFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkSW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZEluY2x1ZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93U3Bhbj1cIjZcIiBzdHlsZT17e3dpZHRoOiBcIjE1ZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFiZWxDbGFzc30+e2ZlZW5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobHRtX3JlcXVpcmVkLmluZGV4T2Yob3BJZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3BJZC50b1N0cmluZygpICsga2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW2tleV0gPT09IFwiQW5udWFsIE1lbWJlcnNoaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpbmV0aHJvdWdoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVUeXBlc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50ICE9PSAwICYmIHByZWZlcnJlZFVuaXQgIT09IFwiQlRTXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VxdWl2YWxlbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCA/IGFzc2V0QW1vdW50TFRNIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQgIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkVW5pdCAhPT0gXCJCVFNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17b3BJZC50b1N0cmluZygpICsga2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVUeXBlc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSA8c3VwPio8L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudCAhPT0gMCAmJiBwcmVmZXJyZWRVbml0ICE9PSBcIkJUU1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7LyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcXVpdmFsZW50QW1vdW50TFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPHRib2R5IGtleT17ZmVlSWR4fT57cm93c308L3Rib2R5PjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZpZGVyXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJleHBsb3Jlci5ibG9jay5vcFwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy50eXBlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy5mZWVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJleHBsb3Jlci5mZWVzLmZlZWx0bVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICB7ZmVlc31cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuRmVlR3JvdXAgPSBCaW5kVG9DaGFpblN0YXRlKEZlZUdyb3VwKTtcblxuY2xhc3MgRmVlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgRmVlR3JvdXBzVGl0bGUgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi5mZWVHcm91cHNcIik7XG4gICAgICAgIGxldCBmZWVHcm91cHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBncm91cE5hbWUgaW4gZmVlX2dyb3VwaW5nKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBOYW1lVGV4dCA9IEZlZUdyb3Vwc1RpdGxlW2dyb3VwTmFtZV07XG4gICAgICAgICAgICBsZXQgZmVlSWRzID0gZmVlX2dyb3VwaW5nW2dyb3VwTmFtZV07XG4gICAgICAgICAgICBmZWVHcm91cHMucHVzaChcbiAgICAgICAgICAgICAgICA8RmVlR3JvdXBcbiAgICAgICAgICAgICAgICAgICAga2V5PXtncm91cE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnByb3BzLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBvcElkcz17ZmVlSWRzfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Z3JvdXBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIiBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBzaHJpbmtcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnQgcGF0aD17XCJjb21wb25lbnRzL0ZlZXNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj57ZmVlR3JvdXBzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrY2hhaW5TdG9yZSBmcm9tIFwic3RvcmVzL0Jsb2NrY2hhaW5TdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEJsb2NrcyBmcm9tIFwiLi9CbG9ja3NcIjtcblxuY2xhc3MgQmxvY2tzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQmxvY2tjaGFpblN0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0QmxvY2tzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkubGF0ZXN0QmxvY2tzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYXRlc3RUcmFuc2FjdGlvbnM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU3RvcmUuZ2V0U3RhdGUoKS5sYXRlc3RUcmFuc2FjdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCbG9ja3MgLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJsb2NrY2hhaW5BY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Jsb2NrY2hhaW5BY3Rpb25zXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvcm1hdHRlZERhdGV9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuLi9CbG9ja2NoYWluL09wZXJhdGlvblwiO1xuaW1wb3J0IExpbmtUb1dpdG5lc3NCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uQ2hhcnQgZnJvbSBcIi4vVHJhbnNhY3Rpb25DaGFydFwiO1xuaW1wb3J0IEJsb2NrdGltZUNoYXJ0IGZyb20gXCIuL0Jsb2NrdGltZUNoYXJ0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcIi4uL1V0aWxpdHkvVGltZUFnb1wiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcblxucmVxdWlyZShcIi4uL0Jsb2NrY2hhaW4vanNvbi1pbnNwZWN0b3Iuc2Nzc1wiKTtcblxuY2xhc3MgQmxvY2tUaW1lQWdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHMuYmxvY2tUaW1lICE9PSB0aGlzLnByb3BzLmJsb2NrVGltZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YmxvY2tUaW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gbGV0IHRpbWVQYXNzZWQgPSBEYXRlLm5vdygpIC0gYmxvY2tUaW1lO1xuICAgICAgICBsZXQgdGltZVBhc3NlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYmxvY2tUaW1lKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgbGV0IHRleHRDbGFzcyA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICBcInR4dGxhYmVsXCIsXG4gICAgICAgICAgICB7c3VjY2VzczogdGltZVBhc3NlZCA8PSA2MDAwfSxcbiAgICAgICAgICAgIHtpbmZvOiB0aW1lUGFzc2VkID4gNjAwMCAmJiB0aW1lUGFzc2VkIDw9IDE1MDAwfSxcbiAgICAgICAgICAgIHt3YXJuaW5nOiB0aW1lUGFzc2VkID4gMTUwMDAgJiYgdGltZVBhc3NlZCA8PSAyNTAwMH0sXG4gICAgICAgICAgICB7ZXJyb3I6IHRpbWVQYXNzZWQgPiAyNTAwMH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gYmxvY2tUaW1lID8gKFxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17dGV4dENsYXNzfT5cbiAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtibG9ja1RpbWV9IC8+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICApIDogbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIEJsb2NrcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiLFxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IFwiMi4xLjBcIixcbiAgICAgICAgbGF0ZXN0QmxvY2tzOiB7fSxcbiAgICAgICAgYXNzZXRzOiB7fSxcbiAgICAgICAgYWNjb3VudHM6IHt9LFxuICAgICAgICBoZWlnaHQ6IDFcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgb3BlcmF0aW9uc0hlaWdodDogbnVsbCxcbiAgICAgICAgICAgIGJsb2Nrc0hlaWdodDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCA9IHRoaXMuX3VwZGF0ZUhlaWdodC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9nZXRCbG9jayhoZWlnaHQsIG1heEJsb2NrKSB7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHBhcnNlSW50KGhlaWdodCwgMTApO1xuICAgICAgICAgICAgQmxvY2tjaGFpbkFjdGlvbnMuZ2V0TGF0ZXN0KGhlaWdodCwgbWF4QmxvY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl91cGRhdGVIZWlnaHQsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fdXBkYXRlSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW5pdGlhbEJsb2NrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXhCbG9jayA9IG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZSA+PSAyMCAmJlxuICAgICAgICAgICAgbmV4dFByb3BzLmR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSAhPT1cbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLmdldCgwKS5pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRCbG9jayhtYXhCbG9jaywgbWF4QmxvY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEluaXRpYWxCbG9ja3MoKTtcbiAgICAgICAgbGV0IG9jID0gdGhpcy5yZWZzLm9wZXJhdGlvbnM7XG4gICAgICAgIFBzLmluaXRpYWxpemUob2MpO1xuICAgICAgICBsZXQgYmxvY2tzID0gdGhpcy5yZWZzLmJsb2NrcztcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShibG9ja3MpO1xuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmxhdGVzdEJsb2NrcywgdGhpcy5wcm9wcy5sYXRlc3RCbG9ja3MpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxCbG9ja3MoKSB7XG4gICAgICAgIGxldCBtYXhCbG9jayA9IHBhcnNlSW50KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIiksXG4gICAgICAgICAgICAxMFxuICAgICAgICApO1xuICAgICAgICBpZiAobWF4QmxvY2spIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYXRlc3RCbG9ja3MuZ2V0KGopLmlkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEJsb2NrIC0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRCbG9jayhtYXhCbG9jayAtIGksIG1heEJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5yZWZzLm91dGVyV3JhcHBlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBvcGVyYXRpb25zVGV4dEhlaWdodCA9IHRoaXMucmVmcy5vcGVyYXRpb25zVGV4dC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBibG9ja3NUZXh0SGVpZ2h0ID0gdGhpcy5yZWZzLmJsb2Nrc1RleHQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uc0hlaWdodDogY29udGFpbmVySGVpZ2h0IC0gb3BlcmF0aW9uc1RleHRIZWlnaHQsXG4gICAgICAgICAgICAgICAgYmxvY2tzSGVpZ2h0OiBjb250YWluZXJIZWlnaHQgLSBibG9ja3NUZXh0SGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5wc1VwZGF0ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBzVXBkYXRlKCkge1xuICAgICAgICBsZXQgb2MgPSB0aGlzLnJlZnMub3BlcmF0aW9ucztcbiAgICAgICAgUHMudXBkYXRlKG9jKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucmVmcy5ibG9ja3M7XG4gICAgICAgIFBzLnVwZGF0ZShibG9ja3MpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGxhdGVzdEJsb2NrcyxcbiAgICAgICAgICAgIGxhdGVzdFRyYW5zYWN0aW9ucyxcbiAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgIGNvcmVBc3NldFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtibG9ja3NIZWlnaHQsIG9wZXJhdGlvbnNIZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZHluYW1pY09iamVjdCA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIGNvcmVBc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbnMgPSBudWxsO1xuICAgICAgICBsZXQgaGVhZEJsb2NrID0gbnVsbDtcbiAgICAgICAgbGV0IHRyeENvdW50ID0gMCxcbiAgICAgICAgICAgIGJsb2NrQ291bnQgPSBsYXRlc3RCbG9ja3Muc2l6ZSxcbiAgICAgICAgICAgIHRyeFBlclNlYyA9IDAsXG4gICAgICAgICAgICBibG9ja1RpbWVzID0gW10sXG4gICAgICAgICAgICBhdmdUaW1lID0gMDtcblxuICAgICAgICBpZiAobGF0ZXN0QmxvY2tzICYmIGxhdGVzdEJsb2Nrcy5zaXplID49IDIwKSB7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNUaW1lO1xuXG4gICAgICAgICAgICBsZXQgbGFzdEJsb2NrLCBmaXJzdEJsb2NrO1xuXG4gICAgICAgICAgICAvLyBNYXAgb3V0IHRoZSBibG9jayB0aW1lcyBmb3IgdGhlIGxhdGVzdCBibG9ja3MgYW5kIGNvdW50IHRoZSBudW1iZXIgb2YgdHJhbnNhY3Rpb25zXG4gICAgICAgICAgICBsYXRlc3RCbG9ja3NcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHVzZSBjb25zZWN1dGl2ZSBibG9ja3MgY291bnRpbmcgYmFjayBmcm9tIGhlYWQgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIikgLSBpbmRleFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnhDb3VudCArPSBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibG9jay50aW1lc3RhbXAgLSBwcmV2aW91c1RpbWUpIC8gMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2sgPSBibG9jay50aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEJsb2NrID0gYmxvY2sudGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZSA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3V0cHV0IGJsb2NrIHJvd3MgZm9yIHRoZSBsYXN0IDIwIGJsb2Nrc1xuICAgICAgICAgICAgYmxvY2tzID0gbGF0ZXN0QmxvY2tzXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuaWQgLSBhLmlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRha2UoMjApXG4gICAgICAgICAgICAgICAgLm1hcChibG9jayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtibG9jay5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9ibG9jay8ke2Jsb2NrLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t1dGlscy5mb3JtYXRfbnVtYmVyKGJsb2NrLmlkLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLnRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvV2l0bmVzc0J5SWQgd2l0bmVzcz17YmxvY2sud2l0bmVzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgbGV0IHRyeEluZGV4ID0gMDtcblxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gbGF0ZXN0VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tfbnVtIC0gYS5ibG9ja19udW07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGFrZSgyMClcbiAgICAgICAgICAgICAgICAubWFwKHRyeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeC5vcGVyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG9wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ4SW5kZXggPiAxNSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cnhJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A9e29wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0cngub3BlcmF0aW9uX3Jlc3VsdHNbb3BJbmRleCsrXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrPXt0cnguYmxvY2tfbnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZlZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcExhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e1wiMS4yLjBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlUGVuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBoZWFkQmxvY2sgPSBsYXRlc3RCbG9ja3MuZmlyc3QoKS50aW1lc3RhbXA7XG4gICAgICAgICAgICBhdmdUaW1lID0gYmxvY2tUaW1lcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50LCBpZHgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgY3VycmVudFsxXSAvIGFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICB0cnhQZXJTZWMgPSB0cnhDb3VudCAvICgobGFzdEJsb2NrIC0gZmlyc3RCbG9jaykgLyAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm91dGVyV3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICB7LyogRmlyc3Qgcm93IG9mIHN0YXRzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyIGdyaWQtYmxvY2sgc2hyaW5rIHNtYWxsLWhvcml6b250YWwgYmxvY2tzLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuY3VycmVudF9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5sYXN0X2Jsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrVGltZUFnbyBibG9ja1RpbWU9e2hlYWRCbG9ja30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnRyeF9wZXJfc2VjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1dGlscy5mb3JtYXRfbnVtYmVyKHRyeFBlclNlYywgMil9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmF2Z19jb25mX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3V0aWxzLmZvcm1hdF9udW1iZXIoYXZnVGltZSAvIDIsIDIpfXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFNlY29uZCByb3cgb2Ygc3RhdHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXIgZ3JpZC1ibG9jayBzaHJpbmsgc21hbGwtaG9yaXpvbnRhbCAgYmxvY2tzLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmFjdGl2ZV93aXRuZXNzZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHh0bGFiZWwgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2xvYmFsT2JqZWN0LmdldChcImFjdGl2ZV93aXRuZXNzZXNcIikuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInR4dGxhYmVsIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmdldChcImFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MudHJ4X3Blcl9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnhDb3VudCAvIGJsb2NrQ291bnQgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnJlY2VudGx5X21pc3NlZF9ibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCIxMDBcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluR2xvYmFsT2JqZWN0LmdldChcInJlY2VudGx5X21pc3NlZF9jb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFRoaXJkIHJvdzogZ3JhcGhzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyIGdyaWQtYmxvY2sgc2hyaW5rIHNtYWxsLXZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIGJsb2Nrcy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmN1cnJlbnRfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYmxvY2tfdGltZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja3RpbWVDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVzPXtibG9ja1RpbWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkX2Jsb2NrX251bWJlcj17ZHluR2xvYmFsT2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZF9ibG9ja19udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC0xMiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX2Jsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb25DaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e2xhdGVzdEJsb2Nrc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZF9ibG9jaz17ZHluR2xvYmFsT2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZF9ibG9ja19udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC0xMiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5zdGVhbHRoX3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlkZW50aWFsX3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEZvdXJ0aCByb3c6IHRyYW5zYWN0aW9ucyBhbmQgYmxvY2tzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwidHJhbnNhY3Rpb25zQmxvY2tcIiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgbWVkaXVtLTYgdmVydGljYWwgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93IGdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJvcGVyYXRpb25zVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnJlY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZml4ZWQtaGVpZ2h0LTJyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudm90ZXMuaW5mb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogb3BlcmF0aW9uc0hlaWdodCB8fCBcIjQwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJvcGVyYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBmaXhlZC1oZWlnaHQtMnJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pnt0cmFuc2FjdGlvbnN9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtZWRpdW0tNiBzaG93LWZvci1tZWRpdW0gdmVydGljYWwgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nTGVmdDogNX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvdyBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwiYmxvY2tzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5yZWNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogYmxvY2tzSGVpZ2h0IHx8IFwiNDM4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZml4ZWQtaGVpZ2h0LTJyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2sud2l0bmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2Nrc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJsb2NrcyA9IEJpbmRUb0NoYWluU3RhdGUoQmxvY2tzLCB7c2hvd19sb2FkZXI6IHRydWV9KTtcbkJsb2NrcyA9IEFzc2V0V3JhcHBlcihCbG9ja3MsIHtcbiAgICBwcm9wTmFtZXM6IFtcImNvcmVBc3NldFwiXSxcbiAgICB3aXRoRHluYW1pYzogdHJ1ZVxufSk7XG5leHBvcnQgZGVmYXVsdCBCbG9ja3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4vTGlua1RvQWNjb3VudEJ5SWRcIjtcblxuY2xhc3MgTGlua1RvV2l0bmVzc0J5SWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHdpdG5lc3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB3aXRuZXNzX2FjY291bnQgPSB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpO1xuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3dpdG5lc3NfYWNjb3VudH0gLz47XG4gICAgfVxufVxuTGlua1RvV2l0bmVzc0J5SWQgPSBCaW5kVG9DaGFpblN0YXRlKExpbmtUb1dpdG5lc3NCeUlkKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua1RvV2l0bmVzc0J5SWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RIaWdoY2hhcnQgZnJvbSBcInJlYWN0LWhpZ2hjaGFydHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuY2xhc3MgVHJhbnNhY3Rpb25DaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmJsb2Nrcy5zaXplIDwgMjApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hhcnQgPSB0aGlzLnJlZnMudHJ4X2NoYXJ0ID8gdGhpcy5yZWZzLnRyeF9jaGFydC5jaGFydCA6IG51bGw7XG4gICAgICAgIGlmIChjaGFydCAmJiBuZXh0UHJvcHMuYmxvY2tzICE9PSB0aGlzLnByb3BzLmJsb2Nrcykge1xuICAgICAgICAgICAgbGV0IHt0cnhEYXRhLCBjb2xvcnN9ID0gdGhpcy5fZ2V0RGF0YShuZXh0UHJvcHMpO1xuICAgICAgICAgICAgbGV0IHNlcmllcyA9IGNoYXJ0LnNlcmllc1swXTtcbiAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gc2VyaWVzLnhEYXRhW3Nlcmllcy54RGF0YS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFydDpcIiwgY2hhcnQsIFwic2VyaWVzOlwiLCBzZXJpZXMuZGF0YSwgXCJmaW5hbFZhbHVlOlwiLCBmaW5hbFZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzZXJpZXMueERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdHJ4RGF0YS5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50WzBdID4gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzLmFkZFBvaW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy54RGF0YS5sZW5ndGggPj0gMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNoYXJ0Lm9wdGlvbnMucGxvdE9wdGlvbnMuY29sdW1uLmNvbG9ycyA9IGNvbG9ycztcblxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrcyAhPT0gdGhpcy5wcm9wcy5ibG9ja3MgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5oZWFkX2Jsb2NrICE9PSB0aGlzLnByb3BzLmhlYWRfYmxvY2tcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0RGF0YShwcm9wcykge1xuICAgICAgICBsZXQge2Jsb2NrcywgaGVhZF9ibG9ja30gPSBwcm9wcztcblxuICAgICAgICBsZXQgdHJ4RGF0YSA9IFtdO1xuICAgICAgICBsZXQgbWF4ID0gMDtcbiAgICAgICAgdHJ4RGF0YSA9IGJsb2Nrc1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA+PSBoZWFkX2Jsb2NrIC0gMzA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRha2VMYXN0KDMwKVxuICAgICAgICAgICAgLm1hcChibG9jayA9PiB7XG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgoYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCwgbWF4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2Jsb2NrLmlkLCBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgIGxldCBjb2xvcnMgPSB0cnhEYXRhLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVudHJ5OlwiLCBlbnRyeSk7XG4gICAgICAgICAgICBpZiAoZW50cnlbMV0gPD0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiM1MEQyQzJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjQTBEM0U4XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDIwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0ZDQUI1M1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjZGViODY5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcnMsXG4gICAgICAgICAgICB0cnhEYXRhLFxuICAgICAgICAgICAgbWF4XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3RyeERhdGEsIGNvbG9ycywgbWF4fSA9IHRoaXMuX2dldERhdGEodGhpcy5wcm9wcyk7XG5cbiAgICAgICAgbGV0IHRvb2x0aXBMYWJlbCA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgIFwiZXhwbG9yZXIuYmxvY2tzLnRyYW5zYWN0aW9uc1wiXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDApXCIsXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzAsIDAsIDUsIDBdLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHNoYXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXBMYWJlbCArIFwiOiBcIiArIHRoaXMueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRyYW5zYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnhEYXRhLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTBEMkMyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiBNYXRoLm1heCgxLjUsIG1heCArIDAuNSksXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkTGluZVdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZUluZGljYXRvcjoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNvbHVtbjoge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pblBvaW50TGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdHJ4RGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICA8UmVhY3RIaWdoY2hhcnQgcmVmPVwidHJ4X2NoYXJ0XCIgY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgICkgOiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25DaGFydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdEhpZ2hjaGFydCBmcm9tIFwicmVhY3QtaGlnaGNoYXJ0c1wiO1xuaW1wb3J0IHt0YWtlUmlnaHR9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuY2xhc3MgQmxvY2t0aW1lQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCA8IDE5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hhcnQgPSB0aGlzLnJlZnMuY2hhcnQgPyB0aGlzLnJlZnMuY2hhcnQuY2hhcnQgOiBudWxsO1xuICAgICAgICBpZiAoY2hhcnQpIHtcbiAgICAgICAgICAgIGxldCB7YmxvY2tUaW1lcywgY29sb3JzfSA9IHRoaXMuX2dldERhdGEobmV4dFByb3BzKTtcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSBjaGFydC5zZXJpZXNbMF07XG4gICAgICAgICAgICBsZXQgZmluYWxWYWx1ZSA9IHNlcmllcy54RGF0YVtzZXJpZXMueERhdGEubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGlmIChzZXJpZXMueERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hhcnQsIFwic2VyaWVzOlwiLCBzZXJpZXMuZGF0YSwgXCJmaW5hbFZhbHVlOlwiLCBmaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICBibG9ja1RpbWVzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRbMF0gPiBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMuYWRkUG9pbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzLnhEYXRhLmxlbmd0aCA+PSAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2hhcnQub3B0aW9ucy5wbG90T3B0aW9ucy5jb2x1bW4uY29sb3JzID0gY29sb3JzO1xuXG4gICAgICAgICAgICAgICAgY2hhcnQucmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja1RpbWVzW25leHRQcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCAtIDFdWzBdICE9PVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmxvY2tUaW1lc1t0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoIC0gMV1bMF0gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5ibG9ja1RpbWVzLmxlbmd0aFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXREYXRhKCkge1xuICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGhlYWRfYmxvY2t9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBibG9ja1RpbWVzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhWzBdID49IGhlYWRfYmxvY2sgLSAzMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrVGltZXMgJiYgYmxvY2tUaW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJsb2NrVGltZXMgPSB0YWtlUmlnaHQoYmxvY2tUaW1lcywgMzApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbG9ycyA9IGJsb2NrVGltZXMubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeVsxXSA8PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiIzUwRDJDMlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNBMEQzRThcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjRkNBQjUzXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNkZWI4NjlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJsb2NrVGltZXMsXG4gICAgICAgICAgICBjb2xvcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YmxvY2tUaW1lcywgY29sb3JzfSA9IHRoaXMuX2dldERhdGEodGhpcy5wcm9wcyk7XG5cbiAgICAgICAgbGV0IHRvb2x0aXBMYWJlbCA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmJsb2Nrcy5ibG9ja190aW1lXCIpO1xuXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwKVwiLFxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IFswLCAwLCA1LCAwXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2VTZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF2aWdhdG9yOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b29sdGlwTGFiZWwgKyBcIjogXCIgKyB0aGlzLnkgKyBcInNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJsb2NrIHRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYmxvY2tUaW1lcyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzUwRDJDMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2VJbmRpY2F0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb2x1bW46IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5Qb2ludExlbmd0aDogMyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JCeVBvaW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJsb2NrVGltZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IHJlZj1cImNoYXJ0XCIgY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgICkgOiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2t0aW1lQ2hhcnQ7XG4iLCJpbXBvcnQgYmFzZVNsaWNlIGZyb20gJy4vX2Jhc2VTbGljZS5qcyc7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4vdG9JbnRlZ2VyLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpY2Ugb2YgYGFycmF5YCB3aXRoIGBuYCBlbGVtZW50cyB0YWtlbiBmcm9tIHRoZSBlbmQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW249MV0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byB0YWtlLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdKTtcbiAqIC8vID0+IFszXVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSwgMik7XG4gKiAvLyA9PiBbMiwgM11cbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10sIDUpO1xuICogLy8gPT4gWzEsIDIsIDNdXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdLCAwKTtcbiAqIC8vID0+IFtdXG4gKi9cbmZ1bmN0aW9uIHRha2VSaWdodChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBuID0gKGd1YXJkIHx8IG4gPT09IHVuZGVmaW5lZCkgPyAxIDogdG9JbnRlZ2VyKG4pO1xuICBuID0gbGVuZ3RoIC0gbjtcbiAgcmV0dXJuIGJhc2VTbGljZShhcnJheSwgbiA8IDAgPyAwIDogbiwgbGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFrZVJpZ2h0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcIi4vQXNzZXRzXCI7XG5cbmNsYXNzIEFzc2V0c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Fzc2V0U3RvcmUsIFNldHRpbmdzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBhc3NldHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNUEE6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlck1QQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVSUE6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlclVJQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QXNzZXRzIC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0c0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcblxubGV0IGFjY291bnRTdG9yYWdlID0gbmV3IGxzKFwiX19ncmFwaGVuZV9fXCIpO1xuXG5jbGFzcyBBc3NldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IGNoYWluSUQgPSBBcGlzLmluc3RhbmNlKCkuY2hhaW5faWQ7XG4gICAgICAgIGlmIChjaGFpbklEKSBjaGFpbklEID0gY2hhaW5JRC5zdWJzdHIoMCwgOCk7XG4gICAgICAgIGVsc2UgY2hhaW5JRCA9IFwiNDAxOGQ3ODRcIjtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhaW5JRCxcbiAgICAgICAgICAgIGZvdW5kTGFzdDogZmFsc2UsXG4gICAgICAgICAgICBsYXN0QXNzZXQ6IFwiXCIsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdG90YWxBc3NldHM6XG4gICAgICAgICAgICAgICAgdHlwZW9mIGFjY291bnRTdG9yYWdlLmdldChgdG90YWxBc3NldHNfJHtjaGFpbklEfWApICE9IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50U3RvcmFnZS5nZXQoYHRvdGFsQXNzZXRzXyR7Y2hhaW5JRH1gKVxuICAgICAgICAgICAgICAgICAgICA6IGNoYWluSUQgJiYgY2hhaW5JRCA9PT0gXCI0MDE4ZDc4NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDMwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogNTAsIC8vIG1haW5uZXQgaGFzIDMwMDArIGFzc2V0cywgb3RoZXIgY2hhaW5zIG1heSBub3QgaGF2ZSB0aGF0IG1hbnlcbiAgICAgICAgICAgIGFzc2V0c0ZldGNoZWQ6IDAsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXI6IFwibWFya2V0XCIsXG4gICAgICAgICAgICBmaWx0ZXJVSUE6IHByb3BzLmZpbHRlclVJQSB8fCBcIlwiLFxuICAgICAgICAgICAgZmlsdGVyTVBBOiBwcm9wcy5maWx0ZXJNUEEgfHwgXCJcIixcbiAgICAgICAgICAgIGZpbHRlclBNOiBwcm9wcy5maWx0ZXJQTSB8fCBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5hc3NldHMsIHRoaXMucHJvcHMuYXNzZXRzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrQXNzZXRzKHRoaXMucHJvcHMuYXNzZXRzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBfY2hlY2tBc3NldHMoYXNzZXRzLCBmb3JjZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9KTtcbiAgICAgICAgbGV0IGxhc3RBc3NldCA9IGFzc2V0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubGFzdCgpO1xuXG4gICAgICAgIGlmIChhc3NldHMuc2l6ZSA9PT0gMCB8fCBmb3JjZSkge1xuICAgICAgICAgICAgQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdC5kZWZlcihcIkFcIiwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc2V0c0ZldGNoZWQ6IDEwMH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGFzc2V0cy5zaXplID49IHRoaXMuc3RhdGUuYXNzZXRzRmV0Y2hlZCkge1xuICAgICAgICAgICAgQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdC5kZWZlcihsYXN0QXNzZXQuc3ltYm9sLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXNzZXRzRmV0Y2hlZDogdGhpcy5zdGF0ZS5hc3NldHNGZXRjaGVkICsgOTl9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuc2l6ZSA+IHRoaXMuc3RhdGUudG90YWxBc3NldHMpIHtcbiAgICAgICAgICAgIGFjY291bnRTdG9yYWdlLnNldChcbiAgICAgICAgICAgICAgICBgdG90YWxBc3NldHNfJHt0aGlzLnN0YXRlLmNoYWluSUR9YCxcbiAgICAgICAgICAgICAgICBhc3NldHMuc2l6ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFzc2V0c0ZldGNoZWQgPj0gdGhpcy5zdGF0ZS50b3RhbEFzc2V0cyAtIDEwMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5hc3NldHMgIT09IHRoaXMucHJvcHMuYXNzZXRzKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0Fzc2V0cyhuZXh0UHJvcHMuYXNzZXRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUb0FjY291bnQobmFtZV9vcl9pZCkge1xuICAgICAgICBpZiAoIW5hbWVfb3JfaWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj4tPC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17bmFtZV9vcl9pZH0gLz47XG4gICAgfVxuXG4gICAgX3RvZ2dsZUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXI6IGZpbHRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25GaWx0ZXIodHlwZSwgZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtbdHlwZV06IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCl9KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIFt0eXBlXTogZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlRmlsdGVyfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwibWFya2V0cy5maWx0ZXJcIikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgbGV0IGNvcmVBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKTtcblxuICAgICAgICBsZXQgdWlhO1xuICAgICAgICBsZXQgbWlhO1xuICAgICAgICBsZXQgcG07XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcInVzZXJcIikge1xuICAgICAgICAgICAgdWlhID0gYXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFhLm1hcmtldF9hc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclVJQSkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3JlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3JlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCVFNcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Fzc2V0LnN5bWJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hc3NldC8ke2Fzc2V0LnN5bWJvbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMubGlua1RvQWNjb3VudChhc3NldC5pc3N1ZXIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YXNzZXQuZHluYW1pYy5jdXJyZW50X3N1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9tYXJrZXQvJHttYXJrZXRJRH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5rZXkgPiBiLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5rZXkgPCBiLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwibWFya2V0XCIpIHtcbiAgICAgICAgICAgIG1pYSA9IGFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFhLmJpdGFzc2V0X2RhdGEuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJNUEEpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29yZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQlRTXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthc3NldC5zeW1ib2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHthc3NldC5zeW1ib2x9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Fzc2V0LnN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmxpbmtUb0FjY291bnQoYXNzZXQuaXNzdWVyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Fzc2V0LmR5bmFtaWMuY3VycmVudF9zdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7bWFya2V0SUR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEua2V5ID4gYi5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEua2V5IDwgYi5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcInByZWRpY3Rpb25cIikge1xuICAgICAgICAgICAgcG0gPSBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhLm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5iaXRhc3NldF9kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChhLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJQTS50b0xvd2VyQ2FzZSgpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLm1haW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJQTS50b0xvd2VyQ2FzZSgpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29yZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQlRTXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthc3NldC5pZC5zcGxpdChcIi5cIilbMl19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiBcIjgwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTAsIGZvbnRXZWlnaHQ6IFwiYm9sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHthc3NldC5zeW1ib2x9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXthc3NldC5zeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uY29uZGl0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAoe2Rlc2NyaXB0aW9uLmNvbmRpdGlvbn0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHggNXB4IDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxOHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbi5tYWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAyMHB4IDVweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxOHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXthc3NldC5pc3N1ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmR5bmFtaWMuY3VycmVudF9zdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbi5leHBpcnkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC0ge2Rlc2NyaXB0aW9uLmV4cGlyeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogXCIyMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7bWFya2V0SUR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEua2V5ID4gYi5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLmtleSA8IGIua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0TGlzdEhlYWRlciA9IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5zeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMuaXNzdWVyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cIm1hcmtldHMuc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTEwIG1lZGl1bS1vZmZzZXQtMSBtYWluLWNvbnRlbnQgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJpbmxpbmUtYmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZTogYWN0aXZlRmlsdGVyICE9IFwibWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVGaWx0ZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLm1hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlubGluZS1ibG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluYWN0aXZlOiBhY3RpdmVGaWx0ZXIgIT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVGaWx0ZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy51c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXIgIT0gXCJwcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVGaWx0ZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5wcmVkaWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUZpbHRlciA9PSBcIm1hcmtldFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiBcIjUwMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyTVBBfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlck1QQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRmlsdGVyID09IFwibWFya2V0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXthc3NldExpc3RIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17bWlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRmlsdGVyID09IFwidXNlclwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiBcIjUwMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyVUlBfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlclVJQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVGaWx0ZXIgPT0gXCJ1c2VyXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXthc3NldExpc3RIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17dWlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRmlsdGVyID09IFwicHJlZGljdGlvblwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiBcIjUwMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGUoXCJtYXJrZXRzLnNlYXJjaFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyUE19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyUE1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRmlsdGVyID09IFwicHJlZGljdGlvblwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdCByb3dzPXtwbX0gcGFnZVNpemU9ezZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldHMuZGVmYXVsdFByb3BzID0ge1xuICAgIGFzc2V0czoge31cbn07XG5cbkFzc2V0cy5wcm9wVHlwZXMgPSB7XG4gICAgYXNzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UGFnaW5hdGlvbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwYWdlU2l6ZTogcHJvcHMucGFnZVNpemVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgcGFnZVNpemU6IDE1LFxuICAgICAgICBsYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXG4gICAgICAgIGV4dHJhUm93OiBudWxsLFxuICAgICAgICBzdHlsZToge3BhZGRpbmdCb3R0b206IFwiMXJlbVwifVxuICAgIH07XG5cbiAgICBvbkNoYW5nZShwYWdlLCBwYWdlU2l6ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlLCBwYWdlU2l6ZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3BhZ2UsIHBhZ2VTaXplfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gcm93cy5sZW5ndGg7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRSb3dzID0gZ2V0Um93cyhwYWdlLCBwYWdlU2l6ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Um93cyhwYWdlLCBwYWdlU2l6ZSkge1xuICAgICAgICAgICAgbGV0IHIgPSBbXTtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGkgPSAocGFnZSAtIDEpICogcGFnZVNpemU7XG4gICAgICAgICAgICAgICAgaSA8IE1hdGgubWluKHRvdGFsLCBwYWdlICogcGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgci5wdXNoKHJvd3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBQYWdpbmF0ZWQgdG9vIGZhciBvciBmaWx0ZXJlZCBvdXQgb3B0aW9ucyB3aXRob3V0IGNoYW5naW5nIHRoZSBwYWdlICovXG4gICAgICAgIGlmICghY3VycmVudFJvd3MubGVuZ3RoICYmIHRvdGFsKSB7XG4gICAgICAgICAgICBjdXJyZW50Um93cyA9IGdldFJvd3MoMSwgcGFnZVNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge2hlYWRlciA/IDx0aGVhZD57aGVhZGVyfTwvdGhlYWQ+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2l0aFRyYW5zaXRpb24gJiYgcGFnZSA9PT0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRyYVJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRyYVJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgIHt0b3RhbCA+IHBhZ2VTaXplID8gKFxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy5wcm9wcy5sZWZ0UGFkZGluZyB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsPXt0b3RhbCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtwYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEFjY291bnRzIGZyb20gXCIuL0FjY291bnRzXCI7XG5cbmNsYXNzIEFjY291bnRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQWNjb3VudFN0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zZWFyY2hBY2NvdW50cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnNlYXJjaFRlcm07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50cyAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50c0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgUGFnaW5hdGVkTGlzdCBmcm9tIFwiLi4vVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XG5cbmNsYXNzIEFjY291bnRSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdGVtcENvbXBvbmVudDogXCJ0clwiLFxuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZVxuICAgIH07XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuY29udGFjdHMgIT09IHRoaXMucHJvcHMuY29udGFjdHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25BZGRDb250YWN0KGFjY291bnQsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5hZGRBY2NvdW50Q29udGFjdChhY2NvdW50KTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmVDb250YWN0KGFjY291bnQsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdChhY2NvdW50KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgY29udGFjdHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IGFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgXCIxLjMuMFwiXSkgfHwgbnVsbDtcbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PXthY2NvdW50LmdldChcImlkXCIpfT5cbiAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnQuZ2V0KFwiaWRcIil9PC90ZD5cbiAgICAgICAgICAgICAgICB7Y29udGFjdHMuaGFzKGFjY291bnROYW1lKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlQ29udGFjdC5iaW5kKHRoaXMsIGFjY291bnROYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW51cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMubWludXNfY2lyY2xlLnJlbW92ZV9jb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMuX29uQWRkQ29udGFjdC5iaW5kKHRoaXMsIGFjY291bnROYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbHVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5wbHVzX2NpcmNsZS5hZGRfY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hY2NvdW50LyR7YWNjb3VudE5hbWV9L292ZXJ2aWV3YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgeyFiYWxhbmNlID8gXCJuL2FcIiA6IDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2JhbGFuY2V9IC8+fVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICB7IWJhbGFuY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm4vYVwiXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNQZXJjZW50YWdlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5BY2NvdW50Um93ID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50Um93KTtcblxubGV0IEFjY291bnRSb3dXcmFwcGVyID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiA8QWNjb3VudFJvdyB7Li4ucHJvcHN9IC8+O1xufTtcblxuQWNjb3VudFJvd1dyYXBwZXIgPSBjb25uZWN0KFxuICAgIEFjY291bnRSb3dXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb250YWN0czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuYWNjb3VudENvbnRhY3RzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuY2xhc3MgQWNjb3VudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBwcm9wcy5zZWFyY2hUZXJtLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NlYXJjaEFjY291bnRzID0gZGVib3VuY2UodGhpcy5fc2VhcmNoQWNjb3VudHMsIDIwMCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zZWFyY2hBY2NvdW50cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEFjY291bnRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuc2VhcmNoVGVybSAhPT0gdGhpcy5zdGF0ZS5zZWFyY2hUZXJtIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuaXNMb2FkaW5nICE9PSB0aGlzLnN0YXRlLmlzTG9hZGluZ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vblNlYXJjaENoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoVGVybTogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2VhcmNoQWNjb3VudHMoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIF9zZWFyY2hBY2NvdW50cyhzZWFyY2hUZXJtKSB7XG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFjY291bnRTZWFyY2goc2VhcmNoVGVybSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7c2VhcmNoQWNjb3VudHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzZWFyY2hUZXJtfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBhY2NvdW50Um93cyA9IFtdO1xuXG4gICAgICAgIGlmIChzZWFyY2hBY2NvdW50cy5zaXplID4gMCAmJiBzZWFyY2hUZXJtICYmIHNlYXJjaFRlcm0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWNjb3VudFJvd3MgPSBzZWFyY2hBY2NvdW50c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICogVGhpcyBhcHBlYXJzIHRvIHJldHVybiBmYWxzZSBuZWdhdGl2ZXMsIHBlcmhhcHMgZnJvbVxuICAgICAgICAgICAgICAgICAgICAqIGNoYW5nZWQgYWNjb3VudCBuYW1lIHJ1bGVzIHdoZW4gbW92aW5nIHRvIGdyYXBoZW5lPy4gRWl0aGVyXG4gICAgICAgICAgICAgICAgICAgICogd2F5LCB0cnlpbmcgdG8gcmVzb2x2ZSBpbnZhbGlkIG5hbWVzIGZhaWxzIGluIHRoZSBDaGFpblN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAqIHdoaWNoIGluIHR1cm4gYnJlYWtzIHRoZSBCaW5kVG9DaGFpblN0YXRlIHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFDaGFpblZhbGlkYXRpb24uaXNfYWNjb3VudF9uYW1lKGEsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXhPZihzZWFyY2hUZXJtKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcCgoYWNjb3VudCwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBY2NvdW50Um93V3JhcHBlciBrZXk9e2lkfSBhY2NvdW50PXthY2NvdW50fSAvPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS02IG1lZGl1bS1vZmZzZXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzaHJpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFjY291bnRzLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudXNlci5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC5wZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2FjY291bnRSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BY2NvdW50cy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2VhcmNoQWNjb3VudHM6IHt9XG59O1xuXG5BY2NvdW50cy5wcm9wVHlwZXMgPSB7XG4gICAgc2VhcmNoQWNjb3VudHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQgQXNzZXRTdG9yZSBmcm9tIFwic3RvcmVzL0Fzc2V0U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IE1hcmtldHMgZnJvbSBcIi4vTWFya2V0c1wiO1xuXG5jbGFzcyBNYXJrZXRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbU2V0dGluZ3NTdG9yZSwgQXNzZXRTdG9yZSwgTWFya2V0c1N0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvb2t1cFJlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBc3NldFN0b3JlLmdldFN0YXRlKCkubG9va3VwUmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0QmFzZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldEJhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNYXJrZXRzIC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtldHNDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXlNYXJrZXRzIGZyb20gXCIuL015TWFya2V0c1wiO1xuXG5jbGFzcyBNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMgPSB0aGlzLl9zZXREaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnJlZnMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJ3cmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgIDxNeU1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdEhlaWdodD17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhlaWdodCA/IHRoaXMuc3RhdGUuaGVpZ2h0IC0gODIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJTdHlsZT17e3BhZGRpbmdUb3A6IDAsIGJvcmRlclRvcDogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJzdGFyXCIsIGluZGV4OiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIm1hcmtldFwiLCBpbmRleDogMn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJxdW90ZVN1cHBseVwiLCBpbmRleDogM30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJ2b2xcIiwgaW5kZXg6IDR9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicHJpY2VcIiwgaW5kZXg6IDV9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiY2hhbmdlXCIsIGluZGV4OiA2fVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtldHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0Q0E7QUFIQTtBQWlEQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFSQTtBQVdBOzs7O0FBbkZBO0FBQ0E7QUFxRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBRkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFuQkE7QUFEQTtBQVJBO0FBSkE7QUFKQTtBQThDQTs7OztBQWpGQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVJBO0FBaUJBOzs7O0FBcEVBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFOQTtBQVFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFMQTtBQU1BO0FBQ0E7QUFSQTtBQURBO0FBWUE7QUFDQTtBQU9BO0FBeEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUF0QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BOzs7O0FBOVFBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQThRQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQVdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaEJBO0FBREE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWxDQTtBQURBO0FBdkJBO0FBREE7QUEyRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBekZBO0FBREE7QUFEQTtBQURBO0FBMkdBOzs7O0FBaEtBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUEySkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQVhBO0FBQ0E7QUFjQTs7Ozs7OztBQ2xvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBSkE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQTNIQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUEySEE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBU0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFiQTtBQURBO0FBREE7QUFEQTtBQThCQTs7OztBQTlFQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUEwRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFRQTtBQWJBO0FBQ0E7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQU5BO0FBU0E7Ozs7QUFaQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBU0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFMQTtBQW5CQTtBQWdDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFIQTtBQU5BO0FBaUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVkE7QUFEQTtBQWdCQTtBQWpCQTtBQUZBO0FBdUJBOzs7O0FBMUxBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBREE7QUFDQTtBQXNMQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVBBO0FBZUE7Ozs7QUFsQ0E7QUFDQTtBQW9DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFXQTtBQVhBO0FBY0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQXZDQTtBQXFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQVBBO0FBREE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBUEE7QUFEQTtBQWhEQTtBQW1FQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFMQTtBQUZBO0FBUEE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBTEE7QUFGQTtBQVBBO0FBREE7QUF0REE7QUE4RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUkE7QUFmQTtBQUpBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQW5CQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUE5QkE7QUFSQTtBQVRBO0FBSkE7QUFsQ0E7QUF4TUE7QUEwU0E7Ozs7QUExaUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBcWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNubUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUE1REE7QUFDQTtBQXNFQTtBQUdBOzs7O0FBM0pBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQTNEQTtBQUNBO0FBcUVBO0FBR0E7Ozs7QUFuSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQWJBO0FBRkE7QUFrQkE7QUFsQkE7QUFxQkE7Ozs7QUF4QkE7QUFDQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBUEE7QUF3QkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBZEE7QUF3QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBZEE7QUF3QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFZQTtBQUVBO0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxCQTtBQXJCQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBREE7QUE1Q0E7QUFzREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBaEJBO0FBQ0E7QUFtQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBU0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBTEE7QUFVQTtBQVZBO0FBdkJBO0FBREE7QUFzQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBREE7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQURBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBREE7QUFrQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXJIQTtBQURBO0FBREE7QUFEQTtBQW9JQTs7OztBQXRlQTtBQUNBO0FBd2VBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Z0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFVQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFkQTtBQWtCQTtBQXRDQTtBQXlDQTs7OztBQXpGQTtBQUNBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBV0E7QUFYQTtBQWNBOzs7O0FBakJBO0FBQ0E7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRkE7QUFKQTtBQXpCQTtBQXFDQTs7OztBQXhFQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBRkE7QUFDQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTtBQUNBO0FBV0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUF6QkE7QUFpQ0E7QUFDQTtBQXBDQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBbkRBO0FBREE7QUEyREE7Ozs7QUFqSUE7QUFDQTtBQW1JQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUZBO0FBaUJBO0FBakJBO0FBb0JBOzs7O0FBdkJBO0FBQ0E7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQW1CQTs7OztBQXREQTtBQUNBO0FBd0RBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=