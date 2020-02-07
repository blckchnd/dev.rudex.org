(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[40],{

/***/ 3284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3285);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2957);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1996);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2657);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(735);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(734);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2377);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2939);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1999);
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

/***/ 3285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1895);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(734);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2374);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2012);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2013);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(735);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(578);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1903);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(429);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2375);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(614);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1855);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWFjY291bnRzLjg3MmRmMGIwMzU0MGM2NDYzNWNmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRBY2NvdW50c09ubHkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkTGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgRGFzaGJvYXJkTGlzdCBmcm9tIFwiLi9EYXNoYm9hcmRMaXN0XCI7XG5pbXBvcnQge1JlY2VudFRyYW5zYWN0aW9uc30gZnJvbSBcIi4uL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IExvZ2luU2VsZWN0b3IgZnJvbSBcIi4uL0xvZ2luU2VsZWN0b3JcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vVXRpbGl0eS9UYWJzXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5cbmNsYXNzIEFjY291bnRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRDb250YWN0cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15QWN0aXZlQWNjb3VudHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUhpZGRlbkFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50c1JlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzTG9hZGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucmVmc0xvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW50cnk6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXNoYm9hcmRFbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50c1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50cyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgQWNjb3VudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgc2hvd0lnbm9yZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudEVudHJ5OiBwcm9wcy5jdXJyZW50RW50cnlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLm15QWN0aXZlQWNjb3VudHMgIT09IHRoaXMucHJvcHMubXlBY3RpdmVBY2NvdW50cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNvbnRhY3RzICE9PSB0aGlzLnByb3BzLmNvbnRhY3RzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaWdub3JlZEFjY291bnRzICE9PSB0aGlzLnByb3BzLmlnbm9yZWRBY2NvdW50cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnBhc3N3b3JkQWNjb3VudCAhPT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS53aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnRzUmVhZHkgIT09IHRoaXMucHJvcHMuYWNjb3VudHNSZWFkeSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnNob3dJZ25vcmVkICE9PSB0aGlzLnN0YXRlLnNob3dJZ25vcmVkIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY3VycmVudEVudHJ5ICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRFbnRyeVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlSWdub3JlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93SWdub3JlZDogIXRoaXMuc3RhdGUuc2hvd0lnbm9yZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uU3dpdGNoVHlwZSh0eXBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudEVudHJ5OiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgZGFzaGJvYXJkRW50cnk6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICBhY2NvdW50c1JlYWR5LFxuICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3dpZHRoLCBzaG93SWdub3JlZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgIW15QWN0aXZlQWNjb3VudHMuaGFzKHBhc3N3b3JkQWNjb3VudCkpIHtcbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMgPSBteUFjdGl2ZUFjY291bnRzLmFkZChwYXNzd29yZEFjY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuYW1lcyA9IG15QWN0aXZlQWNjb3VudHMudG9BcnJheSgpLnNvcnQoKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkQWNjb3VudCAmJiBuYW1lcy5pbmRleE9mKHBhc3N3b3JkQWNjb3VudCkgPT09IC0xKVxuICAgICAgICAgICAgbmFtZXMucHVzaChwYXNzd29yZEFjY291bnQpO1xuICAgICAgICBsZXQgaWdub3JlZCA9IG15SGlkZGVuQWNjb3VudHMudG9BcnJheSgpLnNvcnQoKTtcblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcblxuICAgICAgICBpZiAoIWFjY291bnRzUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWN0cyA9IHRoaXMucHJvcHMuY29udGFjdHMudG9BcnJheSgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJ3cmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJhY2NvdW50VGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlVGFiPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgbm8tcGFkZGluZyBib3JkZXJlZC1oZWFkZXIgY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJhY2NvdW50LmFjY291bnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChuYW1lcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSWdub3JlZD17dGhpcy5fb25Ub2dnbGVJZ25vcmVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJZ25vcmVkPXtzaG93SWdub3JlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TXlBY2NvdW50cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5jb250YWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17Y29udGFjdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50PXtwYXNzd29yZEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSWdub3JlZD17dGhpcy5fb25Ub2dnbGVJZ25vcmVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJZ25vcmVkPXtzaG93SWdub3JlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnRhY3RzTGlzdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5yZWNlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjZW50VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzTGlzdD17bXlBY3RpdmVBY2NvdW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGaWx0ZXJzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgRGFzaGJvYXJkQWNjb3VudHNPbmx5ID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiA8QWNjb3VudHNDb250YWluZXIgey4uLnByb3BzfSBvbmx5QWNjb3VudHMgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRBY2NvdW50c09ubHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja1N0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0VW5sb2NrU3RvcmVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBUb3RhbEJhbGFuY2VWYWx1ZSBmcm9tIFwiLi4vVXRpbGl0eS9Ub3RhbEJhbGFuY2VWYWx1ZVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3Qgc3RhclNvcnQgPSBmdW5jdGlvbihhLCBiLCBpbnZlcnNlLCBzdGFycmVkQWNjb3VudHMpIHtcclxuICAgIGxldCBhTmFtZSA9IGEuZ2V0KFwibmFtZVwiKTtcclxuICAgIGxldCBiTmFtZSA9IGIuZ2V0KFwibmFtZVwiKTtcclxuICAgIGxldCBhU3RhcnJlZCA9IHN0YXJyZWRBY2NvdW50cy5oYXMoYU5hbWUpO1xyXG4gICAgbGV0IGJTdGFycmVkID0gc3RhcnJlZEFjY291bnRzLmhhcyhiTmFtZSk7XHJcblxyXG4gICAgaWYgKGFTdGFycmVkICYmICFiU3RhcnJlZCkge1xyXG4gICAgICAgIHJldHVybiBpbnZlcnNlID8gLTEgOiAxO1xyXG4gICAgfSBlbHNlIGlmIChiU3RhcnJlZCAmJiAhYVN0YXJyZWQpIHtcclxuICAgICAgICByZXR1cm4gaW52ZXJzZSA/IDEgOiAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGFOYW1lID4gYk5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVyc2UgPyAxIDogLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhTmFtZSA8IGJOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZlcnNlID8gLTEgOiAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5zb3J0VGV4dChhTmFtZSwgYk5hbWUsICFpbnZlcnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBEYXNoYm9hcmRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBpZ25vcmVkQWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3RcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICB3aWR0aDogMjAwMCxcclxuICAgICAgICBjb21wYWN0OiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJkYXNoYm9hcmRTb3J0SW52ZXJzZVwiLCB0cnVlKSxcclxuICAgICAgICAgICAgc29ydEJ5OiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZGFzaGJvYXJkU29ydFwiLCBcInN0YXJcIiksXHJcbiAgICAgICAgICAgIGRhc2hib2FyZEZpbHRlcjogcHJvcHMudmlld1NldHRpbmdzLmdldChcImRhc2hib2FyZEZpbHRlclwiLCBcIlwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcy5hY2NvdW50cywgdGhpcy5wcm9wcy5hY2NvdW50cykgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmlzQ29udGFjdHNMaXN0ICE9PSB0aGlzLnByb3BzLmlzQ29udGFjdHNMaXN0IHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5zaG93TXlBY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5zaG93TXlBY2NvdW50cyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMud2lkdGggIT09IHRoaXMucHJvcHMud2lkdGggfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnNob3dJZ25vcmVkICE9PSB0aGlzLnByb3BzLnNob3dJZ25vcmVkIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5sb2NrZWQgIT09IHRoaXMucHJvcHMubG9ja2VkIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5wYXNzd29yZEFjY291bnQgIT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50IHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkQWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJyZWRBY2NvdW50c1xyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25TdGFyKGFjY291bnQsIGlzU3RhcnJlZCwgZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIWlzU3RhcnJlZCkge1xyXG4gICAgICAgICAgICBBY2NvdW50QWN0aW9ucy5hZGRTdGFyQWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVTdGFyQWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dvQWNjb3VudChuYW1lLCB0YWIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHtuYW1lfWApO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIG92ZXJ2aWV3VGFiOiB0YWJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQWNjb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9jcmVhdGUtYWNjb3VudC93YWxsZXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRmlsdGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXNoYm9hcmRGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgZGFzaGJvYXJkRmlsdGVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldFNvcnQoZmllbGQpIHtcclxuICAgICAgICBsZXQgaW52ZXJzZSA9XHJcbiAgICAgICAgICAgIGZpZWxkID09PSB0aGlzLnN0YXRlLnNvcnRCeVxyXG4gICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLmludmVyc2VTb3J0O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzb3J0Qnk6IGZpZWxkLFxyXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogaW52ZXJzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBkYXNoYm9hcmRTb3J0OiBmaWVsZCxcclxuICAgICAgICAgICAgZGFzaGJvYXJkU29ydEludmVyc2U6IGludmVyc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25BZGRDb250YWN0KGFjY291bnQpIHtcclxuICAgICAgICBBY2NvdW50QWN0aW9ucy5hZGRBY2NvdW50Q29udGFjdChhY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25SZW1vdmVDb250YWN0KGFjY291bnQpIHtcclxuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdChhY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyTGlzdChhY2NvdW50cywgaXNIaWRkZW5BY2NvdW50c0xpc3QpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBzdGFycmVkQWNjb3VudHMsXHJcbiAgICAgICAgICAgIGlzQ29udGFjdHNMaXN0LFxyXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7ZGFzaGJvYXJkRmlsdGVyLCBzb3J0QnksIGludmVyc2VTb3J0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VMaXN0ID0gSW1tdXRhYmxlLkxpc3QoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnQuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBpc015QWNjb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGFjY291bnQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUgPT09IHBhc3N3b3JkQWNjb3VudDtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBEaXNwbGF5IGFsbCBhY2NvdW50cyBmcm9tIGNvbnRhY3RzIGxpc3RcclxuICAgICAgICAgICAgICAgIERpc3BsYXkgb25seSBteSBBY2NvdW50cyBmb3IgQWNjb3VudHMgcGFnZVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0NvbnRhY3RzTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogaXNNeUFjY291bnQgPT09IHRoaXMucHJvcHMuc2hvd015QWNjb3VudHM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwibmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihkYXNoYm9hcmRGaWx0ZXIpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJTb3J0KGEsIGIsIGludmVyc2VTb3J0LCBzdGFycmVkQWNjb3VudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNvcnRUZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYi5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZVNvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGFjY291bnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ0ID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5PcmRlcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlTGlzdCA9IGJhbGFuY2VMaXN0LmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnQuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNMVE0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImxpZmV0aW1lX3JlZmVycmVyX25hbWVcIikgPT09IGFjY291bnROYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5nZXQoXCJvcmRlcnNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJvcmRlcnNcIikuZm9yRWFjaCgob3JkZXJJRCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChvcmRlcklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlckFzc2V0ID0gb3JkZXIuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGxfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Blbk9yZGVyc1tvcmRlckFzc2V0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuT3JkZXJzW29yZGVyQXNzZXRdID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXQoXCJmb3Jfc2FsZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVyc1tvcmRlckFzc2V0XSArPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldChcImZvcl9zYWxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcGVuT3JkZXJzOlwiLCBvcGVuT3JkZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKS5mb3JFYWNoKChjYWxsSUQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoY2FsbElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsQXNzZXQgPSBwb3NpdGlvbi5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbF9wcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xsYXRlcmFsW2NvbGxhdGVyYWxBc3NldF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbFtjb2xsYXRlcmFsQXNzZXRdID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5nZXQoXCJjb2xsYXRlcmFsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsW2NvbGxhdGVyYWxBc3NldF0gKz0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5nZXQoXCJjb2xsYXRlcmFsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlYnRBc3NldCA9IHBvc2l0aW9uLmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsX3ByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWJ0W2RlYnRBc3NldF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidFtkZWJ0QXNzZXRdID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5nZXQoXCJkZWJ0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ0W2RlYnRBc3NldF0gKz0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5nZXQoXCJkZWJ0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXMuZm9yRWFjaChiYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlQW1vdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWJhbGFuY2VBbW91bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYmFsYW5jZUFtb3VudC5nZXQoXCJiYWxhbmNlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VMaXN0ID0gYmFsYW5jZUxpc3QucHVzaChiYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNNeUFjY291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoYWNjb3VudCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUgPT09IHBhc3N3b3JkQWNjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3RhcnJlZCA9IHN0YXJyZWRBY2NvdW50cy5oYXMoYWNjb3VudE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyQ2xhc3MgPSBpc1N0YXJyZWQgPyBcImdvbGQtc3RhclwiIDogXCJncmV5LXN0YXJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblN0YXIuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3RhcnJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaS1zdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5maV9zdGFyLmFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29udGFjdHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNIaWRkZW5BY2NvdW50c0xpc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkFkZENvbnRhY3QuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbHVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnBsdXNfY2lyY2xlLmFkZF9jb250YWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblJlbW92ZUNvbnRhY3QuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW51cy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5taW51c19jaXJjbGUucmVtb3ZlX2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgcGFkZGluZ0xlZnQ6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNNeUFjY291bnQgPyBcIiBteS1hY2NvdW50XCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzTFRNID8gXCJsaWZldGltZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3RhbEJhbGFuY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlcz17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5PcmRlcnM9e29wZW5PcmRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gNzUwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG90YWxCYWxhbmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlcz17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsPXtjb2xsYXRlcmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aCA+PSAxMjAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG90YWxCYWxhbmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlcz17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ0PXtkZWJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZ29BY2NvdW50LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG90YWxCYWxhbmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e2JhbGFuY2VMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsPXtjb2xsYXRlcmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ0PXtkZWJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuT3JkZXJzPXtvcGVuT3JkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3dpZHRoLCBzaG93SWdub3JlZCwgaXNDb250YWN0c0xpc3R9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7ZGFzaGJvYXJkRmlsdGVyfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBpbmNsdWRlZEFjY291bnRzID0gdGhpcy5fcmVuZGVyTGlzdCh0aGlzLnByb3BzLmFjY291bnRzKTtcclxuXHJcbiAgICAgICAgbGV0IGhpZGRlbkFjY291bnRzID0gdGhpcy5fcmVuZGVyTGlzdCh0aGlzLnByb3BzLmlnbm9yZWRBY2NvdW50cywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJUZXh0ID0gIWlzQ29udGFjdHNMaXN0XHJcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYWNjb3VudHMuZmlsdGVyXCIpXHJcbiAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYWNjb3VudHMuZmlsdGVyX2NvbnRhY3RzXCIpO1xyXG4gICAgICAgIGZpbHRlclRleHQgKz0gXCIuLi5cIjtcclxuXHJcbiAgICAgICAgbGV0IGhhc0xvY2FsV2FsbGV0ID0gISFXYWxsZXREYi5nZXRXYWxsZXQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuY29tcGFjdCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwiLCBwYWRkaW5nTGVmdDogXCIycmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmlsdGVyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IFwiMjByZW1cIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGFzaGJvYXJkRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uRmlsdGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNMb2NhbFdhbGxldCAmJiAhaXNDb250YWN0c0xpc3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY3JlYXRlQWNjb3VudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmNyZWF0ZV9hY2NvdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hpZGRlbkFjY291bnRzICYmIGhpZGRlbkFjY291bnRzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVG9nZ2xlSWdub3JlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgYWNjb3VudC4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93SWdub3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoaWRlX2lnbm9yZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93X2lnbm9yZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgZGFzaGJvYXJkLXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjAuODVyZW1cIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmNvbXBhY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0U29ydC5iaW5kKHRoaXMsIFwic3RhclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmV5LXN0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5maV9zdGFyLnNvcnRfYWNjb3VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29udGFjdHNMaXN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnVzZXIuYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIiwgcGFkZGluZ0xlZnQ6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0U29ydC5iaW5kKHRoaXMsIFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5hY2NvdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQub3Blbl9vcmRlcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoID49IDc1MCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuYXNfY29sbGF0ZXJhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoID49IDEyMDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRvdGFsX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmNsdWRlZEFjY291bnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0lnbm9yZWQgJiYgaGlkZGVuQWNjb3VudHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRhYmxlLS1oaWRkZW5BY2NvdW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjb3VudC5oaWRkZW5fYWNjb3VudHNfcm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dJZ25vcmVkICYmIGhpZGRlbkFjY291bnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkRhc2hib2FyZExpc3QgPSBCaW5kVG9DaGFpblN0YXRlKERhc2hib2FyZExpc3QpO1xyXG5cclxuY2xhc3MgQWNjb3VudHNMaXN0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxEYXNoYm9hcmRMaXN0IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgIH1cclxufVxyXG5BY2NvdW50c0xpc3RXcmFwcGVyID0gd2l0aFJvdXRlcihBY2NvdW50c0xpc3RXcmFwcGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBBY2NvdW50c0xpc3RXcmFwcGVyLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIFdhbGxldFVubG9ja1N0b3JlLCBBY2NvdW50U3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IFdhbGxldFVubG9ja1N0b3JlLmdldFN0YXRlKCkubG9ja2VkLFxyXG4gICAgICAgICAgICAgICAgc3RhcnJlZEFjY291bnRzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkQWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFGQTtBQTJCQTtBQTNCQTtBQThCQTs7OztBQWpDQTtBQUNBO0FBbUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFVQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBVkE7QUFEQTtBQURBO0FBREE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQVhBO0FBREE7QUFEQTtBQURBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQTVDQTtBQUpBO0FBREE7QUErREE7Ozs7QUE3SkE7QUFDQTtBQStKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFjQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBSUE7QUFHQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVEE7QUE5R0E7QUFpSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFTQTtBQUNBO0FBREE7QUFUQTtBQXRCQTtBQTBDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQU5BO0FBeENBO0FBREE7QUFvREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBYUE7QUFoQkE7QUF6REE7QUE1Q0E7QUEwSEE7Ozs7QUEvZkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQTBmQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==