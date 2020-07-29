(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[33],{

/***/ 3152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletOptions", function() { return WalletOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActiveWallet", function() { return ChangeActiveWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDelete", function() { return WalletDelete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1866);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1906);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1862);
/* harmony import */ var actions_BackupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2586);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2002);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExistingAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3153);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3162);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3154);
/* harmony import */ var _WalletChangePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3169);
/* harmony import */ var _WalletCreate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2702);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2683);
/* harmony import */ var _BackupBrainkey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3171);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item;
var Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option;

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
                    Option,
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
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        FormItem,
                        {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("wallet.active_wallet"),
                            className: "no-offset"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "unstyled-list" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    className: "with-dropdown",
                                    style: { borderBottom: 0 }
                                },
                                state.wallet_names.count() <= 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                                    className: "settings--input",
                                    defaultValue: this.state.current_wallet,
                                    disabled: true
                                }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                    {
                                        className: "settings--select",
                                        value: this.state.current_wallet,
                                        onChange: this.onChange.bind(this)
                                    },
                                    options
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                    { to: "/wallet/create" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                        { style: { marginRight: "16px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.new_wallet" })
                    )
                ),
                is_dirty ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                    { onClick: this.onConfirm.bind(this) },
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
        value: function onChange(value) {
            var current_wallet = value;
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
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                        {
                            onClick: this.onConfirm2.bind(this),
                            style: { marginRight: "16px" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "wallet.delete_confirm_line4",
                            name: this.state.selected_wallet
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                        { onClick: this._onCancel.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.cancel" })
                    )
                );
            }

            // this.props.current_wallet
            var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Option,
                {
                    key: "placeholder",
                    value: " ",
                    disabled: this.props.wallet_names.size > 1
                },
                "\xA0"
            );
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
                Option,
                { key: "select_option", value: "" },
                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("settings.delete_select"),
                "\u2026"
            ));
            this.props.wallet_names.forEach(function (wallet_name) {
                options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    Option,
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
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        FormItem,
                        {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("wallet.delete_wallet"),
                            className: "no-offset"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "unstyled-list" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    className: "with-dropdown",
                                    style: { borderBottom: 0 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                    {
                                        className: "settings--select",
                                        value: this.state.selected_wallet || "",
                                        style: { margin: "0 auto" },
                                        onChange: this.onChange.bind(this)
                                    },
                                    options
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                    {
                        disabled: !is_dirty,
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
        value: function onChange(selected_wallet) {
            this.setState({ selected_wallet: selected_wallet });
        }
    }]);

    return WalletDelete;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletDelete = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(WalletDelete, connectObject);

/* harmony default export */ __webpack_exports__["default"] = (WalletManager);


/***/ }),

