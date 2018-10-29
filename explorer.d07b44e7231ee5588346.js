(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 2655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2656);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2659);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2660);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2668);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2671);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2673);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
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
                content: _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__["default"]
            }, {
                name: "assets",
                link: "/explorer/assets",
                translate: "explorer.assets.title",
                content: _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
            }, {
                name: "accounts",
                link: "/explorer/accounts",
                translate: "explorer.accounts.title",
                content: _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__["default"]
            }, {
                name: "witnesses",
                link: "/explorer/witnesses",
                translate: "explorer.witnesses.title",
                content: _Witnesses__WEBPACK_IMPORTED_MODULE_1__["default"]
            }, {
                name: "committee_members",
                link: "/explorer/committee-members",
                translate: "explorer.committee_members.title",
                content: _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__["default"]
            }, {
                name: "markets",
                link: "/explorer/markets",
                translate: "markets.title",
                content: _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, {
                name: "fees",
                link: "/explorer/fees",
                translate: "fees.title",
                content: _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
            }]
        };
        return _this;
    }

    _createClass(Explorer, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var onChange = function onChange(value) {
                _this2.props.history.push(value);
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__["Tabs"],
                {
                    activeKey: this.props.location.pathname,
                    animated: false,
                    style: { display: "table", height: "100%", width: "100%" },
                    onChange: onChange
                },
                this.state.tabs.map(function (tab) {
                    var TabContent = tab.content;

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__["Tabs"].TabPane,
                        {
                            key: tab.link,
                            tab: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate(tab.translate)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContent, null)
                        )
                    );
                })
            );
        }
    }]);

    return Explorer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explorer);

/***/ }),

/***/ 2656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2309);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1959);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1960);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(429);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2085);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2452);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1859);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(723);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(722);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1819);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















__webpack_require__(2657);

var WitnessRow = function (_React$Component) {
    _inherits(WitnessRow, _React$Component);

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

var WitnessList = function (_React$Component2) {
    _inherits(WitnessList, _React$Component2);

    function WitnessList() {
        _classCallCheck(this, WitnessList);

        var _this2 = _possibleConstructorReturn(this, (WitnessList.__proto__ || Object.getPrototypeOf(WitnessList)).call(this));

        _this2.state = {
            sortBy: "rank",
            inverseSort: true
        };

        _this2.handleBlockIdClick = _this2.handleBlockIdClick.bind(_this2);
        return _this2;
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
            var _this3 = this;

            return function () {
                _this3.props.history.push("/block/" + blockId);
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

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
                    return name.indexOf(_this4.props.filter) !== -1;
                }).map(function (a) {
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(a.get("witness_account"));

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getWitnessById(witness.get("id"));

                    var witness_aslot = witness_data.get("last_aslot");

                    var last_aslot_time = new Date(Date.now() - (_this4.props.current_aslot - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

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
                                onClick: _this4.handleBlockIdClick(item.id)
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

var Witnesses = function (_React$Component3) {
    _inherits(Witnesses, _React$Component3);

    function Witnesses(props) {
        _classCallCheck(this, Witnesses);

        var _this5 = _possibleConstructorReturn(this, (Witnesses.__proto__ || Object.getPrototypeOf(Witnesses)).call(this, props));

        _this5.state = {
            filterWitness: props.filterWitness || "",
            cardView: props.cardView
        };
        return _this5;
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

var WitnessStoreWrapper = function (_React$Component4) {
    _inherits(WitnessStoreWrapper, _React$Component4);

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

/***/ 2657:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1959);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1960);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(429);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1859);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(723);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2085);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(722);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(733);
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

/***/ 2660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(722);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1946);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2661);
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
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ 2661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2132);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1959);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1960);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2085);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2611);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(429);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
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
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Card"],
                    null,
                    this.props.title.toUpperCase()
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

/***/ 2662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1863);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1946);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2663);
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
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ 2663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1819);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1864);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2086);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2450);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2664);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1959);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1960);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2304);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2665);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2666);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(580);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2452);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2085);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2536);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2597);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















__webpack_require__(2448);

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

/***/ 2664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1959);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1960);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2423);
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

/***/ 2665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2639);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
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

/***/ 2666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(584);
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

/***/ 2667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1995);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2072);



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

/***/ 2668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(722);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1946);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2669);
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
                alt_container__WEBPACK_IMPORTED_MODULE_3__["default"],
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

/***/ 2669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2377);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(723);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1819);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2423);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2102);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2085);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2303);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(429);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(580);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(726);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2670);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(498);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var accountStorage = new common_localStorage__WEBPACK_IMPORTED_MODULE_14__["default"]("__graphene__");

var Assets = function (_React$Component) {
    _inherits(Assets, _React$Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this));

        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);else chainID = "4018d784";

        _this.state = {
            chainID: chainID,
            foundLast: false,
            lastAsset: "",
            isLoading: false,
            totalAssets: _typeof(accountStorage.get("totalAssets_" + chainID)) != "object" ? accountStorage.get("totalAssets_" + chainID) : chainID && chainID === "4018d784" ? 3000 : 50, // mainnet has 3000+ assets, other chains may not have that many
            assetsFetched: 0,
            activeFilter: "market",
            filterSearch: props.filterSearch || "",
            rowsOnPage: "25"
        };

        _this._toggleFilter = _this._toggleFilter.bind(_this);
        _this.handleRowsChange = _this.handleRowsChange.bind(_this);
        _this.handleFilterChange = _this.handleFilterChange.bind(_this);
        return _this;
    }

    _createClass(Assets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_5___default.a.is(nextProps.assets, this.props.assets) || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkAssets(this.props.assets, true);
        }
    }, {
        key: "handleFilterChange",
        value: function handleFilterChange(e) {
            this.setState({
                filterSearch: (e.target.value || "").toUpperCase()
            });
        }
    }, {
        key: "handleRowsChange",
        value: function handleRowsChange(rows) {
            this.setState({
                rowsOnPage: rows
            });
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
        value: function _toggleFilter(e) {
            this.setState({
                activeFilter: e.target.value
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

            var dataSource = [];
            var columns = [];

            if (activeFilter == "user") {
                columns = [{
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    sorter: function sorter(a, b) {
                        return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/asset/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: item })
                        );
                    }
                }, {
                    key: "issuer",
                    title: "issuer",
                    dataIndex: "issuer",
                    render: function render(item) {
                        return _this2.linkToAccount(item);
                    }
                }, {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    render: function render(item, record) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            amount: record.currentSupply,
                            asset: record.assetId,
                            hide_asset: true
                        });
                    }
                }, {
                    key: "marketId",
                    title: "",
                    dataIndex: "marketId",
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/market/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Icon"], { type: "line-chart" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                        );
                    }
                }];

                assets.filter(function (a) {
                    return !a.market_asset && a.symbol.indexOf(_this2.state.filterSearch) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    dataSource.push({
                        symbol: asset.symbol,
                        issuer: asset.issuer,
                        currentSupply: asset.dynamic.current_supply,
                        assetId: asset.id,
                        marketId: marketID
                    });
                }).toArray();
            }

            if (activeFilter == "market") {
                columns = [{
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/asset/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: item })
                        );
                    }
                }, {
                    key: "issuer",
                    title: "issuer",
                    dataIndex: "issuer",
                    render: function render(item) {
                        return _this2.linkToAccount(item);
                    }
                }, {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    render: function render(item, record) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            amount: record.currentSupply,
                            asset: record.assetId,
                            hide_asset: true
                        });
                    }
                }, {
                    key: "marketId",
                    title: "",
                    dataIndex: "marketId",
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
                            { to: "/market/" + item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Icon"], { type: "line-chart" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.exchange" })
                        );
                    }
                }];

                mia = assets.filter(function (a) {
                    return a.bitasset_data && !a.bitasset_data.is_prediction_market && a.symbol.indexOf(_this2.state.filterSearch) !== -1;
                }).map(function (asset) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(asset.options.description);

                    var marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "BTS");

                    dataSource.push({
                        symbol: asset.symbol,
                        issuer: asset.issuer,
                        currentSupply: asset.dynamic.current_supply,
                        assetId: asset.id,
                        marketId: marketID
                    });
                }).toArray();
            }

            if (activeFilter == "prediction") {
                pm = assets.filter(function (a) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(a.options.description);

                    return a.bitasset_data && a.bitasset_data.is_prediction_market && (a.symbol.toLowerCase().indexOf(_this2.state.filterSearch.toLowerCase()) !== -1 || description.main.toLowerCase().indexOf(_this2.state.filterSearch.toLowerCase()) !== -1);
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
                                {
                                    style: {
                                        textAlign: "right",
                                        marginBottom: "24px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        style: {
                                            display: "inline-block",
                                            width: "24px",
                                            marginTop: "2px",
                                            float: "left",
                                            fontSize: "18px"
                                        }
                                    },
                                    this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Icon"], { type: "loading" }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"].Group,
                                    {
                                        value: this.state.activeFilter,
                                        onChange: this._toggleFilter
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"],
                                        { value: "market" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.market" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"],
                                        { value: "user" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.user" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"],
                                        { value: "prediction" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.assets.prediction" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"],
                                    {
                                        style: { width: "150px", marginLeft: "24px" },
                                        value: this.state.rowsOnPage,
                                        onChange: this.handleRowsChange
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"].Option,
                                        { key: "10" },
                                        "10 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"].Option,
                                        { key: "25" },
                                        "25 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"].Option,
                                        { key: "50" },
                                        "50 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"].Option,
                                        { key: "100" },
                                        "100 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Select"].Option,
                                        { key: "200" },
                                        "200 rows"
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                    placeholder: "Quick Search",
                                    value: this.state.filterSearch,
                                    style: { width: "200px", marginLeft: "24px" },
                                    onChange: this.handleFilterChange,
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Icon"], { type: "search" })
                                })
                            ),
                            activeFilter == "prediction" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_15__["default"], { rows: pm, pageSize: 6 })
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Table"], {
                                style: { width: "100%", marginTop: "16px" },
                                rowKey: "symbol",
                                columns: columns,
                                dataSource: dataSource,
                                pagination: {
                                    position: "bottom",
                                    pageSize: Number(this.state.rowsOnPage)
                                }
                            })
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

