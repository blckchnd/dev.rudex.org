(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 3107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingAccountOptions", function() { return ExistingAccountOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1807);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1847);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1934);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3108);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3111);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3115);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2553);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(572);
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

/***/ 3108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1847);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1939);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(705);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1804);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1935);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1936);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3109);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1803);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3110);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(723);
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

/***/ 3109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1847);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(705);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1935);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1936);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2080);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
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

/***/ 3110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(552);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1954);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2078);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(813);
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

/***/ 3111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainkeyInputAccept", function() { return BrainkeyInputAccept; });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1847);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3112);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3113);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1955);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1954);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2574);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3114);


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

/***/ 3112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
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

/***/ 3113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(553);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3112);
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

/***/ 3114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2314);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2304);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(419);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1807);
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

/***/ 3115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1847);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(419);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(488);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(705);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(591);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2573);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1939);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3108);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1936);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3116);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(592);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3117);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3118);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























__webpack_require__(3120);

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
            var value = this.refs.wifInput.value;
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
            actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_12__["default"].setPubkeys(Object.keys(this.state.imported_keys_public));
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

            var genesis_filter = new chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_17__["default"]();
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
                pubkey = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_4__["ChainConfig"].address_prefix + pubkey.substring(3);
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
                import_password_message: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("wallet.import_pass_match")
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
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Notification"].error({
                                message: error
                            });
                            format_error1_once = false;
                        }
                        continue;
                    }
                    var account_name = account.account_name.trim();
                    var same_prefix_regex = new RegExp("^" + bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_4__["ChainConfig"].address_prefix);
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
                                    public_key_string = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_4__["ChainConfig"].address_prefix + public_key_string.substring(3);
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
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Notification"].error({
                                message: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("notifications.import_keys_error", {
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
            var keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().keys;
            var dups = {};
            for (var public_key_string in this.state.imported_keys_public) {
                if (!keys.has(public_key_string)) continue;
                delete this.state.imported_keys_public[public_key_string];
                dups[public_key_string] = true;
            }
            if (Object.keys(this.state.imported_keys_public).length === 0) {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("notifications.import_keys_already_imported")
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

            actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_6__["default"].unlock().then(function () {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_15__["default"].importing(true);
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
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_14__["default"].importKeysWorker(private_key_objs).then(function (result) {
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_15__["default"].importing(false);
                var import_count = private_key_objs.length;

                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Notification"].success({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("wallet.import_key_success", {
                        count: import_count
                    })
                });

                _this8.setState({
                    importSuccess: true
                });
                // this.onCancel() // back to claim balances
            }).catch(function (error) {
                console.log("error:", error);
                stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_15__["default"].importing(false);
                var message = error;
                try {
                    message = error.target.error.message;
                } catch (e) {}

                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("notifications.import_keys_error_unknown", {
                        error_msg: message
                    })
                });
            });
        }
    }, {
        key: "addByPattern",
        value: function addByPattern(contents) {
            var _this9 = this;

            if (!contents) return false;

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
                        var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["PrivateKey"].fromWif(wif); //could throw and error
                        var private_plainhex = private_key.toBuffer().toString("hex");
                        var public_key = private_key.toPublicKey(); // S L O W
                        var public_key_string = public_key.toPublicKeyString();
                        this.state.imported_keys_public[public_key_string] = true;
                        this.state.keys_to_account[private_plainhex] = {
                            account_names: [],
                            public_key_string: public_key_string
                        };
                        count++;
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
            this.state.key_text_message = null;
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: 15 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button success",
                            onClick: this.onCancel.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.done" })
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
            if (!stores_WalletDb__WEBPACK_IMPORTED_MODULE_14__["default"].getWallet()) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_7__["WalletCreate"], { importKeys: true, hideTitle: true });
            if (this.props.importing) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "center-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "circle" })
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
            var password_placeholder = counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("wallet.import_password");

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
                "div",
                { className: "button success", onClick: this.onCancel.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.cancel" })
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.reset" })
                        ),
                        ")"
                    )
                ),
                account_rows ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    !account_rows.length ? counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("wallet.no_accounts") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "explorer.account.title" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "settings.restore_key_count" })
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "label",
                                    content: "wallet.paste_private"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    ref: "wifInput",
                                    type: "password",
                                    id: "wif",
                                    tabIndex: tabIndex++
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        type: "submit"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.submit" })
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.bts_09_export" }),
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
                                        "button",
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button", {
                                                disabled: !!this.state.no_file
                                            }),
                                            type: "submit"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.submit" })
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], { type: "circle" })
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.import_keys" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button secondary",
                                    onClick: this.reset.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.cancel" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "wallet.unclaimed" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { component: "p", content: "wallet.claim_later" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                component: "label",
                                content: "wallet.totals"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_13__["default"], null)
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
        return [stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_15__["default"]];
    },
    getProps: function getProps() {
        return {
            importing: stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_15__["default"].getState().importing
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (ImportKeys);

/***/ }),

/***/ 3116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1847);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1935);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2080);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
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

/***/ 3117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportKeysStoreWrapped", function() { return ImportKeysStoreWrapped; });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(553);
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

/***/ 3118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bts_genesiskeys_bloom_url = undefined;
try {
    var url = __webpack_require__(3119);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(426).Buffer))

/***/ }),

/***/ 3119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bts_genesiskeys_bloom_3cee441.dat";

/***/ }),

