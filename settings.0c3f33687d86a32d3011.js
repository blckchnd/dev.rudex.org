(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 2816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2384);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1830);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2817);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SettingsContainer = function (_React$Component) {
    _inherits(SettingsContainer, _React$Component);

    function SettingsContainer() {
        _classCallCheck(this, SettingsContainer);

        return _possibleConstructorReturn(this, (SettingsContainer.__proto__ || Object.getPrototypeOf(SettingsContainer)).apply(this, arguments));
    }

    _createClass(SettingsContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().viewSettings;
                        },
                        defaults: function defaults() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().defaults;
                        },
                        localesObject: function localesObject() {
                            return stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().localesObject;
                        },
                        apiLatencies: function apiLatencies() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().apiLatencies;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], this.props)
            );
        }
    }]);

    return SettingsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettingsContainer);

/***/ }),

/***/ 2817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2818);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(712);
/* harmony import */ var _WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(846);
/* harmony import */ var _SettingsEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2819);
/* harmony import */ var _AccountsSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2820);
/* harmony import */ var _WalletSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2821);
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2840);
/* harmony import */ var _RestoreSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2841);
/* harmony import */ var _ResetSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2843);
/* harmony import */ var _BackupSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2844);
/* harmony import */ var _AccessSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1821);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(570);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings(props) {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

        var menuEntries = _this._getMenuEntries(props);
        var activeSetting = 0;

        var tabIndex = !!props.match.params.tab ? menuEntries.indexOf(props.match.params.tab) : props.viewSettings.get("activeSetting", 0);
        if (tabIndex >= 0) activeSetting = tabIndex;

        var general = ["locale", "unit", "browser_notifications", "showSettles", "walletLockTimeout", "themes", "showAssetPercent"];
        // disable that the user can change login method if only one is allowed
        if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getAllowedLogins"])().length > 1) general.push("passwordLogin");
        general.push("reset");

        _this.state = {
            isAddNodeModalVisible: false,
            isRemoveNodeModalVisible: false,
            removeNode: {
                name: null,
                url: null
            },
            apiServer: props.settings.get("apiServer"),
            activeSetting: activeSetting,
            menuEntries: menuEntries,
            settingEntries: {
                general: general,
                access: ["apiServer", "faucet_address"]
            }
        };

        _this.showAddNodeModal = _this.showAddNodeModal.bind(_this);
        _this.hideAddNodeModal = _this.hideAddNodeModal.bind(_this);
        _this.showRemoveNodeModal = _this.showRemoveNodeModal.bind(_this);
        _this.hideRemoveNodeModal = _this.hideRemoveNodeModal.bind(_this);

        _this._handleNotificationChange = _this._handleNotificationChange.bind(_this);
        return _this;
    }

    _createClass(Settings, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.match.params.tab !== this.props.match.params.tab) {
                this._onChangeMenu(this.props.match.params.tab);
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.settings.get("passwordLogin") !== this.props.settings.get("passwordLogin")) {
                var currentEntries = this._getMenuEntries(this.props);
                var menuEntries = this._getMenuEntries(np);
                var currentActive = currentEntries[this.state.activeSetting];
                var newActiveIndex = menuEntries.indexOf(currentActive);
                var newActive = menuEntries[newActiveIndex];
                this.setState({
                    menuEntries: menuEntries
                });
                if (newActiveIndex && newActiveIndex !== this.state.activeSetting) {
                    this.setState({
                        activeSetting: menuEntries.indexOf(currentActive)
                    });
                } else if (!newActive || this.state.activeSetting > menuEntries.length - 1) {
                    this.setState({
                        activeSetting: 0
                    });
                }
            }
        }
    }, {
        key: "showAddNodeModal",
        value: function showAddNodeModal() {
            this.setState({
                isAddNodeModalVisible: true
            });
        }
    }, {
        key: "hideAddNodeModal",
        value: function hideAddNodeModal() {
            this.setState({
                isAddNodeModalVisible: false
            });
        }
    }, {
        key: "showRemoveNodeModal",
        value: function showRemoveNodeModal(url, name) {
            this.setState({
                isRemoveNodeModalVisible: true,
                removeNode: {
                    url: url,
                    name: name
                }
            });
        }
    }, {
        key: "hideRemoveNodeModal",
        value: function hideRemoveNodeModal() {
            this.setState({
                isRemoveNodeModalVisible: false,
                removeNode: {
                    url: null,
                    name: null
                }
            });
        }
    }, {
        key: "_getMenuEntries",
        value: function _getMenuEntries(props) {
            if (props.deprecated) {
                return ["wallet", "backup"];
            }

            var menuEntries = [];

            menuEntries.push("general");
            if (!props.settings.get("passwordLogin")) menuEntries.push("wallet");
            menuEntries.push("accounts");
            menuEntries.push("password");
            if (!props.settings.get("passwordLogin")) menuEntries.push("backup");
            if (!props.settings.get("passwordLogin")) menuEntries.push("restore");
            menuEntries.push("access");

            if (Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().show) menuEntries.push("faucet_address");

            menuEntries.push("reset");

            return menuEntries;
        }
    }, {
        key: "triggerModal",
        value: function triggerModal(e) {
            var _refs$ws_modal;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            (_refs$ws_modal = this.refs.ws_modal).show.apply(_refs$ws_modal, [e].concat(args));
        }
    }, {
        key: "_handleNotificationChange",
        value: function _handleNotificationChange(path, value) {
            // use different change handler because checkbox doesn't work
            // normal with e.preventDefault()

            var updatedValue = Object(lodash_es_set__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.settings.get("browser_notifications"), path, value);

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                setting: "browser_notifications",
                value: updatedValue
            });
        }
    }, {
        key: "_onChangeSetting",
        value: function _onChangeSetting(setting, e) {
            e.preventDefault();

            var defaults = this.props.defaults;

            var value = null;

            function findEntry(targetValue, targetDefaults) {
                if (!targetDefaults) return targetValue;
                if (targetDefaults[0].translate) {
                    for (var i = 0; i < targetDefaults.length; i++) {
                        if (counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("settings." + targetDefaults[i].translate) === targetValue) {
                            return i;
                        }
                    }
                } else {
                    return targetDefaults.indexOf(targetValue);
                }
            }

            switch (setting) {
                case "locale":
                    var myLocale = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.getLocale();
                    if (e.target.value !== myLocale) {
                        actions_IntlActions__WEBPACK_IMPORTED_MODULE_3__["default"].switchLocale(e.target.value);
                        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                            setting: "locale",
                            value: e.target.value
                        });
                    }
                    break;

                case "themes":
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: "themes",
                        value: e.target.value
                    });
                    break;

                case "defaultMarkets":
                    break;

                case "walletLockTimeout":
                    var newValue = parseInt(e.target.value, 10);
                    if (isNaN(newValue)) newValue = 0;
                    if (!isNaN(newValue) && typeof newValue === "number") {
                        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                            setting: "walletLockTimeout",
                            value: newValue
                        });
                    }
                    break;

                case "inverseMarket":
                case "confirmMarketOrder":
                    value = findEntry(e.target.value, defaults[setting]) === 0; // USD/BTS is true, BTS/USD is false
                    break;

                case "apiServer":
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: "apiServer",
                        value: e.target.value
                    });
                    this.setState({
                        apiServer: e.target.value
                    });
                    break;

                case "showSettles":
                case "showAssetPercent":
                case "passwordLogin":
                    var reference = defaults[setting][0];
                    if (reference.translate) reference = reference.translate;
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: setting,
                        value: e.target.value === reference
                    });
                    break;

                case "unit":
                    var index = findEntry(e.target.value, defaults[setting]);
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({
                        setting: setting,
                        value: defaults[setting][index]
                    });
                    break;

                default:
                    value = findEntry(e.target.value, defaults[setting]);
                    break;
            }

            if (value !== null) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeSetting({ setting: setting, value: value });
            }
        }
    }, {
        key: "onReset",
        value: function onReset() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].clearSettings();
        }
    }, {
        key: "_redirectToEntry",
        value: function _redirectToEntry(entry) {
            this.props.history.push("/settings/" + entry);
        }
    }, {
        key: "_onChangeMenu",
        value: function _onChangeMenu(entry) {
            var index = this.state.menuEntries.indexOf(entry);
            this.setState({
                activeSetting: index
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({ activeSetting: index });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                settings = _props.settings,
                defaults = _props.defaults;
            var _state = this.state,
                menuEntries = _state.menuEntries,
                activeSetting = _state.activeSetting,
                settingEntries = _state.settingEntries;

            var entries = void 0;
            var activeEntry = menuEntries[activeSetting] || menuEntries[0];

            switch (activeEntry) {
                case "accounts":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountsSettings__WEBPACK_IMPORTED_MODULE_8__["default"], null);
                    break;

                case "wallet":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WalletSettings__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
                    break;

                case "password":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PasswordSettings__WEBPACK_IMPORTED_MODULE_10__["default"], null);
                    break;

                case "backup":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BackupSettings__WEBPACK_IMPORTED_MODULE_13__["default"], null);
                    break;

                case "restore":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RestoreSettings__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        passwordLogin: this.props.settings.get("passwordLogin")
                    });
                    break;

                case "access":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccessSettings__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        faucet: settings.get("faucet_address"),
                        nodes: defaults.apiServer,
                        onChange: this._onChangeSetting.bind(this),
                        showAddNodeModal: this.showAddNodeModal,
                        showRemoveNodeModal: this.showRemoveNodeModal
                    });
                    break;
                case "faucet_address":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        disabled: !Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().editable,
                        type: "text",
                        className: "settings-input",
                        defaultValue: settings.get("faucet_address"),
                        onChange: Object(_branding__WEBPACK_IMPORTED_MODULE_15__["getFaucet"])().editable ? this._onChangeSetting.bind(this, "faucet_address") : null
                    });
                    break;

                case "reset":
                    entries = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResetSettings__WEBPACK_IMPORTED_MODULE_12__["default"], null);
                    break;

                default:
                    entries = settingEntries[activeEntry].map(function (setting) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SettingsEntry__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
                            key: setting,
                            setting: setting,
                            settings: settings,
                            defaults: defaults[setting],
                            onChange: _this2._onChangeSetting.bind(_this2),
                            onNotificationChange: _this2._handleNotificationChange,
                            locales: _this2.props.localesObject
                        }, _this2.state));
                    });
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: this.props.deprecated ? "" : "grid-block" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block main-content margin-block wrap" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "grid-content shrink settings-menu",
                            style: { paddingRight: "2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            style: { paddingBottom: 10, paddingLeft: 10 },
                            component: "h3",
                            content: "header.settings",
                            className: "panel-bg-color"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "ul",
                            null,
                            menuEntries.map(function (entry, index) {
                                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "li",
                                    {
                                        className: index === activeSetting ? "active" : "",
                                        onClick: _this2._redirectToEntry.bind(_this2, entry),
                                        key: entry
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: "settings." + entry
                                    })
                                );
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "grid-content",
                            style: {
                                maxWidth: 1000
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block small-12 no-margin vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                component: "h3",
                                content: "settings." + menuEntries[activeSetting]
                            }),
                            activeEntry != "access" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                unsafe: true,
                                style: { paddingTop: 5, marginBottom: 30 },
                                content: "settings." + menuEntries[activeSetting] + "_text",
                                className: "panel-bg-color"
                            }),
                            entries
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WebsocketAddModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    removeNode: this.state.removeNode,
                    isAddNodeModalVisible: this.state.isAddNodeModalVisible,
                    isRemoveNodeModalVisible: this.state.isRemoveNodeModalVisible,
                    onAddNodeClose: this.hideAddNodeModal,
                    onRemoveNodeClose: this.hideRemoveNodeModal,
                    apis: defaults["apiServer"],
                    api: defaults["apiServer"].filter(function (a) {
                        return a.url === _this2.state.apiServer;
                    }).reduce(function (a, b) {
                        return b && b.url;
                    }, null),
                    changeConnection: function changeConnection(apiServer) {
                        _this2.setState({ apiServer: apiServer });
                    }
                })
            );
        }
    }]);

    return Settings;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ 2818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1858);


