(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 2946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletOptions", function() { return WalletOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActiveWallet", function() { return ChangeActiveWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDelete", function() { return WalletDelete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1819);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1859);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1815);
/* harmony import */ var actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2457);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1939);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2947);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2955);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2948);
/* harmony import */ var _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2962);
/* harmony import */ var _WalletCreate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2507);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2490);
/* harmony import */ var _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2963);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var connectObject = {
    listenTo: function listenTo() {
        return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState();
    }
};

var WalletManager = function (_Component) {
    _inherits(WalletManager, _Component);

    function WalletManager() {
        _classCallCheck(this, WalletManager);

        return _possibleConstructorReturn(this, (WalletManager.__proto__ || Object.getPrototypeOf(WalletManager)).apply(this, arguments));
    }

    _createClass(WalletManager, [{
        key: "getTitle",
        value: function getTitle() {
            switch (this.props.location.pathname) {
                case "/wallet/create":
                    return "wallet.create_wallet";
                    break;

                case "/wallet/backup/create":
                    return "wallet.create_backup";
                    break;

                case "/wallet/backup/restore":
                    return "wallet.restore_backup";
                    break;

                case "/wallet/backup/brainkey":
                    return "wallet.backup_brainkey";
                    break;

                case "/wallet/delete":
                    return "wallet.delete_wallet";
                    break;

                case "/wallet/change-password":
                    return "wallet.change_password";
                    break;

                case "/wallet/import-keys":
                    return "wallet.import_keys";
                    break;

                default:
                    return "wallet.console";
                    break;
            }
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-container", style: { maxWidth: "40rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "page-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                component: "h3",
                                content: this.getTitle()
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet",
                                    component: WalletOptions
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/change",
                                    component: ChangeActiveWallet
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/change-password",
                                    component: _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/import-keys",
                                    component: _ImportKeys__WEBPACK_IMPORTED_MODULE_10__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/brainkey",
                                    component: _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__["ExistingAccountOptions"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/create",
                                    component: _WalletCreate__WEBPACK_IMPORTED_MODULE_13__["WalletCreate"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/delete",
                                    component: WalletDelete
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/backup/restore",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_14__["BackupRestore"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/backup/create",
                                    component: _Backup__WEBPACK_IMPORTED_MODULE_14__["BackupCreate"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/backup/brainkey",
                                    component: _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__["default"]
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
                                    exact: true,
                                    path: "/wallet/balance-claims",
                                    component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__["default"]
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WalletManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletManager = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletManager, connectObject);

var WalletOptions = function (_Component2) {
    _inherits(WalletOptions, _Component2);

    function WalletOptions() {
        _classCallCheck(this, WalletOptions);

        return _possibleConstructorReturn(this, (WalletOptions.__proto__ || Object.getPrototypeOf(WalletOptions)).apply(this, arguments));
    }

    _createClass(WalletOptions, [{
        key: "render",
        value: function render() {
            var has_wallet = !!this.props.current_wallet;
            var has_wallets = this.props.wallet_names.size > 1;
            var current_wallet = this.props.current_wallet ? this.props.current_wallet.toUpperCase() : "";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Card"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.active_wallet" }),
                                ":"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                current_wallet
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            has_wallets ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                { to: "/wallet/change" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "button outline success" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.change_wallet" })
                                )
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Card"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.import_keys_tool" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { style: { visibility: "hidden" } },
                                "Dummy"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                { to: "/wallet/import-keys" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "button outline success" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.import_keys" })
                                )
                            ) : null
                        )
                    ),
                    has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Card"],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.balance_claims" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { style: { visibility: "hidden" } },
                                "Dummy"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                { to: "/wallet/balance-claims" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "button outline success" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.balance_claim_lookup" })
                                )
                            )
                        )
                    ) : null
                ),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/backup/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.create_backup" })
                    )
                ) : null,
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/backup/brainkey" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.backup_brainkey" })
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/backup/restore" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.restore_backup" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.new_wallet" })
                    )
                ),
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/delete" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.delete_wallet" })
                    )
                ) : null,
                has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/change-password" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.change_password" })
                    )
                ) : null
            );
        }
    }]);

    return WalletOptions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletOptions = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletOptions, connectObject);