/***/ 3120:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctYWNjb3VudC5iMjM2YzQxNGIxMThkODJlZGQyOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvRXhpc3RpbmdBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvQnJhaW5rZXkuanN4Iiwid2VicGFjazovLy9hcHAvYWN0aW9ucy9CcmFpbmtleUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZXMvQnJhaW5rZXlTdG9yZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FjY291bnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0ltcG9ydEtleXMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9XYWxsZXQvQmFsYW5jZUNsYWltQXNzZXRUb3RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9zdG9yZXMvSW1wb3J0S2V5c1N0b3JlLmpzIiwid2VicGFjazovLy9hcHAvbGliL2NoYWluL0dlbmVzaXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9JbXBvcnRLZXlzLnNjc3M/ZWQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgV2FsbGV0TWFuYWdlclN0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0TWFuYWdlclN0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuL0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJyYWlua2V5IGZyb20gXCIuL0JyYWlua2V5XCI7XG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XG5pbXBvcnQge0JhY2t1cFJlc3RvcmV9IGZyb20gXCIuL0JhY2t1cFwiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiYnJhbmRpbmdcIjtcblxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtXYWxsZXRNYW5hZ2VyU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IHdhbGxldCA9IFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICByZXR1cm4ge3dhbGxldH07XG4gICAgfVxufTtcblxuY2xhc3MgRXhpc3RpbmdBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGhhc193YWxsZXQgPSB0aGlzLnByb3BzLndhbGxldC53YWxsZXRfbmFtZXMuY291bnQoKSAhPSAwO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBjZW50ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQud2VsY29tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldF9iYWNrdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5zZXR1cF93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhY2t1cFJlc3RvcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudC9pbXBvcnQtYmFja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RXhpc3RpbmdBY2NvdW50T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SW1wb3J0S2V5c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2JyYWlua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QnJhaW5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudC9iYWxhbmNlLWNsYWltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFsYW5jZUNsYWltQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuRXhpc3RpbmdBY2NvdW50ID0gY29ubmVjdChcbiAgICBFeGlzdGluZ0FjY291bnQsXG4gICAgY29ubmVjdE9iamVjdFxuKTtcblxuY2xhc3MgRXhpc3RpbmdBY2NvdW50T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBoYXNfd2FsbGV0ID0gdGhpcy5wcm9wcy53YWxsZXQud2FsbGV0X25hbWVzLmNvdW50KCkgIT0gMDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHshaGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQtYmFja3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmltcG9ydF9iYWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9idHMxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImV4aXN0aW5nLWFjY291bnQvaW1wb3J0LWtleXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHshaGFzX3dhbGxldCA/IG51bGwgOiA8QmFsYW5jZUNsYWltQWN0aXZlIC8+fVxuXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJkYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImhlYWRlci5kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJ3YWxsZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLndhbGxldHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuRXhpc3RpbmdBY2NvdW50T3B0aW9ucyA9IGNvbm5lY3QoXG4gICAgRXhpc3RpbmdBY2NvdW50T3B0aW9ucyxcbiAgICBjb25uZWN0T2JqZWN0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFeGlzdGluZ0FjY291bnQ7XG5leHBvcnQge0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcImNvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRSZWZzU3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50UmVmc1N0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZVwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbVNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3RvclwiO1xuaW1wb3J0IFdhbGxldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0QWN0aW9uc1wiO1xuaW1wb3J0IE15QWNjb3VudHMgZnJvbSBcImNvbXBvbmVudHMvRm9ybXMvTXlBY2NvdW50c1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgQmFsYW5jZUNsYWltQWN0aXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBrZXlzID0gUHJpdmF0ZUtleVN0b3JlLmdldFN0YXRlKCkua2V5cztcbiAgICAgICAgbGV0IGtleVNlcSA9IGtleXMua2V5U2VxKCk7XG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0UHVia2V5cyhrZXlTZXEpO1xuICAgICAgICB0aGlzLmV4aXN0aW5nX2tleXMgPSBrZXlTZXE7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQga2V5U2VxID0ga2V5cy5rZXlTZXEoKTtcbiAgICAgICAgaWYgKCFrZXlTZXEuZXF1YWxzKHRoaXMuZXhpc3Rpbmdfa2V5cykpIHtcbiAgICAgICAgICAgIHRoaXMuZXhpc3Rpbmdfa2V5cyA9IGtleVNlcTtcbiAgICAgICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0UHVia2V5cyhrZXlTZXEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWNjb3VudF9yZWZzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5vX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5sb2FkaW5nX2JhbGFuY2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmFsYW5jZXMgfHwgIXRoaXMucHJvcHMuYmFsYW5jZXMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5vX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbXBvcnRfcmVhZHkgPVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9iYWxhbmNlcy5zaXplICYmIHRoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lO1xuICAgICAgICBsZXQgY2xhaW1fYmFsYW5jZV9sYWJlbCA9IGltcG9ydF9yZWFkeVxuICAgICAgICAgICAgPyBgICgke3RoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lfSlgXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuby1ib3JkZXItYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2xhaW1fYmFsYW5jZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvd1k6IFwiaGlkZGVuICFpbXBvcnRhbnRcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC13aWR0aC1jb250ZW50IGNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15QWNjb3VudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmJhbGFuY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRfcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNsYWltQWNjb3VudENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ2xhaW1TZWxlY3RvciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBzdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhaW1wb3J0X3JlYWR5XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xhaW1CYWxhbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2xhaW1fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjbGFpbV9iYWxhbmNlX2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMub25CYWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQmFjayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgIG9uQ2xhaW1BY2NvdW50Q2hhbmdlKGNsYWltX2FjY291bnRfbmFtZSkge1xuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLmNsYWltQWNjb3VudENoYW5nZShjbGFpbV9hY2NvdW50X25hbWUpO1xuICAgIH1cblxuICAgIG9uQ2xhaW1CYWxhbmNlKCkge1xuICAgICAgICBXYWxsZXRBY3Rpb25zLmltcG9ydEJhbGFuY2UoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYWltX2FjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfYmFsYW5jZXMsXG4gICAgICAgICAgICB0cnVlIC8vYnJvYWRjYXN0XG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNsYWltQmFsYW5jZVwiLCBlcnJvcik7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuYmFsYW5jZV9jbGFpbV9lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5CYWxhbmNlQ2xhaW1BY3RpdmUgPSBjb25uZWN0KFxuICAgIEJhbGFuY2VDbGFpbUFjdGl2ZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSwgQWNjb3VudFJlZnNTdG9yZSwgUHJpdmF0ZUtleVN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgcHJvcHMuYWNjb3VudF9yZWZzID0gQWNjb3VudFJlZnNTdG9yZS5nZXRBY2NvdW50UmVmcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZUNsYWltQWN0aXZlO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBCYWxhbmNlQ2xhaW1TZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGFpbV9hY2NvdW50X25hbWUpXG4gICAgICAgICAgICB0aGlzLm9uQ2xhaW1BY2NvdW50KFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jbGFpbV9hY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNoZWNrZWRcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhbGFuY2VzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXQuc2l6ZVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gPGRpdiAvPjtcblxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ey8qIEMgSCBFIEMgSyBCIE8gWCAqL308L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkX3Zlc3RpbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyLCBuYW1lX2Fzc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9eysraW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5jaGVja2VkLmdldChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoZWNrYm94LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmJhbGFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyLnVuY2xhaW1lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyLnVuY2xhaW1lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtuYW1lX2Fzc2V0LmdldCgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyLnZlc3RpbmcudW5jbGFpbWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3IudmVzdGluZy51bmNsYWltZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17bmFtZV9hc3NldC5nZXQoMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IG9mIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyLnZlc3RpbmcudG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e25hbWVfYXNzZXQuZ2V0KDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7bmFtZV9hc3NldC5nZXQoMCl9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrYm94KGluZGV4LCBiYWxhbmNlcykge1xuICAgICAgICBsZXQgY2hlY2tlZCA9IHRoaXMucHJvcHMuY2hlY2tlZDtcbiAgICAgICAgaWYgKGNoZWNrZWQuZ2V0KGluZGV4KSkge1xuICAgICAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWQuZGVsZXRlKGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrZWQgPSBjaGVja2VkLnNldChpbmRleCwgYmFsYW5jZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRTZWxlY3RlZEJhbGFuY2VDbGFpbXMoY2hlY2tlZCk7XG4gICAgfVxuXG4gICAgb25DbGFpbUFjY291bnQoY2xhaW1fYWNjb3VudF9uYW1lLCBjaGVja2VkKSB7XG4gICAgICAgIC8vIEEgVSBUIE8gIFMgRSBMIEUgQyBUICBBIEMgQyBPIFUgTiBUIFNcbiAgICAgICAgLy8gb25seSBpZiBub3RoaW5nIGlzIHNlbGVjdGVkIChwbGF5IGl0IHNhZmUpXG4gICAgICAgIGlmIChjaGVja2VkLnNpemUpIHJldHVybjtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMucHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldC5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBrLmdldCgwKTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBjbGFpbV9hY2NvdW50X25hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodi51bmNsYWltZWQgfHwgdi52ZXN0aW5nLnVuY2xhaW1lZClcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWQuc2V0KGluZGV4LCB2LmJhbGFuY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjaGVja2VkLnNpemUpXG4gICAgICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFNlbGVjdGVkQmFsYW5jZUNsYWltcyhjaGVja2VkKTtcbiAgICB9XG59XG5cbkJhbGFuY2VDbGFpbVNlbGVjdG9yID0gY29ubmVjdChCYWxhbmNlQ2xhaW1TZWxlY3Rvciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICBsZXQgcHJvcHMgPSBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICBsZXQge2JhbGFuY2VzLCBhZGRyZXNzX3RvX3B1YmtleX0gPSBwcm9wcztcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XG4gICAgICAgIGxldCBncm91cENvdW50TWFwID0gSW1tdXRhYmxlLk1hcCgpLmFzTXV0YWJsZSgpO1xuICAgICAgICBsZXQgZ3JvdXBDb3VudCA9IChncm91cCwgZGlzdGluY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBzZXQgPSBncm91cENvdW50TWFwLmdldChncm91cCk7XG4gICAgICAgICAgICBpZiAoIXNldCkge1xuICAgICAgICAgICAgICAgIHNldCA9IEltbXV0YWJsZS5TZXQoKS5hc011dGFibGUoKTtcbiAgICAgICAgICAgICAgICBncm91cENvdW50TWFwLnNldChncm91cCwgc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldC5hZGQoZGlzdGluY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHNldC5zaXplO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYmFsYW5jZXMpXG4gICAgICAgICAgICBwcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0ID0gYmFsYW5jZXNcbiAgICAgICAgICAgICAgICAuZ3JvdXBCeSh2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSyBFIFkgU1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZXMgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHVia2V5ID0gYWRkcmVzc190b19wdWJrZXkuZ2V0KHYub3duZXIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXlfb2JqZWN0ID0gcHJpdmF0ZV9rZXlzLmdldChwdWJrZXkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbXBvcnRlZCBBY2NvdW50IE5hbWVzIChqdXN0IGEgdmlzdWFsIGFpZCwgaGVscHMgdG8gYXV0byBzZWxlY3QgYSByZWFsIGFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5X29iamVjdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2JqZWN0LmltcG9ydF9hY2NvdW50X25hbWVzXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzID0gcHJpdmF0ZV9rZXlfb2JqZWN0LmltcG9ydF9hY2NvdW50X25hbWVzLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpZ25pbmcgaXMgdmVyeSBzbG93LCBmdXJ0aGVyIGRpdmlkZSB0aGUgZ3JvdXBzIGJhc2VkIG9uIHRoZSBudW1iZXIgb2Ygc2lnbmF0dXJlcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hfbnVtYmVyID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbW11dGFibGUuTGlzdChbbmFtZXMsIHYuYmFsYW5jZS5hc3NldF9pZF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYub3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgLyA2MFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZV9hc3NldF9rZXkgPSBJbW11dGFibGUuTGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuYmFsYW5jZS5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoX251bWJlclxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVfYXNzZXRfa2V5O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChsID0+XG4gICAgICAgICAgICAgICAgICAgIGwucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHIsIHYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWIEEgTCBVIEUgU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYucHVibGljX2tleV9zdHJpbmcgPSBhZGRyZXNzX3RvX3B1YmtleS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYub3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuYmFsYW5jZXMgPSByLmJhbGFuY2VzLmFkZCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi52ZXN0ZWRfYmFsYW5jZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZXN0aW5nLnVuY2xhaW1lZCArPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZlc3RlZF9iYWxhbmNlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnZlc3RpbmcudG90YWwgKz0gTnVtYmVyKHYuYmFsYW5jZS5hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudW5jbGFpbWVkICs9IE51bWJlcih2LmJhbGFuY2UuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2xhaW1lZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXN0aW5nOiB7dW5jbGFpbWVkOiAwLCB0b3RhbDogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM6IEltbXV0YWJsZS5TZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5zb3J0QnkoayA9PiBrKTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlQ2xhaW1TZWxlY3RvcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0IGZyb20gXCJjb21wb25lbnRzL0Zvcm1zL0FjY291bnRTZWxlY3RcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBNeUFjY291bnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50czogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRzTGlzdC5pc1JlcXVpcmVkLFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBhY2NvdW50X25hbWVzID0gdGhpcy5wcm9wcy5hY2NvdW50c1xuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+ICEhYWNjb3VudClcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoYWNjb3VudCkpXG4gICAgICAgICAgICAubWFwKGFjY291bnQgPT4gYWNjb3VudC5nZXQoXCJuYW1lXCIpKVxuICAgICAgICAgICAgLnNvcnQoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY2NvdW50U2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXM9e2FjY291bnRfbmFtZXN9XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQWNjb3VudFNlbGVjdChhY2NvdW50X25hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShhY2NvdW50X25hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShNeUFjY291bnRzKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgQnJhaW5rZXlBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JyYWlua2V5QWN0aW9uc1wiO1xuaW1wb3J0IEJyYWlua2V5U3RvcmVGYWN0b3J5IGZyb20gXCJzdG9yZXMvQnJhaW5rZXlTdG9yZVwiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCcmFpbmtleUlucHV0IGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CcmFpbmtleUlucHV0XCI7XG5pbXBvcnQge3RvUGFpcnN9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50Q2FyZCBmcm9tIFwiY29tcG9uZW50cy9EYXNoYm9hcmQvQWNjb3VudENhcmRcIjtcblxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtCcmFpbmtleVN0b3JlRmFjdG9yeS5nZXRJbnN0YW5jZShcIndtY1wiKV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIEJyYWlua2V5U3RvcmVGYWN0b3J5LmdldEluc3RhbmNlKFwid21jXCIpLmdldFN0YXRlKCk7XG4gICAgfVxufTtcblxuY2xhc3MgQnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5jbG9zZUluc3RhbmNlKFwid21jXCIpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8QnJhaW5rZXlJbnB1dEFjY2VwdD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCcmFpbmtleSAvPlxuICAgICAgICAgICAgICAgIDwvQnJhaW5rZXlJbnB1dEFjY2VwdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5CcmFpbmtleSA9IGNvbm5lY3QoXG4gICAgQnJhaW5rZXksXG4gICAgY29ubmVjdE9iamVjdFxuKTtcbmV4cG9ydCBkZWZhdWx0IEJyYWlua2V5O1xuXG5jbGFzcyBWaWV3QnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNob3J0X2JybmtleSA9IHRoaXMucHJvcHMuYnJua2V5LnN1YnN0cmluZygwLCAxMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KClcIiwgdGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KCkpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57c2hvcnRfYnJua2V5fTwvc3Bhbj4maGVsbGlwO1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWNjb3VudF9pZHMuc2l6ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJyYWlua2V5QWNjb3VudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRfaWRzLnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYWNjb3VudHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuVmlld0JyYWlua2V5ID0gY29ubmVjdChcbiAgICBWaWV3QnJhaW5rZXksXG4gICAgY29ubmVjdE9iamVjdFxuKTtcblxuY2xhc3MgQnJhaW5rZXlBY2NvdW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCByb3dzID0gdG9QYWlycyh0aGlzLnByb3BzLmFjY291bnRzKVxuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+ICEhYWNjb3VudFsxXSlcbiAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiBhY2NvdW50WzFdLmdldChcIm5hbWVcIikpXG4gICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAubWFwKG5hbWUgPT4gPEFjY291bnRDYXJkIGtleT17bmFtZX0gYWNjb3VudD17bmFtZX0gLz4pO1xuICAgICAgICByZXR1cm4gPHNwYW4+e3Jvd3N9PC9zcGFuPjtcbiAgICB9XG59XG5CcmFpbmtleUFjY291bnRzID0gQmluZFRvQ2hhaW5TdGF0ZShCcmFpbmtleUFjY291bnRzKTtcblxuZXhwb3J0IGNsYXNzIEJyYWlua2V5SW5wdXRBY2NlcHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2JybmtleTogXCJcIiwgYWNjZXB0OiBmYWxzZX07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NlcHQpIHJldHVybiA8c3Bhbj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuXG4gICAgICAgIGxldCByZWFkeSA9IHRoaXMuc3RhdGUuYnJua2V5ICYmIHRoaXMuc3RhdGUuYnJua2V5ICE9PSBcIlwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnJhaW5rZXlJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CcmFpbmtleUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBzdWNjZXNzXCIsIHtkaXNhYmxlZDogIXJlYWR5fSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5hY2NlcHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQnJhaW5rZXlDaGFuZ2UoYnJua2V5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JybmtleX0pO1xuICAgIH1cblxuICAgIG9uQWNjZXB0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NlcHQ6IHRydWV9KTtcbiAgICAgICAgQnJhaW5rZXlBY3Rpb25zLnNldEJyYWlua2V5KHRoaXMuc3RhdGUuYnJua2V5KTtcbiAgICB9XG59XG5cbi8vIDxkaXYgb25DbGljaz17dGhpcy5vbkxvb2t1cEFjY291bnRzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCI+TG9va3VwIEFjY291bnRzPC9kaXY+XG4vLyBvbkxvb2t1cEFjY291bnRzKCkge1xuLy9cbi8vIH1cbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xuXG5jbGFzcyBCcmFpbmtleUFjdGlvbnMge1xuICAgIHNldEJyYWlua2V5KGJybmtleSkge1xuICAgICAgICByZXR1cm4gYnJua2V5O1xuICAgIH1cbn1cblxudmFyIEJyYWlua2V5QWN0aW9uc1dyYXBwZWQgPSBhbHQuY3JlYXRlQWN0aW9ucyhCcmFpbmtleUFjdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgQnJhaW5rZXlBY3Rpb25zV3JhcHBlZDtcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIGtleX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFzZVN0b3JlXCI7XG5pbXBvcnQgQnJhaW5rZXlBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JyYWlua2V5QWN0aW9uc1wiO1xuXG4vKiogRWFjaCBpbnN0YW5jZSBzdXBwb3J0cyBhIHNpbmdsZSBicmFpbmtleS4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWlua2V5U3RvcmVGYWN0b3J5IHtcbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICAgIC8qKiBUaGlzIG1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMgZm9yIHRoZSBzYW1lIDxiPm5hbWU8L2I+LiAgV2hlbiBkb25lLFxuICAgICAgICAoY29tcG9uZW50V2lsbFVubW91bnQpIG1ha2Ugc3VyZSB0byBjYWxsIHRoaXMuY2xvc2VJbnN0YW5jZSgpXG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UobmFtZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IGFsdC5jcmVhdGVTdG9yZShCcmFpbmtleVN0b3JlSW1wbCwgXCJCcmFpbmtleVN0b3JlXCIpO1xuICAgICAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLnNldChuYW1lLCBpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5ID0gbmFtZSArIFwiIHN1YnNjcmliZWRfaW5zdGFuY2VcIjtcbiAgICAgICAgaWYgKCFCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5KSkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2UgPSBpbnN0YW5jZS5jaGFpblN0b3JlVXBkYXRlLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUoc3Vic2NyaWJlZF9pbnN0YW5jZSk7XG4gICAgICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuc2V0KFxuICAgICAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5LFxuICAgICAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VJbnN0YW5jZShuYW1lKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gaW5zdGFuY2UgXCIgKyBuYW1lKTtcbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5ID0gbmFtZSArIFwiIHN1YnNjcmliZWRfaW5zdGFuY2VcIjtcbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2UgPSBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KFxuICAgICAgICAgICAgc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXlcbiAgICAgICAgKTtcbiAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmRlbGV0ZShzdWJzY3JpYmVkX2luc3RhbmNlX2tleSk7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUoc3Vic2NyaWJlZF9pbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLmNsZWFyQ2FjaGUoKTtcbiAgICB9XG59XG5cbi8qKiBEZXJpdmVkIGtleXMgbWF5IGJlIHVuYXNzaWduZWQgZnJvbSBhY2NvdW50cyB0aGVyZWZvcmUgd2UgbXVzdCBkZWZpbmUgYVxuICAgIGZpeGVkIGJsb2NrIG9mIGRlcml2aWVkIGtleXMgdGhlbiBtb25pdG9yIHRoZSBlbnRpcmUgYmxvY2suXG4qL1xudmFyIERFUklWSUVEX0JSQUlOS0VZX1BPT0xfU0laRSA9IDEwO1xuXG5jbGFzcyBCcmFpbmtleVN0b3JlSW1wbCBleHRlbmRzIEJhc2VTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoe1xuICAgICAgICAgICAgb25TZXRCcmFpbmtleTogQnJhaW5rZXlBY3Rpb25zLnNldEJyYWlua2V5XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9leHBvcnQoXCJpblN5bmNcIiwgXCJjaGFpblN0b3JlVXBkYXRlXCIsIFwiY2xlYXJDYWNoZVwiKTtcbiAgICB9XG5cbiAgICAvLyBjaGFpblN0b3JlVW5zdWJzY3JpYmUoKSB7XG4gICAgLy8gICAgIHRyeXtcbiAgICAvLyAgICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5jaGFpblN0b3JlVXBkYXRlKVxuICAgIC8vICAgICB9Y2F0Y2goZTEpIHtjb25zb2xlLmxvZyhcInVuc3ViIDEgZmFpbFwiKTtcbiAgICAvLyAgICAgICAgIHRyeXtcbiAgICAvLyAgICAgICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMuY2hhaW5TdG9yZVVwZGF0ZS5iaW5kKHRoaXMpKVxuICAgIC8vICAgICAgICAgfWNhdGNoKGUyKSB7Y29uc29sZS5sb2coXCJ1bnN1YiAxIGZhaWxcIil9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjbGVhckNhY2hlKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnJua2V5OiBcIlwiLFxuICAgICAgICAgICAgYWNjb3VudF9pZHM6IEltbXV0YWJsZS5TZXQoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAvLyBDb21wYXJlZCB3aXRoIENoYWluU3RvcmUuYWNjb3VudF9pZHNfYnlfa2V5XG4gICAgICAgIHRoaXMuYWNjb3VudF9pZHNfYnlfa2V5ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKiogU2F2ZXMgdGhlIGJyYWlua2V5IGFuZCBiZWdpbnMgdGhlIGxvb2t1cCBmb3IgZGVyaXZlZCBhY2NvdW50IHJlZmVybmVjZXMgKi9cbiAgICBvblNldEJyYWlua2V5KGJybmtleSkge1xuICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJua2V5fSk7XG4gICAgICAgIHRoaXMuZGVyaXZlS2V5cyhicm5rZXkpO1xuICAgICAgICB0aGlzLmNoYWluU3RvcmVVcGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKiogQHJldHVybiA8Yj50cnVlPC9iPiB3aGVuIGFsbCBkZXJpdmllZCBhY2NvdW50IHJlZmVyZW5jZXMgYXJlIGVpdGhlclxuICAgICAgICBmb3VuZCBvciBrbm93biBub3QgdG8gZXhpc3QuXG4gICAgKi9cbiAgICBpblN5bmMoKSB7XG4gICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzLmZvckVhY2goZGVyaXZlZF9rZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUGVuZGluZ0Zyb21DaGFpbihkZXJpdmVkX2tleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNoYWluU3RvcmVVcGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5kZXJpdmVkX2tleXMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmFjY291bnRfaWRzX2J5X2tleSA9PT0gQ2hhaW5TdG9yZS5hY2NvdW50X2lkc19ieV9rZXkpIHJldHVybjtcbiAgICAgICAgdGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPSBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleTtcbiAgICAgICAgdGhpcy51cGRhdGVBY2NvdW50SWRzKCk7XG4gICAgfVxuXG4gICAgZGVyaXZlS2V5cyhicm5rZXkgPSB0aGlzLnN0YXRlLmJybmtleSkge1xuICAgICAgICB2YXIgc2VxdWVuY2UgPSB0aGlzLmRlcml2ZWRfa2V5cy5sZW5ndGg7IC8vIG5leHQgc2VxdWVuY2UgKHN0YXJ0aW5nIHdpdGggMClcbiAgICAgICAgdmFyIHByaXZhdGVfa2V5ID0ga2V5LmdldF9icmFpblByaXZhdGVLZXkoYnJua2V5LCBzZXF1ZW5jZSk7XG4gICAgICAgIHZhciBkZXJpdmVkX2tleSA9IGRlcml2ZWRLZXlTdHJ1Y3QocHJpdmF0ZV9rZXkpO1xuICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5wdXNoKGRlcml2ZWRfa2V5KTtcbiAgICAgICAgaWYgKHRoaXMuZGVyaXZlZF9rZXlzLmxlbmd0aCA8IERFUklWSUVEX0JSQUlOS0VZX1BPT0xfU0laRSlcbiAgICAgICAgICAgIHRoaXMuZGVyaXZlS2V5cyhicm5rZXkpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjY291bnRJZHMoKSB7XG4gICAgICAgIHZhciBuZXdfYWNjb3VudF9pZHMgPSBJbW11dGFibGUuU2V0KCkud2l0aE11dGF0aW9ucyhuZXdfaWRzID0+IHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVQdWJrZXkgPSBwdWJsaWNfc3RyaW5nID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhaW5fYWNjb3VudF9pZHMgPSBDaGFpblN0b3JlLmdldEFjY291bnRSZWZzT2ZLZXkoXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY19zdHJpbmdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjaGFpbl9hY2NvdW50X2lkcylcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5fYWNjb3VudF9pZHMuZm9yRWFjaChjaGFpbl9hY2NvdW50X2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19pZHMuYWRkKGNoYWluX2FjY291bnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5mb3JFYWNoKGRlcml2ZWRfa2V5ID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlUHVia2V5KGRlcml2ZWRfa2V5LnB1YmxpY19zdHJpbmcpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFuZXdfYWNjb3VudF9pZHMuZXF1YWxzKHRoaXMuc3RhdGUuYWNjb3VudF9pZHMpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjY291bnRfaWRzID0gbmV3X2FjY291bnRfaWRzO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9pZHM6IG5ld19hY2NvdW50X2lkc30pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXJpdmVkS2V5U3RydWN0KHByaXZhdGVfa2V5KSB7XG4gICAgdmFyIHB1YmxpY19zdHJpbmcgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpLnRvUHVibGljS2V5U3RyaW5nKCk7XG4gICAgdmFyIGRlcml2ZWRfa2V5ID0ge3ByaXZhdGVfa2V5LCBwdWJsaWNfc3RyaW5nfTtcbiAgICByZXR1cm4gZGVyaXZlZF9rZXk7XG59XG5cbnZhciBpc1BlbmRpbmdGcm9tQ2hhaW4gPSBkZXJpdmVkX2tleSA9PlxuICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudFJlZnNPZktleShkZXJpdmVkX2tleS5wdWJsaWNfc3RyaW5nKSA9PT0gdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRJbWFnZSBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50SW1hZ2VcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8qKlxuICogIEBicmllZiBkaXNwbGF5cyB0aGUgc3VtbWFyeSBvZiBhIGdpdmVuIGFjY291bnQgaW4gYSBjb25kZW5jZWQgdmlldyAoZm9yIHRoZSBkYXNoYm9hcmQpXG4gKlxuICogIFRoaXMgY2FyZCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICB7IGFjY291bnQ6ICR7bmFtZV9vcl9pZH0gfVxuICovXG5cbmNsYXNzIEFjY291bnRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIG9uQ2FyZENsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHtuYW1lfWApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBudWxsO1xuICAgICAgICBsZXQgYmFsYW5jZXMgPSBudWxsO1xuICAgICAgICBsZXQgaXNNeUFjY291bnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWNjb3VudCkge1xuICAgICAgICAgICAgbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgbGV0IGFiYWwgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XG4gICAgICAgICAgICBpZiAoYWJhbCkge1xuICAgICAgICAgICAgICAgIGJhbGFuY2VzID0gYWJhbFxuICAgICAgICAgICAgICAgICAgICAubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdCh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZUFtb3VudC5nZXQoXCJiYWxhbmNlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNNeUFjY291bnQgPSBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQodGhpcy5wcm9wcy5hY2NvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IGFjY291bnQtY2FyZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhcmRDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRcIiArIChpc015QWNjb3VudCA/IFwiIG15LWFjY291bnRcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e25hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17e2hlaWdodDogNjQsIHdpZHRoOiA2NH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJhbGFuY2VzXCI+e2JhbGFuY2VzfTwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuQWNjb3VudENhcmQgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRDYXJkKTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWNjb3VudENhcmQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge1ByaXZhdGVLZXksIEFlcywgUHVibGljS2V5LCBoYXNofSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Q2hhaW5Db25maWd9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuaW1wb3J0IHtXYWxsZXRDcmVhdGV9IGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9XYWxsZXRDcmVhdGVcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi4vV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFzc2V0VG90YWwgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFzc2V0VG90YWxcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgSW1wb3J0S2V5c1N0b3JlIGZyb20gXCJzdG9yZXMvSW1wb3J0S2V5c1N0b3JlXCI7XG5cbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBHZW5lc2lzRmlsdGVyIGZyb20gXCJjaGFpbi9HZW5lc2lzRmlsdGVyXCI7XG5cbnJlcXVpcmUoXCIuL0ltcG9ydEtleXMuc2Nzc1wiKTtcblxubGV0IGltcG9ydF9rZXlzX2Fzc2VydF9jaGVja2luZyA9IGZhbHNlO1xuXG5jb25zdCBLZXlDb3VudCA9ICh7a2V5X2NvdW50fSkgPT4ge1xuICAgIGlmICgha2V5X2NvdW50KSByZXR1cm4gPHNwYW4gLz47XG4gICAgcmV0dXJuIDxzcGFuPkZvdW5kIHtrZXlfY291bnR9IHByaXZhdGUga2V5czwvc3Bhbj47XG59O1xuXG5jbGFzcyBJbXBvcnRLZXlzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMgPSB0aGlzLl9yZW5kZXJCYWxhbmNlQ2xhaW1zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJpdmF0ZUtleTogdHJ1ZVxuICAgIH07XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleXNfdG9fYWNjb3VudDoge30sXG4gICAgICAgICAgICBub19maWxlOiB0cnVlLFxuICAgICAgICAgICAgYWNjb3VudF9rZXlzOiBbXSxcbiAgICAgICAgICAgIC8vYnJhaW5rZXk6IG51bGwsXG4gICAgICAgICAgICAvL2VuY3J5cHRlZF9icmFpbmtleTogbnVsbCxcbiAgICAgICAgICAgIHJlc2V0X2ZpbGVfbmFtZToga2VlcF9maWxlX25hbWVcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUucmVzZXRfZmlsZV9uYW1lXG4gICAgICAgICAgICAgICAgOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IERhdGUubm93KCksXG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydGVkX2tleXNfcHVibGljOiB7fSxcbiAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2UsXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9zdGF0dXM6IFtdLFxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGltcG9ydFN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzZXQoZSwga2VlcF9maWxlX25hbWUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpKTtcbiAgICB9XG5cbiAgICBvbldpZihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlZnMud2lmSW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMuYWRkQnlQYXR0ZXJuKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbChlKSB7XG4gICAgICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZU9uQ2hhbmdlKCkge1xuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFB1YmtleXMoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEltcG9ydEFjY291bnRLZXlDb3VudChrZXlzX3RvX2FjY291bnQpIHtcbiAgICAgICAgbGV0IGFjY291bnRfa2V5Y291bnQgPSB7fTtcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBrZXlzX3RvX2FjY291bnQpXG4gICAgICAgICAgICBmb3IgKGxldCBhY2NvdW50X25hbWUgb2Yga2V5c190b19hY2NvdW50W2tleV0uYWNjb3VudF9uYW1lcykge1xuICAgICAgICAgICAgICAgIGFjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXSA9XG4gICAgICAgICAgICAgICAgICAgIChhY2NvdW50X2tleWNvdW50W2FjY291bnRfbmFtZV0gfHwgMCkgKyAxO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kID8gYWNjb3VudF9rZXljb3VudCA6IG51bGw7XG4gICAgfVxuXG4gICAgdXBsb2FkKGV2dCkge1xuICAgICAgICB0aGlzLnJlc2V0KG51bGwsIHRydWUpO1xuICAgICAgICBsZXQgZmlsZSA9IGV2dC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGV2dC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQganNvbl9jb250ZW50cztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBqc29uX2NvbnRlbnRzID0gSlNPTi5wYXJzZShjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgY2hhbmNlIHRvIGVuY291bnRlciBhIGxhcmdlIGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0aGlzIGZvcm1hdCBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VJbXBvcnRLZXlVcGxvYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uX2NvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZV9zdGF0ZVwiLCB1cGRhdGVfc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVfc3RhdGUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZV9zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IGVtcHR5IHBhc3N3b3JkLCBhbHNvIGRpc3BsYXkgXCJFbnRlciBpbXBvcnQgZmlsZSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXNzd29yZENoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coXCIuLi4gX3BhcnNlSW1wb3J0S2V5VXBsb2FkXCIsZSlcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghanNvbl9jb250ZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUgKyBcIiBpcyBhbiB1bnJlY29nbml6ZWQgZm9ybWF0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZVdhbGxldEpzb24oanNvbl9jb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkQnlQYXR0ZXJuKGNvbnRlbnRzKSkgdGhyb3cgZWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IGVtcHR5IHBhc3N3b3JkLCBhbHNvIGRpc3BsYXkgXCJFbnRlciBpbXBvcnQgZmlsZSBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi4uLiBJbXBvcnRLZXlzIHVwbG9hZCBlcnJvclwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbXBvcnRfZmlsZV9tZXNzYWdlOiBtZXNzYWdlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH1cblxuICAgIC8qKiBCVFMgMS4wIGNsaWVudCB3YWxsZXRfZXhwb3J0X2tleXMgZm9ybWF0LiAqL1xuICAgIF9wYXJzZUltcG9ydEtleVVwbG9hZChqc29uX2NvbnRlbnRzLCBmaWxlX25hbWUsIHVwZGF0ZV9zdGF0ZSkge1xuICAgICAgICBsZXQgcGFzc3dvcmRfY2hlY2tzdW0sIHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0gPSBqc29uX2NvbnRlbnRzLnBhc3N3b3JkX2NoZWNrc3VtO1xuICAgICAgICAgICAgaWYgKCFwYXNzd29yZF9jaGVja3N1bSlcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlX25hbWUgKyBcIiBpcyBhbiB1bnJlY29nbml6ZWQgZm9ybWF0XCI7XG5cbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShqc29uX2NvbnRlbnRzLmFjY291bnRfa2V5cykpXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZV9uYW1lICsgXCIgaXMgYW4gdW5yZWNvZ25pemVkIGZvcm1hdFwiO1xuXG4gICAgICAgICAgICB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyA9IGpzb25fY29udGVudHMuYWNjb3VudF9rZXlzO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlLm1lc3NhZ2UgfHwgZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJUUyAxLjAgd2FsbGV0cyBtYXkgaGF2ZSBhIGxvdCBvZiBnZW5lcmF0ZWQgYnV0IHVudXNlZCBrZXlzIG9yIHNwZW50IFRJVEFOIGFkZHJlc3NlcyBtYWtpbmdcbiAgICAgICAgLy8gd2FsbGV0cyBzbyBsYXJnZSBpdCBpcyB3YXMgbm90IHBvc3NpYmxlIHRvIHVzZSB0aGUgSmF2YVNjcmlwdCB3YWxsZXRzIHdpdGggdGhlbS5cblxuICAgICAgICBsZXQgZ2VuZXNpc19maWx0ZXIgPSBuZXcgR2VuZXNpc0ZpbHRlcigpO1xuICAgICAgICBpZiAoIWdlbmVzaXNfZmlsdGVyLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXG4gICAgICAgICAgICAgICAgYWNjb3VudF9rZXlzOiB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyxcbiAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7Z2VuZXNpc19maWx0ZXJfaW5pdGFsaXppbmc6IHRydWV9LFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT5cbiAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlci5pbml0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcl9zdGF0dXMgPSB0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAvLyBGRiA8IHZlcnNpb24gNDEgZG9lcyBub3Qgc3VwcG9ydCB3b3JrZXIgdGhyZWFkcyBpbnRlcm5hbHMgKGxpa2UgYmxvYiB1cmxzKVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgR2VuZXNpc0ZpbHRlcldvcmtlciA9IHJlcXVpcmUoXCJ3b3JrZXItbG9hZGVyIXdvcmtlcnMvR2VuZXNpc0ZpbHRlcldvcmtlclwiKVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgd29ya2VyID0gbmV3IEdlbmVzaXNGaWx0ZXJXb3JrZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFjY291bnRfa2V5czogdW5maWx0ZXJlZF9hY2NvdW50X2tleXMsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBibG9vbV9maWx0ZXI6IGdlbmVzaXNfZmlsdGVyLmJsb29tX2ZpbHRlclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB3b3JrZXIub25tZXNzYWdlID0gZXZlbnQgPT4geyB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHsgc3RhdHVzLCBhY2NvdW50X2tleXMgfSA9IGV2ZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIC4uLlxuICAgICAgICAgICAgICAgICAgICAvLyB9IGNhdGNoKCBlICkgeyBjb25zb2xlLmVycm9yKCdHZW5lc2lzRmlsdGVyV29ya2VyJywgZSkgfX1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9rZXlzID0gdW5maWx0ZXJlZF9hY2NvdW50X2tleXM7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyLmZpbHRlcihhY2NvdW50X2tleXMsIHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW1wb3J0IGZpbHRlclwiLCBzdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmVycm9yID09PSBcIm1pc3NpbmdfcHVibGljX2tleXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW4tcmVsZWFzZWQgZm9ybWF0LCBqdXN0IGZvciB0ZXN0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2tleXM6IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHsgYWNjb3VudF9rZXlzIH0gPSBldmVudC5kYXRhIC8vIGlmIHVzaW5nIHdvcmtlciB0aHJlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5pbml0YWxpemluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfaW5pdGFsaXppbmc6IHN0YXR1cy5pbml0YWxpemluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmltcG9ydGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3JhbW1lciBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmtub3duIHN0YXR1c1wiLCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyX3N0YXR1cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zdGF0dXMucHVzaChzdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RfYWNjb3VudF9uYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1c1tmaWx0ZXJfc3RhdHVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWNjb3VudF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X2FjY291bnRfbmFtZSA9PT0gc3RhdHVzLmFjY291bnRfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHNhbWUgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1cy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBzdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3IGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZpbHRlcl9zdGF0dXMucHVzaChzdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtnZW5lc2lzX2ZpbHRlcl9zdGF0dXM6IGZpbHRlcl9zdGF0dXN9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vLCAxMDApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgQlRTIDEuMCBob3N0ZWQgd2FsbGV0IGJhY2t1cCAod2FsbGV0LmJpdHNoYXJlcy5vcmcpIGlzIHN1cHBvcnRlZC5cblxuICAgIEJUUyAxLjAgbmF0aXZlIHdhbGxldHMgc2hvdWxkIHVzZSB3YWxsZXRfZXhwb3J0X2tleXMgaW5zdGVhZCBvZiBhIHdhbGxldCBiYWNrdXAuXG5cbiAgICBOb3RlLCAgTmF0aXZlIHdhbGxldCBiYWNrdXBzIHdpbGwgYmUgcmVqZWN0ZWQuICBUaGUgbG9naWMgYmVsb3cgZG9lcyBub3RcbiAgICBjYXB0dXJlIGFzc2lnbmVkIGFjY291bnQgbmFtZXMgKGZvciB1bnJlZ2lzdGVkIGFjY291bnRzKSBhbmQgZG9lcyBub3QgY2FwdHVyZVxuICAgIHNpZ25pbmcga2V5cy4gIFRoZSBob3N0ZWQgd2FsbGV0IGhhcyBvbmx5IHJlZ2lzdGVyZWQgYWNjb3VudHMgYW5kIG5vIHNpZ25pbmdcbiAgICBrZXlzLlxuXG4gICAgKi9cbiAgICBfcGFyc2VXYWxsZXRKc29uKGpzb25fY29udGVudHMpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkX2NoZWNrc3VtO1xuICAgICAgICBsZXQgZW5jcnlwdGVkX2JyYWlua2V5O1xuICAgICAgICBsZXQgYWRkcmVzc190b19lbmNrZXlzID0ge307XG4gICAgICAgIGxldCBhY2NvdW50X2FkZHJlc3NlcyA9IHt9O1xuXG4gICAgICAgIGxldCBzYXZlUHVia2V5QWNjb3VudCA9IGZ1bmN0aW9uKHB1YmtleSwgYWNjb3VudF9uYW1lKSB7XG4gICAgICAgICAgICAvL3JlcGxhY2UgQlRTIHdpdGggR1BIXG4gICAgICAgICAgICBwdWJrZXkgPSBDaGFpbkNvbmZpZy5hZGRyZXNzX3ByZWZpeCArIHB1YmtleS5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFB1YmxpY0tleS5mcm9tUHVibGljS2V5U3RyaW5nKFxuICAgICAgICAgICAgICAgIHB1YmtleVxuICAgICAgICAgICAgKS50b0FkZHJlc3NTdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBhZGRyZXNzZXMgPSBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdIHx8IFtdO1xuICAgICAgICAgICAgYWRkcmVzcyA9IFwiQlRTXCIgKyBhZGRyZXNzLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coXCIuLi4gYWRkcmVzc1wiLGFkZHJlc3MsYWNjb3VudF9uYW1lKVxuICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzcyk7XG4gICAgICAgICAgICBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdID0gYWRkcmVzc2VzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoanNvbl9jb250ZW50cykpIHtcbiAgICAgICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKCcuLi4ganNvbl9jb250ZW50cycsanNvbl9jb250ZW50cylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHdhbGxldCBmb3JtYXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGpzb25fY29udGVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIFwia2V5X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlICYmXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YS5hY2NvdW50X2FkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhLmVuY3J5cHRlZF9wcml2YXRlX2tleVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGVsZW1lbnQuZGF0YS5hY2NvdW50X2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmNrZXlzID0gYWRkcmVzc190b19lbmNrZXlzW2FkZHJlc3NdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBlbmNrZXlzLnB1c2goZWxlbWVudC5kYXRhLmVuY3J5cHRlZF9wcml2YXRlX2tleSk7XG4gICAgICAgICAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coXCIuLi4gYWRkcmVzc1wiLGFkZHJlc3MsZW5ja2V5cylcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc190b19lbmNrZXlzW2FkZHJlc3NdID0gZW5ja2V5cztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFwiYWNjb3VudF9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gZWxlbWVudC5kYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVQdWJrZXlBY2NvdW50KGVsZW1lbnQuZGF0YS5vd25lcl9rZXksIGFjY291bnRfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGhpc3Rvcnkgb2YgZWxlbWVudC5kYXRhLmFjdGl2ZV9rZXlfaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVB1YmtleUFjY291bnQoaGlzdG9yeVsxXSwgYWNjb3VudF9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHlfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJlbmNyeXB0ZWRfYnJhaW5rZXlcIiA9PSBlbGVtZW50LmRhdGEua2V5XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9icmFpbmtleSA9IGVsZW1lbnQuZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFwibWFzdGVyX2tleV9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArIFwiIGludmFsaWQgbWFzdGVyX2tleV9yZWNvcmQgcmVjb3JkXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LmRhdGEuY2hlY2tzdW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGlzIG1pc3NpbmcgbWFzdGVyX2tleV9yZWNvcmQgY2hlY2tzdW1cIjtcblxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSA9IGVsZW1lbnQuZGF0YS5jaGVja3N1bTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVuY3J5cHRlZF9icmFpbmtleSlcbiAgICAgICAgICAgICAgICB0aHJvdyBcIlBsZWFzZSB1c2UgYSBCVFMgMS4wIHdhbGxldF9leHBvcnRfa2V5cyBmaWxlIGluc3RlYWRcIjtcblxuICAgICAgICAgICAgaWYgKCFwYXNzd29yZF9jaGVja3N1bSlcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgKyBcIiBpcyBtaXNzaW5nIHBhc3N3b3JkX2NoZWNrc3VtXCI7XG5cbiAgICAgICAgICAgIGlmICghZW5ja2V5cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICsgXCIgZG9lcyBub3QgY29udGFpbiBhbnkgcHJpdmF0ZSBrZXlzXCI7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IGUubWVzc2FnZSB8fCBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnRfa2V5cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhY2NvdW50X25hbWUgaW4gYWNjb3VudF9hZGRyZXNzZXMpIHtcbiAgICAgICAgICAgIGxldCBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBhZGRyZXNzIG9mIGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5ja2V5cyA9IGFkZHJlc3NfdG9fZW5ja2V5c1thZGRyZXNzXTtcbiAgICAgICAgICAgICAgICBpZiAoIWVuY2tleXMpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGVuY2tleSBvZiBlbmNrZXlzKSBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLnB1c2goZW5ja2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY291bnRfa2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgY291bGQgcHJvbXB0IGZvciB0aGlzIGJyYWluIGtleSBpbnN0ZWFkIG9uIGZpcnN0IHVzZS4gIFRoZSB1c2VyXG4gICAgICAgIC8vIG1heSBhbHJlYWR5IGhhdmUgYSBicmFpbmtleSBhdCB0aGlzIHBvaW50IHNvIHdpdGggYSBzaW5nbGUgYnJhaW5rZXlcbiAgICAgICAgLy8gd2FsbGV0IHdlIGNhbid0IHVzZSBpdCBub3cuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXG4gICAgICAgICAgICBhY2NvdW50X2tleXNcbiAgICAgICAgICAgIC8vZW5jcnlwdGVkX2JyYWlua2V5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9wYXNzd29yZENoZWNrKGV2dCkge1xuICAgICAgICBpZiAoZXZ0ICYmIFwicHJldmVudERlZmF1bHRcIiBpbiBldnQpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwd05vZGUgPSB0aGlzLnJlZnMucGFzc3dvcmQ7XG4gICAgICAgIC8vIGlmKHB3Tm9kZSkgcHdOb2RlLmZvY3VzKClcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gcHdOb2RlID8gcHdOb2RlLnZhbHVlIDogXCJcIjtcbiAgICAgICAgbGV0IGNoZWNrc3VtID0gdGhpcy5zdGF0ZS5wYXNzd29yZF9jaGVja3N1bTtcbiAgICAgICAgbGV0IG5ld19jaGVja3N1bSA9IGhhc2guc2hhNTEyKGhhc2guc2hhNTEyKHBhc3N3b3JkKSkudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgIGlmIChjaGVja3N1bSAhPSBuZXdfY2hlY2tzdW0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBub19maWxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogcGFzc3dvcmQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gXCJJbmNvcnJlY3QgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbm9fZmlsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXQuaW1wb3J0X3Bhc3NfbWF0Y2hcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLl9kZWNyeXB0UHJpdmF0ZUtleXMocGFzc3dvcmQpXG4gICAgICAgICk7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoLCAyNTApXG4gICAgfVxuXG4gICAgX2RlY3J5cHRQcml2YXRlS2V5cyhwYXNzd29yZCkge1xuICAgICAgICBsZXQgcGFzc3dvcmRfYWVzID0gQWVzLmZyb21TZWVkKHBhc3N3b3JkKTtcbiAgICAgICAgbGV0IGZvcm1hdF9lcnJvcjFfb25jZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGFjY291bnQgb2YgdGhpcy5zdGF0ZS5hY2NvdW50X2tleXMpIHtcbiAgICAgICAgICAgIGlmICghYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gYEFjY291bnQgJHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5hY2NvdW50X25hbWVcbiAgICAgICAgICAgICAgICB9IG1pc3NpbmcgZW5jcnlwdGVkX3ByaXZhdGVfa2V5c2A7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdF9lcnJvcjFfb25jZSkge1xuICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdF9lcnJvcjFfb25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSBhY2NvdW50LmFjY291bnRfbmFtZS50cmltKCk7XG4gICAgICAgICAgICBsZXQgc2FtZV9wcmVmaXhfcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgIFwiXlwiICsgQ2hhaW5Db25maWcuYWRkcmVzc19wcmVmaXhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY291bnQuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBlbmNyeXB0ZWRfcHJpdmF0ZSA9IGFjY291bnQuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleV9zdHJpbmcgPSBhY2NvdW50LnB1YmxpY19rZXlzXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudC5wdWJsaWNfa2V5c1tpXVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7IC8vIHBlcmZvcm1hbmNlIGdhaW5cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX3BsYWluaGV4ID0gcGFzc3dvcmRfYWVzLmRlY3J5cHRIZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfcHJpdmF0ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0X2tleXNfYXNzZXJ0X2NoZWNraW5nICYmIHB1YmxpY19rZXlfc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXkgPSBQcml2YXRlS2V5LmZyb21IZXgocHJpdmF0ZV9wbGFpbmhleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHViID0gcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKTsgLy8gUyBMIE8gV1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHkgPSBwdWIudG9BZGRyZXNzU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHViYnkgPSBwdWIudG9QdWJsaWNLZXlTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzX3N0cmluZyA9IGFjY291bnQuYWRkcmVzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50LmFkZHJlc3Nlc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDsgLy8gYXNzZXJ0IGNoZWNraW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3N0cmluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHkuc3Vic3RyaW5nKDMpICE9IGFkZHJlc3Nfc3RyaW5nLnN1YnN0cmluZygzKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzIGltcG9ydGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc19zdHJpbmcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBidXQgY2FsY3VsYXRlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi4gXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJieS5zdWJzdHJpbmcoMykgIT0gcHVibGljX2tleV9zdHJpbmcuc3Vic3RyaW5nKDMpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWMga2V5IGltcG9ydGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBidXQgY2FsY3VsYXRlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmJ5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIE1pc3MtbWF0Y2gga2V5XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghcHVibGljX2tleV9zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbUhleChwcml2YXRlX3BsYWluaGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5ID0gcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKTsgLy8gUyBMIE8gV1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcgPSBwdWJsaWNfa2V5LnRvUHVibGljS2V5U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhbWVfcHJlZml4X3JlZ2V4LnRlc3QocHVibGljX2tleV9zdHJpbmcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FzIGNyZWF0aW5nIGEgdW5yZXNwb25zaXZlIGNocm9tZSBicm93c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGFmdGVyIHRoZSByZXN1bHRzIHdlcmUgc2hvd24uICBJdCB3YXMgcHJvYmFibHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXVzZWQgYnkgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5Db25maWcuYWRkcmVzc19wcmVmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZy5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpY1twdWJsaWNfa2V5X3N0cmluZ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQge2FjY291bnRfbmFtZXN9ID0gdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnRbXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4XG4gICAgICAgICAgICAgICAgICAgIF0gfHwge2FjY291bnRfbmFtZXM6IFtdfTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBfbmFtZSBvZiBhY2NvdW50X25hbWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9uYW1lID09IGFjY291bnRfbmFtZSkgZHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXMucHVzaChhY2NvdW50X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtwcml2YXRlX3BsYWluaGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSwgZS5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZS5tZXNzYWdlIHx8IGU7XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmltcG9ydF9rZXlzX2Vycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWU6IGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfbXNnOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9sZXQgZW5jX2JyYWlua2V5ID0gdGhpcy5zdGF0ZS5lbmNyeXB0ZWRfYnJhaW5rZXlcbiAgICAgICAgLy9pZihlbmNfYnJhaW5rZXkpe1xuICAgICAgICAvLyAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLy8gICAgICAgIGJyYWlua2V5OiBwYXNzd29yZF9hZXMuZGVjcnlwdEhleFRvVGV4dChlbmNfYnJhaW5rZXkpXG4gICAgICAgIC8vICAgIH0pXG4gICAgICAgIC8vfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW06IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZU9uQ2hhbmdlKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfc2F2ZUltcG9ydChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQgZHVwcyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBwdWJsaWNfa2V5X3N0cmluZyBpbiB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMuaGFzKHB1YmxpY19rZXlfc3RyaW5nKSkgY29udGludWU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpY1twdWJsaWNfa2V5X3N0cmluZ107XG4gICAgICAgICAgICBkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5pbXBvcnRfa2V5c19hbHJlYWR5X2ltcG9ydGVkXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5c190b19hY2NvdW50ID0gdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnQ7XG4gICAgICAgIGZvciAobGV0IHByaXZhdGVfcGxhaW5oZXggb2YgT2JqZWN0LmtleXMoa2V5c190b19hY2NvdW50KSkge1xuICAgICAgICAgICAgbGV0IHthY2NvdW50X25hbWVzLCBwdWJsaWNfa2V5X3N0cmluZ30gPSBrZXlzX3RvX2FjY291bnRbXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmIChkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSlcbiAgICAgICAgICAgICAgICBkZWxldGUga2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdO1xuICAgICAgICB9XG4gICAgICAgIFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBJbXBvcnRLZXlzU3RvcmUuaW1wb3J0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNhdmVJbXBvcnQoKSwgMjAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xuICAgIH1cblxuICAgIHNhdmVJbXBvcnQoKSB7XG4gICAgICAgIGxldCBrZXlzX3RvX2FjY291bnQgPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudDtcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5X29ianMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJpdmF0ZV9wbGFpbmhleCBvZiBPYmplY3Qua2V5cyhrZXlzX3RvX2FjY291bnQpKSB7XG4gICAgICAgICAgICBsZXQge2FjY291bnRfbmFtZXMsIHB1YmxpY19rZXlfc3RyaW5nfSA9IGtleXNfdG9fYWNjb3VudFtcbiAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2Jqcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4LFxuICAgICAgICAgICAgICAgIGltcG9ydF9hY2NvdW50X25hbWVzOiBhY2NvdW50X25hbWVzLFxuICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIFdhbGxldERiLmltcG9ydEtleXNXb3JrZXIocHJpdmF0ZV9rZXlfb2JqcylcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgbGV0IGltcG9ydF9jb3VudCA9IHByaXZhdGVfa2V5X29ianMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5pbXBvcnRfa2V5X3N1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaW1wb3J0X2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRTdWNjZXNzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vbkNhbmNlbCgpIC8vIGJhY2sgdG8gY2xhaW0gYmFsYW5jZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBJbXBvcnRLZXlzU3RvcmUuaW1wb3J0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci50YXJnZXQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmltcG9ydF9rZXlzX2Vycm9yX3Vua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQnlQYXR0ZXJuKGNvbnRlbnRzKSB7XG4gICAgICAgIGlmICghY29udGVudHMpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgY291bnQgPSAwLFxuICAgICAgICAgICAgaW52YWxpZF9jb3VudCA9IDA7XG4gICAgICAgIGxldCB3aWZfcmVnZXggPSAvNVtISktdWzEtOUEtWmEtel17NDl9L2c7XG4gICAgICAgIGZvciAobGV0IHdpZiBvZiBjb250ZW50cy5tYXRjaCh3aWZfcmVnZXgpIHx8IFtdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbVdpZih3aWYpOyAvL2NvdWxkIHRocm93IGFuZCBlcnJvclxuICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX3BsYWluaGV4ID0gcHJpdmF0ZV9rZXkudG9CdWZmZXIoKS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleSA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCk7IC8vIFMgTCBPIFdcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleV9zdHJpbmcgPSBwdWJsaWNfa2V5LnRvUHVibGljS2V5U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpY1twdWJsaWNfa2V5X3N0cmluZ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZF9jb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5X3RleHRfbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgXCJGb3VuZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICghY291bnQgPyBcIlwiIDogY291bnQgKyBcIiB2YWxpZFwiKSArXG4gICAgICAgICAgICAgICAgICAgICghaW52YWxpZF9jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiIGFuZCBcIiArIGludmFsaWRfY291bnQgKyBcIiBpbnZhbGlkXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIga2V5XCIgK1xuICAgICAgICAgICAgICAgICAgICAoY291bnQgPiAxIHx8IGludmFsaWRfY291bnQgPiAxID8gXCJzXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpXG4gICAgICAgICk7XG4gICAgICAgIC8vIHJlbW92ZXMgdGhlIG1lc3NhZ2Ugb24gdGhlIG5leHQgcmVuZGVyXG4gICAgICAgIHRoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvLyB0b2dnbGVJbXBvcnRUeXBlKHR5cGUpIHtcbiAgICAvLyAgICAgaWYgKCF0eXBlKSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0b2dnbGVJbXBvcnRUeXBlXCIsIHR5cGUpO1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIHByaXZhdGVLZXk6IHR5cGUgPT09IFwicHJpdmF0ZUtleVwiXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIF9yZW5kZXJCYWxhbmNlQ2xhaW1zKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QmFsYW5jZUNsYWltQWN0aXZlIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZG9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ByaXZhdGVLZXl9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtrZXlzX3RvX2FjY291bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGtleV9jb3VudCA9IE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkubGVuZ3RoO1xuICAgICAgICBsZXQgYWNjb3VudF9rZXljb3VudCA9IHRoaXMuZ2V0SW1wb3J0QWNjb3VudEtleUNvdW50KGtleXNfdG9fYWNjb3VudCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHdhbGxldCBwcmlvciB0byB0aGUgaW1wb3J0IGtleXMgKGtlZXBzIGxheW91dCBjbGVhbilcbiAgICAgICAgaWYgKCFXYWxsZXREYi5nZXRXYWxsZXQoKSlcbiAgICAgICAgICAgIHJldHVybiA8V2FsbGV0Q3JlYXRlIGltcG9ydEtleXM9e3RydWV9IGhpZGVUaXRsZT17dHJ1ZX0gLz47XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmltcG9ydGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmluZyA9IHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJpbmc7XG4gICAgICAgIGxldCB3YXNfZmlsdGVyZWQgPVxuICAgICAgICAgICAgISF0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ7XG4gICAgICAgIGxldCBhY2NvdW50X3Jvd3MgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhdHVzIG9mIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jb3VudCAmJiBzdGF0dXMudG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9yb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtzdGF0dXMuYWNjb3VudF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXR1cy5hY2NvdW50X25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJpbmd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0dXMuY291bnQgLyBzdGF0dXMudG90YWwpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0dXMuY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbXBvcnRfcmVhZHkgPSBrZXlfY291bnQgIT09IDA7XG4gICAgICAgIGxldCBwYXNzd29yZF9wbGFjZWhvbGRlciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzd29yZFwiXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGltcG9ydF9yZWFkeSkgcGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBcIlwiO1xuXG4gICAgICAgIGlmICghYWNjb3VudF9yb3dzICYmIGFjY291bnRfa2V5Y291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIGluIGFjY291bnRfa2V5Y291bnQpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50X3Jvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudF9uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltcG9ydFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJCYWxhbmNlQ2xhaW1zKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogS2V5IGZpbGUgdXBsb2FkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUua2V5X3RleHRfbWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmtleV90ZXh0X21lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEtleUNvdW50IGtleV9jb3VudD17a2V5X2NvdW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7IWltcG9ydF9yZWFkeSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5yZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHthY2NvdW50X3Jvd3MgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWFjY291bnRfcm93cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0Lm5vX2FjY291bnRzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYWNjb3VudC50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLnJlc3RvcmVfa2V5X2NvdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57YWNjb3VudF9yb3dzfTwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICB7IWltcG9ydF9yZWFkeSAmJiAhdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9pbml0YWxpemluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaXZhdGVLZXkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbldpZi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5wYXN0ZV9wcml2YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ3aWZJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2lmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FuY2VsQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5fcGFzc3dvcmRDaGVjay5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5idHNfMDlfZXhwb3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubm9fZmlsZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZV9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMuc3RhdGUucmVzZXRfZmlsZV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGxvYWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmltcG9ydF9maWxlX21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLm5vX2ZpbGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzZXRfcGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltcG9ydF9wYXNzd29yZF9tZXNzYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltcG9ydF9wYXNzd29yZF9tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmFjb2xvci1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltcG9ydF9wYXNzd29yZF9tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogISF0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub19maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge2ltcG9ydF9yZWFkeSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBzdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWltcG9ydF9yZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zYXZlSW1wb3J0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5pbXBvcnRfa2V5c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNsYWltX2xhdGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQudG90YWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbUFzc2V0VG90YWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5JbXBvcnRLZXlzID0gY29ubmVjdChcbiAgICBJbXBvcnRLZXlzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0ltcG9ydEtleXNTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IEltcG9ydEtleXNTdG9yZS5nZXRTdGF0ZSgpLmltcG9ydGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydEtleXM7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZVwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQmFsYW5jZUNsYWltQXNzZXRUb3RhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmFsYW5jZXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmxvYWRpbmdfYmFsYW5jZXNcIiAvPiZoZWxsaXA7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHZhciB0b3RhbF9ieV9hc3NldCA9IHRoaXMucHJvcHMuYmFsYW5jZXNcbiAgICAgICAgICAgIC5ncm91cEJ5KHYgPT4gdi5iYWxhbmNlLmFzc2V0X2lkKVxuICAgICAgICAgICAgLm1hcChsID0+IGwucmVkdWNlKChyLCB2KSA9PiByICsgTnVtYmVyKHYuYmFsYW5jZS5hbW91bnQpLCAwKSk7XG5cbiAgICAgICAgaWYgKCF0b3RhbF9ieV9hc3NldC5zaXplKSByZXR1cm4gPGRpdj5Ob25lPC9kaXY+O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0b3RhbF9ieV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAubWFwKCh0b3RhbCwgYXNzZXRfaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthc3NldF9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJhbGFuY2VDbGFpbUFzc2V0VG90YWxzID0gY29ubmVjdChCYWxhbmNlQ2xhaW1Bc3NldFRvdGFscywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4gQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZUNsYWltQXNzZXRUb3RhbHM7XG4iLCJpbXBvcnQgYWx0IGZyb20gXCJhbHQtaW5zdGFuY2VcIjtcbmltcG9ydCBCYXNlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYXNlU3RvcmVcIjtcblxuY2xhc3MgSW1wb3J0S2V5c1N0b3JlIGV4dGVuZHMgQmFzZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB0aGlzLl9leHBvcnQoXCJpbXBvcnRpbmdcIik7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtpbXBvcnRpbmc6IGZhbHNlfTtcbiAgICB9XG5cbiAgICBpbXBvcnRpbmcoaW1wb3J0aW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltcG9ydGluZ30pO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBJbXBvcnRLZXlzU3RvcmVXcmFwcGVkID0gYWx0LmNyZWF0ZVN0b3JlKFxuICAgIEltcG9ydEtleXNTdG9yZSxcbiAgICBcIkltcG9ydEtleXNTdG9yZVwiXG4pO1xuZXhwb3J0IGRlZmF1bHQgSW1wb3J0S2V5c1N0b3JlV3JhcHBlZDtcbiIsImltcG9ydCB7aGFzaCwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxudmFyIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgPSB1bmRlZmluZWQ7XG50cnkge1xuICAgIHZhciB1cmwgPSByZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1idHNfZ2VuZXNpc2tleXNfYmxvb21fW3NoYTE6aGFzaDpoZXg6N10uZGF0IWFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIjNjZWU0NDFcIikgPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgaGFzaDogYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdFwiKTtcbiAgICBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsID0gdXJsO1xufSBjYXRjaCAoZSkge1xuICAgIC8vIHdlYnBhY2sgZGVwbG95bWVudCBleGNlcHRpb24gKG5vdCBydW4gdGltZSlcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJXQVJOOiBXaWxsIGJlIHVuYWJsZSB0byBmaWx0ZXIgQlRTIDEuMCB3YWxsZXQgaW1wb3J0cywgZGlkIG5vdCBmaW5kIGFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIsXG4gICAgICAgIGVcbiAgICApO1xufVxuXG4vKipcbiAgICBUaGlzIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gYSBCVFMgMS4wIGV4cG9ydCBmaWxlIHRha2VuIG9uIHRoZVxuICAgIGRpc2NvbnRpbnVlZCBjaGFpbi4gQW55IHB1YmxpYyBrZXkgc3RyaW5nIG9yIGFkZHJlc3MgKGFsbCA1IGZvcm1hdHMpIGNhcnJpZWRcbiAgICBvdmVyIHRvIHRoZSBCVFMgMi4wIGdlbmVzaXMgYmxvY2sgd2lsbCBiZSBpbiB0aGlzIGZpbHRlci5cblxuICAgIFRoZWlyIG1heSBiZSBzb21lIGZhbHNlIHBvc2l0aXZlcyBidXQgbm8gZmFsc2UgbmVnYXRpdmVzLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVzaXNGaWx0ZXIge1xuICAgIC8qKiBvciBjYWxsIHRoaXMuaW5pdCAqL1xuICAgIGNvbnN0cnVjdG9yKGJsb29tX2J1ZmZlcikge1xuICAgICAgICBpZiAoIWJsb29tX2J1ZmZlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGJsb29tX2J1ZmZlcjtcbiAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGJsb29tX2J1ZmZlci5sZW5ndGggKiA4OyAvLyA4Mzg4NjA4ICh0ZXN0IGRhdGEpXG4gICAgfVxuXG4gICAgLyoqIFdhcyBhIGJsb29tIGZpbGUgZGVwbG95ZWQ/ICBUaGlzIGRvZXMgbm90IHRyeSB0byBsb2FkIGl0IGZyb20gdGhlIHNlcnZlci4gKi9cbiAgICBpc0F2YWlsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpbml0KGRvbmUpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvb21fYnVmZmVyKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lc2lzIGJsb29tIGZpbGUgd2FzIG5vdCBkZXBsb3llZFwiKTtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIC8vIGZpcmVmb3ggNDAgZGlkIG5vdCBhbGxvdyB0aGUgYmxvYiB1cmwgYnV0IGZmIDQxLjAuMiBkaWRcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudHMgPSBuZXcgQnVmZmVyKGV2dC50YXJnZXQucmVzdWx0LCBcImJpbmFyeVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoICE9PSAxMDQ4NTc2KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGNvbnRlbnRzLmxlbmd0aCAqIDg7IC8vIDgzODg2MDggKHRlc3QgZGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInhoci5vbmVycm9yXCIsIGUpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG5cbiAgICBpbkdlbmVzaXMocHVia2V5X29yX2FkZHJlc3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJsb29tX2J1ZmZlcikgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbCBpbml0KCkgZmlyc3RcIik7XG4gICAgICAgIGZvciAodmFyIGhhc2hlcyA9IDA7IGhhc2hlcyA8IDM7IGhhc2hlcysrKSB7XG4gICAgICAgICAgICB2YXIgaGV4ID0gaGFzaC5zaGEyNTYoaGFzaGVzICsgXCI6XCIgKyBwdWJrZXlfb3JfYWRkcmVzcyk7XG4gICAgICAgICAgICB2YXIgYml0X2FkZHJlc3MgPVxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGhleC5zbGljZSgtMykudG9TdHJpbmcoXCJoZXhcIiksIDE2KSAlXG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlcjsgLy8gMzA5MDU2NFxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJpdF9hZGRyZXNzXCIsIGJpdF9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgIHZhciBieXRlX2FkZHJlc3MgPSBiaXRfYWRkcmVzcyA+PiAzOyAvLyAzODYzMjBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJieXRlX2FkZHJlc3NcIiwgYnl0ZV9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgIHZhciBtYXNrID0gMSA8PCAoYml0X2FkZHJlc3MgJiA3KTsgLy8gMTZcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJtYXNrXCIsIG1hc2sudG9TdHJpbmcoMTYpKVxuICAgICAgICAgICAgdmFyIGJ5dGUgPSB0aGlzLmJsb29tX2J1ZmZlcltieXRlX2FkZHJlc3NdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJ5dGVcIiwgYnl0ZS50b1N0cmluZygxNikpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiYnl0ZSAmIG1hc2tcIiwgYnl0ZSAmIG1hc2ssIChieXRlICYgbWFzaykgPT09IDAsICdcXG4nKVxuICAgICAgICAgICAgaWYgKChieXRlICYgbWFzaykgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoYWNjb3VudF9rZXlzLCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogTWlzc2luZyBibG9vbSBmaWx0ZXIgZm9yIEJUUyAwLjkueCB3YWxsZXRzXCIpO1xuICAgICAgICAgICAgc3RhdHVzKHtlcnJvcjogXCJtaXNzaW5nX2Jsb29tXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGFsaXppbmcgPSB0cnVlO1xuICAgICAgICBzdGF0dXMoe2luaXRhbGl6aW5nfSk7XG4gICAgICAgIHRoaXMuaW5pdCgoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdHVzKHtpbml0YWxpemluZ30pO1xuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFjY291bnRfa2V5cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZF9jb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gYWNjb3VudF9rZXlzW2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA+PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgay0tXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIHJ1bm5pbmdfY291bnRfcHJvZ3Jlc3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWU6IGtleXMuYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5wdWJsaWNfa2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuLXJlbGVhc2VkIGZvcm1hdCwganVzdCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7ZXJyb3I6IFwibWlzc2luZ19wdWJsaWNfa2V5c1wifSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzLnB1YmxpY19rZXlzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC9eR1BILy50ZXN0KGN1cnJlbnRLZXkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRLZXkgPSBcIkJUU1wiICsgY3VycmVudEtleS5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoY3VycmVudEtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IGtleS5hZGRyZXNzZXMoY3VycmVudEtleSwgXCJCVFNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkeV9mb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoYWRkcmVzc2VzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGR5X2ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHlfZm91bmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXlzLnB1YmxpY19rZXlzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZF9jb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGstLVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2tdKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlX2tleXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXNba11cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cy5wdXNoKGtleXMucHVibGljX2tleXNba10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IGVuY3J5cHRlZF9wcml2YXRlX2tleXM7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudCAtIHJlbW92ZWRfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdWJsaWNfa2V5cyA9IHB1YmxpY19rZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0dXMoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRhbGl6aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7aW5pdGFsaXppbmd9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJ0c19nZW5lc2lza2V5c19ibG9vbV8zY2VlNDQxLmRhdFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQXJCQTtBQTJCQTtBQTVCQTtBQWxCQTtBQURBO0FBREE7QUFzREE7Ozs7QUExREE7QUFDQTtBQTJEQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWxCQTtBQXNCQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVRBO0FBM0JBO0FBNkNBOzs7O0FBakRBO0FBQ0E7QUFrREE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQURBO0FBU0E7QUFiQTtBQWVBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcENBO0FBeUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFIQTtBQUNBO0FBUUE7QUFDQTtBQUNBOzs7O0FBdElBO0FBQ0E7QUF3SUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFGQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDQTtBQURBO0FBRkE7QUFmQTtBQURBO0FBb0VBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQWxIQTtBQUNBO0FBb0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBbEJBO0FBeUJBO0FBQUE7QUFDQTtBQUNBO0FBM0VBO0FBQ0E7QUE2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBMUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7Ozs7QUFmQTtBQUNBO0FBZ0JBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBa0JBOzs7O0FBdkJBO0FBQ0E7QUF3QkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFaQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFOQTtBQWNBO0FBekJBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7QUFuQ0E7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFuRkE7QUFDQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUZBO0FBSkE7QUFrQkE7Ozs7QUF2REE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBdURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQXdFQTtBQTFFQTtBQTRFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE4Q0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVVBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXJEQTtBQUFBO0FBQ0E7QUF1REE7QUF4REE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXlEQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0hBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFRQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFFQTtBQURBO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFEQTtBQUhBO0FBYUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBRkE7QUFpQkE7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFUQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFhQTtBQWRBO0FBSkE7QUF1QkE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQWxCQTtBQXFCQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXRCQTtBQXdCQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBekJBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBTEE7QUFPQTtBQVBBO0FBU0E7QUFWQTtBQXJFQTtBQXZCQTtBQTJHQTtBQUVBO0FBOUdBO0FBREE7QUFvSEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUFEQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFEQTtBQVNBO0FBakNBO0FBOUtBO0FBb05BOzs7O0FBeDZCQTtBQUNBO0FBREE7QUFTQTtBQURBO0FBQ0E7QUFDQTtBQWk2QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4OUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFEQTtBQUZBO0FBY0E7Ozs7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQWJBO0FBQ0E7QUFlQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTNKQTs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9