/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : Object(_baseSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, value);
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ 2819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2195);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1959);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notifyjs__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SettingsEntry = function (_React$Component) {
    _inherits(SettingsEntry, _React$Component);

    function SettingsEntry() {
        _classCallCheck(this, SettingsEntry);

        var _this = _possibleConstructorReturn(this, (SettingsEntry.__proto__ || Object.getPrototypeOf(SettingsEntry)).call(this));

        _this.state = {
            message: null
        };

        _this.handleNotificationChange = _this.handleNotificationChange.bind(_this);
        return _this;
    }

    _createClass(SettingsEntry, [{
        key: "_setMessage",
        value: function _setMessage(key) {
            var _this2 = this;

            this.setState({
                message: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(key)
            });

            this.timer = setTimeout(function () {
                _this2.setState({ message: null });
            }, 4000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: "handleNotificationChange",
        value: function handleNotificationChange(path) {
            var _this3 = this;

            return function (evt) {
                _this3.props.onNotificationChange(path, !!evt.target.checked);
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                defaults = _props.defaults,
                setting = _props.setting,
                settings = _props.settings;

            var options = void 0,
                optional = void 0,
                confirmButton = void 0,
                value = void 0,
                input = void 0,
                selected = settings.get(setting);
            var noHeader = false;
            var component = null;

            switch (setting) {
                case "locale":
                    value = selected;
                    options = defaults.map(function (entry) {
                        var translationKey = "languages." + entry;
                        var value = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(translationKey);

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            { key: entry, value: entry },
                            value
                        );
                    });

                    break;

                case "themes":
                    value = selected;
                    options = defaults.map(function (entry) {
                        var translationKey = "settings." + entry;
                        var value = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(translationKey);

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "option",
                            { key: entry, value: entry },
                            value
                        );
                    });

                    break;

                case "browser_notifications":
                    value = selected;

                    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "settings--notifications" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "settings--notifications--group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "settings--notifications--item" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    id: "browser_notifications.allow",
                                    checked: !!value.allow,
                                    onChange: this.handleNotificationChange("allow")
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { htmlFor: "browser_notifications.allow" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.browser_notifications_allow")
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "settings--notifications--group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "settings--notifications--item" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "checkbox",
                                        id: "browser_notifications.additional.transferToMe",
                                        disabled: !value.allow,
                                        checked: !!value.additional.transferToMe,
                                        onChange: this.handleNotificationChange("additional.transferToMe")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { htmlFor: "browser_notifications.allow" },
                                        counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.browser_notifications_additional_transfer_to_me")
                                    )
                                )
                            )
                        ),
                        !!value.allow && notifyjs__WEBPACK_IMPORTED_MODULE_5___default.a.needsPermission && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                href: "https://goo.gl/zZ7NHY",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "div",
                                className: "settings--notifications--no-browser-support",
                                content: "settings.browser_notifications_disabled_by_browser_notify"
                            })
                        )
                    );

                    break;

                case "defaultMarkets":
                    options = null;
                    value = null;
                    break;

                case "walletLockTimeout":
                    value = selected;
                    input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        type: "text",
                        className: "settings-input",
                        value: selected,
                        onChange: this.props.onChange.bind(this, setting)
                    });
                    break;

                default:
                    if (typeof selected === "number") {
                        value = defaults[selected];
                    } else if (typeof selected === "boolean") {
                        if (selected) {
                            value = defaults[0];
                        } else {
                            value = defaults[1];
                        }
                    } else if (typeof selected === "string") {
                        value = selected;
                    }

                    if (defaults) {
                        options = defaults.map(function (entry) {
                            var option = entry.translate ? counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings." + entry.translate) : entry;
                            if (setting === "unit") {
                                option = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: entry });
                            }
                            var key = entry.translate ? entry.translate : entry;
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "option",
                                {
                                    value: entry.translate ? entry.translate : entry,
                                    key: key
                                },
                                option
                            );
                        });
                    } else {
                        input = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            className: "settings-input",
                            type: "text",
                            defaultValue: value,
                            onBlur: this.props.onChange.bind(this, setting)
                        });
                    }
                    break;
            }
            if (typeof value !== "number" && !value && !options) return null;

            if (value && value.translate) {
                value = value.translate;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                { className: "block-list no-border-bottom" },
                noHeader ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "header",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        style: {
                            fontWeight: "normal",
                            fontFamily: "Roboto-Medium, arial, sans-serif",
                            fontStyle: "normal"
                        },
                        content: "settings." + setting
                    })
                ),
                options ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        { className: "with-dropdown" },
                        optional,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "select",
                            {
                                value: value,
                                className: "settings-select",
                                onChange: this.props.onChange.bind(this, setting)
                            },
                            options
                        ),
                        confirmButton
                    )
                ) : null,
                input ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        null,
                        input
                    )
                ) : null,
                component ? component : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "facolor-success" },
                    this.state.message
                )
            );
        }
    }]);

    return SettingsEntry;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettingsEntry);

