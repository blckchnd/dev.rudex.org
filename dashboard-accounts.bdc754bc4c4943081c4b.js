(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 2849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2850);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2554);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1819);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2366);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(702);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(701);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(540);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2236);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2516);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1821);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWFjY291bnRzLmJkYzc1NGJjNGM0OTQzMDgxYzRiLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRBY2NvdW50c09ubHkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IERhc2hib2FyZExpc3QgZnJvbSBcIi4vRGFzaGJvYXJkTGlzdFwiO1xuaW1wb3J0IHtSZWNlbnRUcmFuc2FjdGlvbnN9IGZyb20gXCIuLi9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuXG5jbGFzcyBBY2NvdW50c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50Q29udGFjdHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlIaWRkZW5BY2NvdW50cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNSZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50c0xvYWRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnJlZnNMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVudHJ5OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkRW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjb3VudHNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QWNjb3VudHMgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEFjY291bnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIHNob3dJZ25vcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogcHJvcHMuY3VycmVudEVudHJ5XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5teUFjdGl2ZUFjY291bnRzICE9PSB0aGlzLnByb3BzLm15QWN0aXZlQWNjb3VudHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jb250YWN0cyAhPT0gdGhpcy5wcm9wcy5jb250YWN0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmlnbm9yZWRBY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5pZ25vcmVkQWNjb3VudHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wYXNzd29yZEFjY291bnQgIT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUud2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGggfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50c1JlYWR5ICE9PSB0aGlzLnByb3BzLmFjY291bnRzUmVhZHkgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5zaG93SWdub3JlZCAhPT0gdGhpcy5zdGF0ZS5zaG93SWdub3JlZCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmN1cnJlbnRFbnRyeSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50RW50cnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblRvZ2dsZUlnbm9yZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0lnbm9yZWQ6ICF0aGlzLnN0YXRlLnNob3dJZ25vcmVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vblN3aXRjaFR5cGUodHlwZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGRhc2hib2FyZEVudHJ5OiB0eXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxuICAgICAgICAgICAgYWNjb3VudHNSZWFkeSxcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHt3aWR0aCwgc2hvd0lnbm9yZWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAocGFzc3dvcmRBY2NvdW50ICYmICFteUFjdGl2ZUFjY291bnRzLmhhcyhwYXNzd29yZEFjY291bnQpKSB7XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzID0gbXlBY3RpdmVBY2NvdW50cy5hZGQocGFzc3dvcmRBY2NvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFtZXMgPSBteUFjdGl2ZUFjY291bnRzLnRvQXJyYXkoKS5zb3J0KCk7XG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgbmFtZXMuaW5kZXhPZihwYXNzd29yZEFjY291bnQpID09PSAtMSlcbiAgICAgICAgICAgIG5hbWVzLnB1c2gocGFzc3dvcmRBY2NvdW50KTtcbiAgICAgICAgbGV0IGlnbm9yZWQgPSBteUhpZGRlbkFjY291bnRzLnRvQXJyYXkoKS5zb3J0KCk7XG5cbiAgICAgICAgbGV0IGFjY291bnRDb3VudCA9XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cy5zaXplICtcbiAgICAgICAgICAgIChwYXNzd29yZEFjY291bnQgPyAxIDogMCk7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjY291bnRDb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2dpblNlbGVjdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGFjdHMgPSB0aGlzLnByb3BzLmNvbnRhY3RzLnRvQXJyYXkoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwid3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXQgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYnMtY29udGFpbmVyIGdlbmVyaWMtYm9yZGVyZWQtYm94XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPVwiYWNjb3VudFRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYj17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJzQ2xhc3M9XCJhY2NvdW50LW92ZXJ2aWV3IG5vLXBhZGRpbmcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiYWNjb3VudC5hY2NvdW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17SW1tdXRhYmxlLkxpc3QobmFtZXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRBY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUlnbm9yZWQ9e3RoaXMuX29uVG9nZ2xlSWdub3JlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SWdub3JlZD17c2hvd0lnbm9yZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd015QWNjb3VudHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImFjY291bnQuY29udGFjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHM9e2NvbnRhY3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudD17cGFzc3dvcmRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRBY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUlnbm9yZWQ9e3RoaXMuX29uVG9nZ2xlSWdub3JlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SWdub3JlZD17c2hvd0lnbm9yZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb250YWN0c0xpc3Q9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImFjY291bnQucmVjZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e215QWN0aXZlQWNjb3VudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsSGVpZ2h0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RmlsdGVycz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IERhc2hib2FyZEFjY291bnRzT25seSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gPEFjY291bnRzQ29udGFpbmVyIHsuLi5wcm9wc30gb25seUFjY291bnRzIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQWNjb3VudHNPbmx5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUZBO0FBMkJBO0FBM0JBO0FBOEJBOzs7O0FBakNBO0FBQ0E7QUFtQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQURBO0FBREE7QUFEQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBWEE7QUFEQTtBQURBO0FBREE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBNUNBO0FBSkE7QUFEQTtBQStEQTs7OztBQTdKQTtBQUNBO0FBK0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==