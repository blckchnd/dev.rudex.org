(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[37],{

/***/ 3179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(542);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3180);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2973);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2002);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2673);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(741);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(740);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(568);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2392);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2955);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2005);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
                alt_container__WEBPACK_IMPORTED_MODULE_11__["default"],
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__["default"]],
                    inject: {
                        contacts: function contacts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().accountContacts;
                        },
                        myActiveAccounts: function myActiveAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().myActiveAccounts;
                        },
                        myHiddenAccounts: function myHiddenAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().myHiddenAccounts;
                        },
                        accountsReady: function accountsReady() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().accountsLoaded && stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().refsLoaded;
                        },
                        passwordAccount: function passwordAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().passwordAccount;
                        },
                        currentEntry: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().viewSettings.get("dashboardEntry", "accounts")
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Accounts, this.props)
            );
        }
    }]);

    return AccountsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Accounts = function (_React$Component2) {
    _inherits(Accounts, _React$Component2);

    function Accounts(props) {
        _classCallCheck(this, Accounts);

        var _this2 = _possibleConstructorReturn(this, (Accounts.__proto__ || Object.getPrototypeOf(Accounts)).call(this));

        _this2.state = {
            width: null,
            showIgnored: false,
            currentEntry: props.currentEntry
        };

        _this2._setDimensions = _this2._setDimensions.bind(_this2);
        return _this2;
    }

    _createClass(Accounts, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();

            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.myActiveAccounts !== this.props.myActiveAccounts || nextProps.contacts !== this.props.contacts || nextProps.ignoredAccounts !== this.props.ignoredAccounts || nextProps.passwordAccount !== this.props.passwordAccount || nextState.width !== this.state.width || nextProps.accountsReady !== this.props.accountsReady || nextState.showIgnored !== this.state.showIgnored || nextState.currentEntry !== this.state.currentEntry;
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var width = window.innerWidth;

            if (width !== this.state.width) {
                this.setState({ width: width });
            }
        }
    }, {
        key: "_onToggleIgnored",
        value: function _onToggleIgnored() {
            this.setState({
                showIgnored: !this.state.showIgnored
            });
        }
    }, {
        key: "_onSwitchType",
        value: function _onSwitchType(type) {
            this.setState({
                currentEntry: type
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeViewSetting({
                dashboardEntry: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                myActiveAccounts = _props.myActiveAccounts,
                myHiddenAccounts = _props.myHiddenAccounts,
                accountsReady = _props.accountsReady,
                passwordAccount = _props.passwordAccount;
            var _state = this.state,
                width = _state.width,
                showIgnored = _state.showIgnored;


            if (passwordAccount && !myActiveAccounts.has(passwordAccount)) {
                myActiveAccounts = myActiveAccounts.add(passwordAccount);
            }
            var names = myActiveAccounts.toArray().sort();
            if (passwordAccount && names.indexOf(passwordAccount) === -1) names.push(passwordAccount);
            var ignored = myHiddenAccounts.toArray().sort();

            var accountCount = myActiveAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);

            if (!accountsReady) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], null);
            }

            if (!accountCount) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginSelector__WEBPACK_IMPORTED_MODULE_5__["default"], null);
            }

            var contacts = this.props.contacts.toArray();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block page-layout vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        ref: "container",
                        className: "tabs-container generic-bordered-box"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tabs"],
                        {
                            setting: "accountTab",
                            className: "account-tabs",
                            defaultActiveTab: 1,
                            segmented: false,
                            tabsClass: "account-overview no-padding bordered-header content-block"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"],
                            { title: "account.accounts" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "generic-bordered-box" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "box-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        accounts: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(names),
                                        ignoredAccounts: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(ignored),
                                        width: width,
                                        onToggleIgnored: this._onToggleIgnored.bind(this),
                                        showIgnored: showIgnored,
                                        showMyAccounts: true
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"],
                            { title: "account.contacts" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "generic-bordered-box" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "box-content" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        accounts: contacts,
                                        passwordAccount: passwordAccount,
                                        ignoredAccounts: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List(ignored),
                                        width: width,
                                        onToggleIgnored: this._onToggleIgnored.bind(this),
                                        showIgnored: showIgnored,
                                        isContactsList: true
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"],
                            { title: "account.recent" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__["RecentTransactions"], {
                                accountsList: myActiveAccounts,
                                limit: 10,
                                compactView: false,
                                fullHeight: true,
                                showFilters: true,
                                dashboard: true
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Accounts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var DashboardAccountsOnly = function DashboardAccountsOnly(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountsContainer, _extends({}, props, { onlyAccounts: true }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardAccountsOnly);

/***/ }),

/***/ 3180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(542);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(740);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2389);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2018);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2019);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(741);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(584);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1909);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(435);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2390);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(568);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(620);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1861);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var starSort = function starSort(a, b, inverse, starredAccounts) {
    var aName = a.get("name");
    var bName = b.get("name");
    var aStarred = starredAccounts.has(aName);
    var bStarred = starredAccounts.has(bName);

    if (aStarred && !bStarred) {
        return inverse ? -1 : 1;
    } else if (bStarred && !aStarred) {
        return inverse ? 1 : -1;
    } else {
        if (aName > bName) {
            return inverse ? 1 : -1;
        } else if (aName < bName) {
            return inverse ? -1 : 1;
        } else {
            return common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].sortText(aName, bName, !inverse);
        }
    }
};