/***/ }),

/***/ 2820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(726);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(550);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(566);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(770);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(568);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AccountsSettings = function (_React$Component) {
    _inherits(AccountsSettings, _React$Component);

    function AccountsSettings() {
        _classCallCheck(this, AccountsSettings);

        return _possibleConstructorReturn(this, (AccountsSettings.__proto__ || Object.getPrototypeOf(AccountsSettings)).apply(this, arguments));
    }

    _createClass(AccountsSettings, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps.myAccounts, this.props.myAccounts) || nextProps.hiddenAccounts !== this.props.hiddenAccounts;
        }
    }, {
        key: "onToggleHide",
        value: function onToggleHide(account, hide, e) {
            e.preventDefault();
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__["default"].toggleHideAccount(account, hide);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                myAccounts = _props.myAccounts,
                hiddenAccounts = _props.hiddenAccounts;


            var accounts = hiddenAccounts.toArray().concat(myAccounts).sort();

            if (!accounts.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "settings.no_accounts" })
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "table",
                { className: "table" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    null,
                    accounts.map(function (account) {
                        var isIgnored = hiddenAccounts.has(account);
                        var hideLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                onClick: isIgnored ? _this2.onToggleHide.bind(_this2, account, false) : _this2.onToggleHide.bind(_this2, account, true)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                content: "account." + (isIgnored ? "unignore" : "ignore")
                            })
                        );

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            { key: account },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                account
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    {
                                        to: "/account/" + account + "/permissions"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "settings.view_keys" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                hideLink
                            )
                        );
                    })
                )
            );
        }
    }]);

    return AccountsSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountsSettings = Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(AccountsSettings, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            myAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getMyAccounts(),
            hiddenAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myHiddenAccounts
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (AccountsSettings);

/***/ }),

/***/ 2821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2822);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(591);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var WalletSettings = function (_React$Component) {
    _inherits(WalletSettings, _React$Component);

    function WalletSettings() {
        _classCallCheck(this, WalletSettings);

        var _this = _possibleConstructorReturn(this, (WalletSettings.__proto__ || Object.getPrototypeOf(WalletSettings)).call(this));

        _this.state = {
            lookupActive: false,
            resetMessage: null
        };
        return _this;
    }

    _createClass(WalletSettings, [{
        key: "onLookup",
        value: function onLookup() {
            this.setState({
                lookupActive: true
            });
        }
    }, {
        key: "onResetBrainkeySequence",
        value: function onResetBrainkeySequence() {
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].resetBrainKeySequence();
            this.setState({
                resetMessage: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("wallet.brainkey_reset_success")
            });
        }
    }, {
        key: "render",
        value: function render() {
            var lookupActive = this.state.lookupActive;
            var deprecated = this.props.deprecated;


            if (deprecated) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["ChangeActiveWallet"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["WalletDelete"], null)
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["ChangeActiveWallet"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__["WalletDelete"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { style: { padding: "15px 0" }, className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.balance_claims" }),
                        ":"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "settings.lookup_text" }),
                    ":"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "button outline",
                        onClick: this.onLookup.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.balance_claim_lookup" })
                ),
                lookupActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { style: { padding: "15px 0" }, className: "block-list" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.brainkey_seq_reset" }),
                        ":"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            unsafe: true,
                            content: "wallet.brainkey_seq_reset_text"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "button outline",
                            onClick: this.onResetBrainkeySequence.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "wallet.brainkey_seq_reset_button" })
                    ),
                    this.state.resetMessage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        { style: { paddingTop: 10 }, className: "facolor-success" },
                        this.state.resetMessage
                    ) : null
                )
            );
        }
    }]);

    return WalletSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WalletSettings);

/***/ }),

/***/ 2840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2838);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PasswordSettings = function (_React$Component) {
    _inherits(PasswordSettings, _React$Component);

    function PasswordSettings() {
        _classCallCheck(this, PasswordSettings);

        return _possibleConstructorReturn(this, (PasswordSettings.__proto__ || Object.getPrototypeOf(PasswordSettings)).apply(this, arguments));
    }

    _createClass(PasswordSettings, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"], null);
        }
    }]);

    return PasswordSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PasswordSettings);

/***/ }),

/***/ 2841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2379);
/* harmony import */ var _Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2831);
/* harmony import */ var _Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2381);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(712);
/* harmony import */ var _RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2842);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var RestoreSettings = function (_React$Component) {
    _inherits(RestoreSettings, _React$Component);

    function RestoreSettings() {
        _classCallCheck(this, RestoreSettings);

        var _this = _possibleConstructorReturn(this, (RestoreSettings.__proto__ || Object.getPrototypeOf(RestoreSettings)).call(this));

        _this.state = {
            restoreType: 0,
            types: ["backup", "key", "legacy", "brainkey", "favorites"]
        };
        return _this;
    }

    _createClass(RestoreSettings, [{
        key: "_setWalletMode",
        value: function _setWalletMode() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeSetting({
                setting: "passwordLogin",
                value: false
            });
        }
    }, {
        key: "_changeType",
        value: function _changeType(e) {
            this.setState({
                restoreType: this.state.types.indexOf(e.target.value)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var passwordLogin = this.props.passwordLogin;


            if (passwordLogin) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "settings.wallet_required",
                        component: "h4"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        { className: "dark-text-color" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.wallet_required_text" }),
                        ":"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button", onClick: this._setWalletMode },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.enable_wallet" })
                    )
                );
            }
            var _state = this.state,
                types = _state.types,
                restoreType = _state.restoreType;

            var options = types.map(function (type) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: type, value: type },
                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("settings.backup_" + type),
                    " "
                );
            });

            var content = void 0;

            switch (types[restoreType]) {
                case "backup":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__["BackupRestore"], null)
                    );
                    break;

                case "brainkey":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { maxWidth: "40rem", paddingBottom: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.restore_brainkey_text" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__["CreateWalletFromBrainkey"], { nested: true })
                    );
                    break;

                case "favorites":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__["default"], null)
                    );
                    break;

                default:
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__["default"], { privateKey: restoreType === 1 });
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "select",
                    {
                        onChange: this._changeType.bind(this),
                        className: "bts-select",
                        value: types[restoreType]
                    },
                    options
                ),
                content
            );
        }
    }]);

    return RestoreSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestoreSettings);