/***/ 2670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(734);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2597);
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

/***/ 2671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1946);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2672);
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
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ 2672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(823);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1819);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1959);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1867);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1960);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2319);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(562);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1859);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1944);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2670);


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

/***/ 2673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2353);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(722);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1946);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2674);
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
                alt_container__WEBPACK_IMPORTED_MODULE_4__["default"],
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

/***/ 2674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2622);
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
                    listHeight: this.state.height ? this.state.height : null,
                    className: "no-overflow",
                    headerStyle: { paddingTop: 0, borderTop: "none" },
                    tabHeader: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuZDA3YjQ0ZTcyMzFlZTU1ODgzNDYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9XaXRuZXNzZXMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL3dpdG5lc3Nlcy5zY3NzPzBlM2QiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0NvbW1pdHRlZU1lbWJlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3NDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvVHJhbnNhY3Rpb25DaGFydC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Jsb2NrdGltZUNoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Rha2VSaWdodC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQWNjb3VudHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9BY2NvdW50cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2l0bmVzc2VzIGZyb20gXCIuL1dpdG5lc3Nlc1wiO1xuaW1wb3J0IENvbW1pdHRlZU1lbWJlcnMgZnJvbSBcIi4vQ29tbWl0dGVlTWVtYmVyc1wiO1xuaW1wb3J0IEZlZXNDb250YWluZXIgZnJvbSBcIi4uL0Jsb2NrY2hhaW4vRmVlc0NvbnRhaW5lclwiO1xuaW1wb3J0IEJsb2Nrc0NvbnRhaW5lciBmcm9tIFwiLi9CbG9ja3NDb250YWluZXJcIjtcbmltcG9ydCBBc3NldHNDb250YWluZXIgZnJvbSBcIi4vQXNzZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQgQWNjb3VudHNDb250YWluZXIgZnJvbSBcIi4vQWNjb3VudHNDb250YWluZXJcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBNYXJrZXRzQ29udGFpbmVyIGZyb20gXCIuLi9FeGNoYW5nZS9NYXJrZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQge1RhYnN9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5ibG9ja3MudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQmxvY2tzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXNzZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2Fzc2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuYXNzZXRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEFzc2V0c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2FjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5hY2NvdW50cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBBY2NvdW50c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndpdG5lc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci93aXRuZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLndpdG5lc3Nlcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBXaXRuZXNzZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21taXR0ZWVfbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9jb21taXR0ZWUtbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuY29tbWl0dGVlX21lbWJlcnMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQ29tbWl0dGVlTWVtYmVyc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvbWFya2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwibWFya2V0cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBNYXJrZXRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmVlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9mZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJmZWVzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEZlZXNDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJ0YWJsZVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBUYWJDb250ZW50ID0gdGFiLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKHRhYi50cmFuc2xhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlcjtcbiIsImltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IEFjY291bnRJbWFnZSBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50SW1hZ2VcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUaW1lQWdvIGZyb20gXCIuLi9VdGlsaXR5L1RpbWVBZ29cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7VGFibGUsIEljb24sIElucHV0LCBQb3BvdmVyfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbnJlcXVpcmUoXCIuL3dpdG5lc3Nlcy5zY3NzXCIpO1xuXG5jbGFzcyBXaXRuZXNzUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB3aXRuZXNzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIF9vblJvd0NsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHt0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwibmFtZVwiKX1gKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyAgICAgQ2hhaW5TdG9yZS51blN1YkZyb20oXCJ3aXRuZXNzZXNcIiwgQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZCggdGhpcy5wcm9wcy53aXRuZXNzLmdldChcImlkXCIpICkuZ2V0KFwiaWRcIikpO1xuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRuZXNzLCBpc0N1cnJlbnQsIHJhbmt9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHdpdG5lc3NfZGF0YSA9IENoYWluU3RvcmUuZ2V0V2l0bmVzc0J5SWQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF3aXRuZXNzX2RhdGEpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgdG90YWxfdm90ZXMgPSB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIik7XG5cbiAgICAgICAgbGV0IHdpdG5lc3NfYXNsb3QgPSB3aXRuZXNzX2RhdGEuZ2V0KFwibGFzdF9hc2xvdFwiKTtcbiAgICAgICAgbGV0IGNvbG9yID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vc3RfcmVjZW50IC0gd2l0bmVzc19hc2xvdCA+IDEwMCkge1xuICAgICAgICAgICAgY29sb3IgPSB7Ym9yZGVyTGVmdDogXCIxcHggc29saWQgI0ZDQUI1M1wifTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yID0ge2JvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICM1MEQyQzJcIn07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RfYXNsb3RfdGltZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgRGF0ZS5ub3coKSAtXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubW9zdF9yZWNlbnQgLSB3aXRuZXNzX2FzbG90KSAqXG4gICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrX2ludGVydmFsXCJcbiAgICAgICAgICAgICAgICAgICAgXSkgKlxuICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRDbGFzcyA9IGlzQ3VycmVudCA/IFwiYWN0aXZlLXdpdG5lc3NcIiA6IFwiXCI7XG5cbiAgICAgICAgbGV0IG1pc3NlZCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF9taXNzZWRcIik7XG4gICAgICAgIGxldCBtaXNzZWRDbGFzcyA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICBcInR4dGxhYmVsXCIsXG4gICAgICAgICAgICB7c3VjY2VzczogbWlzc2VkIDw9IDUwMH0sXG4gICAgICAgICAgICB7aW5mbzogbWlzc2VkID4gNTAwICYmIG1pc3NlZCA8PSAxMjUwfSxcbiAgICAgICAgICAgIHt3YXJuaW5nOiBtaXNzZWQgPiAxMjUwICYmIG1pc3NlZCA8PSAyMDAwfSxcbiAgICAgICAgICAgIHtlcnJvcjogbWlzc2VkID49IDIwMH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17Y3VycmVudENsYXNzfSBvbkNsaWNrPXt0aGlzLl9vblJvd0NsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDx0ZD57cmFua308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y29sb3J9Pnt3aXRuZXNzLmdldChcIm5hbWVcIil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvIHRpbWU9e25ldyBEYXRlKGxhc3RfYXNsb3RfdGltZSl9IC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3dpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2NvbmZpcm1lZF9ibG9ja19udW1cIil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXttaXNzZWRDbGFzc30+e21pc3NlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3dpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XaXRuZXNzUm93ID0gQmluZFRvQ2hhaW5TdGF0ZShXaXRuZXNzUm93KTtcbldpdG5lc3NSb3cgPSB3aXRoUm91dGVyKFdpdG5lc3NSb3cpO1xuXG5jbGFzcyBXaXRuZXNzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgd2l0bmVzc2VzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNvcnRCeTogXCJyYW5rXCIsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQmxvY2tJZENsaWNrID0gdGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfc2V0U29ydChmaWVsZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNvcnRCeTogZmllbGQsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDpcbiAgICAgICAgICAgICAgICBmaWVsZCA9PT0gdGhpcy5zdGF0ZS5zb3J0QnlcbiAgICAgICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQmxvY2tJZENsaWNrKGJsb2NrSWQpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYmxvY2svJHtibG9ja0lkfWApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRuZXNzZXMsIGN1cnJlbnQsIGNhcmRWaWV3LCB3aXRuZXNzTGlzdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3NvcnRCeSwgaW52ZXJzZVNvcnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IG1vc3RfcmVjZW50X2FzbG90ID0gMDtcbiAgICAgICAgbGV0IHJhbmtzID0ge307XG5cbiAgICAgICAgd2l0bmVzc2VzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3aXRuZXNzTGlzdC5pbmRleE9mKGEuZ2V0KFwiaWRcIikpICE9PSAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGIuZ2V0KFwidG90YWxfdm90ZXNcIiksIDEwKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChhLmdldChcInRvdGFsX3ZvdGVzXCIpLCAxMClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goKHcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSB3LmdldChcImxhc3RfYXNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3N0X3JlY2VudF9hc2xvdCA8IHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RfcmVjZW50X2FzbG90ID0gcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJhbmtzW3cuZ2V0KFwiaWRcIildID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGlmICh3aXRuZXNzZXMubGVuZ3RoID4gMCAmJiB3aXRuZXNzZXNbMV0pIHtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UgPSB3aXRuZXNzZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzcyA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJ3aXRuZXNzX2FjY291bnRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aXRuZXNzKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdG5lc3NfZGF0YSA9IENoYWluU3RvcmUuZ2V0V2l0bmVzc0J5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2l0bmVzc19kYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB3aXRuZXNzLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aXRuZXNzID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdG5lc3NfZGF0YSA9IENoYWluU3RvcmUuZ2V0V2l0bmVzc0J5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdG5lc3NfYXNsb3QgPSB3aXRuZXNzX2RhdGEuZ2V0KFwibGFzdF9hc2xvdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdF9hc2xvdF90aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5jdXJyZW50X2FzbG90IC0gd2l0bmVzc19hc2xvdCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldE9iamVjdChcIjIuMC4wXCIpLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9ja19pbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogd2l0bmVzcy5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuazogcmFua3NbYS5nZXQoXCJpZFwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aXRuZXNzLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduaW5nX2tleTogd2l0bmVzc19kYXRhLmdldChcInNpZ25pbmdfa2V5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB3aXRuZXNzX2RhdGEuZ2V0KFwidXJsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdENvbmZpcm1lZEJsb2NrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2NvbmZpcm1lZF9ibG9ja19udW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBsYXN0X2FzbG90X3RpbWUuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzTWlzc2VkOiB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfbWlzc2VkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM6IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsVmFsaWQgPSBpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLyhodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdyopPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlIVxcLVxcL10pKT8vO1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaXRlbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXJsUmVuZGVyID0gaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XCJob3ZlclwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxpbmtcIiAvPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qga2V5UmVuZGVyID0gaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9ezxzcGFuPntpdGVtfTwvc3Bhbj59IHRyaWdnZXI9e1wiaG92ZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiI1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmFuayA+IGIucmFuayA/IDEgOiBhLnJhbmsgPCBiLnJhbmsgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5BTUVcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVybFwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpdGVtICYmIHVybFZhbGlkKGl0ZW0pICYmIHVybFJlbmRlcihpdGVtKSkgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTEFTVCBDT05GSVJNRUQgQkxPQ0tcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWluV2lkdGg6IFwiMTAwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2soaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3tOdW1iZXIoaXRlbS5pZCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtuZXcgRGF0ZShpdGVtLnRpbWVzdGFtcCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcCA+XG4gICAgICAgICAgICAgICAgICAgICAgICBiLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYi5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJsb2Nrc01pc3NlZFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJMT0NLUyBNSVNTRURcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYmxvY2tzTWlzc2VkXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tzTWlzc2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzOiBpdGVtIDw9IDUwMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5mbzogaXRlbSA+IDUwMCAmJiBpdGVtIDw9IDEyNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3dhcm5pbmc6IGl0ZW0gPiAxMjUwICYmIGl0ZW0gPD0gMjAwMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3I6IGl0ZW0gPj0gMjAwfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtibG9ja3NNaXNzZWRDbGFzc05hbWV9PntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYmxvY2tzTWlzc2VkID4gYi5ibG9ja3NNaXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmJsb2Nrc01pc3NlZCA8IGIuYmxvY2tzTWlzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2b3Rlc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZPVEVTXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnZvdGVzID4gYi52b3RlcyA/IDEgOiBhLnZvdGVzIDwgYi52b3RlcyA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJrZXlcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJLRVlcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic2lnbmluZ19rZXlcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtrZXlSZW5kZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBnZXRSb3dDbGFzc05hbWUgPSByZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5pZCA9PT0gY3VycmVudCkgcmV0dXJuIFwiYWN0aXZlLXdpdG5lc3NcIjtcblxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17Z2V0Um93Q2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2l0bmVzc0xpc3QgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NMaXN0LCB7XG4gICAgc2hvd19sb2FkZXI6IHRydWVcbn0pO1xuV2l0bmVzc0xpc3QgPSB3aXRoUm91dGVyKFdpdG5lc3NMaXN0KTtcblxuY2xhc3MgV2l0bmVzc2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCIsXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogcHJvcHMuZmlsdGVyV2l0bmVzcyB8fCBcIlwiLFxuICAgICAgICAgICAgY2FyZFZpZXc6IHByb3BzLmNhcmRWaWV3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJXaXRuZXNzOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZpbHRlcldpdG5lc3M6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZVZpZXcoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2R5bkdsb2JhbE9iamVjdCwgZ2xvYmFsT2JqZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGR5bkdsb2JhbE9iamVjdCA9IGR5bkdsb2JhbE9iamVjdC50b0pTKCk7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChkeW5HbG9iYWxPYmplY3QuY3VycmVudF93aXRuZXNzKSxcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgY3VycmVudC5nZXQoXCJ3aXRuZXNzX2FjY291bnRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsb3JlLXdpdG5lc3MtLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLmN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5wYXJ0aWNpcGF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLnBheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5idWRnZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMubmV4dF92b3RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVudEFjY291bnQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5HbG9iYWxPYmplY3QucGFydGljaXBhdGlvbn0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5wYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0bmVzc19wYXlfcGVyX2Jsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LndpdG5lc3NfYnVkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QubmV4dF9tYWludGVuYW5jZV90aW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpdG5lc3NMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNsb3Q9e2R5bkdsb2JhbE9iamVjdC5jdXJyZW50X2FzbG90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50ID8gY3VycmVudC5nZXQoXCJpZFwiKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3Nlcz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzTGlzdD17Z2xvYmFsT2JqZWN0LmFjdGl2ZV93aXRuZXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJXaXRuZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVmlldz17dGhpcy5zdGF0ZS5jYXJkVmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2l0bmVzc2VzID0gQmluZFRvQ2hhaW5TdGF0ZShXaXRuZXNzZXMpO1xuXG5jbGFzcyBXaXRuZXNzU3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8V2l0bmVzc2VzIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbldpdG5lc3NTdG9yZVdyYXBwZXIgPSBjb25uZWN0KFxuICAgIFdpdG5lc3NTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkVmlldzogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXCJjYXJkVmlld1wiKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJXaXRuZXNzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJXaXRuZXNzXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2l0bmVzc1N0b3JlV3JhcHBlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge0ljb24sIElucHV0LCBUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBDb21taXR0ZWVNZW1iZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb21taXR0ZWVfbWVtYmVyczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NvbW1pdHRlZV9tZW1iZXJzLCBtZW1iZXJzTGlzdH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbnVsbDtcblxuICAgICAgICBsZXQgcmFua3MgPSB7fTtcblxuICAgICAgICBjb21taXR0ZWVfbWVtYmVyc1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyc0xpc3QuaW5kZXhPZihhLmdldChcImlkXCIpKSAhPT0gLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFua3NbYy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbW1pdHRlZV9tZW1iZXJzLmxlbmd0aCA+IDAgJiYgY29tbWl0dGVlX21lbWJlcnNbMV0pIHtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UgPSBjb21taXR0ZWVfbWVtYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImNvbW1pdHRlZV9tZW1iZXJfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X2RhdGEgPSBDaGFpblN0b3JlLmdldENvbW1pdHRlZU1lbWJlckJ5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50X2RhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJuYW1lXCIpLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIgfHwgXCJcIikgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiY29tbWl0dGVlX21lbWJlcl9hY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfZGF0YSA9IENoYWluU3RvcmUuZ2V0Q29tbWl0dGVlTWVtYmVyQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBhLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuazogcmFua3NbYS5nZXQoXCJpZFwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3RlczogYWNjb3VudF9kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhY2NvdW50X2RhdGEuZ2V0KFwidXJsXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCIjXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJyYW5rXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5yYW5rID4gYi5yYW5rID8gMSA6IGEucmFuayA8IGIucmFuayA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTkFNRVwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IGEubmFtZSA8IGIubmFtZSA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2b3Rlc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZPVEVTXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnZvdGVzID4gYi52b3RlcyA/IDEgOiBhLnZvdGVzIDwgYi52b3RlcyA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXRUJQQUdFXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVybFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuQ29tbWl0dGVlTWVtYmVyTGlzdCA9IEJpbmRUb0NoYWluU3RhdGUoQ29tbWl0dGVlTWVtYmVyTGlzdCwge1xuICAgIHNob3dfbG9hZGVyOiB0cnVlXG59KTtcblxuY2xhc3MgQ29tbWl0dGVlTWVtYmVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBwcm9wcy5maWx0ZXJDb21taXR0ZWVNZW1iZXIgfHwgXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuZ2xvYmFsT2JqZWN0LCB0aGlzLnByb3BzLmdsb2JhbE9iamVjdCkgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5maWx0ZXJDb21taXR0ZWVNZW1iZXIgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJDb21taXR0ZWVNZW1iZXIgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5jYXJkVmlldyAhPT0gdGhpcy5zdGF0ZS5jYXJkVmlld1xuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkZpbHRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Z2xvYmFsT2JqZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTKCk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZUNvbW1pdHRlZU1lbWJlcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnMpIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21taXR0ZWVNZW1iZXJzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNba2V5XVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIud2l0bmVzc2VzLmZpbHRlcl9ieV9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uRmlsdGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8SWNvbiB0eXBlPVwic2VhcmNoXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWl0dGVlTWVtYmVyTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWVfbWVtYmVycz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnNMaXN0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5Db21taXR0ZWVNZW1iZXJzID0gQmluZFRvQ2hhaW5TdGF0ZShDb21taXR0ZWVNZW1iZXJzKTtcblxuY2xhc3MgQ29tbWl0dGVlTWVtYmVyc1N0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbW1pdHRlZU1lbWJlcnMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuQ29tbWl0dGVlTWVtYmVyc1N0b3JlV3JhcHBlciA9IGNvbm5lY3QoXG4gICAgQ29tbWl0dGVlTWVtYmVyc1N0b3JlV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRWaWV3OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJjYXJkVmlld0NvbW1pdHRlZVwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImZpbHRlckNvbW1pdHRlZU1lbWJlclwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBGZWVzIGZyb20gXCIuL0ZlZXNcIjtcblxuY2xhc3MgRmVlc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmVlcyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVlc0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQge0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudH0gZnJvbSBcIi4uL1V0aWxpdHkvRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIENoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Q2FyZH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xubGV0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xuXG4vLyBEZWZpbmUgZ3JvdXBzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiBpZHNcbmxldCBmZWVfZ3JvdXBpbmcgPSB7XG4gICAgZ2VuZXJhbDogWzAsIDI1LCAyNiwgMjcsIDI4LCAzMiwgMzMsIDM3LCAzOSwgNDAsIDQxXSxcbiAgICBhc3NldDogWzEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAzOCwgNDIsIDQzLCA0NCwgNDcsIDQ4XSxcbiAgICBtYXJrZXQ6IFsxLCAyLCAzLCA0LCA0NSwgNDZdLFxuICAgIGFjY291bnQ6IFs1LCA2LCA3LCA4LCA5XSxcbiAgICBidXNpbmVzczogWzIwLCAyMSwgMjIsIDIzLCAyNCwgMjksIDMwLCAzMSwgMzQsIDM1LCAzNl1cbn07XG5cbi8vIE9wZXJhdGlvbnMgdGhhdCByZXF1aXJlIExUTVxubGV0IGx0bV9yZXF1aXJlZCA9IFs1LCA3LCAyMCwgMjEsIDM0XTtcblxuY2xhc3MgRmVlR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5nbG9iYWxPYmplY3QsIHRoaXMucHJvcHMuZ2xvYmFsT2JqZWN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Z2xvYmFsT2JqZWN0LCBzZXR0aW5ncywgb3BJZHMsIHRpdGxlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTT04oKTtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKTtcblxuICAgICAgICBsZXQgY3VycmVudF9mZWVzID0gZ2xvYmFsT2JqZWN0LnBhcmFtZXRlcnMuY3VycmVudF9mZWVzO1xuICAgICAgICBsZXQgbmV0d29ya19mZWUgPSBnbG9iYWxPYmplY3QucGFyYW1ldGVycy5uZXR3b3JrX3BlcmNlbnRfb2ZfZmVlIC8gMWU0O1xuICAgICAgICBsZXQgc2NhbGUgPSBjdXJyZW50X2ZlZXMuc2NhbGU7XG4gICAgICAgIGxldCBmZWVzUmF3ID0gY3VycmVudF9mZWVzLnBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBwcmVmZXJyZWRVbml0ID0gc2V0dGluZ3MuZ2V0KFwidW5pdFwiKSB8fCBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBsZXQgdHJ4VHlwZXMgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi50cnhUeXBlc1wiKTtcblxuICAgICAgICBsZXQgZmVlcyA9IG9wSWRzLm1hcChvcElEID0+IHtcbiAgICAgICAgICAgIGxldCBmZWVJZHggPSBmZWVzUmF3LmZpbmRJbmRleChmID0+IGZbMF0gPT09IG9wSUQpO1xuICAgICAgICAgICAgaWYgKGZlZUlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIFwiQXNraW5nIGZvciBub24tZXhpc3RpbmcgZmVlIGlkICVkISBDaGVjayBncm91cCBzZXR0aW5ncyBpbiBGZWVzLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICBvcElEXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEZJWE1FLCBpZiBJIGFzayBmb3IgYSBmZWUgdGhhdCBkb2VzIG5vdCBleGlzdD9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZlZVN0cnVjdCA9IGZlZXNSYXdbZmVlSWR4XTtcblxuICAgICAgICAgICAgbGV0IG9wSWQgPSBmZWVTdHJ1Y3RbMF07XG4gICAgICAgICAgICBsZXQgZmVlID0gZmVlU3RydWN0WzFdO1xuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbl9uYW1lID0gb3BzW29wSWRdO1xuICAgICAgICAgICAgbGV0IGZlZW5hbWUgPSB0cnhUeXBlc1tvcGVyYXRpb25fbmFtZV07XG5cbiAgICAgICAgICAgIGxldCBmZWVSYXRlRm9yTFRNID0gbmV0d29ya19mZWU7XG4gICAgICAgICAgICBpZiAob3BJZCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JpdHNoYXJlcy9iaXRzaGFyZXMtdWkvaXNzdWVzLzk5NlxuICAgICAgICAgICAgICAgIGZlZVJhdGVGb3JMVE0gPSAwLjUgKyAwLjUgKiBuZXR3b3JrX2ZlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGxldCBoZWFkSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBsYWJlbENsYXNzID0gY2xhc3NOYW1lcyhcImxhYmVsXCIsIFwiaW5mb1wiKTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGZlZSkge1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSAoZmVlW2tleV0gKiBzY2FsZSkgLyAxZTQ7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudEZvckxUTSA9IGFtb3VudCAqIGZlZVJhdGVGb3JMVE07XG4gICAgICAgICAgICAgICAgbGV0IGZlZVR5cGVzID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24uZmVlVHlwZXNcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0QW1vdW50ID0gYW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXthbW91bnR9IGFzc2V0PVwiMS4zLjBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBlcXVpdmFsZW50QW1vdW50ID0gYW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsUHJlY2lzaW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Fzc2V0PXtwcmVmZXJyZWRVbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbERlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldEFtb3VudExUTSA9IGFtb3VudEZvckxUTSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YW1vdW50Rm9yTFRNfSBhc3NldD1cIjEuMy4wXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXF1aXZhbGVudEFtb3VudExUTSA9IGFtb3VudEZvckxUTSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFByZWNpc2lvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50Rm9yTFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkSW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZEluY2x1ZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93U3Bhbj1cIjZcIiBzdHlsZT17e3dpZHRoOiBcIjE1ZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFiZWxDbGFzc30+e2ZlZW5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobHRtX3JlcXVpcmVkLmluZGV4T2Yob3BJZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3BJZC50b1N0cmluZygpICsga2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW2tleV0gPT09IFwiQW5udWFsIE1lbWJlcnNoaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpbmV0aHJvdWdoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVUeXBlc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50ICE9PSAwICYmIHByZWZlcnJlZFVuaXQgIT09IFwiQlRTXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VxdWl2YWxlbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCA/IGFzc2V0QW1vdW50TFRNIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQgIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkVW5pdCAhPT0gXCJCVFNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17b3BJZC50b1N0cmluZygpICsga2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVUeXBlc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSA8c3VwPio8L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudCAhPT0gMCAmJiBwcmVmZXJyZWRVbml0ICE9PSBcIkJUU1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7LyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcXVpdmFsZW50QW1vdW50TFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPHRib2R5IGtleT17ZmVlSWR4fT57cm93c308L3Rib2R5PjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkPnt0aGlzLnByb3BzLnRpdGxlLnRvVXBwZXJDYXNlKCl9PC9DYXJkPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuYmxvY2sub3BcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMudHlwZVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMuZmVlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy5mZWVsdG1cIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAge2ZlZXN9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbkZlZUdyb3VwID0gQmluZFRvQ2hhaW5TdGF0ZShGZWVHcm91cCk7XG5cbmNsYXNzIEZlZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IEZlZUdyb3Vwc1RpdGxlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24uZmVlR3JvdXBzXCIpO1xuICAgICAgICBsZXQgZmVlR3JvdXBzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgZ3JvdXBOYW1lIGluIGZlZV9ncm91cGluZykge1xuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZVRleHQgPSBGZWVHcm91cHNUaXRsZVtncm91cE5hbWVdO1xuICAgICAgICAgICAgbGV0IGZlZUlkcyA9IGZlZV9ncm91cGluZ1tncm91cE5hbWVdO1xuICAgICAgICAgICAgZmVlR3JvdXBzLnB1c2goXG4gICAgICAgICAgICAgICAgPEZlZUdyb3VwXG4gICAgICAgICAgICAgICAgICAgIGtleT17Z3JvdXBOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgb3BJZHM9e2ZlZUlkc31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2dyb3VwTmFtZVRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCIgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50IHBhdGg9e1wiY29tcG9uZW50cy9GZWVzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+e2ZlZUdyb3Vwc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCbG9ja2NoYWluU3RvcmUgZnJvbSBcInN0b3Jlcy9CbG9ja2NoYWluU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBCbG9ja3MgZnJvbSBcIi4vQmxvY2tzXCI7XG5cbmNsYXNzIEJsb2Nrc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Jsb2NrY2hhaW5TdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdEJsb2NrczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TdG9yZS5nZXRTdGF0ZSgpLmxhdGVzdEJsb2NrcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VHJhbnNhY3Rpb25zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkubGF0ZXN0VHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QmxvY2tzIC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2Nrc0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCbG9ja2NoYWluQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CbG9ja2NoYWluQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi4vQmxvY2tjaGFpbi9PcGVyYXRpb25cIjtcbmltcG9ydCBMaW5rVG9XaXRuZXNzQnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNoYXJ0IGZyb20gXCIuL1RyYW5zYWN0aW9uQ2hhcnRcIjtcbmltcG9ydCBCbG9ja3RpbWVDaGFydCBmcm9tIFwiLi9CbG9ja3RpbWVDaGFydFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBUaW1lQWdvIGZyb20gXCIuLi9VdGlsaXR5L1RpbWVBZ29cIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IFRyYW5zaXRpb25XcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zaXRpb25XcmFwcGVyXCI7XG5cbnJlcXVpcmUoXCIuLi9CbG9ja2NoYWluL2pzb24taW5zcGVjdG9yLnNjc3NcIik7XG5cbmNsYXNzIEJsb2NrVGltZUFnbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gbmV4dFByb3BzLmJsb2NrVGltZSAhPT0gdGhpcy5wcm9wcy5ibG9ja1RpbWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Jsb2NrVGltZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIGxldCB0aW1lUGFzc2VkID0gRGF0ZS5ub3coKSAtIGJsb2NrVGltZTtcbiAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGJsb2NrVGltZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGxldCB0ZXh0Q2xhc3MgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgXCJ0eHRsYWJlbFwiLFxuICAgICAgICAgICAge3N1Y2Nlc3M6IHRpbWVQYXNzZWQgPD0gNjAwMH0sXG4gICAgICAgICAgICB7aW5mbzogdGltZVBhc3NlZCA+IDYwMDAgJiYgdGltZVBhc3NlZCA8PSAxNTAwMH0sXG4gICAgICAgICAgICB7d2FybmluZzogdGltZVBhc3NlZCA+IDE1MDAwICYmIHRpbWVQYXNzZWQgPD0gMjUwMDB9LFxuICAgICAgICAgICAge2Vycm9yOiB0aW1lUGFzc2VkID4gMjUwMDB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGJsb2NrVGltZSA/IChcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3RleHRDbGFzc30+XG4gICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17YmxvY2tUaW1lfSAvPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBCbG9ja3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIixcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBcIjIuMS4wXCIsXG4gICAgICAgIGxhdGVzdEJsb2Nrczoge30sXG4gICAgICAgIGFzc2V0czoge30sXG4gICAgICAgIGFjY291bnRzOiB7fSxcbiAgICAgICAgaGVpZ2h0OiAxXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZXJhdGlvbnNIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICBibG9ja3NIZWlnaHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQgPSB0aGlzLl91cGRhdGVIZWlnaHQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfZ2V0QmxvY2soaGVpZ2h0LCBtYXhCbG9jaykge1xuICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUludChoZWlnaHQsIDEwKTtcbiAgICAgICAgICAgIEJsb2NrY2hhaW5BY3Rpb25zLmdldExhdGVzdChoZWlnaHQsIG1heEJsb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fdXBkYXRlSGVpZ2h0LCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3VwZGF0ZUhlaWdodCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEluaXRpYWxCbG9ja3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF4QmxvY2sgPSBuZXh0UHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLnNpemUgPj0gMjAgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIikgIT09XG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5nZXQoMCkuaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QmxvY2sobWF4QmxvY2ssIG1heEJsb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXRJbml0aWFsQmxvY2tzKCk7XG4gICAgICAgIGxldCBvYyA9IHRoaXMucmVmcy5vcGVyYXRpb25zO1xuICAgICAgICBQcy5pbml0aWFsaXplKG9jKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucmVmcy5ibG9ja3M7XG4gICAgICAgIFBzLmluaXRpYWxpemUoYmxvY2tzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5sYXRlc3RCbG9ja3MsIHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xuICAgIH1cblxuICAgIF9nZXRJbml0aWFsQmxvY2tzKCkge1xuICAgICAgICBsZXQgbWF4QmxvY2sgPSBwYXJzZUludChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpLFxuICAgICAgICAgICAgMTBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG1heEJsb2NrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLnNpemU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLmdldChqKS5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhCbG9jayAtIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0QmxvY2sobWF4QmxvY2sgLSBpLCBtYXhCbG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMucmVmcy5vdXRlcldyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgb3BlcmF0aW9uc1RleHRIZWlnaHQgPSB0aGlzLnJlZnMub3BlcmF0aW9uc1RleHQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgYmxvY2tzVGV4dEhlaWdodCA9IHRoaXMucmVmcy5ibG9ja3NUZXh0Lm9mZnNldEhlaWdodDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnNIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCAtIG9wZXJhdGlvbnNUZXh0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGJsb2Nrc0hlaWdodDogY29udGFpbmVySGVpZ2h0IC0gYmxvY2tzVGV4dEhlaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucHNVcGRhdGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwc1VwZGF0ZSgpIHtcbiAgICAgICAgbGV0IG9jID0gdGhpcy5yZWZzLm9wZXJhdGlvbnM7XG4gICAgICAgIFBzLnVwZGF0ZShvYyk7XG4gICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnJlZnMuYmxvY2tzO1xuICAgICAgICBQcy51cGRhdGUoYmxvY2tzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsYXRlc3RCbG9ja3MsXG4gICAgICAgICAgICBsYXRlc3RUcmFuc2FjdGlvbnMsXG4gICAgICAgICAgICBnbG9iYWxPYmplY3QsXG4gICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QsXG4gICAgICAgICAgICBjb3JlQXNzZXRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YmxvY2tzSGVpZ2h0LCBvcGVyYXRpb25zSGVpZ2h0fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNPYmplY3QgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBjb3JlQXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGxldCBibG9ja3MgPSBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gbnVsbDtcbiAgICAgICAgbGV0IGhlYWRCbG9jayA9IG51bGw7XG4gICAgICAgIGxldCB0cnhDb3VudCA9IDAsXG4gICAgICAgICAgICBibG9ja0NvdW50ID0gbGF0ZXN0QmxvY2tzLnNpemUsXG4gICAgICAgICAgICB0cnhQZXJTZWMgPSAwLFxuICAgICAgICAgICAgYmxvY2tUaW1lcyA9IFtdLFxuICAgICAgICAgICAgYXZnVGltZSA9IDA7XG5cbiAgICAgICAgaWYgKGxhdGVzdEJsb2NrcyAmJiBsYXRlc3RCbG9ja3Muc2l6ZSA+PSAyMCkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzVGltZTtcblxuICAgICAgICAgICAgbGV0IGxhc3RCbG9jaywgZmlyc3RCbG9jaztcblxuICAgICAgICAgICAgLy8gTWFwIG91dCB0aGUgYmxvY2sgdGltZXMgZm9yIHRoZSBsYXRlc3QgYmxvY2tzIGFuZCBjb3VudCB0aGUgbnVtYmVyIG9mIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgbGF0ZXN0QmxvY2tzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB1c2UgY29uc2VjdXRpdmUgYmxvY2tzIGNvdW50aW5nIGJhY2sgZnJvbSBoZWFkIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmlkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpIC0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChibG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ4Q291bnQgKz0gYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lcy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxvY2sudGltZXN0YW1wIC0gcHJldmlvdXNUaW1lKSAvIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrID0gYmxvY2sudGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RCbG9jayA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSBibG9jay50aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE91dHB1dCBibG9jayByb3dzIGZvciB0aGUgbGFzdCAyMCBibG9ja3NcbiAgICAgICAgICAgIGJsb2NrcyA9IGxhdGVzdEJsb2Nrc1xuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmlkIC0gYS5pZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50YWtlKDIwKVxuICAgICAgICAgICAgICAgIC5tYXAoYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YmxvY2suaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYmxvY2svJHtibG9jay5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7dXRpbHMuZm9ybWF0X251bWJlcihibG9jay5pZCwgMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jay50aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb1dpdG5lc3NCeUlkIHdpdG5lc3M9e2Jsb2NrLndpdG5lc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIGxldCB0cnhJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucyA9IGxhdGVzdFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmJsb2NrX251bSAtIGEuYmxvY2tfbnVtO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRha2UoMjApXG4gICAgICAgICAgICAgICAgLm1hcCh0cnggPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3BJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cngub3BlcmF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChvcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyeEluZGV4ID4gMTUpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJ4SW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wPXtvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dHJ4Lm9wZXJhdGlvbl9yZXN1bHRzW29wSW5kZXgrK119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jaz17dHJ4LmJsb2NrX251bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3BMYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtcIjEuMi4wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVBlbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgaGVhZEJsb2NrID0gbGF0ZXN0QmxvY2tzLmZpcnN0KCkudGltZXN0YW1wO1xuICAgICAgICAgICAgYXZnVGltZSA9IGJsb2NrVGltZXMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCwgaWR4LCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnRbMV0gLyBhcnJheS5sZW5ndGg7XG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgdHJ4UGVyU2VjID0gdHJ4Q291bnQgLyAoKGxhc3RCbG9jayAtIGZpcnN0QmxvY2spIC8gMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJvdXRlcldyYXBwZXJcIiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgey8qIEZpcnN0IHJvdyBvZiBzdGF0cyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC1ob3Jpem9udGFsIGJsb2Nrcy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmN1cnJlbnRfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MubGFzdF9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja1RpbWVBZ28gYmxvY2tUaW1lPXtoZWFkQmxvY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX3NlY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXRpbHMuZm9ybWF0X251bWJlcih0cnhQZXJTZWMsIDIpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hdmdfY29uZl90aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1dGlscy5mb3JtYXRfbnVtYmVyKGF2Z1RpbWUgLyAyLCAyKX1zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBTZWNvbmQgcm93IG9mIHN0YXRzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyIGdyaWQtYmxvY2sgc2hyaW5rIHNtYWxsLWhvcml6b250YWwgIGJsb2Nrcy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hY3RpdmVfd2l0bmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInR4dGxhYmVsIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbE9iamVjdC5nZXQoXCJhY3RpdmVfd2l0bmVzc2VzXCIpLnNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eHRsYWJlbCBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5nZXQoXCJhY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnRyeF9wZXJfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4Q291bnQgLyBibG9ja0NvdW50IHx8IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5yZWNlbnRseV9taXNzZWRfYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIHdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiMTAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bkdsb2JhbE9iamVjdC5nZXQoXCJyZWNlbnRseV9taXNzZWRfY291bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBUaGlyZCByb3c6IGdyYXBocyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC12ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBibG9ja3Mtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC0xMiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5jdXJyZW50X3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVBc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmJsb2NrX3RpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2t0aW1lQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lcz17YmxvY2tUaW1lc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZF9ibG9ja19udW1iZXI9e2R5bkdsb2JhbE9iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRfYmxvY2tfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MudHJ4X3Blcl9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtsYXRlc3RCbG9ja3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfYmxvY2s9e2R5bkdsb2JhbE9iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRfYmxvY2tfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuc3RlYWx0aF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmZpZGVudGlhbF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVBc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBGb3VydGggcm93OiB0cmFuc2FjdGlvbnMgYW5kIGJsb2NrcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInRyYW5zYWN0aW9uc0Jsb2NrXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIG1lZGl1bS02IHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvdyBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwib3BlcmF0aW9uc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5yZWNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGZpeGVkLWhlaWdodC0ycmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnZvdGVzLmluZm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG9wZXJhdGlvbnNIZWlnaHQgfHwgXCI0MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwib3BlcmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZml4ZWQtaGVpZ2h0LTJyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57dHJhbnNhY3Rpb25zfTwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtIHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ0xlZnQ6IDV9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3cgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImJsb2Nrc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MucmVjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IGJsb2Nrc0hlaWdodCB8fCBcIjQzOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGZpeGVkLWhlaWdodC0ycmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLndpdG5lc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5jb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ja3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5CbG9ja3MgPSBCaW5kVG9DaGFpblN0YXRlKEJsb2Nrcywge3Nob3dfbG9hZGVyOiB0cnVlfSk7XG5CbG9ja3MgPSBBc3NldFdyYXBwZXIoQmxvY2tzLCB7XG4gICAgcHJvcE5hbWVzOiBbXCJjb3JlQXNzZXRcIl0sXG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQmxvY2tzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuL0xpbmtUb0FjY291bnRCeUlkXCI7XG5cbmNsYXNzIExpbmtUb1dpdG5lc3NCeUlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB3aXRuZXNzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgd2l0bmVzc19hY2NvdW50ID0gdGhpcy5wcm9wcy53aXRuZXNzLmdldChcIndpdG5lc3NfYWNjb3VudFwiKTtcbiAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXt3aXRuZXNzX2FjY291bnR9IC8+O1xuICAgIH1cbn1cbkxpbmtUb1dpdG5lc3NCeUlkID0gQmluZFRvQ2hhaW5TdGF0ZShMaW5rVG9XaXRuZXNzQnlJZCk7XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtUb1dpdG5lc3NCeUlkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0SGlnaGNoYXJ0IGZyb20gXCJyZWFjdC1oaWdoY2hhcnRzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmNsYXNzIFRyYW5zYWN0aW9uQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ibG9ja3Muc2l6ZSA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoYXJ0ID0gdGhpcy5yZWZzLnRyeF9jaGFydCA/IHRoaXMucmVmcy50cnhfY2hhcnQuY2hhcnQgOiBudWxsO1xuICAgICAgICBpZiAoY2hhcnQgJiYgbmV4dFByb3BzLmJsb2NrcyAhPT0gdGhpcy5wcm9wcy5ibG9ja3MpIHtcbiAgICAgICAgICAgIGxldCB7dHJ4RGF0YSwgY29sb3JzfSA9IHRoaXMuX2dldERhdGEobmV4dFByb3BzKTtcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSBjaGFydC5zZXJpZXNbMF07XG4gICAgICAgICAgICBsZXQgZmluYWxWYWx1ZSA9IHNlcmllcy54RGF0YVtzZXJpZXMueERhdGEubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnQ6XCIsIGNoYXJ0LCBcInNlcmllczpcIiwgc2VyaWVzLmRhdGEsIFwiZmluYWxWYWx1ZTpcIiwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoc2VyaWVzLnhEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRyeERhdGEuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludFswXSA+IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hZGRQb2ludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMueERhdGEubGVuZ3RoID49IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjaGFydC5vcHRpb25zLnBsb3RPcHRpb25zLmNvbHVtbi5jb2xvcnMgPSBjb2xvcnM7XG5cbiAgICAgICAgICAgICAgICBjaGFydC5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja3MgIT09IHRoaXMucHJvcHMuYmxvY2tzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaGVhZF9ibG9jayAhPT0gdGhpcy5wcm9wcy5oZWFkX2Jsb2NrXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldERhdGEocHJvcHMpIHtcbiAgICAgICAgbGV0IHtibG9ja3MsIGhlYWRfYmxvY2t9ID0gcHJvcHM7XG5cbiAgICAgICAgbGV0IHRyeERhdGEgPSBbXTtcbiAgICAgICAgbGV0IG1heCA9IDA7XG4gICAgICAgIHRyeERhdGEgPSBibG9ja3NcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPj0gaGVhZF9ibG9jayAtIDMwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50YWtlTGFzdCgzMClcbiAgICAgICAgICAgIC5tYXAoYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGgsIG1heCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtibG9jay5pZCwgYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aF07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICBsZXQgY29sb3JzID0gdHJ4RGF0YS5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbnRyeTpcIiwgZW50cnkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5WzFdIDw9IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjNTBEMkMyXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0EwRDNFOFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAyMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNGQ0FCNTNcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI2RlYjg2OVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgICAgdHJ4RGF0YSxcbiAgICAgICAgICAgIG1heFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt0cnhEYXRhLCBjb2xvcnMsIG1heH0gPSB0aGlzLl9nZXREYXRhKHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGxldCB0b29sdGlwTGFiZWwgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICBcImV4cGxvcmVyLmJsb2Nrcy50cmFuc2FjdGlvbnNcIlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwKVwiLFxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IFswLCAwLCA1LCAwXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2VTZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF2aWdhdG9yOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b29sdGlwTGFiZWwgKyBcIjogXCIgKyB0aGlzLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUcmFuc2FjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdHJ4RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzUwRDJDMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogTWF0aC5tYXgoMS41LCBtYXggKyAwLjUpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2VJbmRpY2F0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb2x1bW46IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5Qb2ludExlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JCeVBvaW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRyeERhdGEubGVuZ3RoID8gKFxuICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IHJlZj1cInRyeF9jaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxuICAgICAgICApIDogbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uQ2hhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RIaWdoY2hhcnQgZnJvbSBcInJlYWN0LWhpZ2hjaGFydHNcIjtcbmltcG9ydCB7dGFrZVJpZ2h0fSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmNsYXNzIEJsb2NrdGltZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggPCAxOSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoYXJ0ID0gdGhpcy5yZWZzLmNoYXJ0ID8gdGhpcy5yZWZzLmNoYXJ0LmNoYXJ0IDogbnVsbDtcbiAgICAgICAgaWYgKGNoYXJ0KSB7XG4gICAgICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKG5leHRQcm9wcyk7XG4gICAgICAgICAgICBsZXQgc2VyaWVzID0gY2hhcnQuc2VyaWVzWzBdO1xuICAgICAgICAgICAgbGV0IGZpbmFsVmFsdWUgPSBzZXJpZXMueERhdGFbc2VyaWVzLnhEYXRhLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoc2VyaWVzLnhEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYXJ0LCBcInNlcmllczpcIiwgc2VyaWVzLmRhdGEsIFwiZmluYWxWYWx1ZTpcIiwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYmxvY2tUaW1lcy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50WzBdID4gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzLmFkZFBvaW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy54RGF0YS5sZW5ndGggPj0gMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNoYXJ0Lm9wdGlvbnMucGxvdE9wdGlvbnMuY29sdW1uLmNvbG9ycyA9IGNvbG9ycztcblxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUaW1lc1tuZXh0UHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggLSAxXVswXSAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrVGltZXNbdGhpcy5wcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCAtIDFdWzBdIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggIT09IHRoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHtibG9ja1RpbWVzLCBoZWFkX2Jsb2NrfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgYmxvY2tUaW1lcy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYVswXSA+PSBoZWFkX2Jsb2NrIC0gMzA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChibG9ja1RpbWVzICYmIGJsb2NrVGltZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBibG9ja1RpbWVzID0gdGFrZVJpZ2h0KGJsb2NrVGltZXMsIDMwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xvcnMgPSBibG9ja1RpbWVzLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnlbMV0gPD0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiM1MEQyQzJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjQTBEM0U4XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDIwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0ZDQUI1M1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjZGViODY5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBibG9ja1RpbWVzLFxuICAgICAgICAgICAgY29sb3JzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGxldCB0b29sdGlwTGFiZWwgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5ibG9ja3MuYmxvY2tfdGltZVwiKTtcblxuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMCwgMCwgMClcIixcbiAgICAgICAgICAgICAgICBzcGFjaW5nOiBbMCwgMCwgNSwgMF0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhbmdlU2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRvcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcExhYmVsICsgXCI6IFwiICsgdGhpcy55ICsgXCJzXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCbG9jayB0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGJsb2NrVGltZXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MEQyQzJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyaWRMaW5lV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlSW5kaWNhdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY29sdW1uOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluUG9pbnRMZW5ndGg6IDMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBjb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBibG9ja1RpbWVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxSZWFjdEhpZ2hjaGFydCByZWY9XCJjaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxuICAgICAgICApIDogbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrdGltZUNoYXJ0O1xuIiwiaW1wb3J0IGJhc2VTbGljZSBmcm9tICcuL19iYXNlU2xpY2UuanMnO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuL3RvSW50ZWdlci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNsaWNlIG9mIGBhcnJheWAgd2l0aCBgbmAgZWxlbWVudHMgdGFrZW4gZnJvbSB0aGUgZW5kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gdGFrZS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbM11cbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10sIDIpO1xuICogLy8gPT4gWzIsIDNdXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdLCA1KTtcbiAqIC8vID0+IFsxLCAyLCAzXVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSwgMCk7XG4gKiAvLyA9PiBbXVxuICovXG5mdW5jdGlvbiB0YWtlUmlnaHQoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbiA9IChndWFyZCB8fCBuID09PSB1bmRlZmluZWQpID8gMSA6IHRvSW50ZWdlcihuKTtcbiAgbiA9IGxlbmd0aCAtIG47XG4gIHJldHVybiBiYXNlU2xpY2UoYXJyYXksIG4gPCAwID8gMCA6IG4sIGxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRha2VSaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCIuL0Fzc2V0c1wiO1xuXG5jbGFzcyBBc3NldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tBc3NldFN0b3JlLCBTZXR0aW5nc1N0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTVBBOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJNUEFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVUlBOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJVSUFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFzc2V0cyAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldHNDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7UmFkaW8sIFRhYmxlLCBTZWxlY3QsIElucHV0LCBJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmxldCBhY2NvdW50U3RvcmFnZSA9IG5ldyBscyhcIl9fZ3JhcGhlbmVfX1wiKTtcblxuY2xhc3MgQXNzZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xuICAgICAgICBpZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuICAgICAgICBlbHNlIGNoYWluSUQgPSBcIjQwMThkNzg0XCI7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYWluSUQsXG4gICAgICAgICAgICBmb3VuZExhc3Q6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdEFzc2V0OiBcIlwiLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdGFsQXNzZXRzOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBhY2NvdW50U3RvcmFnZS5nZXQoYHRvdGFsQXNzZXRzXyR7Y2hhaW5JRH1gKSAhPSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudFN0b3JhZ2UuZ2V0KGB0b3RhbEFzc2V0c18ke2NoYWluSUR9YClcbiAgICAgICAgICAgICAgICAgICAgOiBjaGFpbklEICYmIGNoYWluSUQgPT09IFwiNDAxOGQ3ODRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAzMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDUwLCAvLyBtYWlubmV0IGhhcyAzMDAwKyBhc3NldHMsIG90aGVyIGNoYWlucyBtYXkgbm90IGhhdmUgdGhhdCBtYW55XG4gICAgICAgICAgICBhc3NldHNGZXRjaGVkOiAwLFxuICAgICAgICAgICAgYWN0aXZlRmlsdGVyOiBcIm1hcmtldFwiLFxuICAgICAgICAgICAgZmlsdGVyU2VhcmNoOiBwcm9wcy5maWx0ZXJTZWFyY2ggfHwgXCJcIixcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IFwiMjVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3RvZ2dsZUZpbHRlciA9IHRoaXMuX3RvZ2dsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvd3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVJvd3NDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuYXNzZXRzLCB0aGlzLnByb3BzLmFzc2V0cykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9jaGVja0Fzc2V0cyh0aGlzLnByb3BzLmFzc2V0cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmlsdGVyQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJTZWFyY2g6IChlLnRhcmdldC52YWx1ZSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd3NDaGFuZ2Uocm93cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IHJvd3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrQXNzZXRzKGFzc2V0cywgZm9yY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGxldCBsYXN0QXNzZXQgPSBhc3NldHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmxhc3QoKTtcblxuICAgICAgICBpZiAoYXNzZXRzLnNpemUgPT09IDAgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIoXCJBXCIsIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthc3NldHNGZXRjaGVkOiAxMDB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhc3NldHMuc2l6ZSA+PSB0aGlzLnN0YXRlLmFzc2V0c0ZldGNoZWQpIHtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIobGFzdEFzc2V0LnN5bWJvbCwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc2V0c0ZldGNoZWQ6IHRoaXMuc3RhdGUuYXNzZXRzRmV0Y2hlZCArIDk5fSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLnNpemUgPiB0aGlzLnN0YXRlLnRvdGFsQXNzZXRzKSB7XG4gICAgICAgICAgICBhY2NvdW50U3RvcmFnZS5zZXQoXG4gICAgICAgICAgICAgICAgYHRvdGFsQXNzZXRzXyR7dGhpcy5zdGF0ZS5jaGFpbklEfWAsXG4gICAgICAgICAgICAgICAgYXNzZXRzLnNpemVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hc3NldHNGZXRjaGVkID49IHRoaXMuc3RhdGUudG90YWxBc3NldHMgLSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYXNzZXRzICE9PSB0aGlzLnByb3BzLmFzc2V0cykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBc3NldHMobmV4dFByb3BzLmFzc2V0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVG9BY2NvdW50KG5hbWVfb3JfaWQpIHtcbiAgICAgICAgaWYgKCFuYW1lX29yX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+LTwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e25hbWVfb3JfaWR9IC8+O1xuICAgIH1cblxuICAgIF90b2dnbGVGaWx0ZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKHR5cGUsIGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W3R5cGVdOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpfSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBbdHlwZV06IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUZpbHRlcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1hcmtldHMuZmlsdGVyXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb3JlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIik7XG5cbiAgICAgICAgbGV0IHVpYTtcbiAgICAgICAgbGV0IG1pYTtcbiAgICAgICAgbGV0IHBtO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcInVzZXJcIikge1xuICAgICAgICAgICAgY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmFuayA+IGIucmFuayA/IDEgOiBhLnJhbmsgPCBiLnJhbmsgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Fzc2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RvQWNjb3VudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlY29yZC5jdXJyZW50U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cmVjb3JkLmFzc2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFya2V0SWRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvbWFya2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17XCJsaW5lLWNoYXJ0XCJ9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgIWEubWFya2V0X2Fzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5pbmRleE9mKHRoaXMuc3RhdGUuZmlsdGVyU2VhcmNoKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvcmVBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJUU1wiKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBhc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI6IGFzc2V0Lmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdXBwbHk6IGFzc2V0LmR5bmFtaWMuY3VycmVudF9zdXBwbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldElkOiBhc3NldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElkOiBtYXJrZXRJRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwibWFya2V0XCIpIHtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Fzc2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RvQWNjb3VudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlY29yZC5jdXJyZW50U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cmVjb3JkLmFzc2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFya2V0SWRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvbWFya2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17XCJsaW5lLWNoYXJ0XCJ9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBtaWEgPSBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5iaXRhc3NldF9kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhYS5iaXRhc3NldF9kYXRhLmlzX3ByZWRpY3Rpb25fbWFya2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5pbmRleE9mKHRoaXMuc3RhdGUuZmlsdGVyU2VhcmNoKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvcmVBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJUU1wiKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBhc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI6IGFzc2V0Lmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdXBwbHk6IGFzc2V0LmR5bmFtaWMuY3VycmVudF9zdXBwbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldElkOiBhc3NldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElkOiBtYXJrZXRJRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwicHJlZGljdGlvblwiKSB7XG4gICAgICAgICAgICBwbSA9IGFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGEub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYml0YXNzZXRfZGF0YS5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKGEuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLm1haW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlclNlYXJjaC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvcmVBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJUU1wiKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YXNzZXQuaWQuc3BsaXQoXCIuXCIpWzJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogXCI4MCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwLCBmb250V2VpZ2h0OiBcImJvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Fzc2V0LyR7YXNzZXQuc3ltYm9sfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uLmNvbmRpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHtkZXNjcmlwdGlvbi5jb25kaXRpb259KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4IDVweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24ubWFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMjBweCA1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17YXNzZXQuaXNzdWVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5keW5hbWljLmN1cnJlbnRfc3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uZXhwaXJ5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAtIHtkZXNjcmlwdGlvbi5leHBpcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5leGNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmtleSA+IGIua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5rZXkgPCBiLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhc3NldExpc3RIZWFkZXIgPSAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMuc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJtYXJrZXRzLnN1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS0xMCBtZWRpdW0tb2Zmc2V0LTEgbWFpbi1jb250ZW50IHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJsb2FkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY3RpdmVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdG9nZ2xlRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wibWFya2V0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJ1c2VyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy51c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wicHJlZGljdGlvblwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMucHJlZGljdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTUwcHhcIiwgbWFyZ2luTGVmdDogXCIyNHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucm93c09uUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJvd3NDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIxMFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjUwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIxMDBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIyMDBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJRdWljayBTZWFyY2hcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMjAwcHhcIiwgbWFyZ2luTGVmdDogXCIyNHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUZpbHRlciA9PSBcInByZWRpY3Rpb25cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3Qgcm93cz17cG19IHBhZ2VTaXplPXs2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKHRoaXMuc3RhdGUucm93c09uUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhc3NldHM6IHt9XG59O1xuXG5Bc3NldHMucHJvcFR5cGVzID0ge1xuICAgIGFzc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1BhZ2luYXRpb259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcm93czogW10sXG4gICAgICAgIHBhZ2VTaXplOiAxNSxcbiAgICAgICAgbGFiZWw6IFwidXRpbGl0eS50b3RhbF94X2l0ZW1zXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0YWJsZVwiLFxuICAgICAgICBleHRyYVJvdzogbnVsbCxcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn1cbiAgICB9O1xuXG4gICAgb25DaGFuZ2UocGFnZSwgcGFnZVNpemUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZSwgcGFnZVNpemV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwYWdlLCBwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7aGVhZGVyLCByb3dzLCBleHRyYVJvd30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0b3RhbCA9IHJvd3MubGVuZ3RoO1xuXG4gICAgICAgIGxldCBjdXJyZW50Um93cyA9IGdldFJvd3MocGFnZSwgcGFnZVNpemUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFJvd3MocGFnZSwgcGFnZVNpemUpIHtcbiAgICAgICAgICAgIGxldCByID0gW107XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBpID0gKHBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xuICAgICAgICAgICAgICAgIGkgPCBNYXRoLm1pbih0b3RhbCwgcGFnZSAqIHBhZ2VTaXplKTtcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHIucHVzaChyb3dzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUGFnaW5hdGVkIHRvbyBmYXIgb3IgZmlsdGVyZWQgb3V0IG9wdGlvbnMgd2l0aG91dCBjaGFuZ2luZyB0aGUgcGFnZSAqL1xuICAgICAgICBpZiAoIWN1cnJlbnRSb3dzLmxlbmd0aCAmJiB0b3RhbCkge1xuICAgICAgICAgICAgY3VycmVudFJvd3MgPSBnZXRSb3dzKDEsIHBhZ2VTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXIgPyA8dGhlYWQ+e2hlYWRlcn08L3RoZWFkPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhUcmFuc2l0aW9uICYmIHBhZ2UgPT09IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Um93c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0cmFSb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Um93c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0cmFSb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICB7dG90YWwgPiBwYWdlU2l6ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHRoaXMucHJvcHMubGVmdFBhZGRpbmcgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb3RhbD17dG90YWwgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17cGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiLi9BY2NvdW50c1wiO1xuXG5jbGFzcyBBY2NvdW50c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEFjY291bnRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuc2VhcmNoQWNjb3VudHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zZWFyY2hUZXJtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QWNjb3VudHMgLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHNDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuXG5jbGFzcyBBY2NvdW50Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRlbXBDb21wb25lbnQ6IFwidHJcIixcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcbiAgICB9O1xuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmNvbnRhY3RzICE9PSB0aGlzLnByb3BzLmNvbnRhY3RzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdChhY2NvdW50LCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XG4gICAgfVxuXG4gICAgX29uUmVtb3ZlQ29udGFjdChhY2NvdW50LCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIGNvbnRhY3RzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIFwiMS4zLjBcIl0pIHx8IG51bGw7XG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnQuZ2V0KFwibmFtZVwiKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudC5nZXQoXCJpZFwiKX0+XG4gICAgICAgICAgICAgICAgPHRkPnthY2NvdW50LmdldChcImlkXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAge2NvbnRhY3RzLmhhcyhhY2NvdW50TmFtZSkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLl9vblJlbW92ZUNvbnRhY3QuYmluZCh0aGlzLCBhY2NvdW50TmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWludXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLm1pbnVzX2NpcmNsZS5yZW1vdmVfY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLl9vbkFkZENvbnRhY3QuYmluZCh0aGlzLCBhY2NvdW50TmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGx1cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucGx1c19jaXJjbGUuYWRkX2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC8ke2FjY291bnROYW1lfS9vdmVydmlld2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnROYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHshYmFsYW5jZSA/IFwibi9hXCIgOiA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXtiYWxhbmNlfSAvPn1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgeyFiYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzUGVyY2VudGFnZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuQWNjb3VudFJvdyA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudFJvdyk7XG5cbmxldCBBY2NvdW50Um93V3JhcHBlciA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gPEFjY291bnRSb3cgey4uLnByb3BzfSAvPjtcbn07XG5cbkFjY291bnRSb3dXcmFwcGVyID0gY29ubmVjdChcbiAgICBBY2NvdW50Um93V3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29udGFjdHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRDb250YWN0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmNsYXNzIEFjY291bnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoVGVybTogcHJvcHMuc2VhcmNoVGVybSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZWFyY2hBY2NvdW50cyA9IGRlYm91bmNlKHRoaXMuX3NlYXJjaEFjY291bnRzLCAyMDApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuc2VhcmNoQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hBY2NvdW50c1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnNlYXJjaFRlcm0gIT09IHRoaXMuc3RhdGUuc2VhcmNoVGVybSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmlzTG9hZGluZyAhPT0gdGhpcy5zdGF0ZS5pc0xvYWRpbmdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25TZWFyY2hDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NlYXJjaEFjY291bnRzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBfc2VhcmNoQWNjb3VudHMoc2VhcmNoVGVybSkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5hY2NvdW50U2VhcmNoKHNlYXJjaFRlcm0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3NlYXJjaEFjY291bnRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c2VhcmNoVGVybX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgYWNjb3VudFJvd3MgPSBbXTtcblxuICAgICAgICBpZiAoc2VhcmNoQWNjb3VudHMuc2l6ZSA+IDAgJiYgc2VhcmNoVGVybSAmJiBzZWFyY2hUZXJtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFjY291bnRSb3dzID0gc2VhcmNoQWNjb3VudHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAqIFRoaXMgYXBwZWFycyB0byByZXR1cm4gZmFsc2UgbmVnYXRpdmVzLCBwZXJoYXBzIGZyb21cbiAgICAgICAgICAgICAgICAgICAgKiBjaGFuZ2VkIGFjY291bnQgbmFtZSBydWxlcyB3aGVuIG1vdmluZyB0byBncmFwaGVuZT8uIEVpdGhlclxuICAgICAgICAgICAgICAgICAgICAqIHdheSwgdHJ5aW5nIHRvIHJlc29sdmUgaW52YWxpZCBuYW1lcyBmYWlscyBpbiB0aGUgQ2hhaW5TdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgKiB3aGljaCBpbiB0dXJuIGJyZWFrcyB0aGUgQmluZFRvQ2hhaW5TdGF0ZSB3cmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghQ2hhaW5WYWxpZGF0aW9uLmlzX2FjY291bnRfbmFtZShhLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2Yoc2VhcmNoVGVybSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoKGFjY291bnQsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8QWNjb3VudFJvd1dyYXBwZXIga2V5PXtpZH0gYWNjb3VudD17YWNjb3VudH0gLz47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hY2NvdW50cy50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnVzZXIuYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQucGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXthY2NvdW50Um93c31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQWNjb3VudHMuZGVmYXVsdFByb3BzID0ge1xuICAgIHNlYXJjaEFjY291bnRzOiB7fVxufTtcblxuQWNjb3VudHMucHJvcFR5cGVzID0ge1xuICAgIHNlYXJjaEFjY291bnRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBNYXJrZXRzIGZyb20gXCIuL01hcmtldHNcIjtcblxuY2xhc3MgTWFya2V0c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmUsIEFzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb29rdXBSZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmxvb2t1cFJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldEJhc2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRCYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWFya2V0cyAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE15TWFya2V0cyBmcm9tIFwiLi9NeU1hcmtldHNcIjtcblxuY2xhc3MgTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5yZWZzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWlnaHR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwid3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICA8TXlNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiAyMH19XG4gICAgICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ9e3RoaXMuc3RhdGUuaGVpZ2h0ID8gdGhpcy5zdGF0ZS5oZWlnaHQgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPXt7cGFkZGluZ1RvcDogMCwgYm9yZGVyVG9wOiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgICAgIHRhYkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwic3RhclwiLCBpbmRleDogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJtYXJrZXRcIiwgaW5kZXg6IDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicXVvdGVTdXBwbHlcIiwgaW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwidm9sXCIsIGluZGV4OiA0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInByaWNlXCIsIGluZGV4OiA1fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImNoYW5nZVwiLCBpbmRleDogNn1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0Q0E7QUFIQTtBQWlEQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQW5CQTtBQXNCQTs7OztBQWhGQTtBQUNBO0FBa0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUkE7QUFpQkE7Ozs7QUFwRUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQU5BO0FBUUE7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUxBO0FBTUE7QUFDQTtBQVJBO0FBREE7QUFZQTtBQUNBO0FBT0E7QUF4QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQXRCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7Ozs7QUE5UUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBOFFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFEQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBRkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBbENBO0FBREE7QUF2QkE7QUFEQTtBQTJFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUF6RkE7QUFEQTtBQURBO0FBREE7QUEyR0E7Ozs7QUFoS0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQTJKQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBWEE7QUFDQTtBQWNBOzs7Ozs7O0FDNWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUEzSEE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBMkhBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBYkE7QUFEQTtBQURBO0FBREE7QUE4QkE7Ozs7QUE5RUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBMEVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7QUFiQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQU5BO0FBU0E7Ozs7QUFaQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFIQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBTEE7QUFuQkE7QUFnQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSEE7QUFOQTtBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBREE7QUFnQkE7QUFqQkE7QUFGQTtBQXVCQTs7OztBQTFMQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFzTEE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWVBOzs7O0FBbENBO0FBQ0E7QUFvQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFXQTtBQVhBO0FBY0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQXZDQTtBQXFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQVBBO0FBREE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBUEE7QUFEQTtBQWhEQTtBQW1FQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFMQTtBQUZBO0FBUEE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBTEE7QUFGQTtBQVBBO0FBREE7QUF0REE7QUE4RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUkE7QUFmQTtBQUpBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQW5CQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUE5QkE7QUFSQTtBQVRBO0FBSkE7QUFsQ0E7QUF4TUE7QUEwU0E7Ozs7QUExaUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBcWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNubUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUE1REE7QUFDQTtBQXNFQTtBQUdBOzs7O0FBM0pBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQTNEQTtBQUNBO0FBcUVBO0FBR0E7Ozs7QUFuSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBYkE7QUFGQTtBQWtCQTtBQWxCQTtBQXFCQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBMUJBO0FBMkJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFYQTtBQUNBO0FBY0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBWEE7QUFDQTtBQWNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBYUE7QUFFQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQkE7QUFyQkE7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBNUNBO0FBc0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQWhCQTtBQUNBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFUQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXpEQTtBQWtFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBM0VBO0FBREE7QUFEQTtBQURBO0FBOEZBOzs7O0FBcGdCQTtBQUNBO0FBc2dCQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBVUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBZEE7QUFrQkE7QUF0Q0E7QUF5Q0E7Ozs7QUF6RkE7QUFDQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBV0E7QUFYQTtBQWNBOzs7O0FBakJBO0FBQ0E7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFGQTtBQUpBO0FBekJBO0FBcUNBOzs7O0FBeEVBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFGQTtBQUNBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBQ0E7QUFXQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQXpCQTtBQWlDQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFuREE7QUFEQTtBQTJEQTs7OztBQWpJQTtBQUNBO0FBbUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFGQTtBQWlCQTtBQWpCQTtBQW9CQTs7OztBQXZCQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQWtCQTs7OztBQXJEQTtBQUNBO0FBdURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=