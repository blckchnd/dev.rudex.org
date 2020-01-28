(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[37],{

/***/ 3263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingAccountOptions", function() { return ExistingAccountOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1846);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1886);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1981);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3264);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3267);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3272);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2652);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(585);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var connectObject = {
    listenTo: function listenTo() {
        return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        var wallet = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState();
        return { wallet: wallet };
    }
};

var ExistingAccount = function (_Component) {
    _inherits(ExistingAccount, _Component);

    function ExistingAccount() {
        _classCallCheck(this, ExistingAccount);

        return _possibleConstructorReturn(this, (ExistingAccount.__proto__ || Object.getPrototypeOf(ExistingAccount)).apply(this, arguments));
    }

    _createClass(ExistingAccount, [{
        key: "render",
        value: function render() {
            var has_wallet = this.props.wallet.wallet_names.count() != 0;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "page-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h1",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    content: "account.welcome",
                                    wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_9__["getWalletName"])()
                                })
                            ),
                            !has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.create_wallet_backup" })
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h3",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.setup_wallet" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_8__["BackupRestore"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/import-backup",
                                    component: ExistingAccountOptions
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/import-keys",
                                    component: _ImportKeys__WEBPACK_IMPORTED_MODULE_7__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/brainkey",
                                    component: _Brainkey__WEBPACK_IMPORTED_MODULE_6__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/existing-account/balance-claim",
                                    component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__["default"]
                                })
                            ),
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return ExistingAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ExistingAccount = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ExistingAccount, connectObject);

var ExistingAccountOptions = function (_Component2) {
    _inherits(ExistingAccountOptions, _Component2);

    function ExistingAccountOptions() {
        _classCallCheck(this, ExistingAccountOptions);

        return _possibleConstructorReturn(this, (ExistingAccountOptions.__proto__ || Object.getPrototypeOf(ExistingAccountOptions)).apply(this, arguments));
    }

    _createClass(ExistingAccountOptions, [{
        key: "render",
        value: function render() {
            var has_wallet = this.props.wallet.wallet_names.count() != 0;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                !has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-backup" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            content: "wallet.import_backup",
                            wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_9__["getWalletName"])()
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-keys" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.import_bts1" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "existing-account/import-keys" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "wallet.create_wallet" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
                ) : null,
                !has_wallet ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "dashboard" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                component: "span",
                                content: "header.dashboard"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "wallet" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "settings.wallets" })
                        )
                    )
                ) : null
            );
        }
    }]);

    return ExistingAccountOptions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ExistingAccountOptions = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ExistingAccountOptions, connectObject);

/* harmony default export */ __webpack_exports__["default"] = (ExistingAccount);


/***/ }),

/***/ 3264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1886);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(740);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1986);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(718);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1843);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1982);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1983);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3265);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1842);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3266);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(736);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var BalanceClaimActive = function (_Component) {
    _inherits(BalanceClaimActive, _Component);

    function BalanceClaimActive() {
        _classCallCheck(this, BalanceClaimActive);

        return _possibleConstructorReturn(this, (BalanceClaimActive.__proto__ || Object.getPrototypeOf(BalanceClaimActive)).apply(this, arguments));
    }

    _createClass(BalanceClaimActive, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var keySeq = keys.keySeq();
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
            this.existing_keys = keySeq;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var keySeq = keys.keySeq();
            if (!keySeq.equals(this.existing_keys)) {
                this.existing_keys = keySeq;
                actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.account_refs.size) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.no_balance" })
                    )
                );
            }

            if (this.props.loading) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.loading_balances" }),
                        "\u2026"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], { type: "three-bounce" })
                );
            }

            if (!this.props.balances || !this.props.balances.size) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h5",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.no_balance" })
                    )
                );
            }

            var import_ready = this.props.selected_balances.size && this.props.claim_account_name;
            var claim_balance_label = import_ready ? " (" + this.props.claim_account_name + ")" : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block center-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        { className: "no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.claim_balances" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content",
                            style: { overflowY: "hidden !important" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "full-width-content center-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                key: this.props.balances,
                                accounts: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List(this.props.account_refs),
                                onChange: this.onClaimAccountChange.bind(this)
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__["default"], null)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button success", {
                            disabled: !import_ready
                        }),
                        onClick: this.onClaimBalance.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.claim_balance" }),
                    claim_balance_label
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "button cancel", onClick: this.onBack.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_13___default.a, { content: "wallet.cancel" })
                )
            );
        }
    }, {
        key: "onBack",
        value: function onBack(e) {
            e.preventDefault();
            window.history.back();
        }
    }, {
        key: "onClaimAccountChange",
        value: function onClaimAccountChange(claim_account_name) {
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].claimAccountChange(claim_account_name);
        }
    }, {
        key: "onClaimBalance",
        value: function onClaimBalance() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__["default"].importBalance(this.props.claim_account_name, this.props.selected_balances, true //broadcast
            ).catch(function (error) {
                console.error("claimBalance", error);
                var message = error;
                try {
                    message = error.data.message;
                } catch (e) {}
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("notifications.balance_claim_error", {
                        error_msg: message
                    })
                });

                throw error;
            });
        }
    }]);

    return BalanceClaimActive;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimActive = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimActive, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        var props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState();
        props.account_refs = stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAccountRefs();
        return props;
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimActive);

/***/ }),

/***/ 3265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1886);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(718);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1983);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2146);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var BalanceClaimSelector = function (_Component) {
    _inherits(BalanceClaimSelector, _Component);

    function BalanceClaimSelector() {
        _classCallCheck(this, BalanceClaimSelector);

        return _possibleConstructorReturn(this, (BalanceClaimSelector.__proto__ || Object.getPrototypeOf(BalanceClaimSelector)).apply(this, arguments));
    }

    _createClass(BalanceClaimSelector, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.claim_account_name) this.onClaimAccount(nextProps.claim_account_name, nextProps.checked);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.props.balances === undefined || !this.props.total_by_account_asset.size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

            var index = -1;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.unclaimed" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.unclaimed_vesting" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "th",
                                { style: { textAlign: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.name" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        this.props.total_by_account_asset.map(function (r, name_asset) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: ++index },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        checked: !!_this2.props.checked.get(index),
                                        onChange: _this2.onCheckbox.bind(_this2, index, r.balances)
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    r.unclaimed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        color: "info",
                                        amount: r.unclaimed,
                                        asset: name_asset.get(1)
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    { style: { textAlign: "right" } },
                                    r.vesting.unclaimed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            color: "info",
                                            amount: r.vesting.unclaimed,
                                            hide_asset: true,
                                            asset: name_asset.get(1)
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            " of "
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            color: "info",
                                            amount: r.vesting.total,
                                            asset: name_asset.get(1)
                                        })
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    " ",
                                    name_asset.get(0),
                                    " "
                                )
                            );
                        }).toArray()
                    )
                )
            );
        }
    }, {
        key: "onCheckbox",
        value: function onCheckbox(index, balances) {
            var checked = this.props.checked;
            if (checked.get(index)) {
                checked = checked.delete(index);
            } else {
                checked = checked.set(index, balances);
            }

            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
        }
    }, {
        key: "onClaimAccount",
        value: function onClaimAccount(claim_account_name, checked) {
            // A U T O  S E L E C T  A C C O U N T S
            // only if nothing is selected (play it safe)
            if (checked.size) return;
            var index = -1;
            this.props.total_by_account_asset.forEach(function (v, k) {
                index++;
                var name = k.get(0);
                if (name === claim_account_name) {
                    if (v.unclaimed || v.vesting.unclaimed) checked = checked.set(index, v.balances);
                }
            });
            if (checked.size) actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
        }
    }]);

    return BalanceClaimSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimSelector = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimSelector, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        var props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
        var balances = props.balances,
            address_to_pubkey = props.address_to_pubkey;

        var private_keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().keys;
        var groupCountMap = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map().asMutable();
        var groupCount = function groupCount(group, distinct) {
            var set = groupCountMap.get(group);
            if (!set) {
                set = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Set().asMutable();
                groupCountMap.set(group, set);
            }
            set.add(distinct);
            return set.size;
        };
        if (balances) props.total_by_account_asset = balances.groupBy(function (v) {
            // K E Y S
            var names = "";
            var pubkey = address_to_pubkey.get(v.owner);
            var private_key_object = private_keys.get(pubkey);
            // Imported Account Names (just a visual aid, helps to auto select a real account)
            if (private_key_object && private_key_object.import_account_names) names = private_key_object.import_account_names.join(", ");

            // Signing is very slow, further divide the groups based on the number of signatures required
            var batch_number = Math.ceil(groupCount(immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List([names, v.balance.asset_id]), v.owner) / 60);
            var name_asset_key = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.List([names, v.balance.asset_id, batch_number]);
            return name_asset_key;
        }).map(function (l) {
            return l.reduce(function (r, v) {
                // V A L U E S
                v.public_key_string = address_to_pubkey.get(v.owner);
                r.balances = r.balances.add(v);
                if (v.vested_balance != undefined) {
                    r.vesting.unclaimed += Number(v.vested_balance.amount);
                    r.vesting.total += Number(v.balance.amount);
                } else {
                    r.unclaimed += Number(v.balance.amount);
                }
                return r;
            }, {
                unclaimed: 0,
                vesting: { unclaimed: 0, total: 0 },
                balances: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Set()
            });
        }).sortBy(function (k) {
            return k;
        });
        return props;
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimSelector);

/***/ }),

/***/ 3266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(553);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2002);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2549);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2003);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MyAccounts = function (_Component) {
    _inherits(MyAccounts, _Component);

    function MyAccounts() {
        _classCallCheck(this, MyAccounts);

        return _possibleConstructorReturn(this, (MyAccounts.__proto__ || Object.getPrototypeOf(MyAccounts)).apply(this, arguments));
    }

    _createClass(MyAccounts, [{
        key: "render",
        value: function render() {
            var account_names = this.props.accounts.filter(function (account) {
                return !!account;
            }).filter(function (account) {
                return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].isMyAccount(account);
            }).map(function (account) {
                return account.get("name");
            }).sort();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onChange: this.onAccountSelect.bind(this),
                    account_names: account_names,
                    center: true
                })
            );
        }
    }, {
        key: "onAccountSelect",
        value: function onAccountSelect(account_name) {
            this.props.onChange(account_name);
        }
    }]);

    return MyAccounts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MyAccounts.propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MyAccounts));

/***/ }),

/***/ 3267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainkeyInputAccept", function() { return BrainkeyInputAccept; });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2041);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1886);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(740);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3268);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3269);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2003);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2002);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3270);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3271);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var connectObject = {
    listenTo: function listenTo() {
        return [stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance("wmc")];
    },
    getProps: function getProps() {
        return stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance("wmc").getState();
    }
};

var Brainkey = function (_Component) {
    _inherits(Brainkey, _Component);

    function Brainkey() {
        _classCallCheck(this, Brainkey);

        return _possibleConstructorReturn(this, (Brainkey.__proto__ || Object.getPrototypeOf(Brainkey)).apply(this, arguments));
    }

    _createClass(Brainkey, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].closeInstance("wmc");
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "h3",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.brainkey" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    BrainkeyInputAccept,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewBrainkey, null)
                )
            );
        }
    }]);

    return Brainkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Brainkey = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(Brainkey, connectObject);
/* harmony default export */ __webpack_exports__["default"] = (Brainkey);

var ViewBrainkey = function (_Component2) {
    _inherits(ViewBrainkey, _Component2);

    function ViewBrainkey() {
        _classCallCheck(this, ViewBrainkey);

        return _possibleConstructorReturn(this, (ViewBrainkey.__proto__ || Object.getPrototypeOf(ViewBrainkey)).apply(this, arguments));
    }

    _createClass(ViewBrainkey, [{
        key: "render",
        value: function render() {
            var short_brnkey = this.props.brnkey.substring(0, 10);
            // console.log("this.props.account_ids.toArray()", this.props.account_ids.toArray())
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "" },
                        short_brnkey
                    ),
                    "\u2026"
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null),
                this.props.account_ids.size ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BrainkeyAccounts, {
                    accounts: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List(this.props.account_ids.toArray())
                }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "h5",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.no_accounts" })
                )
            );
        }
    }]);

    return ViewBrainkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ViewBrainkey = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ViewBrainkey, connectObject);

var BrainkeyAccounts = function (_React$Component) {
    _inherits(BrainkeyAccounts, _React$Component);

    function BrainkeyAccounts() {
        _classCallCheck(this, BrainkeyAccounts);

        return _possibleConstructorReturn(this, (BrainkeyAccounts.__proto__ || Object.getPrototypeOf(BrainkeyAccounts)).apply(this, arguments));
    }

    _createClass(BrainkeyAccounts, [{
        key: "render",
        value: function render() {
            var rows = Object(lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.accounts).filter(function (account) {
                return !!account[1];
            }).map(function (account) {
                return account[1].get("name");
            }).sort().map(function (name) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__["default"], { key: name, account: name });
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                rows
            );
        }
    }]);

    return BrainkeyAccounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BrainkeyAccounts.propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccountsList.isRequired
};

BrainkeyAccounts = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(BrainkeyAccounts);

var BrainkeyInputAccept = function (_Component3) {
    _inherits(BrainkeyInputAccept, _Component3);

    function BrainkeyInputAccept() {
        _classCallCheck(this, BrainkeyInputAccept);

        var _this4 = _possibleConstructorReturn(this, (BrainkeyInputAccept.__proto__ || Object.getPrototypeOf(BrainkeyInputAccept)).call(this));

        _this4.state = { brnkey: "", accept: false };
        return _this4;
    }

    _createClass(BrainkeyInputAccept, [{
        key: "render",
        value: function render() {
            if (this.state.accept) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                this.props.children
            );

            var ready = this.state.brnkey && this.state.brnkey !== "";
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                { className: "grid-container" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        onChange: this.onBrainkeyChange.bind(this)
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button success", { disabled: !ready }),
                        onClick: this.onAccept.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.accept" })
                )
            );
        }
    }, {
        key: "onBrainkeyChange",
        value: function onBrainkeyChange(brnkey) {
            this.setState({ brnkey: brnkey });
        }
    }, {
        key: "onAccept",
        value: function onAccept() {
            this.setState({ accept: true });
            actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__["default"].setBrainkey(this.state.brnkey);
        }
    }]);

    return BrainkeyInputAccept;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

// <div onClick={this.onLookupAccounts.bind(this)} className="button success">Lookup Accounts</div>
// onLookupAccounts() {
//
// }

/***/ }),

/***/ 3268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BrainkeyActions = function () {
    function BrainkeyActions() {
        _classCallCheck(this, BrainkeyActions);
    }

    _createClass(BrainkeyActions, [{
        key: "setBrainkey",
        value: function setBrainkey(brnkey) {
            return brnkey;
        }
    }]);

    return BrainkeyActions;
}();

var BrainkeyActionsWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(BrainkeyActions);
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyActionsWrapped);

/***/ }),

/***/ 3269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(420);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(554);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3268);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







/** Each instance supports a single brainkey. */

var BrainkeyStoreFactory = function () {
    function BrainkeyStoreFactory() {
        _classCallCheck(this, BrainkeyStoreFactory);
    }

    _createClass(BrainkeyStoreFactory, null, [{
        key: "getInstance",

        /** This may be called multiple times for the same <b>name</b>.  When done,
            (componentWillUnmount) make sure to call this.closeInstance()
        */
        value: function getInstance(name) {
            var instance = BrainkeyStoreFactory.instances.get(name);
            if (!instance) {
                instance = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(BrainkeyStoreImpl, "BrainkeyStore");
                BrainkeyStoreFactory.instances.set(name, instance);
            }
            var subscribed_instance_key = name + " subscribed_instance";
            if (!BrainkeyStoreFactory.instances.get(subscribed_instance_key)) {
                var subscribed_instance = instance.chainStoreUpdate.bind(instance);
                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(subscribed_instance);
                BrainkeyStoreFactory.instances.set(subscribed_instance_key, subscribed_instance);
            }
            return instance;
        }
    }, {
        key: "closeInstance",
        value: function closeInstance(name) {
            var instance = BrainkeyStoreFactory.instances.get(name);
            if (!instance) throw new Error("unknown instance " + name);
            var subscribed_instance_key = name + " subscribed_instance";
            var subscribed_instance = BrainkeyStoreFactory.instances.get(subscribed_instance_key);
            BrainkeyStoreFactory.instances.delete(subscribed_instance_key);
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(subscribed_instance);
            instance.clearCache();
        }
    }]);

    return BrainkeyStoreFactory;
}();

/** Derived keys may be unassigned from accounts therefore we must define a
    fixed block of derivied keys then monitor the entire block.
*/


BrainkeyStoreFactory.instances = new Map();
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyStoreFactory);
var DERIVIED_BRAINKEY_POOL_SIZE = 10;

