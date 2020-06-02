(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[30],{

/***/ 3028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1900);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(584);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2150);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(585);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1906);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2017);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2018);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2178);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(567);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(739);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(740);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3029);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2145);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2155);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(844);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2363);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2407);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2494);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









//import OpenledgerGateway from "../DepositWithdraw/OpenledgerGateway";
//import OpenLedgerFiatDepositWithdrawal from "../DepositWithdraw/openledger/OpenLedgerFiatDepositWithdrawal";
//import OpenLedgerFiatTransactionHistory from "../DepositWithdraw/openledger/OpenLedgerFiatTransactionHistory";
//import BlockTradesBridgeDepositRequest from "../DepositWithdraw/blocktrades/BlockTradesBridgeDepositRequest";
//import CitadelBridgeDepositRequest from "../DepositWithdraw/citadel/CitadelBridgeDepositRequest";













var AccountDepositWithdraw = function (_React$Component) {
    _inherits(AccountDepositWithdraw, _React$Component);

    function AccountDepositWithdraw(props) {
        _classCallCheck(this, AccountDepositWithdraw);

        var _this = _possibleConstructorReturn(this, (AccountDepositWithdraw.__proto__ || Object.getPrototypeOf(AccountDepositWithdraw)).call(this));

        _this.state = {
            olService: props.viewSettings.get("olService", "gateway"),
            rudexService: props.viewSettings.get("rudexService", "gateway"),
            bitsparkService: props.viewSettings.get("bitsparkService", "gateway"),
            xbtsxService: props.viewSettings.get("xbtsxService", "gateway"),
            btService: props.viewSettings.get("btService", "bridge"),
            citadelService: props.viewSettings.get("citadelService", "bridge"),
            metaService: props.viewSettings.get("metaService", "bridge"),
            activeService: props.viewSettings.get("activeService", 0),

            RudexNotice1Informed: false
        };
        return _this;
    }

    _createClass(AccountDepositWithdraw, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.account !== this.props.account || nextProps.servicesDown !== this.props.servicesDown || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.citadelBackedCoins, this.props.citadelBackedCoins) || nextState.olService !== this.state.olService || nextState.rudexService !== this.state.rudexService || nextState.bitsparkService !== this.state.bitsparkService || nextState.xbtsxService !== this.state.xbtsxService || nextState.btService !== this.state.btService || nextState.citadelService !== this.state.citadelService || nextState.metaService !== this.state.metaService || nextState.activeService !== this.state.activeService || nextState.RudexNotice1Informed !== this.state.RudexNotice1Informed || nextProps.currentLocale !== this.props.currentLocale;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            common_account_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFinalFeeAsset(this.props.account, "transfer");
        }
    }, {
        key: "toggleOLService",
        value: function toggleOLService(service) {
            this.setState({
                olService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                olService: service
            });
        }
    }, {
        key: "onRudexNotice1Informed",
        value: function onRudexNotice1Informed() {
            this.setState({
                RudexNotice1Informed: !this.state.RudexNotice1Informed
            });
        }
    }, {
        key: "toggleRuDEXService",
        value: function toggleRuDEXService(service) {
            this.setState({
                rudexService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                rudexService: service
            });
        }
    }, {
        key: "toggleXbtsxService",
        value: function toggleXbtsxService(service) {
            this.setState({
                xbtsxService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                xbtsxService: service
            });
        }
    }, {
        key: "toggleBitSparkService",
        value: function toggleBitSparkService(service) {
            this.setState({
                bitsparkService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                bitsparkService: service
            });
        }
    }, {
        key: "toggleBTService",
        value: function toggleBTService(service) {
            this.setState({
                btService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                btService: service
            });
        }
    }, {
        key: "toggleCitadelService",
        value: function toggleCitadelService(service) {
            this.setState({
                citadelService: service
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                citadelService: service
            });
        }
    }, {
        key: "toggleMetaService",
        value: function toggleMetaService(service) {
            this.setState({
                metaService: service
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                metaService: service
            });
        }
    }, {
        key: "onSetService",
        value: function onSetService(e) {
            //let index = this.state.services.indexOf(e.target.value);
            this.setState({
                activeService: parseInt(e.target.value)
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                activeService: parseInt(e.target.value)
            });
        }
    }, {
        key: "renderServices",
        value: function renderServices(rudexGatewayCoins) {
            //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
            var serList = [];
            var account = this.props.account;
            var _state = this.state,
                rudexService = _state.rudexService,
                RudexNotice1Informed = _state.RudexNotice1Informed;


            var agreement_ru = "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза";
            var agreement_en = "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement";

            serList.push({
                name: "RuDEX (RUDEX.X)",
                identifier: "RUDEX",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "service-selector",
                            style: { marginBottom: "2rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "button-group segmented no-margin" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    onClick: this.toggleRuDEXService.bind(this, "gateway"),
                                    className: rudexService === "gateway" ? "is-active" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.gateway" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                {
                                    onClick: this.toggleRuDEXService.bind(this, "fiat"),
                                    className: rudexService === "fiat" ? "is-active" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    null,
                                    "Fiat"
                                )
                            )
                        )
                    ),
                    rudexService === "gateway" && rudexGatewayCoins.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                href: this.props.currentLocale == "ru" ? agreement_ru : agreement_en,
                                content: "gateway.rudex.rudex_notice1",
                                component: "a",
                                target: "_blank"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    defaultChecked: this.state.RudexNotice1Informed,
                                    onChange: this.onRudexNotice1Informed.bind(this)
                                }),
                                " ",
                                "-",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.rudex.rudex_notice1_informed" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        RudexNotice1Informed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            account: account,
                            coins: rudexGatewayCoins
                        }) : null
                    ) : null,
                    rudexService === "fiat" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.rudex.coming_soon" })
                    ) : null
                )
            });

            return serList;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                servicesDown = _props.servicesDown;
            var activeService = this.state.activeService;


            var rudexGatewayCoins = this.props.rudexBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var services = this.renderServices(rudexGatewayCoins);

            var serviceNames = [];
            var options = services.map(function (services_obj, index) {
                serviceNames.push(services_obj.identifier);
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: index, value: index },
                    services_obj.name
                );
            });

            var currentServiceName = serviceNames[activeService];
            var currentServiceDown = servicesDown.get(currentServiceName);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: this.props.contained ? "grid-content" : "grid-container"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: this.props.contained ? "" : "grid-content",
                        style: { paddingTop: "2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.title", component: "h2" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block vertical medium-horizontal no-margin no-padding" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "medium-6 show-for-medium" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                path: "components/DepositWithdraw",
                                section: "deposit-short"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "medium-5 medium-offset-1" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                account: account.get("name"),
                                path: "components/DepositWithdraw",
                                section: "receive"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical medium-horizontal no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "medium-6 small-order-2 medium-order-1" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "label",
                                    className: "left-label",
                                    content: "gateway.service"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        onChange: this.onSetService.bind(this),
                                        className: "bts-select",
                                        value: activeService
                                    },
                                    options
                                ),
                                currentServiceDown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    style: {
                                        color: "red",
                                        marginBottom: "1em",
                                        display: "block"
                                    },
                                    content: "gateway.unavailable_" + currentServiceName
                                }) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "medium-5 medium-offset-1 small-order-1 medium-order-2",
                                    style: { paddingBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "label",
                                    className: "left-label",
                                    content: "gateway.your_account"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                        size: { height: 40, width: 40 },
                                        account: account.get("name"),
                                        custom_image: null
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        type: "text",
                                        value: account.get("name"),
                                        placeholder: null,
                                        disabled: true,
                                        onChange: function onChange() {},
                                        onKeyDown: function onKeyDown() {},
                                        tabIndex: 1
                                    })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content no-padding",
                            style: { paddingTop: 15 }
                        },
                        currentServiceDown ? null : activeService && services[activeService] ? services[activeService].template : services[0].template
                    )
                )
            );
        }
    }]);

    return AccountDepositWithdraw;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountDepositWithdraw.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired,
    contained: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool
};
AccountDepositWithdraw.defaultProps = {
    contained: false
};

AccountDepositWithdraw = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountDepositWithdraw);

var DepositStoreWrapper = function (_React$Component2) {
    _inherits(DepositStoreWrapper, _React$Component2);

    function DepositStoreWrapper() {
        _classCallCheck(this, DepositStoreWrapper);

        return _possibleConstructorReturn(this, (DepositStoreWrapper.__proto__ || Object.getPrototypeOf(DepositStoreWrapper)).apply(this, arguments));
    }

    _createClass(DepositStoreWrapper, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__["updateGatewayBackers"])();
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountDepositWithdraw, this.props);
        }
    }]);

    return DepositStoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(DepositStoreWrapper, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"], stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().passwordAccount,
            account: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentAccount,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().viewSettings,
            currentLocale: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().settings.get("locale"),
            backedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins,
            openLedgerBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins.get("OPEN", []),
            rudexBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins.get("RUDEX", []),
            bitsparkBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins.get("SPARKDEX", []),
            blockTradesBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins.get("TRADE", []),
            citadelBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins.get("CITADEL", []),
            xbtsxBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().backedCoins.get("XBTSX", []),
            servicesDown: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().down || {}
        };
    }
}));

/***/ }),

