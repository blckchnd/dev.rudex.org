(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 2760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2761);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2764);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2765);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2767);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2773);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2776);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2778);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(723);
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

/***/ 2761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(419);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2080);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2447);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1847);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(713);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(712);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1807);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2099);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sanitize__WEBPACK_IMPORTED_MODULE_15__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















__webpack_require__(2762);

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

            var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(this.props.witness.get("id"));
            if (!witness_data) return null;
            var total_votes = witness_data.get("total_votes");

            var witness_aslot = witness_data.get("last_aslot");
            var color = {};
            if (this.props.most_recent - witness_aslot > 100) {
                color = { borderLeft: "1px solid #FCAB53" };
            } else {
                color = { borderLeft: "1px solid #50D2C2" };
            }
            var last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

            var currentClass = isCurrent ? "active-witness" : "";

            var missed = witness_data.get("total_missed");
            var missedClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: missed <= 500 }, { info: missed > 500 && missed <= 1250 }, { warning: missed > 1250 && missed <= 2000 }, { error: missed >= 200 });

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
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], { time: new Date(last_aslot_time) })
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
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

WitnessRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessRow);
WitnessRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(WitnessRow);

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
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("witness_account"));
                    if (!witness) return false;

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(witness.get("id"));
                    if (!witness_data) return false;

                    var name = witness.get("name");
                    if (!name) return false;
                    return name.indexOf(_this4.props.filter) !== -1;
                }).map(function (a) {
                    var witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(a.get("witness_account"));

                    var witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getWitnessById(witness.get("id"));

                    var witness_aslot = witness_data.get("last_aslot");

                    var last_aslot_time = new Date(Date.now() - (_this4.props.current_aslot - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);

                    return {
                        id: a.get("id"),
                        key: witness.get("name"),
                        rank: ranks[a.get("id")],
                        name: witness.get("name"),
                        signing_key: witness_data.get("signing_key"),
                        url: sanitize__WEBPACK_IMPORTED_MODULE_15___default()(witness_data.get("url"), {
                            whiteList: [], // empty, means filter out all tags
                            stripIgnoreTag: true // filter out all HTML not in the whilelist
                        }),
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
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Popover"],
                    {
                        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            { href: item, target: "_blank" },
                            item
                        ),
                        trigger: "hover"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], { type: "link" })
                );
            };

            var keyRender = function keyRender(item) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Popover"],
                    { content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            item
                        ), trigger: "hover" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], { type: "key" })
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], { time: new Date(item.timestamp) })
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
                    var blocksMissedClassName = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", { success: item <= 500 }, { info: item > 500 && item <= 1250 }, { warning: item > 1250 && item <= 2000 }, { error: item >= 200 });
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
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Table"], {
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
    witnesses: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
};

WitnessList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessList, {
    show_loader: true
});
WitnessList = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(WitnessList);

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

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                filterWitness: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_toggleView",
        value: function _toggleView() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
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

            var current = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(dynGlobalObject.current_witness),
                currentAccount = null;
            if (current) {
                currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getObject(current.get("witness_account"));
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
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.current" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.blocks.active_witnesses" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.participation" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.pay" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.budget" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "th",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "explorer.witnesses.next_vote" })
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
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    amount: globalObject.parameters.witness_pay_per_block,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    amount: dynGlobalObject.witness_budget,
                                                    asset: "1.3.0"
                                                })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                    time: new Date(dynGlobalObject.next_maintenance_time + "Z")
                                                })
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Input"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("explorer.witnesses.filter_by_name"),
                                onChange: this._onFilter.bind(this),
                                style: {
                                    width: "200px",
                                    marginBottom: "12px",
                                    marginTop: "4px"
                                },
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], { type: "search" })
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
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
};
Witnesses.defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0"
};

Witnesses = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(Witnesses);

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

WitnessStoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_9__["connect"])(WitnessStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("cardView"),
            filterWitness: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("filterWitness")
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (WitnessStoreWrapper);

/***/ }),

/***/ 2762:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(419);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1847);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(713);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2080);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(712);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2099);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sanitize__WEBPACK_IMPORTED_MODULE_11__);
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
                        url: sanitize__WEBPACK_IMPORTED_MODULE_11___default()(account_data.get("url"), {
                            whiteList: [], // empty, means filter out all tags
                            stripIgnoreTag: true // filter out all HTML not in the whilelist
                        })
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

/***/ 2765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(712);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1941);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2766);
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

/***/ 2766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2127);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1955);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2080);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2717);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(419);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(723);
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
                        if (feeTypes[key] != "Annual Membership") {
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
                        }
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

/***/ 2767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1851);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1941);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2768);
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

/***/ 2768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1807);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1852);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2081);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2445);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2769);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1955);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2299);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2770);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2771);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(570);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2447);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2080);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2639);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2703);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















__webpack_require__(2443);

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

/***/ 2769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1955);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2418);
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

/***/ 2770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2745);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
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

/***/ 2771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2772);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2745);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(574);
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

/***/ 2772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1990);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2067);



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

/***/ 2773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2371);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(712);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1941);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2774);
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

/***/ 2774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2372);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1807);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2418);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2097);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2080);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2298);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(419);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(570);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(716);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2775);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(488);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(723);
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

            var pm = void 0;

            var dataSource = [];
            var columns = [];

            // Default sorting of the ant table is defined through defaultSortOrder prop

            if (activeFilter == "user") {
                columns = [{
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    defaultSortOrder: "ascend",
                    sorter: function sorter(a, b) {
                        return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
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
                    sorter: function sorter(a, b) {
                        var issuerA = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(a.issuer, false);
                        var issuerB = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(b.issuer, false);
                        if (issuerA) issuerA = issuerA.get("name");
                        if (issuerB) issuerB = issuerB.get("name");
                        if (issuerA > issuerB) return 1;
                        if (issuerA < issuerB) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return _this2.linkToAccount(item);
                    }
                }, {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    sorter: function sorter(a, b) {
                        a.currentSupply = parseFloat(a.currentSupply);
                        b.currentSupply = parseFloat(b.currentSupply);
                        return a.currentSupply > b.currentSupply ? 1 : a.currentSupply < b.currentSupply ? -1 : 0;
                    },
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
                });
            }

            if (activeFilter == "market") {
                columns = [{
                    key: "symbol",
                    title: "symbol",
                    dataIndex: "symbol",
                    defaultSortOrder: "ascend",
                    sorter: function sorter(a, b) {
                        return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
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
                    sorter: function sorter(a, b) {
                        var issuerA = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(a.issuer, false);
                        var issuerB = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(b.issuer, false);
                        if (issuerA) issuerA = issuerA.get("name");
                        if (issuerB) issuerB = issuerB.get("name");
                        if (issuerA > issuerB) return 1;
                        if (issuerA < issuerB) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return _this2.linkToAccount(item);
                    }
                }, {
                    key: "currentSupply",
                    title: "Supply",
                    dataIndex: "currentSupply",
                    sorter: function sorter(a, b) {
                        a.currentSupply = parseFloat(a.currentSupply);
                        b.currentSupply = parseFloat(b.currentSupply);
                        return a.currentSupply > b.currentSupply ? 1 : a.currentSupply < b.currentSupply ? -1 : 0;
                    },
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
                });
            }

            if (activeFilter == "prediction") {
                pm = assets.filter(function (a) {
                    var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].parseDescription(a.options.description);

                    return a.bitasset_data && a.bitasset_data.is_prediction_market && (a.symbol.toLowerCase().indexOf(_this2.state.filterSearch.toLowerCase()) !== -1 || description.main.toLowerCase().indexOf(_this2.state.filterSearch.toLowerCase()) !== -1);
                }).sort(function (a, b) {
                    if (a.symbol < b.symbol) {
                        return -1;
                    } else if (a.symbol > b.symbol) {
                        return 1;
                    } else {
                        return 0;
                    }
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
                }).toArray();
            }

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
                                        textAlign: "left",
                                        marginBottom: "24px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        style: {
                                            display: "inline-block",
                                            width: "0px",
                                            marginTop: "2px",
                                            float: "left",
                                            fontSize: "18px"
                                        }
                                    },
                                    this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Icon"], { type: "loading" }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                    placeholder: "Filter...",
                                    value: this.state.filterSearch,
                                    style: { width: "200px" },
                                    onChange: this.handleFilterChange,
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Icon"], { type: "search" })
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Radio"].Group,
                                    {
                                        value: this.state.activeFilter,
                                        onChange: this._toggleFilter,
                                        style: {
                                            marginBottom: "7px",
                                            marginLeft: "24px"
                                        }
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
                                )
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

/***/ 2775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(724);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2703);
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

/***/ 2776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(552);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1941);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2777);
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