var BrainkeyStoreImpl = function (_BaseStore) {
    _inherits(BrainkeyStoreImpl, _BaseStore);

    function BrainkeyStoreImpl() {
        _classCallCheck(this, BrainkeyStoreImpl);

        var _this = _possibleConstructorReturn(this, (BrainkeyStoreImpl.__proto__ || Object.getPrototypeOf(BrainkeyStoreImpl)).call(this));

        _this.clearCache();
        _this.bindListeners({
            onSetBrainkey: actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__["default"].setBrainkey
        });
        _this._export("inSync", "chainStoreUpdate", "clearCache");
        return _this;
    }

    // chainStoreUnsubscribe() {
    //     try{
    //         ChainStore.unsubscribe(this.chainStoreUpdate)
    //     }catch(e1) {console.log("unsub 1 fail");
    //         try{
    //             ChainStore.unsubscribe(this.chainStoreUpdate.bind(this))
    //         }catch(e2) {console.log("unsub 1 fail")}
    //     }
    // }

    _createClass(BrainkeyStoreImpl, [{
        key: "clearCache",
        value: function clearCache() {
            this.state = {
                brnkey: "",
                account_ids: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set()
            };
            this.derived_keys = new Array();
            // Compared with ChainStore.account_ids_by_key
            this.account_ids_by_key = null;
        }

        /** Saves the brainkey and begins the lookup for derived account referneces */

    }, {
        key: "onSetBrainkey",
        value: function onSetBrainkey(brnkey) {
            this.clearCache();
            this.setState({ brnkey: brnkey });
            this.deriveKeys(brnkey);
            this.chainStoreUpdate();
        }

        /** @return <b>true</b> when all derivied account references are either
            found or known not to exist.
        */

    }, {
        key: "inSync",
        value: function inSync() {
            this.derived_keys.forEach(function (derived_key) {
                if (isPendingFromChain(derived_key)) return false;
            });
            return true;
        }
    }, {
        key: "chainStoreUpdate",
        value: function chainStoreUpdate() {
            if (!this.derived_keys.length) return;
            if (this.account_ids_by_key === bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].account_ids_by_key) return;
            this.account_ids_by_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].account_ids_by_key;
            this.updateAccountIds();
        }
    }, {
        key: "deriveKeys",
        value: function deriveKeys() {
            var brnkey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.brnkey;

            var sequence = this.derived_keys.length; // next sequence (starting with 0)
            var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["key"].get_brainPrivateKey(brnkey, sequence);
            var derived_key = derivedKeyStruct(private_key);
            this.derived_keys.push(derived_key);
            if (this.derived_keys.length < DERIVIED_BRAINKEY_POOL_SIZE) this.deriveKeys(brnkey);
        }
    }, {
        key: "updateAccountIds",
        value: function updateAccountIds() {
            var _this2 = this;

            var new_account_ids = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Set().withMutations(function (new_ids) {
                var updatePubkey = function updatePubkey(public_string) {
                    var chain_account_ids = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccountRefsOfKey(public_string);
                    if (chain_account_ids) chain_account_ids.forEach(function (chain_account_id) {
                        new_ids.add(chain_account_id);
                    });
                };
                _this2.derived_keys.forEach(function (derived_key) {
                    return updatePubkey(derived_key.public_string);
                });
            });
            if (!new_account_ids.equals(this.state.account_ids)) {
                this.state.account_ids = new_account_ids;
                this.setState({ account_ids: new_account_ids });
            }
        }
    }]);

    return BrainkeyStoreImpl;
}(stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__["default"]);

function derivedKeyStruct(private_key) {
    var public_string = private_key.toPublicKey().toPublicKeyString();
    var derived_key = { private_key: private_key, public_string: public_string };
    return derived_key;
}

var isPendingFromChain = function isPendingFromChain(derived_key) {
    return bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAccountRefsOfKey(derived_key.public_string) === undefined;
};

/***/ }),

/***/ 3270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(740);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var dictionary_set;

if (false) {}

var BrainkeyInput = function (_Component) {
    _inherits(BrainkeyInput, _Component);

    function BrainkeyInput() {
        _classCallCheck(this, BrainkeyInput);

        var _this = _possibleConstructorReturn(this, (BrainkeyInput.__proto__ || Object.getPrototypeOf(BrainkeyInput)).call(this));

        _this.state = {
            brnkey: "",
            loading: true
        };
        return _this;
    }

    _createClass(BrainkeyInput, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            if (true) {
                fetch("" + "dictionary.json").then(function (reply) {
                    return reply.json().then(function (result) {
                        dictionary_set = new Set(result.en.split(","));
                        _this2.setState({
                            loading: false
                        });
                    });
                }).catch(function (err) {
                    console.log("fetch dictionary error:", err);
                });
            } else {}
        }
    }, {
        key: "_checkBrainKey",
        value: function _checkBrainKey() {
            var spellcheck_words = this.state.brnkey.split(" ");
            var checked_words = [];
            spellcheck_words.forEach(function (word, i) {
                if (word === "") return;
                var spellcheckword = word.toLowerCase();
                spellcheckword = spellcheckword.match(/[a-z]+/); //just spellcheck letters
                if (spellcheckword === null || dictionary_set.has(spellcheckword[0])) checked_words.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { key: i, style: { padding: "1px", margin: "1px" } },
                    word
                ));else checked_words.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    MisspelledWord,
                    { key: i },
                    word
                ));
            });
            // this.ready = checked_words.length > 0
            var word_count_label = void 0;
            var warn = true;
            var valid = true;
            if (checked_words.length > 0) {
                if (this.state.brnkey.length < 50) {
                    word_count_label = this.state.brnkey.length + " characters (50 minimum)";
                    valid = false;
                } else {
                    if (checked_words.length < 16) word_count_label = checked_words.length + " words (16 recommended)";else {
                        word_count_label = checked_words.length + " words";
                        warn = false;
                    }
                }
            }

            return { warn: warn, valid: valid, word_count_label: word_count_label, checked_words: checked_words };
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loading || !dictionary_set) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { padding: 20 } },
                    "Fetching dictionary...."
                );
            }

            var _checkBrainKey2 = this._checkBrainKey(),
                warn = _checkBrainKey2.warn,
                word_count_label = _checkBrainKey2.word_count_label,
                checked_words = _checkBrainKey2.checked_words;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                        tabIndex: this.props.tabIndex || 1,
                        onChange: this.formChange.bind(this),
                        value: this.state.brnkey,
                        id: "brnkey",
                        style: { height: 100, minWidth: 450 }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: { textAlign: "left" },
                            className: "grid-content no-padding no-overflow"
                        },
                        checked_words
                    ),
                    this.state.check_digits && !this.props.hideCheckDigits ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "pre",
                            { className: "no-overflow" },
                            this.state.check_digits,
                            " * Check Digits"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "i",
                            { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({ error: warn }) },
                            word_count_label
                        )
                    )
                )
            );
        }
    }, {
        key: "formChange",
        value: function formChange(event) {
            var _event$target = event.target,
                id = _event$target.id,
                value = _event$target.value;

            var _checkBrainKey3 = this._checkBrainKey(),
                valid = _checkBrainKey3.valid;

            var state = {};
            state[id] = value;
            if (id === "brnkey") {
                var brnkey = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["key"].normalize_brainKey(value);
                this.props.onChange(brnkey.length < 50 ? null : brnkey);
                state.check_digits = brnkey.length < 50 ? null : bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["hash"].sha1(brnkey).toString("hex").substring(0, 4);
            }
            this.setState(state);

            if (this.props.errorCallback) {
                this.props.errorCallback(valid);
            }
        }
    }]);

    return BrainkeyInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BrainkeyInput.propTypes = {
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrainkeyInput);

var MisspelledWord = function (_Component2) {
    _inherits(MisspelledWord, _Component2);

    function MisspelledWord() {
        _classCallCheck(this, MisspelledWord);

        return _possibleConstructorReturn(this, (MisspelledWord.__proto__ || Object.getPrototypeOf(MisspelledWord)).apply(this, arguments));
    }

    _createClass(MisspelledWord, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    style: {
                        borderBottom: "1px dotted #ff0000",
                        padding: "1px",
                        margin: "1px"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: { borderBottom: "1px dotted #ff0000" } },
                    this.props.children
                )
            );
        }
    }]);

    return MisspelledWord;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ 3271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2145);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2140);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2002);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2003);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(553);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(420);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1846);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 *  @brief displays the summary of a given account in a condenced view (for the dashboard)
 *
 *  This card has the following properties:
 *
 *  { account: ${name_or_id} }
 */

var AccountCard = function (_React$Component) {
    _inherits(AccountCard, _React$Component);

    function AccountCard() {
        _classCallCheck(this, AccountCard);

        return _possibleConstructorReturn(this, (AccountCard.__proto__ || Object.getPrototypeOf(AccountCard)).apply(this, arguments));
    }

    _createClass(AccountCard, [{
        key: "onCardClick",
        value: function onCardClick(e) {
            e.preventDefault();
            var name = this.props.account.get("name");
            this.props.history.push("/account/" + name);
        }
    }, {
        key: "render",
        value: function render() {
            var name = null;
            var balances = null;
            var isMyAccount = false;
            if (this.props.account) {
                name = this.props.account.get("name");
                var abal = this.props.account.get("balances");
                if (abal) {
                    balances = abal.map(function (x) {
                        var balanceAmount = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getObject(x);
                        if (!balanceAmount.get("balance")) {
                            return null;
                        }
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { key: x },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__["default"], { balance: x })
                        );
                    }).toArray();
                }
                isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].isMyAccount(this.props.account);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content account-card",
                    onClick: this.onCardClick.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card" + (isMyAccount ? " my-account" : "") },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        { className: "text-center" },
                        name
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-content clearfix" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                account: name,
                                size: { height: 64, width: 64 }
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "balances" },
                            balances
                        )
                    )
                )
            );
        }
    }]);

    return AccountCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountCard.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};

AccountCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AccountCard);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(AccountCard));

/***/ }),

/***/ 3272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1886);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(740);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
/* harmony import */ var api_accountApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(601);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(489);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(718);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(604);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2671);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1986);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3264);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1983);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3273);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(605);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3274);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(736);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3275);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


























__webpack_require__(3277);

var import_keys_assert_checking = false;

var KeyCount = function KeyCount(_ref) {
    var key_count = _ref.key_count;

    if (!key_count) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "span",
        null,
        "Found ",
        key_count,
        " private keys"
    );
};

var WIF_KEY_LENGTH = 51;

