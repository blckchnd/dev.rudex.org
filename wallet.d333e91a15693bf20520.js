(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 2816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletOptions", function() { return WalletOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActiveWallet", function() { return ChangeActiveWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDelete", function() { return WalletDelete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(760);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2338);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1813);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2817);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2825);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2818);
/* harmony import */ var _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2832);
/* harmony import */ var _WalletCreate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2371);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2369);
/* harmony import */ var _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2833);
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
                            "div",
                            { className: "card" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "card-content" },
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
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "card-content" },
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
                        )
                    ),
                    has_wallet ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "card-content" },
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

/***/ 2832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(581);
/* harmony import */ var _PasswordConfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2373);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(562);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
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

            stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].changePassword(old_password, new_password, true /*unlock*/).then(function () {
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].success("Password changed");
                _this2.setState({ success: true });
                // window.history.back();
            }).catch(function (error) {
                // Programmer or database error ( validation missed something? )
                // .. translation may be unnecessary
                console.error(error);
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("Unable to change password: " + error);
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
                        _PasswordConfirm__WEBPACK_IMPORTED_MODULE_6__["default"],
                        {
                            onSubmit: this.onAccept.bind(this),
                            newPassword: true,
                            onValid: this.onNewPassword.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("button outline", {
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

            var _WalletDb$validatePas = stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].validatePassword(this.state.password, true),
                success = _WalletDb$validatePas.success;

            if (success) {
                this.setState({ verified: true });
                this.props.onValid(this.state.password);
            } else actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].error("Invalid Password");
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
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("wallet.current_pass"),
                            type: "password",
                            id: "current-password",
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
    onValid: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
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

/***/ 2833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1970);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(581);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(407);
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
                        "div",
                        { className: "card" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                this.state.brainkey
                            )
                        )
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
                        "div",
                        { className: "card" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "card-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                this.state.brainkey
                            )
                        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmQzMzNlOTFhMTU2OTNiZjIwNTIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9XYWxsZXRNYW5hZ2VyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhY2t1cEJyYWlua2V5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XG5pbXBvcnQgQmFja3VwQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWNrdXBBY3Rpb25zXCI7XG5pbXBvcnQgV2FsbGV0TWFuYWdlclN0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0TWFuYWdlclN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7RXhpc3RpbmdBY2NvdW50T3B0aW9uc30gZnJvbSBcIi4vRXhpc3RpbmdBY2NvdW50XCI7XG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuL0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IFdhbGxldENoYW5nZVBhc3N3b3JkIGZyb20gXCIuL1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XG5pbXBvcnQge1dhbGxldENyZWF0ZX0gZnJvbSBcIi4vV2FsbGV0Q3JlYXRlXCI7XG5pbXBvcnQge0JhY2t1cENyZWF0ZSwgQmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4vQmFja3VwQnJhaW5rZXlcIjtcblxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtXYWxsZXRNYW5hZ2VyU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBXYWxsZXRNYW5hZ2VyU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG59O1xuXG5jbGFzcyBXYWxsZXRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY3JlYXRlX3dhbGxldFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9iYWNrdXAvY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmNyZWF0ZV9iYWNrdXBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvYmFja3VwL3Jlc3RvcmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQucmVzdG9yZV9iYWNrdXBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvYmFja3VwL2JyYWlua2V5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmJhY2t1cF9icmFpbmtleVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9kZWxldGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuZGVsZXRlX3dhbGxldFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9jaGFuZ2UtcGFzc3dvcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2ltcG9ydC1rZXlzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmltcG9ydF9rZXlzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmNvbnNvbGVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIiBzdHlsZT17e21heFdpZHRoOiBcIjQwcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuZ2V0VGl0bGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1dhbGxldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoYW5nZUFjdGl2ZVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2FsbGV0Q2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2ltcG9ydC1rZXlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SW1wb3J0S2V5c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYnJhaW5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtFeGlzdGluZ0FjY291bnRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2RlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1dhbGxldERlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFja3VwL3Jlc3RvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWNrdXBSZXN0b3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9iYWNrdXAvY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9iYWNrdXAvYnJhaW5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWNrdXBCcmFpbmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFsYW5jZS1jbGFpbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWxhbmNlQ2xhaW1BY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XYWxsZXRNYW5hZ2VyID0gY29ubmVjdChcbiAgICBXYWxsZXRNYW5hZ2VyLFxuICAgIGNvbm5lY3RPYmplY3Rcbik7XG5cbmNsYXNzIFdhbGxldE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGhhc193YWxsZXQgPSAhIXRoaXMucHJvcHMuY3VycmVudF93YWxsZXQ7XG4gICAgICAgIGxldCBoYXNfd2FsbGV0cyA9IHRoaXMucHJvcHMud2FsbGV0X25hbWVzLnNpemUgPiAxO1xuICAgICAgICBsZXQgY3VycmVudF93YWxsZXQgPSB0aGlzLnByb3BzLmN1cnJlbnRfd2FsbGV0XG4gICAgICAgICAgICA/IHRoaXMucHJvcHMuY3VycmVudF93YWxsZXQudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWN0aXZlX3dhbGxldFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntjdXJyZW50X3dhbGxldH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9jaGFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNoYW5nZV93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzX3Rvb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkR1bW15PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9pbXBvcnQta2V5c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuaW1wb3J0X2tleXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIER1bW15XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhbGFuY2UtY2xhaW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltX2xvb2t1cFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8QmFsYW5jZUNsYWltQnlBc3NldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYmFsYW5jZV9jbGFpbXNcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWxhbmNlQ2xhaW1CeUFzc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWNrdXAvY3JlYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX2JhY2t1cFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWNrdXAvYnJhaW5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWNrdXBfYnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWNrdXAvcmVzdG9yZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5yZXN0b3JlX2JhY2t1cFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyA8YnIgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5uZXdfd2FsbGV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9kZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5kZWxldGVfd2FsbGV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NoYW5nZS1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNoYW5nZV9wYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cbldhbGxldE9wdGlvbnMgPSBjb25uZWN0KFxuICAgIFdhbGxldE9wdGlvbnMsXG4gICAgY29ubmVjdE9iamVjdFxuKTtcblxuY2xhc3MgQ2hhbmdlQWN0aXZlV2FsbGV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXR9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5jdXJyZW50X3dhbGxldCAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXQ6IG5wLmN1cnJlbnRfd2FsbGV0fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG4gICAgICAgIHN0YXRlLndhbGxldF9uYW1lcy5mb3JFYWNoKHdhbGxldF9uYW1lID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17d2FsbGV0X25hbWV9IHZhbHVlPXt3YWxsZXRfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHt3YWxsZXRfbmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGlzX2RpcnR5ID0gdGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWN0aXZlX3dhbGxldFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2l0aC1kcm9wZG93blwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLndhbGxldF9uYW1lcy5jb3VudCgpIDw9IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudF93YWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY3JlYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5uZXdfd2FsbGV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAge2lzX2RpcnR5ID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ29uZmlybS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5jaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuY3VycmVudF93YWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5zZXRXYWxsZXQodGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCk7XG4gICAgICAgIEJhY2t1cEFjdGlvbnMucmVzZXQoKTtcbiAgICAgICAgLy8gaWYgKHdpbmRvdy5lbGVjdHJvbikge1xuICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICAvLyAgICAgd2luZG93LnJlbW90ZS5nZXRDdXJyZW50V2luZG93KCkucmVsb2FkKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50X3dhbGxldCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXR9KTtcbiAgICB9XG59XG5DaGFuZ2VBY3RpdmVXYWxsZXQgPSBjb25uZWN0KFxuICAgIENoYW5nZUFjdGl2ZVdhbGxldCxcbiAgICBjb25uZWN0T2JqZWN0XG4pO1xuXG5jbGFzcyBXYWxsZXREZWxldGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRfd2FsbGV0OiBudWxsLFxuICAgICAgICAgICAgY29uZmlybTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb25maXJtOiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRfd2FsbGV0OiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29uZmlybSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmUxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmUzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtMi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5kZWxldGVfY29uZmlybV9saW5lNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DYW5jZWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY3VycmVudF93YWxsZXRcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgIGtleT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMud2FsbGV0X25hbWVzLnNpemUgPiAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMud2FsbGV0X25hbWVzLnNpemUgPiAxKSB7XG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlciA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD57cGxhY2Vob2xkZXJ9PC9vcHRpb24+O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgLy9XaGVuIGRpc2FibGVkIGFuZCBsaXN0X3NpemUgd2FzIDEsIGNocm9tZSB3YXMgc2tpcHBpbmcgdGhlXG4gICAgICAgIC8vICAgICAvL3BsYWNlaG9sZGVyIGFuZCBzZWxlY3RpbmcgdGhlIDFzdCBpdGVtIGF1dG9tYXRpY2FsbHkgKG5vdCBzaG93bilcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyID0gPG9wdGlvbiB2YWx1ZT1cIlwiPntwbGFjZWhvbGRlcn08L29wdGlvbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbcGxhY2Vob2xkZXJdO1xuICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICA8b3B0aW9uIGtleT1cInNlbGVjdF9vcHRpb25cIiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5kZWxldGVfc2VsZWN0XCIpfSZoZWxsaXA7XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuZm9yRWFjaCh3YWxsZXRfbmFtZSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3dhbGxldF9uYW1lfSB2YWx1ZT17d2FsbGV0X25hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7d2FsbGV0X25hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBpc19kaXJ0eSA9ICEhdGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5kZWxldGVfd2FsbGV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIwIGF1dG9cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBvdXRsaW5lXCIsIHtkaXNhYmxlZDogIWlzX2RpcnR5fSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid2FsbGV0LmRlbGV0ZV93YWxsZXRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3YWxsZXQuZGVsZXRlX3dhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmlybTogMX0pO1xuICAgIH1cblxuICAgIG9uQ29uZmlybTIoKSB7XG4gICAgICAgIFdhbGxldEFjdGlvbnMuZGVsZXRlV2FsbGV0KHRoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0KTtcbiAgICAgICAgdGhpcy5fb25DYW5jZWwoKTtcbiAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkX3dhbGxldCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRfd2FsbGV0fSk7XG4gICAgfVxufVxuV2FsbGV0RGVsZXRlID0gY29ubmVjdChcbiAgICBXYWxsZXREZWxldGUsXG4gICAgY29ubmVjdE9iamVjdFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0TWFuYWdlcjtcbmV4cG9ydCB7V2FsbGV0T3B0aW9ucywgQ2hhbmdlQWN0aXZlV2FsbGV0LCBXYWxsZXREZWxldGV9O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBub3RpZnkgZnJvbSBcImFjdGlvbnMvTm90aWZpY2F0aW9uQWN0aW9uc1wiO1xuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFBhc3N3b3JkQ29uZmlybSBmcm9tIFwiLi9QYXNzd29yZENvbmZpcm1cIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbGV0Q2hhbmdlUGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3N1Y2Nlc3M6IGZhbHNlfTtcbiAgICB9XG5cbiAgICBvbkFjY2VwdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHtvbGRfcGFzc3dvcmQsIG5ld19wYXNzd29yZH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBXYWxsZXREYi5jaGFuZ2VQYXNzd29yZChvbGRfcGFzc3dvcmQsIG5ld19wYXNzd29yZCwgdHJ1ZSAvKnVubG9jayovKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmeS5zdWNjZXNzKFwiUGFzc3dvcmQgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWNjZXNzOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvZ3JhbW1lciBvciBkYXRhYmFzZSBlcnJvciAoIHZhbGlkYXRpb24gbWlzc2VkIHNvbWV0aGluZz8gKVxuICAgICAgICAgICAgICAgIC8vIC4uIHRyYW5zbGF0aW9uIG1heSBiZSB1bm5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIG5vdGlmeS5lcnJvcihcIlVuYWJsZSB0byBjaGFuZ2UgcGFzc3dvcmQ6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25PbGRQYXNzd29yZChvbGRfcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b2xkX3Bhc3N3b3JkfSk7XG4gICAgfVxuICAgIG9uTmV3UGFzc3dvcmQobmV3X3Bhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld19wYXNzd29yZH0pO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZzLnB3ZC5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWFkeSA9ICEhdGhpcy5zdGF0ZS5uZXdfcGFzc3dvcmQ7XG4gICAgICAgIGxldCB7c3VjY2Vzc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwicFwiIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3N1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNoYW5nZV9iYWNrdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvYmFja3VwL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jcmVhdGVfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxXYWxsZXRQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJwd2RcIlxuICAgICAgICAgICAgICAgICAgICBvblZhbGlkPXt0aGlzLm9uT2xkUGFzc3dvcmQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXNzd29yZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWQ9e3RoaXMub25OZXdQYXNzd29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBvdXRsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFyZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWNjZXB0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRDb25maXJtPlxuICAgICAgICAgICAgICAgIDwvV2FsbGV0UGFzc3dvcmQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBXYWxsZXRQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgb25WYWxpZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUGFzc3dvcmQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB7c3VjY2Vzc30gPSBXYWxsZXREYi52YWxpZGF0ZVBhc3N3b3JkKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRydWUpO1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVyaWZpZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25WYWxpZCh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgfSBlbHNlIG5vdGlmeS5lcnJvcihcIkludmFsaWQgUGFzc3dvcmRcIik7XG4gICAgfVxuXG4gICAgZm9ybUNoYW5nZShldmVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgc3RhdGVbZXZlbnQudGFyZ2V0LmlkXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblBhc3N3b3JkLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZXhpc3RpbmdfcGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LmN1cnJlbnRfcGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm9ybUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUmVzZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCB8fCA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQucmVzZXRcIiAvPjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCIgb25DbGljaz17dGhpcy5vblJlc2V0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblJlc2V0KCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Rm9ybWF0dGVkRGF0ZX0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBXYWxsZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldEFjdGlvbnNcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQge2hhc2h9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrdXBCcmFpbmtleSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICBicmFpbmtleTogbnVsbCxcbiAgICAgICAgICAgIGludmFsaWRfcGFzc3dvcmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgdmFyIGJyYWlua2V5X2JhY2t1cF9kYXRlID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCkuYnJhaW5rZXlfYmFja3VwX2RhdGU7XG5cbiAgICAgICAgdmFyIGJyYWlua2V5X2JhY2t1cF90aW1lID0gYnJhaW5rZXlfYmFja3VwX2RhdGUgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV9iYWNrZWRfdXBcIiAvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGUgdmFsdWU9e2JyYWlua2V5X2JhY2t1cF9kYXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1lcnJvclwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5icmFpbmtleV9ub3RfYmFja2VkX3VwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHZhciBzaGExID0gaGFzaFxuICAgICAgICAgICAgICAgIC5zaGExKHRoaXMuc3RhdGUuYnJhaW5rZXkpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGhpcy5zdGF0ZS5icmFpbmtleX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhMSBoYXNoIG9mIHRoZSBicmFpbmtleToge3NoYTF9XG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge2JyYWlua2V5X2JhY2t1cF90aW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29udGVudCAmJiB0aGlzLnN0YXRlLmJyYWlua2V5KSB7XG4gICAgICAgICAgICB2YXIgc2hhMSA9IGhhc2hcbiAgICAgICAgICAgICAgICAuc2hhMSh0aGlzLnN0YXRlLmJyYWlua2V5KVxuICAgICAgICAgICAgICAgIC50b1N0cmluZyhcImhleFwiKVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0aGlzLnN0YXRlLmJyYWlua2V5fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhMSBoYXNoIG9mIHlvdXIgYnJhaW5rZXk6IHtzaGExfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwIDIwcHggMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ29tcGxldGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnZlcmlmeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZCA9IHRoaXMuc3RhdGUucGFzc3dvcmQgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gXCJcIjtcbiAgICAgICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5lbnRlcl9wYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblBhc3N3b3JkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW52YWxpZF9wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5JbnZhbGlkIHBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnB3ZDRicmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJhaW5rZXlfYmFja3VwX3RpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc2hvd19icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGJybmtleSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2ZXJpZmllZDogdHJ1ZX0pO1xuICAgICAgICBXYWxsZXRBY3Rpb25zLnNldEJyYWlua2V5QmFja3VwRGF0ZSgpO1xuICAgIH1cblxuICAgIHJlc2V0KGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBvbkJhY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHdhc19sb2NrZWQgPSBXYWxsZXREYi5pc0xvY2tlZCgpO1xuICAgICAgICBsZXQge3N1Y2Nlc3N9ID0gV2FsbGV0RGIudmFsaWRhdGVQYXNzd29yZCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0cnVlKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHZhciBicmFpbmtleSA9IFdhbGxldERiLmdldEJyYWluS2V5KCk7XG4gICAgICAgICAgICBpZiAod2FzX2xvY2tlZCkgV2FsbGV0RGIub25Mb2NrKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmFpbmtleX0pO1xuICAgICAgICB9IGVsc2UgdGhpcy5zZXRTdGF0ZSh7aW52YWxpZF9wYXNzd29yZDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIG9uUGFzc3dvcmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSwgaW52YWxpZF9wYXNzd29yZDogZmFsc2V9KTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBaUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQW5EQTtBQURBO0FBUEE7QUFEQTtBQURBO0FBd0VBOzs7O0FBL0dBO0FBQ0E7QUFnSEE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBUEE7QUFEQTtBQURBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQURBO0FBREE7QUFtQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVJBO0FBREE7QUFEQTtBQXhDQTtBQW1FQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBN0dBO0FBcUhBOzs7O0FBN0hBO0FBQ0E7QUE4SEE7QUFDQTtBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQVJBO0FBV0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQWJBO0FBREE7QUFMQTtBQStCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBdkNBO0FBbURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBbEdBO0FBQ0E7QUFtR0E7QUFDQTtBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFsQkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBREE7QUFEQTtBQUpBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFLQTtBQU5BO0FBSkE7QUFsQkE7QUFpQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFoSUE7QUFDQTtBQWlJQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBZEE7QUFKQTtBQURBO0FBNkJBOzs7O0FBdEZBO0FBQ0E7QUFEQTtBQUNBO0FBd0ZBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaEJBO0FBcUJBO0FBQ0E7Ozs7QUE5REE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBK0RBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQVpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUE3QkE7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBdkJBO0FBSkE7QUFpQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUEvS0E7QUFDQTtBQURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=