var DashboardList = function (_React$Component) {
    _inherits(DashboardList, _React$Component);

    function DashboardList(props) {
        _classCallCheck(this, DashboardList);

        var _this = _possibleConstructorReturn(this, (DashboardList.__proto__ || Object.getPrototypeOf(DashboardList)).call(this));

        _this.state = {
            inverseSort: props.viewSettings.get("dashboardSortInverse", true),
            sortBy: props.viewSettings.get("dashboardSort", "star"),
            dashboardFilter: props.viewSettings.get("dashboardFilter", "")
        };
        return _this;
    }

    _createClass(DashboardList, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(nextProps.accounts, this.props.accounts) || nextProps.isContactsList !== this.props.isContactsList || nextProps.showMyAccounts !== this.props.showMyAccounts || nextProps.width !== this.props.width || nextProps.showIgnored !== this.props.showIgnored || nextProps.locked !== this.props.locked || nextProps.passwordAccount !== this.props.passwordAccount || !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(nextProps.starredAccounts, this.props.starredAccounts) || !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(nextState, this.state);
        }
    }, {
        key: "_onStar",
        value: function _onStar(account, isStarred, e) {
            e.preventDefault();
            if (!isStarred) {
                actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].addStarAccount(account);
            } else {
                actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].removeStarAccount(account);
            }
        }
    }, {
        key: "_goAccount",
        value: function _goAccount(name, tab) {
            this.props.history.push("/account/" + name);
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                overviewTab: tab
            });
        }
    }, {
        key: "_createAccount",
        value: function _createAccount() {
            this.props.history.push("/create-account/wallet");
        }
    }, {
        key: "_onFilter",
        value: function _onFilter(e) {
            this.setState({ dashboardFilter: e.target.value.toLowerCase() });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                dashboardFilter: e.target.value.toLowerCase()
            });
        }
    }, {
        key: "_setSort",
        value: function _setSort(field) {
            var inverse = field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort;
            this.setState({
                sortBy: field,
                inverseSort: inverse
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
                dashboardSort: field,
                dashboardSortInverse: inverse
            });
        }
    }, {
        key: "_onAddContact",
        value: function _onAddContact(account) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].addAccountContact(account);
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact(account) {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__["default"].removeAccountContact(account);
        }
    }, {
        key: "_renderList",
        value: function _renderList(accounts, isHiddenAccountsList) {
            var _this2 = this;

            var _props = this.props,
                width = _props.width,
                starredAccounts = _props.starredAccounts,
                isContactsList = _props.isContactsList,
                passwordAccount = _props.passwordAccount;
            var _state = this.state,
                dashboardFilter = _state.dashboardFilter,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort;

            var balanceList = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List();

            return accounts.filter(function (account) {
                if (!account) return false;
                var accountName = account.get("name");
                var isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"].isMyAccount(account) || accountName === passwordAccount;
                /*
                Display all accounts from contacts list
                Display only my Accounts for Accounts page
                */
                return isContactsList ? true : isMyAccount === _this2.props.showMyAccounts;
            }).filter(function (a) {
                if (!a) return false;
                return a.get("name").toLowerCase().indexOf(dashboardFilter) !== -1;
            }).sort(function (a, b) {
                switch (sortBy) {
                    case "star":
                        return starSort(a, b, inverseSort, starredAccounts);
                        break;

                    case "name":
                        return common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].sortText(a.get("name"), b.get("name"), inverseSort);
                        break;

                    default:
                        break;
                }
            }).map(function (account) {
                if (account) {
                    var collateral = {},
                        debt = {},
                        openOrders = {};
                    balanceList = balanceList.clear();

                    var accountName = account.get("name");
                    var isLTM = account.get("lifetime_referrer_name") === accountName;

                    if (account.get("orders")) {
                        account.get("orders").forEach(function (orderID, key) {
                            var order = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getObject(orderID);
                            if (order) {
                                var orderAsset = order.getIn(["sell_price", "base", "asset_id"]);
                                if (!openOrders[orderAsset]) {
                                    openOrders[orderAsset] = parseInt(order.get("for_sale"), 10);
                                } else {
                                    openOrders[orderAsset] += parseInt(order.get("for_sale"), 10);
                                }
                            }
                        });
                    }

                    // console.log("openOrders:", openOrders);

                    if (account.get("call_orders")) {
                        account.get("call_orders").forEach(function (callID, key) {
                            var position = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getObject(callID);
                            if (position) {
                                var collateralAsset = position.getIn(["call_price", "base", "asset_id"]);
                                if (!collateral[collateralAsset]) {
                                    collateral[collateralAsset] = parseInt(position.get("collateral"), 10);
                                } else {
                                    collateral[collateralAsset] += parseInt(position.get("collateral"), 10);
                                }
                                var debtAsset = position.getIn(["call_price", "quote", "asset_id"]);
                                if (!debt[debtAsset]) {
                                    debt[debtAsset] = parseInt(position.get("debt"), 10);
                                } else {
                                    debt[debtAsset] += parseInt(position.get("debt"), 10);
                                }
                            }
                        });
                    }

                    var account_balances = account.get("balances");
                    if (account.get("balances")) {
                        account_balances.forEach(function (balance) {
                            var balanceAmount = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__["ChainStore"].getObject(balance);
                            if (!balanceAmount || !balanceAmount.get("balance")) {
                                return null;
                            }
                            balanceList = balanceList.push(balance);
                        });
                    }

                    var isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"].isMyAccount(account) || accountName === passwordAccount;

                    var isStarred = starredAccounts.has(accountName);
                    var starClass = isStarred ? "gold-star" : "grey-star";

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: accountName },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._onStar.bind(_this2, accountName, isStarred)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                className: starClass,
                                name: "fi-star",
                                title: "icons.fi_star.account"
                            })
                        ),
                        isContactsList ? isHiddenAccountsList && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onAddContact.bind(_this2, accountName)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                name: "plus-circle",
                                title: "icons.plus_circle.add_contact"
                            })
                        ) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onRemoveContact.bind(_this2, accountName)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                name: "minus-circle",
                                title: "icons.minus_circle.remove_contact"
                            })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { textAlign: "left" } },
                            account.get("id")
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "left", paddingLeft: 10 },
                                onClick: _this2._goAccount.bind(_this2, accountName, 0),
                                className: "clickable" + (isMyAccount ? " my-account" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: isLTM ? "lifetime" : "" },
                                accountName
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 1),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: [],
                                openOrders: openOrders
                            })
                        ),
                        width >= 750 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 2),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: [],
                                collateral: collateral
                            })
                        ) : null,
                        width >= 1200 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 2),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: [],
                                debt: debt
                            })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: "clickable",
                                onClick: _this2._goAccount.bind(_this2, accountName, 0),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                noTip: true,
                                balances: balanceList,
                                collateral: collateral,
                                debt: debt,
                                openOrders: openOrders
                            })
                        )
                    );
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                width = _props2.width,
                showIgnored = _props2.showIgnored,
                isContactsList = _props2.isContactsList;
            var dashboardFilter = this.state.dashboardFilter;


            var includedAccounts = this._renderList(this.props.accounts);

            var hiddenAccounts = this._renderList(this.props.ignoredAccounts, true);

            var filterText = !isContactsList ? counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("explorer.accounts.filter") : counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("explorer.accounts.filter_contacts");
            filterText += "...";

            var hasLocalWallet = !!stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__["default"].getWallet();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                !this.props.compact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { style: { paddingTop: "1rem", paddingLeft: "2rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        placeholder: filterText,
                        style: { maxWidth: "20rem", display: "inline-block" },
                        type: "text",
                        value: dashboardFilter,
                        onChange: this._onFilter.bind(this)
                    }),
                    hasLocalWallet && !isContactsList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            onClick: this._createAccount.bind(this),
                            style: {
                                display: "inline-block",
                                marginLeft: 5,
                                marginBottom: "1rem"
                            },
                            className: "button small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "header.create_account" })
                    ) : null,
                    hiddenAccounts && hiddenAccounts.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            onClick: this.props.onToggleIgnored,
                            style: {
                                display: "inline-block",
                                float: "right",
                                marginRight: "20px"
                            },
                            className: "button small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "account." + (this.props.showIgnored ? "hide_ignored" : "show_ignored")
                        })
                    ) : null
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table table-hover dashboard-table",
                        style: { fontSize: "0.85rem" }
                    },
                    !this.props.compact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    onClick: this._setSort.bind(this, "star"),
                                    className: "clickable"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    className: "grey-star",
                                    name: "fi-star",
                                    title: "icons.fi_star.sort_accounts"
                                })
                            ),
                            isContactsList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    name: "user",
                                    title: "icons.user.account"
                                })
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "left" } },
                                "ID"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    style: { textAlign: "left", paddingLeft: 10 },
                                    onClick: this._setSort.bind(this, "name"),
                                    className: "clickable"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "header.account" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.open_orders" })
                            ),
                            width >= 750 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.as_collateral" })
                            ) : null,
                            width >= 1200 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "right" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transaction.borrow_amount" })
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                {
                                    style: {
                                        textAlign: "right",
                                        marginRight: 20
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.total_value" })
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        includedAccounts,
                        showIgnored && hiddenAccounts.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            {
                                className: "dashboard-table--hiddenAccounts",
                                style: { backgroundColor: "transparent" },
                                key: "hidden"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                { colSpan: "8" },
                                counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("account.hidden_accounts_row"),
                                ":"
                            )
                        ) : null,
                        showIgnored && hiddenAccounts
                    )
                )
            );
        }
    }]);

    return DashboardList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DashboardList.propTypes = {
    accounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccountsList.isRequired,
    ignoredAccounts: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccountsList
};
DashboardList.defaultProps = {
    width: 2000,
    compact: false
};