var ImportKeys = function (_Component) {
    _inherits(ImportKeys, _Component);

    function ImportKeys() {
        _classCallCheck(this, ImportKeys);

        var _this = _possibleConstructorReturn(this, (ImportKeys.__proto__ || Object.getPrototypeOf(ImportKeys)).call(this));

        _this.state = _this._getInitialState();

        _this._renderBalanceClaims = _this._renderBalanceClaims.bind(_this);
        return _this;
    }

    _createClass(ImportKeys, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            var keep_file_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return {
                keys_to_account: {},
                no_file: true,
                account_keys: [],
                //brainkey: null,
                //encrypted_brainkey: null,
                reset_file_name: keep_file_name ? this.state.reset_file_name : Date.now(),
                reset_password: Date.now(),
                password_checksum: null,
                import_file_message: null,
                import_password_message: null,
                imported_keys_public: {},
                key_text_message: null,
                associatedAccount: null,
                errorTextMessage: null,
                genesis_filtering: false,
                genesis_filter_status: [],
                genesis_filter_finished: undefined,
                importSuccess: false
            };
        }
    }, {
        key: "reset",
        value: function reset(e, keep_file_name) {
            var _this2 = this;

            if (e) e.preventDefault();
            var state = this._getInitialState(keep_file_name);
            this.setState(state, function () {
                return _this2.updateOnChange();
            });
        }
    }, {
        key: "onWif",
        value: function onWif(event) {
            event.preventDefault();
            var value = this.refs.wifInput.state.value;
            this.addByPattern(value);
        }
    }, {
        key: "onCancel",
        value: function onCancel(e) {
            if (e) e.preventDefault();
            this.setState(this._getInitialState());
        }
    }, {
        key: "updateOnChange",
        value: function updateOnChange() {
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__["default"].setPubkeys(Object.keys(this.state.imported_keys_public));
        }
    }, {
        key: "getImportAccountKeyCount",
        value: function getImportAccountKeyCount(keys_to_account) {
            var account_keycount = {};
            var found = false;
            for (var key in keys_to_account) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = keys_to_account[key].account_names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var account_name = _step.value;

                        account_keycount[account_name] = (account_keycount[account_name] || 0) + 1;
                        found = true;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }return found ? account_keycount : null;
        }
    }, {
        key: "upload",
        value: function upload(evt) {
            var _this3 = this;

            this.reset(null, true);
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                var contents = evt.target.result;
                try {
                    var json_contents = void 0;
                    try {
                        json_contents = JSON.parse(contents);
                        // This is the only chance to encounter a large file,
                        // try this format first.
                        _this3._parseImportKeyUpload(json_contents, file.name, function (update_state) {
                            // console.log("update_state", update_state)
                            _this3.setState(update_state, function () {
                                if (update_state.genesis_filter_finished) {
                                    // try empty password, also display "Enter import file password"
                                    _this3._passwordCheck();
                                }
                            });
                        });
                    } catch (e) {
                        //DEBUG console.log("... _parseImportKeyUpload",e)
                        try {
                            if (!json_contents) file.name + " is an unrecognized format";
                            _this3._parseWalletJson(json_contents);
                        } catch (ee) {
                            if (!_this3.addByPattern(contents)) throw ee;
                        }
                        // try empty password, also display "Enter import file password"
                        _this3._passwordCheck();
                    }
                } catch (message) {
                    console.error("... ImportKeys upload error", message);
                    _this3.setState({ import_file_message: message });
                }
            };
            reader.readAsText(file);
        }

        /** BTS 1.0 client wallet_export_keys format. */

    }, {
        key: "_parseImportKeyUpload",
        value: function _parseImportKeyUpload(json_contents, file_name, update_state) {
            var _this4 = this;

            var password_checksum = void 0,
                unfiltered_account_keys = void 0;
            try {
                password_checksum = json_contents.password_checksum;
                if (!password_checksum) throw file_name + " is an unrecognized format";

                if (!Array.isArray(json_contents.account_keys)) throw file_name + " is an unrecognized format";

                unfiltered_account_keys = json_contents.account_keys;
            } catch (e) {
                throw e.message || e;
            }

            // BTS 1.0 wallets may have a lot of generated but unused keys or spent TITAN addresses making
            // wallets so large it is was not possible to use the JavaScript wallets with them.

            var genesis_filter = new chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_18__["default"]();
            if (!genesis_filter.isAvailable()) {
                update_state({
                    password_checksum: password_checksum,
                    account_keys: unfiltered_account_keys,
                    genesis_filter_finished: true,
                    genesis_filtering: false
                });
                return;
            }
            this.setState({ genesis_filter_initalizing: true }, function () {
                return (
                    // setTimeout(()=>
                    genesis_filter.init(function () {
                        var filter_status = _this4.state.genesis_filter_status;

                        // FF < version 41 does not support worker threads internals (like blob urls)
                        // let GenesisFilterWorker = require("worker-loader!workers/GenesisFilterWorker")
                        // let worker = new GenesisFilterWorker
                        // worker.postMessage({
                        //     account_keys: unfiltered_account_keys,
                        //     bloom_filter: genesis_filter.bloom_filter
                        // })
                        // worker.onmessage = event => { try {
                        //     let { status, account_keys } = event.data
                        //     // ...
                        // } catch( e ) { console.error('GenesisFilterWorker', e) }}

                        var account_keys = unfiltered_account_keys;
                        genesis_filter.filter(account_keys, function (status) {
                            //console.log("import filter", status)
                            if (status.error === "missing_public_keys") {
                                console.error("un-released format, just for testing");
                                update_state({
                                    password_checksum: password_checksum,
                                    account_keys: unfiltered_account_keys,
                                    genesis_filter_finished: true,
                                    genesis_filtering: false
                                });
                                return;
                            }
                            if (status.success) {
                                // let { account_keys } = event.data // if using worker thread
                                update_state({
                                    password_checksum: password_checksum,
                                    account_keys: account_keys,
                                    genesis_filter_finished: true,
                                    genesis_filtering: false
                                });
                                return;
                            }
                            if (status.initalizing !== undefined) {
                                update_state({
                                    genesis_filter_initalizing: status.initalizing,
                                    genesis_filtering: true
                                });
                                return;
                            }
                            if (status.importing === undefined) {
                                // programmer error
                                console.error("unknown status", status);
                                return;
                            }
                            if (!filter_status.length)
                                // first account
                                filter_status.push(status);else {
                                var last_account_name = filter_status[filter_status.length - 1].account_name;
                                if (last_account_name === status.account_name)
                                    // update same account
                                    filter_status[filter_status.length - 1] = status;
                                    // new account
                                else filter_status.push(status);
                            }
                            update_state({ genesis_filter_status: filter_status });
                        });
                    })
                );
            }
            //, 100)
            );
        }

        /**
        BTS 1.0 hosted wallet backup (wallet.bitshares.org) is supported.
          BTS 1.0 native wallets should use wallet_export_keys instead of a wallet backup.
          Note,  Native wallet backups will be rejected.  The logic below does not
        capture assigned account names (for unregisted accounts) and does not capture
        signing keys.  The hosted wallet has only registered accounts and no signing
        keys.
          */

    }, {
        key: "_parseWalletJson",
        value: function _parseWalletJson(json_contents) {
            var password_checksum = void 0;
            var encrypted_brainkey = void 0;
            var address_to_enckeys = {};
            var account_addresses = {};

            var savePubkeyAccount = function savePubkeyAccount(pubkey, account_name) {
                //replace BTS with GPH
                pubkey = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix + pubkey.substring(3);
                var address = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PublicKey"].fromPublicKeyString(pubkey).toAddressString();
                var addresses = account_addresses[account_name] || [];
                address = "BTS" + address.substring(3);
                //DEBUG console.log("... address",address,account_name)
                addresses.push(address);
                account_addresses[account_name] = addresses;
            };

            try {
                if (!Array.isArray(json_contents)) {
                    //DEBUG console.log('... json_contents',json_contents)
                    throw new Error("Invalid wallet format");
                }
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = json_contents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var element = _step2.value;

                        if ("key_record_type" == element.type && element.data.account_address && element.data.encrypted_private_key) {
                            var address = element.data.account_address;
                            var _enckeys = address_to_enckeys[address] || [];
                            _enckeys.push(element.data.encrypted_private_key);
                            //DEBUG console.log("... address",address,enckeys)
                            address_to_enckeys[address] = _enckeys;
                            continue;
                        }

                        if ("account_record_type" == element.type) {
                            var account_name = element.data.name;
                            savePubkeyAccount(element.data.owner_key, account_name);
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = element.data.active_key_history[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var history = _step3.value;

                                    savePubkeyAccount(history[1], account_name);
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }

                            continue;
                        }

                        if ("property_record_type" == element.type && "encrypted_brainkey" == element.data.key) {
                            encrypted_brainkey = element.data.value;
                            continue;
                        }

                        if ("master_key_record_type" == element.type) {
                            if (!element.data) throw file.name + " invalid master_key_record record";

                            if (!element.data.checksum) throw file.name + " is missing master_key_record checksum";

                            password_checksum = element.data.checksum;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (!encrypted_brainkey) throw "Please use a BTS 1.0 wallet_export_keys file instead";

                if (!password_checksum) throw file.name + " is missing password_checksum";

                if (!enckeys.length) throw file.name + " does not contain any private keys";
            } catch (e) {
                throw e.message || e;
            }

            var account_keys = [];
            for (var _account_name in account_addresses) {
                var encrypted_private_keys = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = account_addresses[_account_name][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _address = _step4.value;

                        var _enckeys2 = address_to_enckeys[_address];
                        if (!_enckeys2) continue;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = _enckeys2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var enckey = _step5.value;
                                encrypted_private_keys.push(enckey);
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                account_keys.push({
                    account_name: _account_name,
                    encrypted_private_keys: encrypted_private_keys
                });
            }
            // We could prompt for this brain key instead on first use.  The user
            // may already have a brainkey at this point so with a single brainkey
            // wallet we can't use it now.
            this.setState({
                password_checksum: password_checksum,
                account_keys: account_keys
                //encrypted_brainkey
            });
        }
    }, {
        key: "_passwordCheck",
        value: function _passwordCheck(evt) {
            var _this5 = this;

            if (evt && "preventDefault" in evt) {
                evt.preventDefault();
            }
            var pwNode = this.refs.password;
            // if(pwNode) pwNode.focus()
            var password = pwNode ? pwNode.value : "";
            var checksum = this.state.password_checksum;
            var new_checksum = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["hash"].sha512(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["hash"].sha512(password)).toString("hex");
            if (checksum != new_checksum) {
                return this.setState({
                    no_file: false,
                    import_password_message: password.length ? "Incorrect password" : null
                });
            }
            this.setState({
                no_file: false,
                reset_password: Date.now(),
                import_password_message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_pass_match")
            }, function () {
                return _this5._decryptPrivateKeys(password);
            });
            // setTimeout(, 250)
        }
    }, {
        key: "_decryptPrivateKeys",
        value: function _decryptPrivateKeys(password) {
            var _this6 = this;

            var password_aes = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["Aes"].fromSeed(password);
            var format_error1_once = true;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.state.account_keys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var account = _step6.value;

                    if (!account.encrypted_private_keys) {
                        var error = "Account " + account.account_name + " missing encrypted_private_keys";
                        console.error(error);
                        if (format_error1_once) {
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                                message: error
                            });
                            format_error1_once = false;
                        }
                        continue;
                    }
                    var account_name = account.account_name.trim();
                    var same_prefix_regex = new RegExp("^" + bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix);
                    for (var i = 0; i < account.encrypted_private_keys.length; i++) {
                        var encrypted_private = account.encrypted_private_keys[i];
                        var public_key_string = account.public_keys ? account.public_keys[i] : null; // performance gain

                        try {
                            var private_plainhex = password_aes.decryptHex(encrypted_private);
                            if (import_keys_assert_checking && public_key_string) {
                                var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromHex(private_plainhex);
                                var pub = private_key.toPublicKey(); // S L O W
                                var addy = pub.toAddressString();
                                var pubby = pub.toPublicKeyString();
                                var _error = "";

                                var address_string = account.addresses ? account.addresses[i] : null; // assert checking

                                if (address_string && addy.substring(3) != address_string.substring(3)) _error = "address imported " + address_string + " but calculated " + addy + ". ";

                                if (pubby.substring(3) != public_key_string.substring(3)) _error += "public key imported " + public_key_string + " but calculated " + pubby;

                                if (_error != "") console.log("ERROR Miss-match key", _error);
                            }

                            if (!public_key_string) {
                                var _private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromHex(private_plainhex);
                                var public_key = _private_key.toPublicKey(); // S L O W
                                public_key_string = public_key.toPublicKeyString();
                            } else {
                                if (!same_prefix_regex.test(public_key_string))
                                    // This was creating a unresponsive chrome browser
                                    // but after the results were shown.  It was probably
                                    // caused by garbage collection.
                                    public_key_string = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__["ChainConfig"].address_prefix + public_key_string.substring(3);
                            }
                            this.state.imported_keys_public[public_key_string] = true;

                            var _ref2 = this.state.keys_to_account[private_plainhex] || { account_names: [] },
                                account_names = _ref2.account_names;

                            var dup = false;
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = account_names[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var _name = _step7.value;

                                    if (_name == account_name) dup = true;
                                }
                            } catch (err) {
                                _didIteratorError7 = true;
                                _iteratorError7 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                        _iterator7.return();
                                    }
                                } finally {
                                    if (_didIteratorError7) {
                                        throw _iteratorError7;
                                    }
                                }
                            }

                            if (dup) continue;
                            account_names.push(account_name);
                            this.state.keys_to_account[private_plainhex] = {
                                account_names: account_names,
                                public_key_string: public_key_string
                            };
                        } catch (e) {
                            console.log(e, e.stack);
                            var message = e.message || e;
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                                message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("notifications.import_keys_error", {
                                    account_name: account_name,
                                    error_msg: message
                                })
                            });
                        }
                    }
                }
                //let enc_brainkey = this.state.encrypted_brainkey
                //if(enc_brainkey){
                //    this.setState({
                //        brainkey: password_aes.decryptHexToText(enc_brainkey)
                //    })
                //}
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            this.setState({
                import_file_message: null,
                import_password_message: null,
                password_checksum: null
            }, function () {
                return _this6.updateOnChange();
            });
        }
    }, {
        key: "_saveImport",
        value: function _saveImport(e) {
            var _this7 = this;

            e.preventDefault();
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
            var dups = {};
            for (var public_key_string in this.state.imported_keys_public) {
                if (!keys.has(public_key_string)) continue;
                delete this.state.imported_keys_public[public_key_string];
                dups[public_key_string] = true;
            }
            if (Object.keys(this.state.imported_keys_public).length === 0) {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("notifications.import_keys_already_imported")
                });
                return;
            }
            var keys_to_account = this.state.keys_to_account;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = Object.keys(keys_to_account)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var private_plainhex = _step8.value;
                    var _keys_to_account$priv = keys_to_account[private_plainhex],
                        account_names = _keys_to_account$priv.account_names,
                        _public_key_string = _keys_to_account$priv.public_key_string;

                    if (dups[_public_key_string]) delete keys_to_account[private_plainhex];
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__["default"].unlock().then(function () {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(true);
                // show the loading indicator
                setTimeout(function () {
                    return _this7.saveImport();
                }, 200);
            }).catch(function () {});
        }
    }, {
        key: "saveImport",
        value: function saveImport() {
            var _this8 = this;

            var keys_to_account = this.state.keys_to_account;
            var private_key_objs = [];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = Object.keys(keys_to_account)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var private_plainhex = _step9.value;
                    var _keys_to_account$priv2 = keys_to_account[private_plainhex],
                        account_names = _keys_to_account$priv2.account_names,
                        public_key_string = _keys_to_account$priv2.public_key_string;

                    private_key_objs.push({
                        private_plainhex: private_plainhex,
                        import_account_names: account_names,
                        public_key_string: public_key_string
                    });
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            this.reset();
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].importKeysWorker(private_key_objs).then(function (result) {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
                var import_count = private_key_objs.length;

                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].success({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_key_success", {
                        count: import_count
                    })
                });

                _this8.setState({
                    importSuccess: true
                });
                // this.onCancel() // back to claim balances
            }).catch(function (error) {
                console.log("error:", error);
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
                var message = error;
                try {
                    message = error.target.error.message;
                } catch (e) {}

                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("notifications.import_keys_error_unknown", {
                        error_msg: message
                    })
                });
            });
        }
    }, {
        key: "addByPattern",
        value: function addByPattern(contents) {
            var _this9 = this;

            if (!contents) {
                this.setState({
                    errorTextMessage: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.wif_import_error")
                });
                return false;
            }
            if (contents.length !== WIF_KEY_LENGTH) {
                this.setState({
                    errorTextMessage: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.wif_length_error")
                });
                return false;
            }
            var count = 0,
                invalid_count = 0;
            var wif_regex = /5[HJK][1-9A-Za-z]{49}/g;
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = (contents.match(wif_regex) || [])[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var wif = _step10.value;

                    try {
                        (function () {
                            var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromWif(wif); //could throw and error
                            var private_plainhex = private_key.toBuffer().toString("hex");
                            var public_key = private_key.toPublicKey(); // S L O W
                            var public_key_string = public_key.toPublicKeyString();
                            _this9.state.imported_keys_public[public_key_string] = true;
                            _this9.state.keys_to_account[private_plainhex] = {
                                account_names: [],
                                public_key_string: public_key_string
                            };

                            var accountName = [];
                            api_accountApi__WEBPACK_IMPORTED_MODULE_4__["default"].lookupAccountByPublicKey(public_key_string).then(function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result) {
                                    var batch, accountNames;
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    batch = void 0;

                                                    batch = result[0].map(function (value) {
                                                        return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAccount", value);
                                                    });
                                                    _context.next = 4;
                                                    return Promise.all(batch);

                                                case 4:
                                                    accountNames = _context.sent;

                                                    accountNames.map(function (value) {
                                                        var name = value.get("name");
                                                        if (accountName.indexOf(name) === -1) {
                                                            accountName.push(name);
                                                        }
                                                    });
                                                    _this9.setState({ associatedAccount: accountName });

                                                case 7:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this9);
                                }));

                                return function (_x2) {
                                    return _ref3.apply(this, arguments);
                                };
                            }());

                            count++;
                        })();
                    } catch (e) {
                        invalid_count++;
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            this.setState({
                key_text_message: "Found " + (!count ? "" : count + " valid") + (!invalid_count ? "" : " and " + invalid_count + " invalid") + " key" + (count > 1 || invalid_count > 1 ? "s" : "") + "."
            }, function () {
                return _this9.updateOnChange();
            });
            // removes the message on the next render
            this.setState({
                key_text_message: null,
                errorTextMessage: null
            });
            return count;
        }

        // toggleImportType(type) {
        //     if (!type) {
        //         return;
        //     }
        //     console.log("toggleImportType", type);
        //     this.setState({
        //         privateKey: type === "privateKey"
        //     });
        // }

    }, {
        key: "_renderBalanceClaims",
        value: function _renderBalanceClaims() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: 15 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                        { type: "primary", onClick: this.onCancel.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.done" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this10 = this;

            var privateKey = this.props.privateKey;
            var keys_to_account = this.state.keys_to_account;

            var key_count = Object.keys(keys_to_account).length;
            var account_keycount = this.getImportAccountKeyCount(keys_to_account);

            // Create wallet prior to the import keys (keeps layout clean)
            if (!stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].getWallet()) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__["WalletCreate"], { importKeys: true, hideTitle: true });
            if (this.props.importing) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "circle" })
                    )
                );
            }

            var filtering = this.state.genesis_filtering;
            var was_filtered = !!this.state.genesis_filter_status.length && this.state.genesis_filter_finished;
            var account_rows = null;

            if (this.state.genesis_filter_status.length) {
                account_rows = [];
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = this.state.genesis_filter_status[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var status = _step11.value;

                        if (status.count && status.total) {
                            account_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                { key: status.account_name },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    status.account_name
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    null,
                                    filtering ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "Filtering",
                                        " ",
                                        Math.round(status.count / status.total * 100),
                                        " ",
                                        "%",
                                        " "
                                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        status.count
                                    )
                                )
                            ));
                        }
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }
            }

            var import_ready = key_count !== 0;
            var password_placeholder = counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.import_password");

            if (import_ready) password_placeholder = "";

            if (!account_rows && account_keycount) {
                account_rows = [];
                for (var account_name in account_keycount) {
                    account_rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: account_name },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            account_name
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            account_keycount[account_name]
                        )
                    ));
                }
            }

            var cancelButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                { onClick: this.onCancel.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.cancel" })
            );

            var tabIndex = 1;

            if (this.state.importSuccess) {
                return this._renderBalanceClaims();
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { padding: "10px 0" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.state.key_text_message ? this.state.key_text_message : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KeyCount, { key_count: key_count })
                    ),
                    !import_ready ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        " ",
                        "(",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this.reset.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.reset" })
                        ),
                        ")"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        this.state.associatedAccount && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.wif_associated_accounts" }),
                            this.state.associatedAccount.map(function (value, key) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "p",
                                    { key: key },
                                    value
                                );
                            })
                        )
                    )
                ),
                account_rows ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    !account_rows.length ? counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("wallet.no_accounts") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "explorer.account.title" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "settings.restore_key_count" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tbody",
                                null,
                                account_rows
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                !import_ready && !this.state.genesis_filter_initalizing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            privateKey ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "form",
                                { onSubmit: this.onWif.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
                                    component: "label",
                                    content: "wallet.paste_private"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                    ref: "wifInput",
                                    type: "password",
                                    id: "wif",
                                    tabIndex: tabIndex++,
                                    style: { marginBottom: "16px" }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "importError" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        { className: "red" },
                                        this.state.errorTextMessage
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                                    {
                                        type: "primary",
                                        htmlType: "submit",
                                        style: { marginRight: "16px" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.submit" })
                                ),
                                cancelButton
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "form",
                                {
                                    onSubmit: this._passwordCheck.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.bts_09_export" }),
                                    this.state.no_file ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        "\xA0 (",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "a",
                                            {
                                                onClick: this.reset.bind(this)
                                            },
                                            "Reset"
                                        ),
                                        ")"
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "file",
                                    id: "file_input",
                                    accept: ".json",
                                    style: {
                                        border: "solid",
                                        marginBottom: 15
                                    },
                                    key: this.state.reset_file_name,
                                    onChange: this.upload.bind(this)
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    this.state.import_file_message
                                ),
                                !this.state.no_file ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Input"], {
                                        type: "password",
                                        ref: "password",
                                        key: this.state.reset_password,
                                        placeholder: password_placeholder,
                                        onChange: function onChange() {
                                            if (_this10.state.import_password_message && _this10.state.import_password_message.length) {
                                                _this10.setState({
                                                    import_password_message: null
                                                });
                                            }
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "p",
                                        { className: "facolor-error" },
                                        this.state.import_password_message
                                    )
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "button-group" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                                        {
                                            type: "primary",
                                            disabled: !!this.state.no_file,
                                            htmlType: "submit",
                                            style: { marginRight: "16px" }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.submit" })
                                    ),
                                    cancelButton
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                    )
                ) : null,
                this.state.genesis_filter_initalizing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], { type: "circle" })
                    )
                ) : null,
                import_ready ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button success", {
                                        disabled: !import_ready
                                    }),
                                    onClick: this._saveImport.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.import_keys" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button secondary",
                                    onClick: this.reset.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.cancel" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { content: "wallet.unclaimed" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, { component: "p", content: "wallet.claim_later" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
                                component: "label",
                                content: "wallet.totals"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__["default"], null)
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                ) : null
            );
        }
    }]);

    return ImportKeys;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ImportKeys.defaultProps = {
    privateKey: true
};


ImportKeys = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(ImportKeys, {
    listenTo: function listenTo() {
        return [stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps() {
        return {
            importing: stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().importing
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (ImportKeys);

/***/ }),

/***/ 3273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1886);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2146);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BalanceClaimAssetTotals = function (_Component) {
    _inherits(BalanceClaimAssetTotals, _Component);

    function BalanceClaimAssetTotals() {
        _classCallCheck(this, BalanceClaimAssetTotals);

        return _possibleConstructorReturn(this, (BalanceClaimAssetTotals.__proto__ || Object.getPrototypeOf(BalanceClaimAssetTotals)).apply(this, arguments));
    }

    _createClass(BalanceClaimAssetTotals, [{
        key: "render",
        value: function render() {
            if (this.props.balances === undefined) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "wallet.loading_balances" }),
                "\u2026"
            );

            var total_by_asset = this.props.balances.groupBy(function (v) {
                return v.balance.asset_id;
            }).map(function (l) {
                return l.reduce(function (r, v) {
                    return r + Number(v.balance.amount);
                }, 0);
            });

            if (!total_by_asset.size) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                "None"
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                total_by_asset.map(function (total, asset_id) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { key: asset_id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            color: "info",
                            amount: total,
                            asset: asset_id
                        })
                    );
                }).toArray()
            );
        }
    }]);

    return BalanceClaimAssetTotals;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BalanceClaimAssetTotals = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(BalanceClaimAssetTotals, {
    listenTo: function listenTo() {
        return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState();
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BalanceClaimAssetTotals);

/***/ }),