var ChangeActiveWallet = function (_Component3) {
    _inherits(ChangeActiveWallet, _Component3);

    function ChangeActiveWallet() {
        _classCallCheck(this, ChangeActiveWallet);

        var _this3 = _possibleConstructorReturn(this, (ChangeActiveWallet.__proto__ || Object.getPrototypeOf(ChangeActiveWallet)).call(this));

        _this3.state = {};
        return _this3;
    }

    _createClass(ChangeActiveWallet, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var current_wallet = this.props.current_wallet;
            this.setState({ current_wallet: current_wallet });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.current_wallet !== this.state.current_wallet) {
                this.setState({ current_wallet: np.current_wallet });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var state = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState();

            var options = [];
            state.wallet_names.forEach(function (wallet_name) {
                options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: wallet_name, value: wallet_name },
                    wallet_name.toLowerCase()
                ));
            });

            var is_dirty = this.state.current_wallet !== this.props.current_wallet;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.active_wallet" }),
                        ":"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "with-dropdown", style: { borderBottom: 0 } },
                            state.wallet_names.count() <= 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        paddingLeft: 10,
                                        lineHeight: "36px",
                                        borderRadius: "3px"
                                    },
                                    className: "settings-input"
                                },
                                this.state.current_wallet
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "settings-select",
                                    value: this.state.current_wallet,
                                    onChange: this.onChange.bind(this)
                                },
                                options
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button outline" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.new_wallet" })
                    )
                ),
                is_dirty ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "button outline",
                        onClick: this.onConfirm.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        content: "wallet.change",
                        name: this.state.current_wallet
                    })
                ) : null
            );
        }
    }, {
        key: "onConfirm",
        value: function onConfirm() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].setWallet(this.state.current_wallet);
            actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__["default"].reset();
            // if (window.electron) {
            //     window.location.hash = "";
            //     window.remote.getCurrentWindow().reload();
            // }
            // else window.location.href = "/";
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var current_wallet = event.target.value;
            this.setState({ current_wallet: current_wallet });
        }
    }]);

    return ChangeActiveWallet;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ChangeActiveWallet = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(ChangeActiveWallet, connectObject);

var WalletDelete = function (_Component4) {
    _inherits(WalletDelete, _Component4);

    function WalletDelete() {
        _classCallCheck(this, WalletDelete);

        var _this4 = _possibleConstructorReturn(this, (WalletDelete.__proto__ || Object.getPrototypeOf(WalletDelete)).call(this));

        _this4.state = {
            selected_wallet: null,
            confirm: 0
        };
        return _this4;
    }

    _createClass(WalletDelete, [{
        key: "_onCancel",
        value: function _onCancel() {
            this.setState({
                confirm: 0,
                selected_wallet: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.confirm === 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: 20 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.delete_confirm_line1" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        component: "p",
                        content: "wallet.delete_confirm_line3"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button outline",
                            onClick: this.onConfirm2.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "wallet.delete_confirm_line4",
                            name: this.state.selected_wallet
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button outline",
                            onClick: this._onCancel.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.cancel" })
                    )
                );
            }

            // this.props.current_wallet
            var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
                key: "placeholder",
                value: "",
                disabled: this.props.wallet_names.size > 1
            });
            // if (this.props.wallet_names.size > 1) {
            //     placeholder = <option value="" disabled>{placeholder}</option>;
            // }
            // else {
            //     //When disabled and list_size was 1, chrome was skipping the
            //     //placeholder and selecting the 1st item automatically (not shown)
            //     placeholder = <option value="">{placeholder}</option>;
            // }
            var options = [placeholder];
            options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "option",
                { key: "select_option", value: "" },
                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("settings.delete_select"),
                "\u2026"
            ));
            this.props.wallet_names.forEach(function (wallet_name) {
                options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: wallet_name, value: wallet_name },
                    wallet_name.toLowerCase()
                ));
            });

            var is_dirty = !!this.state.selected_wallet;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { paddingTop: 20 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.delete_wallet" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "with-dropdown", style: { borderBottom: 0 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "settings-select",
                                    value: this.state.selected_wallet || "",
                                    style: { margin: "0 auto" },
                                    onChange: this.onChange.bind(this)
                                },
                                options
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("button outline", { disabled: !is_dirty }),
                        onClick: this.onConfirm.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        content: this.state.selected_wallet ? "wallet.delete_wallet_name" : "wallet.delete_wallet",
                        name: this.state.selected_wallet
                    })
                )
            );
        }
    }, {
        key: "onConfirm",
        value: function onConfirm() {
            this.setState({ confirm: 1 });
        }
    }, {
        key: "onConfirm2",
        value: function onConfirm2() {
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].deleteWallet(this.state.selected_wallet);
            this._onCancel();
            // window.history.back()
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var selected_wallet = event.target.value;
            this.setState({ selected_wallet: selected_wallet });
        }
    }]);

    return WalletDelete;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletDelete = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletDelete, connectObject);