/***/ }),

/***/ 2842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(712);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(590);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var RestoreFavorites = function (_React$Component) {
    _inherits(RestoreFavorites, _React$Component);

    function RestoreFavorites(props) {
        _classCallCheck(this, RestoreFavorites);

        var _this = _possibleConstructorReturn(this, (RestoreFavorites.__proto__ || Object.getPrototypeOf(RestoreFavorites)).call(this, props));

        _this.state = {
            json: null,
            error: null
        };
        return _this;
    }

    _createClass(RestoreFavorites, [{
        key: "upload",
        value: function upload(evt) {
            var _this2 = this;

            this.setState({ error: false, json: null });

            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                var contents = evt.target.result;

                try {
                    var json = JSON.parse(contents);

                    for (var key in json) {
                        var market = json[key];
                        var quote = market.quote,
                            base = market.base;


                        if (!quote || !base) throw new Error("Cannot parse json data.");
                    }

                    _this2.setState({ json: json });
                    // this.finish();
                } catch (message) {
                    _this2.setState({ error: true });
                }
            };
            reader.readAsText(file);
        }
    }, {
        key: "finish",
        value: function finish() {
            var json = this.state.json;


            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].clearStarredMarkets();

            for (var key in json) {
                var market = json[key];
                var quote = market.quote,
                    base = market.base;


                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].addStarMarket(quote, base);
            }

            actions_NotificationActions__WEBPACK_IMPORTED_MODULE_3__["default"].addNotification({
                message: counterpart__WEBPACK_IMPORTED_MODULE_4___default()("settings.backup_favorites_success"),
                level: "success",
                autoDismiss: 2
            });
        }
    }, {
        key: "render",
        value: function render() {
            var state = this.state;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                    type: "file",
                    id: "file_input",
                    accept: ".json",
                    style: {
                        border: "solid",
                        marginBottom: 15
                    },
                    onChange: this.upload.bind(this)
                }),
                state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h5",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.backup_favorites_error" })
                ),
                state.json && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            onClick: this.finish.bind(this),
                            className: "button success"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.backup_favorites_finish" })
                    )
                )
            );
        }
    }]);

    return RestoreFavorites;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RestoreFavorites);

/***/ }),

/***/ 2843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ResetSettings = function (_React$Component) {
    _inherits(ResetSettings, _React$Component);

    function ResetSettings() {
        _classCallCheck(this, ResetSettings);

        var _this = _possibleConstructorReturn(this, (ResetSettings.__proto__ || Object.getPrototypeOf(ResetSettings)).call(this));

        _this.state = {
            message: null
        };
        return _this;
    }

    _createClass(ResetSettings, [{
        key: "_setMessage",
        value: function _setMessage(key) {
            var _this2 = this;

            this.setState({
                message: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(key)
            });

            this.timer = setTimeout(function () {
                _this2.setState({ message: null });
            }, 4000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                { className: "block-list no-border-bottom" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "header",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "span",
                        style: {
                            fontWeight: "normal",
                            fontFamily: "Roboto-Medium, arial, sans-serif",
                            fontStyle: "normal"
                        },
                        content: "settings.reset_text_description",
                        generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.general"),
                        "with": {
                            generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.general"),
                            accessName: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.access")
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: { height: 60, width: "100%", paddingTop: 20 },
                        className: "button",
                        onClick: function onClick() {
                            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].clearSettings().then(function () {
                                _this3._setMessage("settings.restore_default_success");
                            });
                        }
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.reset")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "facolor-success",
                        style: { marginTop: "20px", height: "18px" }
                    },
                    this.state.message
                )
            );
        }
    }]);

    return ResetSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResetSettings);

/***/ }),

/***/ 2844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2379);
/* harmony import */ var _Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2839);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackupFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2845);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BackupSettings = function (_React$Component) {
    _inherits(BackupSettings, _React$Component);

    function BackupSettings() {
        _classCallCheck(this, BackupSettings);

        var _this = _possibleConstructorReturn(this, (BackupSettings.__proto__ || Object.getPrototypeOf(BackupSettings)).call(this));

        _this.state = {
            restoreType: 0,
            types: ["backup", "brainkey", "favorites"]
        };
        return _this;
    }

    _createClass(BackupSettings, [{
        key: "_changeType",
        value: function _changeType(e) {
            this.setState({
                restoreType: this.state.types.indexOf(e.target.value)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                types = _state.types,
                restoreType = _state.restoreType;

            var options = types.map(function (type) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: type, value: type },
                    counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("settings.backupcreate_" + type),
                    " "
                );
            });

            var content = void 0;

            switch (types[restoreType]) {
                case "backup":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__["BackupCreate"], null);
                    break;

                case "brainkey":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__["default"], null);
                    break;

                case "favorites":
                    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackupFavorites__WEBPACK_IMPORTED_MODULE_4__["default"], null);
                    break;

                default:
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "select",
                    {
                        onChange: this._changeType.bind(this),
                        className: "bts-select",
                        value: types[restoreType]
                    },
                    options
                ),
                content
            );
        }
    }]);

    return BackupSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BackupSettings);

/***/ }),