/***/ 3274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportKeysStoreWrapped", function() { return ImportKeysStoreWrapped; });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(554);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ImportKeysStore = function (_BaseStore) {
    _inherits(ImportKeysStore, _BaseStore);

    function ImportKeysStore() {
        _classCallCheck(this, ImportKeysStore);

        var _this = _possibleConstructorReturn(this, (ImportKeysStore.__proto__ || Object.getPrototypeOf(ImportKeysStore)).call(this));

        _this.state = _this._getInitialState();
        _this._export("importing");
        return _this;
    }

    _createClass(ImportKeysStore, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return { importing: false };
        }
    }, {
        key: "importing",
        value: function importing(_importing) {
            this.setState({ importing: _importing });
        }
    }]);

    return ImportKeysStore;
}(stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__["default"]);

var ImportKeysStoreWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(ImportKeysStore, "ImportKeysStore");
/* harmony default export */ __webpack_exports__["default"] = (ImportKeysStoreWrapped);

/***/ }),

/***/ 3275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bts_genesiskeys_bloom_url = undefined;
try {
    var url = __webpack_require__(3276);
    if (url.indexOf("3cee441") === -1) throw new Error("Incorrect hash: bts_genesiskeys_bloom.dat");
    bts_genesiskeys_bloom_url = url;
} catch (e) {
    // webpack deployment exception (not run time)
    console.log("WARN: Will be unable to filter BTS 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat", e);
}

/**
    This should only be applied to a BTS 1.0 export file taken on the
    discontinued chain. Any public key string or address (all 5 formats) carried
    over to the BTS 2.0 genesis block will be in this filter.

    Their may be some false positives but no false negatives.
*/

var GenesisFilter = function () {
    /** or call this.init */
    function GenesisFilter(bloom_buffer) {
        _classCallCheck(this, GenesisFilter);

        if (!bloom_buffer) return;
        this.bloom_buffer = bloom_buffer;
        this.bits_in_filter = bloom_buffer.length * 8; // 8388608 (test data)
    }

    /** Was a bloom file deployed?  This does not try to load it from the server. */


    _createClass(GenesisFilter, [{
        key: "isAvailable",
        value: function isAvailable() {
            return bts_genesiskeys_bloom_url !== undefined;
        }
    }, {
        key: "init",
        value: function init(done) {
            var _this = this;

            if (this.bloom_buffer) {
                done();
                return;
            }
            if (!this.isAvailable()) throw new Error("Genesis bloom file was not deployed");

            var xhr = new XMLHttpRequest();
            // firefox 40 did not allow the blob url but ff 41.0.2 did
            xhr.responseType = "blob";
            xhr.onload = function () {
                if (xhr.status === 404) return;
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var contents = new Buffer(evt.target.result, "binary");
                    if (contents.length !== 1048576) throw new Error("Wrong length");
                    _this.bits_in_filter = contents.length * 8; // 8388608 (test data)
                    _this.bloom_buffer = contents;
                    done();
                };
                reader.readAsBinaryString(xhr.response);
            };
            xhr.onerror = function () {
                console.error("xhr.onerror", e);
            };
            xhr.open("GET", bts_genesiskeys_bloom_url);
            xhr.send();
        }
    }, {
        key: "inGenesis",
        value: function inGenesis(pubkey_or_address) {
            if (!this.bloom_buffer) throw new Error("Call init() first");
            for (var hashes = 0; hashes < 3; hashes++) {
                var hex = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["hash"].sha256(hashes + ":" + pubkey_or_address);
                var bit_address = parseInt(hex.slice(-3).toString("hex"), 16) % this.bits_in_filter; // 3090564
                // console.error("bit_address", bit_address.toString(16))
                var byte_address = bit_address >> 3; // 386320
                // console.error("byte_address", byte_address.toString(16))
                var mask = 1 << (bit_address & 7); // 16
                // console.error("mask", mask.toString(16))
                var byte = this.bloom_buffer[byte_address];
                // console.error("byte", byte.toString(16))
                // console.error("byte & mask", byte & mask, (byte & mask) === 0, '\n')
                if ((byte & mask) === 0) return false;
            }
            return true;
        }
    }, {
        key: "filter",
        value: function filter(account_keys, status) {
            var _this2 = this;

            if (!this.isAvailable()) {
                console.log("WARN: Missing bloom filter for BTS 0.9.x wallets");
                status({ error: "missing_bloom" });
                return;
            }
            var initalizing = true;
            status({ initalizing: initalizing });
            this.init(function () {
                try {
                    initalizing = false;
                    status({ initalizing: initalizing });
                    var running_count_progress = 1;
                    for (var a = 0; a < account_keys.length; a++) {
                        var removed_count = 0,
                            count = 0;
                        var keys = account_keys[a];
                        var total = keys.encrypted_private_keys.length;
                        status({
                            importing: true,
                            account_name: keys.account_name,
                            count: count,
                            total: total
                        });
                        for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                            count++;
                            if (count % running_count_progress === 0) {
                                running_count_progress = 47;
                                status({
                                    importing: true,
                                    account_name: keys.account_name,
                                    count: count,
                                    total: total
                                });
                            }
                            if (!keys.public_keys) {
                                // un-released format, just for testing
                                status({ error: "missing_public_keys" });
                                return;
                            }
                            var currentKey = keys.public_keys[k];
                            if (/^GPH/.test(currentKey)) currentKey = "BTS" + currentKey.substring(3);
                            if (_this2.inGenesis(currentKey)) continue;
                            var addresses = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__["key"].addresses(currentKey, "BTS");
                            var addy_found = false;
                            for (var i = 0; i < addresses.length; i++) {
                                if (_this2.inGenesis(addresses[i])) {
                                    addy_found = true;
                                    break;
                                }
                            }
                            if (addy_found) continue;
                            delete keys.encrypted_private_keys[k];
                            delete keys.public_keys[k];
                            removed_count++;
                        }
                        var encrypted_private_keys = [],
                            public_keys = [];
                        for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
                            if (!keys.encrypted_private_keys[k]) continue;
                            encrypted_private_keys.push(keys.encrypted_private_keys[k]);
                            public_keys.push(keys.public_keys[k]);
                        }
                        keys.encrypted_private_keys = encrypted_private_keys;
                        status({
                            importing: false,
                            account_name: keys.account_name,
                            count: count - removed_count,
                            total: total
                        });
                        keys.public_keys = public_keys;
                    }
                    status({ success: true });
                } finally {
                    if (initalizing) {
                        initalizing = false;
                        status({ initalizing: initalizing });
                    }
                }
            });
        }
    }]);

    return GenesisFilter;
}();

/* harmony default export */ __webpack_exports__["default"] = (GenesisFilter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(427).Buffer))

/***/ }),

/***/ 3276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bts_genesiskeys_bloom_3cee441.dat";

/***/ }),