/* harmony default export */ __webpack_exports__["default"] = (WalletManager);


/***/ }),

/***/ 2962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1819);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(602);
/* harmony import */ var _PasswordConfirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2509);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(823);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var WalletChangePassword = function (_Component) {
    _inherits(WalletChangePassword, _Component);

    function WalletChangePassword() {
        _classCallCheck(this, WalletChangePassword);

        var _this = _possibleConstructorReturn(this, (WalletChangePassword.__proto__ || Object.getPrototypeOf(WalletChangePassword)).call(this));

        _this.state = { success: false };
        return _this;
    }

    _createClass(WalletChangePassword, [{
        key: "onAccept",
        value: function onAccept(e) {
            var _this2 = this;

            e.preventDefault();
            var _state = this.state,
                old_password = _state.old_password,
                new_password = _state.new_password;

            stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].changePassword(old_password, new_password, true /*unlock*/).then(function () {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Notification"].success({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("notifications.password_change_success")
                });
                _this2.setState({ success: true });
                // window.history.back();
            }).catch(function (error) {
                // Programmer or database error ( validation missed something? )
                // .. translation may be unnecessary
                console.error(error);
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("notifications.password_change_failure", {
                        error_msg: error
                    })
                });
            });
        }
    }, {
        key: "onOldPassword",
        value: function onOldPassword(old_password) {
            this.setState({ old_password: old_password });
        }
    }, {
        key: "onNewPassword",
        value: function onNewPassword(new_password) {
            this.setState({ new_password: new_password });
        }
    }, {
        key: "_onCancel",
        value: function _onCancel() {
            this.setState({
                old_password: ""
            });

            this.refs.pwd.cancel();
        }
    }, {
        key: "render",
        value: function render() {
            var ready = !!this.state.new_password;
            var success = this.state.success;


            if (success) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "p", content: "wallet.change_success" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "p", content: "wallet.change_backup" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "/wallet/backup/create" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button outline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.create_backup" })
                        )
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    WalletPassword,
                    {
                        ref: "pwd",
                        onValid: this.onOldPassword.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _PasswordConfirm__WEBPACK_IMPORTED_MODULE_5__["default"],
                        {
                            onSubmit: this.onAccept.bind(this),
                            newPassword: true,
                            onValid: this.onNewPassword.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button outline", {
                                    disabled: !ready
                                }),
                                type: "submit",
                                onClick: this.onAccept.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.accept" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "button outline",
                                onClick: this._onCancel.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.cancel" })
                        )
                    )
                )
            );
        }
    }]);

    return WalletChangePassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WalletChangePassword);

var WalletPassword = function (_Component2) {
    _inherits(WalletPassword, _Component2);

    function WalletPassword() {
        _classCallCheck(this, WalletPassword);

        var _this3 = _possibleConstructorReturn(this, (WalletPassword.__proto__ || Object.getPrototypeOf(WalletPassword)).call(this));

        _this3.state = {
            password: "",
            verified: false
        };
        return _this3;
    }

    _createClass(WalletPassword, [{
        key: "cancel",
        value: function cancel() {
            this.setState({
                verified: false,
                password: ""
            });
        }
    }, {
        key: "onPassword",
        value: function onPassword(e) {
            e.preventDefault();

            var _WalletDb$validatePas = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].validatePassword(this.state.password, true),
                success = _WalletDb$validatePas.success;

            if (success) {
                this.setState({ verified: true });
                this.props.onValid(this.state.password);
            } else {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("notifications.invalid_password")
                });
            }
        }
    }, {
        key: "formChange",
        value: function formChange(event) {
            var state = {};
            state[event.target.id] = event.target.value;
            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.verified) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content" },
                    this.props.children
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "form",
                    { onSubmit: this.onPassword.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.existing_password" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("wallet.current_pass"),
                            type: "password",
                            id: "password",
                            autoComplete: "current-password",
                            onChange: this.formChange.bind(this),
                            value: this.state.password
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button outline" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.submit" })
                    )
                );
            }
        }
    }]);

    return WalletPassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletPassword.propTypes = {
    onValid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};