/***/ 3029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3030);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1906);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1900);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(739);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(740);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2817);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2972);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(541);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(754);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2001);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2928);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2912);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var RuDexGateway = function (_React$Component) {
    _inherits(RuDexGateway, _React$Component);

    function RuDexGateway(props) {
        _classCallCheck(this, RuDexGateway);

        var _this = _possibleConstructorReturn(this, (RuDexGateway.__proto__ || Object.getPrototypeOf(RuDexGateway)).call(this));

        _this.state = {
            activeCoin: _this._getActiveCoin(props, { action: "deposit" }),
            action: props.viewSettings.get("rudexAction", "deposit")
        };
        return _this;
    }

    _createClass(RuDexGateway, [{
        key: "_getActiveCoin",
        value: function _getActiveCoin(props, state) {
            var cachedCoin = props.viewSettings.get("activeCoin_rudex", null);
            var firstTimeCoin = "PPY";
            var activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;

            if (state.action === "withdraw") {
                activeCoin = this._findCoinByName(props, activeCoin).symbol;
            }

            return activeCoin;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.provider !== this.props.provider) {
                this.setState({
                    activeCoin: this._getActiveCoin(nextProps, this.state.action)
                });
            }
        }

        /*    onSelectCoin(e) {
            this.setState({
                activeCoin: e.target.value
            });
             let setting = {};
            setting[`activeCoin_rudex_${this.state.action}`] = e.target.value;
            SettingsActions.changeViewSetting(setting);
        }*/

    }, {
        key: "onSelectCoin",
        value: function onSelectCoin(e) {
            this.setState({
                activeCoin: e.value
            });

            var setting = {};
            var coinName = e.value;
            if (this.state.action === "withdraw") {
                coinName = this._findCoinBySymbol(this.props, coinName).backingCoin;
            }
            setting["activeCoin_rudex"] = coinName;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(setting);
        }
    }, {
        key: "_findCoinByName",
        value: function _findCoinByName(props, name) {
            for (var i = 0; i < props.coins.length; i++) {
                var coin = props.coins[i];
                if (coin.backingCoin.toUpperCase() === name) return coin;
            }
            return props.coins[0];
        }
    }, {
        key: "_findCoinBySymbol",
        value: function _findCoinBySymbol(props, name) {
            for (var i = 0; i < props.coins.length; i++) {
                var coin = props.coins[i];
                if (coin.symbol.toUpperCase() === name) return coin;
            }
            return null;
        }
    }, {
        key: "changeAction",
        value: function changeAction(type) {
            var activeCoin = this._getActiveCoin(this.props, { action: type });

            this.setState({
                action: type,
                activeCoin: activeCoin
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(_defineProperty({}, "rudexAction", type));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                coins = _props.coins,
                account = _props.account;
            var _state = this.state,
                activeCoin = _state.activeCoin,
                action = _state.action;


            if (!coins.length) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], null);
            }

            var filteredCoins = coins.filter(function (a) {
                if (!a || !a.symbol) {
                    return false;
                } else {
                    return action === "deposit" ? a.depositAllowed : a.withdrawalAllowed;
                }
            });

            var coinOptions = filteredCoins.map(function (coin) {
                var option = action === "deposit" ? coin.backingCoin.toUpperCase() : coin.symbol;

                var name = option.replace("RUDEX.", "");
                var prefix = name === "PPY" ? "" : "RUDEX.";

                return {
                    value: option,
                    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            replaceNoneToBts: false,
                            maxWidth: 20,
                            name: prefix + name
                        }),
                        option.replace("RUDEX.", "")
                    )
                };
            }).filter(function (a) {
                return a !== null;
            });

            var coin = filteredCoins.filter(function (coin) {
                return action === "deposit" ? coin.backingCoin.toUpperCase() === activeCoin : coin.symbol === activeCoin;
            })[0];

            if (!coin) coin = filteredCoins[0];

            var isDeposit = this.state.action === "deposit";

            var supportUrl = "https://rudex.freshdesk.com";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-margin vertical medium-horizontal no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                {
                                    style: { minHeight: "2rem" },
                                    className: "left-label"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_11__["default"]
                            //className="external-coin-types bts-select"
                            //onChange={this.onSelectCoin.bind(this)}
                            , { onChange: this.onSelectCoin.bind(this),
                                clearable: false,
                                searchable: false,
                                value: activeCoin,
                                options: coinOptions
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "medium-6 medium-offset-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { minHeight: "2rem" },
                                className: "left-label"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.gateway_text" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { paddingBottom: 15 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "button-group segmented no-margin" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "deposit" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "deposit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.deposit" })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: action === "withdraw" ? "is-active" : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "a",
                                        {
                                            onClick: this.changeAction.bind(this, "withdraw")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw" })
                                    )
                                )
                            )
                        )
                    )
                ),
                !coin ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            key: "" + coin.symbol,
                            gateway: coin.gatewayWallet,
                            issuer_account: coin.issuer,
                            account: account,
                            deposit_asset: coin.backingCoin.toUpperCase(),
                            deposit_asset_name: coin.name,
                            deposit_coin_type: coin.backingCoin.toLowerCase(),
                            deposit_account: coin.gatewayWallet,
                            deposit_wallet_type: coin.walletType,
                            receive_asset: coin.symbol,
                            receive_coin_type: coin.symbol.toLowerCase(),
                            supports_output_memos: coin.supportsMemos,
                            supportsPublicKey: coin.supportsPublicKey || false,
                            memoType: coin.memoType,
                            min_amount: coin.minAmount,
                            gateFee: coin.gateFee,
                            asset_precision: coin.precision,
                            confirmations: coin.confirmations,
                            action: this.state.action
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Support"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.rudex.support_block" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: supportUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "external-link"
                                },
                                supportUrl
                            )
                        )
                    ),
                    coin && coin.symbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__["TransactionWrapper"],
                        {
                            asset: coin.symbol,
                            fromAccount: isDeposit ? coin.issuerId : this.props.account.get("id"),
                            to: isDeposit ? this.props.account.get("id") : coin.issuerId
                        },
                        function (_ref) {
                            var asset = _ref.asset,
                                to = _ref.to,
                                fromAccount = _ref.fromAccount;

                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__["RecentTransactions"], {
                                accountsList: immutable__WEBPACK_IMPORTED_MODULE_8___default.a.List([_this2.props.account.get("id")]),
                                limit: 10,
                                compactView: true,
                                fullHeight: true,
                                filter: "transfer",
                                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.recent_" + _this2.state.action
                                }),
                                customFilter: {
                                    fields: ["to", "from", "asset_id"],
                                    values: {
                                        to: to.get("id"),
                                        from: fromAccount.get("id"),
                                        asset_id: asset.get("id")
                                    }
                                }
                            });
                        }
                    ) : null
                )
            );
        }
    }]);

    return RuDexGateway;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(RuDexGateway, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 3030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1906);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2017);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2018);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3031);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3032);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3034);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3035);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3033);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2144);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2468);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(585);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(601);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(844);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3036);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(750);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2148);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var RuDexGatewayDepositRequest = function (_React$Component) {
    _inherits(RuDexGatewayDepositRequest, _React$Component);

    function RuDexGatewayDepositRequest(props) {
        _classCallCheck(this, RuDexGatewayDepositRequest);

        var _this = _possibleConstructorReturn(this, (RuDexGatewayDepositRequest.__proto__ || Object.getPrototypeOf(RuDexGatewayDepositRequest)).call(this, props));

        _this.deposit_address_cache = new common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__["default"]();

        _this.state = {
            isModalVisible: false,
            receive_address: null
        };

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this.showModal = _this.showModal.bind(_this);
        _this.hideModal = _this.hideModal.bind(_this);
        return _this;
    }

    _createClass(RuDexGatewayDepositRequest, [{
        key: "showModal",
        value: function showModal() {
            this.setState({
                isModalVisible: true
            });
        }
    }, {
        key: "hideModal",
        value: function hideModal() {
            this.setState({
                isModalVisible: false
            });
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            return {
                inputCoinType: this.props.deposit_coin_type,
                outputCoinType: this.props.receive_coin_type,
                outputAddress: this.props.account.get("name"),
                stateCallback: this.addDepositAddress
            };
        }
    }, {
        key: "_notify",
        value: function _notify(su) {
            var strN = "copy_address";

            if (su == "memo") strN = "copy_memo";

            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Notification"].success({
                message: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("account.notify." + strN)
            });
        }

        // componentWillMount() {
        //     let account_name = this.props.account.get("name");
        //     let receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
        // }

    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            var account_name = this.props.account.get("name");
            this.deposit_address_cache.cacheInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type, receive_address.address, receive_address.memo);
            this.setState({ account_name: account_name });
            this.setState({ receive_address: receive_address });
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
            // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
            return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.receive_asset.get("symbol");
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            this.showModal();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: "none", minHeight: 150 } });
            if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;

            var account_balances_object = this.props.account.get("balances");

            // let balance = "0 " + this.props.receive_asset.get("symbol");
            if (this.props.deprecated_in_favor_of) {
                var has_nonzero_balance = false;
                var balance_object_id = account_balances_object.get(this.props.receive_asset.get("id"));
                if (balance_object_id) {
                    var balance_object = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(balance_object_id);
                    if (balance_object) {
                        var balance = balance_object.get("balance");
                        if (balance != 0) has_nonzero_balance = true;
                    }
                }
                if (!has_nonzero_balance) return emptyRow;
            }

            // let account_balances = account_balances_object.toJS();
            // let asset_types = Object.keys(account_balances);
            // if (asset_types.length > 0) {
            //     let current_asset_id = this.props.receive_asset.get("id");
            //     if( current_asset_id )
            //     {
            //         balance = (<span><Translate component="span" content="transfer.available"/>: <BalanceComponent balance={account_balances[current_asset_id]}/></span>);
            //     }
            // }

            var receive_address = this.state.receive_address;
            if (!receive_address) {
                var account_name = this.props.account.get("name");
                receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
            }

            var depositConfirmation = null;
            if (this.props.confirmations && this.props.confirmations.type) {
                if (this.props.confirmations.type === "irreversible") {
                    depositConfirmation = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.gateway_deposit.confirmations.last_irreversible" });
                } else if (this.props.confirmations.type === "blocks" && this.props.confirmations.value) {
                    depositConfirmation = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        content: "gateway.gateway_deposit.confirmations.n_blocks",
                        blocks: this.props.confirmations.value
                    });
                }
            }

            var withdraw_modal_id = this.getWithdrawModalId();
            var deposit_address_fragment = null;
            var deposit_memo = null;
            // if (this.props.deprecated_in_favor_of)
            // {
            //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get("symbol")} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" title="icons.question_circle" /></span><ReactTooltip /></span>;
            // }
            // else
            // {
            var clipboardText = "";
            var memoText = void 0;
            var withdraw_memo_prefix = void 0;
            var currentGateway = "RUDEX";
            if (!!lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__["availableGateways"][currentGateway].simpleAssetGateway && this.props.deposit_account) {
                deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    this.props.deposit_account
                );
                clipboardText = this.props.deposit_account;
                if (!!this.props.memoType && this.props.memoType === "btsid") {
                    memoText = lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__["availableGateways"][currentGateway].fixedMemo["prepend_btsid"] + this.props.account.get("id").replace("1.2.", "") + lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__["availableGateways"][currentGateway].fixedMemo["append"];
                } else {
                    memoText = lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__["availableGateways"][currentGateway].fixedMemo["prepend_default"] + this.props.account.get("name") + lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__["availableGateways"][currentGateway].fixedMemo["append"];
                }
                deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    memoText
                );
                withdraw_memo_prefix = this.props.deposit_coin_type + ":";
            } else {
                if (!receive_address && !this.props.supportsMemos) {
                    Object(lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__["requestDepositAddress"])(this._getDepositObject());
                    return emptyRow;
                }
                if (receive_address.memo) {
                    // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
                    memoText = receive_address.memo;
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                    deposit_memo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.memo
                    );
                } else {
                    // This is a client that uses unique deposit addresses to select the output
                    clipboardText = receive_address.address;
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                }
                withdraw_memo_prefix = "";
            }

            if (this.props.action === "deposit") {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "rudex__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_deposit"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.your_account"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                account: this.props.account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.deposit_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.deposit_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "b",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "gateway.rudex.min_amount",
                                    minAmount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
                                    symbol: this.props.deposit_coin_type
                                })
                            )
                        ),
                        depositConfirmation ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "i",
                                null,
                                depositConfirmation
                            ),
                            ")"
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px 0", fontSize: "1.1rem" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            "ADDRESS:",
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "b",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__["default"],
                                                    {
                                                        replaceCopyText: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("gateway.use_copy_button")
                                                    },
                                                    deposit_address_fragment
                                                )
                                            )
                                        )
                                    ),
                                    deposit_memo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__["default"],
                                                {
                                                    replaceCopyText: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("gateway.use_copy_button")
                                                },
                                                "MEMO: ",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "b",
                                                    null,
                                                    deposit_memo
                                                )
                                            )
                                        )
                                    ) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "button-group",
                                    style: { paddingTop: 10 }
                                },
                                deposit_address_fragment ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default.a,
                                    {
                                        text: clipboardText,
                                        onCopy: function onCopy() {
                                            return _this2._notify("address");
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "button" },
                                        "Copy address"
                                    )
                                ) : null,
                                memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default.a,
                                    {
                                        text: memoText,
                                        onCopy: function onCopy() {
                                            return _this2._notify("memo");
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "button" },
                                        "Copy memo"
                                    )
                                ) : null
                            )
                        )
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "rudex__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_summary"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "small-12 medium-10" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "table",
                                { className: "table" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tbody",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_withdraw"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.asset_to_receive"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            this.props.deposit_asset
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            component: "td",
                                            content: "gateway.intermediate"
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.balance" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            {
                                                style: {
                                                    fontWeight: "bold",
                                                    color: "#049cce",
                                                    textAlign: "right"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: this.props.receive_asset.get("symbol"),
                                                replace: false
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-7" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                content: "gateway.withdraw_to",
                                asset: this.props.deposit_asset
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "button-group", style: { paddingTop: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button success",
                                    style: { fontSize: "1.3rem" },
                                    onClick: this.onWithdraw.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.withdraw_now" }),
                                " "
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Modal"],
                        {
                            onCancel: this.hideModal,
                            title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("gateway.withdraw_coin", {
                                coin: this.props.deposit_asset_name,
                                symbol: this.props.deposit_asset
                            }),
                            footer: null,
                            visible: this.state.isModalVisible
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            hideModal: this.hideModal,
                            showModal: this.showModal,
                            account: this.props.account.get("name"),
                            issuer: this.props.issuer_account.get("name"),
                            asset: this.props.receive_asset.get("symbol"),
                            output_coin_name: this.props.deposit_asset_name,
                            output_coin_symbol: this.props.deposit_asset,
                            output_coin_type: this.props.deposit_coin_type,
                            output_wallet_type: this.props.deposit_wallet_type,
                            output_supports_memos: this.props.supports_output_memos,
                            output_supportsPublicKey: this.props.supportsPublicKey,
                            memo_prefix: withdraw_memo_prefix,
                            modal_id: withdraw_modal_id,
                            min_amount: this.props.min_amount,
                            gateFee: this.props.gateFee,
                            asset_precision: this.props.asset_precision,
                            balance: this.props.account.get("balances").toJS()[this.props.receive_asset.get("id")]
                        })
                    )
                );
            }
        }
    }]);

    return RuDexGatewayDepositRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RuDexGatewayDepositRequest.propTypes = {
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    deposit_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    deposit_asset_name: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    deposit_account: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    receive_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    deposit_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_message: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    action: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    supports_output_memos: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool.isRequired,
    supportsPublicKey: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool.isRequired,
    memoType: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number,
    gateFee: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number,
    confirmations: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
    asset_precision: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RuDexGatewayDepositRequest));