/***/ 2777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1807);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(568);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1855);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2314);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(552);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1939);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(419);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var Accounts = function (_React$Component) {
    _inherits(Accounts, _React$Component);

    function Accounts(props) {
        _classCallCheck(this, Accounts);

        var _this = _possibleConstructorReturn(this, (Accounts.__proto__ || Object.getPrototypeOf(Accounts)).call(this));

        _this.state = {
            searchTerm: props.searchTerm,
            isLoading: false,
            rowsOnPage: "25"
        };

        _this._searchAccounts = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._searchAccounts, 200);
        _this.handleRowsChange = _this.handleRowsChange.bind(_this);
        return _this;
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
        key: "_onAddContact",
        value: function _onAddContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].addAccountContact(account);
            this.forceUpdate();
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact(account, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeAccountContact(account);
            this.forceUpdate();
        }
    }, {
        key: "handleRowsChange",
        value: function handleRowsChange(rows) {
            this.setState({
                rowsOnPage: rows
            });
            this.forceUpdate();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var searchAccounts = this.props.searchAccounts;
            var searchTerm = this.state.searchTerm;


            var dataSource = [];
            var columns = [];

            columns = [{
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "explorer.assets.id" }),
                dataIndex: "accountId",
                key: "accountId",
                defaultSortOrder: "ascend",
                sorter: function sorter(a, b) {
                    return a.accountId > b.accountId ? 1 : a.accountId < b.accountId ? -1 : 0;
                },
                render: function render(id) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        id
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "user", title: "icons.user.account" }),
                dataIndex: "accountContacts",
                key: "accountContacts",
                render: function render(contacts, record) {
                    return contacts.has(record.accountName) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            onClick: _this2._onRemoveContact.bind(_this2, record.accountName)
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            name: "minus-circle",
                            title: "icons.minus_circle.remove_contact"
                        })
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            onClick: _this2._onAddContact.bind(_this2, record.accountName)
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            name: "plus-circle",
                            title: "icons.plus_circle.add_contact"
                        })
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "account.name" }),
                dataIndex: "accountName",
                key: "accountName",
                sorter: function sorter(a, b) {
                    return a.accountName > b.accountName ? 1 : a.accountName < b.accountName ? -1 : 0;
                },
                render: function render(name) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                            { to: "/account/" + name + "/overview" },
                            name
                        )
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "gateway.balance" }),
                dataIndex: "accountBalance",
                key: "accountBalance",
                sorter: function sorter(a, b) {
                    a.accountBalance = parseFloat(a.accountBalance);
                    b.accountBalance = parseFloat(b.accountBalance);
                    return a.accountBalance > b.accountBalance ? 1 : a.accountBalance < b.accountBalance ? -1 : 0;
                },
                render: function render(balance) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_8__["default"], { balance: balance })
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { component: "span", content: "account.percent" }),
                dataIndex: "accountPercentages",
                key: "accountPercentages",
                sorter: function sorter(a, b) {
                    a.accountPercentages = parseFloat(a.accountPercentages);
                    b.accountPercentages = parseFloat(b.accountPercentages);
                    return a.accountPercentages > b.accountPercentages ? 1 : a.accountPercentages < b.accountPercentages ? -1 : 0;
                },
                render: function render(balance) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        !balance ? "n/a" : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            balance: balance,
                            asPercentage: true
                        })
                    );
                }
            }];

            if (searchAccounts.size > 0 && searchTerm && searchTerm.length > 0) {
                searchAccounts.filter(function (a) {
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
                }).map(function (name, id) {
                    var currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getAccount(id.toLowerCase());
                    var balance = currentAccount ? currentAccount.getIn(["balances", "1.3.0"]) || null : null;

                    dataSource.push({
                        accountId: id,
                        accountContacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().accountContacts,
                        accountName: name,
                        accountBalance: balance,
                        accountPercentages: balance
                    });
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        textAlign: "left",
                                        marginBottom: "24px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Input"], {
                                    placeholder: "Search",
                                    value: this.state.searchTerm,
                                    style: { width: "200px" },
                                    onChange: this._onSearchChange.bind(this),
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Icon"], { type: "search" })
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"],
                                    {
                                        style: { width: "150px", marginLeft: "24px" },
                                        value: this.state.rowsOnPage,
                                        onChange: this.handleRowsChange
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "10" },
                                        "10 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "25" },
                                        "25 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "50" },
                                        "50 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "100" },
                                        "100 rows"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Select"].Option,
                                        { key: "200" },
                                        "200 rows"
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        style: {
                                            display: "inline-block",
                                            marginLeft: "24px"
                                        }
                                    },
                                    this.state.searchTerm.length == 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.start_typing_to_search" }) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Table"], {
                                style: { width: "100%", marginTop: "16px" },
                                rowKey: "accountId",
                                columns: columns,
                                dataSource: dataSource,
                                pagination: {
                                    position: "bottom",
                                    pageSize: Number(this.state.rowsOnPage)
                                }
                            }),
                            this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { style: { textAlign: "center", padding: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "three-bounce" })
                            ) : null
                        )
                    )
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

/***/ 2778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2348);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2371);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1941);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2779);
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