/***/ 3277:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctYWNjb3VudC40NzEzODM4NWZlNmNkNzM4NTExYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvRXhpc3RpbmdBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvQnJhaW5rZXkuanN4Iiwid2VicGFjazovLy9hcHAvYWN0aW9ucy9CcmFpbmtleUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZXMvQnJhaW5rZXlTdG9yZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JyYWlua2V5SW5wdXQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvQWNjb3VudENhcmQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvSW1wb3J0S2V5cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1Bc3NldFRvdGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL3N0b3Jlcy9JbXBvcnRLZXlzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY2hhaW4vR2VuZXNpc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2J0c19nZW5lc2lza2V5c19ibG9vbS5kYXQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0ltcG9ydEtleXMuc2Nzcz9mMDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBXYWxsZXRNYW5hZ2VyU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRNYW5hZ2VyU3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi9CYWxhbmNlQ2xhaW1BY3RpdmVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCcmFpbmtleSBmcm9tIFwiLi9CcmFpbmtleVwiO1xyXG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XHJcbmltcG9ydCB7QmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XHJcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcImJyYW5kaW5nXCI7XHJcblxyXG5jb25zdCBjb25uZWN0T2JqZWN0ID0ge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtXYWxsZXRNYW5hZ2VyU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHdhbGxldCA9IFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB7d2FsbGV0fTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIEV4aXN0aW5nQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGFzX3dhbGxldCA9IHRoaXMucHJvcHMud2FsbGV0LndhbGxldF9uYW1lcy5jb3VudCgpICE9IDA7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQud2VsY29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldF9iYWNrdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnNldHVwX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwUmVzdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvaW1wb3J0LWJhY2t1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RXhpc3RpbmdBY2NvdW50T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvaW1wb3J0LWtleXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ltcG9ydEtleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2JyYWlua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCcmFpbmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvYmFsYW5jZS1jbGFpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFsYW5jZUNsYWltQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkV4aXN0aW5nQWNjb3VudCA9IGNvbm5lY3QoRXhpc3RpbmdBY2NvdW50LCBjb25uZWN0T2JqZWN0KTtcclxuXHJcbmNsYXNzIEV4aXN0aW5nQWNjb3VudE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc193YWxsZXQgPSB0aGlzLnByb3BzLndhbGxldC53YWxsZXRfbmFtZXMuY291bnQoKSAhPSAwO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQtYmFja3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5pbXBvcnRfYmFja3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9idHMxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNyZWF0ZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHshaGFzX3dhbGxldCA/IG51bGwgOiA8QmFsYW5jZUNsYWltQWN0aXZlIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJoZWFkZXIuZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJ3YWxsZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy53YWxsZXRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkV4aXN0aW5nQWNjb3VudE9wdGlvbnMgPSBjb25uZWN0KEV4aXN0aW5nQWNjb3VudE9wdGlvbnMsIGNvbm5lY3RPYmplY3QpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhpc3RpbmdBY2NvdW50O1xyXG5leHBvcnQge0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcclxuaW1wb3J0IEFjY291bnRSZWZzU3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50UmVmc1N0b3JlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnNcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbVNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3RvclwiO1xyXG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBNeUFjY291bnRzIGZyb20gXCJjb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuY2xhc3MgQmFsYW5jZUNsYWltQWN0aXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XHJcbiAgICAgICAgbGV0IGtleVNlcSA9IGtleXMua2V5U2VxKCk7XHJcbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKGtleVNlcSk7XHJcbiAgICAgICAgdGhpcy5leGlzdGluZ19rZXlzID0ga2V5U2VxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xyXG4gICAgICAgIGxldCBrZXlTZXEgPSBrZXlzLmtleVNlcSgpO1xyXG4gICAgICAgIGlmICgha2V5U2VxLmVxdWFscyh0aGlzLmV4aXN0aW5nX2tleXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhpc3Rpbmdfa2V5cyA9IGtleVNlcTtcclxuICAgICAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKGtleVNlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWNjb3VudF9yZWZzLnNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5sb2FkaW5nX2JhbGFuY2VzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmFsYW5jZXMgfHwgIXRoaXMucHJvcHMuYmFsYW5jZXMuc2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5ub19iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW1wb3J0X3JlYWR5ID1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9iYWxhbmNlcy5zaXplICYmIHRoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lO1xyXG4gICAgICAgIGxldCBjbGFpbV9iYWxhbmNlX2xhYmVsID0gaW1wb3J0X3JlYWR5XHJcbiAgICAgICAgICAgID8gYCAoJHt0aGlzLnByb3BzLmNsYWltX2FjY291bnRfbmFtZX0pYFxyXG4gICAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibm8tYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2xhaW1fYmFsYW5jZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvd1k6IFwiaGlkZGVuICFpbXBvcnRhbnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtd2lkdGgtY29udGVudCBjZW50ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15QWNjb3VudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuYmFsYW5jZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHM9e0ltbXV0YWJsZS5MaXN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRfcmVmc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGFpbUFjY291bnRDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNsYWltU2VsZWN0b3IgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWltcG9ydF9yZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGFpbUJhbGFuY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2xhaW1fYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2NsYWltX2JhbGFuY2VfbGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMub25CYWNrLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xhaW1BY2NvdW50Q2hhbmdlKGNsYWltX2FjY291bnRfbmFtZSkge1xyXG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuY2xhaW1BY2NvdW50Q2hhbmdlKGNsYWltX2FjY291bnRfbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGFpbUJhbGFuY2UoKSB7XHJcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5pbXBvcnRCYWxhbmNlKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYWltX2FjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9iYWxhbmNlcyxcclxuICAgICAgICAgICAgdHJ1ZSAvL2Jyb2FkY2FzdFxyXG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2xhaW1CYWxhbmNlXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvcjtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5kYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmJhbGFuY2VfY2xhaW1fZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQmFsYW5jZUNsYWltQWN0aXZlID0gY29ubmVjdChcclxuICAgIEJhbGFuY2VDbGFpbUFjdGl2ZSxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSwgQWNjb3VudFJlZnNTdG9yZSwgUHJpdmF0ZUtleVN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBwcm9wcy5hY2NvdW50X3JlZnMgPSBBY2NvdW50UmVmc1N0b3JlLmdldEFjY291bnRSZWZzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlQ2xhaW1BY3RpdmU7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuXHJcbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCYWxhbmNlQ2xhaW1TZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lKVxyXG4gICAgICAgICAgICB0aGlzLm9uQ2xhaW1BY2NvdW50KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNsYWltX2FjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jaGVja2VkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWxhbmNlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXQuc2l6ZVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57LyogQyBIIEUgQyBLIEIgTyBYICovfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkX3Zlc3RpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQubmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyLCBuYW1lX2Fzc2V0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17KytpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5jaGVja2VkLmdldChpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGVja2JveC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5iYWxhbmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3IudW5jbGFpbWVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3IudW5jbGFpbWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17bmFtZV9hc3NldC5nZXQoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3IudmVzdGluZy51bmNsYWltZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyLnZlc3RpbmcudW5jbGFpbWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtuYW1lX2Fzc2V0LmdldCgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IG9mIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyLnZlc3RpbmcudG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17bmFtZV9hc3NldC5nZXQoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7bmFtZV9hc3NldC5nZXQoMCl9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hlY2tib3goaW5kZXgsIGJhbGFuY2VzKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrZWQgPSB0aGlzLnByb3BzLmNoZWNrZWQ7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQuZ2V0KGluZGV4KSkge1xyXG4gICAgICAgICAgICBjaGVja2VkID0gY2hlY2tlZC5kZWxldGUoaW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQgPSBjaGVja2VkLnNldChpbmRleCwgYmFsYW5jZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRTZWxlY3RlZEJhbGFuY2VDbGFpbXMoY2hlY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGFpbUFjY291bnQoY2xhaW1fYWNjb3VudF9uYW1lLCBjaGVja2VkKSB7XHJcbiAgICAgICAgLy8gQSBVIFQgTyAgUyBFIEwgRSBDIFQgIEEgQyBDIE8gVSBOIFQgU1xyXG4gICAgICAgIC8vIG9ubHkgaWYgbm90aGluZyBpcyBzZWxlY3RlZCAocGxheSBpdCBzYWZlKVxyXG4gICAgICAgIGlmIChjaGVja2VkLnNpemUpIHJldHVybjtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLnByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXQuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGsuZ2V0KDApO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gY2xhaW1fYWNjb3VudF9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodi51bmNsYWltZWQgfHwgdi52ZXN0aW5nLnVuY2xhaW1lZClcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gY2hlY2tlZC5zZXQoaW5kZXgsIHYuYmFsYW5jZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQuc2l6ZSlcclxuICAgICAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRTZWxlY3RlZEJhbGFuY2VDbGFpbXMoY2hlY2tlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJhbGFuY2VDbGFpbVNlbGVjdG9yID0gY29ubmVjdChCYWxhbmNlQ2xhaW1TZWxlY3Rvciwge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgbGV0IHByb3BzID0gQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgICAgICBsZXQge2JhbGFuY2VzLCBhZGRyZXNzX3RvX3B1YmtleX0gPSBwcm9wcztcclxuICAgICAgICBsZXQgcHJpdmF0ZV9rZXlzID0gUHJpdmF0ZUtleVN0b3JlLmdldFN0YXRlKCkua2V5cztcclxuICAgICAgICBsZXQgZ3JvdXBDb3VudE1hcCA9IEltbXV0YWJsZS5NYXAoKS5hc011dGFibGUoKTtcclxuICAgICAgICBsZXQgZ3JvdXBDb3VudCA9IChncm91cCwgZGlzdGluY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNldCA9IGdyb3VwQ291bnRNYXAuZ2V0KGdyb3VwKTtcclxuICAgICAgICAgICAgaWYgKCFzZXQpIHtcclxuICAgICAgICAgICAgICAgIHNldCA9IEltbXV0YWJsZS5TZXQoKS5hc011dGFibGUoKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwQ291bnRNYXAuc2V0KGdyb3VwLCBzZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldC5hZGQoZGlzdGluY3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0LnNpemU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoYmFsYW5jZXMpXHJcbiAgICAgICAgICAgIHByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXQgPSBiYWxhbmNlc1xyXG4gICAgICAgICAgICAgICAgLmdyb3VwQnkodiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSyBFIFkgU1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmtleSA9IGFkZHJlc3NfdG9fcHVia2V5LmdldCh2Lm93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXlfb2JqZWN0ID0gcHJpdmF0ZV9rZXlzLmdldChwdWJrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEltcG9ydGVkIEFjY291bnQgTmFtZXMgKGp1c3QgYSB2aXN1YWwgYWlkLCBoZWxwcyB0byBhdXRvIHNlbGVjdCBhIHJlYWwgYWNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5X29iamVjdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleV9vYmplY3QuaW1wb3J0X2FjY291bnRfbmFtZXNcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzID0gcHJpdmF0ZV9rZXlfb2JqZWN0LmltcG9ydF9hY2NvdW50X25hbWVzLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2lnbmluZyBpcyB2ZXJ5IHNsb3csIGZ1cnRoZXIgZGl2aWRlIHRoZSBncm91cHMgYmFzZWQgb24gdGhlIG51bWJlciBvZiBzaWduYXR1cmVzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoX251bWJlciA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb3VudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbXV0YWJsZS5MaXN0KFtuYW1lcywgdi5iYWxhbmNlLmFzc2V0X2lkXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Lm93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgLyA2MFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVfYXNzZXRfa2V5ID0gSW1tdXRhYmxlLkxpc3QoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5iYWxhbmNlLmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaF9udW1iZXJcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZV9hc3NldF9rZXk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbC5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyLCB2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWIEEgTCBVIEUgU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wdWJsaWNfa2V5X3N0cmluZyA9IGFkZHJlc3NfdG9fcHVia2V5LmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Lm93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5iYWxhbmNlcyA9IHIuYmFsYW5jZXMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYudmVzdGVkX2JhbGFuY2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZXN0aW5nLnVuY2xhaW1lZCArPSBOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmVzdGVkX2JhbGFuY2UuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnZlc3RpbmcudG90YWwgKz0gTnVtYmVyKHYuYmFsYW5jZS5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnVuY2xhaW1lZCArPSBOdW1iZXIodi5iYWxhbmNlLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jbGFpbWVkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVzdGluZzoge3VuY2xhaW1lZDogMCwgdG90YWw6IDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM6IEltbXV0YWJsZS5TZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnNvcnRCeShrID0+IGspO1xyXG4gICAgICAgIHJldHVybiBwcm9wcztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlQ2xhaW1TZWxlY3RvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEFjY291bnRTZWxlY3QgZnJvbSBcImNvbXBvbmVudHMvRm9ybXMvQWNjb3VudFNlbGVjdFwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgTXlBY2NvdW50cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBhY2NvdW50X25hbWVzID0gdGhpcy5wcm9wcy5hY2NvdW50c1xyXG4gICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4gISFhY2NvdW50KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4gQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGFjY291bnQpKVxyXG4gICAgICAgICAgICAubWFwKGFjY291bnQgPT4gYWNjb3VudC5nZXQoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY2NvdW50U2VsZWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lcz17YWNjb3VudF9uYW1lc31cclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnRTZWxlY3QoYWNjb3VudF9uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShhY2NvdW50X25hbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKE15QWNjb3VudHMpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQnJhaW5rZXlBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JyYWlua2V5QWN0aW9uc1wiO1xyXG5pbXBvcnQgQnJhaW5rZXlTdG9yZUZhY3RvcnkgZnJvbSBcInN0b3Jlcy9CcmFpbmtleVN0b3JlXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJyYWlua2V5SW5wdXQgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JyYWlua2V5SW5wdXRcIjtcclxuaW1wb3J0IHt0b1BhaXJzfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFjY291bnRDYXJkIGZyb20gXCJjb21wb25lbnRzL0Rhc2hib2FyZC9BY2NvdW50Q2FyZFwiO1xyXG5cclxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQnJhaW5rZXlTdG9yZUZhY3RvcnkuZ2V0SW5zdGFuY2UoXCJ3bWNcIildO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiBCcmFpbmtleVN0b3JlRmFjdG9yeS5nZXRJbnN0YW5jZShcIndtY1wiKS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgQnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuY2xvc2VJbnN0YW5jZShcIndtY1wiKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxCcmFpbmtleUlucHV0QWNjZXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnJhaW5rZXkgLz5cclxuICAgICAgICAgICAgICAgIDwvQnJhaW5rZXlJbnB1dEFjY2VwdD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQnJhaW5rZXkgPSBjb25uZWN0KEJyYWlua2V5LCBjb25uZWN0T2JqZWN0KTtcclxuZXhwb3J0IGRlZmF1bHQgQnJhaW5rZXk7XHJcblxyXG5jbGFzcyBWaWV3QnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzaG9ydF9icm5rZXkgPSB0aGlzLnByb3BzLmJybmtleS5zdWJzdHJpbmcoMCwgMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KClcIiwgdGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KCkpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntzaG9ydF9icm5rZXl9PC9zcGFuPiZoZWxsaXA7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY2NvdW50X2lkcy5zaXplID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmFpbmtleUFjY291bnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYWNjb3VudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5WaWV3QnJhaW5rZXkgPSBjb25uZWN0KFZpZXdCcmFpbmtleSwgY29ubmVjdE9iamVjdCk7XHJcblxyXG5jbGFzcyBCcmFpbmtleUFjY291bnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHJvd3MgPSB0b1BhaXJzKHRoaXMucHJvcHMuYWNjb3VudHMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiAhIWFjY291bnRbMV0pXHJcbiAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiBhY2NvdW50WzFdLmdldChcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIC5zb3J0KClcclxuICAgICAgICAgICAgLm1hcChuYW1lID0+IDxBY2NvdW50Q2FyZCBrZXk9e25hbWV9IGFjY291bnQ9e25hbWV9IC8+KTtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3Jvd3N9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5CcmFpbmtleUFjY291bnRzID0gQmluZFRvQ2hhaW5TdGF0ZShCcmFpbmtleUFjY291bnRzKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmFpbmtleUlucHV0QWNjZXB0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHticm5rZXk6IFwiXCIsIGFjY2VwdDogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NlcHQpIHJldHVybiA8c3Bhbj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xyXG5cclxuICAgICAgICBsZXQgcmVhZHkgPSB0aGlzLnN0YXRlLmJybmtleSAmJiB0aGlzLnN0YXRlLmJybmtleSAhPT0gXCJcIjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJhaW5rZXlJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJyYWlua2V5Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWUoXCJidXR0b24gc3VjY2Vzc1wiLCB7ZGlzYWJsZWQ6ICFyZWFkeX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWNjZXB0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJyYWlua2V5Q2hhbmdlKGJybmtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JybmtleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjZXB0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY2VwdDogdHJ1ZX0pO1xyXG4gICAgICAgIEJyYWlua2V5QWN0aW9ucy5zZXRCcmFpbmtleSh0aGlzLnN0YXRlLmJybmtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIDxkaXYgb25DbGljaz17dGhpcy5vbkxvb2t1cEFjY291bnRzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCI+TG9va3VwIEFjY291bnRzPC9kaXY+XHJcbi8vIG9uTG9va3VwQWNjb3VudHMoKSB7XHJcbi8vXHJcbi8vIH1cclxuIiwiaW1wb3J0IGFsdCBmcm9tIFwiYWx0LWluc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBCcmFpbmtleUFjdGlvbnMge1xyXG4gICAgc2V0QnJhaW5rZXkoYnJua2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIGJybmtleTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIEJyYWlua2V5QWN0aW9uc1dyYXBwZWQgPSBhbHQuY3JlYXRlQWN0aW9ucyhCcmFpbmtleUFjdGlvbnMpO1xyXG5leHBvcnQgZGVmYXVsdCBCcmFpbmtleUFjdGlvbnNXcmFwcGVkO1xyXG4iLCJpbXBvcnQgYWx0IGZyb20gXCJhbHQtaW5zdGFuY2VcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEJhc2VTdG9yZSBmcm9tIFwic3RvcmVzL0Jhc2VTdG9yZVwiO1xyXG5pbXBvcnQgQnJhaW5rZXlBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JyYWlua2V5QWN0aW9uc1wiO1xyXG5cclxuLyoqIEVhY2ggaW5zdGFuY2Ugc3VwcG9ydHMgYSBzaW5nbGUgYnJhaW5rZXkuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWlua2V5U3RvcmVGYWN0b3J5IHtcclxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAvKiogVGhpcyBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGZvciB0aGUgc2FtZSA8Yj5uYW1lPC9iPi4gIFdoZW4gZG9uZSxcclxuICAgICAgICAoY29tcG9uZW50V2lsbFVubW91bnQpIG1ha2Ugc3VyZSB0byBjYWxsIHRoaXMuY2xvc2VJbnN0YW5jZSgpXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKG5hbWUpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBhbHQuY3JlYXRlU3RvcmUoQnJhaW5rZXlTdG9yZUltcGwsIFwiQnJhaW5rZXlTdG9yZVwiKTtcclxuICAgICAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLnNldChuYW1lLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlX2tleSA9IG5hbWUgKyBcIiBzdWJzY3JpYmVkX2luc3RhbmNlXCI7XHJcbiAgICAgICAgaWYgKCFCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5KSkge1xyXG4gICAgICAgICAgICB2YXIgc3Vic2NyaWJlZF9pbnN0YW5jZSA9IGluc3RhbmNlLmNoYWluU3RvcmVVcGRhdGUuYmluZChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHN1YnNjcmliZWRfaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuc2V0KFxyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXksXHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVkX2luc3RhbmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbG9zZUluc3RhbmNlKG5hbWUpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gaW5zdGFuY2UgXCIgKyBuYW1lKTtcclxuICAgICAgICB2YXIgc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXkgPSBuYW1lICsgXCIgc3Vic2NyaWJlZF9pbnN0YW5jZVwiO1xyXG4gICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChcclxuICAgICAgICAgICAgc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXlcclxuICAgICAgICApO1xyXG4gICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5kZWxldGUoc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXkpO1xyXG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUoc3Vic2NyaWJlZF9pbnN0YW5jZSk7XHJcbiAgICAgICAgaW5zdGFuY2UuY2xlYXJDYWNoZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogRGVyaXZlZCBrZXlzIG1heSBiZSB1bmFzc2lnbmVkIGZyb20gYWNjb3VudHMgdGhlcmVmb3JlIHdlIG11c3QgZGVmaW5lIGFcclxuICAgIGZpeGVkIGJsb2NrIG9mIGRlcml2aWVkIGtleXMgdGhlbiBtb25pdG9yIHRoZSBlbnRpcmUgYmxvY2suXHJcbiovXHJcbnZhciBERVJJVklFRF9CUkFJTktFWV9QT09MX1NJWkUgPSAxMDtcclxuXHJcbmNsYXNzIEJyYWlua2V5U3RvcmVJbXBsIGV4dGVuZHMgQmFzZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKHtcclxuICAgICAgICAgICAgb25TZXRCcmFpbmtleTogQnJhaW5rZXlBY3Rpb25zLnNldEJyYWlua2V5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0KFwiaW5TeW5jXCIsIFwiY2hhaW5TdG9yZVVwZGF0ZVwiLCBcImNsZWFyQ2FjaGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hhaW5TdG9yZVVuc3Vic2NyaWJlKCkge1xyXG4gICAgLy8gICAgIHRyeXtcclxuICAgIC8vICAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLmNoYWluU3RvcmVVcGRhdGUpXHJcbiAgICAvLyAgICAgfWNhdGNoKGUxKSB7Y29uc29sZS5sb2coXCJ1bnN1YiAxIGZhaWxcIik7XHJcbiAgICAvLyAgICAgICAgIHRyeXtcclxuICAgIC8vICAgICAgICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5jaGFpblN0b3JlVXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAvLyAgICAgICAgIH1jYXRjaChlMikge2NvbnNvbGUubG9nKFwidW5zdWIgMSBmYWlsXCIpfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBjbGVhckNhY2hlKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJybmtleTogXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudF9pZHM6IEltbXV0YWJsZS5TZXQoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAvLyBDb21wYXJlZCB3aXRoIENoYWluU3RvcmUuYWNjb3VudF9pZHNfYnlfa2V5XHJcbiAgICAgICAgdGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBTYXZlcyB0aGUgYnJhaW5rZXkgYW5kIGJlZ2lucyB0aGUgbG9va3VwIGZvciBkZXJpdmVkIGFjY291bnQgcmVmZXJuZWNlcyAqL1xyXG4gICAgb25TZXRCcmFpbmtleShicm5rZXkpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHticm5rZXl9KTtcclxuICAgICAgICB0aGlzLmRlcml2ZUtleXMoYnJua2V5KTtcclxuICAgICAgICB0aGlzLmNoYWluU3RvcmVVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQHJldHVybiA8Yj50cnVlPC9iPiB3aGVuIGFsbCBkZXJpdmllZCBhY2NvdW50IHJlZmVyZW5jZXMgYXJlIGVpdGhlclxyXG4gICAgICAgIGZvdW5kIG9yIGtub3duIG5vdCB0byBleGlzdC5cclxuICAgICovXHJcbiAgICBpblN5bmMoKSB7XHJcbiAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMuZm9yRWFjaChkZXJpdmVkX2tleSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1BlbmRpbmdGcm9tQ2hhaW4oZGVyaXZlZF9rZXkpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhaW5TdG9yZVVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGVyaXZlZF9rZXlzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmFjY291bnRfaWRzX2J5X2tleSA9PT0gQ2hhaW5TdG9yZS5hY2NvdW50X2lkc19ieV9rZXkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFjY291bnRfaWRzX2J5X2tleSA9IENoYWluU3RvcmUuYWNjb3VudF9pZHNfYnlfa2V5O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWNjb3VudElkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlcml2ZUtleXMoYnJua2V5ID0gdGhpcy5zdGF0ZS5icm5rZXkpIHtcclxuICAgICAgICB2YXIgc2VxdWVuY2UgPSB0aGlzLmRlcml2ZWRfa2V5cy5sZW5ndGg7IC8vIG5leHQgc2VxdWVuY2UgKHN0YXJ0aW5nIHdpdGggMClcclxuICAgICAgICB2YXIgcHJpdmF0ZV9rZXkgPSBrZXkuZ2V0X2JyYWluUHJpdmF0ZUtleShicm5rZXksIHNlcXVlbmNlKTtcclxuICAgICAgICB2YXIgZGVyaXZlZF9rZXkgPSBkZXJpdmVkS2V5U3RydWN0KHByaXZhdGVfa2V5KTtcclxuICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5wdXNoKGRlcml2ZWRfa2V5KTtcclxuICAgICAgICBpZiAodGhpcy5kZXJpdmVkX2tleXMubGVuZ3RoIDwgREVSSVZJRURfQlJBSU5LRVlfUE9PTF9TSVpFKVxyXG4gICAgICAgICAgICB0aGlzLmRlcml2ZUtleXMoYnJua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBY2NvdW50SWRzKCkge1xyXG4gICAgICAgIHZhciBuZXdfYWNjb3VudF9pZHMgPSBJbW11dGFibGUuU2V0KCkud2l0aE11dGF0aW9ucyhuZXdfaWRzID0+IHtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZVB1YmtleSA9IHB1YmxpY19zdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYWluX2FjY291bnRfaWRzID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50UmVmc09mS2V5KFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY19zdHJpbmdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhaW5fYWNjb3VudF9pZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5fYWNjb3VudF9pZHMuZm9yRWFjaChjaGFpbl9hY2NvdW50X2lkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2lkcy5hZGQoY2hhaW5fYWNjb3VudF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzLmZvckVhY2goZGVyaXZlZF9rZXkgPT5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVB1YmtleShkZXJpdmVkX2tleS5wdWJsaWNfc3RyaW5nKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbmV3X2FjY291bnRfaWRzLmVxdWFscyh0aGlzLnN0YXRlLmFjY291bnRfaWRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjY291bnRfaWRzID0gbmV3X2FjY291bnRfaWRzO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NvdW50X2lkczogbmV3X2FjY291bnRfaWRzfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZXJpdmVkS2V5U3RydWN0KHByaXZhdGVfa2V5KSB7XHJcbiAgICB2YXIgcHVibGljX3N0cmluZyA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCkudG9QdWJsaWNLZXlTdHJpbmcoKTtcclxuICAgIHZhciBkZXJpdmVkX2tleSA9IHtwcml2YXRlX2tleSwgcHVibGljX3N0cmluZ307XHJcbiAgICByZXR1cm4gZGVyaXZlZF9rZXk7XHJcbn1cclxuXHJcbnZhciBpc1BlbmRpbmdGcm9tQ2hhaW4gPSBkZXJpdmVkX2tleSA9PlxyXG4gICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50UmVmc09mS2V5KGRlcml2ZWRfa2V5LnB1YmxpY19zdHJpbmcpID09PSB1bmRlZmluZWQ7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7aGFzaCwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbnZhciBkaWN0aW9uYXJ5X3NldDtcclxuXHJcbmlmIChfX0VMRUNUUk9OX18pIHtcclxuICAgIGRpY3Rpb25hcnlfc2V0ID0gbmV3IFNldChcclxuICAgICAgICByZXF1aXJlKFwiY29tbW9uL2RpY3Rpb25hcnlfZW4uanNvblwiKS5lbi5zcGxpdChcIixcIilcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWlua2V5SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJybmtleTogXCJcIixcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGlmICghX19FTEVDVFJPTl9fKSB7XHJcbiAgICAgICAgICAgIGZldGNoKGAke19fQkFTRV9VUkxfX31kaWN0aW9uYXJ5Lmpzb25gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVwbHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5qc29uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5X3NldCA9IG5ldyBTZXQocmVzdWx0LmVuLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBkaWN0aW9uYXJ5IGVycm9yOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQnJhaW5LZXkoKSB7XHJcbiAgICAgICAgbGV0IHNwZWxsY2hlY2tfd29yZHMgPSB0aGlzLnN0YXRlLmJybmtleS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IGNoZWNrZWRfd29yZHMgPSBbXTtcclxuICAgICAgICBzcGVsbGNoZWNrX3dvcmRzLmZvckVhY2goKHdvcmQsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdvcmQgPT09IFwiXCIpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHNwZWxsY2hlY2t3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBzcGVsbGNoZWNrd29yZCA9IHNwZWxsY2hlY2t3b3JkLm1hdGNoKC9bYS16XSsvKTsgLy9qdXN0IHNwZWxsY2hlY2sgbGV0dGVyc1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzcGVsbGNoZWNrd29yZCA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeV9zZXQuaGFzKHNwZWxsY2hlY2t3b3JkWzBdKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkX3dvcmRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBzdHlsZT17e3BhZGRpbmc6IFwiMXB4XCIsIG1hcmdpbjogXCIxcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkX3dvcmRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPE1pc3NwZWxsZWRXb3JkIGtleT17aX0+e3dvcmR9PC9NaXNzcGVsbGVkV29yZD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5yZWFkeSA9IGNoZWNrZWRfd29yZHMubGVuZ3RoID4gMFxyXG4gICAgICAgIGxldCB3b3JkX2NvdW50X2xhYmVsO1xyXG4gICAgICAgIGxldCB3YXJuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChjaGVja2VkX3dvcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYnJua2V5Lmxlbmd0aCA8IDUwKSB7XHJcbiAgICAgICAgICAgICAgICB3b3JkX2NvdW50X2xhYmVsID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJybmtleS5sZW5ndGggKyBcIiBjaGFyYWN0ZXJzICg1MCBtaW5pbXVtKVwiO1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkX3dvcmRzLmxlbmd0aCA8IDE2KVxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRfY291bnRfbGFiZWwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkX3dvcmRzLmxlbmd0aCArIFwiIHdvcmRzICgxNiByZWNvbW1lbmRlZClcIjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRfY291bnRfbGFiZWwgPSBjaGVja2VkX3dvcmRzLmxlbmd0aCArIFwiIHdvcmRzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3dhcm4sIHZhbGlkLCB3b3JkX2NvdW50X2xhYmVsLCBjaGVja2VkX3dvcmRzfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyB8fCAhZGljdGlvbmFyeV9zZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAyMH19PkZldGNoaW5nIGRpY3Rpb25hcnkuLi4uPC9kaXY+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHt3YXJuLCB3b3JkX2NvdW50X2xhYmVsLCBjaGVja2VkX3dvcmRzfSA9IHRoaXMuX2NoZWNrQnJhaW5LZXkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleCB8fCAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb3JtQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJybmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicm5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogMTAwLCBtaW5XaWR0aDogNDUwfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLXBhZGRpbmcgbm8tb3ZlcmZsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrZWRfd29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tfZGlnaXRzICYmICF0aGlzLnByb3BzLmhpZGVDaGVja0RpZ2l0cyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrX2RpZ2l0c30gKiBDaGVjayBEaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NuYW1lKHtlcnJvcjogd2Fybn0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkX2NvdW50X2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB2YXIge2lkLCB2YWx1ZX0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IHt2YWxpZH0gPSB0aGlzLl9jaGVja0JyYWluS2V5KCk7XHJcbiAgICAgICAgdmFyIHN0YXRlID0ge307XHJcbiAgICAgICAgc3RhdGVbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGlkID09PSBcImJybmtleVwiKSB7XHJcbiAgICAgICAgICAgIHZhciBicm5rZXkgPSBrZXkubm9ybWFsaXplX2JyYWluS2V5KHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShicm5rZXkubGVuZ3RoIDwgNTAgPyBudWxsIDogYnJua2V5KTtcclxuICAgICAgICAgICAgc3RhdGUuY2hlY2tfZGlnaXRzID1cclxuICAgICAgICAgICAgICAgIGJybmtleS5sZW5ndGggPCA1MFxyXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIDogaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zaGExKGJybmtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoXCJoZXhcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZXJyb3JDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmVycm9yQ2FsbGJhY2sodmFsaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWlzc3BlbGxlZFdvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggZG90dGVkICNmZjAwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxcHhcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tib3JkZXJCb3R0b206IFwiMXB4IGRvdHRlZCAjZmYwMDAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8qKlxyXG4gKiAgQGJyaWVmIGRpc3BsYXlzIHRoZSBzdW1tYXJ5IG9mIGEgZ2l2ZW4gYWNjb3VudCBpbiBhIGNvbmRlbmNlZCB2aWV3IChmb3IgdGhlIGRhc2hib2FyZClcclxuICpcclxuICogIFRoaXMgY2FyZCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxyXG4gKlxyXG4gKiAgeyBhY2NvdW50OiAke25hbWVfb3JfaWR9IH1cclxuICovXHJcblxyXG5jbGFzcyBBY2NvdW50Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgb25DYXJkQ2xpY2soZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYWNjb3VudC8ke25hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gbnVsbDtcclxuICAgICAgICBsZXQgYmFsYW5jZXMgPSBudWxsO1xyXG4gICAgICAgIGxldCBpc015QWNjb3VudCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICBsZXQgYWJhbCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcclxuICAgICAgICAgICAgaWYgKGFiYWwpIHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2VzID0gYWJhbFxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlQW1vdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZUFtb3VudC5nZXQoXCJiYWxhbmNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17eH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17eH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzTXlBY2NvdW50ID0gQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KHRoaXMucHJvcHMuYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYWNjb3VudC1jYXJkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DYXJkQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FyZFwiICsgKGlzTXlBY2NvdW50ID8gXCIgbXktYWNjb3VudFwiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA2NCwgd2lkdGg6IDY0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmFsYW5jZXNcIj57YmFsYW5jZXN9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkFjY291bnRDYXJkID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50Q2FyZCk7XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWNjb3VudENhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7UHJpdmF0ZUtleSwgQWVzLCBQdWJsaWNLZXksIEZldGNoQ2hhaW4sIGhhc2h9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQWNjb3VudEFwaSBmcm9tIFwiYXBpL2FjY291bnRBcGlcIjtcclxuaW1wb3J0IHtDaGFpbkNvbmZpZ30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XHJcbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5pbXBvcnQge1dhbGxldENyZWF0ZX0gZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L1dhbGxldENyZWF0ZVwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi4vV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zXCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1Bc3NldFRvdGFsIGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1Bc3NldFRvdGFsXCI7XHJcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XHJcbmltcG9ydCBJbXBvcnRLZXlzU3RvcmUgZnJvbSBcInN0b3Jlcy9JbXBvcnRLZXlzU3RvcmVcIjtcclxuXHJcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5pbXBvcnQgR2VuZXNpc0ZpbHRlciBmcm9tIFwiY2hhaW4vR2VuZXNpc0ZpbHRlclwiO1xyXG5cclxuaW1wb3J0IHtCdXR0b24sIElucHV0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5yZXF1aXJlKFwiLi9JbXBvcnRLZXlzLnNjc3NcIik7XHJcblxyXG5sZXQgaW1wb3J0X2tleXNfYXNzZXJ0X2NoZWNraW5nID0gZmFsc2U7XHJcblxyXG5jb25zdCBLZXlDb3VudCA9ICh7a2V5X2NvdW50fSkgPT4ge1xyXG4gICAgaWYgKCFrZXlfY291bnQpIHJldHVybiA8c3BhbiAvPjtcclxuICAgIHJldHVybiA8c3Bhbj5Gb3VuZCB7a2V5X2NvdW50fSBwcml2YXRlIGtleXM8L3NwYW4+O1xyXG59O1xyXG5cclxuY29uc3QgV0lGX0tFWV9MRU5HVEggPSA1MTtcclxuXHJcbmNsYXNzIEltcG9ydEtleXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMgPSB0aGlzLl9yZW5kZXJCYWxhbmNlQ2xhaW1zLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBwcml2YXRlS2V5OiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIF9nZXRJbml0aWFsU3RhdGUoa2VlcF9maWxlX25hbWUgPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleXNfdG9fYWNjb3VudDoge30sXHJcbiAgICAgICAgICAgIG5vX2ZpbGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY291bnRfa2V5czogW10sXHJcbiAgICAgICAgICAgIC8vYnJhaW5rZXk6IG51bGwsXHJcbiAgICAgICAgICAgIC8vZW5jcnlwdGVkX2JyYWlua2V5OiBudWxsLFxyXG4gICAgICAgICAgICByZXNldF9maWxlX25hbWU6IGtlZXBfZmlsZV9uYW1lXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUucmVzZXRfZmlsZV9uYW1lXHJcbiAgICAgICAgICAgICAgICA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHJlc2V0X3Bhc3N3b3JkOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bTogbnVsbCxcclxuICAgICAgICAgICAgaW1wb3J0X2ZpbGVfbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgIGltcG9ydGVkX2tleXNfcHVibGljOiB7fSxcclxuICAgICAgICAgICAga2V5X3RleHRfbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgYXNzb2NpYXRlZEFjY291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfc3RhdHVzOiBbXSxcclxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaW1wb3J0U3VjY2VzczogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGUsIGtlZXBfZmlsZV9uYW1lKSB7XHJcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoa2VlcF9maWxlX25hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaWYoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWZzLndpZklucHV0LnN0YXRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWRkQnlQYXR0ZXJuKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbChlKSB7XHJcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVPbkNoYW5nZSgpIHtcclxuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFB1YmtleXMoXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbXBvcnRBY2NvdW50S2V5Q291bnQoa2V5c190b19hY2NvdW50KSB7XHJcbiAgICAgICAgbGV0IGFjY291bnRfa2V5Y291bnQgPSB7fTtcclxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4ga2V5c190b19hY2NvdW50KVxyXG4gICAgICAgICAgICBmb3IgKGxldCBhY2NvdW50X25hbWUgb2Yga2V5c190b19hY2NvdW50W2tleV0uYWNjb3VudF9uYW1lcykge1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudF9rZXljb3VudFthY2NvdW50X25hbWVdID1cclxuICAgICAgICAgICAgICAgICAgICAoYWNjb3VudF9rZXljb3VudFthY2NvdW50X25hbWVdIHx8IDApICsgMTtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZCA/IGFjY291bnRfa2V5Y291bnQgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChldnQpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KG51bGwsIHRydWUpO1xyXG4gICAgICAgIGxldCBmaWxlID0gZXZ0LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZ0LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbl9jb250ZW50cztcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbl9jb250ZW50cyA9IEpTT04ucGFyc2UoY29udGVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgY2hhbmNlIHRvIGVuY291bnRlciBhIGxhcmdlIGZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRoaXMgZm9ybWF0IGZpcnN0LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlSW1wb3J0S2V5VXBsb2FkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uX2NvbnRlbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZV9zdGF0ZVwiLCB1cGRhdGVfc3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZV9zdGF0ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVfc3RhdGUuZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IGVtcHR5IHBhc3N3b3JkLCBhbHNvIGRpc3BsYXkgXCJFbnRlciBpbXBvcnQgZmlsZSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBfcGFyc2VJbXBvcnRLZXlVcGxvYWRcIixlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghanNvbl9jb250ZW50cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VXYWxsZXRKc29uKGpzb25fY29udGVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRCeVBhdHRlcm4oY29udGVudHMpKSB0aHJvdyBlZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IGVtcHR5IHBhc3N3b3JkLCBhbHNvIGRpc3BsYXkgXCJFbnRlciBpbXBvcnQgZmlsZSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmRDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiLi4uIEltcG9ydEtleXMgdXBsb2FkIGVycm9yXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1wb3J0X2ZpbGVfbWVzc2FnZTogbWVzc2FnZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQlRTIDEuMCBjbGllbnQgd2FsbGV0X2V4cG9ydF9rZXlzIGZvcm1hdC4gKi9cclxuICAgIF9wYXJzZUltcG9ydEtleVVwbG9hZChqc29uX2NvbnRlbnRzLCBmaWxlX25hbWUsIHVwZGF0ZV9zdGF0ZSkge1xyXG4gICAgICAgIGxldCBwYXNzd29yZF9jaGVja3N1bSwgdW5maWx0ZXJlZF9hY2NvdW50X2tleXM7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0gPSBqc29uX2NvbnRlbnRzLnBhc3N3b3JkX2NoZWNrc3VtO1xyXG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkX2NoZWNrc3VtKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZV9uYW1lICsgXCIgaXMgYW4gdW5yZWNvZ25pemVkIGZvcm1hdFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25fY29udGVudHMuYWNjb3VudF9rZXlzKSlcclxuICAgICAgICAgICAgICAgIHRocm93IGZpbGVfbmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcclxuXHJcbiAgICAgICAgICAgIHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzID0ganNvbl9jb250ZW50cy5hY2NvdW50X2tleXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBlLm1lc3NhZ2UgfHwgZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJUUyAxLjAgd2FsbGV0cyBtYXkgaGF2ZSBhIGxvdCBvZiBnZW5lcmF0ZWQgYnV0IHVudXNlZCBrZXlzIG9yIHNwZW50IFRJVEFOIGFkZHJlc3NlcyBtYWtpbmdcclxuICAgICAgICAvLyB3YWxsZXRzIHNvIGxhcmdlIGl0IGlzIHdhcyBub3QgcG9zc2libGUgdG8gdXNlIHRoZSBKYXZhU2NyaXB0IHdhbGxldHMgd2l0aCB0aGVtLlxyXG5cclxuICAgICAgICBsZXQgZ2VuZXNpc19maWx0ZXIgPSBuZXcgR2VuZXNpc0ZpbHRlcigpO1xyXG4gICAgICAgIGlmICghZ2VuZXNpc19maWx0ZXIuaXNBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2tleXM6IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzLFxyXG4gICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge2dlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nOiB0cnVlfSxcclxuICAgICAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PlxyXG4gICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXIuaW5pdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcl9zdGF0dXMgPSB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRkYgPCB2ZXJzaW9uIDQxIGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIHRocmVhZHMgaW50ZXJuYWxzIChsaWtlIGJsb2IgdXJscylcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgR2VuZXNpc0ZpbHRlcldvcmtlciA9IHJlcXVpcmUoXCJ3b3JrZXItbG9hZGVyIXdvcmtlcnMvR2VuZXNpc0ZpbHRlcldvcmtlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB3b3JrZXIgPSBuZXcgR2VuZXNpc0ZpbHRlcldvcmtlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFjY291bnRfa2V5czogdW5maWx0ZXJlZF9hY2NvdW50X2tleXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJsb29tX2ZpbHRlcjogZ2VuZXNpc19maWx0ZXIuYmxvb21fZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB3b3JrZXIub25tZXNzYWdlID0gZXZlbnQgPT4geyB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgeyBzdGF0dXMsIGFjY291bnRfa2V5cyB9ID0gZXZlbnQuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAuLi5cclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGNhdGNoKCBlICkgeyBjb25zb2xlLmVycm9yKCdHZW5lc2lzRmlsdGVyV29ya2VyJywgZSkgfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfa2V5cyA9IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyLmZpbHRlcihhY2NvdW50X2tleXMsIHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpbXBvcnQgZmlsdGVyXCIsIHN0YXR1cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5lcnJvciA9PT0gXCJtaXNzaW5nX3B1YmxpY19rZXlzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bi1yZWxlYXNlZCBmb3JtYXQsIGp1c3QgZm9yIHRlc3RpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9rZXlzOiB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHsgYWNjb3VudF9rZXlzIH0gPSBldmVudC5kYXRhIC8vIGlmIHVzaW5nIHdvcmtlciB0aHJlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9rZXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5pbml0YWxpemluZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nOiBzdGF0dXMuaW5pdGFsaXppbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuaW1wb3J0aW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2dyYW1tZXIgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmtub3duIHN0YXR1c1wiLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyX3N0YXR1cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdF9hY2NvdW50X25hbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zdGF0dXNbZmlsdGVyX3N0YXR1cy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWNjb3VudF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RfYWNjb3VudF9uYW1lID09PSBzdGF0dXMuYWNjb3VudF9uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBzYW1lIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3IGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZmlsdGVyX3N0YXR1cy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtnZW5lc2lzX2ZpbHRlcl9zdGF0dXM6IGZpbHRlcl9zdGF0dXN9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vLCAxMDApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgIEJUUyAxLjAgaG9zdGVkIHdhbGxldCBiYWNrdXAgKHdhbGxldC5iaXRzaGFyZXMub3JnKSBpcyBzdXBwb3J0ZWQuXHJcblxyXG4gICAgQlRTIDEuMCBuYXRpdmUgd2FsbGV0cyBzaG91bGQgdXNlIHdhbGxldF9leHBvcnRfa2V5cyBpbnN0ZWFkIG9mIGEgd2FsbGV0IGJhY2t1cC5cclxuXHJcbiAgICBOb3RlLCAgTmF0aXZlIHdhbGxldCBiYWNrdXBzIHdpbGwgYmUgcmVqZWN0ZWQuICBUaGUgbG9naWMgYmVsb3cgZG9lcyBub3RcclxuICAgIGNhcHR1cmUgYXNzaWduZWQgYWNjb3VudCBuYW1lcyAoZm9yIHVucmVnaXN0ZWQgYWNjb3VudHMpIGFuZCBkb2VzIG5vdCBjYXB0dXJlXHJcbiAgICBzaWduaW5nIGtleXMuICBUaGUgaG9zdGVkIHdhbGxldCBoYXMgb25seSByZWdpc3RlcmVkIGFjY291bnRzIGFuZCBubyBzaWduaW5nXHJcbiAgICBrZXlzLlxyXG5cclxuICAgICovXHJcbiAgICBfcGFyc2VXYWxsZXRKc29uKGpzb25fY29udGVudHMpIHtcclxuICAgICAgICBsZXQgcGFzc3dvcmRfY2hlY2tzdW07XHJcbiAgICAgICAgbGV0IGVuY3J5cHRlZF9icmFpbmtleTtcclxuICAgICAgICBsZXQgYWRkcmVzc190b19lbmNrZXlzID0ge307XHJcbiAgICAgICAgbGV0IGFjY291bnRfYWRkcmVzc2VzID0ge307XHJcblxyXG4gICAgICAgIGxldCBzYXZlUHVia2V5QWNjb3VudCA9IGZ1bmN0aW9uKHB1YmtleSwgYWNjb3VudF9uYW1lKSB7XHJcbiAgICAgICAgICAgIC8vcmVwbGFjZSBCVFMgd2l0aCBHUEhcclxuICAgICAgICAgICAgcHVia2V5ID0gQ2hhaW5Db25maWcuYWRkcmVzc19wcmVmaXggKyBwdWJrZXkuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFB1YmxpY0tleS5mcm9tUHVibGljS2V5U3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgcHVia2V5XHJcbiAgICAgICAgICAgICkudG9BZGRyZXNzU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBhZGRyZXNzZXMgPSBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICBhZGRyZXNzID0gXCJCVFNcIiArIGFkZHJlc3Muc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKFwiLi4uIGFkZHJlc3NcIixhZGRyZXNzLGFjY291bnRfbmFtZSlcclxuICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0gPSBhZGRyZXNzZXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25fY29udGVudHMpKSB7XHJcbiAgICAgICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKCcuLi4ganNvbl9jb250ZW50cycsanNvbl9jb250ZW50cylcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgd2FsbGV0IGZvcm1hdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGpzb25fY29udGVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBcImtleV9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YS5hY2NvdW50X2FkZHJlc3MgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEuZW5jcnlwdGVkX3ByaXZhdGVfa2V5XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGVsZW1lbnQuZGF0YS5hY2NvdW50X2FkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuY2tleXMgPSBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgZW5ja2V5cy5wdXNoKGVsZW1lbnQuZGF0YS5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coXCIuLi4gYWRkcmVzc1wiLGFkZHJlc3MsZW5ja2V5cylcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc10gPSBlbmNrZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcImFjY291bnRfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gZWxlbWVudC5kYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVB1YmtleUFjY291bnQoZWxlbWVudC5kYXRhLm93bmVyX2tleSwgYWNjb3VudF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBoaXN0b3J5IG9mIGVsZW1lbnQuZGF0YS5hY3RpdmVfa2V5X2hpc3RvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVB1YmtleUFjY291bnQoaGlzdG9yeVsxXSwgYWNjb3VudF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHlfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBcImVuY3J5cHRlZF9icmFpbmtleVwiID09IGVsZW1lbnQuZGF0YS5rZXlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9icmFpbmtleSA9IGVsZW1lbnQuZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXCJtYXN0ZXJfa2V5X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArIFwiIGludmFsaWQgbWFzdGVyX2tleV9yZWNvcmQgcmVjb3JkXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5kYXRhLmNoZWNrc3VtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgaXMgbWlzc2luZyBtYXN0ZXJfa2V5X3JlY29yZCBjaGVja3N1bVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSA9IGVsZW1lbnQuZGF0YS5jaGVja3N1bTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWVuY3J5cHRlZF9icmFpbmtleSlcclxuICAgICAgICAgICAgICAgIHRocm93IFwiUGxlYXNlIHVzZSBhIEJUUyAxLjAgd2FsbGV0X2V4cG9ydF9rZXlzIGZpbGUgaW5zdGVhZFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXNzd29yZF9jaGVja3N1bSlcclxuICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArIFwiIGlzIG1pc3NpbmcgcGFzc3dvcmRfY2hlY2tzdW1cIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghZW5ja2V5cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgKyBcIiBkb2VzIG5vdCBjb250YWluIGFueSBwcml2YXRlIGtleXNcIjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IGUubWVzc2FnZSB8fCBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFjY291bnRfa2V5cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGFjY291bnRfbmFtZSBpbiBhY2NvdW50X2FkZHJlc3Nlcykge1xyXG4gICAgICAgICAgICBsZXQgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhZGRyZXNzIG9mIGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmNrZXlzID0gYWRkcmVzc190b19lbmNrZXlzW2FkZHJlc3NdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbmNrZXlzKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGVuY2tleSBvZiBlbmNrZXlzKSBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLnB1c2goZW5ja2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY2NvdW50X2tleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSBjb3VsZCBwcm9tcHQgZm9yIHRoaXMgYnJhaW4ga2V5IGluc3RlYWQgb24gZmlyc3QgdXNlLiAgVGhlIHVzZXJcclxuICAgICAgICAvLyBtYXkgYWxyZWFkeSBoYXZlIGEgYnJhaW5rZXkgYXQgdGhpcyBwb2ludCBzbyB3aXRoIGEgc2luZ2xlIGJyYWlua2V5XHJcbiAgICAgICAgLy8gd2FsbGV0IHdlIGNhbid0IHVzZSBpdCBub3cuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxyXG4gICAgICAgICAgICBhY2NvdW50X2tleXNcclxuICAgICAgICAgICAgLy9lbmNyeXB0ZWRfYnJhaW5rZXlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFzc3dvcmRDaGVjayhldnQpIHtcclxuICAgICAgICBpZiAoZXZ0ICYmIFwicHJldmVudERlZmF1bHRcIiBpbiBldnQpIHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwd05vZGUgPSB0aGlzLnJlZnMucGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gaWYocHdOb2RlKSBwd05vZGUuZm9jdXMoKVxyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IHB3Tm9kZSA/IHB3Tm9kZS52YWx1ZSA6IFwiXCI7XHJcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gdGhpcy5zdGF0ZS5wYXNzd29yZF9jaGVja3N1bTtcclxuICAgICAgICBsZXQgbmV3X2NoZWNrc3VtID0gaGFzaC5zaGE1MTIoaGFzaC5zaGE1MTIocGFzc3dvcmQpKS50b1N0cmluZyhcImhleFwiKTtcclxuICAgICAgICBpZiAoY2hlY2tzdW0gIT0gbmV3X2NoZWNrc3VtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5vX2ZpbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IHBhc3N3b3JkLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJJbmNvcnJlY3QgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbm9fZmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXNldF9wYXNzd29yZDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXQuaW1wb3J0X3Bhc3NfbWF0Y2hcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLl9kZWNyeXB0UHJpdmF0ZUtleXMocGFzc3dvcmQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCwgMjUwKVxyXG4gICAgfVxyXG5cclxuICAgIF9kZWNyeXB0UHJpdmF0ZUtleXMocGFzc3dvcmQpIHtcclxuICAgICAgICBsZXQgcGFzc3dvcmRfYWVzID0gQWVzLmZyb21TZWVkKHBhc3N3b3JkKTtcclxuICAgICAgICBsZXQgZm9ybWF0X2Vycm9yMV9vbmNlID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBhY2NvdW50IG9mIHRoaXMuc3RhdGUuYWNjb3VudF9rZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBgQWNjb3VudCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQuYWNjb3VudF9uYW1lXHJcbiAgICAgICAgICAgICAgICB9IG1pc3NpbmcgZW5jcnlwdGVkX3ByaXZhdGVfa2V5c2A7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtYXRfZXJyb3IxX29uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdF9lcnJvcjFfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IGFjY291bnQuYWNjb3VudF9uYW1lLnRyaW0oKTtcclxuICAgICAgICAgICAgbGV0IHNhbWVfcHJlZml4X3JlZ2V4ID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgICAgIFwiXlwiICsgQ2hhaW5Db25maWcuYWRkcmVzc19wcmVmaXhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2NvdW50LmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmNyeXB0ZWRfcHJpdmF0ZSA9IGFjY291bnQuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5X3N0cmluZyA9IGFjY291bnQucHVibGljX2tleXNcclxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnQucHVibGljX2tleXNbaV1cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7IC8vIHBlcmZvcm1hbmNlIGdhaW5cclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX3BsYWluaGV4ID0gcGFzc3dvcmRfYWVzLmRlY3J5cHRIZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0X2tleXNfYXNzZXJ0X2NoZWNraW5nICYmIHB1YmxpY19rZXlfc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbUhleChwcml2YXRlX3BsYWluaGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YiA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCk7IC8vIFMgTCBPIFdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHkgPSBwdWIudG9BZGRyZXNzU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJieSA9IHB1Yi50b1B1YmxpY0tleVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3Nfc3RyaW5nID0gYWNjb3VudC5hZGRyZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudC5hZGRyZXNzZXNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDsgLy8gYXNzZXJ0IGNoZWNraW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3N0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeS5zdWJzdHJpbmcoMykgIT0gYWRkcmVzc19zdHJpbmcuc3Vic3RyaW5nKDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3MgaW1wb3J0ZWQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfc3RyaW5nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBidXQgY2FsY3VsYXRlZCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuIFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViYnkuc3Vic3RyaW5nKDMpICE9IHB1YmxpY19rZXlfc3RyaW5nLnN1YnN0cmluZygzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljIGtleSBpbXBvcnRlZCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGJ1dCBjYWxjdWxhdGVkIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJieTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBNaXNzLW1hdGNoIGtleVwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXB1YmxpY19rZXlfc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbUhleChwcml2YXRlX3BsYWluaGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXkgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nID0gcHVibGljX2tleS50b1B1YmxpY0tleVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2FtZV9wcmVmaXhfcmVnZXgudGVzdChwdWJsaWNfa2V5X3N0cmluZykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdhcyBjcmVhdGluZyBhIHVucmVzcG9uc2l2ZSBjaHJvbWUgYnJvd3NlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGFmdGVyIHRoZSByZXN1bHRzIHdlcmUgc2hvd24uICBJdCB3YXMgcHJvYmFibHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhdXNlZCBieSBnYXJiYWdlIGNvbGxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5Db25maWcuYWRkcmVzc19wcmVmaXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nLnN1YnN0cmluZygzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpY1twdWJsaWNfa2V5X3N0cmluZ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lc30gPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxyXG4gICAgICAgICAgICAgICAgICAgIF0gfHwge2FjY291bnRfbmFtZXM6IFtdfTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgX25hbWUgb2YgYWNjb3VudF9uYW1lcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9uYW1lID09IGFjY291bnRfbmFtZSkgZHVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHVwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzLnB1c2goYWNjb3VudF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtwcml2YXRlX3BsYWluaGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsIGUuc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZS5tZXNzYWdlIHx8IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmltcG9ydF9rZXlzX2Vycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfbXNnOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2xldCBlbmNfYnJhaW5rZXkgPSB0aGlzLnN0YXRlLmVuY3J5cHRlZF9icmFpbmtleVxyXG4gICAgICAgIC8vaWYoZW5jX2JyYWlua2V5KXtcclxuICAgICAgICAvLyAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgYnJhaW5rZXk6IHBhc3N3b3JkX2Flcy5kZWNyeXB0SGV4VG9UZXh0KGVuY19icmFpbmtleSlcclxuICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlT25DaGFuZ2UoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NhdmVJbXBvcnQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XHJcbiAgICAgICAgbGV0IGR1cHMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBwdWJsaWNfa2V5X3N0cmluZyBpbiB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKSB7XHJcbiAgICAgICAgICAgIGlmICgha2V5cy5oYXMocHVibGljX2tleV9zdHJpbmcpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddO1xyXG4gICAgICAgICAgICBkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuaW1wb3J0X2tleXNfYWxyZWFkeV9pbXBvcnRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBrZXlzX3RvX2FjY291bnQgPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudDtcclxuICAgICAgICBmb3IgKGxldCBwcml2YXRlX3BsYWluaGV4IG9mIE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkpIHtcclxuICAgICAgICAgICAgbGV0IHthY2NvdW50X25hbWVzLCBwdWJsaWNfa2V5X3N0cmluZ30gPSBrZXlzX3RvX2FjY291bnRbXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGlmIChkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSlcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXlzX3RvX2FjY291bnRbcHJpdmF0ZV9wbGFpbmhleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2F2ZUltcG9ydCgpLCAyMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVJbXBvcnQoKSB7XHJcbiAgICAgICAgbGV0IGtleXNfdG9fYWNjb3VudCA9IHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50O1xyXG4gICAgICAgIGxldCBwcml2YXRlX2tleV9vYmpzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJpdmF0ZV9wbGFpbmhleCBvZiBPYmplY3Qua2V5cyhrZXlzX3RvX2FjY291bnQpKSB7XHJcbiAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lcywgcHVibGljX2tleV9zdHJpbmd9ID0ga2V5c190b19hY2NvdW50W1xyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBwcml2YXRlX2tleV9vYmpzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleCxcclxuICAgICAgICAgICAgICAgIGltcG9ydF9hY2NvdW50X25hbWVzOiBhY2NvdW50X25hbWVzLFxyXG4gICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICBXYWxsZXREYi5pbXBvcnRLZXlzV29ya2VyKHByaXZhdGVfa2V5X29ianMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBJbXBvcnRLZXlzU3RvcmUuaW1wb3J0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbXBvcnRfY291bnQgPSBwcml2YXRlX2tleV9vYmpzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5pbXBvcnRfa2V5X3N1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGltcG9ydF9jb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0U3VjY2VzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9uQ2FuY2VsKCkgLy8gYmFjayB0byBjbGFpbSBiYWxhbmNlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IudGFyZ2V0LmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuaW1wb3J0X2tleXNfZXJyb3JfdW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCeVBhdHRlcm4oY29udGVudHMpIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LndpZl9pbXBvcnRfZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoICE9PSBXSUZfS0VZX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldC53aWZfbGVuZ3RoX2Vycm9yXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMCxcclxuICAgICAgICAgICAgaW52YWxpZF9jb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHdpZl9yZWdleCA9IC81W0hKS11bMS05QS1aYS16XXs0OX0vZztcclxuICAgICAgICBmb3IgKGxldCB3aWYgb2YgY29udGVudHMubWF0Y2god2lmX3JlZ2V4KSB8fCBbXSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gUHJpdmF0ZUtleS5mcm9tV2lmKHdpZik7IC8vY291bGQgdGhyb3cgYW5kIGVycm9yXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9wbGFpbmhleCA9IHByaXZhdGVfa2V5LnRvQnVmZmVyKCkudG9TdHJpbmcoXCJoZXhcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleSA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCk7IC8vIFMgTCBPIFdcclxuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5X3N0cmluZyA9IHB1YmxpY19rZXkudG9QdWJsaWNLZXlTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgQWNjb3VudEFwaS5sb29rdXBBY2NvdW50QnlQdWJsaWNLZXkocHVibGljX2tleV9zdHJpbmcpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaCA9IHJlc3VsdFswXS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZXMgPSBhd2FpdCBQcm9taXNlLmFsbChiYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lcy5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB2YWx1ZS5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnROYW1lLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc29jaWF0ZWRBY2NvdW50OiBhY2NvdW50TmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZF9jb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJGb3VuZCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKCFjb3VudCA/IFwiXCIgOiBjb3VudCArIFwiIHZhbGlkXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAoIWludmFsaWRfY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIgYW5kIFwiICsgaW52YWxpZF9jb3VudCArIFwiIGludmFsaWRcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIGtleVwiICtcclxuICAgICAgICAgICAgICAgICAgICAoY291bnQgPiAxIHx8IGludmFsaWRfY291bnQgPiAxID8gXCJzXCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyByZW1vdmVzIHRoZSBtZXNzYWdlIG9uIHRoZSBuZXh0IHJlbmRlclxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBrZXlfdGV4dF9tZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvZ2dsZUltcG9ydFR5cGUodHlwZSkge1xyXG4gICAgLy8gICAgIGlmICghdHlwZSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlSW1wb3J0VHlwZVwiLCB0eXBlKTtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICAgICAgcHJpdmF0ZUtleTogdHlwZSA9PT0gXCJwcml2YXRlS2V5XCJcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBfcmVuZGVyQmFsYW5jZUNsYWltcygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbUFjdGl2ZSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAxNX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtwcml2YXRlS2V5fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtrZXlzX3RvX2FjY291bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQga2V5X2NvdW50ID0gT2JqZWN0LmtleXMoa2V5c190b19hY2NvdW50KS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGFjY291bnRfa2V5Y291bnQgPSB0aGlzLmdldEltcG9ydEFjY291bnRLZXlDb3VudChrZXlzX3RvX2FjY291bnQpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgd2FsbGV0IHByaW9yIHRvIHRoZSBpbXBvcnQga2V5cyAoa2VlcHMgbGF5b3V0IGNsZWFuKVxyXG4gICAgICAgIGlmICghV2FsbGV0RGIuZ2V0V2FsbGV0KCkpXHJcbiAgICAgICAgICAgIHJldHVybiA8V2FsbGV0Q3JlYXRlIGltcG9ydEtleXM9e3RydWV9IGhpZGVUaXRsZT17dHJ1ZX0gLz47XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1wb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cImNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJpbmcgPSB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyaW5nO1xyXG4gICAgICAgIGxldCB3YXNfZmlsdGVyZWQgPVxyXG4gICAgICAgICAgICAhIXRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkO1xyXG4gICAgICAgIGxldCBhY2NvdW50X3Jvd3MgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9zdGF0dXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzdGF0dXMgb2YgdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuY291bnQgJiYgc3RhdHVzLnRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9yb3dzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3N0YXR1cy5hY2NvdW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGF0dXMuYWNjb3VudF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJpbmd7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHVzLmNvdW50IC8gc3RhdHVzLnRvdGFsKSAqIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0YXR1cy5jb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGltcG9ydF9yZWFkeSA9IGtleV9jb3VudCAhPT0gMDtcclxuICAgICAgICBsZXQgcGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzd29yZFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGltcG9ydF9yZWFkeSkgcGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoIWFjY291bnRfcm93cyAmJiBhY2NvdW50X2tleWNvdW50KSB7XHJcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhY2NvdW50X25hbWUgaW4gYWNjb3VudF9rZXljb3VudCkge1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudF9yb3dzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthY2NvdW50X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthY2NvdW50X2tleWNvdW50W2FjY291bnRfbmFtZV19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IChcclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltcG9ydFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogS2V5IGZpbGUgdXBsb2FkICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEtleUNvdW50IGtleV9jb3VudD17a2V5X2NvdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IWltcG9ydF9yZWFkeSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQucmVzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFzc29jaWF0ZWRBY2NvdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LndpZl9hc3NvY2lhdGVkX2FjY291bnRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hc3NvY2lhdGVkQWNjb3VudC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtrZXl9Pnt2YWx1ZX08L3A+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHthY2NvdW50X3Jvd3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFhY2NvdW50X3Jvd3MubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0Lm5vX2FjY291bnRzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hY2NvdW50LnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9rZXlfY291bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e2FjY291bnRfcm93c308L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgeyFpbXBvcnRfcmVhZHkgJiYgIXRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfaW5pdGFsaXppbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaXZhdGVLZXkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uV2lmLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LnBhc3RlX3ByaXZhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIndpZklucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2lmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIxNnB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1wb3J0RXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JUZXh0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTZweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5fcGFzc3dvcmRDaGVjay5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnRzXzA5X2V4cG9ydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubm9fZmlsZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5yZXNldF9maWxlX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBsb2FkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbXBvcnRfZmlsZV9tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUubm9fZmlsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2V0X3Bhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfcGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltcG9ydF9wYXNzd29yZF9tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmFjb2xvci1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltcG9ydF9wYXNzd29yZF9tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhdGhpcy5zdGF0ZS5ub19maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTZweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5zdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJjaXJjbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpbXBvcnRfcmVhZHkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpbXBvcnRfcmVhZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NhdmVJbXBvcnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5pbXBvcnRfa2V5c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJwXCIgY29udGVudD1cIndhbGxldC5jbGFpbV9sYXRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC50b3RhbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbUFzc2V0VG90YWwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSW1wb3J0S2V5cyA9IGNvbm5lY3QoXHJcbiAgICBJbXBvcnRLZXlzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0ltcG9ydEtleXNTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGltcG9ydGluZzogSW1wb3J0S2V5c1N0b3JlLmdldFN0YXRlKCkuaW1wb3J0aW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0S2V5cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJhbGFuY2VDbGFpbUFzc2V0VG90YWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iYWxhbmNlcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubG9hZGluZ19iYWxhbmNlc1wiIC8+JmhlbGxpcDtcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgdG90YWxfYnlfYXNzZXQgPSB0aGlzLnByb3BzLmJhbGFuY2VzXHJcbiAgICAgICAgICAgIC5ncm91cEJ5KHYgPT4gdi5iYWxhbmNlLmFzc2V0X2lkKVxyXG4gICAgICAgICAgICAubWFwKGwgPT4gbC5yZWR1Y2UoKHIsIHYpID0+IHIgKyBOdW1iZXIodi5iYWxhbmNlLmFtb3VudCksIDApKTtcclxuXHJcbiAgICAgICAgaWYgKCF0b3RhbF9ieV9hc3NldC5zaXplKSByZXR1cm4gPGRpdj5Ob25lPC9kaXY+O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RvdGFsX2J5X2Fzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgodG90YWwsIGFzc2V0X2lkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthc3NldF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CYWxhbmNlQ2xhaW1Bc3NldFRvdGFscyA9IGNvbm5lY3QoQmFsYW5jZUNsYWltQXNzZXRUb3RhbHMsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VDbGFpbUFzc2V0VG90YWxzO1xyXG4iLCJpbXBvcnQgYWx0IGZyb20gXCJhbHQtaW5zdGFuY2VcIjtcclxuaW1wb3J0IEJhc2VTdG9yZSBmcm9tIFwic3RvcmVzL0Jhc2VTdG9yZVwiO1xyXG5cclxuY2xhc3MgSW1wb3J0S2V5c1N0b3JlIGV4dGVuZHMgQmFzZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2V4cG9ydChcImltcG9ydGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7aW1wb3J0aW5nOiBmYWxzZX07XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0aW5nKGltcG9ydGluZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltcG9ydGluZ30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIEltcG9ydEtleXNTdG9yZVdyYXBwZWQgPSBhbHQuY3JlYXRlU3RvcmUoXHJcbiAgICBJbXBvcnRLZXlzU3RvcmUsXHJcbiAgICBcIkltcG9ydEtleXNTdG9yZVwiXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEltcG9ydEtleXNTdG9yZVdyYXBwZWQ7XHJcbiIsImltcG9ydCB7aGFzaCwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbnZhciBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsID0gdW5kZWZpbmVkO1xyXG50cnkge1xyXG4gICAgdmFyIHVybCA9IHJlcXVpcmUoXCJmaWxlLWxvYWRlcj9uYW1lPWJ0c19nZW5lc2lza2V5c19ibG9vbV9bc2hhMTpoYXNoOmhleDo3XS5kYXQhYXNzZXRzL2J0c19nZW5lc2lza2V5c19ibG9vbS5kYXRcIik7XHJcbiAgICBpZiAodXJsLmluZGV4T2YoXCIzY2VlNDQxXCIpID09PSAtMSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgaGFzaDogYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdFwiKTtcclxuICAgIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgPSB1cmw7XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIHdlYnBhY2sgZGVwbG95bWVudCBleGNlcHRpb24gKG5vdCBydW4gdGltZSlcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwiV0FSTjogV2lsbCBiZSB1bmFibGUgdG8gZmlsdGVyIEJUUyAxLjAgd2FsbGV0IGltcG9ydHMsIGRpZCBub3QgZmluZCBhc3NldHMvYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdFwiLFxyXG4gICAgICAgIGVcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gICAgVGhpcyBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIGEgQlRTIDEuMCBleHBvcnQgZmlsZSB0YWtlbiBvbiB0aGVcclxuICAgIGRpc2NvbnRpbnVlZCBjaGFpbi4gQW55IHB1YmxpYyBrZXkgc3RyaW5nIG9yIGFkZHJlc3MgKGFsbCA1IGZvcm1hdHMpIGNhcnJpZWRcclxuICAgIG92ZXIgdG8gdGhlIEJUUyAyLjAgZ2VuZXNpcyBibG9jayB3aWxsIGJlIGluIHRoaXMgZmlsdGVyLlxyXG5cclxuICAgIFRoZWlyIG1heSBiZSBzb21lIGZhbHNlIHBvc2l0aXZlcyBidXQgbm8gZmFsc2UgbmVnYXRpdmVzLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lc2lzRmlsdGVyIHtcclxuICAgIC8qKiBvciBjYWxsIHRoaXMuaW5pdCAqL1xyXG4gICAgY29uc3RydWN0b3IoYmxvb21fYnVmZmVyKSB7XHJcbiAgICAgICAgaWYgKCFibG9vbV9idWZmZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGJsb29tX2J1ZmZlcjtcclxuICAgICAgICB0aGlzLmJpdHNfaW5fZmlsdGVyID0gYmxvb21fYnVmZmVyLmxlbmd0aCAqIDg7IC8vIDgzODg2MDggKHRlc3QgZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICAvKiogV2FzIGEgYmxvb20gZmlsZSBkZXBsb3llZD8gIFRoaXMgZG9lcyBub3QgdHJ5IHRvIGxvYWQgaXQgZnJvbSB0aGUgc2VydmVyLiAqL1xyXG4gICAgaXNBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGRvbmUpIHtcclxuICAgICAgICBpZiAodGhpcy5ibG9vbV9idWZmZXIpIHtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0F2YWlsYWJsZSgpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lc2lzIGJsb29tIGZpbGUgd2FzIG5vdCBkZXBsb3llZFwiKTtcclxuXHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIC8vIGZpcmVmb3ggNDAgZGlkIG5vdCBhbGxvdyB0aGUgYmxvYiB1cmwgYnV0IGZmIDQxLjAuMiBkaWRcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJibG9iXCI7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudHMgPSBuZXcgQnVmZmVyKGV2dC50YXJnZXQucmVzdWx0LCBcImJpbmFyeVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50cy5sZW5ndGggIT09IDEwNDg1NzYpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgbGVuZ3RoXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGNvbnRlbnRzLmxlbmd0aCAqIDg7IC8vIDgzODg2MDggKHRlc3QgZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxvb21fYnVmZmVyID0gY29udGVudHM7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwieGhyLm9uZXJyb3JcIiwgZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluR2VuZXNpcyhwdWJrZXlfb3JfYWRkcmVzcykge1xyXG4gICAgICAgIGlmICghdGhpcy5ibG9vbV9idWZmZXIpIHRocm93IG5ldyBFcnJvcihcIkNhbGwgaW5pdCgpIGZpcnN0XCIpO1xyXG4gICAgICAgIGZvciAodmFyIGhhc2hlcyA9IDA7IGhhc2hlcyA8IDM7IGhhc2hlcysrKSB7XHJcbiAgICAgICAgICAgIHZhciBoZXggPSBoYXNoLnNoYTI1NihoYXNoZXMgKyBcIjpcIiArIHB1YmtleV9vcl9hZGRyZXNzKTtcclxuICAgICAgICAgICAgdmFyIGJpdF9hZGRyZXNzID1cclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGhleC5zbGljZSgtMykudG9TdHJpbmcoXCJoZXhcIiksIDE2KSAlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpdHNfaW5fZmlsdGVyOyAvLyAzMDkwNTY0XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJiaXRfYWRkcmVzc1wiLCBiaXRfYWRkcmVzcy50b1N0cmluZygxNikpXHJcbiAgICAgICAgICAgIHZhciBieXRlX2FkZHJlc3MgPSBiaXRfYWRkcmVzcyA+PiAzOyAvLyAzODYzMjBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJ5dGVfYWRkcmVzc1wiLCBieXRlX2FkZHJlc3MudG9TdHJpbmcoMTYpKVxyXG4gICAgICAgICAgICB2YXIgbWFzayA9IDEgPDwgKGJpdF9hZGRyZXNzICYgNyk7IC8vIDE2XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJtYXNrXCIsIG1hc2sudG9TdHJpbmcoMTYpKVxyXG4gICAgICAgICAgICB2YXIgYnl0ZSA9IHRoaXMuYmxvb21fYnVmZmVyW2J5dGVfYWRkcmVzc107XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJieXRlXCIsIGJ5dGUudG9TdHJpbmcoMTYpKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiYnl0ZSAmIG1hc2tcIiwgYnl0ZSAmIG1hc2ssIChieXRlICYgbWFzaykgPT09IDAsICdcXG4nKVxyXG4gICAgICAgICAgICBpZiAoKGJ5dGUgJiBtYXNrKSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoYWNjb3VudF9rZXlzLCBzdGF0dXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldBUk46IE1pc3NpbmcgYmxvb20gZmlsdGVyIGZvciBCVFMgMC45Lnggd2FsbGV0c1wiKTtcclxuICAgICAgICAgICAgc3RhdHVzKHtlcnJvcjogXCJtaXNzaW5nX2Jsb29tXCJ9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5pdGFsaXppbmcgPSB0cnVlO1xyXG4gICAgICAgIHN0YXR1cyh7aW5pdGFsaXppbmd9KTtcclxuICAgICAgICB0aGlzLmluaXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaW5pdGFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyh7aW5pdGFsaXppbmd9KTtcclxuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gMTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYWNjb3VudF9rZXlzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRfY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBhY2NvdW50X2tleXNbYV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsID0ga2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZToga2V5cy5hY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0ga2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPj0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgay0tXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIHJ1bm5pbmdfY291bnRfcHJvZ3Jlc3MgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfY291bnRfcHJvZ3Jlc3MgPSA0NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZToga2V5cy5hY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5wdWJsaWNfa2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW4tcmVsZWFzZWQgZm9ybWF0LCBqdXN0IGZvciB0ZXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMoe2Vycm9yOiBcIm1pc3NpbmdfcHVibGljX2tleXNcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cy5wdWJsaWNfa2V5c1trXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC9eR1BILy50ZXN0KGN1cnJlbnRLZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEtleSA9IFwiQlRTXCIgKyBjdXJyZW50S2V5LnN1YnN0cmluZygzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5HZW5lc2lzKGN1cnJlbnRLZXkpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IGtleS5hZGRyZXNzZXMoY3VycmVudEtleSwgXCJCVFNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGR5X2ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWRkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoYWRkcmVzc2VzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHlfZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGR5X2ZvdW5kKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1trXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGtleXMucHVibGljX2tleXNba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRfY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuY3J5cHRlZF9wcml2YXRlX2tleXMgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrID49IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGstLVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1trXSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlX2tleXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1trXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cy5wdXNoKGtleXMucHVibGljX2tleXNba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMgPSBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZToga2V5cy5hY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudCAtIHJlbW92ZWRfY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdWJsaWNfa2V5cyA9IHB1YmxpY19rZXlzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RhdHVzKHtzdWNjZXNzOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5pdGFsaXppbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0YWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7aW5pdGFsaXppbmd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJ0c19nZW5lc2lza2V5c19ibG9vbV8zY2VlNDQxLmRhdFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQXJCQTtBQTJCQTtBQTVCQTtBQWxCQTtBQURBO0FBREE7QUFzREE7Ozs7QUExREE7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWxCQTtBQXNCQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVRBO0FBM0JBO0FBNkNBOzs7O0FBakRBO0FBQ0E7QUFrREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQURBO0FBU0E7QUFiQTtBQWVBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcENBO0FBeUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFIQTtBQUNBO0FBUUE7QUFDQTtBQUNBOzs7O0FBdElBO0FBQ0E7QUF3SUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFGQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDQTtBQURBO0FBRkE7QUFmQTtBQURBO0FBb0VBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQWxIQTtBQUNBO0FBb0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBbEJBO0FBeUJBO0FBQUE7QUFDQTtBQUNBO0FBM0VBO0FBQ0E7QUE2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBMUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7Ozs7QUFmQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBa0JBOzs7O0FBdkJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFaQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFOQTtBQWNBO0FBekJBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7QUFuQ0E7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFuRkE7QUFDQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSUE7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxxQkFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBdkJBO0FBREE7QUFnQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTdJQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFDQTtBQStJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQVlBOzs7O0FBZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUZBO0FBSkE7QUFrQkE7Ozs7QUF2REE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBdURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQXdFQTtBQTFFQTtBQTRFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE4Q0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVVBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXJEQTtBQUFBO0FBQ0E7QUF1REE7QUF4REE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXlEQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0hBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFRQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFuQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFzREE7QUFFQTtBQURBO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBVUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBRkE7QUFpQkE7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQUhBO0FBbEJBO0FBaUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWFBO0FBZEE7QUFKQTtBQXVCQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQXhCQTtBQTJCQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXRCQTtBQXdCQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBekJBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFUQTtBQXJFQTtBQTdCQTtBQWdIQTtBQUVBO0FBbkhBO0FBREE7QUF5SEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUFEQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFEQTtBQVNBO0FBakNBO0FBaE1BO0FBc09BOzs7O0FBNzlCQTtBQUNBO0FBREE7QUFTQTtBQURBO0FBQ0E7QUFDQTtBQXM5QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFEQTtBQUZBO0FBY0E7Ozs7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQWJBO0FBQ0E7QUFlQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTNKQTs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9