/***/ }),

/***/ 3031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(413);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(844);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DisableCopyText = function (_React$Component) {
    _inherits(DisableCopyText, _React$Component);

    function DisableCopyText(props) {
        _classCallCheck(this, DisableCopyText);

        var _this = _possibleConstructorReturn(this, (DisableCopyText.__proto__ || Object.getPrototypeOf(DisableCopyText)).call(this, props));

        _this._handleCopy = _this._handleCopy.bind(_this);
        return _this;
    }

    _createClass(DisableCopyText, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.childRef) this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.childRef);

            if (this.node && this.node.addEventListener) {
                this.node.addEventListener("copy", this._handleCopy);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.node && this.node.removeEventListener) this.node.removeEventListener("copy", this._handleCopy);
        }
    }, {
        key: "_handleCopy",
        value: function _handleCopy(evt) {
            if (this.props.disableCopy !== false) {
                if (this.props.replaceCopyText) {
                    evt.clipboardData.setData("text/plain", this.props.replaceCopyText);
                }

                evt.preventDefault();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { ref: function ref(_ref) {
                        return _this2.childRef = _ref;
                    } },
                this.props.children
            );
        }
    }]);

    return DisableCopyText;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DisableCopyText.propTypes = {
    disableCopy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    replaceCopyText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (DisableCopyText);

/***/ }),

/***/ 3032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1906);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2017);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2018);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(585);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2160);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(601);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2953);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(583);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3033);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1900);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(739);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(434);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(611);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(612);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(844);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(750);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var RuDexWithdrawModal = function (_React$Component) {
    _inherits(RuDexWithdrawModal, _React$Component);

    function RuDexWithdrawModal(props) {
        _classCallCheck(this, RuDexWithdrawModal);

        var _this = _possibleConstructorReturn(this, (RuDexWithdrawModal.__proto__ || Object.getPrototypeOf(RuDexWithdrawModal)).call(this, props));

        _this.state = {
            isConfirmationModalVisible: false,
            withdraw_amount: _this.props.amount_to_withdraw,
            withdraw_address: common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.output_wallet_type),
            withdraw_address_check_in_progress: true,
            withdraw_address_is_valid: null,
            options_is_valid: false,
            confirmation_is_valid: false,
            withdraw_address_selected: common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.output_wallet_type),
            withdraw_publicKey: "",
            withdraw_publicKey_not_empty: _this.props.output_supportsPublicKey ? false : true,
            memo: "",
            withdraw_address_first: true,
            empty_withdraw_value: false,
            from_account: props.account,
            fee_asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].assets_by_symbol.get(props.fee_asset_symbol) || "1.3.0",
            feeStatus: {}
        };

        _this._validateAddress(_this.state.withdraw_address, props);

        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._checkMinAmount = _this._checkMinAmount.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);

        _this.showConfirmationModal = _this.showConfirmationModal.bind(_this);
        _this.hideConfirmationModal = _this.hideConfirmationModal.bind(_this);
        return _this;
    }

    _createClass(RuDexWithdrawModal, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.unMounted = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.account !== this.state.from_account && np.account !== this.props.account) {
                this.setState({
                    from_account: np.account,
                    feeStatus: {},
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus();
                });
            }
        }
    }, {
        key: "showConfirmationModal",
        value: function showConfirmationModal() {
            this.setState({
                isConfirmationModalVisible: true
            });
        }
    }, {
        key: "hideConfirmationModal",
        value: function hideConfirmationModal() {
            this.setState({
                isConfirmationModalVisible: false
            });
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this3 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account;

            var _getAvailableAssets2 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets2.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }

            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                if (_this3.unMounted) return;

                _this3.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this3._checkBalance);
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

            var account = state.from_account;
            if (!account) return;

            var _getAvailableAssets3 = this._getAvailableAssets(state),
                assets = _getAvailableAssets3.fee_asset_types;
            // const assets = ["1.3.0", this.props.asset.get("id")];


            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this4.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
                    _this4.setState({
                        feeStatus: feeStatus
                    });
                }
                _this4._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onWithdrawAmountChange",
        value: function onWithdrawAmountChange(_ref2) {
            var amount = _ref2.amount;

            this.setState({
                withdraw_amount: amount,
                empty_withdraw_value: amount !== undefined && !parseFloat(amount)
            }, function () {
                this._checkBalance;
                this._checkMinAmount();
            });
        }
    }, {
        key: "onSelectChanged",
        value: function onSelectChanged(index) {
            var new_withdraw_address = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_wallet_type)[index];
            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: new_withdraw_address
            });

            this.setState({
                withdraw_address_selected: new_withdraw_address,
                options_is_valid: false,
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "onWithdrawAddressChanged",
        value: function onWithdrawAddressChanged(e) {
            var new_withdraw_address = e.target.value.trim();

            this.setState({
                withdraw_address: new_withdraw_address,
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: new_withdraw_address,
                withdraw_address_is_valid: null
            }, this._updateFee);
            this._validateAddress(new_withdraw_address);
        }
    }, {
        key: "onWithdrawPublicKeyChanged",
        value: function onWithdrawPublicKeyChanged(e) {
            var new_withdraw_publicKey = e.target.value.trim();
            this.setState({
                withdraw_publicKey: new_withdraw_publicKey,
                withdraw_publicKey_not_empty: new_withdraw_publicKey != "" ? true : false
            });
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["validateAddress"])({
                url: props.url,
                walletType: props.output_wallet_type,
                newAddress: new_withdraw_address
            }).then(function (json) {
                if (typeof json === "undefined") {
                    json = { isValid: false };
                }
                if (_this5.state.withdraw_address === new_withdraw_address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        withdraw_address_is_valid: json.isValid,
                        withdraw_publicKey: json.hasOwnProperty("publicKey") ? json.publicKey : "",
                        withdraw_publicKey_not_empty: _this5.props.output_supportsPublicKey ? json.hasOwnProperty("publicKey") ? true : false : true
                    });
                }
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                withdraw_amount = _state.withdraw_amount;
            var _props = this.props,
                asset = _props.asset,
                balance = _props.balance;

            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
            return hasBalance;
        }
    }, {
        key: "_checkMinAmount",
        value: function _checkMinAmount() {
            var withdraw_amount = this.state.withdraw_amount;


            if (withdraw_amount === null) return;
            var lessThanMinimum = withdraw_amount < this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.asset_precision);
            /*        console.log(
                "X",
                withdraw_amount,
                this.props.min_amount /
                utils.get_asset_precision(this.props.asset_precision)
            );*/
            this.setState({ minAmountError: lessThanMinimum });
            return lessThanMinimum;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
                if (!this.state.withdraw_address_is_valid) {
                    this.showConfirmationModal();
                } else if (parseFloat(this.state.withdraw_amount) > 0) {
                    if (!common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                        var withdrawals = [];
                        withdrawals.push(this.state.withdraw_address);
                        common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                            wallet: this.props.output_wallet_type,
                            addresses: withdrawals
                        });
                    } else {
                        var _withdrawals = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_wallet_type);
                        if (_withdrawals.indexOf(this.state.withdraw_address) == -1) {
                            _withdrawals.push(this.state.withdraw_address);
                            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                                wallet: this.props.output_wallet_type,
                                addresses: _withdrawals
                            });
                        }
                    }
                    common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].setLast({
                        wallet: this.props.output_wallet_type,
                        address: this.state.withdraw_address
                    });
                    var asset = this.props.asset;

                    var _state2 = this.state,
                        feeAmount = _state2.feeAmount,
                        fee_asset_id = _state2.fee_asset_id;


                    var amount = parseFloat(String.prototype.replace.call(this.state.withdraw_amount, /,/g, ""));
                    var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                        asset_id: asset.get("id"),
                        precision: asset.get("precision"),
                        real: amount
                    });

                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.props.output_supportsPublicKey ? ":" + this.state.withdraw_publicKey : "") + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : fee_asset_id);

                    this.setState({
                        empty_withdraw_value: false
                    });
                } else {
                    this.setState({
                        empty_withdraw_value: true
                    });
                }
            }
        }
    }, {
        key: "onSubmitConfirmation",
        value: function onSubmitConfirmation() {
            this.hideConfirmationModal();

            if (!common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                var withdrawals = [];
                withdrawals.push(this.state.withdraw_address);
                common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                    wallet: this.props.output_wallet_type,
                    addresses: withdrawals
                });
            } else {
                var _withdrawals2 = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_wallet_type);
                if (_withdrawals2.indexOf(this.state.withdraw_address) == -1) {
                    _withdrawals2.push(this.state.withdraw_address);
                    common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                        wallet: this.props.output_wallet_type,
                        addresses: _withdrawals2
                    });
                }
            }
            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].setLast({
                wallet: this.props.output_wallet_type,
                address: this.state.withdraw_address
            });
            var asset = this.props.asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(asset.get("precision"));
            var amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");

            var _state3 = this.state,
                feeAmount = _state3.feeAmount,
                fee_asset_id = _state3.fee_asset_id;


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.props.output_supportsPublicKey ? ":" + this.state.withdraw_publicKey : "") + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : fee_asset_id);
        }
    }, {
        key: "onDropDownList",
        value: function onDropDownList() {
            if (common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].has(this.props.output_wallet_type)) {
                if (this.state.options_is_valid === false) {
                    this.setState({ options_is_valid: true });
                    this.setState({ withdraw_address_first: false });
                }

                if (this.state.options_is_valid === true) {
                    this.setState({ options_is_valid: false });
                }
            }
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "confirmation";
        }
    }, {
        key: "onAccountBalance",
        value: function onAccountBalance() {
            var feeAmount = this.state.feeAmount;

            if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
                var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    amount: this.props.balance.get("balance"),
                    asset_id: this.props.asset.get("id"),
                    precision: this.props.asset.get("precision")
                });

                // Subtract the fee if it is using the same asset
                if (total.asset_id === feeAmount.asset_id) {
                    total.minus(feeAmount);
                }

                this.setState({
                    withdraw_amount: total.getAmount({ real: true }),
                    empty_withdraw_value: false
                }, this._checkBalance);
            }
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({
                fee_asset_id: asset.get("id")
            }, this._updateFee);
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var from_account = state.from_account,
                feeStatus = state.feeStatus;


            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var fee_asset_types = [];
            if (!(from_account && from_account.get("balances"))) {
                return { fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].sortID);
            for (var key in account_balances) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(key);
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }

                if (asset) {
                    // Remove any assets that do not have valid core exchange rates
                    var priceIsValid = false,
                        p = void 0;
                    try {
                        p = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                            base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"](asset.getIn(["options", "core_exchange_rate", "base"]).toJS()),
                            quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"](asset.getIn(["options", "core_exchange_rate", "quote"]).toJS())
                        });
                        priceIsValid = p.isValid();
                    } catch (err) {
                        priceIsValid = false;
                    }

                    if (asset.get("id") !== "1.3.0" && !priceIsValid) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var _state4 = this.state,
                withdraw_address_selected = _state4.withdraw_address_selected,
                withdraw_publicKey = _state4.withdraw_publicKey,
                memo = _state4.memo;

            var storedAddress = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_wallet_type);
            var balance = null;

            var account_balances = this.props.account.get("balances").toJS();
            var asset_types = Object.keys(account_balances);

            var withdrawModalId = this.getWithdrawModalId();
            var invalid_address_message = null;
            var options = null;
            var confirmation = null;

            if (this.state.options_is_valid) {
                options = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: !storedAddress.length ? "rudex-disabled-options" : "rudex-options"
                    },
                    storedAddress.map(function (name, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "a",
                            {
                                key: index,
                                onClick: this.onSelectChanged.bind(this, index)
                            },
                            name
                        );
                    }, this)
                );
            }

            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length) {
                if (!this.state.withdraw_address_is_valid) {
                    invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            content: "gateway.valid_address",
                            coin_type: this.props.output_coin_type
                        })
                    );
                    confirmation = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Modal"],
                        {
                            closable: false,
                            footer: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                                {
                                    key: "submit",
                                    type: "primary",
                                    onClick: this.onSubmitConfirmation.bind(this)
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("modal.confirmation.accept")
                            ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                                {
                                    key: "cancel",
                                    style: { marginLeft: "8px" },
                                    onClick: this.hideConfirmationModal
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("modal.confirmation.cancel")
                            )],
                            visible: this.state.isConfirmationModalVisible,
                            onCancel: this.hideConfirmationModal
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.confirmation.title" })
                        )
                    );
                }
                // if (this.state.withdraw_address_is_valid)
                //   invalid_address_message = <Icon name="checkmark-circle" title="icons.checkmark_circle.operation_succeed" className="success" />;
                // else
                //   invalid_address_message = <Icon name="cross-circle" title="icons.cross_circle.operation_failed" className="alert" />;
            }

            var tabIndex = 1;
            var withdraw_memo = null;

            if (this.props.output_supports_memos) {
                withdraw_memo = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.memo" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                        rows: "3",
                        value: memo,
                        tabIndex: tabIndex++,
                        onChange: this.onMemoChanged.bind(this)
                    })
                );
            }

            // Estimate fee VARIABLES

            var _getAvailableAssets4 = this._getAvailableAssets(),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (asset_types.length > 0) {
                var current_asset_id = this.props.asset.get("id");
                if (current_asset_id) {
                    var current = account_balances[current_asset_id];
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        "\xA0:\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: "set-cursor",
                                onClick: this.onAccountBalance.bind(this)
                            },
                            current ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                balance: account_balances[current_asset_id]
                            }) : 0
                        )
                    );
                } else balance = "No funds";
            } else {
                balance = "No funds";
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "form",
                {
                    className: "grid-block vertical full-width-content",
                    style: { paddingTop: "0px" }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-container" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            label: "modal.withdraw.amount",
                            amount: this.state.withdraw_amount,
                            asset: this.props.asset.get("id"),
                            assets: [this.props.asset.get("id")],
                            placeholder: "0.0",
                            onChange: this.onWithdrawAmountChange.bind(this),
                            display_balance: balance
                        }),
                        this.state.empty_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.valid" })
                        ) : null,
                        this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.insufficient" })
                        ) : null,
                        this.state.minAmountError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.rudex.min_amount_error" })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            { className: "no-margin", style: { paddingTop: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "b",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "gateway.rudex.min_amount",
                                    minAmount: common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
                                    symbol: this.props.output_coin_symbol
                                })
                            )
                        )
                    ),
                    this.state.feeAmount ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block gate_fee" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            refCallback: this.setNestedRef.bind(this),
                            disabled: true,
                            amount: this.state.feeAmount.getAmount({
                                real: true
                            }),
                            onChange: this.onFeeChanged.bind(this),
                            asset: this.state.feeAmount.asset_id,
                            assets: fee_asset_types,
                            tabIndex: tabIndex++
                        }),
                        !this.state.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.noFeeBalance" })
                        ) : null,
                        !this.state.hasPoolBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.noPoolBalance" })
                        ) : null
                    ) : null,
                    this.props.gateFee ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "amount-selector right-selector",
                            style: { paddingBottom: 20 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.fee" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "text",
                                disabled: true,
                                value: this.props.gateFee
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "dropdown-wrapper inactive" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        this.props.output_coin_symbol
                                    )
                                )
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "span",
                                content: "modal.withdraw.address"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "rudex-select-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "text",
                                    value: withdraw_address_selected,
                                    tabIndex: "4",
                                    onChange: this.onWithdrawAddressChanged.bind(this),
                                    autoComplete: "off"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { onClick: this.onDropDownList.bind(this) },
                                    "\u25BC"
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "rudex-position-options" },
                            options
                        ),
                        invalid_address_message
                    ),
                    this.props.output_supportsPublicKey ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                component: "span",
                                content: "modal.withdraw.public_key"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "rudex-select-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                    type: "text",
                                    value: withdraw_publicKey,
                                    tabIndex: "5",
                                    onChange: this.onWithdrawPublicKeyChanged.bind(this),
                                    onInput: this.onWithdrawPublicKeyChanged.bind(this),
                                    autoComplete: "off"
                                })
                            )
                        )
                    ) : null,
                    withdraw_memo,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                            {
                                disabled: this.state.error || this.state.balanceError || this.state.minAmountError || !this.state.withdraw_publicKey_not_empty,
                                type: "primary",
                                onClick: this.onSubmit.bind(this)
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("modal.withdraw.submit")
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                            {
                                onClick: this.props.hideModal,
                                style: { marginLeft: "8px" }
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("account.perm.cancel")
                        )
                    ),
                    confirmation
                )
            );
        }
    }]);

    return RuDexWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