var Reset = function (_Component3) {
    _inherits(Reset, _Component3);

    function Reset() {
        _classCallCheck(this, Reset);

        return _possibleConstructorReturn(this, (Reset.__proto__ || Object.getPrototypeOf(Reset)).apply(this, arguments));
    }

    _createClass(Reset, [{
        key: "render",
        value: function render() {
            var label = this.props.label || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.reset" });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "button outline", onClick: this.onReset.bind(this) },
                label
            );
        }
    }, {
        key: "onReset",
        value: function onReset() {
            window.history.back();
        }
    }]);

    return Reset;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ 2963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2086);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1815);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(602);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(429);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var BackupBrainkey = function (_Component) {
    _inherits(BackupBrainkey, _Component);

    function BackupBrainkey() {
        _classCallCheck(this, BackupBrainkey);

        var _this = _possibleConstructorReturn(this, (BackupBrainkey.__proto__ || Object.getPrototypeOf(BackupBrainkey)).call(this));

        _this.state = _this._getInitialState();
        return _this;
    }

    _createClass(BackupBrainkey, [{
        key: "_getInitialState",
        value: function _getInitialState() {
            return {
                password: null,
                brainkey: null,
                invalid_password: false
            };
        }
    }, {
        key: "render",
        value: function render() {
            var content;
            var brainkey_backup_date = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getWallet().brainkey_backup_date;

            var brainkey_backup_time = brainkey_backup_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_backed_up" }),
                ":",
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], { value: brainkey_backup_date })
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                className: "facolor-error",
                component: "p",
                content: "wallet.brainkey_not_backed_up"
            });

            if (this.state.verified) {
                var sha1 = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["hash"].sha1(this.state.brainkey).toString("hex").substring(0, 4);
                content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Card"],
                        null,
                        this.state.brainkey
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "pre",
                        { className: "no-overflow" },
                        "sha1 hash of the brainkey: ",
                        sha1
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    brainkey_backup_time
                );
            }

            if (!content && this.state.brainkey) {
                var sha1 = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["hash"].sha1(this.state.brainkey).toString("hex").substring(0, 4);
                content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Card"],
                        null,
                        this.state.brainkey
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { padding: "10px 0" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "pre",
                            { className: "no-overflow" },
                            "sha1 hash of your brainkey: ",
                            sha1
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { padding: "10px 0 20px 0" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_w1" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_w2" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.brainkey_w3" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button success",
                            onClick: this.onComplete.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.verify" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button cancel",
                            onClick: this.reset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.cancel" })
                    )
                );
            }

            if (!content) {
                var valid = this.state.password && this.state.password !== "";
                content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.enter_password" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            onSubmit: this.onSubmit.bind(this),
                            className: "name-form",
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "password",
                            id: "password",
                            onChange: this.onPassword.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            this.state.invalid_password ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "error" },
                                "Invalid password"
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.pwd4brainkey" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            brainkey_backup_time,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            { className: "button success" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.show_brainkey" })
                        )
                    )
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow" },
                    content
                )
            );
        }
    }, {
        key: "onComplete",
        value: function onComplete(brnkey) {
            this.setState({ verified: true });
            actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].setBrainkeyBackupDate();
        }
    }, {
        key: "reset",
        value: function reset(e) {
            if (e) {
                e.preventDefault();
            }
            this.setState(this._getInitialState());
        }
    }, {
        key: "onBack",
        value: function onBack(e) {
            e.preventDefault();
            window.history.back();
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            e.preventDefault();
            var was_locked = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].isLocked();

            var _WalletDb$validatePas = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].validatePassword(this.state.password, true),
                success = _WalletDb$validatePas.success;

            if (success) {
                var brainkey = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getBrainKey();
                if (was_locked) stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].onLock();
                this.setState({ brainkey: brainkey });
            } else this.setState({ invalid_password: true });
        }
    }, {
        key: "onPassword",
        value: function onPassword(event) {
            this.setState({ password: event.target.value, invalid_password: false });
        }
    }]);

    return BackupBrainkey;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BackupBrainkey);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmRhMjU5MjgxODhkZTBmNDM2N2I1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9XYWxsZXRNYW5hZ2VyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhY2t1cEJyYWlua2V5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XG5pbXBvcnQgQmFja3VwQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWNrdXBBY3Rpb25zXCI7XG5pbXBvcnQgV2FsbGV0TWFuYWdlclN0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0TWFuYWdlclN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7RXhpc3RpbmdBY2NvdW50T3B0aW9uc30gZnJvbSBcIi4vRXhpc3RpbmdBY2NvdW50XCI7XG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuL0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IFdhbGxldENoYW5nZVBhc3N3b3JkIGZyb20gXCIuL1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XG5pbXBvcnQge1dhbGxldENyZWF0ZX0gZnJvbSBcIi4vV2FsbGV0Q3JlYXRlXCI7XG5pbXBvcnQge0JhY2t1cENyZWF0ZSwgQmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4vQmFja3VwQnJhaW5rZXlcIjtcbmltcG9ydCB7Q2FyZH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jb25zdCBjb25uZWN0T2JqZWN0ID0ge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1dhbGxldE1hbmFnZXJTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cbn07XG5cbmNsYXNzIFdhbGxldE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldFRpdGxlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jcmVhdGVfd2FsbGV0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY3JlYXRlX2JhY2t1cFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9iYWNrdXAvcmVzdG9yZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5yZXN0b3JlX2JhY2t1cFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9iYWNrdXAvYnJhaW5rZXlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuYmFja3VwX2JyYWlua2V5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2RlbGV0ZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5kZWxldGVfd2FsbGV0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2NoYW5nZS1wYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jaGFuZ2VfcGFzc3dvcmRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvaW1wb3J0LWtleXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuaW1wb3J0X2tleXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY29uc29sZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiNDByZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5nZXRUaXRsZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2FsbGV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvY2hhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hhbmdlQWN0aXZlV2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9jaGFuZ2UtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRDaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvaW1wb3J0LWtleXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbXBvcnRLZXlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9icmFpbmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1dhbGxldENyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2FsbGV0RGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9iYWNrdXAvcmVzdG9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhY2t1cFJlc3RvcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWNrdXBDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2JhY2t1cC9icmFpbmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhY2t1cEJyYWlua2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9iYWxhbmNlLWNsYWltc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhbGFuY2VDbGFpbUFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbldhbGxldE1hbmFnZXIgPSBjb25uZWN0KFxuICAgIFdhbGxldE1hbmFnZXIsXG4gICAgY29ubmVjdE9iamVjdFxuKTtcblxuY2xhc3MgV2FsbGV0T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaGFzX3dhbGxldCA9ICEhdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcbiAgICAgICAgbGV0IGhhc193YWxsZXRzID0gdGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDE7XG4gICAgICAgIGxldCBjdXJyZW50X3dhbGxldCA9IHRoaXMucHJvcHMuY3VycmVudF93YWxsZXRcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmFjdGl2ZV93YWxsZXRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2N1cnJlbnRfd2FsbGV0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NoYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNoYW5nZV93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzX3Rvb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5EdW1teTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvaW1wb3J0LWtleXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5pbXBvcnRfa2V5c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RHVtbXk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWxhbmNlLWNsYWltc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1fbG9va3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCYWxhbmNlQ2xhaW1CeUFzc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JhbGFuY2VDbGFpbUJ5QXNzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jcmVhdGVfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9icmFpbmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhY2t1cF9icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9yZXN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc3RvcmVfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IDxiciAvPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY3JlYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5ld193YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2RlbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2FsbGV0T3B0aW9ucyA9IGNvbm5lY3QoXG4gICAgV2FsbGV0T3B0aW9ucyxcbiAgICBjb25uZWN0T2JqZWN0XG4pO1xuXG5jbGFzcyBDaGFuZ2VBY3RpdmVXYWxsZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBsZXQgY3VycmVudF93YWxsZXQgPSB0aGlzLnByb3BzLmN1cnJlbnRfd2FsbGV0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50X3dhbGxldH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLmN1cnJlbnRfd2FsbGV0ICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50X3dhbGxldDogbnAuY3VycmVudF93YWxsZXR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gV2FsbGV0TWFuYWdlclN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgc3RhdGUud2FsbGV0X25hbWVzLmZvckVhY2god2FsbGV0X25hbWUgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt3YWxsZXRfbmFtZX0gdmFsdWU9e3dhbGxldF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3dhbGxldF9uYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaXNfZGlydHkgPSB0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRfd2FsbGV0O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5hY3RpdmVfd2FsbGV0XCIgLz46XG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUud2FsbGV0X25hbWVzLmNvdW50KCkgPD0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3Mtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5ld193YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7aXNfZGlydHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmNoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Db25maXJtKCkge1xuICAgICAgICBXYWxsZXRBY3Rpb25zLnNldFdhbGxldCh0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0KTtcbiAgICAgICAgQmFja3VwQWN0aW9ucy5yZXNldCgpO1xuICAgICAgICAvLyBpZiAod2luZG93LmVsZWN0cm9uKSB7XG4gICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgIC8vICAgICB3aW5kb3cucmVtb3RlLmdldEN1cnJlbnRXaW5kb3coKS5yZWxvYWQoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50X3dhbGxldH0pO1xuICAgIH1cbn1cbkNoYW5nZUFjdGl2ZVdhbGxldCA9IGNvbm5lY3QoXG4gICAgQ2hhbmdlQWN0aXZlV2FsbGV0LFxuICAgIGNvbm5lY3RPYmplY3Rcbik7XG5cbmNsYXNzIFdhbGxldERlbGV0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZF93YWxsZXQ6IG51bGwsXG4gICAgICAgICAgICBjb25maXJtOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX29uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbmZpcm06IDAsXG4gICAgICAgICAgICBzZWxlY3RlZF93YWxsZXQ6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb25maXJtID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZGVsZXRlX2NvbmZpcm1fbGluZTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuZGVsZXRlX2NvbmZpcm1fbGluZTNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm0yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmU0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldFxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDEpIHtcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyID0gPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPntwbGFjZWhvbGRlcn08L29wdGlvbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICAvL1doZW4gZGlzYWJsZWQgYW5kIGxpc3Rfc2l6ZSB3YXMgMSwgY2hyb21lIHdhcyBza2lwcGluZyB0aGVcbiAgICAgICAgLy8gICAgIC8vcGxhY2Vob2xkZXIgYW5kIHNlbGVjdGluZyB0aGUgMXN0IGl0ZW0gYXV0b21hdGljYWxseSAobm90IHNob3duKVxuICAgICAgICAvLyAgICAgcGxhY2Vob2xkZXIgPSA8b3B0aW9uIHZhbHVlPVwiXCI+e3BsYWNlaG9sZGVyfTwvb3B0aW9uPjtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgb3B0aW9ucyA9IFtwbGFjZWhvbGRlcl07XG4gICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PVwic2VsZWN0X29wdGlvblwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNldHRpbmdzLmRlbGV0ZV9zZWxlY3RcIil9XG4gICAgICAgICAgICAgICAgJmhlbGxpcDtcbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb3BzLndhbGxldF9uYW1lcy5mb3JFYWNoKHdhbGxldF9uYW1lID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17d2FsbGV0X25hbWV9IHZhbHVlPXt3YWxsZXRfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHt3YWxsZXRfbmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGlzX2RpcnR5ID0gISF0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2stbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIiBzdHlsZT17e2JvcmRlckJvdHRvbTogMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3Mtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjAgYXV0b1wifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIG91dGxpbmVcIiwge2Rpc2FibGVkOiAhaXNfZGlydHl9KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm0uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YWxsZXQuZGVsZXRlX3dhbGxldF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIndhbGxldC5kZWxldGVfd2FsbGV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Db25maXJtKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25maXJtOiAxfSk7XG4gICAgfVxuXG4gICAgb25Db25maXJtMigpIHtcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5kZWxldGVXYWxsZXQodGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXQpO1xuICAgICAgICB0aGlzLl9vbkNhbmNlbCgpO1xuICAgICAgICAvLyB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICB9XG5cbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRfd2FsbGV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZF93YWxsZXR9KTtcbiAgICB9XG59XG5XYWxsZXREZWxldGUgPSBjb25uZWN0KFxuICAgIFdhbGxldERlbGV0ZSxcbiAgICBjb25uZWN0T2JqZWN0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRNYW5hZ2VyO1xuZXhwb3J0IHtXYWxsZXRPcHRpb25zLCBDaGFuZ2VBY3RpdmVXYWxsZXQsIFdhbGxldERlbGV0ZX07XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFBhc3N3b3JkQ29uZmlybSBmcm9tIFwiLi9QYXNzd29yZENvbmZpcm1cIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldENoYW5nZVBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzdWNjZXNzOiBmYWxzZX07XG4gICAgfVxuXG4gICAgb25BY2NlcHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB7b2xkX3Bhc3N3b3JkLCBuZXdfcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgV2FsbGV0RGIuY2hhbmdlUGFzc3dvcmQob2xkX3Bhc3N3b3JkLCBuZXdfcGFzc3dvcmQsIHRydWUgLyp1bmxvY2sqLylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5wYXNzd29yZF9jaGFuZ2Vfc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWNjZXNzOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvZ3JhbW1lciBvciBkYXRhYmFzZSBlcnJvciAoIHZhbGlkYXRpb24gbWlzc2VkIHNvbWV0aGluZz8gKVxuICAgICAgICAgICAgICAgIC8vIC4uIHRyYW5zbGF0aW9uIG1heSBiZSB1bm5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5wYXNzd29yZF9jaGFuZ2VfZmFpbHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25PbGRQYXNzd29yZChvbGRfcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b2xkX3Bhc3N3b3JkfSk7XG4gICAgfVxuICAgIG9uTmV3UGFzc3dvcmQobmV3X3Bhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld19wYXNzd29yZH0pO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZzLnB3ZC5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWFkeSA9ICEhdGhpcy5zdGF0ZS5uZXdfcGFzc3dvcmQ7XG4gICAgICAgIGxldCB7c3VjY2Vzc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwicFwiIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3N1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNoYW5nZV9iYWNrdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvYmFja3VwL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jcmVhdGVfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxXYWxsZXRQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJwd2RcIlxuICAgICAgICAgICAgICAgICAgICBvblZhbGlkPXt0aGlzLm9uT2xkUGFzc3dvcmQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXNzd29yZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWQ9e3RoaXMub25OZXdQYXNzd29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBvdXRsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFyZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWNjZXB0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRDb25maXJtPlxuICAgICAgICAgICAgICAgIDwvV2FsbGV0UGFzc3dvcmQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBXYWxsZXRQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgb25WYWxpZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUGFzc3dvcmQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB7c3VjY2Vzc30gPSBXYWxsZXREYi52YWxpZGF0ZVBhc3N3b3JkKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRydWUpO1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVyaWZpZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25WYWxpZCh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwibm90aWZpY2F0aW9ucy5pbnZhbGlkX3Bhc3N3b3JkXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIHN0YXRlW2V2ZW50LnRhcmdldC5pZF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25QYXNzd29yZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmV4aXN0aW5nX3Bhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5jdXJyZW50X3Bhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb3JtQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5zdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBSZXNldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsIHx8IDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5yZXNldFwiIC8+O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uUmVzZXQoKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFdhbGxldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0QWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCB7aGFzaH0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwQnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgYnJhaW5rZXk6IG51bGwsXG4gICAgICAgICAgICBpbnZhbGlkX3Bhc3N3b3JkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgIHZhciBicmFpbmtleV9iYWNrdXBfZGF0ZSA9IFdhbGxldERiLmdldFdhbGxldCgpLmJyYWlua2V5X2JhY2t1cF9kYXRlO1xuXG4gICAgICAgIHZhciBicmFpbmtleV9iYWNrdXBfdGltZSA9IGJyYWlua2V5X2JhY2t1cF9kYXRlID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfYmFja2VkX3VwXCIgLz46e1wiIFwifVxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWREYXRlIHZhbHVlPXticmFpbmtleV9iYWNrdXBfZGF0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY29sb3ItZXJyb3JcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfbm90X2JhY2tlZF91cFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZlcmlmaWVkKSB7XG4gICAgICAgICAgICB2YXIgc2hhMSA9IGhhc2hcbiAgICAgICAgICAgICAgICAuc2hhMSh0aGlzLnN0YXRlLmJyYWlua2V5KVxuICAgICAgICAgICAgICAgIC50b1N0cmluZyhcImhleFwiKVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPnt0aGlzLnN0YXRlLmJyYWlua2V5fTwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYTEgaGFzaCBvZiB0aGUgYnJhaW5rZXk6IHtzaGExfVxuICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHticmFpbmtleV9iYWNrdXBfdGltZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbnRlbnQgJiYgdGhpcy5zdGF0ZS5icmFpbmtleSkge1xuICAgICAgICAgICAgdmFyIHNoYTEgPSBoYXNoXG4gICAgICAgICAgICAgICAgLnNoYTEodGhpcy5zdGF0ZS5icmFpbmtleSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoXCJoZXhcIilcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+e3RoaXMuc3RhdGUuYnJhaW5rZXl9PC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYTEgaGFzaCBvZiB5b3VyIGJyYWlua2V5OiB7c2hhMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMCAyMHB4IDBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3cxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3cyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3czXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC52ZXJpZnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IFwiXCI7XG4gICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZW50ZXJfcGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QYXNzd29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmludmFsaWRfcGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+SW52YWxpZCBwYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5wd2Q0YnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyYWlua2V5X2JhY2t1cF90aW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnNob3dfYnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPntjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShicm5rZXkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVyaWZpZWQ6IHRydWV9KTtcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5zZXRCcmFpbmtleUJhY2t1cERhdGUoKTtcbiAgICB9XG5cbiAgICByZXNldChlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRJbml0aWFsU3RhdGUoKSk7XG4gICAgfVxuXG4gICAgb25CYWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB3YXNfbG9ja2VkID0gV2FsbGV0RGIuaXNMb2NrZWQoKTtcbiAgICAgICAgbGV0IHtzdWNjZXNzfSA9IFdhbGxldERiLnZhbGlkYXRlUGFzc3dvcmQodGhpcy5zdGF0ZS5wYXNzd29yZCwgdHJ1ZSk7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB2YXIgYnJhaW5rZXkgPSBXYWxsZXREYi5nZXRCcmFpbktleSgpO1xuICAgICAgICAgICAgaWYgKHdhc19sb2NrZWQpIFdhbGxldERiLm9uTG9jaygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJhaW5rZXl9KTtcbiAgICAgICAgfSBlbHNlIHRoaXMuc2V0U3RhdGUoe2ludmFsaWRfcGFzc3dvcmQ6IHRydWV9KTtcbiAgICB9XG5cbiAgICBvblBhc3N3b3JkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUsIGludmFsaWRfcGFzc3dvcmQ6IGZhbHNlfSk7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkE7QUFpQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbkRBO0FBREE7QUFQQTtBQURBO0FBREE7QUF3RUE7Ozs7QUEvR0E7QUFDQTtBQWdIQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQURBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQURBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFOQTtBQURBO0FBcENBO0FBMkRBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFyR0E7QUE2R0E7Ozs7QUFySEE7QUFDQTtBQXNIQTtBQUNBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBUkE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBYkE7QUFEQTtBQUxBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUF2Q0E7QUFtREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFsR0E7QUFDQTtBQW1HQTtBQUNBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWxCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFEQTtBQURBO0FBSkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUtBO0FBTkE7QUFKQTtBQWxCQTtBQWlDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWpJQTtBQUNBO0FBa0lBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFIQTtBQVFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFkQTtBQUpBO0FBREE7QUE2QkE7Ozs7QUFqR0E7QUFDQTtBQURBO0FBQ0E7QUFtR0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQXFCQTtBQUNBOzs7O0FBbEVBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQW1FQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXpCQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF2QkE7QUFKQTtBQWlDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQXZLQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==