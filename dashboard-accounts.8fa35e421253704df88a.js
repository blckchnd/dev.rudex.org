(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[40],{

/***/ 3299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3300);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1986);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2647);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(726);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(725);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(553);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2367);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2929);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1989);
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

/***/ 3300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1886);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(725);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2364);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2002);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2003);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(726);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(569);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1894);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(420);
/* harmony import */ var _Utility_TotalBalanceValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2365);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(553);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(605);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1846);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWFjY291bnRzLjhmYTM1ZTQyMTI1MzcwNGRmODhhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRBY2NvdW50c09ubHkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkTGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IERhc2hib2FyZExpc3QgZnJvbSBcIi4vRGFzaGJvYXJkTGlzdFwiO1xyXG5pbXBvcnQge1JlY2VudFRyYW5zYWN0aW9uc30gZnJvbSBcIi4uL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcclxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xyXG5cclxuY2xhc3MgQWNjb3VudHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlXX1cclxuICAgICAgICAgICAgICAgIGluamVjdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50Q29udGFjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlIaWRkZW5BY2NvdW50cztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRzUmVhZHk6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzTG9hZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5yZWZzTG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkRW50cnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRzIHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBY2NvdW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICBzaG93SWdub3JlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogcHJvcHMuY3VycmVudEVudHJ5XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcclxuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMubXlBY3RpdmVBY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5teUFjdGl2ZUFjY291bnRzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5jb250YWN0cyAhPT0gdGhpcy5wcm9wcy5jb250YWN0cyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuaWdub3JlZEFjY291bnRzICE9PSB0aGlzLnByb3BzLmlnbm9yZWRBY2NvdW50cyB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMucGFzc3dvcmRBY2NvdW50ICE9PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudCB8fFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUud2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGggfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnRzUmVhZHkgIT09IHRoaXMucHJvcHMuYWNjb3VudHNSZWFkeSB8fFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUuc2hvd0lnbm9yZWQgIT09IHRoaXMuc3RhdGUuc2hvd0lnbm9yZWQgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLmN1cnJlbnRFbnRyeSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50RW50cnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG9nZ2xlSWdub3JlZCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd0lnbm9yZWQ6ICF0aGlzLnN0YXRlLnNob3dJZ25vcmVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uU3dpdGNoVHlwZSh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGRhc2hib2FyZEVudHJ5OiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXHJcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXHJcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7d2lkdGgsIHNob3dJZ25vcmVkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgIW15QWN0aXZlQWNjb3VudHMuaGFzKHBhc3N3b3JkQWNjb3VudCkpIHtcclxuICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyA9IG15QWN0aXZlQWNjb3VudHMuYWRkKHBhc3N3b3JkQWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lcyA9IG15QWN0aXZlQWNjb3VudHMudG9BcnJheSgpLnNvcnQoKTtcclxuICAgICAgICBpZiAocGFzc3dvcmRBY2NvdW50ICYmIG5hbWVzLmluZGV4T2YocGFzc3dvcmRBY2NvdW50KSA9PT0gLTEpXHJcbiAgICAgICAgICAgIG5hbWVzLnB1c2gocGFzc3dvcmRBY2NvdW50KTtcclxuICAgICAgICBsZXQgaWdub3JlZCA9IG15SGlkZGVuQWNjb3VudHMudG9BcnJheSgpLnNvcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IGFjY291bnRDb3VudCA9XHJcbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXHJcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMuc2l6ZSArXHJcbiAgICAgICAgICAgIChwYXNzd29yZEFjY291bnQgPyAxIDogMCk7XHJcblxyXG4gICAgICAgIGlmICghYWNjb3VudHNSZWFkeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWFjY291bnRDb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb250YWN0cyA9IHRoaXMucHJvcHMuY29udGFjdHMudG9BcnJheSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPVwid3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXQgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYnMtY29udGFpbmVyIGdlbmVyaWMtYm9yZGVyZWQtYm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPVwiYWNjb3VudFRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgbm8tcGFkZGluZyBib3JkZXJlZC1oZWFkZXIgY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5hY2NvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChuYW1lcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkQWNjb3VudHM9e0ltbXV0YWJsZS5MaXN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUlnbm9yZWQ9e3RoaXMuX29uVG9nZ2xlSWdub3JlZC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SWdub3JlZD17c2hvd0lnbm9yZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TXlBY2NvdW50cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImFjY291bnQuY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17Y29udGFjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ9e3Bhc3N3b3JkQWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRBY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlSWdub3JlZD17dGhpcy5fb25Ub2dnbGVJZ25vcmVkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJZ25vcmVkPXtzaG93SWdub3JlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29udGFjdHNMaXN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5yZWNlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e215QWN0aXZlQWNjb3VudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3RWaWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsSGVpZ2h0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGaWx0ZXJzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IERhc2hib2FyZEFjY291bnRzT25seSA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiA8QWNjb3VudHNDb250YWluZXIgey4uLnByb3BzfSBvbmx5QWNjb3VudHMgLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRBY2NvdW50c09ubHk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgV2FsbGV0VW5sb2NrU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRVbmxvY2tTdG9yZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IFRvdGFsQmFsYW5jZVZhbHVlIGZyb20gXCIuLi9VdGlsaXR5L1RvdGFsQmFsYW5jZVZhbHVlXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBzdGFyU29ydCA9IGZ1bmN0aW9uKGEsIGIsIGludmVyc2UsIHN0YXJyZWRBY2NvdW50cykge1xyXG4gICAgbGV0IGFOYW1lID0gYS5nZXQoXCJuYW1lXCIpO1xyXG4gICAgbGV0IGJOYW1lID0gYi5nZXQoXCJuYW1lXCIpO1xyXG4gICAgbGV0IGFTdGFycmVkID0gc3RhcnJlZEFjY291bnRzLmhhcyhhTmFtZSk7XHJcbiAgICBsZXQgYlN0YXJyZWQgPSBzdGFycmVkQWNjb3VudHMuaGFzKGJOYW1lKTtcclxuXHJcbiAgICBpZiAoYVN0YXJyZWQgJiYgIWJTdGFycmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGludmVyc2UgPyAtMSA6IDE7XHJcbiAgICB9IGVsc2UgaWYgKGJTdGFycmVkICYmICFhU3RhcnJlZCkge1xyXG4gICAgICAgIHJldHVybiBpbnZlcnNlID8gMSA6IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYU5hbWUgPiBiTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZXJzZSA/IDEgOiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFOYW1lIDwgYk5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVyc2UgPyAtMSA6IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNvcnRUZXh0KGFOYW1lLCBiTmFtZSwgIWludmVyc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIERhc2hib2FyZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50czogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRzTGlzdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGlnbm9yZWRBY2NvdW50czogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRzTGlzdFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHdpZHRoOiAyMDAwLFxyXG4gICAgICAgIGNvbXBhY3Q6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogcHJvcHMudmlld1NldHRpbmdzLmdldChcImRhc2hib2FyZFNvcnRJbnZlcnNlXCIsIHRydWUpLFxyXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJkYXNoYm9hcmRTb3J0XCIsIFwic3RhclwiKSxcclxuICAgICAgICAgICAgZGFzaGJvYXJkRmlsdGVyOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZGFzaGJvYXJkRmlsdGVyXCIsIFwiXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLmFjY291bnRzLCB0aGlzLnByb3BzLmFjY291bnRzKSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuaXNDb250YWN0c0xpc3QgIT09IHRoaXMucHJvcHMuaXNDb250YWN0c0xpc3QgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnNob3dNeUFjY291bnRzICE9PSB0aGlzLnByb3BzLnNob3dNeUFjY291bnRzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy53aWR0aCAhPT0gdGhpcy5wcm9wcy53aWR0aCB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuc2hvd0lnbm9yZWQgIT09IHRoaXMucHJvcHMuc2hvd0lnbm9yZWQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmxvY2tlZCAhPT0gdGhpcy5wcm9wcy5sb2NrZWQgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLnBhc3N3b3JkQWNjb3VudCAhPT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnN0YXJyZWRBY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhcnJlZEFjY291bnRzXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblN0YXIoYWNjb3VudCwgaXNTdGFycmVkLCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghaXNTdGFycmVkKSB7XHJcbiAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLmFkZFN0YXJBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnJlbW92ZVN0YXJBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ29BY2NvdW50KG5hbWUsIHRhYikge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYWNjb3VudC8ke25hbWV9YCk7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgb3ZlcnZpZXdUYWI6IHRhYlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVBY2NvdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2NyZWF0ZS1hY2NvdW50L3dhbGxldFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25GaWx0ZXIoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rhc2hib2FyZEZpbHRlcjogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xyXG5cclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBkYXNoYm9hcmRGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0U29ydChmaWVsZCkge1xyXG4gICAgICAgIGxldCBpbnZlcnNlID1cclxuICAgICAgICAgICAgZmllbGQgPT09IHRoaXMuc3RhdGUuc29ydEJ5XHJcbiAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUuaW52ZXJzZVNvcnQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNvcnRCeTogZmllbGQsXHJcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiBpbnZlcnNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGRhc2hib2FyZFNvcnQ6IGZpZWxkLFxyXG4gICAgICAgICAgICBkYXNoYm9hcmRTb3J0SW52ZXJzZTogaW52ZXJzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkFkZENvbnRhY3QoYWNjb3VudCkge1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFkZEFjY291bnRDb250YWN0KGFjY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblJlbW92ZUNvbnRhY3QoYWNjb3VudCkge1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnJlbW92ZUFjY291bnRDb250YWN0KGFjY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJMaXN0KGFjY291bnRzLCBpc0hpZGRlbkFjY291bnRzTGlzdCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIHN0YXJyZWRBY2NvdW50cyxcclxuICAgICAgICAgICAgaXNDb250YWN0c0xpc3QsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtkYXNoYm9hcmRGaWx0ZXIsIHNvcnRCeSwgaW52ZXJzZVNvcnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYmFsYW5jZUxpc3QgPSBJbW11dGFibGUuTGlzdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjb3VudHNcclxuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lID0gYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzTXlBY2NvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoYWNjb3VudCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSA9PT0gcGFzc3dvcmRBY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIERpc3BsYXkgYWxsIGFjY291bnRzIGZyb20gY29udGFjdHMgbGlzdFxyXG4gICAgICAgICAgICAgICAgRGlzcGxheSBvbmx5IG15IEFjY291bnRzIGZvciBBY2NvdW50cyBwYWdlXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQ29udGFjdHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpc015QWNjb3VudCA9PT0gdGhpcy5wcm9wcy5zaG93TXlBY2NvdW50cztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKGRhc2hib2FyZEZpbHRlcikgIT09IC0xXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhclNvcnQoYSwgYiwgaW52ZXJzZVNvcnQsIHN0YXJyZWRBY2NvdW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuc29ydFRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlU29ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VMaXN0ID0gYmFsYW5jZUxpc3QuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lID0gYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0xUTSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwibGlmZXRpbWVfcmVmZXJyZXJfbmFtZVwiKSA9PT0gYWNjb3VudE5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50LmdldChcIm9yZGVyc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcIm9yZGVyc1wiKS5mb3JFYWNoKChvcmRlcklELCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KG9yZGVySUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yZGVyQXNzZXQgPSBvcmRlci5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbF9wcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcGVuT3JkZXJzW29yZGVyQXNzZXRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5PcmRlcnNbb3JkZXJBc3NldF0gPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldChcImZvcl9zYWxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuT3JkZXJzW29yZGVyQXNzZXRdICs9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0KFwiZm9yX3NhbGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9wZW5PcmRlcnM6XCIsIG9wZW5PcmRlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImNhbGxfb3JkZXJzXCIpLmZvckVhY2goKGNhbGxJRCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBDaGFpblN0b3JlLmdldE9iamVjdChjYWxsSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWxBc3NldCA9IHBvc2l0aW9uLmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsX3ByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbGxhdGVyYWxbY29sbGF0ZXJhbEFzc2V0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsW2NvbGxhdGVyYWxBc3NldF0gPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmdldChcImNvbGxhdGVyYWxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxbY29sbGF0ZXJhbEFzc2V0XSArPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmdldChcImNvbGxhdGVyYWxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVidEFzc2V0ID0gcG9zaXRpb24uZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlYnRbZGVidEFzc2V0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ0W2RlYnRBc3NldF0gPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmdldChcImRlYnRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnRbZGVidEFzc2V0XSArPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmdldChcImRlYnRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlcy5mb3JFYWNoKGJhbGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYmFsYW5jZUFtb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFiYWxhbmNlQW1vdW50LmdldChcImJhbGFuY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUxpc3QgPSBiYWxhbmNlTGlzdC5wdXNoKGJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc015QWNjb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChhY2NvdW50KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSA9PT0gcGFzc3dvcmRBY2NvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNTdGFycmVkID0gc3RhcnJlZEFjY291bnRzLmhhcyhhY2NvdW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJDbGFzcyA9IGlzU3RhcnJlZCA/IFwiZ29sZC1zdGFyXCIgOiBcImdyZXktc3RhclwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthY2NvdW50TmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uU3Rhci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTdGFycmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIuYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb250YWN0c0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChpc0hpZGRlbkFjY291bnRzTGlzdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQWRkQ29udGFjdC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsdXMtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucGx1c19jaXJjbGUuYWRkX2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlQ29udGFjdC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbnVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLm1pbnVzX2NpcmNsZS5yZW1vdmVfY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dvQWNjb3VudC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc015QWNjb3VudCA/IFwiIG15LWFjY291bnRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNMVE0gPyBcImxpZmV0aW1lXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dvQWNjb3VudC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvdGFsQmFsYW5jZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk9yZGVycz17b3Blbk9yZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aCA+PSA3NTAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dvQWNjb3VudC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3RhbEJhbGFuY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw9e2NvbGxhdGVyYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoID49IDEyMDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dvQWNjb3VudC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3RhbEJhbGFuY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQ9e2RlYnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nb0FjY291bnQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3RhbEJhbGFuY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlcz17YmFsYW5jZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw9e2NvbGxhdGVyYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQ9e2RlYnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5PcmRlcnM9e29wZW5PcmRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7d2lkdGgsIHNob3dJZ25vcmVkLCBpc0NvbnRhY3RzTGlzdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtkYXNoYm9hcmRGaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGluY2x1ZGVkQWNjb3VudHMgPSB0aGlzLl9yZW5kZXJMaXN0KHRoaXMucHJvcHMuYWNjb3VudHMpO1xyXG5cclxuICAgICAgICBsZXQgaGlkZGVuQWNjb3VudHMgPSB0aGlzLl9yZW5kZXJMaXN0KHRoaXMucHJvcHMuaWdub3JlZEFjY291bnRzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlclRleHQgPSAhaXNDb250YWN0c0xpc3RcclxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5hY2NvdW50cy5maWx0ZXJcIilcclxuICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5hY2NvdW50cy5maWx0ZXJfY29udGFjdHNcIik7XHJcbiAgICAgICAgZmlsdGVyVGV4dCArPSBcIi4uLlwiO1xyXG5cclxuICAgICAgICBsZXQgaGFzTG9jYWxXYWxsZXQgPSAhIVdhbGxldERiLmdldFdhbGxldCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5jb21wYWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWx0ZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogXCIyMHJlbVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXNoYm9hcmRGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc0xvY2FsV2FsbGV0ICYmICFpc0NvbnRhY3RzTGlzdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jcmVhdGVBY2NvdW50LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuY3JlYXRlX2FjY291bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGlkZGVuQWNjb3VudHMgJiYgaGlkZGVuQWNjb3VudHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Ub2dnbGVJZ25vcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2BhY2NvdW50LiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dJZ25vcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhpZGVfaWdub3JlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3dfaWdub3JlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBkYXNoYm9hcmQtdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMC44NXJlbVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuY29tcGFjdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRTb3J0LmJpbmQodGhpcywgXCJzdGFyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyZXktc3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIuc29ydF9hY2NvdW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb250YWN0c0xpc3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudXNlci5hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCBwYWRkaW5nTGVmdDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRTb3J0LmJpbmQodGhpcywgXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmFjY291bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5vcGVuX29yZGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gNzUwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5hc19jb2xsYXRlcmFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gMTIwMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudG90YWxfdmFsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luY2x1ZGVkQWNjb3VudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93SWdub3JlZCAmJiBoaWRkZW5BY2NvdW50cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXNoYm9hcmQtdGFibGUtLWhpZGRlbkFjY291bnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LmhpZGRlbl9hY2NvdW50c19yb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0lnbm9yZWQgJiYgaGlkZGVuQWNjb3VudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuRGFzaGJvYXJkTGlzdCA9IEJpbmRUb0NoYWluU3RhdGUoRGFzaGJvYXJkTGlzdCk7XHJcblxyXG5jbGFzcyBBY2NvdW50c0xpc3RXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPERhc2hib2FyZExpc3Qgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcbkFjY291bnRzTGlzdFdyYXBwZXIgPSB3aXRoUm91dGVyKEFjY291bnRzTGlzdFdyYXBwZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIEFjY291bnRzTGlzdFdyYXBwZXIsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgV2FsbGV0VW5sb2NrU3RvcmUsIEFjY291bnRTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxvY2tlZDogV2FsbGV0VW5sb2NrU3RvcmUuZ2V0U3RhdGUoKS5sb2NrZWQsXHJcbiAgICAgICAgICAgICAgICBzdGFycmVkQWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRBY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUZBO0FBMkJBO0FBM0JBO0FBOEJBOzs7O0FBakNBO0FBQ0E7QUFtQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQURBO0FBREE7QUFEQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBWEE7QUFEQTtBQURBO0FBREE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBNUNBO0FBSkE7QUFEQTtBQStEQTs7OztBQTdKQTtBQUNBO0FBK0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFjQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFUQTtBQTlHQTtBQWlJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFEQTtBQVRBO0FBdEJBO0FBMENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBTkE7QUF4Q0E7QUFEQTtBQW9EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTEE7QUFhQTtBQWhCQTtBQXpEQTtBQTVDQTtBQTBIQTs7OztBQS9mQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBMGZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFWQTs7OztBIiwic291cmNlUm9vdCI6IiJ9