/***/ 3169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1866);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(625);
/* harmony import */ var _PasswordConfirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3170);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item;

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

            stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].changePassword(old_password, new_password, true /*unlock*/).then(function () {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Notification"].success({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.password_change_success")
                });
                _this2.setState({ success: true });
                // window.history.back();
            }).catch(function (error) {
                // Programmer or database error ( validation missed something? )
                // .. translation may be unnecessary
                console.error(error);
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.password_change_failure", {
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
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"],
                            null,
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
                        _PasswordConfirm__WEBPACK_IMPORTED_MODULE_4__["default"],
                        {
                            onSubmit: this.onAccept.bind(this),
                            newPassword: true,
                            onValid: this.onNewPassword.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"],
                            {
                                type: "primary",
                                disabled: !ready,
                                htmlType: "submit",
                                style: { marginRight: "16px" },
                                onClick: this.onAccept.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.accept" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"],
                            { onClick: this._onCancel.bind(this) },
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

            var _WalletDb$validatePas = stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].validatePassword(this.state.password, true),
                success = _WalletDb$validatePas.success;

            if (success) {
                this.setState({ verified: true });
                this.props.onValid(this.state.password);
            } else {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.invalid_password")
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
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"],
                    { onSubmit: this.onPassword.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        FormItem,
                        {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("wallet.current_pass")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "section",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("wallet.current_pass"),
                                type: "password",
                                id: "password",
                                autoComplete: "current-password",
                                onChange: this.formChange.bind(this),
                                value: this.state.password
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"],
                            {
                                type: "primary",
                                onClick: this.onPassword.bind(this),
                                style: { marginTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.submit" })
                        )
                    )
                );
            }
        }
    }]);

    return WalletPassword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WalletPassword.propTypes = {
    onValid: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
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

/***/ 3170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(547);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Form"].Item;

var PasswordConfirm = function (_Component) {
    _inherits(PasswordConfirm, _Component);

    function PasswordConfirm() {
        _classCallCheck(this, PasswordConfirm);

        var _this = _possibleConstructorReturn(this, (PasswordConfirm.__proto__ || Object.getPrototypeOf(PasswordConfirm)).call(this));

        _this.state = {
            password: "",
            confirm: "",
            errors: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map(),
            // An empty form has no errors but is still invaid
            valid: false
        };
        return _this;
    }

    _createClass(PasswordConfirm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.refs.firstPassword) {
                this.refs.firstPassword.focus();
            }
        }
    }, {
        key: "formChange",
        value: function formChange(event) {
            var key = event.target.id === "current-password" ? "password" : "confirm";
            var state = {};
            state[key] = event.target.value;
            this.setState(state, this.validate);
        }
    }, {
        key: "validate",
        value: function validate() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var password = state.password,
                confirm = state.confirm;

            confirm = confirm.trim();
            password = password.trim();

            var errors = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map();
            // Don't report until typing begins
            if (password.length !== 0 && password.length < 8) errors = errors.set("password_length", "Password must be 8 characters or more");

            // Don't report it until the confirm is populated
            if (password !== "" && confirm !== "" && password !== confirm) errors = errors.set("password_match", "Passwords do not match");

            var valid = password.length >= 8 && password === confirm;
            this.setState({ errors: errors, valid: valid });
            this.props.onValid(valid ? password : null);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                password = _state.password,
                confirm = _state.confirm,
                errors = _state.errors;
            var newPassword = this.props.newPassword;

            var tabIndex = 1;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({ "has-error": errors.size }) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    FormItem,
                    {
                        label: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate(newPassword ? "wallet.new_password" : "wallet.password")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "password",
                            id: "current-password",
                            autoComplete: "current-password",
                            ref: "firstPassword",
                            onChange: this.formChange.bind(this),
                            value: password,
                            tabIndex: tabIndex++
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    FormItem,
                    {
                        label: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate(newPassword ? "wallet.new_confirm" : "wallet.confirm")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "password",
                            id: "new-password",
                            autoComplete: "new-password",
                            onChange: this.formChange.bind(this),
                            value: confirm,
                            tabIndex: tabIndex++
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: 10 } },
                    errors.get("password_match") || errors.get("password_length")
                ),
                this.props.children,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
            );
        }
    }]);

    return PasswordConfirm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PasswordConfirm.propTypes = {
    // Called everytime a valid password is provided and matches a confirmed password
    onValid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PasswordConfirm);

/***/ }),