RuDexWithdrawModal.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    output_coin_name: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string.isRequired,
    output_coin_symbol: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string.isRequired,
    output_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    output_wallet_type: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    output_supports_memos: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired,
    output_supportsPublicKey: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired,
    amount_to_withdraw: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number,
    gateFee: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number
};


RuDexWithdrawModal = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RuDexWithdrawModal);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_11__["connect"])(RuDexWithdrawModal, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"]];
    },
    getProps: function getProps(props) {
        return {
            fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().settings.get("fee_asset")
        };
    }
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(441).Buffer))

/***/ }),

/***/ 3033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoinList", function() { return fetchCoinList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(745);


var rudexStorage = new _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"]("");

function fetchCoinList() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].COINS_LIST;

    return fetch(url, { method: "post" }).then(function (reply) {
        return reply.json().then(function (result) {
            return result;
        });
    }).catch(function (err) {
        console.log("error fetching rudex list of coins", err, url);
    });
}

function requestDepositAddress(_ref) {
    var inputCoinType = _ref.inputCoinType,
        outputCoinType = _ref.outputCoinType,
        outputAddress = _ref.outputAddress,
        _ref$url = _ref.url,
        url = _ref$url === undefined ? api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].BASE : _ref$url,
        stateCallback = _ref.stateCallback;

    var body = {
        inputCoinType: inputCoinType,
        outputCoinType: outputCoinType,
        outputAddress: outputAddress
    };

    var body_string = JSON.stringify(body);

    fetch(url + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].NEW_DEPOSIT_ADDRESS, {
        method: "post",
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
        }),
        body: body_string
    }).then(function (reply) {
        reply.json().then(function (json) {
            // console.log( "reply: ", json )
            var address = {
                address: json.inputAddress || "unknown",
                memo: json.inputMemo,
                error: json.error || null
            };
            if (stateCallback) stateCallback(address);
        }, function (error) {
            // console.log( "error: ",error  );
            if (stateCallback) stateCallback({ address: "unknown", memo: null });
        });
    }, function (error) {
        // console.log( "error: ",error  );
        if (stateCallback) stateCallback({ address: "unknown", memo: null });
    }).catch(function (err) {
        console.log("fetch error:", err);
    });
}

function validateAddress(_ref2) {
    var _ref2$url = _ref2.url,
        url = _ref2$url === undefined ? api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["rudexAPIs"].BASE : _ref2$url,
        walletType = _ref2.walletType,
        newAddress = _ref2.newAddress;

    if (!newAddress) return new Promise(function (res) {
        return res();
    });
    return fetch(url + "/wallets/" + walletType + "/check-address", {
        method: "post",
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({ address: newAddress })
    }).then(function (reply) {
        return reply.json().then(function (json) {
            return json;
        });
    }).catch(function (err) {
        console.log("validate error:", err);
    });
}

function hasWithdrawalAddress(wallet) {
    return rudexStorage.has("history_address_" + wallet);
}

function setWithdrawalAddresses(_ref3) {
    var wallet = _ref3.wallet,
        addresses = _ref3.addresses;

    rudexStorage.set("history_address_" + wallet, addresses);
}

function getWithdrawalAddresses(wallet) {
    return rudexStorage.get("history_address_" + wallet, []);
}

function setLastWithdrawalAddress(_ref4) {
    var wallet = _ref4.wallet,
        address = _ref4.address;

    rudexStorage.set("history_address_last_" + wallet, address);
}

function getLastWithdrawalAddress(wallet) {
    return rudexStorage.get("history_address_last_" + wallet, "");
}

var WithdrawAddresses = {
    has: hasWithdrawalAddress,
    set: setWithdrawalAddresses,
    get: getWithdrawalAddresses,
    setLast: setLastWithdrawalAddress,
    getLast: getLastWithdrawalAddress
};

/***/ }),

/***/ 3034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2144);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2017);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2160);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 *  Given a balance_object, displays it in a pretty way
 *
 *  Expects one property, 'balance' which should be a balance_object id
 */

var AccountBalance = function (_React$Component) {
    _inherits(AccountBalance, _React$Component);

    function AccountBalance() {
        _classCallCheck(this, AccountBalance);

        return _possibleConstructorReturn(this, (AccountBalance.__proto__ || Object.getPrototypeOf(AccountBalance)).apply(this, arguments));
    }

    _createClass(AccountBalance, [{
        key: "render",
        value: function render() {
            var asset_id = this.props.asset.get("id");
            var balance_id = this.props.account.getIn(["balances", asset_id]);

            if (balance_id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
                balance: balance_id,
                replace: this.props.replace
            });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "0\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    name: this.props.asset.get("symbol"),
                    replace: this.props.replace
                })
            );
        }
    }]);

    return AccountBalance;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountBalance.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
};
AccountBalance.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountBalance));

/***/ }),