DashboardList = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(DashboardList);

var AccountsListWrapper = function (_React$Component2) {
    _inherits(AccountsListWrapper, _React$Component2);

    function AccountsListWrapper() {
        _classCallCheck(this, AccountsListWrapper);

        return _possibleConstructorReturn(this, (AccountsListWrapper.__proto__ || Object.getPrototypeOf(AccountsListWrapper)).apply(this, arguments));
    }

    _createClass(AccountsListWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DashboardList, this.props);
        }
    }]);

    return AccountsListWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountsListWrapper = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(AccountsListWrapper);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(AccountsListWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"]];
    },
    getProps: function getProps() {
        return {
            locked: stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().locked,
            starredAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().starredAccounts,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().viewSettings
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWFjY291bnRzLjQ5NGI0NzVlOTBkZTYwOGU5NTZkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRBY2NvdW50c09ubHkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkTGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgRGFzaGJvYXJkTGlzdCBmcm9tIFwiLi9EYXNoYm9hcmRMaXN0XCI7XG5pbXBvcnQge1JlY2VudFRyYW5zYWN0aW9uc30gZnJvbSBcIi4uL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IExvZ2luU2VsZWN0b3IgZnJvbSBcIi4uL0xvZ2luU2VsZWN0b3JcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vVXRpbGl0eS9UYWJzXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5cbmNsYXNzIEFjY291bnRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRDb250YWN0cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15QWN0aXZlQWNjb3VudHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUhpZGRlbkFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50c1JlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzTG9hZGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucmVmc0xvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW50cnk6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXNoYm9hcmRFbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50c1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50cyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgQWNjb3VudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgc2hvd0lnbm9yZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudEVudHJ5OiBwcm9wcy5jdXJyZW50RW50cnlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLm15QWN0aXZlQWNjb3VudHMgIT09IHRoaXMucHJvcHMubXlBY3RpdmVBY2NvdW50cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNvbnRhY3RzICE9PSB0aGlzLnByb3BzLmNvbnRhY3RzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaWdub3JlZEFjY291bnRzICE9PSB0aGlzLnByb3BzLmlnbm9yZWRBY2NvdW50cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnBhc3N3b3JkQWNjb3VudCAhPT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS53aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnRzUmVhZHkgIT09IHRoaXMucHJvcHMuYWNjb3VudHNSZWFkeSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnNob3dJZ25vcmVkICE9PSB0aGlzLnN0YXRlLnNob3dJZ25vcmVkIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY3VycmVudEVudHJ5ICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRFbnRyeVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlSWdub3JlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93SWdub3JlZDogIXRoaXMuc3RhdGUuc2hvd0lnbm9yZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uU3dpdGNoVHlwZSh0eXBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEVudHJ5OiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgZGFzaGJvYXJkRW50cnk6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICBhY2NvdW50c1JlYWR5LFxuICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3dpZHRoLCBzaG93SWdub3JlZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgIW15QWN0aXZlQWNjb3VudHMuaGFzKHBhc3N3b3JkQWNjb3VudCkpIHtcbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMgPSBteUFjdGl2ZUFjY291bnRzLmFkZChwYXNzd29yZEFjY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuYW1lcyA9IG15QWN0aXZlQWNjb3VudHMudG9BcnJheSgpLnNvcnQoKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkQWNjb3VudCAmJiBuYW1lcy5pbmRleE9mKHBhc3N3b3JkQWNjb3VudCkgPT09IC0xKVxuICAgICAgICAgICAgbmFtZXMucHVzaChwYXNzd29yZEFjY291bnQpO1xuICAgICAgICBsZXQgaWdub3JlZCA9IG15SGlkZGVuQWNjb3VudHMudG9BcnJheSgpLnNvcnQoKTtcblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcblxuICAgICAgICBpZiAoIWFjY291bnRzUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWN0cyA9IHRoaXMucHJvcHMuY29udGFjdHMudG9BcnJheSgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJ3cmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJhY2NvdW50VGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlVGFiPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgbm8tcGFkZGluZyBib3JkZXJlZC1oZWFkZXIgY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJhY2NvdW50LmFjY291bnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChuYW1lcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSWdub3JlZD17dGhpcy5fb25Ub2dnbGVJZ25vcmVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJZ25vcmVkPXtzaG93SWdub3JlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TXlBY2NvdW50cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5jb250YWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17Y29udGFjdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50PXtwYXNzd29yZEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSWdub3JlZD17dGhpcy5fb25Ub2dnbGVJZ25vcmVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJZ25vcmVkPXtzaG93SWdub3JlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnRhY3RzTGlzdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5yZWNlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjZW50VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzTGlzdD17bXlBY3RpdmVBY2NvdW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGaWx0ZXJzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgRGFzaGJvYXJkQWNjb3VudHNPbmx5ID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiA8QWNjb3VudHNDb250YWluZXIgey4uLnByb3BzfSBvbmx5QWNjb3VudHMgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRBY2NvdW50c09ubHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFdhbGxldFVubG9ja1N0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0VW5sb2NrU3RvcmVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgVG90YWxCYWxhbmNlVmFsdWUgZnJvbSBcIi4uL1V0aWxpdHkvVG90YWxCYWxhbmNlVmFsdWVcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IHN0YXJTb3J0ID0gZnVuY3Rpb24oYSwgYiwgaW52ZXJzZSwgc3RhcnJlZEFjY291bnRzKSB7XG4gICAgbGV0IGFOYW1lID0gYS5nZXQoXCJuYW1lXCIpO1xuICAgIGxldCBiTmFtZSA9IGIuZ2V0KFwibmFtZVwiKTtcbiAgICBsZXQgYVN0YXJyZWQgPSBzdGFycmVkQWNjb3VudHMuaGFzKGFOYW1lKTtcbiAgICBsZXQgYlN0YXJyZWQgPSBzdGFycmVkQWNjb3VudHMuaGFzKGJOYW1lKTtcblxuICAgIGlmIChhU3RhcnJlZCAmJiAhYlN0YXJyZWQpIHtcbiAgICAgICAgcmV0dXJuIGludmVyc2UgPyAtMSA6IDE7XG4gICAgfSBlbHNlIGlmIChiU3RhcnJlZCAmJiAhYVN0YXJyZWQpIHtcbiAgICAgICAgcmV0dXJuIGludmVyc2UgPyAxIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGFOYW1lID4gYk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZlcnNlID8gMSA6IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGFOYW1lIDwgYk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZlcnNlID8gLTEgOiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNvcnRUZXh0KGFOYW1lLCBiTmFtZSwgIWludmVyc2UpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY2xhc3MgRGFzaGJvYXJkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaWdub3JlZEFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHdpZHRoOiAyMDAwLFxuICAgICAgICBjb21wYWN0OiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJkYXNoYm9hcmRTb3J0SW52ZXJzZVwiLCB0cnVlKSxcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImRhc2hib2FyZFNvcnRcIiwgXCJzdGFyXCIpLFxuICAgICAgICAgICAgZGFzaGJvYXJkRmlsdGVyOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZGFzaGJvYXJkRmlsdGVyXCIsIFwiXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLmFjY291bnRzLCB0aGlzLnByb3BzLmFjY291bnRzKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmlzQ29udGFjdHNMaXN0ICE9PSB0aGlzLnByb3BzLmlzQ29udGFjdHNMaXN0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuc2hvd015QWNjb3VudHMgIT09IHRoaXMucHJvcHMuc2hvd015QWNjb3VudHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy53aWR0aCAhPT0gdGhpcy5wcm9wcy53aWR0aCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNob3dJZ25vcmVkICE9PSB0aGlzLnByb3BzLnNob3dJZ25vcmVkIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubG9ja2VkICE9PSB0aGlzLnByb3BzLmxvY2tlZCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnBhc3N3b3JkQWNjb3VudCAhPT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuc3RhcnJlZEFjY291bnRzLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhcnJlZEFjY291bnRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vblN0YXIoYWNjb3VudCwgaXNTdGFycmVkLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFpc1N0YXJyZWQpIHtcbiAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLmFkZFN0YXJBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlU3RhckFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ29BY2NvdW50KG5hbWUsIHRhYikge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHtuYW1lfWApO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb3ZlcnZpZXdUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQWNjb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvY3JlYXRlLWFjY291bnQvd2FsbGV0XCIpO1xuICAgIH1cblxuICAgIF9vbkZpbHRlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rhc2hib2FyZEZpbHRlcjogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBkYXNoYm9hcmRGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldFNvcnQoZmllbGQpIHtcbiAgICAgICAgbGV0IGludmVyc2UgPVxuICAgICAgICAgICAgZmllbGQgPT09IHRoaXMuc3RhdGUuc29ydEJ5XG4gICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5pbnZlcnNlU29ydDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IGZpZWxkLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IGludmVyc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGRhc2hib2FyZFNvcnQ6IGZpZWxkLFxuICAgICAgICAgICAgZGFzaGJvYXJkU29ydEludmVyc2U6IGludmVyc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdChhY2NvdW50KSB7XG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFkZEFjY291bnRDb250YWN0KGFjY291bnQpO1xuICAgIH1cblxuICAgIF9vblJlbW92ZUNvbnRhY3QoYWNjb3VudCkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdChhY2NvdW50KTtcbiAgICB9XG5cbiAgICBfcmVuZGVyTGlzdChhY2NvdW50cywgaXNIaWRkZW5BY2NvdW50c0xpc3QpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBzdGFycmVkQWNjb3VudHMsXG4gICAgICAgICAgICBpc0NvbnRhY3RzTGlzdCxcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2Rhc2hib2FyZEZpbHRlciwgc29ydEJ5LCBpbnZlcnNlU29ydH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgYmFsYW5jZUxpc3QgPSBJbW11dGFibGUuTGlzdCgpO1xuXG4gICAgICAgIHJldHVybiBhY2NvdW50c1xuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBhY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGlzTXlBY2NvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGFjY291bnQpIHx8XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lID09PSBwYXNzd29yZEFjY291bnQ7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBEaXNwbGF5IGFsbCBhY2NvdW50cyBmcm9tIGNvbnRhY3RzIGxpc3RcbiAgICAgICAgICAgICAgICBEaXNwbGF5IG9ubHkgbXkgQWNjb3VudHMgZm9yIEFjY291bnRzIHBhZ2VcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0NvbnRhY3RzTGlzdFxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICAgICAgOiBpc015QWNjb3VudCA9PT0gdGhpcy5wcm9wcy5zaG93TXlBY2NvdW50cztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoZGFzaGJvYXJkRmlsdGVyKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFyU29ydChhLCBiLCBpbnZlcnNlU29ydCwgc3RhcnJlZEFjY291bnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuc29ydFRleHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlU29ydFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidCA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVycyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlTGlzdCA9IGJhbGFuY2VMaXN0LmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lID0gYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNMVE0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJsaWZldGltZV9yZWZlcnJlcl9uYW1lXCIpID09PSBhY2NvdW50TmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5nZXQoXCJvcmRlcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwib3JkZXJzXCIpLmZvckVhY2goKG9yZGVySUQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KG9yZGVySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJBc3NldCA9IG9yZGVyLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Blbk9yZGVyc1tvcmRlckFzc2V0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVyc1tvcmRlckFzc2V0XSA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldChcImZvcl9zYWxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVyc1tvcmRlckFzc2V0XSArPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXQoXCJmb3Jfc2FsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcGVuT3JkZXJzOlwiLCBvcGVuT3JkZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKS5mb3JFYWNoKChjYWxsSUQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNhbGxJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsQXNzZXQgPSBwb3NpdGlvbi5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbGxhdGVyYWxbY29sbGF0ZXJhbEFzc2V0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbFtjb2xsYXRlcmFsQXNzZXRdID0gcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ2V0KFwiY29sbGF0ZXJhbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxbY29sbGF0ZXJhbEFzc2V0XSArPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5nZXQoXCJjb2xsYXRlcmFsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWJ0QXNzZXQgPSBwb3NpdGlvbi5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWJ0W2RlYnRBc3NldF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnRbZGVidEFzc2V0XSA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmdldChcImRlYnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ0W2RlYnRBc3NldF0gKz0gcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ2V0KFwiZGVidFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlcy5mb3JFYWNoKGJhbGFuY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlQW1vdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYmFsYW5jZUFtb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYmFsYW5jZUFtb3VudC5nZXQoXCJiYWxhbmNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlTGlzdCA9IGJhbGFuY2VMaXN0LnB1c2goYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc015QWNjb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoYWNjb3VudCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lID09PSBwYXNzd29yZEFjY291bnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3RhcnJlZCA9IHN0YXJyZWRBY2NvdW50cy5oYXMoYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gaXNTdGFycmVkID8gXCJnb2xkLXN0YXJcIiA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2FjY291bnROYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXJyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaS1zdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbnRhY3RzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChpc0hpZGRlbkFjY291bnRzTGlzdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGx1cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucGx1c19jaXJjbGUuYWRkX2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSB8fCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWludXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLm1pbnVzX2NpcmNsZS5yZW1vdmVfY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nTGVmdDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzTXlBY2NvdW50ID8gXCIgbXktYWNjb3VudFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0xUTSA/IFwibGlmZXRpbWVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvdGFsQmFsYW5jZVZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVycz17b3Blbk9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aCA+PSA3NTAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dvQWNjb3VudC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG90YWxCYWxhbmNlVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsPXtjb2xsYXRlcmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gMTIwMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3RhbEJhbGFuY2VWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQ9e2RlYnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG90YWxCYWxhbmNlVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlcz17YmFsYW5jZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsPXtjb2xsYXRlcmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidD17ZGVidH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5PcmRlcnM9e29wZW5PcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpZHRoLCBzaG93SWdub3JlZCwgaXNDb250YWN0c0xpc3R9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2Rhc2hib2FyZEZpbHRlcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBpbmNsdWRlZEFjY291bnRzID0gdGhpcy5fcmVuZGVyTGlzdCh0aGlzLnByb3BzLmFjY291bnRzKTtcblxuICAgICAgICBsZXQgaGlkZGVuQWNjb3VudHMgPSB0aGlzLl9yZW5kZXJMaXN0KHRoaXMucHJvcHMuaWdub3JlZEFjY291bnRzLCB0cnVlKTtcblxuICAgICAgICBsZXQgZmlsdGVyVGV4dCA9ICFpc0NvbnRhY3RzTGlzdFxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5hY2NvdW50cy5maWx0ZXJcIilcbiAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYWNjb3VudHMuZmlsdGVyX2NvbnRhY3RzXCIpO1xuICAgICAgICBmaWx0ZXJUZXh0ICs9IFwiLi4uXCI7XG5cbiAgICAgICAgbGV0IGhhc0xvY2FsV2FsbGV0ID0gISFXYWxsZXREYi5nZXRXYWxsZXQoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmNvbXBhY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogXCIyMHJlbVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZEZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzTG9jYWxXYWxsZXQgJiYgIWlzQ29udGFjdHNMaXN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY3JlYXRlQWNjb3VudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuY3JlYXRlX2FjY291bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGlkZGVuQWNjb3VudHMgJiYgaGlkZGVuQWNjb3VudHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vblRvZ2dsZUlnbm9yZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGFjY291bnQuJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dJZ25vcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoaWRlX2lnbm9yZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2hvd19pZ25vcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgZGFzaGJvYXJkLXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjg1cmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmNvbXBhY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFNvcnQuYmluZCh0aGlzLCBcInN0YXJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyZXktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5zb3J0X2FjY291bnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbnRhY3RzTGlzdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudXNlci5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nTGVmdDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0U29ydC5iaW5kKHRoaXMsIFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5hY2NvdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQub3Blbl9vcmRlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gNzUwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmFzX2NvbGxhdGVyYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aCA+PSAxMjAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRvdGFsX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmNsdWRlZEFjY291bnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dJZ25vcmVkICYmIGhpZGRlbkFjY291bnRzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRhYmxlLS1oaWRkZW5BY2NvdW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjb3VudC5oaWRkZW5fYWNjb3VudHNfcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dJZ25vcmVkICYmIGhpZGRlbkFjY291bnRzfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5EYXNoYm9hcmRMaXN0ID0gQmluZFRvQ2hhaW5TdGF0ZShEYXNoYm9hcmRMaXN0KTtcblxuY2xhc3MgQWNjb3VudHNMaXN0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPERhc2hib2FyZExpc3Qgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cbkFjY291bnRzTGlzdFdyYXBwZXIgPSB3aXRoUm91dGVyKEFjY291bnRzTGlzdFdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIEFjY291bnRzTGlzdFdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgV2FsbGV0VW5sb2NrU3RvcmUsIEFjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IFdhbGxldFVubG9ja1N0b3JlLmdldFN0YXRlKCkubG9ja2VkLFxuICAgICAgICAgICAgICAgIHN0YXJyZWRBY2NvdW50czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuc3RhcnJlZEFjY291bnRzLFxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBRkE7QUEyQkE7QUEzQkE7QUE4QkE7Ozs7QUFqQ0E7QUFDQTtBQW1DQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQVZBO0FBREE7QUFEQTtBQURBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFYQTtBQURBO0FBREE7QUFEQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUE1Q0E7QUFKQTtBQURBO0FBK0RBOzs7O0FBN0pBO0FBQ0E7QUErSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBY0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7OztBQUlBO0FBR0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBWUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVRBO0FBOUdBO0FBaUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQVNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQURBO0FBVEE7QUF0QkE7QUEwQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFOQTtBQXhDQTtBQURBO0FBb0RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQWFBO0FBaEJBO0FBekRBO0FBNUNBO0FBMEhBOzs7O0FBL2ZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUEwZkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=