/***/ 2779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2728);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuZGMzNjNhN2YwNWIzOTM5ODIyNDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9XaXRuZXNzZXMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL3dpdG5lc3Nlcy5zY3NzPzBlM2QiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0NvbW1pdHRlZU1lbWJlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3NDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvVHJhbnNhY3Rpb25DaGFydC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Jsb2NrdGltZUNoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Rha2VSaWdodC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQWNjb3VudHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9BY2NvdW50cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldHNDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2l0bmVzc2VzIGZyb20gXCIuL1dpdG5lc3Nlc1wiO1xuaW1wb3J0IENvbW1pdHRlZU1lbWJlcnMgZnJvbSBcIi4vQ29tbWl0dGVlTWVtYmVyc1wiO1xuaW1wb3J0IEZlZXNDb250YWluZXIgZnJvbSBcIi4uL0Jsb2NrY2hhaW4vRmVlc0NvbnRhaW5lclwiO1xuaW1wb3J0IEJsb2Nrc0NvbnRhaW5lciBmcm9tIFwiLi9CbG9ja3NDb250YWluZXJcIjtcbmltcG9ydCBBc3NldHNDb250YWluZXIgZnJvbSBcIi4vQXNzZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQgQWNjb3VudHNDb250YWluZXIgZnJvbSBcIi4vQWNjb3VudHNDb250YWluZXJcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBNYXJrZXRzQ29udGFpbmVyIGZyb20gXCIuLi9FeGNoYW5nZS9NYXJrZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQge1RhYnN9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5ibG9ja3MudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQmxvY2tzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXNzZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2Fzc2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuYXNzZXRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEFzc2V0c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2FjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5hY2NvdW50cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBBY2NvdW50c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndpdG5lc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci93aXRuZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLndpdG5lc3Nlcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBXaXRuZXNzZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21taXR0ZWVfbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9jb21taXR0ZWUtbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuY29tbWl0dGVlX21lbWJlcnMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQ29tbWl0dGVlTWVtYmVyc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvbWFya2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwibWFya2V0cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBNYXJrZXRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmVlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9mZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJmZWVzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEZlZXNDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJ0YWJsZVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBUYWJDb250ZW50ID0gdGFiLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKHRhYi50cmFuc2xhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlcjtcbiIsImltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcIi4uL1V0aWxpdHkvVGltZUFnb1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtUYWJsZSwgSWNvbiwgSW5wdXQsIFBvcG92ZXJ9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBzYW5pdGl6ZSBmcm9tIFwic2FuaXRpemVcIjtcblxucmVxdWlyZShcIi4vd2l0bmVzc2VzLnNjc3NcIik7XG5cbmNsYXNzIFdpdG5lc3NSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHdpdG5lc3M6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgX29uUm93Q2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYWNjb3VudC8ke3RoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJuYW1lXCIpfWApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vICAgICBDaGFpblN0b3JlLnVuU3ViRnJvbShcIndpdG5lc3Nlc1wiLCBDaGFpblN0b3JlLmdldFdpdG5lc3NCeUlkKCB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwiaWRcIikgKS5nZXQoXCJpZFwiKSk7XG4gICAgLy8gfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdG5lc3MsIGlzQ3VycmVudCwgcmFua30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJpZFwiKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXdpdG5lc3NfZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCB0b3RhbF92b3RlcyA9IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKTtcblxuICAgICAgICBsZXQgd2l0bmVzc19hc2xvdCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2FzbG90XCIpO1xuICAgICAgICBsZXQgY29sb3IgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9zdF9yZWNlbnQgLSB3aXRuZXNzX2FzbG90ID4gMTAwKSB7XG4gICAgICAgICAgICBjb2xvciA9IHtib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjRkNBQjUzXCJ9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSB7Ym9yZGVyTGVmdDogXCIxcHggc29saWQgIzUwRDJDMlwifTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdF9hc2xvdF90aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tb3N0X3JlY2VudCAtIHdpdG5lc3NfYXNsb3QpICpcbiAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjAuMFwiKS5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2tfaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgICAgICBdKSAqXG4gICAgICAgICAgICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudENsYXNzID0gaXNDdXJyZW50ID8gXCJhY3RpdmUtd2l0bmVzc1wiIDogXCJcIjtcblxuICAgICAgICBsZXQgbWlzc2VkID0gd2l0bmVzc19kYXRhLmdldChcInRvdGFsX21pc3NlZFwiKTtcbiAgICAgICAgbGV0IG1pc3NlZENsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgIHtzdWNjZXNzOiBtaXNzZWQgPD0gNTAwfSxcbiAgICAgICAgICAgIHtpbmZvOiBtaXNzZWQgPiA1MDAgJiYgbWlzc2VkIDw9IDEyNTB9LFxuICAgICAgICAgICAge3dhcm5pbmc6IG1pc3NlZCA+IDEyNTAgJiYgbWlzc2VkIDw9IDIwMDB9LFxuICAgICAgICAgICAge2Vycm9yOiBtaXNzZWQgPj0gMjAwfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjdXJyZW50Q2xhc3N9IG9uQ2xpY2s9e3RoaXMuX29uUm93Q2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPHRkPntyYW5rfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb2xvcn0+e3dpdG5lc3MuZ2V0KFwibmFtZVwiKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17bmV3IERhdGUobGFzdF9hc2xvdF90aW1lKX0gLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57d2l0bmVzc19kYXRhLmdldChcImxhc3RfY29uZmlybWVkX2Jsb2NrX251bVwiKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e21pc3NlZENsYXNzfT57bWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17d2l0bmVzc19kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cbldpdG5lc3NSb3cgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NSb3cpO1xuV2l0bmVzc1JvdyA9IHdpdGhSb3V0ZXIoV2l0bmVzc1Jvdyk7XG5cbmNsYXNzIFdpdG5lc3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB3aXRuZXNzZXM6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc29ydEJ5OiBcInJhbmtcIixcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2sgPSB0aGlzLmhhbmRsZUJsb2NrSWRDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zZXRTb3J0KGZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc29ydEJ5OiBmaWVsZCxcbiAgICAgICAgICAgIGludmVyc2VTb3J0OlxuICAgICAgICAgICAgICAgIGZpZWxkID09PSB0aGlzLnN0YXRlLnNvcnRCeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVCbG9ja0lkQ2xpY2soYmxvY2tJZCkge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9ibG9jay8ke2Jsb2NrSWR9YCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdG5lc3NlcywgY3VycmVudCwgY2FyZFZpZXcsIHdpdG5lc3NMaXN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c29ydEJ5LCBpbnZlcnNlU29ydH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgbW9zdF9yZWNlbnRfYXNsb3QgPSAwO1xuICAgICAgICBsZXQgcmFua3MgPSB7fTtcblxuICAgICAgICB3aXRuZXNzZXNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdG5lc3NMaXN0LmluZGV4T2YoYS5nZXQoXCJpZFwiKSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYi5nZXQoXCJ0b3RhbF92b3Rlc1wiKSwgMTApIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGEuZ2V0KFwidG90YWxfdm90ZXNcIiksIDEwKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaCgodywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHcuZ2V0KFwibGFzdF9hc2xvdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vc3RfcmVjZW50X2FzbG90IDwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdF9yZWNlbnRfYXNsb3QgPSBzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmFua3Nbdy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcbiAgICAgICAgaWYgKHdpdG5lc3Nlcy5sZW5ndGggPiAwICYmIHdpdG5lc3Nlc1sxXSkge1xuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHdpdG5lc3Nlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRuZXNzID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpdG5lc3MpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aXRuZXNzX2RhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHdpdG5lc3MuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdG5lc3MgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzc19hc2xvdCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2FzbG90XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X2FzbG90X3RpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmN1cnJlbnRfYXNsb3QgLSB3aXRuZXNzX2FzbG90KSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrX2ludGVydmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB3aXRuZXNzLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiByYW5rc1thLmdldChcImlkXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHdpdG5lc3MuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pbmdfa2V5OiB3aXRuZXNzX2RhdGEuZ2V0KFwic2lnbmluZ19rZXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNhbml0aXplKHdpdG5lc3NfZGF0YS5nZXQoXCJ1cmxcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZUxpc3Q6IFtdLCAvLyBlbXB0eSwgbWVhbnMgZmlsdGVyIG91dCBhbGwgdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwSWdub3JlVGFnOiB0cnVlIC8vIGZpbHRlciBvdXQgYWxsIEhUTUwgbm90IGluIHRoZSB3aGlsZWxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdENvbmZpcm1lZEJsb2NrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2NvbmZpcm1lZF9ibG9ja19udW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBsYXN0X2FzbG90X3RpbWUuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzTWlzc2VkOiB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfbWlzc2VkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM6IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsVmFsaWQgPSBpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLyhodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdyopPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlIVxcLVxcL10pKT8vO1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaXRlbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXJsUmVuZGVyID0gaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XCJob3ZlclwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxpbmtcIiAvPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qga2V5UmVuZGVyID0gaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9ezxzcGFuPntpdGVtfTwvc3Bhbj59IHRyaWdnZXI9e1wiaG92ZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiI1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmFuayA+IGIucmFuayA/IDEgOiBhLnJhbmsgPCBiLnJhbmsgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5BTUVcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVybFwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpdGVtICYmIHVybFZhbGlkKGl0ZW0pICYmIHVybFJlbmRlcihpdGVtKSkgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTEFTVCBDT05GSVJNRUQgQkxPQ0tcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWluV2lkdGg6IFwiMTAwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2soaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3tOdW1iZXIoaXRlbS5pZCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtuZXcgRGF0ZShpdGVtLnRpbWVzdGFtcCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcCA+XG4gICAgICAgICAgICAgICAgICAgICAgICBiLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYi5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJsb2Nrc01pc3NlZFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJMT0NLUyBNSVNTRURcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYmxvY2tzTWlzc2VkXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tzTWlzc2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzOiBpdGVtIDw9IDUwMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5mbzogaXRlbSA+IDUwMCAmJiBpdGVtIDw9IDEyNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3dhcm5pbmc6IGl0ZW0gPiAxMjUwICYmIGl0ZW0gPD0gMjAwMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3I6IGl0ZW0gPj0gMjAwfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtibG9ja3NNaXNzZWRDbGFzc05hbWV9PntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYmxvY2tzTWlzc2VkID4gYi5ibG9ja3NNaXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmJsb2Nrc01pc3NlZCA8IGIuYmxvY2tzTWlzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2b3Rlc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZPVEVTXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnZvdGVzID4gYi52b3RlcyA/IDEgOiBhLnZvdGVzIDwgYi52b3RlcyA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJrZXlcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJLRVlcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic2lnbmluZ19rZXlcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtrZXlSZW5kZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBnZXRSb3dDbGFzc05hbWUgPSByZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5pZCA9PT0gY3VycmVudCkgcmV0dXJuIFwiYWN0aXZlLXdpdG5lc3NcIjtcblxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17Z2V0Um93Q2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2l0bmVzc0xpc3QgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NMaXN0LCB7XG4gICAgc2hvd19sb2FkZXI6IHRydWVcbn0pO1xuV2l0bmVzc0xpc3QgPSB3aXRoUm91dGVyKFdpdG5lc3NMaXN0KTtcblxuY2xhc3MgV2l0bmVzc2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCIsXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogcHJvcHMuZmlsdGVyV2l0bmVzcyB8fCBcIlwiLFxuICAgICAgICAgICAgY2FyZFZpZXc6IHByb3BzLmNhcmRWaWV3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJXaXRuZXNzOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZpbHRlcldpdG5lc3M6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZVZpZXcoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2R5bkdsb2JhbE9iamVjdCwgZ2xvYmFsT2JqZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGR5bkdsb2JhbE9iamVjdCA9IGR5bkdsb2JhbE9iamVjdC50b0pTKCk7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChkeW5HbG9iYWxPYmplY3QuY3VycmVudF93aXRuZXNzKSxcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgY3VycmVudC5nZXQoXCJ3aXRuZXNzX2FjY291bnRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsb3JlLXdpdG5lc3MtLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLmN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5wYXJ0aWNpcGF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLnBheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5idWRnZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMubmV4dF92b3RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVudEFjY291bnQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5HbG9iYWxPYmplY3QucGFydGljaXBhdGlvbn0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5wYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0bmVzc19wYXlfcGVyX2Jsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LndpdG5lc3NfYnVkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QubmV4dF9tYWludGVuYW5jZV90aW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpdG5lc3NMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNsb3Q9e2R5bkdsb2JhbE9iamVjdC5jdXJyZW50X2FzbG90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50ID8gY3VycmVudC5nZXQoXCJpZFwiKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3Nlcz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzTGlzdD17Z2xvYmFsT2JqZWN0LmFjdGl2ZV93aXRuZXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJXaXRuZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVmlldz17dGhpcy5zdGF0ZS5jYXJkVmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2l0bmVzc2VzID0gQmluZFRvQ2hhaW5TdGF0ZShXaXRuZXNzZXMpO1xuXG5jbGFzcyBXaXRuZXNzU3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8V2l0bmVzc2VzIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbldpdG5lc3NTdG9yZVdyYXBwZXIgPSBjb25uZWN0KFxuICAgIFdpdG5lc3NTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkVmlldzogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXCJjYXJkVmlld1wiKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJXaXRuZXNzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJXaXRuZXNzXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2l0bmVzc1N0b3JlV3JhcHBlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge0ljb24sIElucHV0LCBUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHNhbml0aXplIGZyb20gXCJzYW5pdGl6ZVwiO1xuXG5jbGFzcyBDb21taXR0ZWVNZW1iZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb21taXR0ZWVfbWVtYmVyczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NvbW1pdHRlZV9tZW1iZXJzLCBtZW1iZXJzTGlzdH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbnVsbDtcblxuICAgICAgICBsZXQgcmFua3MgPSB7fTtcblxuICAgICAgICBjb21taXR0ZWVfbWVtYmVyc1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyc0xpc3QuaW5kZXhPZihhLmdldChcImlkXCIpKSAhPT0gLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFua3NbYy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbW1pdHRlZV9tZW1iZXJzLmxlbmd0aCA+IDAgJiYgY29tbWl0dGVlX21lbWJlcnNbMV0pIHtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UgPSBjb21taXR0ZWVfbWVtYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImNvbW1pdHRlZV9tZW1iZXJfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X2RhdGEgPSBDaGFpblN0b3JlLmdldENvbW1pdHRlZU1lbWJlckJ5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50X2RhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJuYW1lXCIpLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIgfHwgXCJcIikgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiY29tbWl0dGVlX21lbWJlcl9hY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfZGF0YSA9IENoYWluU3RvcmUuZ2V0Q29tbWl0dGVlTWVtYmVyQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBhLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuazogcmFua3NbYS5nZXQoXCJpZFwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3RlczogYWNjb3VudF9kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBzYW5pdGl6ZShhY2NvdW50X2RhdGEuZ2V0KFwidXJsXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVMaXN0OiBbXSwgLy8gZW1wdHksIG1lYW5zIGZpbHRlciBvdXQgYWxsIHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcElnbm9yZVRhZzogdHJ1ZSAvLyBmaWx0ZXIgb3V0IGFsbCBIVE1MIG5vdCBpbiB0aGUgd2hpbGVsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiI1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmFuayA+IGIucmFuayA/IDEgOiBhLnJhbmsgPCBiLnJhbmsgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5BTUVcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidm90ZXNcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWT1RFU1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ2b3Rlc1wiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS52b3RlcyA+IGIudm90ZXMgPyAxIDogYS52b3RlcyA8IGIudm90ZXMgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV0VCUEFHRVwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbkNvbW1pdHRlZU1lbWJlckxpc3QgPSBCaW5kVG9DaGFpblN0YXRlKENvbW1pdHRlZU1lbWJlckxpc3QsIHtcbiAgICBzaG93X2xvYWRlcjogdHJ1ZVxufSk7XG5cbmNsYXNzIENvbW1pdHRlZU1lbWJlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogcHJvcHMuZmlsdGVyQ29tbWl0dGVlTWVtYmVyIHx8IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmdsb2JhbE9iamVjdCwgdGhpcy5wcm9wcy5nbG9iYWxPYmplY3QpIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyICE9PVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY2FyZFZpZXcgIT09IHRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25GaWx0ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlckNvbW1pdHRlZU1lbWJlcjogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2dsb2JhbE9iamVjdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBnbG9iYWxPYmplY3QgPSBnbG9iYWxPYmplY3QudG9KUygpO1xuXG4gICAgICAgIGxldCBhY3RpdmVDb21taXR0ZWVNZW1iZXJzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29tbWl0dGVlTWVtYmVycy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzW2tleV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLndpdG5lc3Nlcy5maWx0ZXJfYnlfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1pdHRlZU1lbWJlckxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVlX21lbWJlcnM9e0ltbXV0YWJsZS5MaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzTGlzdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuQ29tbWl0dGVlTWVtYmVycyA9IEJpbmRUb0NoYWluU3RhdGUoQ29tbWl0dGVlTWVtYmVycyk7XG5cbmNsYXNzIENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb21taXR0ZWVNZW1iZXJzIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbkNvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIgPSBjb25uZWN0KFxuICAgIENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkVmlldzogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZFZpZXdDb21taXR0ZWVcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJDb21taXR0ZWVNZW1iZXJcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgRmVlcyBmcm9tIFwiLi9GZWVzXCI7XG5cbmNsYXNzIEZlZXNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tTZXR0aW5nc1N0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5nc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZlZXMgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZXNDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IHtFcXVpdmFsZW50VmFsdWVDb21wb25lbnR9IGZyb20gXCIuLi9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlLCBDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlc30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmNvbnN0IHtvcGVyYXRpb25zfSA9IGdyYXBoZW5lQ2hhaW5UeXBlcztcbmxldCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcblxuLy8gRGVmaW5lIGdyb3VwcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaWRzXG5sZXQgZmVlX2dyb3VwaW5nID0ge1xuICAgIGdlbmVyYWw6IFswLCAyNSwgMjYsIDI3LCAyOCwgMzIsIDMzLCAzNywgMzksIDQwLCA0MV0sXG4gICAgYXNzZXQ6IFsxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMzgsIDQyLCA0MywgNDQsIDQ3LCA0OF0sXG4gICAgbWFya2V0OiBbMSwgMiwgMywgNCwgNDUsIDQ2XSxcbiAgICBhY2NvdW50OiBbNSwgNiwgNywgOCwgOV0sXG4gICAgYnVzaW5lc3M6IFsyMCwgMjEsIDIyLCAyMywgMjQsIDI5LCAzMCwgMzEsIDM0LCAzNSwgMzZdXG59O1xuXG4vLyBPcGVyYXRpb25zIHRoYXQgcmVxdWlyZSBMVE1cbmxldCBsdG1fcmVxdWlyZWQgPSBbNSwgNywgMjAsIDIxLCAzNF07XG5cbmNsYXNzIEZlZUdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuZ2xvYmFsT2JqZWN0LCB0aGlzLnByb3BzLmdsb2JhbE9iamVjdCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2dsb2JhbE9iamVjdCwgc2V0dGluZ3MsIG9wSWRzLCB0aXRsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBnbG9iYWxPYmplY3QgPSBnbG9iYWxPYmplY3QudG9KU09OKCk7XG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIik7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRfZmVlcyA9IGdsb2JhbE9iamVjdC5wYXJhbWV0ZXJzLmN1cnJlbnRfZmVlcztcbiAgICAgICAgbGV0IG5ldHdvcmtfZmVlID0gZ2xvYmFsT2JqZWN0LnBhcmFtZXRlcnMubmV0d29ya19wZXJjZW50X29mX2ZlZSAvIDFlNDtcbiAgICAgICAgbGV0IHNjYWxlID0gY3VycmVudF9mZWVzLnNjYWxlO1xuICAgICAgICBsZXQgZmVlc1JhdyA9IGN1cnJlbnRfZmVlcy5wYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgcHJlZmVycmVkVW5pdCA9IHNldHRpbmdzLmdldChcInVuaXRcIikgfHwgY29yZV9hc3NldC5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgbGV0IHRyeFR5cGVzID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24udHJ4VHlwZXNcIik7XG5cbiAgICAgICAgbGV0IGZlZXMgPSBvcElkcy5tYXAob3BJRCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVlSWR4ID0gZmVlc1Jhdy5maW5kSW5kZXgoZiA9PiBmWzBdID09PSBvcElEKTtcbiAgICAgICAgICAgIGlmIChmZWVJZHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICBcIkFza2luZyBmb3Igbm9uLWV4aXN0aW5nIGZlZSBpZCAlZCEgQ2hlY2sgZ3JvdXAgc2V0dGluZ3MgaW4gRmVlcy5qc3hcIixcbiAgICAgICAgICAgICAgICAgICAgb3BJRFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBGSVhNRSwgaWYgSSBhc2sgZm9yIGEgZmVlIHRoYXQgZG9lcyBub3QgZXhpc3Q/XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmZWVTdHJ1Y3QgPSBmZWVzUmF3W2ZlZUlkeF07XG5cbiAgICAgICAgICAgIGxldCBvcElkID0gZmVlU3RydWN0WzBdO1xuICAgICAgICAgICAgbGV0IGZlZSA9IGZlZVN0cnVjdFsxXTtcbiAgICAgICAgICAgIGxldCBvcGVyYXRpb25fbmFtZSA9IG9wc1tvcElkXTtcbiAgICAgICAgICAgIGxldCBmZWVuYW1lID0gdHJ4VHlwZXNbb3BlcmF0aW9uX25hbWVdO1xuXG4gICAgICAgICAgICBsZXQgZmVlUmF0ZUZvckxUTSA9IG5ldHdvcmtfZmVlO1xuICAgICAgICAgICAgaWYgKG9wSWQgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRzaGFyZXMvYml0c2hhcmVzLXVpL2lzc3Vlcy85OTZcbiAgICAgICAgICAgICAgICBmZWVSYXRlRm9yTFRNID0gMC41ICsgMC41ICogbmV0d29ya19mZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgICAgICBsZXQgaGVhZEluY2x1ZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbGFiZWxDbGFzcyA9IGNsYXNzTmFtZXMoXCJsYWJlbFwiLCBcImluZm9cIik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBmZWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gKGZlZVtrZXldICogc2NhbGUpIC8gMWU0O1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnRGb3JMVE0gPSBhbW91bnQgKiBmZWVSYXRlRm9yTFRNO1xuICAgICAgICAgICAgICAgIGxldCBmZWVUeXBlcyA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLmZlZVR5cGVzXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldEFtb3VudCA9IGFtb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YW1vdW50fSBhc3NldD1cIjEuMy4wXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXF1aXZhbGVudEFtb3VudCA9IGFtb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFByZWNpc2lvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRBbW91bnRMVE0gPSBhbW91bnRGb3JMVE0gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2Ftb3VudEZvckxUTX0gYXNzZXQ9XCIxLjMuMFwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZmVlVHlwZXNbXCJfbm9uZVwiXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IGVxdWl2YWxlbnRBbW91bnRMVE0gPSBhbW91bnRGb3JMVE0gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxFcXVpdmFsZW50VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Bc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQcmVjaXNpb249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudEZvckxUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQXNzZXQ9e3ByZWZlcnJlZFVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRGVjaW1hbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZmVlVHlwZXNbXCJfbm9uZVwiXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghaGVhZEluY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRJbmNsdWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd1NwYW49XCI2XCIgc3R5bGU9e3t3aWR0aDogXCIxNWVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9PntmZWVuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGx0bV9yZXF1aXJlZC5pbmRleE9mKG9wSWQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVlVHlwZXNba2V5XSAhPSBcIkFubnVhbCBNZW1iZXJzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtvcElkLnRvU3RyaW5nKCkgKyBrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmVlVHlwZXNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudCAhPT0gMCAmJiBwcmVmZXJyZWRVbml0ICE9PSBcIkJUU1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcXVpdmFsZW50QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCA/IGFzc2V0QW1vdW50TFRNIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVJZHggIT09IDggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkVW5pdCAhPT0gXCJCVFNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7LyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e29wSWQudG9TdHJpbmcoKSArIGtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmVlVHlwZXNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gPHN1cD4qPC9zdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXRBbW91bnRMVE19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnQgIT09IDAgJiYgcHJlZmVycmVkVW5pdCAhPT0gXCJCVFNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDx0Ym9keSBrZXk9e2ZlZUlkeH0+e3Jvd3N9PC90Ym9keT47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZD57dGhpcy5wcm9wcy50aXRsZS50b1VwcGVyQ2FzZSgpfTwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmJsb2NrLm9wXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJleHBsb3Jlci5mZWVzLnR5cGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJleHBsb3Jlci5mZWVzLmZlZVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMuZmVlbHRtXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIHtmZWVzfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5GZWVHcm91cCA9IEJpbmRUb0NoYWluU3RhdGUoRmVlR3JvdXApO1xuXG5jbGFzcyBGZWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBGZWVHcm91cHNUaXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLmZlZUdyb3Vwc1wiKTtcbiAgICAgICAgbGV0IGZlZUdyb3VwcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGdyb3VwTmFtZSBpbiBmZWVfZ3JvdXBpbmcpIHtcbiAgICAgICAgICAgIGxldCBncm91cE5hbWVUZXh0ID0gRmVlR3JvdXBzVGl0bGVbZ3JvdXBOYW1lXTtcbiAgICAgICAgICAgIGxldCBmZWVJZHMgPSBmZWVfZ3JvdXBpbmdbZ3JvdXBOYW1lXTtcbiAgICAgICAgICAgIGZlZUdyb3Vwcy5wdXNoKFxuICAgICAgICAgICAgICAgIDxGZWVHcm91cFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2dyb3VwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3RoaXMucHJvcHMuc2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9wSWRzPXtmZWVJZHN9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtncm91cE5hbWVUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudCBwYXRoPXtcImNvbXBvbmVudHMvRmVlc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPntmZWVHcm91cHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvY2tjaGFpblN0b3JlIGZyb20gXCJzdG9yZXMvQmxvY2tjaGFpblN0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgQmxvY2tzIGZyb20gXCIuL0Jsb2Nrc1wiO1xuXG5jbGFzcyBCbG9ja3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tCbG9ja2NoYWluU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBsYXRlc3RCbG9ja3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU3RvcmUuZ2V0U3RhdGUoKS5sYXRlc3RCbG9ja3M7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdFRyYW5zYWN0aW9uczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TdG9yZS5nZXRTdGF0ZSgpLmxhdGVzdFRyYW5zYWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJsb2NrcyAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja3NDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQmxvY2tjaGFpbkFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmxvY2tjaGFpbkFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ybWF0dGVkRGF0ZX0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCBPcGVyYXRpb24gZnJvbSBcIi4uL0Jsb2NrY2hhaW4vT3BlcmF0aW9uXCI7XG5pbXBvcnQgTGlua1RvV2l0bmVzc0J5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvV2l0bmVzc0J5SWRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25DaGFydCBmcm9tIFwiLi9UcmFuc2FjdGlvbkNoYXJ0XCI7XG5pbXBvcnQgQmxvY2t0aW1lQ2hhcnQgZnJvbSBcIi4vQmxvY2t0aW1lQ2hhcnRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuXG5yZXF1aXJlKFwiLi4vQmxvY2tjaGFpbi9qc29uLWluc3BlY3Rvci5zY3NzXCIpO1xuXG5jbGFzcyBCbG9ja1RpbWVBZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5ibG9ja1RpbWUgIT09IHRoaXMucHJvcHMuYmxvY2tUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtibG9ja1RpbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBsZXQgdGltZVBhc3NlZCA9IERhdGUubm93KCkgLSBibG9ja1RpbWU7XG4gICAgICAgIGxldCB0aW1lUGFzc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShibG9ja1RpbWUpLmdldFRpbWUoKTtcblxuICAgICAgICBsZXQgdGV4dENsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgIHtzdWNjZXNzOiB0aW1lUGFzc2VkIDw9IDYwMDB9LFxuICAgICAgICAgICAge2luZm86IHRpbWVQYXNzZWQgPiA2MDAwICYmIHRpbWVQYXNzZWQgPD0gMTUwMDB9LFxuICAgICAgICAgICAge3dhcm5pbmc6IHRpbWVQYXNzZWQgPiAxNTAwMCAmJiB0aW1lUGFzc2VkIDw9IDI1MDAwfSxcbiAgICAgICAgICAgIHtlcnJvcjogdGltZVBhc3NlZCA+IDI1MDAwfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBibG9ja1RpbWUgPyAoXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt0ZXh0Q2xhc3N9PlxuICAgICAgICAgICAgICAgIDxUaW1lQWdvIHRpbWU9e2Jsb2NrVGltZX0gLz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICkgOiBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgQmxvY2tzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCIsXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiLFxuICAgICAgICBsYXRlc3RCbG9ja3M6IHt9LFxuICAgICAgICBhc3NldHM6IHt9LFxuICAgICAgICBhY2NvdW50czoge30sXG4gICAgICAgIGhlaWdodDogMVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2UsXG4gICAgICAgICAgICBvcGVyYXRpb25zSGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgYmxvY2tzSGVpZ2h0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0ID0gdGhpcy5fdXBkYXRlSGVpZ2h0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2dldEJsb2NrKGhlaWdodCwgbWF4QmxvY2spIHtcbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCk7XG4gICAgICAgICAgICBCbG9ja2NoYWluQWN0aW9ucy5nZXRMYXRlc3QoaGVpZ2h0LCBtYXhCbG9jayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3VwZGF0ZUhlaWdodCwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl91cGRhdGVIZWlnaHQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbml0aWFsQmxvY2tzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZUVudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbmltYXRlRW50ZXI6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heEJsb2NrID0gbmV4dFByb3BzLmR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID49IDIwICYmXG4gICAgICAgICAgICBuZXh0UHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpICE9PVxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5sYXRlc3RCbG9ja3MuZ2V0KDApLmlkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJsb2NrKG1heEJsb2NrLCBtYXhCbG9jayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZ2V0SW5pdGlhbEJsb2NrcygpO1xuICAgICAgICBsZXQgb2MgPSB0aGlzLnJlZnMub3BlcmF0aW9ucztcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShvYyk7XG4gICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnJlZnMuYmxvY2tzO1xuICAgICAgICBQcy5pbml0aWFsaXplKGJsb2Nrcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLCB0aGlzLnByb3BzLmxhdGVzdEJsb2NrcykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbEJsb2NrcygpIHtcbiAgICAgICAgbGV0IG1heEJsb2NrID0gcGFyc2VJbnQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSxcbiAgICAgICAgICAgIDEwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChtYXhCbG9jaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE5OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BzLmxhdGVzdEJsb2Nrcy5zaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhdGVzdEJsb2Nrcy5nZXQoaikuaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4QmxvY2sgLSBpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEJsb2NrKG1heEJsb2NrIC0gaSwgbWF4QmxvY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSB0aGlzLnJlZnMub3V0ZXJXcmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IG9wZXJhdGlvbnNUZXh0SGVpZ2h0ID0gdGhpcy5yZWZzLm9wZXJhdGlvbnNUZXh0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IGJsb2Nrc1RleHRIZWlnaHQgPSB0aGlzLnJlZnMuYmxvY2tzVGV4dC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25zSGVpZ2h0OiBjb250YWluZXJIZWlnaHQgLSBvcGVyYXRpb25zVGV4dEhlaWdodCxcbiAgICAgICAgICAgICAgICBibG9ja3NIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCAtIGJsb2Nrc1RleHRIZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnBzVXBkYXRlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHNVcGRhdGUoKSB7XG4gICAgICAgIGxldCBvYyA9IHRoaXMucmVmcy5vcGVyYXRpb25zO1xuICAgICAgICBQcy51cGRhdGUob2MpO1xuICAgICAgICBsZXQgYmxvY2tzID0gdGhpcy5yZWZzLmJsb2NrcztcbiAgICAgICAgUHMudXBkYXRlKGJsb2Nrcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgbGF0ZXN0QmxvY2tzLFxuICAgICAgICAgICAgbGF0ZXN0VHJhbnNhY3Rpb25zLFxuICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LFxuICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LFxuICAgICAgICAgICAgY29yZUFzc2V0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2Jsb2Nrc0hlaWdodCwgb3BlcmF0aW9uc0hlaWdodH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBkeW5hbWljT2JqZWN0ID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgY29yZUFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmxvY2tzID0gbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucyA9IG51bGw7XG4gICAgICAgIGxldCBoZWFkQmxvY2sgPSBudWxsO1xuICAgICAgICBsZXQgdHJ4Q291bnQgPSAwLFxuICAgICAgICAgICAgYmxvY2tDb3VudCA9IGxhdGVzdEJsb2Nrcy5zaXplLFxuICAgICAgICAgICAgdHJ4UGVyU2VjID0gMCxcbiAgICAgICAgICAgIGJsb2NrVGltZXMgPSBbXSxcbiAgICAgICAgICAgIGF2Z1RpbWUgPSAwO1xuXG4gICAgICAgIGlmIChsYXRlc3RCbG9ja3MgJiYgbGF0ZXN0QmxvY2tzLnNpemUgPj0gMjApIHtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1RpbWU7XG5cbiAgICAgICAgICAgIGxldCBsYXN0QmxvY2ssIGZpcnN0QmxvY2s7XG5cbiAgICAgICAgICAgIC8vIE1hcCBvdXQgdGhlIGJsb2NrIHRpbWVzIGZvciB0aGUgbGF0ZXN0IGJsb2NrcyBhbmQgY291bnQgdGhlIG51bWJlciBvZiB0cmFuc2FjdGlvbnNcbiAgICAgICAgICAgIGxhdGVzdEJsb2Nrc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdXNlIGNvbnNlY3V0aXZlIGJsb2NrcyBjb3VudGluZyBiYWNrIGZyb20gaGVhZCBibG9ja1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSAtIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoYmxvY2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeENvdW50ICs9IGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsb2NrLnRpbWVzdGFtcCAtIHByZXZpb3VzVGltZSkgLyAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCbG9jayA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0QmxvY2sgPSBibG9jay50aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUaW1lID0gYmxvY2sudGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPdXRwdXQgYmxvY2sgcm93cyBmb3IgdGhlIGxhc3QgMjAgYmxvY2tzXG4gICAgICAgICAgICBibG9ja3MgPSBsYXRlc3RCbG9ja3NcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5pZCAtIGEuaWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGFrZSgyMClcbiAgICAgICAgICAgICAgICAubWFwKGJsb2NrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Jsb2NrLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Jsb2NrLyR7YmxvY2suaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje3V0aWxzLmZvcm1hdF9udW1iZXIoYmxvY2suaWQsIDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmxvY2sudGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwidGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9XaXRuZXNzQnlJZCB3aXRuZXNzPXtibG9jay53aXRuZXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBsZXQgdHJ4SW5kZXggPSAwO1xuXG4gICAgICAgICAgICB0cmFuc2FjdGlvbnMgPSBsYXRlc3RUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5ibG9ja19udW0gLSBhLmJsb2NrX251bTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50YWtlKDIwKVxuICAgICAgICAgICAgICAgIC5tYXAodHJ4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ4Lm9wZXJhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAob3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnhJbmRleCA+IDE1KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyeEluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcD17b3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RyeC5vcGVyYXRpb25fcmVzdWx0c1tvcEluZGV4KytdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e3RyeC5ibG9ja19udW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRmVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wTGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17XCIxLjIuMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQZW5kaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIGhlYWRCbG9jayA9IGxhdGVzdEJsb2Nrcy5maXJzdCgpLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIGF2Z1RpbWUgPSBibG9ja1RpbWVzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQsIGlkeCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyBjdXJyZW50WzFdIC8gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgICAgIHRyeFBlclNlYyA9IHRyeENvdW50IC8gKChsYXN0QmxvY2sgLSBmaXJzdEJsb2NrKSAvIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwib3V0ZXJXcmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIHsvKiBGaXJzdCByb3cgb2Ygc3RhdHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXIgZ3JpZC1ibG9jayBzaHJpbmsgc21hbGwtaG9yaXpvbnRhbCBibG9ja3Mtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5jdXJyZW50X2Jsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAje3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmxhc3RfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tUaW1lQWdvIGJsb2NrVGltZT17aGVhZEJsb2NrfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MudHJ4X3Blcl9zZWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3V0aWxzLmZvcm1hdF9udW1iZXIodHJ4UGVyU2VjLCAyKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYXZnX2NvbmZfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXRpbHMuZm9ybWF0X251bWJlcihhdmdUaW1lIC8gMiwgMil9czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogU2Vjb25kIHJvdyBvZiBzdGF0cyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC1ob3Jpem9udGFsICBibG9ja3Mtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eHRsYWJlbCBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxPYmplY3QuZ2V0KFwiYWN0aXZlX3dpdG5lc3Nlc1wiKS5zaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHh0bGFiZWwgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuZ2V0KFwiYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX2Jsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeENvdW50IC8gYmxvY2tDb3VudCB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MucmVjZW50bHlfbWlzc2VkX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCB3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjEwMFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5HbG9iYWxPYmplY3QuZ2V0KFwicmVjZW50bHlfbWlzc2VkX2NvdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogVGhpcmQgcm93OiBncmFwaHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXIgZ3JpZC1ibG9jayBzaHJpbmsgc21hbGwtdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgYmxvY2tzLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuY3VycmVudF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlQXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC0xMiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5ibG9ja190aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrdGltZUNoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZXM9e2Jsb2NrVGltZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfYmxvY2tfbnVtYmVyPXtkeW5HbG9iYWxPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkX2Jsb2NrX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnRyeF9wZXJfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbkNoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17bGF0ZXN0QmxvY2tzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkX2Jsb2NrPXtkeW5HbG9iYWxPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkX2Jsb2NrX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LnN0ZWFsdGhfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maWRlbnRpYWxfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlQXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRm91cnRoIHJvdzogdHJhbnNhY3Rpb25zIGFuZCBibG9ja3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9XCJ0cmFuc2FjdGlvbnNCbG9ja1wiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBtZWRpdW0tNiB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3cgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cIm9wZXJhdGlvbnNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucmVjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBmaXhlZC1oZWlnaHQtMnJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC52b3Rlcy5pbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBvcGVyYXRpb25zSGVpZ2h0IHx8IFwiNDAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm9wZXJhdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGZpeGVkLWhlaWdodC0ycmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e3RyYW5zYWN0aW9uc308L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS02IHNob3ctZm9yLW1lZGl1bSB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdMZWZ0OiA1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93IGdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJibG9ja3NUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnJlY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBibG9ja3NIZWlnaHQgfHwgXCI0MzhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBmaXhlZC1oZWlnaHQtMnJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay53aXRuZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQmxvY2tzID0gQmluZFRvQ2hhaW5TdGF0ZShCbG9ja3MsIHtzaG93X2xvYWRlcjogdHJ1ZX0pO1xuQmxvY2tzID0gQXNzZXRXcmFwcGVyKEJsb2Nrcywge1xuICAgIHByb3BOYW1lczogW1wiY29yZUFzc2V0XCJdLFxuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcbmV4cG9ydCBkZWZhdWx0IEJsb2NrcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi9MaW5rVG9BY2NvdW50QnlJZFwiO1xuXG5jbGFzcyBMaW5rVG9XaXRuZXNzQnlJZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgd2l0bmVzczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHdpdG5lc3NfYWNjb3VudCA9IHRoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJ3aXRuZXNzX2FjY291bnRcIik7XG4gICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17d2l0bmVzc19hY2NvdW50fSAvPjtcbiAgICB9XG59XG5MaW5rVG9XaXRuZXNzQnlJZCA9IEJpbmRUb0NoYWluU3RhdGUoTGlua1RvV2l0bmVzc0J5SWQpO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rVG9XaXRuZXNzQnlJZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdEhpZ2hjaGFydCBmcm9tIFwicmVhY3QtaGlnaGNoYXJ0c1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5jbGFzcyBUcmFuc2FjdGlvbkNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYmxvY2tzLnNpemUgPCAyMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGFydCA9IHRoaXMucmVmcy50cnhfY2hhcnQgPyB0aGlzLnJlZnMudHJ4X2NoYXJ0LmNoYXJ0IDogbnVsbDtcbiAgICAgICAgaWYgKGNoYXJ0ICYmIG5leHRQcm9wcy5ibG9ja3MgIT09IHRoaXMucHJvcHMuYmxvY2tzKSB7XG4gICAgICAgICAgICBsZXQge3RyeERhdGEsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKG5leHRQcm9wcyk7XG4gICAgICAgICAgICBsZXQgc2VyaWVzID0gY2hhcnQuc2VyaWVzWzBdO1xuICAgICAgICAgICAgbGV0IGZpbmFsVmFsdWUgPSBzZXJpZXMueERhdGFbc2VyaWVzLnhEYXRhLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0OlwiLCBjaGFydCwgXCJzZXJpZXM6XCIsIHNlcmllcy5kYXRhLCBcImZpbmFsVmFsdWU6XCIsIGZpbmFsVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHNlcmllcy54RGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0cnhEYXRhLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRbMF0gPiBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMuYWRkUG9pbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzLnhEYXRhLmxlbmd0aCA+PSAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2hhcnQub3B0aW9ucy5wbG90T3B0aW9ucy5jb2x1bW4uY29sb3JzID0gY29sb3JzO1xuXG4gICAgICAgICAgICAgICAgY2hhcnQucmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tzICE9PSB0aGlzLnByb3BzLmJsb2NrcyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmhlYWRfYmxvY2sgIT09IHRoaXMucHJvcHMuaGVhZF9ibG9ja1xuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXREYXRhKHByb3BzKSB7XG4gICAgICAgIGxldCB7YmxvY2tzLCBoZWFkX2Jsb2NrfSA9IHByb3BzO1xuXG4gICAgICAgIGxldCB0cnhEYXRhID0gW107XG4gICAgICAgIGxldCBtYXggPSAwO1xuICAgICAgICB0cnhEYXRhID0gYmxvY2tzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmlkID49IGhlYWRfYmxvY2sgLSAzMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGFrZUxhc3QoMzApXG4gICAgICAgICAgICAubWFwKGJsb2NrID0+IHtcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heChibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoLCBtYXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbYmxvY2suaWQsIGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGhdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50b0FycmF5KCk7XG5cbiAgICAgICAgbGV0IGNvbG9ycyA9IHRyeERhdGEubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW50cnk6XCIsIGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeVsxXSA8PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiIzUwRDJDMlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNBMEQzRThcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjRkNBQjUzXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNkZWI4NjlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9ycyxcbiAgICAgICAgICAgIHRyeERhdGEsXG4gICAgICAgICAgICBtYXhcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7dHJ4RGF0YSwgY29sb3JzLCBtYXh9ID0gdGhpcy5fZ2V0RGF0YSh0aGlzLnByb3BzKTtcblxuICAgICAgICBsZXQgdG9vbHRpcExhYmVsID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgXCJleHBsb3Jlci5ibG9ja3MudHJhbnNhY3Rpb25zXCJcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMCwgMCwgMClcIixcbiAgICAgICAgICAgICAgICBzcGFjaW5nOiBbMCwgMCwgNSwgMF0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhbmdlU2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRvcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcExhYmVsICsgXCI6IFwiICsgdGhpcy55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVHJhbnNhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRyeERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MEQyQzJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IE1hdGgubWF4KDEuNSwgbWF4ICsgMC41KSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyaWRMaW5lV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlSW5kaWNhdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY29sdW1uOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluUG9pbnRMZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBjb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0cnhEYXRhLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxSZWFjdEhpZ2hjaGFydCByZWY9XCJ0cnhfY2hhcnRcIiBjb25maWc9e2NvbmZpZ30gLz5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNoYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0SGlnaGNoYXJ0IGZyb20gXCJyZWFjdC1oaWdoY2hhcnRzXCI7XG5pbXBvcnQge3Rha2VSaWdodH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5jbGFzcyBCbG9ja3RpbWVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmJsb2NrVGltZXMubGVuZ3RoIDwgMTkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGFydCA9IHRoaXMucmVmcy5jaGFydCA/IHRoaXMucmVmcy5jaGFydC5jaGFydCA6IG51bGw7XG4gICAgICAgIGlmIChjaGFydCkge1xuICAgICAgICAgICAgbGV0IHtibG9ja1RpbWVzLCBjb2xvcnN9ID0gdGhpcy5fZ2V0RGF0YShuZXh0UHJvcHMpO1xuICAgICAgICAgICAgbGV0IHNlcmllcyA9IGNoYXJ0LnNlcmllc1swXTtcbiAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gc2VyaWVzLnhEYXRhW3Nlcmllcy54RGF0YS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKHNlcmllcy54RGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGFydCwgXCJzZXJpZXM6XCIsIHNlcmllcy5kYXRhLCBcImZpbmFsVmFsdWU6XCIsIGZpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJsb2NrVGltZXMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludFswXSA+IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hZGRQb2ludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMueERhdGEubGVuZ3RoID49IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjaGFydC5vcHRpb25zLnBsb3RPcHRpb25zLmNvbHVtbi5jb2xvcnMgPSBjb2xvcnM7XG5cbiAgICAgICAgICAgICAgICBjaGFydC5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrVGltZXNbbmV4dFByb3BzLmJsb2NrVGltZXMubGVuZ3RoIC0gMV1bMF0gIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ibG9ja1RpbWVzW3RoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggLSAxXVswXSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrVGltZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldERhdGEoKSB7XG4gICAgICAgIGxldCB7YmxvY2tUaW1lcywgaGVhZF9ibG9ja30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGJsb2NrVGltZXMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFbMF0gPj0gaGVhZF9ibG9jayAtIDMwO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYmxvY2tUaW1lcyAmJiBibG9ja1RpbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgYmxvY2tUaW1lcyA9IHRha2VSaWdodChibG9ja1RpbWVzLCAzMCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sb3JzID0gYmxvY2tUaW1lcy5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5WzFdIDw9IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjNTBEMkMyXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0EwRDNFOFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAyMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNGQ0FCNTNcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI2RlYjg2OVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmxvY2tUaW1lcyxcbiAgICAgICAgICAgIGNvbG9yc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtibG9ja1RpbWVzLCBjb2xvcnN9ID0gdGhpcy5fZ2V0RGF0YSh0aGlzLnByb3BzKTtcblxuICAgICAgICBsZXQgdG9vbHRpcExhYmVsID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2tzLmJsb2NrX3RpbWVcIik7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDApXCIsXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzAsIDAsIDUsIDBdLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHNoYXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXBMYWJlbCArIFwiOiBcIiArIHRoaXMueSArIFwic1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxvY2sgdGltZVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBibG9ja1RpbWVzLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTBEMkMyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkTGluZVdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZUluZGljYXRvcjoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNvbHVtbjoge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pblBvaW50TGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYmxvY2tUaW1lcy5sZW5ndGggPyAoXG4gICAgICAgICAgICA8UmVhY3RIaWdoY2hhcnQgcmVmPVwiY2hhcnRcIiBjb25maWc9e2NvbmZpZ30gLz5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja3RpbWVDaGFydDtcbiIsImltcG9ydCBiYXNlU2xpY2UgZnJvbSAnLi9fYmFzZVNsaWNlLmpzJztcbmltcG9ydCB0b0ludGVnZXIgZnJvbSAnLi90b0ludGVnZXIuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGljZSBvZiBgYXJyYXlgIHdpdGggYG5gIGVsZW1lbnRzIHRha2VuIGZyb20gdGhlIGVuZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHRha2UuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10pO1xuICogLy8gPT4gWzNdXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdLCAyKTtcbiAqIC8vID0+IFsyLCAzXVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSwgNSk7XG4gKiAvLyA9PiBbMSwgMiwgM11cbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10sIDApO1xuICogLy8gPT4gW11cbiAqL1xuZnVuY3Rpb24gdGFrZVJpZ2h0KGFycmF5LCBuLCBndWFyZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG4gPSAoZ3VhcmQgfHwgbiA9PT0gdW5kZWZpbmVkKSA/IDEgOiB0b0ludGVnZXIobik7XG4gIG4gPSBsZW5ndGggLSBuO1xuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCBuIDwgMCA/IDAgOiBuLCBsZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YWtlUmlnaHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRTdG9yZSBmcm9tIFwic3RvcmVzL0Fzc2V0U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9Bc3NldHNcIjtcblxuY2xhc3MgQXNzZXRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQXNzZXRTdG9yZSwgU2V0dGluZ3NTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlck1QQTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyTVBBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclVJQTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyVUlBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBc3NldHMgLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IGFzc2V0VXRpbHMgZnJvbSBcImNvbW1vbi9hc3NldF91dGlsc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgbHMgZnJvbSBcImNvbW1vbi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBQYWdpbmF0ZWRMaXN0IGZyb20gXCIuLi9VdGlsaXR5L1BhZ2luYXRlZExpc3RcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge1JhZGlvLCBUYWJsZSwgU2VsZWN0LCBJbnB1dCwgSWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5sZXQgYWNjb3VudFN0b3JhZ2UgPSBuZXcgbHMoXCJfX2dyYXBoZW5lX19cIik7XG5cbmNsYXNzIEFzc2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcbiAgICAgICAgaWYgKGNoYWluSUQpIGNoYWluSUQgPSBjaGFpbklELnN1YnN0cigwLCA4KTtcbiAgICAgICAgZWxzZSBjaGFpbklEID0gXCI0MDE4ZDc4NFwiO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFpbklELFxuICAgICAgICAgICAgZm91bmRMYXN0OiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RBc3NldDogXCJcIixcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB0b3RhbEFzc2V0czpcbiAgICAgICAgICAgICAgICB0eXBlb2YgYWNjb3VudFN0b3JhZ2UuZ2V0KGB0b3RhbEFzc2V0c18ke2NoYWluSUR9YCkgIT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRTdG9yYWdlLmdldChgdG90YWxBc3NldHNfJHtjaGFpbklEfWApXG4gICAgICAgICAgICAgICAgICAgIDogY2hhaW5JRCAmJiBjaGFpbklEID09PSBcIjQwMThkNzg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMzAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiA1MCwgLy8gbWFpbm5ldCBoYXMgMzAwMCsgYXNzZXRzLCBvdGhlciBjaGFpbnMgbWF5IG5vdCBoYXZlIHRoYXQgbWFueVxuICAgICAgICAgICAgYXNzZXRzRmV0Y2hlZDogMCxcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcjogXCJtYXJrZXRcIixcbiAgICAgICAgICAgIGZpbHRlclNlYXJjaDogcHJvcHMuZmlsdGVyU2VhcmNoIHx8IFwiXCIsXG4gICAgICAgICAgICByb3dzT25QYWdlOiBcIjI1XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl90b2dnbGVGaWx0ZXIgPSB0aGlzLl90b2dnbGVGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dzQ2hhbmdlID0gdGhpcy5oYW5kbGVSb3dzQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmFzc2V0cywgdGhpcy5wcm9wcy5hc3NldHMpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tBc3NldHModGhpcy5wcm9wcy5hc3NldHMsIHRydWUpO1xuICAgIH1cblxuICAgIGhhbmRsZUZpbHRlckNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyU2VhcmNoOiAoZS50YXJnZXQudmFsdWUgfHwgXCJcIikudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVSb3dzQ2hhbmdlKHJvd3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzT25QYWdlOiByb3dzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja0Fzc2V0cyhhc3NldHMsIGZvcmNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pO1xuICAgICAgICBsZXQgbGFzdEFzc2V0ID0gYXNzZXRzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5sYXN0KCk7XG5cbiAgICAgICAgaWYgKGFzc2V0cy5zaXplID09PSAwIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICBBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyKFwiQVwiLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXNzZXRzRmV0Y2hlZDogMTAwfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXNzZXRzLnNpemUgPj0gdGhpcy5zdGF0ZS5hc3NldHNGZXRjaGVkKSB7XG4gICAgICAgICAgICBBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyKGxhc3RBc3NldC5zeW1ib2wsIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthc3NldHNGZXRjaGVkOiB0aGlzLnN0YXRlLmFzc2V0c0ZldGNoZWQgKyA5OX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5zaXplID4gdGhpcy5zdGF0ZS50b3RhbEFzc2V0cykge1xuICAgICAgICAgICAgYWNjb3VudFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgICAgICAgIGB0b3RhbEFzc2V0c18ke3RoaXMuc3RhdGUuY2hhaW5JRH1gLFxuICAgICAgICAgICAgICAgIGFzc2V0cy5zaXplXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXNzZXRzRmV0Y2hlZCA+PSB0aGlzLnN0YXRlLnRvdGFsQXNzZXRzIC0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmFzc2V0cyAhPT0gdGhpcy5wcm9wcy5hc3NldHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQXNzZXRzKG5leHRQcm9wcy5hc3NldHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua1RvQWNjb3VudChuYW1lX29yX2lkKSB7XG4gICAgICAgIGlmICghbmFtZV9vcl9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPi08L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtuYW1lX29yX2lkfSAvPjtcbiAgICB9XG5cbiAgICBfdG9nZ2xlRmlsdGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkZpbHRlcih0eXBlLCBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKX0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgW3R5cGVdOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthc3NldHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVGaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJtYXJrZXRzLmZpbHRlclwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgY29yZUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcIjEuMy4wXCIpO1xuXG4gICAgICAgIGxldCBwbTtcblxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xuICAgICAgICBsZXQgY29sdW1ucyA9IFtdO1xuXG4gICAgICAgIC8vIERlZmF1bHQgc29ydGluZyBvZiB0aGUgYW50IHRhYmxlIGlzIGRlZmluZWQgdGhyb3VnaCBkZWZhdWx0U29ydE9yZGVyIHByb3BcblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwidXNlclwiKSB7XG4gICAgICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImFzY2VuZFwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wgPiBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5zeW1ib2wgPCBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuaXNzdWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNzdWVyQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmlzc3VlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEpIGlzc3VlckEgPSBpc3N1ZXJBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQikgaXNzdWVyQiA9IGlzc3VlckIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBID4gaXNzdWVyQikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSA8IGlzc3VlckIpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RvQWNjb3VudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChhLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYi5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChiLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY3VycmVudFN1cHBseSA+IGIuY3VycmVudFN1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5jdXJyZW50U3VwcGx5IDwgYi5jdXJyZW50U3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChpdGVtLCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cmVjb3JkLmN1cnJlbnRTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtyZWNvcmQuYXNzZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWFya2V0SWRcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJtYXJrZXRJZFwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tYXJrZXQvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPXtcImxpbmUtY2hhcnRcIn0gLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5leGNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhYS5tYXJrZXRfYXNzZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2gpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29yZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQlRTXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogYXNzZXQuaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN1cHBseTogYXNzZXQuZHluYW1pYy5jdXJyZW50X3N1cHBseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SWQ6IG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcIm1hcmtldFwiKSB7XG4gICAgICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImFzY2VuZFwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wgPiBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5zeW1ib2wgPCBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuaXNzdWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNzdWVyQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmlzc3VlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEpIGlzc3VlckEgPSBpc3N1ZXJBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQikgaXNzdWVyQiA9IGlzc3VlckIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBID4gaXNzdWVyQikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSA8IGlzc3VlckIpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RvQWNjb3VudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChhLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYi5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChiLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY3VycmVudFN1cHBseSA+IGIuY3VycmVudFN1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5jdXJyZW50U3VwcGx5IDwgYi5jdXJyZW50U3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChpdGVtLCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cmVjb3JkLmN1cnJlbnRTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtyZWNvcmQuYXNzZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWFya2V0SWRcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJtYXJrZXRJZFwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tYXJrZXQvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPXtcImxpbmUtY2hhcnRcIn0gLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5leGNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFhLmJpdGFzc2V0X2RhdGEuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2gpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29yZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQlRTXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogYXNzZXQuaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN1cHBseTogYXNzZXQuZHluYW1pYy5jdXJyZW50X3N1cHBseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SWQ6IG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcInByZWRpY3Rpb25cIikge1xuICAgICAgICAgICAgcG0gPSBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhLm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5iaXRhc3NldF9kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChhLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5tYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2gudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvcmVBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJUU1wiKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YXNzZXQuaWQuc3BsaXQoXCIuXCIpWzJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogXCI4MCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwLCBmb250V2VpZ2h0OiBcImJvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Fzc2V0LyR7YXNzZXQuc3ltYm9sfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uLmNvbmRpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHtkZXNjcmlwdGlvbi5jb25kaXRpb259KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4IDVweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24ubWFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMjBweCA1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17YXNzZXQuaXNzdWVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5keW5hbWljLmN1cnJlbnRfc3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uZXhwaXJ5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAtIHtkZXNjcmlwdGlvbi5leHBpcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5leGNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTEwIG1lZGl1bS1vZmZzZXQtMSBtYWluLWNvbnRlbnQgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJsb2FkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRmlsdGVyLi4uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjIwMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl90b2dnbGVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcIm1hcmtldFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1widXNlclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMudXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcInByZWRpY3Rpb25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLnByZWRpY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjE1MHB4XCIsIG1hcmdpbkxlZnQ6IFwiMjRweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3NPblBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSb3dzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjI1XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1IHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCI1MFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUZpbHRlciA9PSBcInByZWRpY3Rpb25cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3Qgcm93cz17cG19IHBhZ2VTaXplPXs2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKHRoaXMuc3RhdGUucm93c09uUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhc3NldHM6IHt9XG59O1xuXG5Bc3NldHMucHJvcFR5cGVzID0ge1xuICAgIGFzc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1BhZ2luYXRpb259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcm93czogW10sXG4gICAgICAgIHBhZ2VTaXplOiAxNSxcbiAgICAgICAgbGFiZWw6IFwidXRpbGl0eS50b3RhbF94X2l0ZW1zXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0YWJsZVwiLFxuICAgICAgICBleHRyYVJvdzogbnVsbCxcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn1cbiAgICB9O1xuXG4gICAgb25DaGFuZ2UocGFnZSwgcGFnZVNpemUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZSwgcGFnZVNpemV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwYWdlLCBwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7aGVhZGVyLCByb3dzLCBleHRyYVJvd30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0b3RhbCA9IHJvd3MubGVuZ3RoO1xuXG4gICAgICAgIGxldCBjdXJyZW50Um93cyA9IGdldFJvd3MocGFnZSwgcGFnZVNpemUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFJvd3MocGFnZSwgcGFnZVNpemUpIHtcbiAgICAgICAgICAgIGxldCByID0gW107XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBpID0gKHBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xuICAgICAgICAgICAgICAgIGkgPCBNYXRoLm1pbih0b3RhbCwgcGFnZSAqIHBhZ2VTaXplKTtcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHIucHVzaChyb3dzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUGFnaW5hdGVkIHRvbyBmYXIgb3IgZmlsdGVyZWQgb3V0IG9wdGlvbnMgd2l0aG91dCBjaGFuZ2luZyB0aGUgcGFnZSAqL1xuICAgICAgICBpZiAoIWN1cnJlbnRSb3dzLmxlbmd0aCAmJiB0b3RhbCkge1xuICAgICAgICAgICAgY3VycmVudFJvd3MgPSBnZXRSb3dzKDEsIHBhZ2VTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXIgPyA8dGhlYWQ+e2hlYWRlcn08L3RoZWFkPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhUcmFuc2l0aW9uICYmIHBhZ2UgPT09IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Um93c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0cmFSb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Um93c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXh0cmFSb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICB7dG90YWwgPiBwYWdlU2l6ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHRoaXMucHJvcHMubGVmdFBhZGRpbmcgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb3RhbD17dG90YWwgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17cGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiLi9BY2NvdW50c1wiO1xuXG5jbGFzcyBBY2NvdW50c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEFjY291bnRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuc2VhcmNoQWNjb3VudHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zZWFyY2hUZXJtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QWNjb3VudHMgLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHNDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgU2VsZWN0LFxuICAgIElucHV0LFxuICAgIEljb24gYXMgSWNvblN0eWxlR3VpZGVcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuY2xhc3MgQWNjb3VudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBwcm9wcy5zZWFyY2hUZXJtLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IFwiMjVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NlYXJjaEFjY291bnRzID0gZGVib3VuY2UodGhpcy5fc2VhcmNoQWNjb3VudHMsIDIwMCk7XG4gICAgICAgIHRoaXMuaGFuZGxlUm93c0NoYW5nZSA9IHRoaXMuaGFuZGxlUm93c0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuc2VhcmNoQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hBY2NvdW50c1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnNlYXJjaFRlcm0gIT09IHRoaXMuc3RhdGUuc2VhcmNoVGVybSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmlzTG9hZGluZyAhPT0gdGhpcy5zdGF0ZS5pc0xvYWRpbmdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25TZWFyY2hDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NlYXJjaEFjY291bnRzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBfc2VhcmNoQWNjb3VudHMoc2VhcmNoVGVybSkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5hY2NvdW50U2VhcmNoKHNlYXJjaFRlcm0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdChhY2NvdW50LCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmVDb250YWN0KGFjY291bnQsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdChhY2NvdW50KTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd3NDaGFuZ2Uocm93cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IHJvd3NcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7c2VhcmNoQWNjb3VudHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzZWFyY2hUZXJtfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcblxuICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMuaWRcIiAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnRJZFwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJhY2NvdW50SWRcIixcbiAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImFzY2VuZFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWNjb3VudElkID4gYi5hY2NvdW50SWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFjY291bnRJZCA8IGIuYWNjb3VudElkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57aWR9PC9kaXY+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxJY29uIG5hbWU9XCJ1c2VyXCIgdGl0bGU9XCJpY29ucy51c2VyLmFjY291bnRcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudENvbnRhY3RzXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRDb250YWN0c1wiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRhY3RzLCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhY3RzLmhhcyhyZWNvcmQuYWNjb3VudE5hbWUpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlQ29udGFjdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuYWNjb3VudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW51cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLm1pbnVzX2NpcmNsZS5yZW1vdmVfY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQWRkQ29udGFjdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuYWNjb3VudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbHVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucGx1c19jaXJjbGUuYWRkX2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwiYWNjb3VudC5uYW1lXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnROYW1lXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnROYW1lXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hY2NvdW50TmFtZSA+IGIuYWNjb3VudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFjY291bnROYW1lIDwgYi5hY2NvdW50TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hY2NvdW50LyR7bmFtZX0vb3ZlcnZpZXdgfT57bmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnRCYWxhbmNlXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRCYWxhbmNlXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhLmFjY291bnRCYWxhbmNlID0gcGFyc2VGbG9hdChhLmFjY291bnRCYWxhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgYi5hY2NvdW50QmFsYW5jZSA9IHBhcnNlRmxvYXQoYi5hY2NvdW50QmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFjY291bnRCYWxhbmNlID4gYi5hY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuYWNjb3VudEJhbGFuY2UgPCBiLmFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogYmFsYW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshYmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2JhbGFuY2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJhY2NvdW50LnBlcmNlbnRcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudFBlcmNlbnRhZ2VzXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRQZXJjZW50YWdlc1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYS5hY2NvdW50UGVyY2VudGFnZXMgPSBwYXJzZUZsb2F0KGEuYWNjb3VudFBlcmNlbnRhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgYi5hY2NvdW50UGVyY2VudGFnZXMgPSBwYXJzZUZsb2F0KGIuYWNjb3VudFBlcmNlbnRhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWNjb3VudFBlcmNlbnRhZ2VzID4gYi5hY2NvdW50UGVyY2VudGFnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFjY291bnRQZXJjZW50YWdlcyA8IGIuYWNjb3VudFBlcmNlbnRhZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogYmFsYW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshYmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNQZXJjZW50YWdlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHNlYXJjaEFjY291bnRzLnNpemUgPiAwICYmIHNlYXJjaFRlcm0gJiYgc2VhcmNoVGVybS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWFyY2hBY2NvdW50c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICogVGhpcyBhcHBlYXJzIHRvIHJldHVybiBmYWxzZSBuZWdhdGl2ZXMsIHBlcmhhcHMgZnJvbVxuICAgICAgICAgICAgICAgICAgICAqIGNoYW5nZWQgYWNjb3VudCBuYW1lIHJ1bGVzIHdoZW4gbW92aW5nIHRvIGdyYXBoZW5lPy4gRWl0aGVyXG4gICAgICAgICAgICAgICAgICAgICogd2F5LCB0cnlpbmcgdG8gcmVzb2x2ZSBpbnZhbGlkIG5hbWVzIGZhaWxzIGluIHRoZSBDaGFpblN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAqIHdoaWNoIGluIHR1cm4gYnJlYWtzIHRoZSBCaW5kVG9DaGFpblN0YXRlIHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFDaGFpblZhbGlkYXRpb24uaXNfYWNjb3VudF9uYW1lKGEsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXhPZihzZWFyY2hUZXJtKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcCgobmFtZSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRBY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIFwiMS4zLjBcIl0pIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRDb250YWN0czogQWNjb3VudFN0b3JlLmdldFN0YXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWNjb3VudENvbnRhY3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50QmFsYW5jZTogYmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRQZXJjZW50YWdlczogYmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudCBzbWFsbC0xMiBtZWRpdW0tMTAgbWVkaXVtLW9mZnNldC0xIG1haW4tY29udGVudCB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMjAwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uU3R5bGVHdWlkZSB0eXBlPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjE1MHB4XCIsIG1hcmdpbkxlZnQ6IFwiMjRweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3NPblBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSb3dzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjI1XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1IHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCI1MFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoVGVybS5sZW5ndGggPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnN0YXJ0X3R5cGluZ190b19zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93S2V5PVwiYWNjb3VudElkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKHRoaXMuc3RhdGUucm93c09uUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQWNjb3VudHMuZGVmYXVsdFByb3BzID0ge1xuICAgIHNlYXJjaEFjY291bnRzOiB7fVxufTtcblxuQWNjb3VudHMucHJvcFR5cGVzID0ge1xuICAgIHNlYXJjaEFjY291bnRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBNYXJrZXRzIGZyb20gXCIuL01hcmtldHNcIjtcblxuY2xhc3MgTWFya2V0c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmUsIEFzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb29rdXBSZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmxvb2t1cFJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldEJhc2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRCYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWFya2V0cyAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE15TWFya2V0cyBmcm9tIFwiLi9NeU1hcmtldHNcIjtcblxuY2xhc3MgTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5yZWZzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWlnaHR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwid3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICA8TXlNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiAyMH19XG4gICAgICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ9e3RoaXMuc3RhdGUuaGVpZ2h0ID8gdGhpcy5zdGF0ZS5oZWlnaHQgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPXt7cGFkZGluZ1RvcDogMCwgYm9yZGVyVG9wOiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgICAgIHRhYkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwic3RhclwiLCBpbmRleDogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJtYXJrZXRcIiwgaW5kZXg6IDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicXVvdGVTdXBwbHlcIiwgaW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwidm9sXCIsIGluZGV4OiA0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInByaWNlXCIsIGluZGV4OiA1fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImNoYW5nZVwiLCBpbmRleDogNn1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0Q0E7QUFIQTtBQWlEQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQW5CQTtBQXNCQTs7OztBQWhGQTtBQUNBO0FBa0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVJBO0FBaUJBOzs7O0FBcEVBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBTkE7QUFRQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUtBO0FBTEE7QUFNQTtBQUNBO0FBUkE7QUFEQTtBQVlBO0FBQ0E7QUFPQTtBQXhCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBdEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7OztBQWpSQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFpUkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFGQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFsQ0E7QUFEQTtBQXZCQTtBQURBO0FBMkVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQXpGQTtBQURBO0FBREE7QUFEQTtBQTJHQTs7OztBQWhLQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBMkpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7QUMvaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUE5SEE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBOEhBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBYkE7QUFEQTtBQURBO0FBREE7QUE4QkE7Ozs7QUE5RUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBMEVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7QUFiQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQU5BO0FBU0E7Ozs7QUFaQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFMQTtBQVpBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSEE7QUFOQTtBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBREE7QUFnQkE7QUFqQkE7QUFGQTtBQXVCQTs7OztBQXJMQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFpTEE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWVBOzs7O0FBbENBO0FBQ0E7QUFvQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFXQTtBQVhBO0FBY0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQXZDQTtBQXFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQVBBO0FBREE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBUEE7QUFEQTtBQWhEQTtBQW1FQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFMQTtBQUZBO0FBUEE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBTEE7QUFGQTtBQVBBO0FBREE7QUF0REE7QUE4RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUkE7QUFmQTtBQUpBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQW5CQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUE5QkE7QUFSQTtBQVRBO0FBSkE7QUFsQ0E7QUF4TUE7QUEwU0E7Ozs7QUExaUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBcWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNubUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQVJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUE1REE7QUFDQTtBQXNFQTtBQUdBOzs7O0FBM0pBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQTNEQTtBQUNBO0FBcUVBO0FBR0E7Ozs7QUFuSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBYkE7QUFGQTtBQWtCQTtBQWxCQTtBQXFCQTs7OztBQXhCQTtBQUNBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBMUJBO0FBMkJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBWEE7QUFDQTtBQWNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBWEE7QUFDQTtBQWNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJBO0FBckJBO0FBMkNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFEQTtBQTVDQTtBQXNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCQTtBQTdDQTtBQW9FQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBN0VBO0FBREE7QUFEQTtBQURBO0FBZ0dBOzs7O0FBaGlCQTtBQUNBO0FBa2lCQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBVUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBZEE7QUFrQkE7QUF0Q0E7QUF5Q0E7Ozs7QUF6RkE7QUFDQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFWQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBV0E7QUFYQTtBQWNBOzs7O0FBakJBO0FBQ0E7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVlBO0FBOUJBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFqQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBdkJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUZBO0FBSkE7QUFXQTtBQTFCQTtBQUNBO0FBNkJBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTkE7QUF0Q0E7QUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBOURBO0FBREE7QUFEQTtBQURBO0FBMEVBOzs7O0FBalRBO0FBQ0E7QUFtVEE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUZBO0FBaUJBO0FBakJBO0FBb0JBOzs7O0FBdkJBO0FBQ0E7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBa0JBOzs7O0FBckRBO0FBQ0E7QUF1REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==