/***/ 3035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RuDexDepositAddressCache = function () {
    function RuDexDepositAddressCache() {
        _classCallCheck(this, RuDexDepositAddressCache);

        // increment this to force generating new addresses for all mappings
        this.current_rudex_address_cache_version_string = "1";
    }

    _createClass(RuDexDepositAddressCache, [{
        key: "getIndexForDepositKeyInExchange",
        value: function getIndexForDepositKeyInExchange(account_name, input_coin_type, output_coin_type) {
            var args = [this.current_rudex_address_cache_version_string, account_name, input_coin_type, output_coin_type];
            return args.reduce(function (previous, current) {
                return previous.concat("[", current, "]");
            }, "");
        }

        // returns {"address": address, "memo": memo}, with a null memo if not applicable

    }, {
        key: "getCachedInputAddress",
        value: function getCachedInputAddress(exchange_name, account_name, input_coin_type, output_coin_type) {
            var wallet = stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__["default"].getWallet();
            if (!wallet) return null;
            wallet.deposit_keys = wallet.deposit_keys || {};
            wallet.deposit_keys[exchange_name] = wallet.deposit_keys[exchange_name] || {};
            var index = this.getIndexForDepositKeyInExchange(account_name, input_coin_type, output_coin_type);
            wallet.deposit_keys[exchange_name][index] = wallet.deposit_keys[exchange_name][index] || [];

            var number_of_keys = wallet.deposit_keys[exchange_name][index].length;
            if (number_of_keys) return wallet.deposit_keys[exchange_name][index][number_of_keys - 1];
            return null;
        }
    }, {
        key: "cacheInputAddress",
        value: function cacheInputAddress(exchange_name, account_name, input_coin_type, output_coin_type, address, memo) {
            if (address === "unknown") return;

            var wallet = stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__["default"].getWallet();
            if (!wallet) return null;
            wallet.deposit_keys = wallet.deposit_keys || {};
            wallet.deposit_keys[exchange_name] = wallet.deposit_keys[exchange_name] || {};
            var index = this.getIndexForDepositKeyInExchange(account_name, input_coin_type, output_coin_type);
            wallet.deposit_keys[exchange_name][index] = wallet.deposit_keys[exchange_name][index] || [];
            wallet.deposit_keys[exchange_name][index].push({
                address: address,
                memo: memo
            });
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__["default"]._updateWallet();
        }
    }]);

    return RuDexDepositAddressCache;
}(); // RuDexDepositAddressCache

/* harmony default export */ __webpack_exports__["default"] = (RuDexDepositAddressCache);

/***/ }),

/***/ 3036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3037),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ 3037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(404);

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(3038);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyToClipboard = exports.CopyToClipboard = function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;


      var elem = _react2.default.Children.only(children);

      var result = (0, _copyToClipboard2.default)(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyToClipboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _text = _props.text,
          _onCopy = _props.onCopy,
          _options = _props.options,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);

      var elem = _react2.default.Children.only(children);

      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.PureComponent);

CopyToClipboard.defaultProps = {
  onCopy: undefined,
  options: undefined
};

/***/ }),