/***/ 2845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2353);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(770);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(711);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BackupFavorites = function (_React$Component) {
    _inherits(BackupFavorites, _React$Component);

    function BackupFavorites() {
        _classCallCheck(this, BackupFavorites);

        return _possibleConstructorReturn(this, (BackupFavorites.__proto__ || Object.getPrototypeOf(BackupFavorites)).apply(this, arguments));
    }

    _createClass(BackupFavorites, [{
        key: "makeBackup",
        value: function makeBackup() {
            var data = this.props.starredMarkets.toJS();

            var blob = new Blob([JSON.stringify(data)], {
                type: "application/json; charset=us-ascii"
            });

            Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "favorites.json");
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "settings.backup_favoritestext" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "button",
                    {
                        onClick: this.makeBackup.bind(this),
                        className: "button success"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "settings.backup_favoritesbtn" })
                )
            );
        }
    }]);

    return BackupFavorites;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(BackupFavorites, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuMGMzZjMzNjg3ZDg2YTMyZDMwMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3NDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9TZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9zZXQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzRW50cnkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9BY2NvdW50c1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvV2FsbGV0U2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9QYXNzd29yZFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvUmVzdG9yZVNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvUmVzdG9yZUZhdm9yaXRlcy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Jlc2V0U2V0dGluZ3MuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9CYWNrdXBTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0JhY2t1cEZhdm9yaXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgSW50bFN0b3JlIGZyb20gXCJzdG9yZXMvSW50bFN0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcblxuY2xhc3MgU2V0dGluZ3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tTZXR0aW5nc1N0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzT2JqZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSW50bFN0b3JlLmdldFN0YXRlKCkubG9jYWxlc09iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXBpTGF0ZW5jaWVzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmFwaUxhdGVuY2llcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNldHRpbmdzIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBJbnRsQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9JbnRsQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXZWJzb2NrZXRBZGRNb2RhbCBmcm9tIFwiLi9XZWJzb2NrZXRBZGRNb2RhbFwiO1xuaW1wb3J0IFNldHRpbmdzRW50cnkgZnJvbSBcIi4vU2V0dGluZ3NFbnRyeVwiO1xuaW1wb3J0IEFjY291bnRzU2V0dGluZ3MgZnJvbSBcIi4vQWNjb3VudHNTZXR0aW5nc1wiO1xuaW1wb3J0IFdhbGxldFNldHRpbmdzIGZyb20gXCIuL1dhbGxldFNldHRpbmdzXCI7XG5pbXBvcnQgUGFzc3dvcmRTZXR0aW5ncyBmcm9tIFwiLi9QYXNzd29yZFNldHRpbmdzXCI7XG5pbXBvcnQgUmVzdG9yZVNldHRpbmdzIGZyb20gXCIuL1Jlc3RvcmVTZXR0aW5nc1wiO1xuaW1wb3J0IFJlc2V0U2V0dGluZ3MgZnJvbSBcIi4vUmVzZXRTZXR0aW5nc1wiO1xuaW1wb3J0IEJhY2t1cFNldHRpbmdzIGZyb20gXCIuL0JhY2t1cFNldHRpbmdzXCI7XG5pbXBvcnQgQWNjZXNzU2V0dGluZ3MgZnJvbSBcIi4vQWNjZXNzU2V0dGluZ3NcIjtcbmltcG9ydCB7c2V0fSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge2dldEFsbG93ZWRMb2dpbnMsIGdldEZhdWNldH0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgbWVudUVudHJpZXMgPSB0aGlzLl9nZXRNZW51RW50cmllcyhwcm9wcyk7XG4gICAgICAgIGxldCBhY3RpdmVTZXR0aW5nID0gMDtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAhIXByb3BzLm1hdGNoLnBhcmFtcy50YWJcbiAgICAgICAgICAgID8gbWVudUVudHJpZXMuaW5kZXhPZihwcm9wcy5tYXRjaC5wYXJhbXMudGFiKVxuICAgICAgICAgICAgOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2V0dGluZ1wiLCAwKTtcbiAgICAgICAgaWYgKHRhYkluZGV4ID49IDApIGFjdGl2ZVNldHRpbmcgPSB0YWJJbmRleDtcblxuICAgICAgICBsZXQgZ2VuZXJhbCA9IFtcbiAgICAgICAgICAgIFwibG9jYWxlXCIsXG4gICAgICAgICAgICBcInVuaXRcIixcbiAgICAgICAgICAgIFwiYnJvd3Nlcl9ub3RpZmljYXRpb25zXCIsXG4gICAgICAgICAgICBcInNob3dTZXR0bGVzXCIsXG4gICAgICAgICAgICBcIndhbGxldExvY2tUaW1lb3V0XCIsXG4gICAgICAgICAgICBcInRoZW1lc1wiLFxuICAgICAgICAgICAgXCJzaG93QXNzZXRQZXJjZW50XCJcbiAgICAgICAgXTtcbiAgICAgICAgLy8gZGlzYWJsZSB0aGF0IHRoZSB1c2VyIGNhbiBjaGFuZ2UgbG9naW4gbWV0aG9kIGlmIG9ubHkgb25lIGlzIGFsbG93ZWRcbiAgICAgICAgaWYgKGdldEFsbG93ZWRMb2dpbnMoKS5sZW5ndGggPiAxKSBnZW5lcmFsLnB1c2goXCJwYXNzd29yZExvZ2luXCIpO1xuICAgICAgICBnZW5lcmFsLnB1c2goXCJyZXNldFwiKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNBZGROb2RlTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcGlTZXJ2ZXI6IHByb3BzLnNldHRpbmdzLmdldChcImFwaVNlcnZlclwiKSxcbiAgICAgICAgICAgIGFjdGl2ZVNldHRpbmcsXG4gICAgICAgICAgICBtZW51RW50cmllcyxcbiAgICAgICAgICAgIHNldHRpbmdFbnRyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhbDogZ2VuZXJhbCxcbiAgICAgICAgICAgICAgICBhY2Nlc3M6IFtcImFwaVNlcnZlclwiLCBcImZhdWNldF9hZGRyZXNzXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zaG93QWRkTm9kZU1vZGFsID0gdGhpcy5zaG93QWRkTm9kZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUFkZE5vZGVNb2RhbCA9IHRoaXMuaGlkZUFkZE5vZGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwgPSB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsID0gdGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLm1hdGNoLnBhcmFtcy50YWIgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRhYikge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VNZW51KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRhYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikgIT09XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RW50cmllcyA9IHRoaXMuX2dldE1lbnVFbnRyaWVzKHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgY29uc3QgbWVudUVudHJpZXMgPSB0aGlzLl9nZXRNZW51RW50cmllcyhucCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gY3VycmVudEVudHJpZXNbdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGV4ID0gbWVudUVudHJpZXMuaW5kZXhPZihjdXJyZW50QWN0aXZlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FjdGl2ZSA9IG1lbnVFbnRyaWVzW25ld0FjdGl2ZUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lbnVFbnRyaWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChuZXdBY3RpdmVJbmRleCAmJiBuZXdBY3RpdmVJbmRleCAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNldHRpbmc6IG1lbnVFbnRyaWVzLmluZGV4T2YoY3VycmVudEFjdGl2ZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgIW5ld0FjdGl2ZSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2V0dGluZyA+IG1lbnVFbnRyaWVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXR0aW5nOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QWRkTm9kZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlQWRkTm9kZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1JlbW92ZU5vZGVNb2RhbCh1cmwsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IHRydWUsXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZVJlbW92ZU5vZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZToge1xuICAgICAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRNZW51RW50cmllcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcIndhbGxldFwiLCBcImJhY2t1cFwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZW51RW50cmllcyA9IFtdO1xuXG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJnZW5lcmFsXCIpO1xuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJ3YWxsZXRcIik7XG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJhY2NvdW50c1wiKTtcbiAgICAgICAgbWVudUVudHJpZXMucHVzaChcInBhc3N3b3JkXCIpO1xuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJiYWNrdXBcIik7XG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcInJlc3RvcmVcIik7XG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJhY2Nlc3NcIik7XG5cbiAgICAgICAgaWYgKGdldEZhdWNldCgpLnNob3cpIG1lbnVFbnRyaWVzLnB1c2goXCJmYXVjZXRfYWRkcmVzc1wiKTtcblxuICAgICAgICBtZW51RW50cmllcy5wdXNoKFwicmVzZXRcIik7XG5cbiAgICAgICAgcmV0dXJuIG1lbnVFbnRyaWVzO1xuICAgIH1cblxuICAgIHRyaWdnZXJNb2RhbChlLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucmVmcy53c19tb2RhbC5zaG93KGUsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIF9oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UocGF0aCwgdmFsdWUpIHtcbiAgICAgICAgLy8gdXNlIGRpZmZlcmVudCBjaGFuZ2UgaGFuZGxlciBiZWNhdXNlIGNoZWNrYm94IGRvZXNuJ3Qgd29ya1xuICAgICAgICAvLyBub3JtYWwgd2l0aCBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBsZXQgdXBkYXRlZFZhbHVlID0gc2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIiksXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICBzZXR0aW5nOiBcImJyb3dzZXJfbm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25DaGFuZ2VTZXR0aW5nKHNldHRpbmcsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCB7ZGVmYXVsdHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgICBmdW5jdGlvbiBmaW5kRW50cnkodGFyZ2V0VmFsdWUsIHRhcmdldERlZmF1bHRzKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldERlZmF1bHRzKSByZXR1cm4gdGFyZ2V0VmFsdWU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVmYXVsdHNbMF0udHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXREZWZhdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNldHRpbmdzLiR7dGFyZ2V0RGVmYXVsdHNbaV0udHJhbnNsYXRlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IHRhcmdldFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXREZWZhdWx0cy5pbmRleE9mKHRhcmdldFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoc2V0dGluZykge1xuICAgICAgICAgICAgY2FzZSBcImxvY2FsZVwiOlxuICAgICAgICAgICAgICAgIGxldCBteUxvY2FsZSA9IGNvdW50ZXJwYXJ0LmdldExvY2FsZSgpO1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gbXlMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgSW50bEFjdGlvbnMuc3dpdGNoTG9jYWxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogXCJsb2NhbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0aGVtZXNcIjpcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwidGhlbWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdE1hcmtldHNcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndhbGxldExvY2tUaW1lb3V0XCI6XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4obmV3VmFsdWUpKSBuZXdWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihuZXdWYWx1ZSkgJiYgdHlwZW9mIG5ld1ZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJpbnZlcnNlTWFya2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwiY29uZmlybU1hcmtldE9yZGVyXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKSA9PT0gMDsgLy8gVVNEL0JUUyBpcyB0cnVlLCBCVFMvVVNEIGlzIGZhbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhcGlTZXJ2ZXJcIjpcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwiYXBpU2VydmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhcGlTZXJ2ZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzaG93U2V0dGxlc1wiOlxuICAgICAgICAgICAgY2FzZSBcInNob3dBc3NldFBlcmNlbnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZExvZ2luXCI6XG4gICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IGRlZmF1bHRzW3NldHRpbmddWzBdO1xuICAgICAgICAgICAgICAgIGlmIChyZWZlcmVuY2UudHJhbnNsYXRlKSByZWZlcmVuY2UgPSByZWZlcmVuY2UudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlID09PSByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInVuaXRcIjpcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKTtcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IHNldHRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0c1tzZXR0aW5nXVtpbmRleF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZpbmRFbnRyeShlLnRhcmdldC52YWx1ZSwgZGVmYXVsdHNbc2V0dGluZ10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7c2V0dGluZzogc2V0dGluZywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc2V0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2xlYXJTZXR0aW5ncygpO1xuICAgIH1cblxuICAgIF9yZWRpcmVjdFRvRW50cnkoZW50cnkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvc2V0dGluZ3MvXCIgKyBlbnRyeSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlTWVudShlbnRyeSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLm1lbnVFbnRyaWVzLmluZGV4T2YoZW50cnkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNldHRpbmc6IGluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7YWN0aXZlU2V0dGluZzogaW5kZXh9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7c2V0dGluZ3MsIGRlZmF1bHRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHttZW51RW50cmllcywgYWN0aXZlU2V0dGluZywgc2V0dGluZ0VudHJpZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGVudHJpZXM7XG4gICAgICAgIGxldCBhY3RpdmVFbnRyeSA9IG1lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddIHx8IG1lbnVFbnRyaWVzWzBdO1xuXG4gICAgICAgIHN3aXRjaCAoYWN0aXZlRW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50c1wiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8QWNjb3VudHNTZXR0aW5ncyAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndhbGxldFwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8V2FsbGV0U2V0dGluZ3Mgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPFBhc3N3b3JkU2V0dGluZ3MgLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJiYWNrdXBcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPEJhY2t1cFNldHRpbmdzIC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicmVzdG9yZVwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXN0b3JlU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTG9naW49e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYWNjZXNzXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcbiAgICAgICAgICAgICAgICAgICAgPEFjY2Vzc1NldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXVjZXQ9e3NldHRpbmdzLmdldChcImZhdWNldF9hZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM9e2RlZmF1bHRzLmFwaVNlcnZlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZVNldHRpbmcuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBZGROb2RlTW9kYWw9e3RoaXMuc2hvd0FkZE5vZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSZW1vdmVOb2RlTW9kYWw9e3RoaXMuc2hvd1JlbW92ZU5vZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZhdWNldF9hZGRyZXNzXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWdldEZhdWNldCgpLmVkaXRhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXR0aW5ncy5nZXQoXCJmYXVjZXRfYWRkcmVzc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGYXVjZXQoKS5lZGl0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX29uQ2hhbmdlU2V0dGluZy5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhdWNldF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8UmVzZXRTZXR0aW5ncyAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gc2V0dGluZ0VudHJpZXNbYWN0aXZlRW50cnldLm1hcChzZXR0aW5nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzZXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9e3NldHRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzPXtkZWZhdWx0c1tzZXR0aW5nXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2VTZXR0aW5nLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ob3RpZmljYXRpb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlcz17dGhpcy5wcm9wcy5sb2NhbGVzT2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5kZXByZWNhdGVkID8gXCJcIiA6IFwiZ3JpZC1ibG9ja1wifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IG1hcmdpbi1ibG9jayB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzaHJpbmsgc2V0dGluZ3MtbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMCwgcGFkZGluZ0xlZnQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImhlYWRlci5zZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInBhbmVsLWJnLWNvbG9yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gYWN0aXZlU2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fcmVkaXJlY3RUb0VudHJ5LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJzZXR0aW5ncy5cIiArIGVudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBuby1tYXJnaW4gdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLlwiICsgbWVudUVudHJpZXNbYWN0aXZlU2V0dGluZ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUVudHJ5ICE9IFwiYWNjZXNzXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogNSwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgc2V0dGluZ3MuJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51RW50cmllc1thY3RpdmVTZXR0aW5nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV90ZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWJnLWNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxXZWJzb2NrZXRBZGRNb2RhbFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlPXt0aGlzLnN0YXRlLnJlbW92ZU5vZGV9XG4gICAgICAgICAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZT17dGhpcy5zdGF0ZS5pc0FkZE5vZGVNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQWRkTm9kZUNsb3NlPXt0aGlzLmhpZGVBZGROb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlTm9kZUNsb3NlPXt0aGlzLmhpZGVSZW1vdmVOb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGFwaXM9e2RlZmF1bHRzW1wiYXBpU2VydmVyXCJdfVxuICAgICAgICAgICAgICAgICAgICBhcGk9e2RlZmF1bHRzW1wiYXBpU2VydmVyXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnVybCA9PT0gdGhpcy5zdGF0ZS5hcGlTZXJ2ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiICYmIGIudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCl9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbm5lY3Rpb249e2FwaVNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthcGlTZXJ2ZXJ9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiIsImltcG9ydCBiYXNlU2V0IGZyb20gJy4vX2Jhc2VTZXQuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgYSBwb3J0aW9uIG9mIGBwYXRoYCBkb2Vzbid0IGV4aXN0LFxuICogaXQncyBjcmVhdGVkLiBBcnJheXMgYXJlIGNyZWF0ZWQgZm9yIG1pc3NpbmcgaW5kZXggcHJvcGVydGllcyB3aGlsZSBvYmplY3RzXG4gKiBhcmUgY3JlYXRlZCBmb3IgYWxsIG90aGVyIG1pc3NpbmcgcHJvcGVydGllcy4gVXNlIGBfLnNldFdpdGhgIHRvIGN1c3RvbWl6ZVxuICogYHBhdGhgIGNyZWF0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLnNldChvYmplY3QsICdhWzBdLmIuYycsIDQpO1xuICogY29uc29sZS5sb2cob2JqZWN0LmFbMF0uYi5jKTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnNldChvYmplY3QsIFsneCcsICcwJywgJ3knLCAneiddLCA1KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC54WzBdLnkueik7XG4gKiAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IE5vdGlmeSBmcm9tIFwibm90aWZ5anNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UgPSB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIF9zZXRNZXNzYWdlKGtleSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShrZXkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IG51bGx9KTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UocGF0aCkge1xuICAgICAgICByZXR1cm4gZXZ0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Ob3RpZmljYXRpb25DaGFuZ2UocGF0aCwgISFldnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtkZWZhdWx0cywgc2V0dGluZywgc2V0dGluZ3N9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25hbCxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24sXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBzZXR0aW5ncy5nZXQoc2V0dGluZyk7XG4gICAgICAgIGxldCBub0hlYWRlciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKHNldHRpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbGVcIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0cy5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25LZXkgPSBcImxhbmd1YWdlcy5cIiArIGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb3VudGVycGFydC50cmFuc2xhdGUodHJhbnNsYXRpb25LZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZW50cnl9IHZhbHVlPXtlbnRyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRoZW1lc1wiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRzLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbktleSA9IFwic2V0dGluZ3MuXCIgKyBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2VudHJ5fSB2YWx1ZT17ZW50cnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicm93c2VyX25vdGlmaWNhdGlvbnMuYWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISF2YWx1ZS5hbGxvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnJvd3Nlcl9ub3RpZmljYXRpb25zLmFsbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuYnJvd3Nlcl9ub3RpZmljYXRpb25zX2FsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJyb3dzZXJfbm90aWZpY2F0aW9ucy5hZGRpdGlvbmFsLnRyYW5zZmVyVG9NZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZS5hbGxvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF2YWx1ZS5hZGRpdGlvbmFsLnRyYW5zZmVyVG9NZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbC50cmFuc2ZlclRvTWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJicm93c2VyX25vdGlmaWNhdGlvbnMuYWxsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19hZGRpdGlvbmFsX3RyYW5zZmVyX3RvX21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshIXZhbHVlLmFsbG93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZ5Lm5lZWRzUGVybWlzc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvelo3TkhZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLW5vLWJyb3dzZXItc3VwcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19kaXNhYmxlZF9ieV9icm93c2VyX25vdGlmeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdE1hcmtldHNcIjpcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsZXRMb2NrVGltZW91dFwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2UuYmluZCh0aGlzLCBzZXR0aW5nKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0c1tzZWxlY3RlZF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RlZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdHMubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBlbnRyeS50cmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2V0dGluZ3MuJHtlbnRyeS50cmFuc2xhdGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZyA9PT0gXCJ1bml0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSA8QXNzZXROYW1lIG5hbWU9e2VudHJ5fSAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBlbnRyeS50cmFuc2xhdGUgPyBlbnRyeS50cmFuc2xhdGUgOiBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50cmFuc2xhdGUgPyBlbnRyeS50cmFuc2xhdGUgOiBlbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKHRoaXMsIHNldHRpbmcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiAmJiAhdmFsdWUgJiYgIW9wdGlvbnMpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJhbnNsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIHtub0hlYWRlciA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8tTWVkaXVtLCBhcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2BzZXR0aW5ncy4ke3NldHRpbmd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge29wdGlvbnMgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maXJtQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7aW5wdXQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aW5wdXR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtjb21wb25lbnQgPyBjb21wb25lbnQgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNvbG9yLXN1Y2Nlc3NcIj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBBY2NvdW50c1NldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLm15QWNjb3VudHMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5teUFjY291bnRzXG4gICAgICAgICAgICApIHx8IG5leHRQcm9wcy5oaWRkZW5BY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5oaWRkZW5BY2NvdW50c1xuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlSGlkZShhY2NvdW50LCBoaWRlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMudG9nZ2xlSGlkZUFjY291bnQoYWNjb3VudCwgaGlkZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge215QWNjb3VudHMsIGhpZGRlbkFjY291bnRzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGFjY291bnRzID0gaGlkZGVuQWNjb3VudHNcbiAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgIC5jb25jYXQobXlBY2NvdW50cylcbiAgICAgICAgICAgIC5zb3J0KCk7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3Mubm9fYWNjb3VudHNcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50cy5tYXAoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNJZ25vcmVkID0gaGlkZGVuQWNjb3VudHMuaGFzKGFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZGVMaW5rID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJZ25vcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uVG9nZ2xlSGlkZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vblRvZ2dsZUhpZGUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY291bnQuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0lnbm9yZWQgPyBcInVuaWdub3JlXCIgOiBcImlnbm9yZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FjY291bnQvJHthY2NvdW50fS9wZXJtaXNzaW9uc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3Mudmlld19rZXlzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntoaWRlTGlua308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFjY291bnRzU2V0dGluZ3MgPSBjb25uZWN0KFxuICAgIEFjY291bnRzU2V0dGluZ3MsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG15QWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRNeUFjY291bnRzKCksXG4gICAgICAgICAgICAgICAgaGlkZGVuQWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15SGlkZGVuQWNjb3VudHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50c1NldHRpbmdzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDaGFuZ2VBY3RpdmVXYWxsZXQsIFdhbGxldERlbGV0ZX0gZnJvbSBcIi4uL1dhbGxldC9XYWxsZXRNYW5hZ2VyXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuLi9XYWxsZXQvQmFsYW5jZUNsYWltQWN0aXZlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsZXRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvb2t1cEFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICByZXNldE1lc3NhZ2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkxvb2t1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb29rdXBBY3RpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZXNldEJyYWlua2V5U2VxdWVuY2UoKSB7XG4gICAgICAgIFdhbGxldERiLnJlc2V0QnJhaW5LZXlTZXF1ZW5jZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc2V0TWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmJyYWlua2V5X3Jlc2V0X3N1Y2Nlc3NcIilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2xvb2t1cEFjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge2RlcHJlY2F0ZWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoZGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXREZWxldGUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgPFdhbGxldERlbGV0ZSAvPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3twYWRkaW5nOiBcIjE1cHggMFwifX0gY2xhc3NOYW1lPVwiYmxvY2stbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1zXCIgLz46XG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5sb29rdXBfdGV4dFwiIC8+OlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTG9va3VwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYmFsYW5jZV9jbGFpbV9sb29rdXBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2xvb2t1cEFjdGl2ZSA/IDxCYWxhbmNlQ2xhaW1BY3RpdmUgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3twYWRkaW5nOiBcIjE1cHggMFwifX0gY2xhc3NOYW1lPVwiYmxvY2stbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3NlcV9yZXNldFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfc2VxX3Jlc2V0X3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXRCcmFpbmtleVNlcXVlbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV9zZXFfcmVzZXRfYnV0dG9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlc2V0TWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fSBjbGFzc05hbWU9XCJmYWNvbG9yLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdhbGxldENoYW5nZVBhc3N3b3JkIGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0Q2hhbmdlUGFzc3dvcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFdhbGxldENoYW5nZVBhc3N3b3JkIC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QmFja3VwUmVzdG9yZX0gZnJvbSBcIi4uL1dhbGxldC9CYWNrdXBcIjtcbmltcG9ydCBJbXBvcnRLZXlzIGZyb20gXCIuLi9XYWxsZXQvSW1wb3J0S2V5c1wiO1xuaW1wb3J0IHtDcmVhdGVXYWxsZXRGcm9tQnJhaW5rZXl9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0Q3JlYXRlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFJlc3RvcmVGYXZvcml0ZXMgZnJvbSBcIi4vUmVzdG9yZUZhdm9yaXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVzdG9yZVR5cGU6IDAsXG4gICAgICAgICAgICB0eXBlczogW1wiYmFja3VwXCIsIFwia2V5XCIsIFwibGVnYWN5XCIsIFwiYnJhaW5rZXlcIiwgXCJmYXZvcml0ZXNcIl1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfc2V0V2FsbGV0TW9kZSgpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJwYXNzd29yZExvZ2luXCIsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVR5cGUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiB0aGlzLnN0YXRlLnR5cGVzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtwYXNzd29yZExvZ2lufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKHBhc3N3b3JkTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNldHRpbmdzLndhbGxldF9yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhcmstdGV4dC1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3Mud2FsbGV0X3JlcXVpcmVkX3RleHRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5fc2V0V2FsbGV0TW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5lbmFibGVfd2FsbGV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7dHlwZXMsIHJlc3RvcmVUeXBlfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBvcHRpb25zID0gdHlwZXMubWFwKHR5cGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dHlwZX0gdmFsdWU9e3R5cGV9PlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKGBzZXR0aW5ncy5iYWNrdXBfJHt0eXBlfWApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb250ZW50O1xuXG4gICAgICAgIHN3aXRjaCAodHlwZXNbcmVzdG9yZVR5cGVdKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrdXBSZXN0b3JlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJicmFpbmtleVwiOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21heFdpZHRoOiBcIjQwcmVtXCIsIHBhZGRpbmdCb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9icmFpbmtleV90ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVXYWxsZXRGcm9tQnJhaW5rZXkgbmVzdGVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJmYXZvcml0ZXNcIjpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3RvcmVGYXZvcml0ZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEltcG9ydEtleXMgcHJpdmF0ZUtleT17cmVzdG9yZVR5cGUgPT09IDF9IC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY2hhbmdlVHlwZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3R5cGVzW3Jlc3RvcmVUeXBlXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IG5vdGlmeSBmcm9tIFwiYWN0aW9ucy9Ob3RpZmljYXRpb25BY3Rpb25zXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmNsYXNzIFJlc3RvcmVGYXZvcml0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAganNvbjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBsb2FkKGV2dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogZmFsc2UsIGpzb246IG51bGx9KTtcblxuICAgICAgICBsZXQgZmlsZSA9IGV2dC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGV2dC50YXJnZXQucmVzdWx0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShjb250ZW50cyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0ID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBsZXQge3F1b3RlLCBiYXNlfSA9IG1hcmtldDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1b3RlIHx8ICFiYXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBhcnNlIGpzb24gZGF0YS5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7anNvbn0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZmluaXNoKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgfVxuXG4gICAgZmluaXNoKCkge1xuICAgICAgICBjb25zdCB7anNvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jbGVhclN0YXJyZWRNYXJrZXRzKCk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXQgPSBqc29uW2tleV07XG4gICAgICAgICAgICBsZXQge3F1b3RlLCBiYXNlfSA9IG1hcmtldDtcblxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydChcInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXNfc3VjY2Vzc1wiKSxcbiAgICAgICAgICAgIGxldmVsOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiAyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3N0YXRlfSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpzb25cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDE1XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwbG9hZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX2Vycm9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3N0YXRlLmpzb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZpbmlzaC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX2ZpbmlzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RvcmVGYXZvcml0ZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9zZXRNZXNzYWdlKGtleSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShrZXkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IG51bGx9KTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0IG5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90by1NZWRpdW0sIGFyaWFsLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJzZXR0aW5ncy5yZXNldF90ZXh0X2Rlc2NyaXB0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsTmFtZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2V0dGluZ3MuZ2VuZXJhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGg9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsTmFtZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmdlbmVyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzTmFtZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2V0dGluZ3MuYWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogNjAsIHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMjB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2xlYXJTZXR0aW5ncygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MucmVzdG9yZV9kZWZhdWx0X3N1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5yZXNldFwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMThweFwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCYWNrdXBDcmVhdGV9IGZyb20gXCIuLi9XYWxsZXQvQmFja3VwXCI7XG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4uL1dhbGxldC9CYWNrdXBCcmFpbmtleVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEJhY2t1cEZhdm9yaXRlcyBmcm9tIFwiLi9CYWNrdXBGYXZvcml0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVzdG9yZVR5cGU6IDAsXG4gICAgICAgICAgICB0eXBlczogW1wiYmFja3VwXCIsIFwiYnJhaW5rZXlcIiwgXCJmYXZvcml0ZXNcIl1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVHlwZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVzdG9yZVR5cGU6IHRoaXMuc3RhdGUudHlwZXMuaW5kZXhPZihlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3R5cGVzLCByZXN0b3JlVHlwZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHR5cGVzLm1hcCh0eXBlID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3R5cGV9IHZhbHVlPXt0eXBlfT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShgc2V0dGluZ3MuYmFja3VwY3JlYXRlXyR7dHlwZX1gKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29udGVudDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGVzW3Jlc3RvcmVUeXBlXSkge1xuICAgICAgICAgICAgY2FzZSBcImJhY2t1cFwiOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8QmFja3VwQ3JlYXRlIC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYnJhaW5rZXlcIjpcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cEJyYWlua2V5IC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVzXCI6XG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBGYXZvcml0ZXMgLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9jaGFuZ2VUeXBlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZXNbcmVzdG9yZVR5cGVdfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7c2F2ZUFzfSBmcm9tIFwiZmlsZS1zYXZlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuY2xhc3MgQmFja3VwRmF2b3JpdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBtYWtlQmFja3VwKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMudG9KUygpO1xuXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEpXSwge1xuICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXVzLWFzY2lpXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2F2ZUFzKGJsb2IsIFwiZmF2b3JpdGVzLmpzb25cIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc3RleHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubWFrZUJhY2t1cC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzYnRuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChCYWNrdXBGYXZvcml0ZXMsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0c1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUZBO0FBb0JBO0FBcEJBO0FBdUJBOzs7O0FBMUJBO0FBQ0E7QUE0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNBO0FBK0NBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRUE7QUFDQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFhQTtBQUNBO0FBNUVBO0FBQ0E7QUE4RUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBSUE7QUFWQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBaUJBO0FBcEJBO0FBWEE7QUFtQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBU0E7QUFqQkE7QUFOQTtBQXBDQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFoRUE7QUFzRkE7Ozs7QUEvYkE7QUFDQTtBQWljQTs7Ozs7Ozs7QUNuZEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFQQTtBQVVBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFEQTtBQWhCQTtBQXFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQXhDQTtBQUNBO0FBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBMUpBO0FBNEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQURBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBUkE7QUFVQTtBQVpBO0FBREE7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeENBO0FBMkNBOzs7O0FBMVBBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFlQTtBQUNBO0FBREE7QUFmQTtBQUNBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUF6Q0E7QUFEQTtBQThDQTs7OztBQTlFQTtBQUNBO0FBZ0ZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBZEE7QUEzQkE7QUFnREE7Ozs7QUFyRkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBY0E7QUFuQkE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBVEE7QUFZQTs7OztBQW5HQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFSQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBREE7QUFuQkE7QUE4QkE7Ozs7QUEzRkE7QUFDQTtBQTZGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQVRBO0FBREE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFUQTtBQVdBO0FBWEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBbENBO0FBMENBOzs7O0FBbkVBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBVEE7QUFZQTs7OztBQXpEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFKQTtBQVlBOzs7O0FBekJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==