/***/ 3171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2168);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1862);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(625);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
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
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                        {
                            type: "primary",
                            onClick: this.onComplete.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "wallet.verify" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                        { type: "default", onClick: this.reset.bind(this) },
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                            type: "password",
                            id: "password",
                            onChange: this.onPassword.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            brainkey_backup_time,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                type: "primary",
                                onClick: this.onSubmit.bind(this)
                            },
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
            } else {
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("notifications.invalid_password")
                });
            }
        }
    }, {
        key: "onPassword",
        value: function onPassword(event) {
            this.setState({ password: event.target.value });
        }
    }]);

    return BackupBrainkey;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BackupBrainkey);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LjBhNzQ2NmVmNGIxMDg4NzEwYjk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9XYWxsZXRNYW5hZ2VyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvV2FsbGV0L1Bhc3N3b3JkQ29uZmlybS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWNrdXBCcmFpbmtleS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFdhbGxldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0QWN0aW9uc1wiO1xyXG5pbXBvcnQgQmFja3VwQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWNrdXBBY3Rpb25zXCI7XHJcbmltcG9ydCBXYWxsZXRNYW5hZ2VyU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRNYW5hZ2VyU3RvcmVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7RXhpc3RpbmdBY2NvdW50T3B0aW9uc30gZnJvbSBcIi4vRXhpc3RpbmdBY2NvdW50XCI7XHJcbmltcG9ydCBJbXBvcnRLZXlzIGZyb20gXCIuL0ltcG9ydEtleXNcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi9CYWxhbmNlQ2xhaW1BY3RpdmVcIjtcclxuaW1wb3J0IFdhbGxldENoYW5nZVBhc3N3b3JkIGZyb20gXCIuL1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XHJcbmltcG9ydCB7V2FsbGV0Q3JlYXRlfSBmcm9tIFwiLi9XYWxsZXRDcmVhdGVcIjtcclxuaW1wb3J0IHtCYWNrdXBDcmVhdGUsIEJhY2t1cFJlc3RvcmV9IGZyb20gXCIuL0JhY2t1cFwiO1xyXG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4vQmFja3VwQnJhaW5rZXlcIjtcclxuaW1wb3J0IHtGb3JtLCBTZWxlY3QsIElucHV0LCBCdXR0b24sIENhcmR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5cclxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbV2FsbGV0TWFuYWdlclN0b3JlXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gV2FsbGV0TWFuYWdlclN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBXYWxsZXRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jcmVhdGVfd2FsbGV0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jcmVhdGVfYmFja3VwXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2JhY2t1cC9yZXN0b3JlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQucmVzdG9yZV9iYWNrdXBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvYmFja3VwL2JyYWlua2V5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuYmFja3VwX2JyYWlua2V5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2RlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2ltcG9ydC1rZXlzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuaW1wb3J0X2tleXNcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndhbGxldC5jb25zb2xlXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiNDByZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuZ2V0VGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hhbmdlQWN0aXZlV2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NoYW5nZS1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2FsbGV0Q2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvaW1wb3J0LWtleXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ltcG9ydEtleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYnJhaW5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXREZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFja3VwL3Jlc3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhY2t1cFJlc3RvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFja3VwL2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2JhY2t1cC9icmFpbmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwQnJhaW5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFsYW5jZS1jbGFpbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JhbGFuY2VDbGFpbUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuV2FsbGV0TWFuYWdlciA9IGNvbm5lY3QoXHJcbiAgICBXYWxsZXRNYW5hZ2VyLFxyXG4gICAgY29ubmVjdE9iamVjdFxyXG4pO1xyXG5cclxuY2xhc3MgV2FsbGV0T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGhhc193YWxsZXQgPSAhIXRoaXMucHJvcHMuY3VycmVudF93YWxsZXQ7XHJcbiAgICAgICAgbGV0IGhhc193YWxsZXRzID0gdGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDE7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldFxyXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMuY3VycmVudF93YWxsZXQudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWN0aXZlX3dhbGxldFwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2N1cnJlbnRfd2FsbGV0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzX3dhbGxldHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jaGFuZ2Vfd2FsbGV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzX3Rvb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RHVtbXk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2ltcG9ydC1rZXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkR1bW15PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhbGFuY2UtY2xhaW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1fbG9va3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCYWxhbmNlQ2xhaW1CeUFzc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFsYW5jZUNsYWltQnlBc3NldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX2JhY2t1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWNrdXAvYnJhaW5rZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYmFja3VwX2JyYWlua2V5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9yZXN0b3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5yZXN0b3JlX2JhY2t1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyA8YnIgLz4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9jcmVhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5ld193YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZGVsZXRlX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9jaGFuZ2UtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbldhbGxldE9wdGlvbnMgPSBjb25uZWN0KFxyXG4gICAgV2FsbGV0T3B0aW9ucyxcclxuICAgIGNvbm5lY3RPYmplY3RcclxuKTtcclxuXHJcbmNsYXNzIENoYW5nZUFjdGl2ZVdhbGxldCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50X3dhbGxldH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcclxuICAgICAgICBpZiAobnAuY3VycmVudF93YWxsZXQgIT09IHRoaXMuc3RhdGUuY3VycmVudF93YWxsZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXQ6IG5wLmN1cnJlbnRfd2FsbGV0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBXYWxsZXRNYW5hZ2VyU3RvcmUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICAgICAgICBzdGF0ZS53YWxsZXRfbmFtZXMuZm9yRWFjaCh3YWxsZXRfbmFtZSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXt3YWxsZXRfbmFtZX0gdmFsdWU9e3dhbGxldF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICB7d2FsbGV0X25hbWUudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaXNfZGlydHkgPSB0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRfd2FsbGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQuYWN0aXZlX3dhbGxldFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tb2Zmc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1widW5zdHlsZWQtbGlzdFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUud2FsbGV0X25hbWVzLmNvdW50KCkgPD0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY3JlYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjE2cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubmV3X3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAge2lzX2RpcnR5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNvbmZpcm0uYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuY3VycmVudF93YWxsZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5zZXRXYWxsZXQodGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCk7XHJcbiAgICAgICAgQmFja3VwQWN0aW9ucy5yZXNldCgpO1xyXG4gICAgICAgIC8vIGlmICh3aW5kb3cuZWxlY3Ryb24pIHtcclxuICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICAgIC8vICAgICB3aW5kb3cucmVtb3RlLmdldEN1cnJlbnRXaW5kb3coKS5yZWxvYWQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXR9KTtcclxuICAgIH1cclxufVxyXG5DaGFuZ2VBY3RpdmVXYWxsZXQgPSBjb25uZWN0KFxyXG4gICAgQ2hhbmdlQWN0aXZlV2FsbGV0LFxyXG4gICAgY29ubmVjdE9iamVjdFxyXG4pO1xyXG5cclxuY2xhc3MgV2FsbGV0RGVsZXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRfd2FsbGV0OiBudWxsLFxyXG4gICAgICAgICAgICBjb25maXJtOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfb25DYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbmZpcm06IDAsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkX3dhbGxldDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb25maXJtID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5kZWxldGVfY29uZmlybV9saW5lMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm0yLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTZweFwifX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuZGVsZXRlX2NvbmZpcm1fbGluZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY3VycmVudF93YWxsZXRcclxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSAoXHJcbiAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiIFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDF9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLndhbGxldF9uYW1lcy5zaXplID4gMSkge1xyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlciA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD57cGxhY2Vob2xkZXJ9PC9vcHRpb24+O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgLy9XaGVuIGRpc2FibGVkIGFuZCBsaXN0X3NpemUgd2FzIDEsIGNocm9tZSB3YXMgc2tpcHBpbmcgdGhlXHJcbiAgICAgICAgLy8gICAgIC8vcGxhY2Vob2xkZXIgYW5kIHNlbGVjdGluZyB0aGUgMXN0IGl0ZW0gYXV0b21hdGljYWxseSAobm90IHNob3duKVxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlciA9IDxvcHRpb24gdmFsdWU9XCJcIj57cGxhY2Vob2xkZXJ9PC9vcHRpb24+O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IFtwbGFjZWhvbGRlcl07XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICA8T3B0aW9uIGtleT1cInNlbGVjdF9vcHRpb25cIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNldHRpbmdzLmRlbGV0ZV9zZWxlY3RcIil9XHJcbiAgICAgICAgICAgICAgICAmaGVsbGlwO1xyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucHJvcHMud2FsbGV0X25hbWVzLmZvckVhY2god2FsbGV0X25hbWUgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17d2FsbGV0X25hbWV9IHZhbHVlPXt3YWxsZXRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3dhbGxldF9uYW1lLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaXNfZGlydHkgPSAhIXRoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW9mZnNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInVuc3R5bGVkLWxpc3RcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlckJvdHRvbTogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0IHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjAgYXV0b1wifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNfZGlydHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm0uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid2FsbGV0LmRlbGV0ZV93YWxsZXRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIndhbGxldC5kZWxldGVfd2FsbGV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db25maXJtKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZpcm06IDF9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm0yKCkge1xyXG4gICAgICAgIFdhbGxldEFjdGlvbnMuZGVsZXRlV2FsbGV0KHRoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0KTtcclxuICAgICAgICB0aGlzLl9vbkNhbmNlbCgpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHNlbGVjdGVkX3dhbGxldCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkX3dhbGxldH0pO1xyXG4gICAgfVxyXG59XHJcbldhbGxldERlbGV0ZSA9IGNvbm5lY3QoXHJcbiAgICBXYWxsZXREZWxldGUsXHJcbiAgICBjb25uZWN0T2JqZWN0XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRNYW5hZ2VyO1xyXG5leHBvcnQge1dhbGxldE9wdGlvbnMsIENoYW5nZUFjdGl2ZVdhbGxldCwgV2FsbGV0RGVsZXRlfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgUGFzc3dvcmRDb25maXJtIGZyb20gXCIuL1Bhc3N3b3JkQ29uZmlybVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtCdXR0b24sIEZvcm0sIElucHV0LCBOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldENoYW5nZVBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzdWNjZXNzOiBmYWxzZX07XG4gICAgfVxuXG4gICAgb25BY2NlcHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB7b2xkX3Bhc3N3b3JkLCBuZXdfcGFzc3dvcmR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgV2FsbGV0RGIuY2hhbmdlUGFzc3dvcmQob2xkX3Bhc3N3b3JkLCBuZXdfcGFzc3dvcmQsIHRydWUgLyp1bmxvY2sqLylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5wYXNzd29yZF9jaGFuZ2Vfc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWNjZXNzOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvZ3JhbW1lciBvciBkYXRhYmFzZSBlcnJvciAoIHZhbGlkYXRpb24gbWlzc2VkIHNvbWV0aGluZz8gKVxuICAgICAgICAgICAgICAgIC8vIC4uIHRyYW5zbGF0aW9uIG1heSBiZSB1bm5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5wYXNzd29yZF9jaGFuZ2VfZmFpbHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25PbGRQYXNzd29yZChvbGRfcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b2xkX3Bhc3N3b3JkfSk7XG4gICAgfVxuICAgIG9uTmV3UGFzc3dvcmQobmV3X3Bhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld19wYXNzd29yZH0pO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZzLnB3ZC5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWFkeSA9ICEhdGhpcy5zdGF0ZS5uZXdfcGFzc3dvcmQ7XG4gICAgICAgIGxldCB7c3VjY2Vzc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwicFwiIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3N1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNoYW5nZV9iYWNrdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvYmFja3VwL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX2JhY2t1cFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8V2FsbGV0UGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwicHdkXCJcbiAgICAgICAgICAgICAgICAgICAgb25WYWxpZD17dGhpcy5vbk9sZFBhc3N3b3JkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8UGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vbkFjY2VwdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkPXt0aGlzLm9uTmV3UGFzc3dvcmQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjY2VwdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5hY2NlcHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRDb25maXJtPlxuICAgICAgICAgICAgICAgIDwvV2FsbGV0UGFzc3dvcmQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBXYWxsZXRQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgb25WYWxpZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUGFzc3dvcmQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB7c3VjY2Vzc30gPSBXYWxsZXREYi52YWxpZGF0ZVBhc3N3b3JkKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRydWUpO1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVyaWZpZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25WYWxpZCh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwibm90aWZpY2F0aW9ucy5pbnZhbGlkX3Bhc3N3b3JkXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIHN0YXRlW2V2ZW50LnRhcmdldC5pZF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25QYXNzd29yZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmN1cnJlbnRfcGFzc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5jdXJyZW50X3Bhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZvcm1DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblBhc3N3b3JkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFJlc2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgfHwgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc2V0XCIgLz47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiIG9uQ2xpY2s9e3RoaXMub25SZXNldC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25SZXNldCgpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtGb3JtfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZENvbmZpcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8vIENhbGxlZCBldmVyeXRpbWUgYSB2YWxpZCBwYXNzd29yZCBpcyBwcm92aWRlZCBhbmQgbWF0Y2hlcyBhIGNvbmZpcm1lZCBwYXNzd29yZFxuICAgICAgICBvblZhbGlkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICBjb25maXJtOiBcIlwiLFxuICAgICAgICAgICAgZXJyb3JzOiBJbW11dGFibGUuTWFwKCksXG4gICAgICAgICAgICAvLyBBbiBlbXB0eSBmb3JtIGhhcyBubyBlcnJvcnMgYnV0IGlzIHN0aWxsIGludmFpZFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMuZmlyc3RQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLmZpcnN0UGFzc3dvcmQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IGtleSA9XG4gICAgICAgICAgICBldmVudC50YXJnZXQuaWQgPT09IFwiY3VycmVudC1wYXNzd29yZFwiID8gXCJwYXNzd29yZFwiIDogXCJjb25maXJtXCI7XG4gICAgICAgIGxldCBzdGF0ZSA9IHt9O1xuICAgICAgICBzdGF0ZVtrZXldID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCB0aGlzLnZhbGlkYXRlKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgbGV0IHtwYXNzd29yZCwgY29uZmlybX0gPSBzdGF0ZTtcbiAgICAgICAgY29uZmlybSA9IGNvbmZpcm0udHJpbSgpO1xuICAgICAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnRyaW0oKTtcblxuICAgICAgICBsZXQgZXJyb3JzID0gSW1tdXRhYmxlLk1hcCgpO1xuICAgICAgICAvLyBEb24ndCByZXBvcnQgdW50aWwgdHlwaW5nIGJlZ2luc1xuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoICE9PSAwICYmIHBhc3N3b3JkLmxlbmd0aCA8IDgpXG4gICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuc2V0KFxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfbGVuZ3RoXCIsXG4gICAgICAgICAgICAgICAgXCJQYXNzd29yZCBtdXN0IGJlIDggY2hhcmFjdGVycyBvciBtb3JlXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgLy8gRG9uJ3QgcmVwb3J0IGl0IHVudGlsIHRoZSBjb25maXJtIGlzIHBvcHVsYXRlZFxuICAgICAgICBpZiAocGFzc3dvcmQgIT09IFwiXCIgJiYgY29uZmlybSAhPT0gXCJcIiAmJiBwYXNzd29yZCAhPT0gY29uZmlybSlcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5zZXQoXCJwYXNzd29yZF9tYXRjaFwiLCBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG5cbiAgICAgICAgbGV0IHZhbGlkID0gcGFzc3dvcmQubGVuZ3RoID49IDggJiYgcGFzc3dvcmQgPT09IGNvbmZpcm07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9ycywgdmFsaWR9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbGlkKHZhbGlkID8gcGFzc3dvcmQgOiBudWxsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwYXNzd29yZCwgY29uZmlybSwgZXJyb3JzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7bmV3UGFzc3dvcmR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuYW1lKHtcImhhcy1lcnJvclwiOiBlcnJvcnMuc2l6ZX0pfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkID8gXCJ3YWxsZXQubmV3X3Bhc3N3b3JkXCIgOiBcIndhbGxldC5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaXJzdFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb3JtQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkID8gXCJ3YWxsZXQubmV3X2NvbmZpcm1cIiA6IFwid2FsbGV0LmNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZvcm1DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZ2V0KFwicGFzc3dvcmRfbWF0Y2hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5nZXQoXCJwYXNzd29yZF9sZW5ndGhcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0Zvcm1hdHRlZERhdGV9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IHtoYXNofSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Q2FyZCwgSW5wdXQsIEJ1dHRvbiwgTm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2t1cEJyYWlua2V5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIF9nZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgIGJyYWlua2V5OiBudWxsLFxuICAgICAgICAgICAgaW52YWxpZF9wYXNzd29yZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICB2YXIgYnJhaW5rZXlfYmFja3VwX2RhdGUgPSBXYWxsZXREYi5nZXRXYWxsZXQoKS5icmFpbmtleV9iYWNrdXBfZGF0ZTtcblxuICAgICAgICB2YXIgYnJhaW5rZXlfYmFja3VwX3RpbWUgPSBicmFpbmtleV9iYWNrdXBfZGF0ZSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X2JhY2tlZF91cFwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkRGF0ZSB2YWx1ZT17YnJhaW5rZXlfYmFja3VwX2RhdGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNvbG9yLWVycm9yXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X25vdF9iYWNrZWRfdXBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJpZmllZCkge1xuICAgICAgICAgICAgdmFyIHNoYTEgPSBoYXNoXG4gICAgICAgICAgICAgICAgLnNoYTEodGhpcy5zdGF0ZS5icmFpbmtleSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoXCJoZXhcIilcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD57dGhpcy5zdGF0ZS5icmFpbmtleX08L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGExIGhhc2ggb2YgdGhlIGJyYWlua2V5OiB7c2hhMX1cbiAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7YnJhaW5rZXlfYmFja3VwX3RpbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb250ZW50ICYmIHRoaXMuc3RhdGUuYnJhaW5rZXkpIHtcbiAgICAgICAgICAgIHZhciBzaGExID0gaGFzaFxuICAgICAgICAgICAgICAgIC5zaGExKHRoaXMuc3RhdGUuYnJhaW5rZXkpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPnt0aGlzLnN0YXRlLmJyYWlua2V5fTwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGExIGhhc2ggb2YgeW91ciBicmFpbmtleToge3NoYTF9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDAgMjBweCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV93MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV93MlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV93M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC52ZXJpZnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXtcImRlZmF1bHRcIn0gb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IFwiXCI7XG4gICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZW50ZXJfcGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QYXNzd29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyYWlua2V5X2JhY2t1cF90aW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc2hvd19icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGJybmtleSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2ZXJpZmllZDogdHJ1ZX0pO1xuICAgICAgICBXYWxsZXRBY3Rpb25zLnNldEJyYWlua2V5QmFja3VwRGF0ZSgpO1xuICAgIH1cblxuICAgIHJlc2V0KGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBvbkJhY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHdhc19sb2NrZWQgPSBXYWxsZXREYi5pc0xvY2tlZCgpO1xuICAgICAgICBsZXQge3N1Y2Nlc3N9ID0gV2FsbGV0RGIudmFsaWRhdGVQYXNzd29yZCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0cnVlKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHZhciBicmFpbmtleSA9IFdhbGxldERiLmdldEJyYWluS2V5KCk7XG4gICAgICAgICAgICBpZiAod2FzX2xvY2tlZCkgV2FsbGV0RGIub25Mb2NrKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmFpbmtleX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJub3RpZmljYXRpb25zLmludmFsaWRfcGFzc3dvcmRcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYXNzd29yZChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkE7QUFpQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbkRBO0FBREE7QUFQQTtBQURBO0FBREE7QUF3RUE7Ozs7QUEvR0E7QUFDQTtBQWdIQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQURBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQURBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFOQTtBQURBO0FBcENBO0FBMkRBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFyR0E7QUE2R0E7Ozs7QUFySEE7QUFDQTtBQXNIQTtBQUNBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVhBO0FBREE7QUFKQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFyQ0E7QUE4Q0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUE3RkE7QUFDQTtBQThGQTtBQUNBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWxCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUpBO0FBREE7QUFKQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFLQTtBQU5BO0FBSkE7QUF2QkE7QUFzQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBbklBO0FBQ0E7QUFvSUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUhBO0FBUUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWRBO0FBSkE7QUFEQTtBQTBCQTs7OztBQTlGQTtBQUNBO0FBREE7QUFDQTtBQWdHQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFmQTtBQURBO0FBMEJBO0FBQ0E7Ozs7QUF2RUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBd0VBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQVpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBTEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQUxBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBMUNBO0FBNkNBOzs7O0FBeEdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBekJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFkQTtBQUpBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFsS0E7QUFDQTtBQURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=