/***/ 3038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(1600);

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy5lODU1YTk1MDdjNDBiNDgxOGE2Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L0Rpc2FibGVDb3B5VGV4dC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QmFsYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb3B5LXRvLWNsaXBib2FyZC9saWIvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3B5LXRvLWNsaXBib2FyZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBhY2NvdW50VXRpbHMgZnJvbSBcImNvbW1vbi9hY2NvdW50X3V0aWxzXCI7XG5pbXBvcnQge3VwZGF0ZUdhdGV3YXlCYWNrZXJzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlVdGlsc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbi8vaW1wb3J0IE9wZW5sZWRnZXJHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvT3BlbmxlZGdlckdhdGV3YXlcIjtcbi8vaW1wb3J0IE9wZW5MZWRnZXJGaWF0RGVwb3NpdFdpdGhkcmF3YWwgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL09wZW5MZWRnZXJGaWF0RGVwb3NpdFdpdGhkcmF3YWxcIjtcbi8vaW1wb3J0IE9wZW5MZWRnZXJGaWF0VHJhbnNhY3Rpb25IaXN0b3J5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeVwiO1xuLy9pbXBvcnQgQmxvY2tUcmFkZXNCcmlkZ2VEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2Jsb2NrdHJhZGVzL0Jsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3RcIjtcbi8vaW1wb3J0IENpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2NpdGFkZWwvQ2l0YWRlbEJyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBSdURleEdhdGV3YXkgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXlcIjtcbmltcG9ydCBHYXRld2F5U3RvcmUgZnJvbSBcInN0b3Jlcy9HYXRld2F5U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBEZXBvc2l0TW9kYWwgZnJvbSBcIi4uL01vZGFsL0RlcG9zaXRNb2RhbFwiO1xuaW1wb3J0IFdpdGhkcmF3TW9kYWwgZnJvbSBcIi4uL01vZGFsL1dpdGhkcmF3TW9kYWxOZXdcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5cbmNsYXNzIEFjY291bnREZXBvc2l0V2l0aGRyYXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbnRhaW5lZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29udGFpbmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwib2xTZXJ2aWNlXCIsIFwiZ2F0ZXdheVwiKSxcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcInJ1ZGV4U2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBiaXRzcGFya1NlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgXCJiaXRzcGFya1NlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBcImdhdGV3YXlcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHhidHN4U2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcInhidHN4U2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBidFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJidFNlcnZpY2VcIiwgXCJicmlkZ2VcIiksXG4gICAgICAgICAgICBjaXRhZGVsU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImNpdGFkZWxTZXJ2aWNlXCIsIFwiYnJpZGdlXCIpLFxuICAgICAgICAgICAgbWV0YVNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJtZXRhU2VydmljZVwiLCBcImJyaWRnZVwiKSxcbiAgICAgICAgICAgIGFjdGl2ZVNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVTZXJ2aWNlXCIsIDApLFxuXG4gICAgICAgICAgICBSdWRleE5vdGljZTFJbmZvcm1lZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5zZXJ2aWNlc0Rvd24gIT09IHRoaXMucHJvcHMuc2VydmljZXNEb3duIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ibG9ja1RyYWRlc0JhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLm9wZW5MZWRnZXJCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wZW5MZWRnZXJCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jaXRhZGVsQmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaXRhZGVsQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5vbFNlcnZpY2UgIT09IHRoaXMuc3RhdGUub2xTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUucnVkZXhTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLnJ1ZGV4U2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmJpdHNwYXJrU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5iaXRzcGFya1NlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS54YnRzeFNlcnZpY2UgIT09IHRoaXMuc3RhdGUueGJ0c3hTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYnRTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmJ0U2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmNpdGFkZWxTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmNpdGFkZWxTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUubWV0YVNlcnZpY2UgIT09IHRoaXMuc3RhdGUubWV0YVNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5hY3RpdmVTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmFjdGl2ZVNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZCAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudExvY2FsZSAhPT0gdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBhY2NvdW50VXRpbHMuZ2V0RmluYWxGZWVBc3NldCh0aGlzLnByb3BzLmFjY291bnQsIFwidHJhbnNmZXJcIik7XG4gICAgfVxuXG4gICAgdG9nZ2xlT0xTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvbFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJ1ZGV4Tm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkOiAhdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVSdURFWFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVhidHN4U2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgeGJ0c3hTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQml0U3BhcmtTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiaXRzcGFya1NlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVCVFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJ0U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYnRTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUNpdGFkZWxTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaXRhZGVsU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZU1ldGFTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtZXRhU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbWV0YVNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TZXRTZXJ2aWNlKGUpIHtcbiAgICAgICAgLy9sZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlcnZpY2VzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNlcnZpY2U6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNlcnZpY2VzKHJ1ZGV4R2F0ZXdheUNvaW5zKSB7XG4gICAgICAgIC8vbGV0IHNlcnZpY2VzID0gW1wiT3BlbmxlZGdlciAoT1BFTi5YKVwiLCBcIkJsb2NrVHJhZGVzIChUUkFERS5YKVwiLCBcIlRyYW5zd2lzZXJcIiwgXCJCaXRLYXBpdGFsXCJdO1xuICAgICAgICBsZXQgc2VyTGlzdCA9IFtdO1xuICAgICAgICBsZXQge2FjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtydWRleFNlcnZpY2UsIFJ1ZGV4Tm90aWNlMUluZm9ybWVkfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGFncmVlbWVudF9ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0Ny1j0L7Qs9C70LDRiNC10L3QuNC1LdC+0LEt0L7QutCw0LfQsNC90LjQuC3Rg9GB0LvRg9CzLdGI0LvRjtC30LBcIjtcbiAgICAgICAgbGV0IGFncmVlbWVudF9lbiA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0NS1nYXRld2F5LXNlcnZpY2UtYWdyZWVtZW50XCI7XG5cbiAgICAgICAgc2VyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUnVERVggKFJVREVYLlgpXCIsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBcIlJVREVYXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJ1REVYU2VydmljZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWRleFNlcnZpY2UgPT09IFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GaWF0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7cnVkZXhTZXJ2aWNlID09PSBcImdhdGV3YXlcIiAmJiBydWRleEdhdGV3YXlDb2lucy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudExvY2FsZSA9PSBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZ3JlZW1lbnRfcnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUnVkZXhOb3RpY2UxSW5mb3JtZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFfaW5mb3JtZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlMUluZm9ybWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhHYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM9e3J1ZGV4R2F0ZXdheUNvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHtydWRleFNlcnZpY2UgPT09IFwiZmlhdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmNvbWluZ19zb29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIHNlcnZpY2VzRG93bn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZVNlcnZpY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgcnVkZXhHYXRld2F5Q29pbnMgPSB0aGlzLnByb3BzLnJ1ZGV4QmFja2VkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXJ2aWNlcyA9IHRoaXMucmVuZGVyU2VydmljZXMocnVkZXhHYXRld2F5Q29pbnMpO1xuXG4gICAgICAgIGNvbnN0IHNlcnZpY2VOYW1lcyA9IFtdO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHNlcnZpY2VzLm1hcCgoc2VydmljZXNfb2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2VydmljZU5hbWVzLnB1c2goc2VydmljZXNfb2JqLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc19vYmoubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lc1thY3RpdmVTZXJ2aWNlXTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2VEb3duID0gc2VydmljZXNEb3duLmdldChjdXJyZW50U2VydmljZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250YWluZWQgPyBcImdyaWQtY29udGVudFwiIDogXCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbnRhaW5lZCA/IFwiXCIgOiBcImdyaWQtY29udGVudFwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJkZXBvc2l0X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cImRlcG9zaXRfbW9kYWxfbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VkQ29pbnM9e3RoaXMucHJvcHMuYmFja2VkQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ3aXRoZHJhd19tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJ3aXRoZHJhd19tb2RhbF9uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZWRDb2lucz17dGhpcy5wcm9wcy5iYWNrZWRDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZ2F0ZXdheS5waGFzZV9vdXRfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVwb3NpdF9tb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy5kZXBvc2l0X21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmRlcG9zaXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIndpdGhkcmF3X21vZGFsX2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLndpdGhkcmF3X21vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMud2l0aGRyYXdfbW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnRpdGxlXCIgY29tcG9uZW50PVwiaDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJkZXBvc2l0LXNob3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJyZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzbWFsbC1vcmRlci0yIG1lZGl1bS1vcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuc2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2V0U2VydmljZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlU2VydmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGdhdGV3YXkudW5hdmFpbGFibGVfJHtjdXJyZW50U2VydmljZU5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xIHNtYWxsLW9yZGVyLTEgbWVkaXVtLW9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA0MCwgd2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXJ2aWNlRG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aXZlU2VydmljZSAmJiBzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VydmljZXNbMF0udGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuQWNjb3VudERlcG9zaXRXaXRoZHJhdyA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudERlcG9zaXRXaXRoZHJhdyk7XG5cbmNsYXNzIERlcG9zaXRTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdXBkYXRlR2F0ZXdheUJhY2tlcnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QWNjb3VudERlcG9zaXRXaXRoZHJhdyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIERlcG9zaXRTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlLCBHYXRld2F5U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgb3BlbkxlZGdlckJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcnVkZXhCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlJVREVYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBiaXRzcGFya0JhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiU1BBUktERVhcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJsb2NrVHJhZGVzQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJUUkFERVwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2l0YWRlbEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiQ0lUQURFTFwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgeGJ0c3hCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlhCVFNYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlc0Rvd246IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmRvd24gfHwge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0IGZyb20gXCIuL1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKHByb3BzLCB7YWN0aW9uOiBcImRlcG9zaXRcIn0pLFxuICAgICAgICAgICAgYWN0aW9uOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhBY3Rpb25cIiwgXCJkZXBvc2l0XCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fcnVkZXhcIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJQUFlcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucHJvdmlkZXIgIT09IHRoaXMucHJvcHMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4obmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luX3J1ZGV4XyR7dGhpcy5zdGF0ZS5hY3Rpb259YF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH0qL1xuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX3J1ZGV4XCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVDb2luOiBhY3RpdmVDb2luXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7W1wicnVkZXhBY3Rpb25cIl06IHR5cGV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y29pbnMsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVDb2luLCBhY3Rpb259ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNvaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkQ29pbnMgPSBjb2lucy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICBpZiAoIWEgfHwgIWEuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICA/IGEuZGVwb3NpdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgOiBhLndpdGhkcmF3YWxBbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbk9wdGlvbnMgPSBmaWx0ZXJlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbDtcblxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gb3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeCA9IG5hbWUgPT09IFwiUFBZXCIgPyBcIlwiIDogXCJSVURFWC5cIjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3ByZWZpeCArIG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luID0gZmlsdGVyZWRDb2lucy5maWx0ZXIoY29pbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpID09PSBhY3RpdmVDb2luXG4gICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbCA9PT0gYWN0aXZlQ29pbjtcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgaWYgKCFjb2luKSBjb2luID0gZmlsdGVyZWRDb2luc1swXTtcblxuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gdGhpcy5zdGF0ZS5hY3Rpb24gPT09IFwiZGVwb3NpdFwiO1xuXG4gICAgICAgIGxldCBzdXBwb3J0VXJsID0gXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb21cIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW1hcmdpbiB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJnYXRld2F5LmNob29zZV9cIiArIGFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9XCJleHRlcm5hbC1jb2luLXR5cGVzIGJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvaW4uc3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXk9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyX2FjY291bnQ9e2NvaW4uaXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0PXtjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZT17Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZT17Y29pbi5iYWNraW5nQ29pbi50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2FjY291bnQ9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF93YWxsZXRfdHlwZT17Y29pbi53YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzX291dHB1dF9tZW1vcz17Y29pbi5zdXBwb3J0c01lbW9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1B1YmxpY0tleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luLnN1cHBvcnRzUHVibGljS2V5IHx8IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1R5cGU9e2NvaW4ubWVtb1R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl9hbW91bnQ9e2NvaW4ubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRlRmVlPXtjb2luLmdhdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17Y29pbi5wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM9e2NvaW4uY29uZmlybWF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3VwcG9ydDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5zdXBwb3J0X2Jsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luICYmIGNvaW4uc3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Fzc2V0LCB0bywgZnJvbUFjY291bnR9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNMaXN0PXtJbW11dGFibGUuTGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucmVjZW50X1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB0by5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tQWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zYWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJ1RGV4R2F0ZXdheSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBEaXNhYmxlQ29weVRleHQgZnJvbSBcIi4uL0Rpc2FibGVDb3B5VGV4dFwiO1xuaW1wb3J0IFJ1RGV4V2l0aGRyYXdNb2RhbCBmcm9tIFwiLi9SdURleFdpdGhkcmF3TW9kYWxcIjtcbmltcG9ydCBBY2NvdW50QmFsYW5jZSBmcm9tIFwiLi4vLi4vQWNjb3VudC9BY2NvdW50QmFsYW5jZVwiO1xuaW1wb3J0IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xuaW1wb3J0IHtyZXF1ZXN0RGVwb3NpdEFkZHJlc3N9IGZyb20gXCJsaWIvY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHthdmFpbGFibGVHYXRld2F5c30gZnJvbSBcImxpYi9jb21tb24vZ2F0ZXdheXNcIjtcblxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBpc3N1ZXJfYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGRlcG9zaXRfYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9pbl9mYXZvcl9vZjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX21lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBzdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVtb1R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGFzc2V0X3ByZWNpc2lvbjogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3M6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzID0gdGhpcy5hZGREZXBvc2l0QWRkcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0RGVwb3NpdE9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRDb2luVHlwZTogdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dEFkZHJlc3M6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgc3RhdGVDYWxsYmFjazogdGhpcy5hZGREZXBvc2l0QWRkcmVzc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9ub3RpZnkoc3UpIHtcbiAgICAgICAgbGV0IHN0ck4gPSBcImNvcHlfYWRkcmVzc1wiO1xuXG4gICAgICAgIGlmIChzdSA9PSBcIm1lbW9cIikgc3RyTiA9IFwiY29weV9tZW1vXCI7XG5cbiAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5ub3RpZnkuXCIgKyBzdHJOKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAvLyAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyh0aGlzLnByb3BzLmdhdGV3YXksIGFjY291bnRfbmFtZSwgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSwgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSk7XG4gICAgLy8gfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9uYW1lfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzc30pO1xuICAgIH1cblxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwidGhpcy5wcm9wcy5pc3N1ZXI6IFwiLCB0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LnRvSlMoKSApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInRoaXMucmVjZWl2ZV9hc3NldC5pc3N1ZXI6IFwiLCB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQudG9KUygpIClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFwid2l0aGRyYXdfYXNzZXRfXCIgK1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcbiAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3KCkge1xuICAgICAgICB0aGlzLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVtcHR5Um93ID0gPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwiLCBtaW5IZWlnaHQ6IDE1MH19IC8+O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMucmVjZWl2ZV9hc3NldFxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0ID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xuXG4gICAgICAgIC8vIGxldCBiYWxhbmNlID0gXCIwIFwiICsgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZikge1xuICAgICAgICAgICAgbGV0IGhhc19ub256ZXJvX2JhbGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdF9pZCA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3RfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX29iamVjdF9pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlID0gYmFsYW5jZV9vYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgIT0gMCkgaGFzX25vbnplcm9fYmFsYW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNfbm9uemVyb19iYWxhbmNlKSByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LnRvSlMoKTtcbiAgICAgICAgLy8gbGV0IGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcyk7XG4gICAgICAgIC8vIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgLy8gICAgIGlmKCBjdXJyZW50X2Fzc2V0X2lkIClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBiYWxhbmNlID0gKDxzcGFuPjxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIi8+OiA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfS8+PC9zcGFuPik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG4gICAgICAgIGlmICghcmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdENvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMgJiYgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJpcnJldmVyc2libGVcIikge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubGFzdF9pcnJldmVyc2libGVcIiAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImJsb2Nrc1wiICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0Q29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5uX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3RoaXMucHJvcHMuY29uZmlybWF0aW9ucy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3X21vZGFsX2lkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBkZXBvc2l0X21lbW8gPSBudWxsO1xuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSA8c3Bhbj5wbGVhc2UgdXNlIHt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YuZ2V0KFwic3ltYm9sXCIpfSBpbnN0ZWFkLiA8c3BhbiBkYXRhLXRpcD17dGhpcy5wcm9wcy5kZXByZWNhdGVkX21lc3NhZ2V9IGRhdGEtcGxhY2U9XCJyaWdodFwiIGRhdGEtaHRtbD17dHJ1ZX0+PEljb24gbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCIgLz48L3NwYW4+PFJlYWN0VG9vbHRpcCAvPjwvc3Bhbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyB7XG4gICAgICAgIGxldCBjbGlwYm9hcmRUZXh0ID0gXCJcIjtcbiAgICAgICAgbGV0IG1lbW9UZXh0O1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtb19wcmVmaXg7XG4gICAgICAgIGxldCBjdXJyZW50R2F0ZXdheSA9IFwiUlVERVhcIjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uc2ltcGxlQXNzZXRHYXRld2F5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudDtcbiAgICAgICAgICAgIGlmICghIXRoaXMucHJvcHMubWVtb1R5cGUgJiYgdGhpcy5wcm9wcy5tZW1vVHlwZSA9PT0gXCJidHNpZFwiKSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2J0c2lkXCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKS5yZXBsYWNlKFwiMS4yLlwiLCBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXCJhcHBlbmRcIl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZF9kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPnttZW1vVGV4dH08L3NwYW4+O1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlICsgXCI6XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXJlY2VpdmVfYWRkcmVzcyAmJiAhdGhpcy5wcm9wcy5zdXBwb3J0c01lbW9zKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcy5tZW1vKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgYSBkZXBvc2l0IG1lbW8gKGxpa2UgZXRoZXJldW0pLCB3ZSBuZWVkIHRvIGRpc3BsYXkgYm90aCB0aGUgYWRkcmVzcyBhbmQgdGhlIG1lbW8gdGhleSBuZWVkIHRvIHNlbmRcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcztcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkZXBvc2l0X21lbW8gPSA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLm1lbW99PC9zcGFuPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgdW5pcXVlIGRlcG9zaXQgYWRkcmVzc2VzIHRvIHNlbGVjdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnlvdXJfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdENvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpPntkZXBvc2l0Q29uZmlybWF0aW9ufTwvaT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIiwgZm9udFNpemU6IFwiMS4xcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREUkVTUzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb3B5VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkudXNlX2NvcHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2FibGVDb3B5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfbWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNhYmxlQ29weVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29weVRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnVzZV9jb3B5X2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNRU1POiA8Yj57ZGVwb3NpdF9tZW1vfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2NsaXBib2FyZFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLl9ub3RpZnkoXCJhZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtb1RleHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17bWVtb1RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLl9ub3RpZnkoXCJtZW1vXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Q29weSBtZW1vPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19zdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+V2hlbiB5b3Ugd2l0aGRyYXcge3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9LCB5b3Ugd2lsbCByZWNlaXZlIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9IGF0IGEgMToxIHJhdGlvIChtaW51cyBmZWVzKS48L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd190b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMS4zcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uV2l0aGRyYXcuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkud2l0aGRyYXdfY29pblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbjogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnNob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9uYW1lPXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9zeW1ib2w9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF93YWxsZXRfdHlwZT17dGhpcy5wcm9wcy5kZXBvc2l0X3dhbGxldF90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9zdXBwb3J0c1B1YmxpY0tleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19wcmVmaXg9e3dpdGhkcmF3X21lbW9fcHJlZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsX2lkPXt3aXRoZHJhd19tb2RhbF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXt0aGlzLnByb3BzLm1pbl9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17dGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKClbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgRGlzYWJsZUNvcHlUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgZGlzYWJsZUNvcHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHJlcGxhY2VDb3B5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ29weSA9IHRoaXMuX2hhbmRsZUNvcHkuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZFJlZikgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5jaGlsZFJlZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2hhbmRsZUNvcHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5faGFuZGxlQ29weSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUNvcHkoZXZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUNvcHkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZXZ0LmNsaXBib2FyZERhdGEuc2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQvcGxhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiByZWY9e3JlZiA9PiAodGhpcy5jaGlsZFJlZiA9IHJlZil9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNhYmxlQ29weVRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XG5pbXBvcnQge3ZhbGlkYXRlQWRkcmVzcywgV2l0aGRyYXdBZGRyZXNzZXN9IGZyb20gXCJjb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luYywgY2hlY2tCYWxhbmNlfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtCdXR0b24sIE1vZGFsfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIFJ1RGV4V2l0aGRyYXdNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNzdWVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvdXRwdXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X3N1cHBvcnRzUHVibGljS2V5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBhbW91bnRfdG9fd2l0aGRyYXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRoaXMucHJvcHMuYW1vdW50X3RvX3dpdGhkcmF3LFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcbiAgICAgICAgICAgICAgICBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5OiBcIlwiLFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTogdGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgbWVtbzogXCJcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IHByb3BzLmFjY291bnQsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6XG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldChwcm9wcy5mZWVfYXNzZXRfc3ltYm9sKSB8fFxuICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcbiAgICAgICAgICAgIGZlZVN0YXR1czoge31cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLCBwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NoZWNrTWluQW1vdW50ID0gdGhpcy5fY2hlY2tNaW5BbW91bnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlID0gZGVib3VuY2UodGhpcy5fdXBkYXRlRmVlLmJpbmQodGhpcyksIDI1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwgPSB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bk1vdW50ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQgJiZcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IG5wLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1czoge30sXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogbmV3IEFzc2V0KHthbW91bnQ6IDB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpcm1hdGlvbk1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVDb25maXJtYXRpb25Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUZlZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgbGV0IHtmZWVfYXNzZXRfaWQsIGZyb21fYWNjb3VudH0gPSBzdGF0ZTtcbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXNbMF0gIT09IGZlZV9hc3NldF9pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCA9IGZlZV9hc3NldF90eXBlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZnJvbV9hY2NvdW50KSByZXR1cm4gbnVsbDtcbiAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICBhY2NvdW50SUQ6IGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGZlZUlEOiBmZWVfYXNzZXRfaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1lbW8gPyBcIjpcIiArIHN0YXRlLm1lbW8gOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCh7ZmVlLCBoYXNCYWxhbmNlLCBoYXNQb29sQmFsYW5jZX0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVuTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBmZWUsXG4gICAgICAgICAgICAgICAgICAgIGhhc0JhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGhhc1Bvb2xCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogIWhhc0JhbGFuY2UgfHwgIWhhc1Bvb2xCYWxhbmNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja0ZlZVN0YXR1cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgbGV0IGFjY291bnQgPSBzdGF0ZS5mcm9tX2FjY291bnQ7XG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHtmZWVfYXNzZXRfdHlwZXM6IGFzc2V0c30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xuICAgICAgICAvLyBjb25zdCBhc3NldHMgPSBbXCIxLjMuMFwiLCB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTtcbiAgICAgICAgbGV0IGZlZVN0YXR1cyA9IHt9O1xuICAgICAgICBsZXQgcCA9IFtdO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIHAucHVzaChcbiAgICAgICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBmZWVJRDogYSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1lbW8gPyBcIjpcIiArIHN0YXRlLm1lbW8gOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICBQcm9taXNlLmFsbChwKVxuICAgICAgICAgICAgLnRoZW4oc3RhdHVzID0+IHtcbiAgICAgICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgoYSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thXSA9IHN0YXR1c1tpZHhdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1lbW9DaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogZS50YXJnZXQudmFsdWV9LCB0aGlzLl91cGRhdGVGZWUpO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXdBbW91bnRDaGFuZ2Uoe2Ftb3VudH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgIXBhcnNlRmxvYXQoYW1vdW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja01pbkFtb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q2hhbmdlZChpbmRleCkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApW2luZGV4XTtcbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQoZSkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZChlKSB7XG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfcHVibGljS2V5ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleTogbmV3X3dpdGhkcmF3X3B1YmxpY0tleSxcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHk6XG4gICAgICAgICAgICAgICAgbmV3X3dpdGhkcmF3X3B1YmxpY0tleSAhPSBcIlwiID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe1xuICAgICAgICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICAgICAgICB3YWxsZXRUeXBlOiBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBuZXdBZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICB9KS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAganNvbiA9IHtpc1ZhbGlkOiBmYWxzZX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzID09PSBuZXdfd2l0aGRyYXdfYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDoganNvbi5pc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IGpzb24uaGFzT3duUHJvcGVydHkoXCJwdWJsaWNLZXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ganNvbi5wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTogdGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBqc29uLmhhc093blByb3BlcnR5KFwicHVibGljS2V5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja0JhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIHdpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGJhbGFuY2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFiYWxhbmNlIHx8ICFmZWVBbW91bnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICAgICAgYmFsYW5jZVxuICAgICAgICApO1xuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6ICFoYXNCYWxhbmNlfSk7XG4gICAgICAgIHJldHVybiBoYXNCYWxhbmNlO1xuICAgIH1cblxuICAgIF9jaGVja01pbkFtb3VudCgpIHtcbiAgICAgICAgY29uc3Qge3dpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICh3aXRoZHJhd19hbW91bnQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbGVzc1RoYW5NaW5pbXVtID1cbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCA8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24pO1xuICAgICAgICAvKiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKVxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbkFtb3VudEVycm9yOiBsZXNzVGhhbk1pbmltdW19KTtcbiAgICAgICAgcmV0dXJuIGxlc3NUaGFuTWluaW11bTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxuICAgICAgICAgICAgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFsOiBhbW91bnRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgdGhpcy5zdGF0ZS53aXRoZHJhd19wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgbmV3IEJ1ZmZlcih0aGlzLnN0YXRlLm1lbW8sIFwidXRmLThcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCgpO1xuXG4gICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG4gICAgICAgIGxldCBwcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgIGxldCBhbW91bnQgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoYW1vdW50ICogcHJlY2lzaW9uLCAxMCksXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGZlZUFtb3VudCA/IGZlZUFtb3VudC5hc3NldF9pZCA6IGZlZV9hc3NldF9pZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRHJvcERvd25MaXN0KCkge1xuICAgICAgICBpZiAoV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2l0aGRyYXdfYWRkcmVzc19maXJzdDogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XG4gICAgICAgIHJldHVybiBcImNvbmZpcm1hdGlvblwiO1xuICAgIH1cblxuICAgIG9uQWNjb3VudEJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKSkuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU3VidHJhY3QgdGhlIGZlZSBpZiBpdCBpcyB1c2luZyB0aGUgc2FtZSBhc3NldFxuICAgICAgICAgICAgaWYgKHRvdGFsLmFzc2V0X2lkID09PSBmZWVBbW91bnQuYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICB0b3RhbC5taW51cyhmZWVBbW91bnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0b3RhbC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXROZXN0ZWRSZWYocmVmKSB7XG4gICAgICAgIHRoaXMubmVzdGVkUmVmID0gcmVmO1xuICAgIH1cblxuICAgIG9uRmVlQ2hhbmdlZCh7YXNzZXR9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHtmcm9tX2FjY291bnQsIGZlZVN0YXR1c30gPSBzdGF0ZTtcblxuICAgICAgICBmdW5jdGlvbiBoYXNGZWVQb29sQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmVlX2Fzc2V0X3R5cGVzID0gW107XG4gICAgICAgIGlmICghKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2ZlZV9hc3NldF90eXBlc307XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldE9iamVjdChrZXkpO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50X2JhbGFuY2VzW2tleV0pO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5zcGxpY2UoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGFzc2V0cyB0aGF0IGRvIG5vdCBoYXZlIHZhbGlkIGNvcmUgZXhjaGFuZ2UgcmF0ZXNcbiAgICAgICAgICAgICAgICBsZXQgcHJpY2VJc1ZhbGlkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbmV3IEFzc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gcC5pc1ZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhc3NldC5nZXQoXCJpZFwiKSAhPT0gXCIxLjMuMFwiICYmICFwcmljZUlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBmZWVfYXNzZXRfdHlwZXMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZVBvb2xCYWxhbmNlKGEpICYmIGhhc0JhbGFuY2UoYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZCwgd2l0aGRyYXdfcHVibGljS2V5LCBtZW1vfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBzdG9yZWRBZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgbGV0IGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcyk7XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3TW9kYWxJZCA9IHRoaXMuZ2V0V2l0aGRyYXdNb2RhbElkKCk7XG4gICAgICAgIGxldCBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IG51bGw7XG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbmZpcm1hdGlvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhc3RvcmVkQWRkcmVzcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicnVkZXgtZGlzYWJsZWQtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJ1ZGV4LW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVkQWRkcmVzcy5tYXAoZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENvbmZpcm1hdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuY29uZmlybWF0aW9uLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpXG4gICAgICAgICAgICAvLyAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gPEljb24gbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIiB0aXRsZT1cImljb25zLmNoZWNrbWFya19jaXJjbGUub3BlcmF0aW9uX3N1Y2NlZWRcIiBjbGFzc05hbWU9XCJzdWNjZXNzXCIgLz47XG4gICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gPEljb24gbmFtZT1cImNyb3NzLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMuY3Jvc3NfY2lyY2xlLm9wZXJhdGlvbl9mYWlsZWRcIiBjbGFzc05hbWU9XCJhbGVydFwiIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcbiAgICAgICAgbGV0IHdpdGhkcmF3X21lbW8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c19tZW1vcykge1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtbyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLm1lbW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXN0aW1hdGUgZmVlIFZBUklBQkxFU1xuICAgICAgICBsZXQge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcblxuICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF07XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldC1jdXJzb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NvdW50QmFsYW5jZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGZ1bGwtd2lkdGgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjBweFwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaXRoZHJhdyBhbW91bnQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJtb2RhbC53aXRoZHJhdy5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdBbW91bnRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1wdHlfd2l0aGRyYXdfdmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLnZhbGlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1pbkFtb3VudEVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudF9lcnJvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1tYXJnaW5cIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGZWUgc2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWVBbW91bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgZ2F0ZV9mZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e3RoaXMuc2V0TmVzdGVkUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmdldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2ZlZV9hc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0ZlZUJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc1Bvb2xCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vUG9vbEJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEdhdGUgZmVlICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5nYXRlRmVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvciByaWdodC1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5mZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtc2VsZWN0LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5vbkRyb3BEb3duTGlzdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjOTY2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXBvc2l0aW9uLW9wdGlvbnNcIj57b3B0aW9uc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIGZvciBQdWJsaWNLZXkgaW5wdXQgKGV4LlBSSVpNKSAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibW9kYWwud2l0aGRyYXcucHVibGljX2tleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXNlbGVjdC1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd19wdWJsaWNLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uV2l0aGRyYXdQdWJsaWNLZXlDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7LyogTWVtbyBpbnB1dCAqL31cbiAgICAgICAgICAgICAgICAgICAge3dpdGhkcmF3X21lbW99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFdpdGhkcmF3L0NhbmNlbCBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbkFtb3VudEVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnBlcm0uY2FuY2VsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybWF0aW9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUnVEZXhXaXRoZHJhd01vZGFsID0gQmluZFRvQ2hhaW5TdGF0ZShSdURleFdpdGhkcmF3TW9kYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJ1RGV4V2l0aGRyYXdNb2RhbCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJmZWVfYXNzZXRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IGxzIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtydWRleEFQSXN9IGZyb20gXCJhcGkvYXBpQ29uZmlnXCI7XG5jb25zdCBydWRleFN0b3JhZ2UgPSBuZXcgbHMoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvaW5MaXN0KHVybCA9IHJ1ZGV4QVBJcy5CQVNFICsgcnVkZXhBUElzLkNPSU5TX0xJU1QpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kOiBcInBvc3RcIn0pXG4gICAgICAgIC50aGVuKHJlcGx5ID0+XG4gICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmZXRjaGluZyBydWRleCBsaXN0IG9mIGNvaW5zXCIsIGVyciwgdXJsKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGVwb3NpdEFkZHJlc3Moe1xuICAgIGlucHV0Q29pblR5cGUsXG4gICAgb3V0cHV0Q29pblR5cGUsXG4gICAgb3V0cHV0QWRkcmVzcyxcbiAgICB1cmwgPSBydWRleEFQSXMuQkFTRSxcbiAgICBzdGF0ZUNhbGxiYWNrXG59KSB7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICAgIGlucHV0Q29pblR5cGUsXG4gICAgICAgIG91dHB1dENvaW5UeXBlLFxuICAgICAgICBvdXRwdXRBZGRyZXNzXG4gICAgfTtcblxuICAgIGxldCBib2R5X3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgZmV0Y2godXJsICsgcnVkZXhBUElzLk5FV19ERVBPU0lUX0FERFJFU1MsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBib2R5X3N0cmluZ1xuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInJlcGx5OiBcIiwganNvbiApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBqc29uLmlucHV0QWRkcmVzcyB8fCBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vOiBqc29uLmlucHV0TWVtbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoganNvbi5lcnJvciB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcImVycm9yOiBcIixlcnJvciAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWRkcmVzcyh7XG4gICAgdXJsID0gcnVkZXhBUElzLkJBU0UsXG4gICAgd2FsbGV0VHlwZSxcbiAgICBuZXdBZGRyZXNzXG59KSB7XG4gICAgaWYgKCFuZXdBZGRyZXNzKSByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcygpKTtcbiAgICByZXR1cm4gZmV0Y2godXJsICsgXCIvd2FsbGV0cy9cIiArIHdhbGxldFR5cGUgKyBcIi9jaGVjay1hZGRyZXNzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7YWRkcmVzczogbmV3QWRkcmVzc30pXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVwbHkgPT4gcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiBqc29uKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzV2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5oYXMoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gKTtcbn1cblxuZnVuY3Rpb24gc2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh7d2FsbGV0LCBhZGRyZXNzZXN9KSB7XG4gICAgcnVkZXhTdG9yYWdlLnNldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIGFkZHJlc3Nlcyk7XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhkcmF3YWxBZGRyZXNzZXMod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyh7d2FsbGV0LCBhZGRyZXNzfSkge1xuICAgIHJ1ZGV4U3RvcmFnZS5zZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIGFkZHJlc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIFwiXCIpO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aGRyYXdBZGRyZXNzZXMgPSB7XG4gICAgaGFzOiBoYXNXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBzZXQ6IHNldFdpdGhkcmF3YWxBZGRyZXNzZXMsXG4gICAgZ2V0OiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxuICAgIHNldExhc3Q6IHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBnZXRMYXN0OiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Ncbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XHJcblxyXG4vKipcclxuICogIEdpdmVuIGEgYmFsYW5jZV9vYmplY3QsIGRpc3BsYXlzIGl0IGluIGEgcHJldHR5IHdheVxyXG4gKlxyXG4gKiAgRXhwZWN0cyBvbmUgcHJvcGVydHksICdiYWxhbmNlJyB3aGljaCBzaG91bGQgYmUgYSBiYWxhbmNlX29iamVjdCBpZFxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnRCYWxhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcclxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0X2lkID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICBsZXQgYmFsYW5jZV9pZCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldF9pZF0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsYW5jZV9pZClcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YmFsYW5jZV9pZH1cclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXt0aGlzLnByb3BzLnJlcGxhY2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDAmbmJzcDs8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXt0aGlzLnByb3BzLnJlcGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50QmFsYW5jZSk7XHJcbiIsImltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5cbmNsYXNzIFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGluY3JlbWVudCB0aGlzIHRvIGZvcmNlIGdlbmVyYXRpbmcgbmV3IGFkZHJlc3NlcyBmb3IgYWxsIG1hcHBpbmdzXG4gICAgICAgIHRoaXMuY3VycmVudF9ydWRleF9hZGRyZXNzX2NhY2hlX3ZlcnNpb25fc3RyaW5nID0gXCIxXCI7XG4gICAgfVxuXG4gICAgZ2V0SW5kZXhGb3JEZXBvc2l0S2V5SW5FeGNoYW5nZShcbiAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGVcbiAgICApIHtcbiAgICAgICAgbGV0IGFyZ3MgPSBbXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfcnVkZXhfYWRkcmVzc19jYWNoZV92ZXJzaW9uX3N0cmluZyxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KFwiW1wiLCBjdXJyZW50LCBcIl1cIik7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMge1wiYWRkcmVzc1wiOiBhZGRyZXNzLCBcIm1lbW9cIjogbWVtb30sIHdpdGggYSBudWxsIG1lbW8gaWYgbm90IGFwcGxpY2FibGVcbiAgICBnZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXG4gICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgKSB7XG4gICAgICAgIGxldCB3YWxsZXQgPSBXYWxsZXREYi5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgICk7XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xuXG4gICAgICAgIGxldCBudW1iZXJfb2Zfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdLmxlbmd0aDtcbiAgICAgICAgaWYgKG51bWJlcl9vZl9rZXlzKVxuICAgICAgICAgICAgcmV0dXJuIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdW1xuICAgICAgICAgICAgICAgIG51bWJlcl9vZl9rZXlzIC0gMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXG4gICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBtZW1vXG4gICAgKSB7XG4gICAgICAgIGlmIChhZGRyZXNzID09PSBcInVua25vd25cIikgcmV0dXJuO1xuXG4gICAgICAgIGxldCB3YWxsZXQgPSBXYWxsZXREYi5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgICk7XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XS5wdXNoKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICBtZW1vOiBtZW1vXG4gICAgICAgIH0pO1xuICAgICAgICBXYWxsZXREYi5fdXBkYXRlV2FsbGV0KCk7XG4gICAgfVxufSAvLyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGVcblxuZXhwb3J0IGRlZmF1bHQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpLFxuICAgIENvcHlUb0NsaXBib2FyZCA9IF9yZXF1aXJlLkNvcHlUb0NsaXBib2FyZDtcblxuQ29weVRvQ2xpcGJvYXJkLkNvcHlUb0NsaXBib2FyZCA9IENvcHlUb0NsaXBib2FyZDtcbm1vZHVsZS5leHBvcnRzID0gQ29weVRvQ2xpcGJvYXJkOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY29weVRvQ2xpcGJvYXJkID0gcmVxdWlyZSgnY29weS10by1jbGlwYm9hcmQnKTtcblxudmFyIF9jb3B5VG9DbGlwYm9hcmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29weVRvQ2xpcGJvYXJkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb3B5VG9DbGlwYm9hcmQgPSBleHBvcnRzLkNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29weVRvQ2xpcGJvYXJkLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29weVRvQ2xpcGJvYXJkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3B5VG9DbGlwYm9hcmQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENvcHlUb0NsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvcHlUb0NsaXBib2FyZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcy50ZXh0LFxuICAgICAgICAgIG9uQ29weSA9IF90aGlzJHByb3BzLm9uQ29weSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wcy5vcHRpb25zO1xuXG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIF9jb3B5VG9DbGlwYm9hcmQyLmRlZmF1bHQpKHRleHQsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob25Db3B5KSB7XG4gICAgICAgIG9uQ29weSh0ZXh0LCByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBCeXBhc3Mgb25DbGljayBpZiBpdCB3YXMgcHJlc2VudFxuICAgICAgaWYgKGVsZW0gJiYgZWxlbS5wcm9wcyAmJiB0eXBlb2YgZWxlbS5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsZW0ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29weVRvQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIF90ZXh0ID0gX3Byb3BzLnRleHQsXG4gICAgICAgICAgX29uQ29weSA9IF9wcm9wcy5vbkNvcHksXG4gICAgICAgICAgX29wdGlvbnMgPSBfcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsndGV4dCcsICdvbkNvcHknLCAnb3B0aW9ucycsICdjaGlsZHJlbiddKTtcblxuICAgICAgdmFyIGVsZW0gPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGVsZW0sIF9leHRlbmRzKHt9LCBwcm9wcywgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2sgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb3B5VG9DbGlwYm9hcmQ7XG59KF9yZWFjdDIuZGVmYXVsdC5QdXJlQ29tcG9uZW50KTtcblxuQ29weVRvQ2xpcGJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Db3B5OiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IHVuZGVmaW5lZFxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZXNlbGVjdEN1cnJlbnQgPSByZXF1aXJlKCd0b2dnbGUtc2VsZWN0aW9uJyk7XG5cbnZhciBkZWZhdWx0TWVzc2FnZSA9ICdDb3B5IHRvIGNsaXBib2FyZDogI3trZXl9LCBFbnRlcic7XG5cbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlKSB7XG4gIHZhciBjb3B5S2V5ID0gKC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAn4oyYJyA6ICdDdHJsJykgKyAnK0MnO1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8je1xccyprZXlcXHMqfS9nLCBjb3B5S2V5KTtcbn1cblxuZnVuY3Rpb24gY29weSh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBkZWJ1ZywgbWVzc2FnZSwgcmVzZWxlY3RQcmV2aW91cywgcmFuZ2UsIHNlbGVjdGlvbiwgbWFyaywgc3VjY2VzcyA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMpIHsgb3B0aW9ucyA9IHt9OyB9XG4gIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdHJ5IHtcbiAgICByZXNlbGVjdFByZXZpb3VzID0gZGVzZWxlY3RDdXJyZW50KCk7XG5cbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1hcmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIC8vIHJlc2V0IHVzZXIgc3R5bGVzIGZvciBzcGFuIGVsZW1lbnRcbiAgICBtYXJrLnN0eWxlLmFsbCA9ICd1bnNldCc7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBtYXJrLnN0eWxlLnRvcCA9IDA7XG4gICAgbWFyay5zdHlsZS5jbGlwID0gJ3JlY3QoMCwgMCwgMCwgMCknO1xuICAgIC8vIHVzZWQgdG8gcHJlc2VydmUgc3BhY2VzIGFuZCBsaW5lIGJyZWFrc1xuICAgIG1hcmsuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICBtYXJrLnN0eWxlLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS5tc1VzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gJ3RleHQnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGUobWFyayk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29weSBjb21tYW5kIHdhcyB1bnN1Y2Nlc3NmdWwnKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjb3B5IHVzaW5nIGV4ZWNDb21tYW5kOiAnLCBlcnIpO1xuICAgIGRlYnVnICYmIGNvbnNvbGUud2FybigndHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmJyk7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQnLCB0ZXh0KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNvcHkgdXNpbmcgY2xpcGJvYXJkRGF0YTogJywgZXJyKTtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ2ZhbGxpbmcgYmFjayB0byBwcm9tcHQnKTtcbiAgICAgIG1lc3NhZ2UgPSBmb3JtYXQoJ21lc3NhZ2UnIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVSYW5nZShyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFyayk7XG4gICAgfVxuICAgIHJlc2VsZWN0UHJldmlvdXMoKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFGQTtBQWlCQTtBQUNBOzs7QUFDQTtBQUNBO0FBMkJBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFoQkE7QUFKQTtBQWtDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQVpBO0FBMkJBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUE5QkE7QUFzQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQTNFQTtBQUpBO0FBQ0E7QUFzRkE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQW9EQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFQQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBZEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFOQTtBQVRBO0FBekJBO0FBREE7QUF1REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQTNIQTtBQUxBO0FBNklBOzs7O0FBcmFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBZ2FBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQVBBO0FBQ0E7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFoQ0E7QUFrQ0E7QUF2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBSEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFPQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkE7QUFEQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBTkE7QUFMQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUxBO0FBZkE7QUFEQTtBQVBBO0FBMUJBO0FBb0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBSkE7QUF6QkE7QUF3Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQWhCQTtBQThCQTtBQTdDQTtBQTFDQTtBQXRFQTtBQW9LQTs7OztBQWhUQTtBQUNBO0FBa1RBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVhBO0FBWUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQVBBO0FBTEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFQQTtBQUxBO0FBMUVBO0FBREE7QUFEQTtBQUxBO0FBNEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFWQTtBQURBO0FBREE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBRkE7QUFEQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBREE7QUFoQkE7QUFEQTtBQStCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQWZBO0FBaENBO0FBakNBO0FBN0dBO0FBeU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQXZEQTtBQURBO0FBREE7QUFMQTtBQTJGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBREE7QUFaQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBVEE7QUFsSEE7QUF5SkE7QUFDQTs7OztBQTlrQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBQ0E7QUE4a0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUE1Q0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXhCQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBYUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNEJBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQWlCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWtDQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXpCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUE3R0E7QUFBQTtBQUNBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBREE7QUFMQTtBQVhBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWxDQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFyQkE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBUEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeEJBO0FBNEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQVZBO0FBREE7QUFEQTtBQVBBO0FBMkJBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBUkE7QUFVQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWRBO0FBcUJBO0FBak1BO0FBSkE7QUF5TUE7Ozs7QUFuNUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBQ0E7QUFtNUJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTs7Ozs7Ozs7O0FDNzZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTs7OztBQTlCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9