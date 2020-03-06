(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[31],{

/***/ 3026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1898);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(582);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2148);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2015);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2016);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2176);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(565);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(737);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(738);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3027);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2143);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2153);
/* harmony import */ var _DepositWithdraw_gdex_GdexGateway__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3037);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2361);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2405);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2492);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









//import OpenledgerGateway from "../DepositWithdraw/OpenledgerGateway";
//import OpenLedgerFiatDepositWithdrawal from "../DepositWithdraw/openledger/OpenLedgerFiatDepositWithdrawal";
//import OpenLedgerFiatTransactionHistory from "../DepositWithdraw/openledger/OpenLedgerFiatTransactionHistory";
//import BlockTradesBridgeDepositRequest from "../DepositWithdraw/blocktrades/BlockTradesBridgeDepositRequest";
//import CitadelBridgeDepositRequest from "../DepositWithdraw/citadel/CitadelBridgeDepositRequest";




//import {openledgerAPIs} from "api/apiConfig";



//import BitsparkGateway from "../DepositWithdraw/bitspark/BitsparkGateway";

//import XbtsxGateway from "../DepositWithdraw/xbtsx/XbtsxGateway";





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
        value: function renderServices(openLedgerGatewayCoins, rudexGatewayCoins, bitsparkGatewayCoins, xbtsxGatewayCoins) {
            //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
            var serList = [];
            var account = this.props.account;
            var _state = this.state,
                olService = _state.olService,
                btService = _state.btService,
                rudexService = _state.rudexService,
                bitsparkService = _state.bitsparkService,
                xbtsxService = _state.xbtsxService,
                citadelService = _state.citadelService,
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

            serList.push({
                name: "GDEX",
                identifier: "GDEX",
                template: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_gdex_GdexGateway__WEBPACK_IMPORTED_MODULE_15__["default"], { account: account, provider: "gdex" })
                )
            });

            /*        serList.push({
                name: "BitSpark (SPARKDEX.X)",
                identifier: "SPARKDEX",
                template: (
                    <div className="content-block">
                        <div
                            className="service-selector"
                            style={{marginBottom: "2rem"}}
                        >
                            <ul className="button-group segmented no-margin">
                                <li
                                    onClick={this.toggleBitSparkService.bind(
                                        this,
                                        "gateway"
                                    )}
                                    className={
                                        bitsparkService === "gateway"
                                            ? "is-active"
                                            : ""
                                    }
                                >
                                    <a>
                                        <Translate content="gateway.gateway" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                         {bitsparkService === "gateway" &&
                        bitsparkGatewayCoins.length ? (
                                <BitsparkGateway
                                    account={account}
                                    coins={bitsparkGatewayCoins}
                                    provider="bitspark"
                                />
                            ) : null}
                    </div>
                )
            });*/

            return serList;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                account = _props.account,
                servicesDown = _props.servicesDown;
            var activeService = this.state.activeService;


            var openLedgerGatewayCoins = this.props.openLedgerBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var rudexGatewayCoins = this.props.rudexBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var bitsparkGatewayCoins = this.props.bitsparkBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var xbtsxGatewayCoins = this.props.xbtsxBackedCoins.map(function (coin) {
                return coin;
            }).sort(function (a, b) {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

            var services = this.renderServices(openLedgerGatewayCoins, rudexGatewayCoins, bitsparkGatewayCoins, xbtsxGatewayCoins);

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
    contained: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool
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

/***/ 3027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3028);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1898);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(737);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(738);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2815);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2970);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(539);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1999);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2926);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2910);
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

/***/ 3028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(432);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2016);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3029);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3030);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3032);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3033);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3031);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2142);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2466);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(583);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3034);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2146);
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
                                    { text: clipboardText },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "button" },
                                        "Copy address"
                                    )
                                ) : null,
                                memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default.a,
                                    { text: memoText },
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
    memoType: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number,
    gateFee: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number,
    confirmations: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
    asset_precision: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RuDexGatewayDepositRequest));

/***/ }),

/***/ 3029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(842);
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

/***/ 3030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2016);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(583);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2158);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2951);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(581);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3031);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1898);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(737);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(432);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(609);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(610);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(748);
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
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__["validateAddress"])({
                url: props.url,
                walletType: props.output_wallet_type,
                newAddress: new_withdraw_address
            }).then(function (isValid) {
                if (_this5.state.withdraw_address === new_withdraw_address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        withdraw_address_is_valid: isValid
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
            console.log("X", withdraw_amount, this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.asset_precision));
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

                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : fee_asset_id);

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


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : fee_asset_id);
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
                    withdraw_memo,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                            {
                                disabled: this.state.error || this.state.balanceError || this.state.minAmountError,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(439).Buffer))

/***/ }),

/***/ 3031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoinList", function() { return fetchCoinList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);


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
            return json.isValid;
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

/***/ 3032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2142);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2015);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2016);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2158);
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

/***/ 3033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617);
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

/***/ 3037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3038);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1999);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GdexGatewayInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3039);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1898);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(737);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(738);
/* harmony import */ var _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3040);
/* harmony import */ var _GdexHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3042);
/* harmony import */ var _GdexAgreementModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3043);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var NodeRSA = __webpack_require__(3044);
var gdexPublicKey = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCH+QtHPKcWxdL25xL4pCuu16tKh6yPx/TFnd/8\n" + "cSt2TC+sPuYsD0h/sy4VKNxhBb7F7U/TLXjMxNcSfPVPjPM3X2LvOlmU9LOEcJGrmlmOOiyO/kws\n" + "yKKOhR4UyZ1NghhfHjuyDBj6V8fCL+xBZTJWsh/X61Z0wLCwOzXcQCsNJwIDAQAB\n" + "-----END PUBLIC KEY-----");

var GdexGateway = function (_React$Component) {
    _inherits(GdexGateway, _React$Component);

    function GdexGateway(props) {
        _classCallCheck(this, GdexGateway);

        var _this2 = _possibleConstructorReturn(this, (GdexGateway.__proto__ || Object.getPrototypeOf(GdexGateway)).call(this));

        var action = props.viewSettings.get(props.provider + "Action", "deposit");

        _this2.state = {
            isAgreementVisible: false,
            coins: null,
            activeCoinInfo: _this2._getActiveCoinInfo(props, { action: action }),
            action: action,
            down: false,
            isAvailable: true,
            user_info: null,
            isAgree: false,
            agreeChecked: true,
            agreeNotice: false,
            locale: props.viewSettings.get("locale"),
            intermediate: null,
            memo_rule: null
        };
        _this2.user_info_cache = new _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_8__["default"]();

        _this2.showAgreement = _this2.showAgreement.bind(_this2);
        _this2.hideAgreement = _this2.hideAgreement.bind(_this2);
        return _this2;
    }

    _createClass(GdexGateway, [{
        key: "showAgreement",
        value: function showAgreement() {
            this.setState({
                isAgreementVisible: true
            });
        }
    }, {
        key: "hideAgreement",
        value: function hideAgreement() {
            this.setState({
                isAgreementVisible: false
            });
        }
    }, {
        key: "_getActiveCoinInfo",
        value: function _getActiveCoinInfo(props, state) {
            var cachedCoinName = props.viewSettings.get("activeCoin_" + props.provider + "_" + state.action, null);
            var cachedCoinId = props.viewSettings.get("activeCoinId_" + props.provider, null);
            var firstTimeCoinName = null;
            if (state.action == "deposit") {
                firstTimeCoinName = "BTC";
            } else {
                firstTimeCoinName = "GDEX.BTC";
            }
            var firstTimeCoinId = 1002;
            var activeCoinName = cachedCoinName ? cachedCoinName : firstTimeCoinName;
            var activeCoinId = cachedCoinId ? cachedCoinId : firstTimeCoinId;
            this._getWithdrawRule(activeCoinId);
            return { name: activeCoinName, id: activeCoinId };
        }
    }, {
        key: "_transformCoin",
        value: function _transformCoin(data) {
            var result = [];
            try {
                data.filter(function (asset) {
                    return asset.status != 0;
                }).forEach(function (asset) {
                    var coin = {};
                    if (asset.type == 1) {
                        // inner asset
                        coin.innerAssetId = asset.assetId;
                        coin.innerAssetName = asset.assetName;
                        coin.innerSymbol = asset.assetSymbol;
                        coin.outerAssetId = asset.relationId;
                        coin.outerAssetName = asset.relationSymbol;
                        coin.outerSymbol = asset.relationSymbol;
                        coin.status = asset.withdrawStatus;
                        coin.gateFee = asset.withdrawFees;
                        coin.needMemo = asset.needMemo;
                        coin.minTransactionAmount = asset.minWithdrawAmount;
                        coin.type = asset.type;
                        coin.relationPrecision = asset.relationPrecision;
                    } else if (asset.type == 2) {
                        // outer asset
                        coin.innerAssetId = asset.relationId;
                        coin.innerAssetName = asset.relationSymbol;
                        coin.innerSymbol = asset.relationSymbol;
                        coin.outerAssetId = asset.assetId;
                        coin.outerAssetName = asset.assetName;
                        coin.outerSymbol = asset.assetSymbol;
                        coin.status = asset.depositStatus;
                        coin.gateFee = asset.depositFees;
                        coin.needMemo = asset.needMemo;
                        coin.minTransactionAmount = asset.minDepositAmount;
                        coin.type = asset.type;
                        coin.relationPrecision = asset.relationPrecision;
                    } else {
                        coin = null;
                    }
                    if (coin) result.push(coin);
                });
            } catch (err) {
                console.log("Transform coin failed: ", err);
            }
            return result;
        }
    }, {
        key: "_getUserInfo",
        value: function _getUserInfo() {
            var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var isAgree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!userName) userName = this.props.account.get("name");
            if (!isAgree) isAgree = this.state.isAgree;
            //User must agree to the agreement
            if (!isAgree) return;

            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["fetchUserInfo"])({ userAccount: userName, isAgree: isAgree });
            var _this = this;
            result.then(function (res) {
                var user = res.user;
                _this.setState({
                    isAgree: true,
                    user_info: { user_id: user.uid, status: user.status }
                });
                if (user.status == 0 && user.agreeAgreement) {
                    _this.user_info_cache.cacheUserInfo(userName, user.uid, user.status);
                } else {
                    _this.user_info_cache.delUserInfo(userName);
                }
            });
            result.catch(function (err) {
                console.log("Exception in fetching user info: " + err);
            });
        }
    }, {
        key: "_getCoins",
        value: function _getCoins() {
            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["fetchAssets"])({ userAccount: this.props.account.get("name") });

            var _this = this;
            result.then(function (data) {
                var trans_data = _this._transformCoin(data.assets);
                _this.setState({ isAvailable: true, coins: trans_data });
            }, function (errMsg) {
                console.log("fail" + errMsg);
            });
            result.catch(function (err) {
                console.log(err);
                _this.setState({ isAvailable: false });
            });
        }
    }, {
        key: "_checkIsAgree",
        value: function _checkIsAgree() {
            var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!userName) userName = this.props.account.get("name");
            var user_info = this.user_info_cache.getUserInfo(userName);
            if (user_info) {
                this.setState({ user_info: user_info, isAgree: true });
                return;
            }
            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["userAgreement"])({ userAccount: userName });
            var _this = this;
            result.then(function (data) {
                if (data.agree) {
                    _this.setState({ isAgree: true });
                    _this._getUserInfo(userName, true);
                } else {
                    _this.setState({ isAgree: false });
                }
            }, function (errMsg) {
                console.log("fail" + errMsg);
            });
            result.catch(function (err) {
                console.log(err);
                _this.setState({ isAvailable: false });
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkIsAgree();
            this._getCoins();
        }
    }, {
        key: "_getWithdrawAssetId",
        value: function _getWithdrawAssetId(assetName) {
            var assetType = 1;
            var assetSymbol = "innerSymbol";
            if (this.state.action == "deposit") {
                assetType = 2;
                assetSymbol = "outerSymbol";
            }
            var assetId = this.state.coins.filter(function (coin) {
                return coin.type == assetType && coin[assetSymbol] == assetName;
            })[0].innerAssetId;
            return assetId;
        }
    }, {
        key: "onSelectCoin",
        value: function onSelectCoin(e) {
            var activeCoinInfo = this.state.activeCoinInfo;
            activeCoinInfo.name = e.target.value;
            var assetId = this._getWithdrawAssetId(e.target.value);
            activeCoinInfo.id = assetId;
            this.setState({
                activeCoinInfo: activeCoinInfo
            });
            this._getWithdrawRule(assetId);
            var setting = {};
            setting["activeCoin_" + this.props.provider + "_" + this.state.action] = e.target.value;
            setting["activeCoinId_" + this.props.provider] = assetId;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting(setting);
        }
    }, {
        key: "_getWithdrawRule",
        value: function _getWithdrawRule(assetId) {
            var result = Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__["fetchWithdrawRule"])({ assetId: assetId });
            var _this = this;
            result.then(function (data) {
                var intermediate = gdexPublicKey.decryptPublic(data.transferToAccount, "utf-8");
                _this.setState({
                    intermediate: intermediate,
                    memo_rule: data.memoRule
                });
            }, function (errMsg) {
                console.log("fail" + errMsg);
                _this.setState({ intermediate: null });
            });
            result.catch(function (err) {
                console.log(err);
                _this.setState({ intermediate: null });
            });
        }
    }, {
        key: "changeAction",
        value: function changeAction(type) {
            var activeCoinInfo = this._getActiveCoinInfo(this.props, {
                action: type
            });
            this.setState({
                action: type,
                activeCoinInfo: activeCoinInfo
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting(_defineProperty({}, this.props.provider + "Action", type));
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.account != nextProps.account) {
                this._checkIsAgree(nextProps.account.get("name"));
            }
        }
    }, {
        key: "_updateCheck",
        value: function _updateCheck() {
            this.setState({ agreeChecked: !this.state.agreeChecked });
            this.setState({ agreeNotice: false });
        }
    }, {
        key: "_showUserAgreement",
        value: function _showUserAgreement() {
            this.showAgreement();
        }
    }, {
        key: "_registerUser",
        value: function _registerUser() {
            if (this.state.agreeChecked) {
                this._getUserInfo(null, true);
            } else {
                this.setState({ agreeNotice: true });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var account = this.props.account;
            var _state = this.state,
                coins = _state.coins,
                activeCoinInfo = _state.activeCoinInfo,
                action = _state.action,
                isAvailable = _state.isAvailable,
                user_info = _state.user_info,
                isAgree = _state.isAgree,
                agreeChecked = _state.agreeChecked,
                agreeNotice = _state.agreeNotice,
                intermediate = _state.intermediate,
                memo_rule = _state.memo_rule;

            var issuer = {
                ticket: "https://support.gdex.io/",
                qq: "602573197",
                telgram: "https://t.me/GDEXer"
            };
            var supportContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.support_gdex" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Help:",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            href: issuer.ticket,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "external-link"
                        },
                        issuer.ticket
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "QQ:",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            target: "_blank",
                            href: "//shang.qq.com/wpa/qunwpa?idkey=5d192c325146762cf5a9256038fed9faef4fcace21a36882854354dd1d599f11",
                            rel: "noopener noreferrer"
                        },
                        issuer.qq
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Telegram:",
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            href: issuer.telgram,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "external-link"
                        },
                        issuer.telgram
                    )
                )
            );
            if (!isAgree) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            style: { marginRight: "10px" },
                            checked: agreeChecked,
                            onChange: this._updateCheck.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "txtlabel",
                            content: "gateway.agreement.hint"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this._showUserAgreement.bind(this) },
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                className: "txtlabel",
                                content: "gateway.agreement.name"
                            })
                        )
                    ),
                    agreeNotice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "txtlabel",
                            content: "gateway.agreement.notice"
                        })
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "buttonGroup" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: { marginTop: "20px" },
                                onClick: this._registerUser.bind(this),
                                className: " button"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                className: "txtlabel",
                                content: "gateway.agreement.register"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Modal"],
                        {
                            footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                                {
                                    type: "primary",
                                    key: "close",
                                    onClick: this.hideAgreement
                                },
                                counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("modal.close")
                            )],
                            visible: this.state.isAgreementVisible,
                            onCancel: this.hideAgreement
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexAgreementModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                onCancel: this.hideAgreement,
                                locale: this.props.settings.get("locale", "en")
                            })
                        )
                    ),
                    supportContent
                );
            }
            if (!coins && isAvailable) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], null);
            }
            if (!isAvailable) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable",
                        component: "h4"
                    })
                );
            }

            var assetSymbol = null;
            var assetId = null;
            var actionType = null;
            if (action == "deposit") {
                assetId = "outerAssetId";
                assetSymbol = "outerSymbol";
                actionType = 2;
            } else {
                assetId = "innerAssetId";
                assetSymbol = "innerSymbol";
                actionType = 1;
            }
            coins = coins.filter(function (coin) {
                return coin.type == actionType;
            });
            var coinOptions = coins.map(function (coin) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: coin[assetSymbol], key: coin[assetSymbol] },
                    coin[assetSymbol]
                );
            }).filter(function (a) {
                return a !== null;
            });

            var coin = coins.filter(function (coin) {
                return coin[assetSymbol] == activeCoinInfo.name;
            })[0];

            var infos = null;
            if (!coin || coin.status != 0) {
                infos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.asset_unavailable",
                        asset: activeCoinInfo.name,
                        component: "h4"
                    })
                );
            } else if (!user_info) {
                infos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.user_unavailable",
                        component: "h4"
                    })
                );
            } else if (user_info.status != 0) {
                infos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "left-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.frozen",
                        account: account.get("name"),
                        component: "h4"
                    })
                );
            }

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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                    content: "gateway.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "external-coin-types bts-select",
                                    onChange: this.onSelectCoin.bind(this),
                                    value: activeCoinInfo.name
                                },
                                coinOptions
                            )
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.gateway_text" }),
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.deposit" })
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.withdraw" })
                                    )
                                )
                            )
                        )
                    )
                ),
                infos ? infos : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexGatewayInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            account: account,
                            coin: coin,
                            issuer_account: intermediate,
                            user_id: user_info.user_id,
                            action: this.state.action,
                            gateway: "gdex",
                            btsCoin: coin.innerSymbol,
                            memo_rule: memo_rule
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexHistory__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        userId: user_info.user_id,
                        userAccount: account.get("name"),
                        assetId: coin[assetId],
                        assetName: coin[assetSymbol],
                        compactView: true,
                        fullHeight: true,
                        recordType: action == "deposit" ? 1 : 2,
                        filter: "transfer",
                        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            content: "gateway.recent_" + this.state.action
                        })
                    })
                ),
                supportContent
            );
        }
    }]);

    return GdexGateway;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_5__["connect"])(GdexGateway, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().viewSettings,
            settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().settings
        };
    }
}));

/***/ }),

/***/ 3038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWithdrawRule", function() { return fetchWithdrawRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgreement", function() { return userAgreement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAssets", function() { return fetchAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfo", function() { return fetchUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionRecordList", function() { return getTransactionRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepositRecordList", function() { return getDepositRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithdrawRecordList", function() { return getWithdrawRecordList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);



var gdexStorage = new _localStorage__WEBPACK_IMPORTED_MODULE_0__["default"]("");

var assetsRequest = {};
var REQUEST_TIMEOUT = 10000;

function fetchWithdrawRule(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].WITHDRAW_RULE, timeout);
}

function userAgreement(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].USER_AGREEMENT, timeout);
}

function fetchAssets(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    if (!reqBody.requestType) reqBody.requestType = 0;
    if (!reqBody.assetType) reqBody.assetType = 0;
    if (!reqBody.version) reqBody.version = "1.1";
    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].ASSET_LIST, timeout);
}

//"userAccount"
function fetchUserInfo(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].GET_USER_INFO, timeout);
}

function validateAddress(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    if (!reqBody.address) return new Promise(function (res) {
        return res();
    });
    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].CHECK_WITHDRAY_ADDRESS, timeout);
}

function requestDepositAddress(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].GET_DEPOSIT_ADDRESS, timeout);
}

function getTransactionRecordList(reqBody, type) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    if (type == 1) return getDepositRecordList(reqBody, timeout);else if (type == 2) return getWithdrawRecordList(reqBody, timeout);else return new Promise(function (res) {
        return res();
    });
}

function getDepositRecordList(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].DEPOSIT_RECORD_LIST, timeout);
}

function getWithdrawRecordList(reqBody) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    return requestSimple(reqBody, api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__["gdexAPIs"].WITHDRAW_RECORD_LIST, timeout);
}

function requestSimple(reqBody, reqUrl) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    if (timeout == -1) {
        return requestWithTimeout(reqBody, reqUrl, REQUEST_TIMEOUT);
    } else if (timeout == 0) {
        return requestWithoutTimeout(reqBody, reqUrl);
    } else {
        return requestWithTimeout(reqBody, reqUrl, timeout);
    }
}

function requestWithTimeout(reqBody, reqUrl, timeout) {
    if (!reqBody.requestChannel) reqBody.requestChannel = 0;
    if (!reqBody.version) reqBody.version = "1.0";
    if (!reqBody.timestamp) reqBody.timestamp = new Date().getTime();
    if (!reqBody.outerChannel) reqBody.outerChannel = "Bitshares";
    var body_string = JSON.stringify(reqBody);
    if (assetsRequest[body_string]) return;
    assetsRequest[body_string] = true;
    return Promise.race([new Promise(function (resolve, reject) {
        fetch(reqUrl, {
            method: "post",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "application/json"
            }),
            body: body_string
            // mode: "no-cors"
        }).then(function (reply) {
            reply.json().then(function (json) {
                delete assetsRequest[body_string];
                if (json.code !== 0) {
                    console.log(json);
                    reject({ code: json.code, message: json.message });
                }
                resolve(json.data);
            }).catch(function (err) {
                delete assetsRequest[body_string];
                reject({ code: -1, message: err.message });
            });
        });
    }), new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject({ code: -2, message: "Request timeout." });
        }, timeout);
    })]);
}

function requestWithoutTimeout(reqBody, reqUrl) {
    if (!reqBody.requestChannel) reqBody.requestChannel = 0;
    if (!reqBody.version) reqBody.version = "1.0";
    if (!reqBody.timestamp) reqBody.timestamp = new Date().getTime();
    if (!reqBody.outerChannel) reqBody.outerChannel = "Bitshares";
    var body_string = JSON.stringify(reqBody);
    if (assetsRequest[body_string]) return;
    assetsRequest[body_string] = true;
    new Promise(function (resolve, reject) {
        fetch(reqUrl, {
            method: "post",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "application/json"
            }),
            body: body_string
        }).then(function (reply) {
            reply.json().then(function (json) {
                delete assetsRequest[body_string];
                if (json.code !== 0) {
                    console.log(json);
                    reject({ code: json.code, message: json.message });
                }
                resolve(json.data);
            }).catch(function (err) {
                delete assetsRequest[body_string];
                reject({ code: -1, message: err.message });
            });
        });
    });
}

function hasWithdrawalAddress(wallet) {
    return gdexStorage.has("gdex_history_address_" + wallet);
}

function setWithdrawalAddresses(_ref) {
    var wallet = _ref.wallet,
        addresses = _ref.addresses;

    gdexStorage.set("gdex_history_address_" + wallet, addresses);
}

function getWithdrawalAddresses(wallet) {
    return gdexStorage.get("gdex_history_address_" + wallet, []);
}

function setLastWithdrawalAddress(_ref2) {
    var wallet = _ref2.wallet,
        address = _ref2.address;

    gdexStorage.set("gdex_history_address_last_" + wallet, address);
}

function getLastWithdrawalAddress(wallet) {
    return gdexStorage.get("gdex_history_address_last_" + wallet, "");
}

var WithdrawAddresses = {
    has: hasWithdrawalAddress,
    set: setWithdrawalAddresses,
    get: getWithdrawalAddresses,
    setLast: setLastWithdrawalAddress,
    getLast: getLastWithdrawalAddress
};

/***/ }),

/***/ 3039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2016);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2142);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2466);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3032);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2015);
/* harmony import */ var _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3040);
/* harmony import */ var _lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3038);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2376);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GdexWithdrawModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3041);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var GdexGatewayInfo = function (_React$Component) {
    _inherits(GdexGatewayInfo, _React$Component);

    function GdexGatewayInfo() {
        _classCallCheck(this, GdexGatewayInfo);

        var _this2 = _possibleConstructorReturn(this, (GdexGatewayInfo.__proto__ || Object.getPrototypeOf(GdexGatewayInfo)).call(this));

        _this2.state = {
            isQrModalVisible: false,
            isModalVisible: false,
            receive_address: null,
            isAvailable: true,
            qrcode: ""
        };
        _this2.deposit_address_cache = new _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_7__["default"]();
        _this2._copy = _this2._copy.bind(_this2);
        document.addEventListener("copy", _this2._copy);

        _this2.showQrModal = _this2.showQrModal.bind(_this2);
        _this2.hideQrModal = _this2.hideQrModal.bind(_this2);

        _this2.showModal = _this2.showModal.bind(_this2);
        _this2.hideModal = _this2.hideModal.bind(_this2);
        return _this2;
    }

    _createClass(GdexGatewayInfo, [{
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
        key: "showQrModal",
        value: function showQrModal() {
            this.setState({
                isQrModalVisible: true
            });
        }
    }, {
        key: "hideQrModal",
        value: function hideQrModal() {
            this.setState({
                isQrModalVisible: false
            });
        }
    }, {
        key: "getDepositAddress",
        value: function getDepositAddress() {
            this._getDepositAddress(this.props.user_id, this.props.account.get("name"), this.props.coin, this.props.action);
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress(user_id, user_name, coin, action) {
            // The coin can only support withdraw sometime, no need to call get deposit address
            if (action != "deposit") return;

            var cached_receive_address = this.deposit_address_cache.getCachedInputAddress(user_name, coin.outerSymbol, coin.innerSymbol);
            if (cached_receive_address && cached_receive_address != this.state.receive_address) {
                this.setState({ receive_address: cached_receive_address });
                return;
            }
            // Get address from server side
            var _this = this;
            Object(_lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_8__["requestDepositAddress"])({
                btsAssetId: coin.innerAssetId,
                outAssetId: coin.outerAssetId,
                uid: user_id,
                userAccount: user_name
            }).then(function (data) {
                if (data.address && data.address.address) {
                    var receive_address = {
                        address: data.address.address,
                        memo: data.address.memo
                    };
                    _this.deposit_address_cache.cacheInputAddress(user_name, coin.outerSymbol, coin.innerSymbol, receive_address.address, receive_address.memo);
                    _this.setState({ receive_address: receive_address });
                } else {
                    _this.setState({ receive_address: null });
                }
            }).catch(function (err) {
                _this.setState({ receive_address: null });
                console.log(err);
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getDepositAddress();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.user_id !== this.props.user_id || np.action !== this.props.action || np.coin != this.props.coin) {
                this._getDepositAddress(np.user_id, np.account.get("name"), np.coin, np.action);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("copy", this._copy);
        }
    }, {
        key: "getWithdrawModalId",
        value: function getWithdrawModalId() {
            return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.coin.innerSymbol;
        }
    }, {
        key: "onWithdraw",
        value: function onWithdraw() {
            this.showModal();
        }
    }, {
        key: "onShowQrcode",
        value: function onShowQrcode(text) {
            var _this3 = this;

            this.setState({ qrcode: text }, function () {
                _this3.showQrModal();
            });
        }
    }, {
        key: "_copy",
        value: function _copy(e) {
            try {
                if (this.state.clipboardText) e.clipboardData.setData("text/plain", this.state.clipboardText);else e.clipboardData.setData("text/plain", counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.use_copy_button").toUpperCase());
                e.preventDefault();
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "toClipboard",
        value: function toClipboard(clipboardText) {
            try {
                this.setState({ clipboardText: clipboardText }, function () {
                    document.execCommand("copy");
                });
            } catch (err) {
                console.error(err);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: "none", minHeight: 150 } });
            if (!this.props.account || !this.props.issuer_account || !this.props.coin) return emptyRow;
            var _props = this.props,
                coin = _props.coin,
                btsCoin = _props.btsCoin;
            // asset is not loaded

            if (!btsCoin) return emptyRow;
            var receive_address = this.state.receive_address;
            var qrcode = this.state.qrcode;
            var withdraw_modal_id = this.getWithdrawModalId();
            var deposit_address_fragment = null;
            var clipboardText = "";
            var memoText = "";
            var deposit_memo_fragment = null;

            var withdraw_memo_prefix = coin.outerSymbol + ":";
            if (this.props.action === "deposit") {
                if (receive_address) {
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                    clipboardText = receive_address.address;
                    if (receive_address.memo) {
                        deposit_memo_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            receive_address.memo
                        );
                        memoText = receive_address.memo;
                    }
                }
                withdraw_memo_prefix = "";
            }
            var balance = null;
            var account_balances_object = this.props.account.get("balances");

            if (account_balances_object) balance = account_balances_object.toJS()[btsCoin.get("id")];

            if (this.props.action === "deposit") {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            coin.outerSymbol
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                name: coin.innerSymbol,
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                account: this.props.issuer_account.get("id")
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" }),
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: coin.innerSymbol,
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h4",
                            content: "gateway.deposit_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.deposit_to",
                                asset: coin.outerSymbol
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { color: "red" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.deposit_warning",
                                asset: coin.outerSymbol
                            })
                        ),
                        memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { color: "red" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.deposit_warning_memo",
                                asset: coin.outerSymbol
                            })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.address" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            deposit_address_fragment
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    style: { width: "125px" },
                                                    className: "button",
                                                    onClick: this.toClipboard.bind(this, clipboardText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.copy_address" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.onShowQrcode.bind(this, clipboardText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.qrcode.label" })
                                            )
                                        )
                                    ),
                                    memoText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.memo" }),
                                            ":"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            memoText
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    style: { width: "125px" },
                                                    className: "button",
                                                    onClick: this.toClipboard.bind(this, memoText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.copy_memo" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "td",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.onShowQrcode.bind(this, memoText)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "modal.qrcode.label" })
                                            )
                                        )
                                    ) : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__["Modal"],
                                {
                                    footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__["Button"],
                                        {
                                            key: "close",
                                            type: "primary",
                                            onClick: this.hideQrModal
                                        },
                                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("modal.close")
                                    )],
                                    visible: this.state.isQrModalVisible,
                                    onCancel: this.hideQrModal
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DepositQrCodeModal, { text: qrcode })
                            )
                        )
                    )
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "Blocktrades__gateway grid-block no-padding no-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "small-12 medium-5" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                name: coin.innerSymbol,
                                                replace: false
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            coin.outerSymbol
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tr",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.balance" }),
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                account: this.props.account.get("name"),
                                                asset: coin.innerSymbol,
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            component: "h4",
                            content: "gateway.withdraw_inst"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw_now" }),
                                " "
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__["Modal"],
                        {
                            onCancel: this.hideModal,
                            title: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.withdraw_coin", {
                                coin: coin.outerAssetName,
                                symbol: coin.outerSymbol
                            }),
                            footer: null,
                            visible: this.state.isModalVisible
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GdexWithdrawModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            hideModal: this.hideModal,
                            account: this.props.account.get("name"),
                            issuer: this.props.issuer_account.get("name"),
                            asset: coin.innerSymbol,
                            output_coin_name: coin.outerAssetName,
                            gateFee: coin.gateFee,
                            output_coin_id: coin.outerAssetId,
                            output_coin_symbol: coin.outerSymbol,
                            output_supports_memos: coin.needMemo == 1,
                            minWithdrawAmount: coin.minTransactionAmount,
                            output_coin_precision: coin.relationPrecision,
                            memo_prefix: withdraw_memo_prefix,
                            memo_rule: this.props.memo_rule,
                            modal_id: withdraw_modal_id,
                            balance: balance
                        })
                    )
                );
            }
        }
    }]);

    return GdexGatewayInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GdexGatewayInfo.propTypes = {
    // inner_asset_name:               PropTypes.string,
    // outer_asset_name:           PropTypes.string,
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount,
    issuer_account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount,
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,
    btsCoin: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset,
    memo_rule: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string
};
GdexGatewayInfo.defaultProps = {
    autosubscribe: false
};

var DepositQrCodeModal = function (_React$Component2) {
    _inherits(DepositQrCodeModal, _React$Component2);

    function DepositQrCodeModal(props) {
        _classCallCheck(this, DepositQrCodeModal);

        return _possibleConstructorReturn(this, (DepositQrCodeModal.__proto__ || Object.getPrototypeOf(DepositQrCodeModal)).call(this, props));
    }

    _createClass(DepositQrCodeModal, [{
        key: "render",
        value: function render() {
            var text = this.props.text;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12", style: { textAlign: "center" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_9___default.a, { size: 200, value: text }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { style: { textTransform: "none" } },
                    text
                )
            );
        }
    }]);

    return DepositQrCodeModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_1__["default"])(GdexGatewayInfo));

/***/ }),

/***/ 3040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var session = new common_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"]("__gdex__user_");

var GdexCache = function () {
    function GdexCache() {
        _classCallCheck(this, GdexCache);

        this.current_gdex_address_cache_version_string = "1";
        this.day = 86400;
    }

    _createClass(GdexCache, [{
        key: "getUserInfo",
        value: function getUserInfo(user_account) {
            var user_info = session.get(user_account, null);
            if (!user_info) return null;
            var cur_time = Math.floor(new Date().getTime() / 1000);
            // User info expire time set to 1 day
            if (Math.abs(user_info.ctime - cur_time) > this.day) {
                session.remove(user_account);
                return null;
            }
            return user_info;
        }
    }, {
        key: "cacheUserInfo",
        value: function cacheUserInfo(user_account, user_id, status) {
            var user_info = session.get(user_account, {});
            if (user_info != {}) {
                user_info = {
                    user_id: user_id,
                    status: status,
                    ctime: Math.floor(new Date().getTime() / 1000)
                };
                session.set(user_account, user_info);
            }
        }
    }, {
        key: "delUserInfo",
        value: function delUserInfo(user_account) {
            if (session.has(user_account)) session.del(user_account);
        }
    }, {
        key: "getIndexForDepositKey",
        value: function getIndexForDepositKey(account_name, input_coin_type, output_coin_type) {
            var args = [this.current_gdex_address_cache_version_string, account_name, input_coin_type, output_coin_type];
            return args.reduce(function (previous, current) {
                return previous.concat("[", current, "]");
            }, "");
        }
    }, {
        key: "getCachedInputAddress",
        value: function getCachedInputAddress(account_name, input_coin_type, output_coin_type) {
            var index = this.getIndexForDepositKey(account_name, input_coin_type, output_coin_type);
            var deposit_keys = session.get("deposit_keys", {});
            var result = deposit_keys[index] || null;
            if (!result) return;
            if (result.address) {
                // cache deposit address for 1 week
                var cur_time = Math.floor(new Date().getTime() / 1000);
                if (Math.abs(result.ctime - cur_time) > this.day) {
                    this.clearInputAddress(account_name, input_coin_type, output_coin_type);
                    return null;
                }
                return result;
            }
            return null;
        }
    }, {
        key: "cacheInputAddress",
        value: function cacheInputAddress(account_name, input_coin_type, output_coin_type, address, memo) {
            var index = this.getIndexForDepositKey(account_name, input_coin_type, output_coin_type);
            var deposit_keys = session.get("deposit_keys", {});
            deposit_keys[index] = {
                address: address,
                memo: memo,
                ctime: Math.floor(new Date().getTime() / 1000)
            };
            session.set("deposit_keys", deposit_keys);
        }
    }, {
        key: "clearInputAddress",
        value: function clearInputAddress(account_name, input_coin_type, output_coin_type) {
            var index = this.getIndexForDepositKey(account_name, input_coin_type, output_coin_type);
            var deposit_keys = session.get("deposit_keys", null);
            if (!deposit_keys) return;
            if (!deposit_keys[index]) {
                // Deposit key is empty, no need to clear
                return;
            }
            deposit_keys[index] = { address: null, memo: null, ctime: null };
            session.set("deposit_keys", deposit_keys);
        }
    }]);

    return GdexCache;
}();

/* harmony default export */ __webpack_exports__["default"] = (GdexCache);

/***/ }),

/***/ 3041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2016);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(583);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2158);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2951);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(581);
/* harmony import */ var common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3038);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1898);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(737);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(432);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(609);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(610);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var GdexWithdrawModal = function (_React$Component) {
    _inherits(GdexWithdrawModal, _React$Component);

    function GdexWithdrawModal(props) {
        _classCallCheck(this, GdexWithdrawModal);

        var _this = _possibleConstructorReturn(this, (GdexWithdrawModal.__proto__ || Object.getPrototypeOf(GdexWithdrawModal)).call(this, props));

        _this.state = {
            isConfirmationModalVisible: false,
            withdraw_amount: _this.props.amount_to_withdraw,
            withdraw_address: common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.output_coin_name),
            withdraw_address_check_in_progress: true,
            withdraw_address_is_valid: null,
            options_is_valid: false,
            withdraw_address_selected: common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.output_coin_name),
            memo: "",
            withdraw_address_first: true,
            empty_withdraw_value: false,
            below_minumum_withdraw_value: false,
            precision_error: false,
            memo_error: false,
            memo_length_error: false,
            from_account: props.account,
            fee_asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].assets_by_symbol.get(props.fee_asset_symbol) || "1.3.0",
            feeStatus: {},
            withdraw_address_error_code: null,
            withdraw_address_error_message: null
        };

        _this._validateAddress(_this.state.withdraw_address, props);

        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);

        _this.showConfirmationModal = _this.showConfirmationModal.bind(_this);
        _this.hideConfirmationModal = _this.hideConfirmationModal.bind(_this);
        return _this;
    }

    _createClass(GdexWithdrawModal, [{
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

            if (np.output_coin_name != this.props.output_coin_name) {
                this.setState({
                    withdraw_address: common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(np.output_coin_name),
                    withdraw_address_selected: common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(np.output_coin_name)
                });
            }
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
        key: "_assembleMemo",
        value: function _assembleMemo() {
            var _this3 = this;

            var memo_rule = this.props.memo_rule;
            var memo_message = "";
            try {
                if (memo_rule) {
                    memo_rule.split(";").forEach(function (item) {
                        switch (item[0]) {
                            case "C":
                                memo_message += item.slice(2);
                                break;
                            case "D":
                                memo_message += _this3.state.withdraw_address;
                                break;
                            case "B":
                                memo_message += item.slice(2);
                                break;
                            case "S":
                                memo_message += _this3.state.memo;
                                break;
                        }
                    });
                    if (memo_message.length > 100) {
                        this.setState({ memo_length_error: true });
                        return null;
                    } else {
                        this.setState({ memo_length_error: false });
                    }
                    this.setState({ memo_error: false });
                    return memo_message;
                }
            } catch (err) {
                console.log(err);
            }
            this.setState({ memo_error: true });
            return null;
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this4 = this;

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
                    content: this._assembleMemo()
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                if (_this4.unMounted) return;

                _this4.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this4._checkBalance);
            });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this5 = this;

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
                        content: _this5.props.output_coin_name + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
                    _this5.setState({
                        feeStatus: feeStatus
                    });
                }
                _this5._checkBalance();
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
            }, this._checkBalance);
        }
    }, {
        key: "onSelectChanged",
        value: function onSelectChanged(index) {
            var new_withdraw_address = common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_coin_symbol)[index];
            common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].setLast({
                wallet: this.props.output_coin_symbol,
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
        key: "_validateAddress",
        value: function _validateAddress(new_withdraw_address) {
            var _this6 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["validateAddress"])({
                assetId: props.output_coin_id,
                assetName: props.output_coin_name,
                address: new_withdraw_address
            }).then(function (data) {
                _this6.setState({
                    withdraw_address_check_in_progress: false,
                    withdraw_address_is_valid: data.valid,
                    withdraw_address_error_code: null,
                    withdraw_address_error_message: null
                });
            }).catch(function (err) {
                var message = err.message;
                var code = err.code;
                if (code < 0) message = "System error: please try again later";
                _this6.setState({
                    withdraw_address_check_in_progress: false,
                    withdraw_address_is_valid: null,
                    withdraw_address_error_code: err.code,
                    withdraw_address_error_message: message
                });
            });
        }
    }, {
        key: "_checkPrecision",
        value: function _checkPrecision() {
            var withdraw_amount = this.state.withdraw_amount;
            var output_coin_precision = this.props.output_coin_precision;

            if (output_coin_precision === "undefined") return;
            if (typeof withdraw_amount !== "string") withdraw_amount = withdraw_amount.toString();
            withdraw_amount = withdraw_amount.trim();
            if (withdraw_amount.indexOf(".") === -1) {
                this.setState({ precision_error: false });
                return;
            }
            if (withdraw_amount.length - withdraw_amount.indexOf(".") - 1 > output_coin_precision) {
                this.setState({ precision_error: true });
            } else {
                this.setState({ precision_error: false });
            }
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                withdraw_amount = _state.withdraw_amount;
            var _props = this.props,
                asset = _props.asset,
                balance = _props.balance,
                minWithdrawAmount = _props.minWithdrawAmount;

            if (!balance) {
                // does not own any asset
                this.setState({ balanceError: true });
                return;
            }
            if (!feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkBalance"])(withdraw_amount, asset, feeAmount, balance);
            // balance is zero
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });

            if (typeof withdraw_amount === "string") withdraw_amount = parseFloat(String.prototype.replace.call(withdraw_amount, /,/g, ""));
            if (typeof minWithdrawAmount === "string") minWithdrawAmount = parseFloat(String.prototype.replace.call(minWithdrawAmount, /,/g, ""));
            if (withdraw_amount < minWithdrawAmount) {
                this.setState({ below_minumum_withdraw_value: true });
                return;
            } else {
                this.setState({ below_minumum_withdraw_value: false });
            }
            this._checkPrecision();
            return hasBalance;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
                if (!this.state.withdraw_address_is_valid) {
                    this.showConfirmationModal();
                } else if (parseFloat(this.state.withdraw_amount) > 0) {
                    if (!common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].has(this.props.output_coin_symbol)) {
                        var withdrawals = [];
                        withdrawals.push(this.state.withdraw_address);
                        common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                            wallet: this.props.output_coin_symbol,
                            addresses: withdrawals
                        });
                    } else {
                        var _withdrawals = common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_coin_symbol);
                        if (_withdrawals.indexOf(this.state.withdraw_address) == -1) {
                            _withdrawals.push(this.state.withdraw_address);
                            common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                                wallet: this.props.output_coin_symbol,
                                addresses: _withdrawals
                            });
                        }
                    }
                    common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].setLast({
                        wallet: this.props.output_coin_symbol,
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
                    actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this._assembleMemo(), null, feeAmount ? feeAmount.asset_id : fee_asset_id);

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

            if (!common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].has(this.props.output_coin_symbol)) {
                var withdrawals = [];
                withdrawals.push(this.state.withdraw_address);
                common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                    wallet: this.props.output_coin_symbol,
                    addresses: withdrawals
                });
            } else {
                var _withdrawals2 = common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_coin_symbol);
                if (_withdrawals2.indexOf(this.state.withdraw_address) == -1) {
                    _withdrawals2.push(this.state.withdraw_address);
                    common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].set({
                        wallet: this.props.output_coin_symbol,
                        addresses: _withdrawals2
                    });
                }
            }
            common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].setLast({
                wallet: this.props.output_coin_symbol,
                address: this.state.withdraw_address
            });
            var asset = this.props.asset;
            var precision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(asset.get("precision"));
            var amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");

            var _state3 = this.state,
                feeAmount = _state3.feeAmount,
                fee_asset_id = _state3.fee_asset_id;


            actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this._assembleMemo(), null, feeAmount ? feeAmount.asset_id : fee_asset_id);
        }
    }, {
        key: "onDropDownList",
        value: function onDropDownList() {
            if (common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].has(this.props.output_coin_symbol)) {
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
                memo = _state4.memo;

            var storedAddress = common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].get(this.props.output_coin_symbol);
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
                        className: !storedAddress.length ? "blocktrades-disabled-options" : "blocktrades-options"
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
                    if (this.state.withdraw_address_error_code) {
                        invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "has-error", style: { paddingTop: 10 } },
                            this.state.withdraw_address_error_code,
                            ":",
                            " ",
                            this.state.withdraw_address_error_message
                        );
                    } else {
                        invalid_address_message = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "has-error", style: { paddingTop: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "gateway.valid_address",
                                coin_type: this.props.output_coin_name
                            })
                        );
                    }

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
                    }),
                    this.state.memo_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.memo_error" })
                    ) : null,
                    this.state.memo_length_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.memo_length_error" })
                    ) : null
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

            var disableSubmit = this.state.below_minumum_withdraw_value || this.state.memo_error || this.state.memo_length_error || this.state.error || this.state.balanceError || this.state.precision_error;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "form",
                {
                    className: "grid-block vertical full-width-content",
                    style: { paddingTop: "0" }
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
                        this.state.below_minumum_withdraw_value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "transfer.errors.minimum_amount",
                                amount: this.props.minWithdrawAmount,
                                symbol: this.props.asset.get("symbol")
                            })
                        ) : null,
                        this.state.precision_error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "p",
                            {
                                className: "has-error no-margin",
                                style: { paddingTop: 10 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: "transfer.errors.precision",
                                precision: this.props.output_coin_precision
                            })
                        ) : null
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
                            { className: "blocktrades-select-dropdown" },
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
                            { className: "blocktrades-position-options" },
                            options
                        ),
                        invalid_address_message
                    ),
                    withdraw_memo,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__["Button"],
                            {
                                type: "primary",
                                disabled: disableSubmit,
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

    return GdexWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

GdexWithdrawModal.propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    memo_rule: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string.isRequired,
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject,
    output_supports_memos: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired
};


GdexWithdrawModal = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(GdexWithdrawModal);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_11__["connect"])(GdexWithdrawModal, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"]];
    },
    getProps: function getProps(props) {
        return {
            fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().settings.get("fee_asset")
        };
    }
}));

/***/ }),

/***/ 3042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(583);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1906);
/* harmony import */ var _lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3038);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var DEPOSIT_STATUS = {
    1: "confirming",
    2: "waiting",
    3: "transfering",
    4: "success",
    5: "fail"
};
var WITHDRAW_STATUS = {
    1: "confirming",
    2: "auditing",
    3: "audited",
    4: "refused",
    5: "transfering",
    6: "success",
    7: "fail"
};

var GdexHistory = function (_React$Component) {
    _inherits(GdexHistory, _React$Component);

    function GdexHistory(props) {
        _classCallCheck(this, GdexHistory);

        var _this2 = _possibleConstructorReturn(this, (GdexHistory.__proto__ || Object.getPrototypeOf(GdexHistory)).call(this));

        _this2.state = {
            headerHeight: 85,
            pageNum: 0,
            totalNum: 0,
            nextPageEnabled: false,
            allData: {},
            historyStatusType: props.recordType == 1 ? "deposit_history_status" : "withdraw_history_status",
            historyStatusValue: props.recordType == 1 ? DEPOSIT_STATUS : WITHDRAW_STATUS
        };
        return _this2;
    }

    _createClass(GdexHistory, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getTransactionHistory();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.recordType != nextProps.recordType || this.props.assetId != nextProps.assetId || this.props.assetName != nextProps.assetName || this.props.userId != nextProps.userId || this.props.userAccount != nextProps.userAccount) {
                this._getTransactionHistory(nextProps.userId, nextProps.assetId, nextProps.assetName, nextProps.recordType, nextProps.userAccount, true);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(this.props.userId, nextProps.userId)) {
                return true;
            }
            if (this.state.allData != nextState.allData) {
                return true;
            }
            if (this.state.pageNum != nextState.pageNum) return true;
            return false;
        }
    }, {
        key: "_getTransactionHistory",
        value: function _getTransactionHistory(userId, assetId, assetName, recordType, userAccount) {
            var force = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

            var pageSize = this.props.pageSize;
            var _state = this.state,
                pageNum = _state.pageNum,
                allData = _state.allData,
                historyStatusValue = _state.historyStatusValue,
                historyStatusType = _state.historyStatusType;

            if (force == true) {
                pageNum = 1;
                allData = {};
                historyStatusType = recordType == 1 ? "deposit_history_status" : "withdraw_history_status";
                historyStatusValue = recordType == 1 ? DEPOSIT_STATUS : WITHDRAW_STATUS;
            } else {
                pageNum += 1;
            }

            var _this = this;
            Object(_lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_4__["getTransactionRecordList"])({
                uid: userId,
                assetId: assetId,
                pageNum: pageNum,
                pageSize: pageSize,
                userAccount: userAccount
            }, recordType).then(function (res) {
                if (res.records) {
                    res.records.forEach(function (item) {
                        allData[item.txid] = {
                            txid: item.txid,
                            amount: item.amount,
                            time: item.ctime,
                            unixtime: Date.parse(item.ctime),
                            status: ["gateway", historyStatusType, historyStatusValue[item.status]].join("."),
                            failReason: item.failReason,
                            assetName: assetName
                        };
                    });

                    _this.setState({
                        totalNum: res.total,
                        nextPageEnabled: res.total > pageNum * pageSize,
                        allData: allData,
                        pageNum: pageNum,
                        historyStatusType: historyStatusType,
                        historyStatusValue: historyStatusValue
                    });
                }
            }).catch(function () {
                _this.setState({
                    totalNum: 0,
                    nextPageEnabled: false,
                    allData: {},
                    pageNum: 0
                });
            });
        }
    }, {
        key: "getTransactionHistory",
        value: function getTransactionHistory() {
            var _props = this.props,
                userId = _props.userId,
                assetId = _props.assetId,
                assetName = _props.assetName,
                recordType = _props.recordType,
                userAccount = _props.userAccount;

            this._getTransactionHistory(userId, assetId, assetName, recordType, userAccount, false);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                assetName = _props2.assetName,
                compactView = _props2.compactView,
                style = _props2.style,
                maxHeight = _props2.maxHeight;
            var _state2 = this.state,
                headerHeight = _state2.headerHeight,
                allData = _state2.allData;


            var history = [];
            Object.keys(allData).forEach(function (item) {
                history.push(allData[item]);
            });
            history.sort(function (a, b) {
                return b.unixtime - a.unixtime;
            });
            style = style ? style : {};
            style.width = "100%";
            style.height = "100%";

            if (allData.length == 0) {}
            var display_history = history.length ? history.map(function (o) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: o.txid },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "left" },
                            className: "left-td column-hide-tiny"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: o.status })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: {
                                padding: "8px 5px",
                                textAlign: "left",
                                fontSize: 14
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            content: "gateway.transaction_history_info",
                            amount: o.amount,
                            assetName: assetName,
                            txid: o.txid
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        o.time
                    )
                );
            }) : [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: "no_recent" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: compactView ? "2" : "3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "operation.no_recent" })
                )
            )];
            display_history.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: "total-value", key: "total_value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-tiny" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "center" } },
                    "\xA0",
                    this.state.nextPageEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: this.getTransactionHistory.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "chevron-down",
                            title: "icons.chevron_down.transactions",
                            className: "icon-14px"
                        })
                    ) : null
                )
            ));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "recent-transactions no-overflow", style: style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "generic-bordered-box" },
                    this.props.dashboard ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { ref: "header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "block-content-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                this.props.title ? this.props.title : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.recent" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "box-content grid-block no-margin",
                            style: !this.props.fullHeight ? {
                                maxHeight: maxHeight - headerHeight
                            } : null,
                            ref: "transactions"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            {
                                className: "table" + (compactView ? " compact" : "") + (this.props.dashboard ? " dashboard-table" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    { key: "history_header" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.status" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.info" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.time" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tbody",
                                null,
                                display_history
                            )
                        )
                    )
                )
            );
        }
    }]);

    return GdexHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GdexHistory.propTypes = {
    compactView: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    userId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    assetId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    assetName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    recordType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    userAccount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
GdexHistory.defaultProps = {
    maxHeight: 500,
    fullHeight: false,
    pageSize: 10
};


/* harmony default export */ __webpack_exports__["default"] = (GdexHistory);

/***/ }),

/***/ 3043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1898);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(737);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var GdexAgreementModal = function (_React$Component) {
    _inherits(GdexAgreementModal, _React$Component);

    function GdexAgreementModal(props) {
        _classCallCheck(this, GdexAgreementModal);

        var _this = _possibleConstructorReturn(this, (GdexAgreementModal.__proto__ || Object.getPrototypeOf(GdexAgreementModal)).call(this));

        _this.state = {
            locale: props.settings.get("locale", "en")
        };
        return _this;
    }

    _createClass(GdexAgreementModal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // console.log(this.refs);
            if (this.refs.agreement) {
                var item = this.refs.agreement;
                // console.log(item);
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(item);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            // console.log(this.refs);
            if (this.refs.agreement) {
                var item = this.refs.agreement;
                // console.log(item);
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(item);
            }
        }
    }, {
        key: "_getAgreement",
        value: function _getAgreement(locale) {
            switch (locale) {
                case "zh":
                case "cn":
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "container",
                            ref: "agreement",
                            style: {
                                height: "500px",
                                overflow: "auto",
                                position: "relative"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h2",
                            { style: { textAlign: "center" } },
                            "\u7528\u6237\u670D\u52A1\u534F\u8BAE"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "OBSIDIAN TECHNOLOGY CO. PTE. LTD. \u662F\u4E00\u5BB6\u6839\u636E\u65B0\u52A0\u5761\u5171\u548C\u56FD\u6CD5\u5F8B\u6210\u7ACB\u7684\u516C\u53F8\uFF0CGDEX\u662F\u7531\u8BE5\u516C\u53F8\u8FD0\u8425\u7684\u6BD4\u7279\u80A1\u7F51\u5173(\u4EE5\u4E0B\u79F0\u201CGDEX\u201D\u6216\u201C\u672C\u7F51\u5173\u201D)\uFF0C\u4E3B\u8BBF\u95EE\u5165\u53E3\u4E3Ahttps://www.gdex.io\uFF0CGDEX\u662F\u4E00\u4E2A\u5728\u6BD4\u7279\u80A1\u5E73\u53F0\u4E3A\u7528\u6237\u63D0\u4F9B\u6570\u5B57\u8D44\u4EA7\u5145\u63D0\u670D\u52A1\uFF08\u4EE5\u4E0B\u79F0\u201C\u8BE5\u670D\u52A1\u201D\u6216\u201C\u670D\u52A1\u201D\uFF09\u7684\u5E73\u53F0\u3002\u4E3A\u4E86\u672C\u534F\u8BAE\u8868\u8FF0\u4E4B\u65B9\u4FBF\uFF0C\u516C\u53F8\u548C\u8BE5\u7F51\u5173\u5728\u672C\u534F\u8BAE\u4E2D\u5408\u79F0\u4F7F\u7528\u201C\u6211\u4EEC\u201D\u6216\u5176\u4ED6\u7B2C\u4E00\u4EBA\u79F0\u79F0\u547C\u3002\u4F7F\u7528\u8BE5\u670D\u52A1\u7684\u81EA\u7136\u4EBA\u6216\u5176\u4ED6\u4E3B\u4F53\u5747\u4E3A\u672C\u7F51\u5173\u7684\u7528\u6237\uFF0C\u672C\u534F\u8BAE\u4E3A\u8868\u8FF0\u4E4B\u4FBF\u5229\uFF0C\u4EE5\u4E0B\u4F7F\u7528\u201C\u60A8\u201D\u6216\u5176\u4ED6\u7B2C\u4E8C\u4EBA\u79F0\u3002\u6211\u4EEC\u548C\u60A8\u5728\u672C\u534F\u8BAE\u4E2D\u5408\u79F0\u4E3A\u201C\u53CC\u65B9\u201D\uFF0C\u6211\u4EEC\u6216\u60A8\u5355\u79F0\u4E3A\u201C\u4E00\u65B9\u201D\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u91CD\u8981\u63D0\u793A\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u5728\u6B64\u7279\u522B\u63D0\u9192\u60A8\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1. \u6570\u5B57\u8D44\u4EA7\u672C\u8EAB\u4E0D\u7531\u4EFB\u4F55\u91D1\u878D\u673A\u6784\u6216\u516C\u53F8\u6216\u672C\u7F51\u5173\u53D1\u884C\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "2. \u6570\u5B57\u8D44\u4EA7\u5E02\u573A\u662F\u5168\u65B0\u7684\u3001\u672A\u7ECF\u786E\u8BA4\u7684\uFF0C\u800C\u4E14\u53EF\u80FD\u4E0D\u4F1A\u589E\u957F\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3. \u6570\u5B57\u8D44\u4EA7\u4E3B\u8981\u7531\u6295\u673A\u8005\u5927\u91CF\u4F7F\u7528\uFF0C\u96F6\u552E\u548C\u5546\u4E1A\u5E02\u573A\u4F7F\u7528\u76F8\u5BF9\u8F83\u5C11\uFF0C\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u5B58\u5728\u6781\u9AD8\u98CE\u9669\uFF0C\u5176\u5168\u5929\u4E0D\u95F4\u65AD\u4EA4\u6613\uFF0C\u6CA1\u6709\u6DA8\u8DCC\u9650\u5236\uFF0C\u4EF7\u683C\u5BB9\u6613\u53D7\u5E84\u5BB6\u3001\u5168\u7403\u653F\u5E9C\u653F\u7B56\u7684\u5F71\u54CD\u800C\u5927\u5E45\u6CE2\u52A8\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "4. \u56E0\u5404\u56FD\u6CD5\u5F8B\u3001\u6CD5\u89C4\u548C\u89C4\u8303\u6027\u6587\u4EF6\u7684\u5236\u5B9A\u6216\u8005\u4FEE\u6539\uFF0C\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u968F\u65F6\u53EF\u80FD\u88AB\u6682\u505C\u6216\u88AB\u7981\u6B62\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u6709\u6781\u9AD8\u98CE\u9669\uFF0C\u5E76\u4E0D\u9002\u5408\u7EDD\u5927\u90E8\u5206\u4EBA\u58EB\u3002\u60A8\u4E86\u89E3\u548C\u7406\u89E3\u6B64\u6295\u8D44\u6709\u53EF\u80FD\u5BFC\u81F4\u90E8\u5206\u635F\u5931\u6216\u5168\u90E8\u635F\u5931\uFF0C\u6240\u4EE5\u60A8\u5E94\u8BE5\u4EE5\u80FD\u627F\u53D7\u7684\u635F\u5931\u7A0B\u5EA6\u6765\u51B3\u5B9A\u6295\u8D44\u7684\u91D1\u989D\u3002\u60A8\u4E86\u89E3\u548C\u7406\u89E3\u6570\u5B57\u8D44\u4EA7\u4F1A\u4EA7\u751F\u884D\u751F\u98CE\u9669\uFF0C\u6240\u4EE5\u5982\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u5EFA\u8BAE\u5148\u5BFB\u6C42\u7406\u8D22\u987E\u95EE\u7684\u534F\u52A9\u3002\u6B64\u5916\uFF0C\u9664\u4E86\u4E0A\u8FF0\u63D0\u53CA\u8FC7\u7684\u98CE\u9669\u4EE5\u5916\uFF0C\u8FD8\u4F1A\u6709\u672A\u80FD\u9884\u6D4B\u7684\u98CE\u9669\u5B58\u5728\u3002\u60A8\u5E94\u614E\u91CD\u8003\u8651\u5E76\u7528\u6E05\u6670\u7684\u5224\u65AD\u80FD\u529B\u53BB\u8BC4\u4F30\u81EA\u5DF1\u7684\u8D22\u653F\u72B6\u51B5\u53CA\u4E0A\u8FF0\u5404\u9879\u98CE\u9669\u800C\u4F5C\u51FA\u4EFB\u4F55\u4E70\u5356\u6570\u5B57\u8D44\u4EA7\u7684\u51B3\u5B9A\uFF0C\u5E76\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u5168\u90E8\u635F\u5931\uFF0C\u6211\u4EEC\u5BF9\u6B64\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u656C\u544A\u60A8\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "1.\u60A8\u4E86\u89E3\u6BD4\u7279\u80A1\u662F\u57FA\u4E8E\u533A\u5757\u94FE\u7684\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u5E73\u53F0\uFF0C\u5176\u57FA\u7840\u8D26\u53F7\u670D\u52A1\u548C\u4EA4\u6613\u64AE\u5408\u670D\u52A1\u90FD\u7531\u6BD4\u7279\u80A1\u5E73\u53F0\u63D0\u4F9B\u3002\u4EA6\u6709\u5176\u5B83\u673A\u6784\u6216\u4E2A\u4EBA\u5728\u6BD4\u7279\u80A1\u5E73\u53F0\u4E0A\u53D1\u884C\u8D44\u4EA7\u53CA\uFF0F\u6216\u63D0\u4F9B\u670D\u52A1\u3002\u60A8\u4E86\u89E3\u672C\u7F51\u5173\u4EC5\u4F5C\u4E3A\u60A8\u5411\u6BD4\u7279\u80A1\u5E73\u53F0\u5145\u63D0\u6570\u5B57\u8D44\u4EA7\u7684\u5DE5\u5177\u3002\u672C\u7F51\u5173\u53EA\u5BF9\u81EA\u8EAB\u53D1\u884C\u7684\u4EA4\u6613\u4EE3\u5E01\u8D44\u4EA7\uFF08\u540D\u79F0\u4EE5GDEX.\u4E3A\u524D\u7F00\uFF09\u8D1F\u8D23\uFF0C\u4E0D\u5BF9\u6BD4\u7279\u80A1\u4E0A\u5176\u5B83\u673A\u6784\u6216\u4E2A\u4EBA\u53D1\u884C\u7684\u8D44\u4EA7\u8D1F\u8D23\uFF0C\u672C\u7F51\u5173\u4E0D\u53C2\u4E0E\u60A8\u7684\u4EFB\u4F55\u4EA4\u6613\uFF0C\u60A8\u5E94\u81EA\u884C\u8C28\u614E\u5224\u65AD\u786E\u5B9A\u76F8\u5173\u6570\u5B57\u8D44\u4EA7\u53CA/\u6216\u4FE1\u606F\u7684\u771F\u5B9E\u6027\u3001\u5408\u6CD5\u6027\u548C\u6709\u6548\u6027\uFF0C\u5E76\u81EA\u884C\u627F\u62C5\u56E0\u6B64\u4EA7\u751F\u7684\u8D23\u4EFB\u4E0E\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "2. \u6BD4\u7279\u80A1\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u7CFB\u7EDF\u5B58\u6709\u98CE\u9669\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u8F6F\u4EF6\uFF0C\u786C\u4EF6\u548C\u4E92\u8054\u7F51\u94FE\u7ED3\u7684\u5931\u8D25\uFF0C\u7528\u6237\u8D26\u6237\u7CFB\u7EDF\u7684\u5B89\u5168\u98CE\u9669\u7B49\u3002\u7531\u4E8E\u6211\u4EEC\u4E0D\u80FD\u63A7\u5236\u4E92\u8054\u7F51\u4EE5\u53CA\u6BD4\u7279\u80A1\u5E73\u53F0\u7684\u53EF\u9760\u6027\u548C\u53EF\u7528\u6027\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u5BF9\u4E0A\u8FF0\u98CE\u9669\u9020\u6210\u7684\u7528\u6237\u635F\u5931\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3. \u7981\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u4ECE\u4E8B\u6D17\u94B1\u3001\u8D70\u79C1\u3001\u5546\u4E1A\u8D3F\u8D42\u7B49\u4E00\u5207\u975E\u6CD5\u4EA4\u6613\u6D3B\u52A8\uFF0C\u82E5\u53D1\u73B0\u6B64\u7C7B\u4E8B\u4EF6\uFF0C\u672C\u7F51\u5173\u5C06\u91C7\u53D6\u5404\u79CD\u53EF\u4F7F\u7528\u4E4B\u624B\u6BB5\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E2D\u6B62\u63D0\u4F9B\u670D\u52A1\uFF0C\u901A\u77E5\u76F8\u5173\u6743\u529B\u673A\u5173\u7B49\uFF0C\u6211\u4EEC\u4E0D\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u6240\u6709\u8D23\u4EFB\u5E76\u4FDD\u7559\u5411\u76F8\u5173\u4EBA\u58EB\u8FFD\u7A76\u8D23\u4EFB\u7684\u6743\u5229\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E00\u3001\u603B\u5219"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.1 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u4E4B\u524D\uFF0C\u5E94\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\uFF0C\u5982\u6709\u4E0D\u7406\u89E3\u4E4B\u5904\u6216\u5176\u4ED6\u5FC5\u8981\uFF0C\u8BF7\u54A8\u8BE2\u4E13\u4E1A\u5F8B\u5E08\u3002\u5982\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u53CA/\u6216\u968F\u65F6\u5BF9\u5176\u7684\u4FEE\u6539\uFF0C\u8BF7\u60A8\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u3002\u4F7F\u7528\u672C\u7F51\u5173\u7684\u4EFB\u4F55\u670D\u52A1\u5373\u8868\u793A\u60A8\u5DF2\u4E86\u89E3\u5E76\u5B8C\u5168\u540C\u610F\u672C\u534F\u8BAE\u5404\u9879\u5185\u5BB9\uFF0C\u5305\u62EC\u672C\u7F51\u5173\u5BF9\u672C\u534F\u8BAE\u968F\u65F6\u6240\u505A\u7684\u4EFB\u4F55\u4FEE\u6539\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2 \u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u548C\u529F\u80FD\uFF0C\u60A8\u5C06\u88AB\u89C6\u4E3A\u5DF2\u9605\u8BFB\uFF0C\u7406\u89E3\u5E76\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 1.2.1 \u63A5\u53D7\u672C\u534F\u8BAE\u6240\u6709\u6761\u6B3E\u53CA\u6761\u4EF6\u7684\u7EA6\u675F\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.2 \u60A8\u786E\u8BA4\u60A8\u5DF2\u5E74\u6EE121\u5468\u5C81\u6216\u6839\u636E\u4E0D\u540C\u7684\u53EF\u9002\u7528\u7684\u6CD5\u5F8B\u89C4\u5B9A\u7684\u5177\u6709\u53EF\u8BA2\u7ACB\u5408\u540C\u7684\u6CD5\u5B9A\u5E74\u9F84\uFF0C\u5E76\u6709\u5145\u5206\u7684\u80FD\u529B\u63A5\u53D7\u8FD9\u4E9B\u6761\u6B3E\uFF0C\u5E76\u8BA2\u7ACB\u4EA4\u6613\uFF0C\u4F7F\u7528\u672C\u7F51\u5173\u8FDB\u884C\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.3 \u60A8\u4FDD\u8BC1\u4EA4\u6613\u4E2D\u6D89\u53CA\u5230\u7684\u5C5E\u4E8E\u60A8\u7684\u6570\u5B57\u8D44\u4EA7\u5747\u4E3A\u5408\u6CD5\u53D6\u5F97\u5E76\u6240\u6709\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.4 \u60A8\u540C\u610F\u60A8\u4E3A\u60A8\u81EA\u8EAB\u7684\u4EA4\u6613\u6216\u975E\u4EA4\u6613\u884C\u4E3A\u627F\u62C5\u5168\u90E8\u8D23\u4EFB\u548C\u4EFB\u4F55\u6536\u76CA\u6216\u4E8F\u635F\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.5 \u60A8\u540C\u610F\u9075\u5B88\u4EFB\u4F55\u6709\u5173\u6CD5\u5F8B\u7684\u89C4\u5B9A\uFF0C\u5C31\u7A0E\u52A1\u76EE\u7684\u800C\u8A00\uFF0C\u5305\u62EC\u62A5\u544A\u4EFB\u4F55\u4EA4\u6613\u5229\u6DA6\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "1.2.6 \u672C\u534F\u8BAE\u53EA\u662F\u5C31\u60A8\u4E0E\u6211\u4EEC\u4E4B\u95F4\u8FBE\u6210\u7684\u6743\u5229\u4E49\u52A1\u5173\u7CFB\u8FDB\u884C\u7EA6\u675F\uFF0C\u800C\u5E76\u4E0D\u6D89\u53CA\u672C\u7F51\u5173\u7528\u6237\u4E4B\u95F4\u6216\u5176\u4ED6\u7F51\u5173\u548C\u60A8\u4E4B\u95F4\u56E0\u6570\u5B57\u8D44\u4EA7\u4EA4\u6613\u800C\u4EA7\u751F\u7684\u6CD5\u5F8B\u5173\u7CFB\u53CA\u6CD5\u5F8B\u7EA0\u7EB7\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E8C\u3001\u534F\u8BAE\u4FEE\u8BA2"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u4FDD\u7559\u4E0D\u65F6\u4FEE\u8BA2\u672C\u534F\u8BAE\u3001\u5E76\u4EE5\u516C\u793A\u7684\u65B9\u5F0F\u8FDB\u884C\u516C\u544A\u3001\u4E0D\u518D\u5355\u72EC\u901A\u77E5\u60A8\u7684\u6743\u5229\uFF0C\u53D8\u66F4\u540E\u7684\u534F\u8BAE\u4F1A\u5728\u672C\u534F\u8BAE\u9996\u9875\u6807\u6CE8\u53D8\u66F4\u65F6\u95F4\uFF0C\u4E00\u7ECF\u5728\u516C\u5E03\uFF0C\u7ACB\u5373\u81EA\u52A8\u751F\u6548\u3002\u60A8\u5E94\u4E0D\u65F6\u6D4F\u89C8\u53CA\u5173\u6CE8\u672C\u534F\u8BAE\u7684\u66F4\u65B0\u53D8\u66F4\u65F6\u95F4\u53CA\u66F4\u65B0\u5185\u5BB9\uFF0C\u5982\u60A8\u4E0D\u540C\u610F\u76F8\u5173\u53D8\u66F4\uFF0C\u5E94\u5F53\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\uFF1B\u60A8\u7EE7\u7EED\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\uFF0C\u5373\u8868\u793A\u60A8\u63A5\u53D7\u5E76\u540C\u610F\u7ECF\u4FEE\u8BA2\u7684\u534F\u8BAE\u7684\u7EA6\u675F\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E09\u3001\u670D\u52A1"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u672C\u7F51\u5173\u53EA\u4E3A\u60A8\u63D0\u4F9B\u5411\u6BD4\u7279\u80A1\u5E73\u53F0\u51B2\u5165\u548C\u63D0\u53D6\u6570\u5B57\u8D44\u4EA7\u7684\u670D\u52A1\uFF0C\u672C\u7F51\u5173\u5E76\u4E0D\u4F5C\u4E3A\u4E70\u5BB6\u6216\u5356\u5BB6\u53C2\u4E0E\u4E70\u5356\u6570\u5B57\u8D44\u4EA7\u884C\u4E3A\u672C\u8EAB\uFF1B\u672C\u7F51\u5173\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u56FD\u5BB6\u6CD5\u5B9A\u8D27\u5E01\u5145\u5165\u548C\u63D0\u53D6\u7684\u76F8\u5173\u670D\u52A1\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 3.1 \u670D\u52A1\u5185\u5BB9"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.1.1 \u60A8\u6709\u6743\u901A\u8FC7\u672C\u7F51\u5173\u5411\u6BD4\u7279\u80A1\u5E73\u53F0\u51B2\u5165\u6216\u63D0\u53D6\u6570\u5B57\u8D44\u4EA7\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 3.1.2 \u672C\u7F51\u5173\u627F\u8BFA\u4E3A\u60A8\u63D0\u4F9B\u7684\u5176\u4ED6\u670D\u52A1\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 3.2.\u670D\u52A1\u89C4\u5219"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " \u60A8\u627F\u8BFA\u9075\u5B88\u4E0B\u5217\u672C\u7F51\u5173\u670D\u52A1\u89C4\u5219\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.1 \u60A8\u5E94\u5F53\u9075\u5B88\u6CD5\u5F8B\u6CD5\u89C4\u3001\u89C4\u7AE0\u3001\u53CA\u653F\u7B56\u8981\u6C42\u7684\u89C4\u5B9A\uFF0C\u4FDD\u8BC1\u8D26\u6237\u4E2D\u6240\u6709\u6570\u5B57\u8D44\u4EA7\u6765\u6E90\u7684\u5408\u6CD5\u6027\uFF0C\u4E0D\u5F97\u5728\u672C\u7F51\u5173\u6216\u5229\u7528\u672C\u7F51\u5173\u670D\u52A1\u4ECE\u4E8B\u975E\u6CD5\u6216\u5176\u4ED6\u635F\u5BB3\u672C\u7F51\u5173\u6216\u7B2C\u4E09\u65B9\u6743\u76CA\u7684\u6D3B\u52A8\uFF0C\u5982\u53D1\u9001\u6216\u63A5\u6536\u4EFB\u4F55\u8FDD\u6CD5\u3001\u8FDD\u89C4\u3001\u4FB5\u72AF\u4ED6\u4EBA\u6743\u76CA\u7684\u4FE1\u606F\uFF0C\u53D1\u9001\u6216\u63A5\u6536\u4F20\u9500\u6750\u6599\u6216\u5B58\u5728\u5176\u4ED6\u5371\u5BB3\u7684\u4FE1\u606F\u6216\u8A00\u8BBA\uFF0C\u672A\u7ECF\u672C\u7F51\u5173\u6388\u6743\u4F7F\u7528\u6216\u4F2A\u9020\u672C\u7F51\u5173\u7535\u5B50\u90AE\u4EF6\u9898\u5934\u4FE1\u606F\u7B49\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.2 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u4E4B\u524D\u5E94\u5145\u5206\u4E86\u89E3\u6BD4\u7279\u80A1\u8D26\u53F7\u7684\u4F7F\u7528\u5E38\u8BC6\uFF0C\u505A\u597D\u76F8\u5E94\u8D26\u53F7\u7684\u5907\u4EFD\u53CA\u5BC6\u7801\u4FDD\u5B58\u5DE5\u4F5C\uFF0C\u5BF9\u4E8E\u6BD4\u7279\u80A1\u8D26\u6237\u5B89\u5168\u95EE\u9898\u9020\u6210\u7684\u635F\u5931\uFF0C\u672C\u7F51\u5173\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.3 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u8FC7\u7A0B\u4E2D\uFF0C\u6240\u4EA7\u751F\u7684\u5E94\u7EB3\u7A0E\u8D4B\uFF0C\u4EE5\u53CA\u4E00\u5207\u786C\u4EF6\u3001\u8F6F\u4EF6\u3001\u670D\u52A1\u53CA\u5176\u5B83\u65B9\u9762\u7684\u8D39\u7528\uFF0C\u5747\u7531\u60A8\u72EC\u81EA\u627F\u62C5\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "3.2.4 \u60A8\u5E94\u5F53\u9075\u5B88\u672C\u7F51\u5173\u4E0D\u65F6\u53D1\u5E03\u548C\u66F4\u65B0\u7684\u672C\u534F\u8BAE\u4EE5\u53CA\u5176\u4ED6\u670D\u52A1\u6761\u6B3E\u548C\u64CD\u4F5C\u89C4\u5219\uFF0C\u6709\u6743\u968F\u65F6\u7EC8\u6B62\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u56DB\u3001\u672C\u7F51\u5173\u7684\u6743\u5229\u548C\u4E49\u52A1"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "4.1 \u672C\u7F51\u5173\u6709\u6743\u5728\u53D1\u73B0\u672C\u7F51\u5173\u4E0A\u663E\u793A\u7684\u4EFB\u4F55\u4FE1\u606F\u5B58\u5728\u660E\u663E\u9519\u8BEF\u65F6\uFF0C\u5BF9\u4FE1\u606F\u4E88\u4EE5\u66F4\u6B63\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "4.2 \u672C\u7F51\u5173\u4FDD\u7559\u968F\u65F6\u4FEE\u6539\u3001\u4E2D\u6B62\u6216\u7EC8\u6B62\u672C\u7F51\u5173\u670D\u52A1\u7684\u6743\u5229\uFF0C\u672C\u7F51\u5173\u884C\u4F7F\u4FEE\u6539\u6216\u4E2D\u6B62\u670D\u52A1\u7684\u6743\u5229\u4E0D\u9700\u4E8B\u5148\u544A\u77E5\u60A8\uFF1B\u672C\u7F51\u5173\u7EC8\u6B62\u672C\u7F51\u5173\u4E00\u9879\u6216\u591A\u9879\u670D\u52A1\u7684\uFF0C\u7EC8\u6B62\u81EA\u672C\u7F51\u5173\u5728\u7F51\u5173\u4E0A\u53D1\u5E03\u7EC8\u6B62\u516C\u544A\u4E4B\u65E5\u751F\u6548\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "4.3 \u672C\u7F51\u5173\u5E94\u5F53\u91C7\u53D6\u5FC5\u8981\u7684\u6280\u672F\u624B\u6BB5\u548C\u7BA1\u7406\u63AA\u65BD\u4FDD\u969C\u672C\u7F51\u5173\u7684\u6B63\u5E38\u8FD0\u884C\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E94\u3001\u8D54\u507F"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "5.1 \u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5BF9\u60A8\u7684\u76F4\u63A5\u635F\u5BB3\u7684\u8D54\u507F\u8D23\u4EFB\u5747\u4E0D\u4F1A\u8D85\u8FC7\u60A8\u4ECE\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u4EA7\u751F\u7684\u4E3A\u671F\u4E09\uFF08 3\uFF09\u4E2A\u6708\u7684\u603B\u8D39\u7528\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u516D\u3001\u5BFB\u6C42\u7981\u4EE4\u6551\u6D4E\u7684\u6743\u5229"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u548C\u60A8\u5747\u627F\u8BA4\u666E\u901A\u6CD5\u5BF9\u8FDD\u7EA6\u6216\u53EF\u80FD\u8FDD\u7EA6\u60C5\u51B5\u7684\u6551\u6D4E\u63AA\u65BD\u662F\u53EF\u80FD\u662F\u4E0D\u8DB3\u4EE5\u5F25\u8865\u6211\u4EEC\u906D\u53D7\u7684\u5168\u90E8\u635F\u5931\u7684\uFF0C\u6545\u975E\u8FDD\u7EA6\u65B9\u6709\u6743\u5728\u8FDD\u7EA6\u6216\u53EF\u80FD\u8FDD\u7EA6\u60C5\u51B5\u4E0B\u5BFB\u6C42\u7981\u4EE4\u6551\u6D4E\u4EE5\u53CA\u666E\u901A\u6CD5\u6216\u8861\u5E73\u6CD5\u5141\u8BB8\u7684\u5176\u4ED6\u6240\u6709\u7684\u8865\u6551\u63AA\u65BD\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E03\u3001\u8D23\u4EFB\u9650\u5236\u4E0E\u514D\u8D23"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.1 \u60A8\u4E86\u89E3\u5E76\u540C\u610F\uFF0C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5C31\u4EE5\u4E0B\u5404\u4E8B\u9879\u627F\u62C5\u8D23\u4EFB\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.1 \u6536\u5165\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.2 \u4EA4\u6613\u5229\u6DA6\u6216\u5408\u540C\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.3 \u4E1A\u52A1\u4E2D\u65AD"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.4 \u9884\u671F\u53EF\u8282\u7701\u7684\u8D27\u5E01\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.5 \u4FE1\u606F\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.6 \u673A\u4F1A\u3001\u5546\u8A89\u6216\u58F0\u8A89\u7684\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.7 \u6570\u636E\u7684\u635F\u574F\u6216\u635F\u5931\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.1.8 \u8D2D\u4E70\u66FF\u4EE3\u4EA7\u54C1\u6216\u670D\u52A1\u7684\u6210\u672C\uFF1B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.1.9 \u4EFB\u4F55\u7531\u4E8E\u4FB5\u6743\uFF08\u5305\u62EC\u8FC7\u5931\uFF09\u3001\u8FDD\u7EA6\u6216\u5176\u4ED6\u4EFB\u4F55\u539F\u56E0\u4EA7\u751F\u7684\u95F4\u63A5\u7684\u3001\u7279\u6B8A\u7684\u6216\u9644\u5E26\u6027\u7684\u635F\u5931\u6216\u635F\u5BB3\uFF0C\u4E0D\u8BBA\u8FD9\u79CD\u635F\u5931\u6216\u635F\u5BB3\u662F\u5426\u53EF\u4EE5\u4E3A\u6211\u4EEC\u5408\u7406\u9884\u89C1\uFF1B\u4E0D\u8BBA\u6211\u4EEC\u662F\u5426\u4E8B\u5148\u88AB\u544A\u77E5\u5B58\u5728\u6B64\u79CD\u635F \u5931\u6216\u635F\u5BB3\u7684\u53EF\u80FD\u6027\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2 \u60A8\u4E86\u89E3\u5E76\u540C\u610F\uFF0C\u6211\u4EEC\u4E0D\u5BF9\u56E0\u4E0B\u8FF0\u4EFB\u4E00\u60C5\u51B5\u800C\u5BFC\u81F4\u60A8\u7684\u4EFB\u4F55\u635F\u5BB3\u8D54\u507F\u627F\u62C5\u8D23\u4EFB\uFF1A"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.1 \u6211\u4EEC\u6709\u5408\u7406\u7684\u7406\u7531\u8BA4\u4E3A\u60A8\u7684\u5177\u4F53\u4EA4\u6613\u4E8B\u9879\u53EF\u80FD\u5B58\u5728\u91CD\u5927\u8FDD\u6CD5\u6216\u8FDD\u7EA6\u60C5\u5F62\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.2 \u6211\u4EEC\u6709\u5408\u7406\u7684\u7406\u7531\u8BA4\u4E3A\u60A8\u5728\u672C\u7F51\u5173\u7684\u884C\u4E3A\u6D89\u5ACC\u8FDD\u6CD5\u6216\u4E0D\u5F53\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.3 \u901A\u8FC7\u672C\u7F51\u5173\u670D\u52A1\u8D2D\u4E70\u6216\u83B7\u53D6\u4EFB\u4F55\u6570\u636E\u3001\u4FE1\u606F\u6216\u8FDB\u884C\u4EA4\u6613\u7B49\u884C\u4E3A\u6216\u66FF\u4EE3\u884C\u4E3A\u4EA7\u751F\u7684\u8D39\u7528\u53CA\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " 7.2.4 \u60A8\u5BF9\u672C\u7F51\u5173\u670D\u52A1\u7684\u8BEF\u89E3\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.2.5 \u4EFB\u4F55\u975E\u56E0\u6211\u4EEC\u7684\u539F\u56E0\u800C\u5F15\u8D77\u7684\u4E0E\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u6709\u5173\u7684\u5176\u5B83\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.3 \u6211\u4EEC\u5BF9\u7531\u4E8E\u4FE1\u606F\u7F51\u7EDC\u8BBE\u5907\u7EF4\u62A4\u3001\u4FE1\u606F\u7F51\u7EDC\u8FDE\u63A5\u6545\u969C\u3001\u7535\u8111\u3001\u901A\u8BAF\u6216\u5176\u4ED6\u7CFB\u7EDF\u7684\u6545\u969C\u3001\u7535\u529B\u6545\u969C\u3001\u5929\u6C14\u539F\u56E0\u3001\u610F\u5916\u4E8B\u6545\u3001\u7F62\u5DE5\u3001\u52B3\u52A8\u4E89\u8BAE\u3001\u66B4\u4E71\u3001\u8D77\u4E49\u3001\u9A9A\u4E71\u3001\u751F\u4EA7\u529B\u6216\u751F\u4EA7\u8D44\u6599\u4E0D\u8DB3\u3001\u706B\u707E\u3001\u6D2A\u6C34\u3001\u98CE\u66B4\u3001\u7206\u70B8\u3001\u6218\u4E89\u3001\u94F6\u884C\u6216\u5176\u4ED6\u5408\u4F5C\u65B9\u539F\u56E0\u3001\u6570\u5B57\u8D44\u4EA7\u5E02\u573A\u5D29\u6E83\u3001\u653F\u5E9C\u884C\u4E3A\u3001 \u53F8\u6CD5\u6216\u884C\u653F\u673A\u5173\u7684\u547D\u4EE4\u3001\u5176\u4ED6\u4E0D\u5728\u6211\u4EEC\u53EF\u63A7\u8303\u56F4\u5185\u6216\u6211\u4EEC\u65E0\u80FD\u529B\u63A7\u5236\u7684\u884C\u4E3A\u6216\u7B2C\u4E09\u65B9\u7684\u539F\u56E0\u800C\u9020\u6210\u7684\u4E0D\u80FD\u670D\u52A1\u6216\u5EF6\u8FDF\u670D\u52A1\uFF0C\u4EE5\u53CA\u9020\u6210\u7684\u60A8\u7684\u635F\u5931\uFF0C\u6211\u4EEC\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.4 \u6211\u4EEC\u4E0D\u80FD\u4FDD\u8BC1\u672C\u7F51\u5173\u5305\u542B\u7684\u5168\u90E8\u4FE1\u606F\u3001\u7A0B\u5E8F\u3001\u6587\u672C\u7B49\u5B8C\u5168\u5B89\u5168\uFF0C\u4E0D\u53D7\u4EFB\u4F55\u75C5\u6BD2\u3001\u6728\u9A6C\u7B49\u6076\u610F\u7A0B\u5E8F\u7684\u5E72\u6270\u548C\u7834\u574F\uFF0C\u6545\u60A8\u767B\u9646\u3001\u4F7F\u7528\u672C\u7F51\u5173\u4EFB\u4F55\u670D\u52A1\u6216\u4E0B\u8F7D\u53CA\u4F7F\u7528\u8BE5\u4E0B\u8F7D\u7684\u4EFB\u4F55\u7A0B\u5E8F\u3001\u4FE1\u606F\u3001\u6570\u636E\u7B49\u5747\u662F\u60A8\u4E2A\u4EBA\u7684\u51B3\u5B9A\u5E76\u81EA\u884C\u627F\u62C5\u98CE\u9669\u53CA\u53EF\u80FD\u4EA7\u751F\u7684\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.5 \u6211\u4EEC\u5BF9\u672C\u7F51\u5173\u4E2D\u94FE\u63A5\u7684\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7F51\u5173\u7684\u4EFB\u4F55\u4FE1\u606F\u3001\u4EA7\u54C1\u53CA\u4E1A\u52A1\u53CA\u5176\u4ED6\u4EFB\u4F55\u5F62\u5F0F\u7684\u4E0D\u5C5E\u4E8E\u6211\u4EEC\u7684\u4E3B\u4F53\u7684\u5185\u5BB9\u7B49\u4E0D\u505A\u4EFB\u4F55\u4FDD\u8BC1\u548C\u627F\u8BFA\uFF0C\u60A8\u5982\u679C\u4F7F\u7528\u7B2C\u4E09\u65B9\u7F51\u5173\u63D0\u4F9B\u7684\u4EFB\u4F55\u670D\u52A1\u3001\u4FE1\u606F\u53CA\u4EA7\u54C1\u7B49\u5747\u4E3A\u60A8\u4E2A\u4EBA\u51B3\u5B9A\u4E14\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u4E00\u5207\u8D23\u4EFB\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.6 \u6211\u4EEC\u5BF9\u4E8E\u60A8\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u4E0D\u505A\u4EFB\u4F55\u660E\u793A\u6216\u6697\u793A\u7684\u4FDD\u8BC1\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u672C\u7F51\u5173\u63D0\u4F9B\u670D\u52A1\u7684\u9002\u7528\u6027\u3001\u6CA1\u6709\u9519\u8BEF\u6216\u758F\u6F0F\u3001\u6301\u7EED\u6027\u3001\u51C6\u786E\u6027\u3001\u53EF\u9760\u6027\u3001\u9002\u7528\u4E8E\u67D0\u4E00\u7279\u5B9A\u7528\u9014\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u5BF9\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u6240\u6D89\u53CA\u7684\u6280\u672F\u53CA\u4FE1\u606F\u7684\u6709\u6548\u6027\u3001\u51C6\u786E\u6027\u3001\u6B63\u786E\u6027\u3001\u53EF\u9760\u6027\u3001\u8D28\u91CF\u3001\u7A33\u5B9A\u3001\u5B8C\u6574\u548C\u53CA\u65F6\u6027\u4F5C\u51FA\u4EFB\u4F55\u627F\u8BFA\u548C\u4FDD\u8BC1\u3002\u662F\u5426\u767B\u9646\u6216\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u662F\u60A8\u4E2A\u4EBA\u7684\u51B3\u5B9A\u4E14\u81EA\u884C\u627F\u62C5\u98CE\u9669\u53CA\u53EF\u80FD\u4EA7\u751F\u7684\u635F\u5931\u3002\u6211\u4EEC\u5BF9\u4E8E\u6570\u5B57\u8D44\u4EA7\u7684\u5E02\u573A\u3001\u4EF7\u503C\u53CA\u4EF7\u683C\u7B49\u4E0D\u505A\u4EFB\u4F55\u660E\u793A\u6216\u6697\u793A\u7684\u4FDD\u8BC1\uFF0C\u60A8\u7406\u89E3\u5E76\u4E86\u89E3\u6570\u5B57\u8D44\u4EA7\u5E02\u573A\u662F\u4E0D\u7A33\u5B9A\u7684\uFF0C\u4EF7\u683C\u548C\u4EF7\u503C\u968F\u65F6\u4F1A\u5927\u5E45\u6CE2\u52A8\u6216\u5D29\u76D8\uFF0C\u4EA4\u6613\u6570\u5B57\u8D44\u4EA7\u662F\u60A8\u4E2A\u4EBA\u7684\u81EA\u7531\u9009\u62E9\u53CA\u51B3\u5B9A\u4E14\u81EA\u884C\u627F\u62C5\u98CE\u9669\u53CA\u53EF\u80FD\u4EA7\u751F\u7684\u635F\u5931\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.7 \u672C\u534F\u8BAE\u4E2D\u89C4\u5B9A\u7684\u6211\u4EEC\u7684\u4FDD\u8BC1\u548C\u627F\u8BFA\u662F\u7531\u6211\u4EEC\u5C31\u672C\u534F\u8BAE\u548C\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u670D\u52A1\u7684\u552F\u4E00\u4FDD\u8BC1\u548C\u9648\u8FF0\uFF0C\u5E76\u53D6\u4EE3\u4EFB\u4F55\u5176\u4ED6\u9014\u5F84\u548C\u65B9\u5F0F\u4EA7\u751F\u7684\u4FDD\u8BC1\u548C\u627F\u8BFA\uFF0C\u65E0\u8BBA\u662F\u4E66\u9762\u7684\u6216\u53E3\u5934\u7684\uFF0C\u660E\u793A\u7684\u6216\u6697\u793A\u7684\u3002\u6240\u6709\u8FD9\u4E9B\u4FDD\u8BC1\u548C\u9648\u8FF0\u4EC5\u4EC5\u4EE3\u8868\u6211\u4EEC\u81EA\u8EAB\u7684\u627F\u8BFA\u548C\u4FDD\u8BC1\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4EFB\u4F55\u7B2C\u4E09\u65B9\u9075\u5B88\u672C\u534F\u8BAE\u4E2D\u7684\u4FDD\u8BC1\u548C\u627F\u8BFA\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.8 \u6211\u4EEC\u5E76\u4E0D\u653E\u5F03\u672C\u534F\u8BAE\u4E2D\u672A\u63D0\u53CA\u7684\u5728\u6CD5\u5F8B\u9002\u7528\u7684\u6700\u5927\u8303\u56F4\u5185\u6211\u4EEC\u4EAB\u6709\u7684\u9650\u5236\u3001\u514D\u9664\u6216\u62B5\u9500\u6211\u4EEC\u635F\u5BB3\u8D54\u507F\u8D23\u4EFB\u7684\u4EFB\u4F55\u6743\u5229\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "7.9 \u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u5373\u8868\u793A\u8BA4\u53EF\u6211\u4EEC\u6309\u7167\u672C\u534F\u8BAE\u4E2D\u89C4\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u7684\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u4EA7\u751F\u7684\u4EFB\u4F55\u98CE\u9669\u5747\u7531\u60A8\u627F\u62C5\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u516B\u3001\u77E5\u8BC6\u4EA7\u6743"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.1 \u672C\u7F51\u5173\u6240\u5305\u542B\u7684\u5168\u90E8\u667A\u529B\u6210\u679C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7F51\u5173\u6807\u5FD7\u3001\u6570\u636E\u5E93\u3001\u7F51\u5173\u8BBE\u8BA1\u3001\u6587\u5B57\u548C\u56FE\u8868\u3001\u8F6F\u4EF6\u3001\u7167\u7247\u3001\u5F55\u50CF\u3001\u97F3\u4E50\u3001\u58F0\u97F3\u53CA\u5176\u524D\u8FF0\u7EC4\u5408\uFF0C\u8F6F\u4EF6\u7F16\u8BD1\u3001\u76F8\u5173\u6E90\u4EE3\u7801\u548C\u8F6F\u4EF6 (\u5305\u62EC\u5C0F\u5E94\u7528\u7A0B\u5E8F\u548C\u811A\u672C) \u7684\u77E5\u8BC6\u4EA7\u6743\u6743\u5229\u5747\u5F52\u672C\u7F51\u5173\u6240\u6709\u3002\u60A8\u4E0D\u5F97\u4E3A\u5546\u4E1A\u76EE\u7684\u590D\u5236\u3001\u66F4\u6539\u3001\u62F7\u8D1D\u3001\u53D1\u9001\u6216\u4F7F\u7528\u524D\u8FF0\u4EFB\u4F55\u6750\u6599\u6216\u5185\u5BB9\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.2 \u672C\u7F51\u5173\u540D\u79F0\u4E2D\u5305\u542B\u7684\u6240\u6709\u6743\u5229 (\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5546\u8A89\u548C\u5546\u6807\u3001\u6807\u5FD7) \u5747\u5F52\u516C\u53F8\u6240\u6709\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.3 \u60A8\u63A5\u53D7\u672C\u534F\u8BAE\u5373\u89C6\u4E3A\u60A8\u4E3B\u52A8\u5C06\u5176\u5728\u672C\u7F51\u5173\u53D1\u8868\u7684\u4EFB\u4F55\u5F62\u5F0F\u7684\u4FE1\u606F\u7684\u8457\u4F5C\u6743\uFF0C \u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u590D\u5236\u6743\u3001\u53D1\u884C\u6743\u3001\u51FA\u79DF\u6743\u3001\u5C55\u89C8\u6743\u3001\u8868\u6F14\u6743\u3001\u653E\u6620\u6743\u3001\u5E7F\u64AD\u6743\u3001\u4FE1\u606F\u7F51\u7EDC\u4F20\u64AD\u6743\u3001\u6444\u5236\u6743\u3001\u6539\u7F16\u6743\u3001\u7FFB\u8BD1\u6743\u3001\u6C47\u7F16\u6743 \u4EE5\u53CA\u5E94\u5F53\u7531\u8457\u4F5C\u6743\u4EBA\u4EAB\u6709\u7684\u5176\u4ED6\u53EF\u8F6C\u8BA9\u6743\u5229\u65E0\u507F\u72EC\u5BB6\u8F6C\u8BA9\u7ED9\u672C\u7F51\u5173\u6240\u6709\uFF0C\u672C\u7F51\u5173\u6709\u6743\u5229\u5C31\u4EFB\u4F55\u4E3B\u4F53\u4FB5\u6743\u5355\u72EC\u63D0\u8D77\u8BC9\u8BBC\u5E76\u83B7\u5F97\u5168\u90E8\u8D54\u507F\u3002 \u672C\u534F\u8BAE\u6548\u529B\u53CA\u4E8E\u60A8\u5728\u672C\u7F51\u5173\u53D1\u5E03\u7684\u4EFB\u4F55\u53D7\u8457\u4F5C\u6743\u6CD5\u4FDD\u62A4\u7684\u4F5C\u54C1\u5185\u5BB9\uFF0C \u65E0\u8BBA\u8BE5\u5185\u5BB9\u5F62\u6210\u4E8E\u672C\u534F\u8BAE\u7B7E\u8BA2\u524D\u8FD8\u662F\u672C\u534F\u8BAE\u7B7E\u8BA2\u540E\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.4 \u60A8\u5728\u4F7F\u7528\u672C\u7F51\u5173\u670D\u52A1\u8FC7\u7A0B\u4E2D\u4E0D\u5F97\u975E\u6CD5\u4F7F\u7528\u6216\u5904\u5206\u672C\u7F51\u5173\u6216\u4ED6\u4EBA\u7684\u77E5\u8BC6\u4EA7\u6743\u6743\u5229\u3002\u60A8\u4E0D\u5F97\u5C06\u5DF2\u53D1\u8868\u4E8E\u672C\u7F51\u5173\u7684\u4FE1\u606F\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u53D1\u5E03\u6216\u6388\u6743\u5176\u5B83\u7F51\u5173\uFF08\u53CA\u5A92\u4F53\uFF09\u4F7F\u7528\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            " ",
                            "8.5 \u60A8\u4F7F\u7528\u672C\u7F51\u5173\u63D0\u4F9B\u7684\u4EFB\u4F55\u670D\u52A1\u5747\u4E0D\u89C6\u4E3A\u6211\u4EEC\u5411\u60A8\u8F6C\u8BA9\u4EFB\u4F55\u77E5\u8BC6\u4EA7\u6743\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u4E5D\u3001\u53EF\u5206\u5272\u6027"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5982\u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u6761\u6B3E\u88AB\u4EFB\u4F55\u6709\u7BA1\u8F96\u6743\u7684\u6CD5\u9662\u8BA4\u5B9A\u4E3A\u4E0D\u53EF\u6267\u884C\u7684\uFF0C\u65E0\u6548\u7684\u6216\u975E\u6CD5\u7684\uFF0C\u5E76\u4E0D\u5F71\u54CD\u672C\u534F\u8BAE\u7684\u5176\u4F59\u6761\u6B3E\u7684\u6548\u529B\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u3001\u975E\u4EE3\u7406\u5173\u7CFB"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u672C\u534F\u8BAE\u4E2D\u7684\u4EFB\u4F55\u89C4\u5B9A\u5747\u4E0D\u53EF\u88AB\u8BA4\u4E3A\u521B\u9020\u4E86\u3001\u6697\u793A\u4E86\u6216\u4EE5\u5176\u4ED6\u65B9\u5F0F\u5C06\u6211\u4EEC\u89C6\u4E3A\u60A8\u7684\u4EE3\u7406\u4EBA\u3001\u53D7\u6258\u4EBA\u6216\u5176\u4ED6\u4EE3\u8868\u4EBA\uFF0C\u672C\u534F\u8BAE\u6709\u5176\u4ED6\u89C4\u5B9A\u7684\u9664\u5916\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u4E00\u3001\u5F03\u6743"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6211\u4EEC\u6216\u60A8\u4EFB\u4F55\u4E00\u65B9\u5BF9\u8FFD\u7A76\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u8FDD\u7EA6\u8D23\u4EFB\u6216\u5176\u4ED6\u8D23\u4EFB\u7684\u5F03\u6743\u5E76\u4E0D\u80FD\u8BA4\u5B9A\u6216\u89E3\u91CA\u4E3A\u5BF9\u5176\u4ED6\u8FDD\u7EA6\u8D23\u4EFB\u7684\u5F03\u6743\uFF1B\u672A\u884C\u4F7F\u4EFB\u4F55\u6743\u5229\u6216\u6551\u6D4E\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u88AB\u89E3\u91CA\u4E3A\u5BF9\u8BE5\u7B49\u6743\u5229\u6216\u6551\u6D4E\u7684\u653E\u5F03\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u4E8C\u3001\u6807\u9898"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u6240\u6709\u6807\u9898\u4EC5\u4F9B\u534F\u8BAE\u8868\u8FF0\u65B9\u4FBF\uFF0C\u5E76\u4E0D\u7528\u4E8E\u6269\u5927\u6216\u9650\u5236\u8BE5\u534F\u8BAE\u6761\u6B3E\u7684\u5185\u5BB9\u6216\u8303\u56F4\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u4E09\u3001\u9002\u7528\u6CD5\u5F8B"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u672C\u534F\u8BAE\u5168\u90E8\u5185\u5BB9\u5747\u4E3A\u6839\u636E\u65B0\u52A0\u5761\u5171\u548C\u56FD\u6CD5\u5F8B\u8BA2\u7ACB\u7684\u5408\u540C\uFF0C\u5176\u6210\u7ACB\u3001\u89E3\u91CA\u3001\u5185\u5BB9\u53CA\u6267\u884C\u5747\u9002\u7528\u65B0\u52A0\u5761\u5171\u548C\u56FD\u76F8\u5173\u6CD5\u5F8B\u89C4\u5B9A\uFF1B\u4EFB\u4F55\u56E0\u6216\u4E0E\u672C\u534F\u8BAE\u7EA6\u5B9A\u7684\u670D\u52A1\u6709\u5173\u800C\u4EA7\u751F\u7684\u7D22\u8D54\u6216\u8BC9\u8BBC\uFF0C\u90FD\u5E94\u4F9D\u7167\u65B0\u52A0\u5761\u5171\u548C\u56FD\u7684\u6CD5\u5F8B\u8FDB\u884C\u7BA1\u8F96\u5E76\u52A0\u4EE5\u89E3\u91CA\u548C\u6267\u884C\u3002\u4E3A\u907F\u514D\u7591\u4E49\uFF0C\u8FD9\u4E00\u6761\u6B3E\u660E\u786E\u9002\u7528\u4E8E\u4EFB\u4F55\u9488\u5BF9\u6211\u4EEC\u7684\u4FB5\u6743\u7D22\u8D54\u3002\u4EFB\u4F55\u9488\u5BF9\u6211\u4EEC\u6216\u8005\u662F\u548C\u6211\u4EEC\u6709\u5173\u7684\u7D22\u8D54\u6216\u8BC9\u8BBC\u7684\u7BA1\u8F96\u6CD5\u9662\u6216\u8BC9\u8BBC\u5730\u5747\u5728\u65B0\u52A0\u5761\u5171\u548C\u56FD\u3002\u60A8\u65E0\u6761\u4EF6\u5730\u83B7\u5F97\u5728\u65B0\u52A0\u5761\u5171\u548C\u56FD\u6CD5\u9662\u8FDB\u884C\u8BC9\u8BBC\u548C\u4E0A\u8BC9\u7684\u6392\u4ED6\u6027\u7684\u7BA1\u8F96\u6743\u3002\u60A8\u4E5F\u65E0\u6761\u4EF6\u5730\u540C\u610F\u4E0E\u672C\u534F\u8BAE\u6B3E\u6709\u5173\u7684\u4E89\u8BAE\u6216\u95EE\u9898\u6216\u4EA7\u751F\u7684\u4EFB\u4F55\u7D22\u8D54\u8BF7\u6C42\u548C\u8BC9\u8BBC\u7684\u53D1\u751F\u5730\u6216\u6CD5\u9662\u5747\u6392\u4ED6\u6027\u5F97\u5728\u65B0\u52A0\u5761\u5171\u548C\u56FD\u3002\u4E0D\u65B9\u4FBF\u6CD5\u9662\u7684\u539F\u5219\u4E0D\u9002\u7528\u4E8E\u6839\u636E\u672C\u670D\u52A1\u6761\u6B3E\u7684\u9009\u62E9\u7684\u6CD5\u9662\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "\u5341\u56DB\u3001\u534F\u8BAE\u7684\u751F\u6548\u548C\u89E3\u91CA"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "14.1 \u672C\u534F\u8BAE\u4E8E\u60A8\u70B9\u51FB\u672C\u7F51\u5173\u6CE8\u518C\u9875\u9762\u7684\u540C\u610F\u6CE8\u518C\u5E76\u5B8C\u6210\u6CE8\u518C\u7A0B\u5E8F\u3001\u83B7\u5F97\u672C\u7F51\u5173\u8D26\u53F7\u548C\u5BC6\u7801\u65F6\u751F\u6548\uFF0C\u5BF9\u672C\u7F51\u5173\u548C\u60A8\u5747\u5177\u6709\u7EA6\u675F\u529B\u3002"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "14.2 \u672C\u534F\u8BAE\u7684\u6700\u7EC8\u89E3\u91CA\u6743\u5F52\u672C\u7F51\u5173\u6240\u6709\u3002"
                        )
                    );
                    break;
                default:
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "container",
                            ref: "agreement",
                            style: {
                                height: "500px",
                                overflow: "auto",
                                position: "relative"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h2",
                            { style: { textAlign: "center" } },
                            "Service Agreement"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "OBSIDIAN TECHNOLOGY CO. PTE. LTD. (hereinafter referred to as the 'Company') is a company incorporated under the laws in Singapore Republic, GDEX (hereinafter referred to as 'GDEX' or 'the Gateway') is a cryptocurrency gateway to Bitshares which is operated by the company. The main access point for GDEX is https://gdex.io, GDEX is a gateway that provide cryptocurrency deposit and withdraw service (hereinafter referred to as 'the Service') to/from Bitshares. For the convenience of wording in this Agreement, the Company and the Gateway are referred to as 'We' or other applicable forms of first person pronouns in this Agreement. All natural persons or other subjects who use the Service shall be users of the Gateway. For the convenience of wording in this Agreement, the users are referred to as 'You' or any other applicable forms of the second-person pronouns. For the convenience of wording in this Agreement, you and us are collectively referred to as 'both parties', and individually as 'one party'."
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "Important reminder:"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "We hereby remind you that:"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "1. The digital assets themselves are not offered by any financial institution, corporation or the Gateway;"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "2. The digital asset market is new and unconfirmed, and will not necessarily expand;"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "3. Digital assets are primarily used by speculators, and are used relatively less on retail and commercial markets; digital asset transactions are highly risky, due to the fact that they are traded throughout 24-hour a day without limits on the rise or fall in price, and market makers and global government policies may cause major fluctuations in their prices;"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "4. Digital asset transactions may be suspended or prohibited at any time due to the enactment or modification of national laws, regulations and regulatory documents. Digital assets trading is highly risky and therefore not suitable for the vast majority of people. You acknowledge and understand that investment in digital assets may result in partial or total loss of your investment and therefore you are advised to decide the amount of your investment on the basis of your loss-bearing capacity. You acknowledge and understand that digital assets may generate derivative risks. Therefore, if you have any doubt, you are advised to seek assistance from a financial adviser first. Furthermore, aside from the above-mentioned risks, there may also be unpredictable risks. Therefore, you are advised to carefully consider and use clear judgment to assess your financial position and the abovementioned risks before making any decisions on buying and selling digital assets; any and all losses arising therefrom will be borne by you and we shall not be held liable in any manner whatsoever."
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "5. You understand that Bitshares is a decentralized exchange based on blockchain, the basic account service and the trade processing service are provided by Bitshares, there are also other institutions or single persons that issue assets and/or provide service on Bitshares. You understand that the Gateway is only used for you to deposit/withdraw cryptocurrency to/from Bitshares. The Gateway only undertake the due obligations for the availability of own issued assets (with 'GDEX.' as prefix of the name), do not undertake the due obligations for the account service and the trade processing service provided by Bitshares, do not undertake the due obligations for availability of the assets issued by other institutions or single persons.",
                            " "
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "6. There are risk in both Internet and Bitshares, include but not limit to failure for software, hardware to connect to Internet, security risk for Bitshares accounting system. As the availability and reliability of Internet and Bitshares are not under our control, we do not undertake obligations for the loss caused by the risks mentioned above."
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            null,
                            "7.it is prohibited to use the Gateway for money laundering, smuggling, bribery\uFF0Cif any user are found relevant to these actions, the Gateway will take various actions, include but not limited to terminating the Service to the user, informing relevant authority."
                        )
                    );
            }
        }
    }, {
        key: "render",
        value: function render() {
            var locale = this.props.locale;

            var msg = this._getAgreement(locale);
            return msg;
        }
    }]);

    return GdexAgreementModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GdexAgreementModal.propTypes = {
    locale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(GdexAgreementModal, {
    listenTo: function listenTo() {
        return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            settings: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().settings
        };
    }
}));

/***/ }),

/***/ 3089:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3092:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy42MDMyZjVmMjVmNGFiYWE0MDM3Yi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L0Rpc2FibGVDb3B5VGV4dC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QmFsYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEdhdGV3YXkuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2NvbW1vbi9nZGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEdhdGV3YXlJbmZvLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9jb21tb24vR2RleENhY2hlLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvZ2RleC9HZGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9nZGV4L0dkZXhIaXN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEFncmVlbWVudE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBhY2NvdW50VXRpbHMgZnJvbSBcImNvbW1vbi9hY2NvdW50X3V0aWxzXCI7XG5pbXBvcnQge3VwZGF0ZUdhdGV3YXlCYWNrZXJzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlVdGlsc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbi8vaW1wb3J0IE9wZW5sZWRnZXJHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvT3BlbmxlZGdlckdhdGV3YXlcIjtcbi8vaW1wb3J0IE9wZW5MZWRnZXJGaWF0RGVwb3NpdFdpdGhkcmF3YWwgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL09wZW5MZWRnZXJGaWF0RGVwb3NpdFdpdGhkcmF3YWxcIjtcbi8vaW1wb3J0IE9wZW5MZWRnZXJGaWF0VHJhbnNhY3Rpb25IaXN0b3J5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeVwiO1xuLy9pbXBvcnQgQmxvY2tUcmFkZXNCcmlkZ2VEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2Jsb2NrdHJhZGVzL0Jsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3RcIjtcbi8vaW1wb3J0IENpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2NpdGFkZWwvQ2l0YWRlbEJyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbi8vaW1wb3J0IHtvcGVubGVkZ2VyQVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcbmltcG9ydCBSdURleEdhdGV3YXkgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXlcIjtcbmltcG9ydCBHYXRld2F5U3RvcmUgZnJvbSBcInN0b3Jlcy9HYXRld2F5U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG4vL2ltcG9ydCBCaXRzcGFya0dhdGV3YXkgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9iaXRzcGFyay9CaXRzcGFya0dhdGV3YXlcIjtcbmltcG9ydCBHZGV4R2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEdhdGV3YXlcIjtcbi8vaW1wb3J0IFhidHN4R2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L3hidHN4L1hidHN4R2F0ZXdheVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IERlcG9zaXRNb2RhbCBmcm9tIFwiLi4vTW9kYWwvRGVwb3NpdE1vZGFsXCI7XG5pbXBvcnQgV2l0aGRyYXdNb2RhbCBmcm9tIFwiLi4vTW9kYWwvV2l0aGRyYXdNb2RhbE5ld1wiO1xuaW1wb3J0IFRyYW5zbGF0ZVdpdGhMaW5rcyBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGVXaXRoTGlua3NcIjtcblxuY2xhc3MgQWNjb3VudERlcG9zaXRXaXRoZHJhdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgY29udGFpbmVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb250YWluZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvbFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJvbFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhTZXJ2aWNlXCIsIFwiZ2F0ZXdheVwiKSxcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICBcImJpdHNwYXJrU2VydmljZVwiLFxuICAgICAgICAgICAgICAgIFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgeGJ0c3hTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwieGJ0c3hTZXJ2aWNlXCIsIFwiZ2F0ZXdheVwiKSxcbiAgICAgICAgICAgIGJ0U2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImJ0U2VydmljZVwiLCBcImJyaWRnZVwiKSxcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiY2l0YWRlbFNlcnZpY2VcIiwgXCJicmlkZ2VcIiksXG4gICAgICAgICAgICBtZXRhU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm1ldGFTZXJ2aWNlXCIsIFwiYnJpZGdlXCIpLFxuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZVNlcnZpY2VcIiwgMCksXG5cbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNlcnZpY2VzRG93biAhPT0gdGhpcy5wcm9wcy5zZXJ2aWNlc0Rvd24gfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUcmFkZXNCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNpdGFkZWxCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNpdGFkZWxCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLm9sU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5vbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5ydWRleFNlcnZpY2UgIT09IHRoaXMuc3RhdGUucnVkZXhTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYml0c3BhcmtTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmJpdHNwYXJrU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnhidHN4U2VydmljZSAhPT0gdGhpcy5zdGF0ZS54YnRzeFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5idFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYnRTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY2l0YWRlbFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuY2l0YWRlbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5tZXRhU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5tZXRhU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYWN0aXZlU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkICE9PVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFjY291bnRVdGlscy5nZXRGaW5hbEZlZUFzc2V0KHRoaXMucHJvcHMuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPTFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVJ1REVYU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlWGJ0c3hTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIHhidHN4U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVCaXRTcGFya1NlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUJUU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBidFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2l0YWRlbFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWV0YVNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBtZXRhU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNldFNlcnZpY2UoZSkge1xuICAgICAgICAvL2xldCBpbmRleCA9IHRoaXMuc3RhdGUuc2VydmljZXMuaW5kZXhPZihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2VydmljZXMoXG4gICAgICAgIG9wZW5MZWRnZXJHYXRld2F5Q29pbnMsXG4gICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zLFxuICAgICAgICBiaXRzcGFya0dhdGV3YXlDb2lucyxcbiAgICAgICAgeGJ0c3hHYXRld2F5Q29pbnNcbiAgICApIHtcbiAgICAgICAgLy9sZXQgc2VydmljZXMgPSBbXCJPcGVubGVkZ2VyIChPUEVOLlgpXCIsIFwiQmxvY2tUcmFkZXMgKFRSQURFLlgpXCIsIFwiVHJhbnN3aXNlclwiLCBcIkJpdEthcGl0YWxcIl07XG4gICAgICAgIGxldCBzZXJMaXN0ID0gW107XG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgb2xTZXJ2aWNlLFxuICAgICAgICAgICAgYnRTZXJ2aWNlLFxuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlLFxuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlLFxuICAgICAgICAgICAgeGJ0c3hTZXJ2aWNlLFxuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2UsXG4gICAgICAgICAgICBSdWRleE5vdGljZTFJbmZvcm1lZFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgYWdyZWVtZW50X3J1ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ3LWPQvtCz0LvQsNGI0LXQvdC40LUt0L7QsS3QvtC60LDQt9Cw0L3QuNC4LdGD0YHQu9GD0LMt0YjQu9GO0LfQsFwiO1xuICAgICAgICBsZXQgYWdyZWVtZW50X2VuID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ1LWdhdGV3YXktc2VydmljZS1hZ3JlZW1lbnRcIjtcblxuICAgICAgICBzZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJSdURFWCAoUlVERVguWClcIixcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiUlVERVhcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBzZWdtZW50ZWQgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVSdURFWFNlcnZpY2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVkZXhTZXJ2aWNlID09PSBcImZpYXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZpYXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtydWRleFNlcnZpY2UgPT09IFwiZ2F0ZXdheVwiICYmIHJ1ZGV4R2F0ZXdheUNvaW5zLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlID09IFwicnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFncmVlbWVudF9ydVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFncmVlbWVudF9lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25SdWRleE5vdGljZTFJbmZvcm1lZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMV9pbmZvcm1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVkZXhOb3RpY2UxSW5mb3JtZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2lucz17cnVkZXhHYXRld2F5Q29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguY29taW5nX3Nvb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJHREVYXCIsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBcIkdERVhcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEdkZXhHYXRld2F5IGFjY291bnQ9e2FjY291bnR9IHByb3ZpZGVyPXtcImdkZXhcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogICAgICAgIHNlckxpc3QucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcIkJpdFNwYXJrIChTUEFSS0RFWC5YKVwiLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogXCJTUEFSS0RFWFwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVCaXRTcGFya1NlcnZpY2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlID09PSBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2JpdHNwYXJrU2VydmljZSA9PT0gXCJnYXRld2F5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgYml0c3BhcmtHYXRld2F5Q29pbnMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaXRzcGFya0dhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM9e2JpdHNwYXJrR2F0ZXdheUNvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj1cImJpdHNwYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pOyovXG5cbiAgICAgICAgcmV0dXJuIHNlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIHNlcnZpY2VzRG93bn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZVNlcnZpY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgb3BlbkxlZGdlckdhdGV3YXlDb2lucyA9IHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2luO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcnVkZXhHYXRld2F5Q29pbnMgPSB0aGlzLnByb3BzLnJ1ZGV4QmFja2VkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBiaXRzcGFya0dhdGV3YXlDb2lucyA9IHRoaXMucHJvcHMuYml0c3BhcmtCYWNrZWRDb2luc1xuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29pbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHhidHN4R2F0ZXdheUNvaW5zID0gdGhpcy5wcm9wcy54YnRzeEJhY2tlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2luO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2VydmljZXMgPSB0aGlzLnJlbmRlclNlcnZpY2VzKFxuICAgICAgICAgICAgb3BlbkxlZGdlckdhdGV3YXlDb2lucyxcbiAgICAgICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zLFxuICAgICAgICAgICAgYml0c3BhcmtHYXRld2F5Q29pbnMsXG4gICAgICAgICAgICB4YnRzeEdhdGV3YXlDb2luc1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHNlcnZpY2VOYW1lcyA9IFtdO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHNlcnZpY2VzLm1hcCgoc2VydmljZXNfb2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2VydmljZU5hbWVzLnB1c2goc2VydmljZXNfb2JqLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc19vYmoubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lc1thY3RpdmVTZXJ2aWNlXTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2VEb3duID0gc2VydmljZXNEb3duLmdldChjdXJyZW50U2VydmljZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250YWluZWQgPyBcImdyaWQtY29udGVudFwiIDogXCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbnRhaW5lZCA/IFwiXCIgOiBcImdyaWQtY29udGVudFwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJkZXBvc2l0X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cImRlcG9zaXRfbW9kYWxfbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VkQ29pbnM9e3RoaXMucHJvcHMuYmFja2VkQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ3aXRoZHJhd19tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJ3aXRoZHJhd19tb2RhbF9uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZWRDb2lucz17dGhpcy5wcm9wcy5iYWNrZWRDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZ2F0ZXdheS5waGFzZV9vdXRfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVwb3NpdF9tb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy5kZXBvc2l0X21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmRlcG9zaXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIndpdGhkcmF3X21vZGFsX2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLndpdGhkcmF3X21vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMud2l0aGRyYXdfbW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnRpdGxlXCIgY29tcG9uZW50PVwiaDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJkZXBvc2l0LXNob3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJyZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzbWFsbC1vcmRlci0yIG1lZGl1bS1vcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuc2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2V0U2VydmljZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlU2VydmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGdhdGV3YXkudW5hdmFpbGFibGVfJHtjdXJyZW50U2VydmljZU5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xIHNtYWxsLW9yZGVyLTEgbWVkaXVtLW9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA0MCwgd2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXJ2aWNlRG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aXZlU2VydmljZSAmJiBzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VydmljZXNbMF0udGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuQWNjb3VudERlcG9zaXRXaXRoZHJhdyA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudERlcG9zaXRXaXRoZHJhdyk7XG5cbmNsYXNzIERlcG9zaXRTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdXBkYXRlR2F0ZXdheUJhY2tlcnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QWNjb3VudERlcG9zaXRXaXRoZHJhdyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIERlcG9zaXRTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlLCBHYXRld2F5U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgb3BlbkxlZGdlckJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcnVkZXhCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlJVREVYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBiaXRzcGFya0JhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiU1BBUktERVhcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJsb2NrVHJhZGVzQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJUUkFERVwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2l0YWRlbEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiQ0lUQURFTFwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgeGJ0c3hCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlhCVFNYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlc0Rvd246IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmRvd24gfHwge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0IGZyb20gXCIuL1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKHByb3BzLCB7YWN0aW9uOiBcImRlcG9zaXRcIn0pLFxuICAgICAgICAgICAgYWN0aW9uOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhBY3Rpb25cIiwgXCJkZXBvc2l0XCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fcnVkZXhcIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJQUFlcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucHJvdmlkZXIgIT09IHRoaXMucHJvcHMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4obmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luX3J1ZGV4XyR7dGhpcy5zdGF0ZS5hY3Rpb259YF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH0qL1xuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX3J1ZGV4XCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVDb2luOiBhY3RpdmVDb2luXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7W1wicnVkZXhBY3Rpb25cIl06IHR5cGV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y29pbnMsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVDb2luLCBhY3Rpb259ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNvaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkQ29pbnMgPSBjb2lucy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICBpZiAoIWEgfHwgIWEuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICA/IGEuZGVwb3NpdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgOiBhLndpdGhkcmF3YWxBbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbk9wdGlvbnMgPSBmaWx0ZXJlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbDtcblxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gb3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeCA9IG5hbWUgPT09IFwiUFBZXCIgPyBcIlwiIDogXCJSVURFWC5cIjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3ByZWZpeCArIG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luID0gZmlsdGVyZWRDb2lucy5maWx0ZXIoY29pbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpID09PSBhY3RpdmVDb2luXG4gICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbCA9PT0gYWN0aXZlQ29pbjtcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgaWYgKCFjb2luKSBjb2luID0gZmlsdGVyZWRDb2luc1swXTtcblxuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gdGhpcy5zdGF0ZS5hY3Rpb24gPT09IFwiZGVwb3NpdFwiO1xuXG4gICAgICAgIGxldCBzdXBwb3J0VXJsID0gXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb21cIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW1hcmdpbiB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJnYXRld2F5LmNob29zZV9cIiArIGFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9XCJleHRlcm5hbC1jb2luLXR5cGVzIGJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvaW4uc3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXk9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyX2FjY291bnQ9e2NvaW4uaXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0PXtjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZT17Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZT17Y29pbi5iYWNraW5nQ29pbi50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2FjY291bnQ9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF93YWxsZXRfdHlwZT17Y29pbi53YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzX291dHB1dF9tZW1vcz17Y29pbi5zdXBwb3J0c01lbW9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVHlwZT17Y29pbi5tZW1vVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17Y29pbi5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e2NvaW4uZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfcHJlY2lzaW9uPXtjb2luLnByZWNpc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnN1cHBvcnRfYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4gJiYgY29pbi5zeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXQsIHRvLCBmcm9tQWNjb3VudH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e0ltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmlsdGVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNhY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUnVEZXhHYXRld2F5LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IERpc2FibGVDb3B5VGV4dCBmcm9tIFwiLi4vRGlzYWJsZUNvcHlUZXh0XCI7XG5pbXBvcnQgUnVEZXhXaXRoZHJhd01vZGFsIGZyb20gXCIuL1J1RGV4V2l0aGRyYXdNb2RhbFwiO1xuaW1wb3J0IEFjY291bnRCYWxhbmNlIGZyb20gXCIuLi8uLi9BY2NvdW50L0FjY291bnRCYWxhbmNlXCI7XG5pbXBvcnQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIGZyb20gXCJjb21tb24vUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXCI7XG5pbXBvcnQge3JlcXVlc3REZXBvc2l0QWRkcmVzc30gZnJvbSBcImxpYi9jb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmQgZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XG5pbXBvcnQge01vZGFsfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge2F2YWlsYWJsZUdhdGV3YXlzfSBmcm9tIFwibGliL2NvbW1vbi9nYXRld2F5c1wiO1xuXG5jbGFzcyBSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2F0ZXdheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWNlaXZlX2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGlzc3Vlcl9hY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgZGVwb3NpdF9hc3NldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF93YWxsZXRfdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX2luX2Zhdm9yX29mOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGRlcHJlY2F0ZWRfbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdXBwb3J0c19vdXRwdXRfbWVtb3M6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIG1lbW9UeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBtaW5fYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBnYXRlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjb25maXJtYXRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBhc3NldF9wcmVjaXNpb246IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZSA9IG5ldyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGREZXBvc2l0QWRkcmVzcyA9IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd01vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAvLyAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyh0aGlzLnByb3BzLmdhdGV3YXksIGFjY291bnRfbmFtZSwgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSwgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSk7XG4gICAgLy8gfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9uYW1lfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzc30pO1xuICAgIH1cblxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwidGhpcy5wcm9wcy5pc3N1ZXI6IFwiLCB0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LnRvSlMoKSApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInRoaXMucmVjZWl2ZV9hc3NldC5pc3N1ZXI6IFwiLCB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQudG9KUygpIClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFwid2l0aGRyYXdfYXNzZXRfXCIgK1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcbiAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3KCkge1xuICAgICAgICB0aGlzLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVtcHR5Um93ID0gPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwiLCBtaW5IZWlnaHQ6IDE1MH19IC8+O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMucmVjZWl2ZV9hc3NldFxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0ID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xuXG4gICAgICAgIC8vIGxldCBiYWxhbmNlID0gXCIwIFwiICsgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZikge1xuICAgICAgICAgICAgbGV0IGhhc19ub256ZXJvX2JhbGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdF9pZCA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3RfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX29iamVjdF9pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlID0gYmFsYW5jZV9vYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgIT0gMCkgaGFzX25vbnplcm9fYmFsYW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNfbm9uemVyb19iYWxhbmNlKSByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LnRvSlMoKTtcbiAgICAgICAgLy8gbGV0IGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcyk7XG4gICAgICAgIC8vIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgLy8gICAgIGlmKCBjdXJyZW50X2Fzc2V0X2lkIClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBiYWxhbmNlID0gKDxzcGFuPjxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIi8+OiA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfS8+PC9zcGFuPik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG4gICAgICAgIGlmICghcmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdENvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMgJiYgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJpcnJldmVyc2libGVcIikge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubGFzdF9pcnJldmVyc2libGVcIiAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImJsb2Nrc1wiICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0Q29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5uX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3RoaXMucHJvcHMuY29uZmlybWF0aW9ucy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3X21vZGFsX2lkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBkZXBvc2l0X21lbW8gPSBudWxsO1xuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSA8c3Bhbj5wbGVhc2UgdXNlIHt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YuZ2V0KFwic3ltYm9sXCIpfSBpbnN0ZWFkLiA8c3BhbiBkYXRhLXRpcD17dGhpcy5wcm9wcy5kZXByZWNhdGVkX21lc3NhZ2V9IGRhdGEtcGxhY2U9XCJyaWdodFwiIGRhdGEtaHRtbD17dHJ1ZX0+PEljb24gbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCIgLz48L3NwYW4+PFJlYWN0VG9vbHRpcCAvPjwvc3Bhbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyB7XG4gICAgICAgIGxldCBjbGlwYm9hcmRUZXh0ID0gXCJcIjtcbiAgICAgICAgbGV0IG1lbW9UZXh0O1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtb19wcmVmaXg7XG4gICAgICAgIGxldCBjdXJyZW50R2F0ZXdheSA9IFwiUlVERVhcIjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uc2ltcGxlQXNzZXRHYXRld2F5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudDtcbiAgICAgICAgICAgIGlmICghIXRoaXMucHJvcHMubWVtb1R5cGUgJiYgdGhpcy5wcm9wcy5tZW1vVHlwZSA9PT0gXCJidHNpZFwiKSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2J0c2lkXCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKS5yZXBsYWNlKFwiMS4yLlwiLCBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXCJhcHBlbmRcIl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZF9kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPnttZW1vVGV4dH08L3NwYW4+O1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlICsgXCI6XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXJlY2VpdmVfYWRkcmVzcyAmJiAhdGhpcy5wcm9wcy5zdXBwb3J0c01lbW9zKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcy5tZW1vKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgYSBkZXBvc2l0IG1lbW8gKGxpa2UgZXRoZXJldW0pLCB3ZSBuZWVkIHRvIGRpc3BsYXkgYm90aCB0aGUgYWRkcmVzcyBhbmQgdGhlIG1lbW8gdGhleSBuZWVkIHRvIHNlbmRcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcztcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkZXBvc2l0X21lbW8gPSA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLm1lbW99PC9zcGFuPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgdW5pcXVlIGRlcG9zaXQgYWRkcmVzc2VzIHRvIHNlbGVjdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnlvdXJfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdENvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpPntkZXBvc2l0Q29uZmlybWF0aW9ufTwvaT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIiwgZm9udFNpemU6IFwiMS4xcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREUkVTUzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb3B5VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkudXNlX2NvcHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2FibGVDb3B5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfbWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNhYmxlQ29weVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29weVRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnVzZV9jb3B5X2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNRU1POiA8Yj57ZGVwb3NpdF9tZW1vfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtjbGlwYm9hcmRUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbW9UZXh0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXttZW1vVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5Db3B5IG1lbW88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fd2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5XaGVuIHlvdSB3aXRoZHJhdyB7dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKX0sIHlvdSB3aWxsIHJlY2VpdmUge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH0gYXQgYSAxOjEgcmF0aW8gKG1pbnVzIGZlZXMpLjwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIxLjNyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25XaXRoZHJhdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19ub3dcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS53aXRoZHJhd19jb2luXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luOiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhXaXRoZHJhd01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc2hvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3Vlcj17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX25hbWU9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX3N5bWJvbD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGU9e3RoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X3dhbGxldF90eXBlPXt0aGlzLnByb3BzLmRlcG9zaXRfd2FsbGV0X3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X3N1cHBvcnRzX21lbW9zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdXBwb3J0c19vdXRwdXRfbWVtb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19wcmVmaXg9e3dpdGhkcmF3X21lbW9fcHJlZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsX2lkPXt3aXRoZHJhd19tb2RhbF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXt0aGlzLnByb3BzLm1pbl9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17dGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKClbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgRGlzYWJsZUNvcHlUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgZGlzYWJsZUNvcHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHJlcGxhY2VDb3B5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ29weSA9IHRoaXMuX2hhbmRsZUNvcHkuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZFJlZikgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5jaGlsZFJlZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2hhbmRsZUNvcHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5faGFuZGxlQ29weSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUNvcHkoZXZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUNvcHkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZXZ0LmNsaXBib2FyZERhdGEuc2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQvcGxhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiByZWY9e3JlZiA9PiAodGhpcy5jaGlsZFJlZiA9IHJlZil9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNhYmxlQ29weVRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XG5pbXBvcnQge3ZhbGlkYXRlQWRkcmVzcywgV2l0aGRyYXdBZGRyZXNzZXN9IGZyb20gXCJjb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luYywgY2hlY2tCYWxhbmNlfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtCdXR0b24sIE1vZGFsfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIFJ1RGV4V2l0aGRyYXdNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNzdWVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvdXRwdXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgYW1vdW50X3RvX3dpdGhkcmF3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LFxuICAgICAgICBtaW5fYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBnYXRlRmVlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudF90b193aXRoZHJhdyxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbl9pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxuICAgICAgICAgICAgICAgIHByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBwcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOlxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuYXNzZXRzX2J5X3N5bWJvbC5nZXQocHJvcHMuZmVlX2Fzc2V0X3N5bWJvbCkgfHxcbiAgICAgICAgICAgICAgICBcIjEuMy4wXCIsXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jaGVja01pbkFtb3VudCA9IHRoaXMuX2NoZWNrTWluQW1vdW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSA9IGRlYm91bmNlKHRoaXMuX3VwZGF0ZUZlZS5iaW5kKHRoaXMpLCAyNTApO1xuXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsID0gdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwgPSB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5Nb3VudGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50ICYmXG4gICAgICAgICAgICBucC5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBucC5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IG5ldyBBc3NldCh7YW1vdW50OiAwfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dDb25maXJtYXRpb25Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlQ29uZmlybWF0aW9uTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF91cGRhdGVGZWUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X2lkLCBmcm9tX2FjY291bnR9ID0gc3RhdGU7XG4gICAgICAgIGNvbnN0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzWzBdICE9PSBmZWVfYXNzZXRfaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQgPSBmZWVfYXNzZXRfdHlwZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgYWNjb3VudElEOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmZWVJRDogZmVlX2Fzc2V0X2lkLFxuICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoe2ZlZSwgaGFzQmFsYW5jZSwgaGFzUG9vbEJhbGFuY2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51bk1vdW50ZWQpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBhY2NvdW50ID0gc3RhdGUuZnJvbV9hY2NvdW50O1xuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzOiBhc3NldHN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgLy8gY29uc3QgYXNzZXRzID0gW1wiMS4zLjBcIiwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV07XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYV0gPSBzdGF0dXNbaWR4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHN0YXRlLmZlZVN0YXR1cywgZmVlU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QW1vdW50Q2hhbmdlKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCAhPT0gdW5kZWZpbmVkICYmICFwYXJzZUZsb2F0KGFtb3VudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tNaW5BbW91bnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdENoYW5nZWQoaW5kZXgpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKVtpbmRleF07XG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xuICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgb3B0aW9uc19pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkKGUpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcywgcHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHZhbGlkYXRlQWRkcmVzcyh7XG4gICAgICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgICAgICAgIHdhbGxldFR5cGU6IHByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIG5ld0FkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pLnRoZW4oaXNWYWxpZCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzID09PSBuZXdfd2l0aGRyYXdfYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogaXNWYWxpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCB3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBiYWxhbmNlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghYmFsYW5jZSB8fCAhZmVlQW1vdW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGhhc0JhbGFuY2UgPSBjaGVja0JhbGFuY2UoXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGJhbGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGhhc0JhbGFuY2UgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xuICAgICAgICByZXR1cm4gaGFzQmFsYW5jZTtcbiAgICB9XG5cbiAgICBfY2hlY2tNaW5BbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHt3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAod2l0aGRyYXdfYW1vdW50ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxlc3NUaGFuTWluaW11bSA9XG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQgPFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbih0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluQW1vdW50RXJyb3I6IGxlc3NUaGFuTWluaW11bX0pO1xuICAgICAgICByZXR1cm4gbGVzc1RoYW5NaW5pbXVtO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLmxlbmd0aCkgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50KSA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIVdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLmluZGV4T2YodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKSA9PSAtMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGZlZV9hc3NldF9pZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLC9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZEFtb3VudCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXIuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgbmV3IEJ1ZmZlcih0aGlzLnN0YXRlLm1lbW8sIFwidXRmLThcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCgpO1xuXG4gICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG4gICAgICAgIGxldCBwcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgIGxldCBhbW91bnQgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoYW1vdW50ICogcHJlY2lzaW9uLCAxMCksXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUubWVtb1xuICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgbmV3IEJ1ZmZlcih0aGlzLnN0YXRlLm1lbW8sIFwidXRmLThcIilcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkRyb3BEb3duTGlzdCgpIHtcbiAgICAgICAgaWYgKFdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpdGhkcmF3X2FkZHJlc3NfZmlyc3Q6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0V2l0aGRyYXdNb2RhbElkKCkge1xuICAgICAgICByZXR1cm4gXCJjb25maXJtYXRpb25cIjtcbiAgICB9XG5cbiAgICBvbkFjY291bnRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCkpLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5iYWxhbmNlLmdldChcImJhbGFuY2VcIiksXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IHRoZSBmZWUgaWYgaXQgaXMgdXNpbmcgdGhlIHNhbWUgYXNzZXRcbiAgICAgICAgICAgIGlmICh0b3RhbC5hc3NldF9pZCA9PT0gZmVlQW1vdW50LmFzc2V0X2lkKSB7XG4gICAgICAgICAgICAgICAgdG90YWwubWludXMoZmVlQW1vdW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogdG90YWwuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TmVzdGVkUmVmKHJlZikge1xuICAgICAgICB0aGlzLm5lc3RlZFJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWQoe2Fzc2V0fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50LCBmZWVTdGF0dXN9ID0gc3RhdGU7XG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZlZVBvb2xCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzUG9vbEJhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcbiAgICAgICAgaWYgKCEoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFjY291bnRfYmFsYW5jZXMpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGtleSk7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgYXNzZXRzIHRoYXQgZG8gbm90IGhhdmUgdmFsaWQgY29yZSBleGNoYW5nZSByYXRlc1xuICAgICAgICAgICAgICAgIGxldCBwcmljZUlzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG5ldyBBc3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBwLmlzVmFsaWQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0LmdldChcImlkXCIpICE9PSBcIjEuMy4wXCIgJiYgIXByaWNlSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IGZlZV9hc3NldF90eXBlcy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGFzRmVlUG9vbEJhbGFuY2UoYSkgJiYgaGFzQmFsYW5jZShhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkLCBtZW1vfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBzdG9yZWRBZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgbGV0IGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcyk7XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3TW9kYWxJZCA9IHRoaXMuZ2V0V2l0aGRyYXdNb2RhbElkKCk7XG4gICAgICAgIGxldCBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IG51bGw7XG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbmZpcm1hdGlvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhc3RvcmVkQWRkcmVzcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicnVkZXgtZGlzYWJsZWQtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJ1ZGV4LW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVkQWRkcmVzcy5tYXAoZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENvbmZpcm1hdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuY29uZmlybWF0aW9uLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpXG4gICAgICAgICAgICAvLyAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gPEljb24gbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIiB0aXRsZT1cImljb25zLmNoZWNrbWFya19jaXJjbGUub3BlcmF0aW9uX3N1Y2NlZWRcIiBjbGFzc05hbWU9XCJzdWNjZXNzXCIgLz47XG4gICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gPEljb24gbmFtZT1cImNyb3NzLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMuY3Jvc3NfY2lyY2xlLm9wZXJhdGlvbl9mYWlsZWRcIiBjbGFzc05hbWU9XCJhbGVydFwiIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcbiAgICAgICAgbGV0IHdpdGhkcmF3X21lbW8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c19tZW1vcykge1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtbyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLm1lbW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXN0aW1hdGUgZmVlIFZBUklBQkxFU1xuICAgICAgICBsZXQge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcblxuICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF07XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldC1jdXJzb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NvdW50QmFsYW5jZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGZ1bGwtd2lkdGgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjBweFwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaXRoZHJhdyBhbW91bnQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJtb2RhbC53aXRoZHJhdy5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdBbW91bnRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1wdHlfd2l0aGRyYXdfdmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLnZhbGlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1pbkFtb3VudEVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudF9lcnJvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1tYXJnaW5cIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGZWUgc2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWVBbW91bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgZ2F0ZV9mZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e3RoaXMuc2V0TmVzdGVkUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmdldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2ZlZV9hc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0ZlZUJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc1Bvb2xCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vUG9vbEJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEdhdGUgZmVlICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5nYXRlRmVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvciByaWdodC1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5mZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtc2VsZWN0LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5vbkRyb3BEb3duTGlzdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjOTY2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXBvc2l0aW9uLW9wdGlvbnNcIj57b3B0aW9uc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1lbW8gaW5wdXQgKi99XG4gICAgICAgICAgICAgICAgICAgIHt3aXRoZHJhd19tZW1vfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaXRoZHJhdy9DYW5jZWwgYnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5BbW91bnRFcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQucGVybS5jYW5jZWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtYXRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SdURleFdpdGhkcmF3TW9kYWwgPSBCaW5kVG9DaGFpblN0YXRlKFJ1RGV4V2l0aGRyYXdNb2RhbCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUnVEZXhXaXRoZHJhd01vZGFsLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfc3ltYm9sOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImZlZV9hc3NldFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgbHMgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7cnVkZXhBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xyXG5jb25zdCBydWRleFN0b3JhZ2UgPSBuZXcgbHMoXCJcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2luTGlzdCh1cmwgPSBydWRleEFQSXMuQkFTRSArIHJ1ZGV4QVBJcy5DT0lOU19MSVNUKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kOiBcInBvc3RcIn0pXHJcbiAgICAgICAgLnRoZW4ocmVwbHkgPT5cclxuICAgICAgICAgICAgcmVwbHkuanNvbigpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZldGNoaW5nIHJ1ZGV4IGxpc3Qgb2YgY29pbnNcIiwgZXJyLCB1cmwpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdERlcG9zaXRBZGRyZXNzKHtcclxuICAgIGlucHV0Q29pblR5cGUsXHJcbiAgICBvdXRwdXRDb2luVHlwZSxcclxuICAgIG91dHB1dEFkZHJlc3MsXHJcbiAgICB1cmwgPSBydWRleEFQSXMuQkFTRSxcclxuICAgIHN0YXRlQ2FsbGJhY2tcclxufSkge1xyXG4gICAgbGV0IGJvZHkgPSB7XHJcbiAgICAgICAgaW5wdXRDb2luVHlwZSxcclxuICAgICAgICBvdXRwdXRDb2luVHlwZSxcclxuICAgICAgICBvdXRwdXRBZGRyZXNzXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBib2R5X3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cclxuICAgIGZldGNoKHVybCArIHJ1ZGV4QVBJcy5ORVdfREVQT1NJVF9BRERSRVNTLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9keTogYm9keV9zdHJpbmdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIHJlcGx5ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJyZXBseTogXCIsIGpzb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGpzb24uaW5wdXRBZGRyZXNzIHx8IFwidW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtbzoganNvbi5pbnB1dE1lbW8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoganNvbi5lcnJvciB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKSBzdGF0ZUNhbGxiYWNrKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDYWxsYmFjayh7YWRkcmVzczogXCJ1bmtub3duXCIsIG1lbW86IG51bGx9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZUNhbGxiYWNrKHthZGRyZXNzOiBcInVua25vd25cIiwgbWVtbzogbnVsbH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBZGRyZXNzKHtcclxuICAgIHVybCA9IHJ1ZGV4QVBJcy5CQVNFLFxyXG4gICAgd2FsbGV0VHlwZSxcclxuICAgIG5ld0FkZHJlc3NcclxufSkge1xyXG4gICAgaWYgKCFuZXdBZGRyZXNzKSByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcygpKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwgKyBcIi93YWxsZXRzL1wiICsgd2FsbGV0VHlwZSArIFwiL2NoZWNrLWFkZHJlc3NcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHthZGRyZXNzOiBuZXdBZGRyZXNzfSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVwbHkgPT4gcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiBqc29uLmlzVmFsaWQpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGVycm9yOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNXaXRoZHJhd2FsQWRkcmVzcyh3YWxsZXQpIHtcclxuICAgIHJldHVybiBydWRleFN0b3JhZ2UuaGFzKGBoaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpdGhkcmF3YWxBZGRyZXNzZXMoe3dhbGxldCwgYWRkcmVzc2VzfSkge1xyXG4gICAgcnVkZXhTdG9yYWdlLnNldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIGFkZHJlc3Nlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpdGhkcmF3YWxBZGRyZXNzZXMod2FsbGV0KSB7XHJcbiAgICByZXR1cm4gcnVkZXhTdG9yYWdlLmdldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIFtdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzKHt3YWxsZXQsIGFkZHJlc3N9KSB7XHJcbiAgICBydWRleFN0b3JhZ2Uuc2V0KGBoaXN0b3J5X2FkZHJlc3NfbGFzdF8ke3dhbGxldH1gLCBhZGRyZXNzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzKHdhbGxldCkge1xyXG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2l0aGRyYXdBZGRyZXNzZXMgPSB7XHJcbiAgICBoYXM6IGhhc1dpdGhkcmF3YWxBZGRyZXNzLFxyXG4gICAgc2V0OiBzZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxyXG4gICAgZ2V0OiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxyXG4gICAgc2V0TGFzdDogc2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzLFxyXG4gICAgZ2V0TGFzdDogZ2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAgR2l2ZW4gYSBiYWxhbmNlX29iamVjdCwgZGlzcGxheXMgaXQgaW4gYSBwcmV0dHkgd2F5XHJcbiAqXHJcbiAqICBFeHBlY3RzIG9uZSBwcm9wZXJ0eSwgJ2JhbGFuY2UnIHdoaWNoIHNob3VsZCBiZSBhIGJhbGFuY2Vfb2JqZWN0IGlkXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudEJhbGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGxldCBiYWxhbmNlX2lkID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0X2lkXSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxhbmNlX2lkKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgMCZuYnNwOzxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRCYWxhbmNlKTtcclxuIiwiaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuXHJcbmNsYXNzIFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBpbmNyZW1lbnQgdGhpcyB0byBmb3JjZSBnZW5lcmF0aW5nIG5ldyBhZGRyZXNzZXMgZm9yIGFsbCBtYXBwaW5nc1xyXG4gICAgICAgIHRoaXMuY3VycmVudF9ydWRleF9hZGRyZXNzX2NhY2hlX3ZlcnNpb25fc3RyaW5nID0gXCIxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5kZXhGb3JEZXBvc2l0S2V5SW5FeGNoYW5nZShcclxuICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICkge1xyXG4gICAgICAgIGxldCBhcmdzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfcnVkZXhfYWRkcmVzc19jYWNoZV92ZXJzaW9uX3N0cmluZyxcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwcmV2aW91cywgY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KFwiW1wiLCBjdXJyZW50LCBcIl1cIik7XHJcbiAgICAgICAgfSwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB7XCJhZGRyZXNzXCI6IGFkZHJlc3MsIFwibWVtb1wiOiBtZW1vfSwgd2l0aCBhIG51bGwgbWVtbyBpZiBub3QgYXBwbGljYWJsZVxyXG4gICAgZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKFxyXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXHJcbiAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICBvdXRwdXRfY29pbl90eXBlXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgd2FsbGV0ID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCk7XHJcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXMgPSB3YWxsZXQuZGVwb3NpdF9rZXlzIHx8IHt9O1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV0gPVxyXG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SW5kZXhGb3JEZXBvc2l0S2V5SW5FeGNoYW5nZShcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cclxuICAgICAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXVtpbmRleF0gfHwgW107XHJcblxyXG4gICAgICAgIGxldCBudW1iZXJfb2Zfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdLmxlbmd0aDtcclxuICAgICAgICBpZiAobnVtYmVyX29mX2tleXMpXHJcbiAgICAgICAgICAgIHJldHVybiB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XVtcclxuICAgICAgICAgICAgICAgIG51bWJlcl9vZl9rZXlzIC0gMVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNhY2hlSW5wdXRBZGRyZXNzKFxyXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXHJcbiAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxyXG4gICAgICAgIGFkZHJlc3MsXHJcbiAgICAgICAgbWVtb1xyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHdhbGxldCA9IFdhbGxldERiLmdldFdhbGxldCgpO1xyXG4gICAgICAgIGlmICghd2FsbGV0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcclxuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdID1cclxuICAgICAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSB8fCB7fTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXHJcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XSA9XHJcbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdLnB1c2goe1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICBtZW1vOiBtZW1vXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgV2FsbGV0RGIuX3VwZGF0ZVdhbGxldCgpO1xyXG4gICAgfVxyXG59IC8vIFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmV0Y2hBc3NldHMsIGZldGNoVXNlckluZm99IGZyb20gXCJjb21tb24vZ2RleE1ldGhvZHNcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgR2RleEdhdGV3YXlJbmZvIGZyb20gXCIuL0dkZXhHYXRld2F5SW5mb1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBHZGV4Q2FjaGUgZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vR2RleENhY2hlXCI7XHJcbmltcG9ydCBHZGV4SGlzdG9yeSBmcm9tIFwiLi9HZGV4SGlzdG9yeVwiO1xyXG5pbXBvcnQgR2RleEFncmVlbWVudE1vZGFsIGZyb20gXCIuL0dkZXhBZ3JlZW1lbnRNb2RhbFwiO1xyXG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1xyXG4gICAgZmV0Y2hXaXRoZHJhd1J1bGUsXHJcbiAgICB1c2VyQWdyZWVtZW50XHJcbn0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vZ2RleE1ldGhvZHNcIjtcclxudmFyIE5vZGVSU0EgPSByZXF1aXJlKFwibm9kZS1yc2FcIik7XHJcbmxldCBnZGV4UHVibGljS2V5ID0gbmV3IE5vZGVSU0EoXHJcbiAgICBcIi0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXFxuXCIgK1xyXG4gICAgICAgIFwiTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDSCtRdEhQS2NXeGRMMjV4TDRwQ3V1MTZ0S2g2eVB4L1RGbmQvOFxcblwiICtcclxuICAgICAgICBcImNTdDJUQytzUHVZc0QwaC9zeTRWS054aEJiN0Y3VS9UTFhqTXhOY1NmUFZQalBNM1gyTHZPbG1VOUxPRWNKR3JtbG1PT2l5Ty9rd3NcXG5cIiArXHJcbiAgICAgICAgXCJ5S0tPaFI0VXlaMU5naGhmSGp1eURCajZWOGZDTCt4QlpUSldzaC9YNjFaMHdMQ3dPelhjUUNzTkp3SURBUUFCXFxuXCIgK1xyXG4gICAgICAgIFwiLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tXCJcclxuKTtcclxuXHJcbmNsYXNzIEdkZXhHYXRld2F5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICBgJHtwcm9wcy5wcm92aWRlcn1BY3Rpb25gLFxyXG4gICAgICAgICAgICBcImRlcG9zaXRcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWdyZWVtZW50VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvaW5zOiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmVDb2luSW5mbzogdGhpcy5fZ2V0QWN0aXZlQ29pbkluZm8ocHJvcHMsIHthY3Rpb259KSxcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXJfaW5mbzogbnVsbCxcclxuICAgICAgICAgICAgaXNBZ3JlZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFncmVlQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgYWdyZWVOb3RpY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2NhbGU6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJsb2NhbGVcIiksXHJcbiAgICAgICAgICAgIGludGVybWVkaWF0ZTogbnVsbCxcclxuICAgICAgICAgICAgbWVtb19ydWxlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVzZXJfaW5mb19jYWNoZSA9IG5ldyBHZGV4Q2FjaGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93QWdyZWVtZW50ID0gdGhpcy5zaG93QWdyZWVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oaWRlQWdyZWVtZW50ID0gdGhpcy5oaWRlQWdyZWVtZW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FncmVlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBZ3JlZW1lbnRWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUFncmVlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBZ3JlZW1lbnRWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBY3RpdmVDb2luSW5mbyhwcm9wcywgc3RhdGUpIHtcclxuICAgICAgICBsZXQgY2FjaGVkQ29pbk5hbWUgPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICBgYWN0aXZlQ29pbl8ke3Byb3BzLnByb3ZpZGVyfV8ke3N0YXRlLmFjdGlvbn1gLFxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgY2FjaGVkQ29pbklkID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgYGFjdGl2ZUNvaW5JZF8ke3Byb3BzLnByb3ZpZGVyfWAsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luTmFtZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PSBcImRlcG9zaXRcIikge1xyXG4gICAgICAgICAgICBmaXJzdFRpbWVDb2luTmFtZSA9IFwiQlRDXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyc3RUaW1lQ29pbk5hbWUgPSBcIkdERVguQlRDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luSWQgPSAxMDAyO1xyXG4gICAgICAgIGxldCBhY3RpdmVDb2luTmFtZSA9IGNhY2hlZENvaW5OYW1lXHJcbiAgICAgICAgICAgID8gY2FjaGVkQ29pbk5hbWVcclxuICAgICAgICAgICAgOiBmaXJzdFRpbWVDb2luTmFtZTtcclxuICAgICAgICBsZXQgYWN0aXZlQ29pbklkID0gY2FjaGVkQ29pbklkID8gY2FjaGVkQ29pbklkIDogZmlyc3RUaW1lQ29pbklkO1xyXG4gICAgICAgIHRoaXMuX2dldFdpdGhkcmF3UnVsZShhY3RpdmVDb2luSWQpO1xyXG4gICAgICAgIHJldHVybiB7bmFtZTogYWN0aXZlQ29pbk5hbWUsIGlkOiBhY3RpdmVDb2luSWR9O1xyXG4gICAgfVxyXG5cclxuICAgIF90cmFuc2Zvcm1Db2luKGRhdGEpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGF0YS5maWx0ZXIoYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnN0YXR1cyAhPSAwO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGFzc2V0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2luID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQudHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5uZXIgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmlubmVyQXNzZXRJZCA9IGFzc2V0LmFzc2V0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5pbm5lckFzc2V0TmFtZSA9IGFzc2V0LmFzc2V0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmlubmVyU3ltYm9sID0gYXNzZXQuYXNzZXRTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5vdXRlckFzc2V0SWQgPSBhc3NldC5yZWxhdGlvbklkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ub3V0ZXJBc3NldE5hbWUgPSBhc3NldC5yZWxhdGlvblN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm91dGVyU3ltYm9sID0gYXNzZXQucmVsYXRpb25TeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBhc3NldC53aXRoZHJhd1N0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmdhdGVGZWUgPSBhc3NldC53aXRoZHJhd0ZlZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5uZWVkTWVtbyA9IGFzc2V0Lm5lZWRNZW1vO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ubWluVHJhbnNhY3Rpb25BbW91bnQgPSBhc3NldC5taW5XaXRoZHJhd0Ftb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLnR5cGUgPSBhc3NldC50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ucmVsYXRpb25QcmVjaXNpb24gPSBhc3NldC5yZWxhdGlvblByZWNpc2lvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0ZXIgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmlubmVyQXNzZXRJZCA9IGFzc2V0LnJlbGF0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5pbm5lckFzc2V0TmFtZSA9IGFzc2V0LnJlbGF0aW9uU3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uaW5uZXJTeW1ib2wgPSBhc3NldC5yZWxhdGlvblN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm91dGVyQXNzZXRJZCA9IGFzc2V0LmFzc2V0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5vdXRlckFzc2V0TmFtZSA9IGFzc2V0LmFzc2V0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm91dGVyU3ltYm9sID0gYXNzZXQuYXNzZXRTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBhc3NldC5kZXBvc2l0U3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZ2F0ZUZlZSA9IGFzc2V0LmRlcG9zaXRGZWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ubmVlZE1lbW8gPSBhc3NldC5uZWVkTWVtbztcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm1pblRyYW5zYWN0aW9uQW1vdW50ID0gYXNzZXQubWluRGVwb3NpdEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLnR5cGUgPSBhc3NldC50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ucmVsYXRpb25QcmVjaXNpb24gPSBhc3NldC5yZWxhdGlvblByZWNpc2lvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29pbikgcmVzdWx0LnB1c2goY29pbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zZm9ybSBjb2luIGZhaWxlZDogXCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFVzZXJJbmZvKHVzZXJOYW1lID0gbnVsbCwgaXNBZ3JlZSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIXVzZXJOYW1lKSB1c2VyTmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgIGlmICghaXNBZ3JlZSkgaXNBZ3JlZSA9IHRoaXMuc3RhdGUuaXNBZ3JlZTtcclxuICAgICAgICAvL1VzZXIgbXVzdCBhZ3JlZSB0byB0aGUgYWdyZWVtZW50XHJcbiAgICAgICAgaWYgKCFpc0FncmVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSBmZXRjaFVzZXJJbmZvKHt1c2VyQWNjb3VudDogdXNlck5hbWUsIGlzQWdyZWU6IGlzQWdyZWV9KTtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB2YXIgdXNlciA9IHJlcy51c2VyO1xyXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0FncmVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pbmZvOiB7dXNlcl9pZDogdXNlci51aWQsIHN0YXR1czogdXNlci5zdGF0dXN9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodXNlci5zdGF0dXMgPT0gMCAmJiB1c2VyLmFncmVlQWdyZWVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51c2VyX2luZm9fY2FjaGUuY2FjaGVVc2VySW5mbyhcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVzZXJfaW5mb19jYWNoZS5kZWxVc2VySW5mbyh1c2VyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGNlcHRpb24gaW4gZmV0Y2hpbmcgdXNlciBpbmZvOiBcIiArIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldENvaW5zKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBmZXRjaEFzc2V0cyh7dXNlckFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfSk7XHJcblxyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVzdWx0LnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFuc19kYXRhID0gX3RoaXMuX3RyYW5zZm9ybUNvaW4oZGF0YS5hc3NldHMpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe2lzQXZhaWxhYmxlOiB0cnVlLCBjb2luczogdHJhbnNfZGF0YX0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJNc2cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiICsgZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtpc0F2YWlsYWJsZTogZmFsc2V9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tJc0FncmVlKHVzZXJOYW1lID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdXNlck5hbWUpIHVzZXJOYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgdmFyIHVzZXJfaW5mbyA9IHRoaXMudXNlcl9pbmZvX2NhY2hlLmdldFVzZXJJbmZvKHVzZXJOYW1lKTtcclxuICAgICAgICBpZiAodXNlcl9pbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJfaW5mbzogdXNlcl9pbmZvLCBpc0FncmVlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHVzZXJBZ3JlZW1lbnQoe3VzZXJBY2NvdW50OiB1c2VyTmFtZX0pO1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVzdWx0LnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFncmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe2lzQWdyZWU6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZ2V0VXNlckluZm8odXNlck5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7aXNBZ3JlZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIiArIGVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7aXNBdmFpbGFibGU6IGZhbHNlfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSXNBZ3JlZSgpO1xyXG4gICAgICAgIHRoaXMuX2dldENvaW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFdpdGhkcmF3QXNzZXRJZChhc3NldE5hbWUpIHtcclxuICAgICAgICBsZXQgYXNzZXRUeXBlID0gMTtcclxuICAgICAgICBsZXQgYXNzZXRTeW1ib2wgPSBcImlubmVyU3ltYm9sXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uID09IFwiZGVwb3NpdFwiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0VHlwZSA9IDI7XHJcbiAgICAgICAgICAgIGFzc2V0U3ltYm9sID0gXCJvdXRlclN5bWJvbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXNzZXRJZCA9IHRoaXMuc3RhdGUuY29pbnMuZmlsdGVyKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29pbi50eXBlID09IGFzc2V0VHlwZSAmJiBjb2luW2Fzc2V0U3ltYm9sXSA9PSBhc3NldE5hbWU7XHJcbiAgICAgICAgfSlbMF0uaW5uZXJBc3NldElkO1xyXG4gICAgICAgIHJldHVybiBhc3NldElkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Q29pbihlKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW5JbmZvID0gdGhpcy5zdGF0ZS5hY3RpdmVDb2luSW5mbztcclxuICAgICAgICBhY3RpdmVDb2luSW5mby5uYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGFzc2V0SWQgPSB0aGlzLl9nZXRXaXRoZHJhd0Fzc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGFjdGl2ZUNvaW5JbmZvLmlkID0gYXNzZXRJZDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlQ29pbkluZm86IGFjdGl2ZUNvaW5JbmZvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fZ2V0V2l0aGRyYXdSdWxlKGFzc2V0SWQpO1xyXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XHJcbiAgICAgICAgc2V0dGluZ1tgYWN0aXZlQ29pbl8ke3RoaXMucHJvcHMucHJvdmlkZXJ9XyR7dGhpcy5zdGF0ZS5hY3Rpb259YF0gPVxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luSWRfJHt0aGlzLnByb3BzLnByb3ZpZGVyfWBdID0gYXNzZXRJZDtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoc2V0dGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFdpdGhkcmF3UnVsZShhc3NldElkKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZldGNoV2l0aGRyYXdSdWxlKHthc3NldElkOiBhc3NldElkfSk7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICByZXN1bHQudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGludGVybWVkaWF0ZSA9IGdkZXhQdWJsaWNLZXkuZGVjcnlwdFB1YmxpYyhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRyYW5zZmVyVG9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXRmLThcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGU6IGludGVybWVkaWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZW1vX3J1bGU6IGRhdGEubWVtb1J1bGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJNc2cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiICsgZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtpbnRlcm1lZGlhdGU6IG51bGx9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtpbnRlcm1lZGlhdGU6IG51bGx9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW5JbmZvID0gdGhpcy5fZ2V0QWN0aXZlQ29pbkluZm8odGhpcy5wcm9wcywge1xyXG4gICAgICAgICAgICBhY3Rpb246IHR5cGVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aW9uOiB0eXBlLFxyXG4gICAgICAgICAgICBhY3RpdmVDb2luSW5mbzogYWN0aXZlQ29pbkluZm9cclxuICAgICAgICB9KTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xyXG4gICAgICAgICAgICBbYCR7dGhpcy5wcm9wcy5wcm92aWRlcn1BY3Rpb25gXTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWNjb3VudCAhPSBuZXh0UHJvcHMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0lzQWdyZWUobmV4dFByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVDaGVjaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthZ3JlZUNoZWNrZWQ6ICF0aGlzLnN0YXRlLmFncmVlQ2hlY2tlZH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FncmVlTm90aWNlOiBmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93VXNlckFncmVlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnNob3dBZ3JlZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVnaXN0ZXJVc2VyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFncmVlQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRVc2VySW5mbyhudWxsLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthZ3JlZU5vdGljZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2FjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBjb2lucyxcclxuICAgICAgICAgICAgYWN0aXZlQ29pbkluZm8sXHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgaXNBdmFpbGFibGUsXHJcbiAgICAgICAgICAgIHVzZXJfaW5mbyxcclxuICAgICAgICAgICAgaXNBZ3JlZSxcclxuICAgICAgICAgICAgYWdyZWVDaGVja2VkLFxyXG4gICAgICAgICAgICBhZ3JlZU5vdGljZSxcclxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlLFxyXG4gICAgICAgICAgICBtZW1vX3J1bGVcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgaXNzdWVyID0ge1xyXG4gICAgICAgICAgICB0aWNrZXQ6IFwiaHR0cHM6Ly9zdXBwb3J0LmdkZXguaW8vXCIsXHJcbiAgICAgICAgICAgIHFxOiBcIjYwMjU3MzE5N1wiLFxyXG4gICAgICAgICAgICB0ZWxncmFtOiBcImh0dHBzOi8vdC5tZS9HREVYZXJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHN1cHBvcnRDb250ZW50ID0gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnN1cHBvcnRfZ2RleFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgSGVscDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXNzdWVyLnRpY2tldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzc3Vlci50aWNrZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgUVE6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL3NoYW5nLnFxLmNvbS93cGEvcXVud3BhP2lka2V5PTVkMTkyYzMyNTE0Njc2MmNmNWE5MjU2MDM4ZmVkOWZhZWY0ZmNhY2UyMWEzNjg4Mjg1NDM1NGRkMWQ1OTlmMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc3N1ZXIucXF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVsZWdyYW06e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2lzc3Vlci50ZWxncmFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNzdWVyLnRlbGdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghaXNBZ3JlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWdyZWVDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3VwZGF0ZUNoZWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFncmVlbWVudC5oaW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fc2hvd1VzZXJBZ3JlZW1lbnQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFncmVlbWVudC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2FncmVlTm90aWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYWdyZWVtZW50Lm5vdGljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Hcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3JlZ2lzdGVyVXNlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYWdyZWVtZW50LnJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVBZ3JlZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNBZ3JlZW1lbnRWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlQWdyZWVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdkZXhBZ3JlZW1lbnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVBZ3JlZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldChcImxvY2FsZVwiLCBcImVuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICB7c3VwcG9ydENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjb2lucyAmJiBpc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXNzZXRTeW1ib2wgPSBudWxsO1xyXG4gICAgICAgIHZhciBhc3NldElkID0gbnVsbDtcclxuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PSBcImRlcG9zaXRcIikge1xyXG4gICAgICAgICAgICBhc3NldElkID0gXCJvdXRlckFzc2V0SWRcIjtcclxuICAgICAgICAgICAgYXNzZXRTeW1ib2wgPSBcIm91dGVyU3ltYm9sXCI7XHJcbiAgICAgICAgICAgIGFjdGlvblR5cGUgPSAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFzc2V0SWQgPSBcImlubmVyQXNzZXRJZFwiO1xyXG4gICAgICAgICAgICBhc3NldFN5bWJvbCA9IFwiaW5uZXJTeW1ib2xcIjtcclxuICAgICAgICAgICAgYWN0aW9uVHlwZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvaW5zID0gY29pbnMuZmlsdGVyKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29pbi50eXBlID09IGFjdGlvblR5cGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGNvaW5PcHRpb25zID0gY29pbnNcclxuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y29pblthc3NldFN5bWJvbF19IGtleT17Y29pblthc3NldFN5bWJvbF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29pblthc3NldFN5bWJvbF19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29pbiA9IGNvaW5zLmZpbHRlcihjb2luID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvaW5bYXNzZXRTeW1ib2xdID09IGFjdGl2ZUNvaW5JbmZvLm5hbWU7XHJcbiAgICAgICAgfSlbMF07XHJcblxyXG4gICAgICAgIGxldCBpbmZvcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKCFjb2luIHx8IGNvaW4uc3RhdHVzICE9IDApIHtcclxuICAgICAgICAgICAgaW5mb3MgPSAoXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdW5hdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YWN0aXZlQ29pbkluZm8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXVzZXJfaW5mbykge1xyXG4gICAgICAgICAgICBpbmZvcyA9IChcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51c2VyX3VuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcl9pbmZvLnN0YXR1cyAhPSAwKSB7XHJcbiAgICAgICAgICAgIGluZm9zID0gKFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmZyb3plblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbkhlaWdodDogXCIycmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJnYXRld2F5LmNob29zZV9cIiArIGFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWNvaW4tdHlwZXMgYnRzLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDb2luLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUNvaW5JbmZvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW5PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IG1lZGl1bS1vZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IDE1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpdGhkcmF3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7aW5mb3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3NcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHZGV4R2F0ZXdheUluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW49e2NvaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyX2FjY291bnQ9e2ludGVybWVkaWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkPXt1c2VyX2luZm8udXNlcl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXk9e1wiZ2RleFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0c0NvaW49e2NvaW4uaW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19ydWxlPXttZW1vX3J1bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdkZXhIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ9e3VzZXJfaW5mby51c2VyX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckFjY291bnQ9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ9e2NvaW5bYXNzZXRJZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldE5hbWU9e2NvaW5bYXNzZXRTeW1ib2xdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsSGVpZ2h0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkVHlwZT17YWN0aW9uID09IFwiZGVwb3NpdFwiID8gMSA6IDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9XCJ0cmFuc2ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgKyB0aGlzLnN0YXRlLmFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge3N1cHBvcnRDb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgR2RleEdhdGV3YXksXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBscyBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHtnZGV4QVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcclxuXHJcbmNvbnN0IGdkZXhTdG9yYWdlID0gbmV3IGxzKFwiXCIpO1xyXG5cclxubGV0IGFzc2V0c1JlcXVlc3QgPSB7fTtcclxubGV0IFJFUVVFU1RfVElNRU9VVCA9IDEwMDAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoV2l0aGRyYXdSdWxlKHJlcUJvZHksIHRpbWVvdXQgPSAtMSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3RTaW1wbGUoXHJcbiAgICAgICAgcmVxQm9keSxcclxuICAgICAgICBnZGV4QVBJcy5CQVNFICsgZ2RleEFQSXMuV0lUSERSQVdfUlVMRSxcclxuICAgICAgICB0aW1lb3V0XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlckFncmVlbWVudChyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKFxyXG4gICAgICAgIHJlcUJvZHksXHJcbiAgICAgICAgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLlVTRVJfQUdSRUVNRU5ULFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFzc2V0cyhyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIGlmICghcmVxQm9keS5yZXF1ZXN0VHlwZSkgcmVxQm9keS5yZXF1ZXN0VHlwZSA9IDA7XHJcbiAgICBpZiAoIXJlcUJvZHkuYXNzZXRUeXBlKSByZXFCb2R5LmFzc2V0VHlwZSA9IDA7XHJcbiAgICBpZiAoIXJlcUJvZHkudmVyc2lvbikgcmVxQm9keS52ZXJzaW9uID0gXCIxLjFcIjtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKHJlcUJvZHksIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5BU1NFVF9MSVNULCB0aW1lb3V0KTtcclxufVxyXG5cclxuLy9cInVzZXJBY2NvdW50XCJcclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlckluZm8ocmVxQm9keSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdFNpbXBsZShcclxuICAgICAgICByZXFCb2R5LFxyXG4gICAgICAgIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5HRVRfVVNFUl9JTkZPLFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFkZHJlc3MocmVxQm9keSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICBpZiAoIXJlcUJvZHkuYWRkcmVzcykgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiByZXMoKSk7XHJcbiAgICByZXR1cm4gcmVxdWVzdFNpbXBsZShcclxuICAgICAgICByZXFCb2R5LFxyXG4gICAgICAgIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5DSEVDS19XSVRIRFJBWV9BRERSRVNTLFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGVwb3NpdEFkZHJlc3MocmVxQm9keSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdFNpbXBsZShcclxuICAgICAgICByZXFCb2R5LFxyXG4gICAgICAgIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5HRVRfREVQT1NJVF9BRERSRVNTLFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2FjdGlvblJlY29yZExpc3QocmVxQm9keSwgdHlwZSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICBpZiAodHlwZSA9PSAxKSByZXR1cm4gZ2V0RGVwb3NpdFJlY29yZExpc3QocmVxQm9keSwgdGltZW91dCk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09IDIpIHJldHVybiBnZXRXaXRoZHJhd1JlY29yZExpc3QocmVxQm9keSwgdGltZW91dCk7XHJcbiAgICBlbHNlIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4gcmVzKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVwb3NpdFJlY29yZExpc3QocmVxQm9keSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdFNpbXBsZShcclxuICAgICAgICByZXFCb2R5LFxyXG4gICAgICAgIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5ERVBPU0lUX1JFQ09SRF9MSVNULFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaXRoZHJhd1JlY29yZExpc3QocmVxQm9keSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdFNpbXBsZShcclxuICAgICAgICByZXFCb2R5LFxyXG4gICAgICAgIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5XSVRIRFJBV19SRUNPUkRfTElTVCxcclxuICAgICAgICB0aW1lb3V0XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0U2ltcGxlKHJlcUJvZHksIHJlcVVybCwgdGltZW91dCA9IC0xKSB7XHJcbiAgICBpZiAodGltZW91dCA9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0V2l0aFRpbWVvdXQocmVxQm9keSwgcmVxVXJsLCBSRVFVRVNUX1RJTUVPVVQpO1xyXG4gICAgfSBlbHNlIGlmICh0aW1lb3V0ID09IDApIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdFdpdGhvdXRUaW1lb3V0KHJlcUJvZHksIHJlcVVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0V2l0aFRpbWVvdXQocmVxQm9keSwgcmVxVXJsLCB0aW1lb3V0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFdpdGhUaW1lb3V0KHJlcUJvZHksIHJlcVVybCwgdGltZW91dCkge1xyXG4gICAgaWYgKCFyZXFCb2R5LnJlcXVlc3RDaGFubmVsKSByZXFCb2R5LnJlcXVlc3RDaGFubmVsID0gMDtcclxuICAgIGlmICghcmVxQm9keS52ZXJzaW9uKSByZXFCb2R5LnZlcnNpb24gPSBcIjEuMFwiO1xyXG4gICAgaWYgKCFyZXFCb2R5LnRpbWVzdGFtcCkgcmVxQm9keS50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmICghcmVxQm9keS5vdXRlckNoYW5uZWwpIHJlcUJvZHkub3V0ZXJDaGFubmVsID0gXCJCaXRzaGFyZXNcIjtcclxuICAgIGxldCBib2R5X3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpO1xyXG4gICAgaWYgKGFzc2V0c1JlcXVlc3RbYm9keV9zdHJpbmddKSByZXR1cm47XHJcbiAgICBhc3NldHNSZXF1ZXN0W2JvZHlfc3RyaW5nXSA9IHRydWU7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcclxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKHJlcVVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGJvZHlfc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBtb2RlOiBcIm5vLWNvcnNcIlxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcGx5ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXNzZXRzUmVxdWVzdFtib2R5X3N0cmluZ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmNvZGUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtjb2RlOiBqc29uLmNvZGUsIG1lc3NhZ2U6IGpzb24ubWVzc2FnZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXNzZXRzUmVxdWVzdFtib2R5X3N0cmluZ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7Y29kZTogLTEsIG1lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7Y29kZTogLTIsIG1lc3NhZ2U6IFwiUmVxdWVzdCB0aW1lb3V0LlwifSk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgIH0pXHJcbiAgICBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFdpdGhvdXRUaW1lb3V0KHJlcUJvZHksIHJlcVVybCkge1xyXG4gICAgaWYgKCFyZXFCb2R5LnJlcXVlc3RDaGFubmVsKSByZXFCb2R5LnJlcXVlc3RDaGFubmVsID0gMDtcclxuICAgIGlmICghcmVxQm9keS52ZXJzaW9uKSByZXFCb2R5LnZlcnNpb24gPSBcIjEuMFwiO1xyXG4gICAgaWYgKCFyZXFCb2R5LnRpbWVzdGFtcCkgcmVxQm9keS50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmICghcmVxQm9keS5vdXRlckNoYW5uZWwpIHJlcUJvZHkub3V0ZXJDaGFubmVsID0gXCJCaXRzaGFyZXNcIjtcclxuICAgIGxldCBib2R5X3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpO1xyXG4gICAgaWYgKGFzc2V0c1JlcXVlc3RbYm9keV9zdHJpbmddKSByZXR1cm47XHJcbiAgICBhc3NldHNSZXF1ZXN0W2JvZHlfc3RyaW5nXSA9IHRydWU7XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2gocmVxVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYm9keTogYm9keV9zdHJpbmdcclxuICAgICAgICB9KS50aGVuKHJlcGx5ID0+IHtcclxuICAgICAgICAgICAgcmVwbHlcclxuICAgICAgICAgICAgICAgIC5qc29uKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhc3NldHNSZXF1ZXN0W2JvZHlfc3RyaW5nXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5jb2RlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe2NvZGU6IGpzb24uY29kZSwgbWVzc2FnZToganNvbi5tZXNzYWdlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXNzZXRzUmVxdWVzdFtib2R5X3N0cmluZ107XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtjb2RlOiAtMSwgbWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1dpdGhkcmF3YWxBZGRyZXNzKHdhbGxldCkge1xyXG4gICAgcmV0dXJuIGdkZXhTdG9yYWdlLmhhcyhgZ2RleF9oaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpdGhkcmF3YWxBZGRyZXNzZXMoe3dhbGxldCwgYWRkcmVzc2VzfSkge1xyXG4gICAgZ2RleFN0b3JhZ2Uuc2V0KGBnZGV4X2hpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBhZGRyZXNzZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzKHdhbGxldCkge1xyXG4gICAgcmV0dXJuIGdkZXhTdG9yYWdlLmdldChgZ2RleF9oaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Moe3dhbGxldCwgYWRkcmVzc30pIHtcclxuICAgIGdkZXhTdG9yYWdlLnNldChgZ2RleF9oaXN0b3J5X2FkZHJlc3NfbGFzdF8ke3dhbGxldH1gLCBhZGRyZXNzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzKHdhbGxldCkge1xyXG4gICAgcmV0dXJuIGdkZXhTdG9yYWdlLmdldChgZ2RleF9oaXN0b3J5X2FkZHJlc3NfbGFzdF8ke3dhbGxldH1gLCBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdpdGhkcmF3QWRkcmVzc2VzID0ge1xyXG4gICAgaGFzOiBoYXNXaXRoZHJhd2FsQWRkcmVzcyxcclxuICAgIHNldDogc2V0V2l0aGRyYXdhbEFkZHJlc3NlcyxcclxuICAgIGdldDogZ2V0V2l0aGRyYXdhbEFkZHJlc3NlcyxcclxuICAgIHNldExhc3Q6IHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyxcclxuICAgIGdldExhc3Q6IGdldExhc3RXaXRoZHJhd2FsQWRkcmVzc1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi4vLi4vVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xyXG5pbXBvcnQgQWNjb3VudEJhbGFuY2UgZnJvbSBcIi4uLy4uL0FjY291bnQvQWNjb3VudEJhbGFuY2VcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgR2RleENhY2hlIGZyb20gXCIuLi8uLi8uLi9saWIvY29tbW9uL0dkZXhDYWNoZVwiO1xyXG5pbXBvcnQge3JlcXVlc3REZXBvc2l0QWRkcmVzc30gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vZ2RleE1ldGhvZHNcIjtcclxuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlLnJlYWN0XCI7XHJcbmltcG9ydCBHZGV4V2l0aGRyYXdNb2RhbCBmcm9tIFwiLi9HZGV4V2l0aGRyYXdNb2RhbFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBHZGV4R2F0ZXdheUluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICAvLyBpbm5lcl9hc3NldF9uYW1lOiAgICAgICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgLy8gb3V0ZXJfYXNzZXRfbmFtZTogICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXHJcbiAgICAgICAgaXNzdWVyX2FjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxyXG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYnRzQ29pbjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxyXG4gICAgICAgIG1lbW9fcnVsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzOiBudWxsLFxyXG4gICAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgcXJjb2RlOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZSA9IG5ldyBHZGV4Q2FjaGUoKTtcclxuICAgICAgICB0aGlzLl9jb3B5ID0gdGhpcy5fY29weS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2NvcHkpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dRck1vZGFsID0gdGhpcy5zaG93UXJNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZVFyTW9kYWwgPSB0aGlzLmhpZGVRck1vZGFsLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gdGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1FyTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUXJNb2RhbFZpc2libGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlUXJNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXBvc2l0QWRkcmVzcygpIHtcclxuICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcyhcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyX2lkLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2luLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldERlcG9zaXRBZGRyZXNzKHVzZXJfaWQsIHVzZXJfbmFtZSwgY29pbiwgYWN0aW9uKSB7XHJcbiAgICAgICAgLy8gVGhlIGNvaW4gY2FuIG9ubHkgc3VwcG9ydCB3aXRoZHJhdyBzb21ldGltZSwgbm8gbmVlZCB0byBjYWxsIGdldCBkZXBvc2l0IGFkZHJlc3NcclxuICAgICAgICBpZiAoYWN0aW9uICE9IFwiZGVwb3NpdFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBjYWNoZWRfcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKFxyXG4gICAgICAgICAgICB1c2VyX25hbWUsXHJcbiAgICAgICAgICAgIGNvaW4ub3V0ZXJTeW1ib2wsXHJcbiAgICAgICAgICAgIGNvaW4uaW5uZXJTeW1ib2xcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY2FjaGVkX3JlY2VpdmVfYWRkcmVzcyAmJlxyXG4gICAgICAgICAgICBjYWNoZWRfcmVjZWl2ZV9hZGRyZXNzICE9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzczogY2FjaGVkX3JlY2VpdmVfYWRkcmVzc30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEdldCBhZGRyZXNzIGZyb20gc2VydmVyIHNpZGVcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh7XHJcbiAgICAgICAgICAgIGJ0c0Fzc2V0SWQ6IGNvaW4uaW5uZXJBc3NldElkLFxyXG4gICAgICAgICAgICBvdXRBc3NldElkOiBjb2luLm91dGVyQXNzZXRJZCxcclxuICAgICAgICAgICAgdWlkOiB1c2VyX2lkLFxyXG4gICAgICAgICAgICB1c2VyQWNjb3VudDogdXNlcl9uYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzICYmIGRhdGEuYWRkcmVzcy5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2VpdmVfYWRkcmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW86IGRhdGEuYWRkcmVzcy5tZW1vXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuY2FjaGVJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbi5vdXRlclN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbi5pbm5lclN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiByZWNlaXZlX2FkZHJlc3N9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzczogbnVsbH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtyZWNlaXZlX2FkZHJlc3M6IG51bGx9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldERlcG9zaXRBZGRyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbnAudXNlcl9pZCAhPT0gdGhpcy5wcm9wcy51c2VyX2lkIHx8XHJcbiAgICAgICAgICAgIG5wLmFjdGlvbiAhPT0gdGhpcy5wcm9wcy5hY3Rpb24gfHxcclxuICAgICAgICAgICAgbnAuY29pbiAhPSB0aGlzLnByb3BzLmNvaW5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdEFkZHJlc3MoXHJcbiAgICAgICAgICAgICAgICBucC51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgbnAuYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgbnAuY29pbixcclxuICAgICAgICAgICAgICAgIG5wLmFjdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLl9jb3B5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXCJ3aXRoZHJhd19hc3NldF9cIiArXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKSArXHJcbiAgICAgICAgICAgIFwiX1wiICtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2luLmlubmVyU3ltYm9sXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpdGhkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93UXJjb2RlKHRleHQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtxcmNvZGU6IHRleHR9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1FyTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY29weShlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2xpcGJvYXJkVGV4dClcclxuICAgICAgICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0aGlzLnN0YXRlLmNsaXBib2FyZFRleHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQvcGxhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlKFwiZ2F0ZXdheS51c2VfY29weV9idXR0b25cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b0NsaXBib2FyZChjbGlwYm9hcmRUZXh0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2xpcGJvYXJkVGV4dH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBlbXB0eVJvdyA9IDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIiwgbWluSGVpZ2h0OiAxNTB9fSAvPjtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMuY29pblxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xyXG4gICAgICAgIGNvbnN0IHtjb2luLCBidHNDb2lufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy8gYXNzZXQgaXMgbm90IGxvYWRlZFxyXG4gICAgICAgIGlmICghYnRzQ29pbikgcmV0dXJuIGVtcHR5Um93O1xyXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLnN0YXRlLnJlY2VpdmVfYWRkcmVzcztcclxuICAgICAgICBsZXQgcXJjb2RlID0gdGhpcy5zdGF0ZS5xcmNvZGU7XHJcbiAgICAgICAgbGV0IHdpdGhkcmF3X21vZGFsX2lkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcclxuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgY2xpcGJvYXJkVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IG1lbW9UZXh0ID0gXCJcIjtcclxuICAgICAgICBsZXQgZGVwb3NpdF9tZW1vX2ZyYWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIHdpdGhkcmF3X21lbW9fcHJlZml4ID0gY29pbi5vdXRlclN5bWJvbCArIFwiOlwiO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcykge1xyXG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcy5tZW1vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9tZW1vX2ZyYWdtZW50ID0gPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5tZW1vfTwvc3Bhbj47XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtb1RleHQgPSByZWNlaXZlX2FkZHJlc3MubWVtbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcclxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlc19vYmplY3QgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XHJcblxyXG4gICAgICAgIGlmIChhY2NvdW50X2JhbGFuY2VzX29iamVjdClcclxuICAgICAgICAgICAgYmFsYW5jZSA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LnRvSlMoKVtidHNDb2luLmdldChcImlkXCIpXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCbG9ja3RyYWRlc19fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X3N1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX2RlcG9zaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5vdXRlclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y29pbi5pbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb2luLmlubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X2luc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb2luLm91dGVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfd2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4ub3V0ZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vVGV4dCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfd2FybmluZ19tZW1vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4ub3V0ZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RlcG9zaXRfYWRkcmVzc19mcmFnbWVudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMjVweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b0NsaXBib2FyZC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmNvcHlfYWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNob3dRcmNvZGUuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5xcmNvZGUubGFiZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbW9UZXh0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5tZW1vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttZW1vVGV4dH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMjVweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvQ2xpcGJvYXJkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuY29weV9tZW1vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2hvd1FyY29kZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLnFyY29kZS5sYWJlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVRck1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuY2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc1FyTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVRck1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ2RleC1nYXRld2F5XCI+YWJjPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRRckNvZGVNb2RhbCB0ZXh0PXtxcmNvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJsb2NrdHJhZGVzX19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3N1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3dpdGhkcmF3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjb2luLmlubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4ub3V0ZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uaW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2luc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMS4zcmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25XaXRoZHJhdy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkud2l0aGRyYXdfY29pblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luOiBjb2luLm91dGVyQXNzZXROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBjb2luLm91dGVyU3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2RleFdpdGhkcmF3TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3Vlcj17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uaW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9uYW1lPXtjb2luLm91dGVyQXNzZXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZT17Y29pbi5nYXRlRmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5faWQ9e2NvaW4ub3V0ZXJBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sPXtjb2luLm91dGVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X3N1cHBvcnRzX21lbW9zPXtjb2luLm5lZWRNZW1vID09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaXRoZHJhd0Ftb3VudD17Y29pbi5taW5UcmFuc2FjdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX3ByZWNpc2lvbj17Y29pbi5yZWxhdGlvblByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fcHJlZml4PXt3aXRoZHJhd19tZW1vX3ByZWZpeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fcnVsZT17dGhpcy5wcm9wcy5tZW1vX3J1bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbF9pZD17d2l0aGRyYXdfbW9kYWxfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERlcG9zaXRRckNvZGVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnByb3BzLnRleHQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMlwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8UVJDb2RlIHNpemU9ezIwMH0gdmFsdWU9e3RleHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJub25lXCJ9fT57dGV4dH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEdkZXhHYXRld2F5SW5mbyk7XHJcbiIsImltcG9ydCBzcyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuY29uc3Qgc2Vzc2lvbiA9IG5ldyBzcyhcIl9fZ2RleF9fdXNlcl9cIik7XHJcblxyXG5jbGFzcyBHZGV4Q2FjaGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2dkZXhfYWRkcmVzc19jYWNoZV92ZXJzaW9uX3N0cmluZyA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuZGF5ID0gODY0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8odXNlcl9hY2NvdW50KSB7XHJcbiAgICAgICAgbGV0IHVzZXJfaW5mbyA9IHNlc3Npb24uZ2V0KHVzZXJfYWNjb3VudCwgbnVsbCk7XHJcbiAgICAgICAgaWYgKCF1c2VyX2luZm8pIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBjdXJfdGltZSA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgICAvLyBVc2VyIGluZm8gZXhwaXJlIHRpbWUgc2V0IHRvIDEgZGF5XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHVzZXJfaW5mby5jdGltZSAtIGN1cl90aW1lKSA+IHRoaXMuZGF5KSB7XHJcbiAgICAgICAgICAgIHNlc3Npb24ucmVtb3ZlKHVzZXJfYWNjb3VudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXNlcl9pbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIGNhY2hlVXNlckluZm8odXNlcl9hY2NvdW50LCB1c2VyX2lkLCBzdGF0dXMpIHtcclxuICAgICAgICBsZXQgdXNlcl9pbmZvID0gc2Vzc2lvbi5nZXQodXNlcl9hY2NvdW50LCB7fSk7XHJcbiAgICAgICAgaWYgKHVzZXJfaW5mbyAhPSB7fSkge1xyXG4gICAgICAgICAgICB1c2VyX2luZm8gPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBjdGltZTogTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNlc3Npb24uc2V0KHVzZXJfYWNjb3VudCwgdXNlcl9pbmZvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsVXNlckluZm8odXNlcl9hY2NvdW50KSB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24uaGFzKHVzZXJfYWNjb3VudCkpIHNlc3Npb24uZGVsKHVzZXJfYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5kZXhGb3JEZXBvc2l0S2V5KGFjY291bnRfbmFtZSwgaW5wdXRfY29pbl90eXBlLCBvdXRwdXRfY29pbl90eXBlKSB7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9nZGV4X2FkZHJlc3NfY2FjaGVfdmVyc2lvbl9zdHJpbmcsXHJcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLmNvbmNhdChcIltcIiwgY3VycmVudCwgXCJdXCIpO1xyXG4gICAgICAgIH0sIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhY2hlZElucHV0QWRkcmVzcyhhY2NvdW50X25hbWUsIGlucHV0X2NvaW5fdHlwZSwgb3V0cHV0X2NvaW5fdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleEZvckRlcG9zaXRLZXkoXHJcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgZGVwb3NpdF9rZXlzID0gc2Vzc2lvbi5nZXQoXCJkZXBvc2l0X2tleXNcIiwge30pO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBkZXBvc2l0X2tleXNbaW5kZXhdIHx8IG51bGw7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybjtcclxuICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgLy8gY2FjaGUgZGVwb3NpdCBhZGRyZXNzIGZvciAxIHdlZWtcclxuICAgICAgICAgICAgbGV0IGN1cl90aW1lID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocmVzdWx0LmN0aW1lIC0gY3VyX3RpbWUpID4gdGhpcy5kYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxyXG4gICAgICAgIGFkZHJlc3MsXHJcbiAgICAgICAgbWVtb1xyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleShcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBkZXBvc2l0X2tleXMgPSBzZXNzaW9uLmdldChcImRlcG9zaXRfa2V5c1wiLCB7fSk7XHJcbiAgICAgICAgZGVwb3NpdF9rZXlzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgICAgbWVtbzogbWVtbyxcclxuICAgICAgICAgICAgY3RpbWU6IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2Vzc2lvbi5zZXQoXCJkZXBvc2l0X2tleXNcIiwgZGVwb3NpdF9rZXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcklucHV0QWRkcmVzcyhhY2NvdW50X25hbWUsIGlucHV0X2NvaW5fdHlwZSwgb3V0cHV0X2NvaW5fdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleEZvckRlcG9zaXRLZXkoXHJcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcclxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgZGVwb3NpdF9rZXlzID0gc2Vzc2lvbi5nZXQoXCJkZXBvc2l0X2tleXNcIiwgbnVsbCk7XHJcbiAgICAgICAgaWYgKCFkZXBvc2l0X2tleXMpIHJldHVybjtcclxuICAgICAgICBpZiAoIWRlcG9zaXRfa2V5c1tpbmRleF0pIHtcclxuICAgICAgICAgICAgLy8gRGVwb3NpdCBrZXkgaXMgZW1wdHksIG5vIG5lZWQgdG8gY2xlYXJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXBvc2l0X2tleXNbaW5kZXhdID0ge2FkZHJlc3M6IG51bGwsIG1lbW86IG51bGwsIGN0aW1lOiBudWxsfTtcclxuICAgICAgICBzZXNzaW9uLnNldChcImRlcG9zaXRfa2V5c1wiLCBkZXBvc2l0X2tleXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZGV4Q2FjaGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQge3ZhbGlkYXRlQWRkcmVzcywgV2l0aGRyYXdBZGRyZXNzZXN9IGZyb20gXCJjb21tb24vZ2RleE1ldGhvZHNcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2NoZWNrRmVlU3RhdHVzQXN5bmMsIGNoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuaW1wb3J0IHtBc3NldCwgUHJpY2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtCdXR0b24sIE1vZGFsfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5jbGFzcyBHZGV4V2l0aGRyYXdNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaXNzdWVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcclxuICAgICAgICBtZW1vX3J1bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LFxyXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogdGhpcy5wcm9wcy5hbW91bnRfdG9fd2l0aGRyYXcsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QocHJvcHMub3V0cHV0X2NvaW5fbmFtZSksXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxyXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X2NvaW5fbmFtZVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtZW1vOiBcIlwiLFxyXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJlbG93X21pbnVtdW1fd2l0aGRyYXdfdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmVjaXNpb25fZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZW1vX2Vycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVtb19sZW5ndGhfZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IHByb3BzLmFjY291bnQsXHJcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZDpcclxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuYXNzZXRzX2J5X3N5bWJvbC5nZXQocHJvcHMuZmVlX2Fzc2V0X3N5bWJvbCkgfHxcclxuICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcclxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcclxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19lcnJvcl9jb2RlOiBudWxsLFxyXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2Vycm9yX21lc3NhZ2U6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSA9IGRlYm91bmNlKHRoaXMuX3VwZGF0ZUZlZS5iaW5kKHRoaXMpLCAyNTApO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwgPSB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudW5Nb3VudGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XHJcbiAgICAgICAgaWYgKG5wLm91dHB1dF9jb2luX25hbWUgIT0gdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcclxuICAgICAgICAgICAgICAgICAgICBucC5vdXRwdXRfY29pbl9uYW1lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcclxuICAgICAgICAgICAgICAgICAgICBucC5vdXRwdXRfY29pbl9uYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50ICYmXHJcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnAuYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogbmV3IEFzc2V0KHthbW91bnQ6IDB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29uZmlybWF0aW9uTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfYXNzZW1ibGVNZW1vKCkge1xyXG4gICAgICAgIGxldCBtZW1vX3J1bGUgPSB0aGlzLnByb3BzLm1lbW9fcnVsZTtcclxuICAgICAgICBsZXQgbWVtb19tZXNzYWdlID0gXCJcIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAobWVtb19ydWxlKSB7XHJcbiAgICAgICAgICAgICAgICBtZW1vX3J1bGUuc3BsaXQoXCI7XCIpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vX21lc3NhZ2UgKz0gaXRlbS5zbGljZSgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19tZXNzYWdlICs9IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19tZXNzYWdlICs9IGl0ZW0uc2xpY2UoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fbWVzc2FnZSArPSB0aGlzLnN0YXRlLm1lbW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW1vX21lc3NhZ2UubGVuZ3RoID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtb19sZW5ndGhfZXJyb3I6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtb19sZW5ndGhfZXJyb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vX2Vycm9yOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbW9fbWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vX2Vycm9yOiB0cnVlfSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZUZlZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICBsZXQge2ZlZV9hc3NldF9pZCwgZnJvbV9hY2NvdW50fSA9IHN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzWzBdICE9PSBmZWVfYXNzZXRfaWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkID0gZmVlX2Fzc2V0X3R5cGVzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFmcm9tX2FjY291bnQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xyXG4gICAgICAgICAgICBhY2NvdW50SUQ6IGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgZmVlSUQ6IGZlZV9hc3NldF9pZCxcclxuICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuX2Fzc2VtYmxlTWVtbygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKCh7ZmVlLCBoYXNCYWxhbmNlLCBoYXNQb29sQmFsYW5jZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudW5Nb3VudGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0JhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUG9vbEJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0ZlZVN0YXR1cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICBsZXQgYWNjb3VudCA9IHN0YXRlLmZyb21fYWNjb3VudDtcclxuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlczogYXNzZXRzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSk7XHJcbiAgICAgICAgLy8gY29uc3QgYXNzZXRzID0gW1wiMS4zLjBcIiwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV07XHJcbiAgICAgICAgbGV0IGZlZVN0YXR1cyA9IHt9O1xyXG4gICAgICAgIGxldCBwID0gW107XHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgIHAucHVzaChcclxuICAgICAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBmZWVJRDogYSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fbmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHApXHJcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgoYSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2FdID0gc3RhdHVzW2lkeF07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1lbW9DaGFuZ2VkKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBlLnRhcmdldC52YWx1ZX0sIHRoaXMuX3VwZGF0ZUZlZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaXRoZHJhd0Ftb3VudENoYW5nZSh7YW1vdW50fSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgIXBhcnNlRmxvYXQoYW1vdW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0Q2hhbmdlZChpbmRleCkge1xyXG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfYWRkcmVzcyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2xcclxuICAgICAgICApW2luZGV4XTtcclxuICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcclxuICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbCxcclxuICAgICAgICAgICAgYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2l0aGRyYXdBZGRyZXNzQ2hhbmdlZChlKSB7XHJcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIHZhbGlkYXRlQWRkcmVzcyh7XHJcbiAgICAgICAgICAgIGFzc2V0SWQ6IHByb3BzLm91dHB1dF9jb2luX2lkLFxyXG4gICAgICAgICAgICBhc3NldE5hbWU6IHByb3BzLm91dHB1dF9jb2luX25hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBkYXRhLnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZXJyb3JfY29kZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2Vycm9yX21lc3NhZ2U6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IGVyci5jb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPCAwKSBtZXNzYWdlID0gXCJTeXN0ZW0gZXJyb3I6IHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19lcnJvcl9jb2RlOiBlcnIuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2Vycm9yX21lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9jaGVja1ByZWNpc2lvbigpIHtcclxuICAgICAgICBsZXQge3dpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCB7b3V0cHV0X2NvaW5fcHJlY2lzaW9ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKG91dHB1dF9jb2luX3ByZWNpc2lvbiA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2l0aGRyYXdfYW1vdW50ICE9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQgPSB3aXRoZHJhd19hbW91bnQudG9TdHJpbmcoKTtcclxuICAgICAgICB3aXRoZHJhd19hbW91bnQgPSB3aXRoZHJhd19hbW91bnQudHJpbSgpO1xyXG4gICAgICAgIGlmICh3aXRoZHJhd19hbW91bnQuaW5kZXhPZihcIi5cIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZWNpc2lvbl9lcnJvcjogZmFsc2V9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudC5sZW5ndGggLSB3aXRoZHJhd19hbW91bnQuaW5kZXhPZihcIi5cIikgLSAxID5cclxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fcHJlY2lzaW9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZWNpc2lvbl9lcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZWNpc2lvbl9lcnJvcjogZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQmFsYW5jZSgpIHtcclxuICAgICAgICBsZXQge2ZlZUFtb3VudCwgd2l0aGRyYXdfYW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHthc3NldCwgYmFsYW5jZSwgbWluV2l0aGRyYXdBbW91bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoIWJhbGFuY2UpIHtcclxuICAgICAgICAgICAgLy8gZG9lcyBub3Qgb3duIGFueSBhc3NldFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZlZUFtb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGhhc0JhbGFuY2UgPSBjaGVja0JhbGFuY2UoXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcclxuICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgIGZlZUFtb3VudCxcclxuICAgICAgICAgICAgYmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gYmFsYW5jZSBpcyB6ZXJvXHJcbiAgICAgICAgaWYgKGhhc0JhbGFuY2UgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6ICFoYXNCYWxhbmNlfSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2l0aGRyYXdfYW1vdW50ID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQgPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwod2l0aGRyYXdfYW1vdW50LCAvLC9nLCBcIlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWluV2l0aGRyYXdBbW91bnQgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIG1pbldpdGhkcmF3QW1vdW50ID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKG1pbldpdGhkcmF3QW1vdW50LCAvLC9nLCBcIlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGlmICh3aXRoZHJhd19hbW91bnQgPCBtaW5XaXRoZHJhd0Ftb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZWxvd19taW51bXVtX3dpdGhkcmF3X3ZhbHVlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiZWxvd19taW51bXVtX3dpdGhkcmF3X3ZhbHVlOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jaGVja1ByZWNpc2lvbigpO1xyXG4gICAgICAgIHJldHVybiBoYXNCYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxyXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MubGVuZ3RoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCAhPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19pc192YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50KSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgZmVlX2Fzc2V0X2lkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLC9nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VuZEFtb3VudCA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXIuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFtb3VudC5nZXRBbW91bnQoKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NlbWJsZU1lbW8oKSxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudCA/IGZlZUFtb3VudC5hc3NldF9pZCA6IGZlZV9hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0Q29uZmlybWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCk7XHJcblxyXG4gICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sKSkge1xyXG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBbXTtcclxuICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xyXG4gICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbCxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2xcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHdpdGhkcmF3YWxzLmluZGV4T2YodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xyXG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0O1xyXG4gICAgICAgIGxldCBwcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCxcclxuICAgICAgICAgICAgLywvZyxcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGZlZV9hc3NldF9pZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlci5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoYW1vdW50ICogcHJlY2lzaW9uLCAxMCksXHJcbiAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICB0aGlzLl9hc3NlbWJsZU1lbW8oKSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyb3BEb3duTGlzdCgpIHtcclxuICAgICAgICBpZiAoV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2l0aGRyYXdfYWRkcmVzc19maXJzdDogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY29uZmlybWF0aW9uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50QmFsYW5jZSgpIHtcclxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpKS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgdG90YWwgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IHRoZSBmZWUgaWYgaXQgaXMgdXNpbmcgdGhlIHNhbWUgYXNzZXRcclxuICAgICAgICAgICAgaWYgKHRvdGFsLmFzc2V0X2lkID09PSBmZWVBbW91bnQuYXNzZXRfaWQpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsLm1pbnVzKGZlZUFtb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0b3RhbC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmVzdGVkUmVmKHJlZikge1xyXG4gICAgICAgIHRoaXMubmVzdGVkUmVmID0gcmVmO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmVlQ2hhbmdlZCh7YXNzZXR9KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZmVlU3RhdHVzfSA9IHN0YXRlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZlZVBvb2xCYWxhbmNlKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChmZWVTdGF0dXNbaWRdID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xyXG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1c1tpZF0gJiYgZmVlU3RhdHVzW2lkXS5oYXNCYWxhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZlZV9hc3NldF90eXBlcyA9IFtdO1xyXG4gICAgICAgIGlmICghKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudF9iYWxhbmNlcykge1xyXG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldE9iamVjdChrZXkpO1xyXG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XHJcbiAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0ICYmIGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGFzc2V0cyB0aGF0IGRvIG5vdCBoYXZlIHZhbGlkIGNvcmUgZXhjaGFuZ2UgcmF0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBwcmljZUlzVmFsaWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBwID0gbmV3IFByaWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbmV3IEFzc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG5ldyBBc3NldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gcC5pc1ZhbGlkKCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQuZ2V0KFwiaWRcIikgIT09IFwiMS4zLjBcIiAmJiAhcHJpY2VJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gZmVlX2Fzc2V0X3R5cGVzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZVBvb2xCYWxhbmNlKGEpICYmIGhhc0JhbGFuY2UoYSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkLCBtZW1vfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHN0b3JlZEFkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcclxuXHJcbiAgICAgICAgbGV0IHdpdGhkcmF3TW9kYWxJZCA9IHRoaXMuZ2V0V2l0aGRyYXdNb2RhbElkKCk7XHJcbiAgICAgICAgbGV0IGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gbnVsbDtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhc3RvcmVkQWRkcmVzcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibG9ja3RyYWRlcy1kaXNhYmxlZC1vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJibG9ja3RyYWRlcy1vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3JlZEFkZHJlc3MubWFwKGZ1bmN0aW9uKG5hbWUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxyXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2Vycm9yX2NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2Vycm9yX2NvZGV9OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfZXJyb3JfbWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnZhbGlkX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5fdHlwZT17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb24gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENvbmZpcm1hdGlvbi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmFjY2VwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmNvbmZpcm1hdGlvbi50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XHJcbiAgICAgICAgbGV0IHdpdGhkcmF3X21lbW8gPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNfbWVtb3MpIHtcclxuICAgICAgICAgICAgd2l0aGRyYXdfbWVtbyA9IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLm1lbW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW1vX2Vycm9yID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm1lbW9fZXJyb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVtb19sZW5ndGhfZXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubWVtb19sZW5ndGhfZXJyb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVzdGltYXRlIGZlZSBWQVJJQUJMRVNcclxuICAgICAgICBsZXQge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudF9hc3NldF9pZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdO1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7OiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0LWN1cnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjb3VudEJhbGFuY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc2FibGVTdWJtaXQgPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJlbG93X21pbnVtdW1fd2l0aGRyYXdfdmFsdWUgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vX2Vycm9yIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb19sZW5ndGhfZXJyb3IgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZWNpc2lvbl9lcnJvcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgZnVsbC13aWR0aC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIwXCJ9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFdpdGhkcmF3IGFtb3VudCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIm1vZGFsLndpdGhkcmF3LmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1t0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdBbW91bnRDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1wdHlfd2l0aGRyYXdfdmFsdWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy52YWxpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYmVsb3dfbWludW11bV93aXRoZHJhd192YWx1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm1pbmltdW1fYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLm1pbldpdGhkcmF3QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcmVjaXNpb25fZXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5wcmVjaXNpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb249e3RoaXMucHJvcHMub3V0cHV0X2NvaW5fcHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRmVlIHNlbGVjdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWVBbW91bnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBnYXRlX2ZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e3RoaXMuc2V0TmVzdGVkUmVmLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5nZXRBbW91bnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZmVlX2Fzc2V0X3R5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5oYXNCYWxhbmNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0ZlZUJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc1Bvb2xCYWxhbmNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub1Bvb2xCYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBHYXRlIGZlZSAqL31cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5nYXRlRmVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3IgcmlnaHQtc2VsZWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5mZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrdHJhZGVzLXNlbGVjdC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uRHJvcERvd25MaXN0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzk2NjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrdHJhZGVzLXBvc2l0aW9uLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ludmFsaWRfYWRkcmVzc19tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTWVtbyBpbnB1dCAqL31cclxuICAgICAgICAgICAgICAgICAgICB7d2l0aGRyYXdfbWVtb31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFdpdGhkcmF3L0NhbmNlbCBidXR0b25zICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQucGVybS5jYW5jZWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtYXRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdkZXhXaXRoZHJhd01vZGFsID0gQmluZFRvQ2hhaW5TdGF0ZShHZGV4V2l0aGRyYXdNb2RhbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgR2RleFdpdGhkcmF3TW9kYWwsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICBcImZlZV9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge2dldFRyYW5zYWN0aW9uUmVjb3JkTGlzdH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vZ2RleE1ldGhvZHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgREVQT1NJVF9TVEFUVVMgPSB7XHJcbiAgICAxOiBcImNvbmZpcm1pbmdcIixcclxuICAgIDI6IFwid2FpdGluZ1wiLFxyXG4gICAgMzogXCJ0cmFuc2ZlcmluZ1wiLFxyXG4gICAgNDogXCJzdWNjZXNzXCIsXHJcbiAgICA1OiBcImZhaWxcIlxyXG59O1xyXG5jb25zdCBXSVRIRFJBV19TVEFUVVMgPSB7XHJcbiAgICAxOiBcImNvbmZpcm1pbmdcIixcclxuICAgIDI6IFwiYXVkaXRpbmdcIixcclxuICAgIDM6IFwiYXVkaXRlZFwiLFxyXG4gICAgNDogXCJyZWZ1c2VkXCIsXHJcbiAgICA1OiBcInRyYW5zZmVyaW5nXCIsXHJcbiAgICA2OiBcInN1Y2Nlc3NcIixcclxuICAgIDc6IFwiZmFpbFwiXHJcbn07XHJcblxyXG5jbGFzcyBHZGV4SGlzdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNvbXBhY3RWaWV3OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgdXNlcklkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGFzc2V0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgYXNzZXROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY29yZFR5cGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgdXNlckFjY291bnQ6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcclxuICAgICAgICBmdWxsSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBwYWdlU2l6ZTogMTBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogODUsXHJcbiAgICAgICAgICAgIHBhZ2VOdW06IDAsXHJcbiAgICAgICAgICAgIHRvdGFsTnVtOiAwLFxyXG4gICAgICAgICAgICBuZXh0UGFnZUVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbGxEYXRhOiB7fSxcclxuICAgICAgICAgICAgaGlzdG9yeVN0YXR1c1R5cGU6XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yZWNvcmRUeXBlID09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZGVwb3NpdF9oaXN0b3J5X3N0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIndpdGhkcmF3X2hpc3Rvcnlfc3RhdHVzXCIsXHJcbiAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNWYWx1ZTpcclxuICAgICAgICAgICAgICAgIHByb3BzLnJlY29yZFR5cGUgPT0gMSA/IERFUE9TSVRfU1RBVFVTIDogV0lUSERSQVdfU1RBVFVTXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2FjdGlvbkhpc3RvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNvcmRUeXBlICE9IG5leHRQcm9wcy5yZWNvcmRUeXBlIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRJZCAhPSBuZXh0UHJvcHMuYXNzZXRJZCB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0TmFtZSAhPSBuZXh0UHJvcHMuYXNzZXROYW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlcklkICE9IG5leHRQcm9wcy51c2VySWQgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQWNjb3VudCAhPSBuZXh0UHJvcHMudXNlckFjY291bnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5hc3NldElkLFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFzc2V0TmFtZSxcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5yZWNvcmRUeXBlLFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnVzZXJBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHRoaXMucHJvcHMudXNlcklkLCBuZXh0UHJvcHMudXNlcklkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWxsRGF0YSAhPSBuZXh0U3RhdGUuYWxsRGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFnZU51bSAhPSBuZXh0U3RhdGUucGFnZU51bSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUcmFuc2FjdGlvbkhpc3RvcnkoXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIGFzc2V0SWQsXHJcbiAgICAgICAgYXNzZXROYW1lLFxyXG4gICAgICAgIHJlY29yZFR5cGUsXHJcbiAgICAgICAgdXNlckFjY291bnQsXHJcbiAgICAgICAgZm9yY2UgPSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHBhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICBhbGxEYXRhLFxyXG4gICAgICAgICAgICBoaXN0b3J5U3RhdHVzVmFsdWUsXHJcbiAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNUeXBlXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKGZvcmNlID09IHRydWUpIHtcclxuICAgICAgICAgICAgcGFnZU51bSA9IDE7XHJcbiAgICAgICAgICAgIGFsbERhdGEgPSB7fTtcclxuICAgICAgICAgICAgaGlzdG9yeVN0YXR1c1R5cGUgPVxyXG4gICAgICAgICAgICAgICAgcmVjb3JkVHlwZSA9PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImRlcG9zaXRfaGlzdG9yeV9zdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJ3aXRoZHJhd19oaXN0b3J5X3N0YXR1c1wiO1xyXG4gICAgICAgICAgICBoaXN0b3J5U3RhdHVzVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgcmVjb3JkVHlwZSA9PSAxID8gREVQT1NJVF9TVEFUVVMgOiBXSVRIRFJBV19TVEFUVVM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFnZU51bSArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBnZXRUcmFuc2FjdGlvblJlY29yZExpc3QoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVpZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRJZDogYXNzZXRJZCxcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW06IHBhZ2VOdW0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICB1c2VyQWNjb3VudDogdXNlckFjY291bnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVjb3JkVHlwZVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMucmVjb3Jkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5yZWNvcmRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbERhdGFbaXRlbS50eGlkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4aWQ6IGl0ZW0udHhpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLmN0aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5peHRpbWU6IERhdGUucGFyc2UoaXRlbS5jdGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5U3RhdHVzVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5U3RhdHVzVmFsdWVbaXRlbS5zdGF0dXNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbFJlYXNvbjogaXRlbS5mYWlsUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXROYW1lOiBhc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbE51bTogcmVzLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZUVuYWJsZWQ6IHJlcy50b3RhbCA+IHBhZ2VOdW0gKiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGF0YTogYWxsRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogcGFnZU51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeVN0YXR1c1R5cGU6IGhpc3RvcnlTdGF0dXNUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5U3RhdHVzVmFsdWU6IGhpc3RvcnlTdGF0dXNWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTnVtOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQYWdlRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsRGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KCkge1xyXG4gICAgICAgIGxldCB7dXNlcklkLCBhc3NldElkLCBhc3NldE5hbWUsIHJlY29yZFR5cGUsIHVzZXJBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5fZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KFxyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGFzc2V0SWQsXHJcbiAgICAgICAgICAgIGFzc2V0TmFtZSxcclxuICAgICAgICAgICAgcmVjb3JkVHlwZSxcclxuICAgICAgICAgICAgdXNlckFjY291bnQsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHthc3NldE5hbWUsIGNvbXBhY3RWaWV3LCBzdHlsZSwgbWF4SGVpZ2h0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtoZWFkZXJIZWlnaHQsIGFsbERhdGF9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGhpc3RvcnkgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhhbGxEYXRhKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYWxsRGF0YVtpdGVtXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGlzdG9yeS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLnVuaXh0aW1lIC0gYS51bml4dGltZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHlsZSA9IHN0eWxlID8gc3R5bGUgOiB7fTtcclxuICAgICAgICBzdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxuICAgICAgICBpZiAoYWxsRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlzcGxheV9oaXN0b3J5ID0gaGlzdG9yeS5sZW5ndGhcclxuICAgICAgICAgICAgPyBoaXN0b3J5Lm1hcChvID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e28udHhpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtdGQgY29sdW1uLWhpZGUtdGlueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e28uc3RhdHVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCA1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnRyYW5zYWN0aW9uX2hpc3RvcnlfaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e28uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXROYW1lPXthc3NldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eGlkPXtvLnR4aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e28udGltZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT1cIm5vX3JlY2VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbXBhY3RWaWV3ID8gXCIyXCIgOiBcIjNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwib3BlcmF0aW9uLm5vX3JlY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgZGlzcGxheV9oaXN0b3J5LnB1c2goXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0b3RhbC12YWx1ZVwiIGtleT1cInRvdGFsX3ZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtdGlueVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGQgLz5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwO3t0aGlzLnN0YXRlLm5leHRQYWdlRW5hYmxlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5nZXRUcmFuc2FjdGlvbkhpc3RvcnkuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGV2cm9uLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuY2hldnJvbl9kb3duLnRyYW5zYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnQtdHJhbnNhY3Rpb25zIG5vLW92ZXJmbG93XCIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXNoYm9hcmQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucmVjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtY29udGVudCBncmlkLWJsb2NrIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmZ1bGxIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCAtIGhlYWRlckhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInRyYW5zYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29tcGFjdFZpZXcgPyBcIiBjb21wYWN0XCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuZGFzaGJvYXJkID8gXCIgZGFzaGJvYXJkLXRhYmxlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT1cImhpc3RvcnlfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuc3RhdHVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5pbmZvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS50aW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57ZGlzcGxheV9oaXN0b3J5fTwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXRvbiBuYW1lPVwi5LiL5LiA6aG1XCIgIC8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2RleEhpc3Rvcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIEdkZXhBZ3JlZW1lbnRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9jYWxlOiBwcm9wcy5zZXR0aW5ncy5nZXQoXCJsb2NhbGVcIiwgXCJlblwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yZWZzKTtcclxuICAgICAgICBpZiAodGhpcy5yZWZzLmFncmVlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMucmVmcy5hZ3JlZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICBQcy5pbml0aWFsaXplKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yZWZzKTtcclxuICAgICAgICBpZiAodGhpcy5yZWZzLmFncmVlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMucmVmcy5hZ3JlZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICBQcy51cGRhdGUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBZ3JlZW1lbnQobG9jYWxlKSB7XHJcbiAgICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInpoXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJjblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFncmVlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PueUqOaIt+acjeWKoeWNj+iurjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT0JTSURJQU4gVEVDSE5PTE9HWSBDTy4gUFRFLiBMVEQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmmK/kuIDlrrbmoLnmja7mlrDliqDlnaHlhbHlkozlm73ms5XlvovmiJDnq4vnmoTlhazlj7jvvIxHREVY5piv55Sx6K+l5YWs5Y+46L+Q6JCl55qE5q+U54m56IKh572R5YWzKOS7peS4i+ensOKAnEdERVjigJ3miJbigJzmnKznvZHlhbPigJ0p77yM5Li76K6/6Zeu5YWl5Y+j5Li6aHR0cHM6Ly93d3cuZ2RleC5pb++8jEdERVjmmK/kuIDkuKrlnKjmr5TnibnogqHlubPlj7DkuLrnlKjmiLfmj5DkvpvmlbDlrZfotYTkuqflhYXmj5DmnI3liqHvvIjku6XkuIvnp7DigJzor6XmnI3liqHigJ3miJbigJzmnI3liqHigJ3vvInnmoTlubPlj7DjgILkuLrkuobmnKzljY/orq7ooajov7DkuYvmlrnkvr/vvIzlhazlj7jlkozor6XnvZHlhbPlnKjmnKzljY/orq7kuK3lkIjnp7Dkvb/nlKjigJzmiJHku6zigJ3miJblhbbku5bnrKzkuIDkurrnp7Dnp7DlkbzjgILkvb/nlKjor6XmnI3liqHnmoToh6rnhLbkurrmiJblhbbku5bkuLvkvZPlnYfkuLrmnKznvZHlhbPnmoTnlKjmiLfvvIzmnKzljY/orq7kuLrooajov7DkuYvkvr/liKnvvIzku6XkuIvkvb/nlKjigJzmgqjigJ3miJblhbbku5bnrKzkuozkurrnp7DjgILmiJHku6zlkozmgqjlnKjmnKzljY/orq7kuK3lkIjnp7DkuLrigJzlj4zmlrnigJ3vvIzmiJHku6zmiJbmgqjljZXnp7DkuLrigJzkuIDmlrnigJ3jgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ph43opoHmj5DnpLrvvJo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuaIkeS7rOWcqOatpOeJueWIq+aPkOmGkuaCqO+8mjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLiDmlbDlrZfotYTkuqfmnKzouqvkuI3nlLHku7vkvZXph5Hono3mnLrmnoTmiJblhazlj7jmiJbmnKznvZHlhbPlj5HooYzvvJtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmlbDlrZfotYTkuqfluILlnLrmmK/lhajmlrDnmoTjgIHmnKrnu4/noa7orqTnmoTvvIzogIzkuJTlj6/og73kuI3kvJrlop7plb/vvJtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmlbDlrZfotYTkuqfkuLvopoHnlLHmipXmnLrogIXlpKfph4/kvb/nlKjvvIzpm7bllK7lkozllYbkuJrluILlnLrkvb/nlKjnm7jlr7novoPlsJHvvIzmlbDlrZfotYTkuqfkuqTmmJPlrZjlnKjmnoHpq5jpo47pmanvvIzlhbblhajlpKnkuI3pl7Tmlq3kuqTmmJPvvIzmsqHmnInmtqjot4zpmZDliLbvvIzku7fmoLzlrrnmmJPlj5fluoTlrrbjgIHlhajnkIPmlL/lupzmlL/nrZbnmoTlvbHlk43ogIzlpKfluYXms6LliqjvvJtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlm6DlkITlm73ms5XlvovjgIHms5Xop4Tlkozop4TojIPmgKfmlofku7bnmoTliLblrprmiJbogIXkv67mlLnvvIzmlbDlrZfotYTkuqfkuqTmmJPpmo/ml7blj6/og73ooqvmmoLlgZzmiJbooqvnpoHmraLjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaVsOWtl+i1hOS6p+S6pOaYk+acieaegemrmOmjjumZqe+8jOW5tuS4jemAguWQiOe7neWkp+mDqOWIhuS6uuWjq+OAguaCqOS6huino+WSjOeQhuino+atpOaKlei1hOacieWPr+iDveWvvOiHtOmDqOWIhuaNn+WkseaIluWFqOmDqOaNn+Wkse+8jOaJgOS7peaCqOW6lOivpeS7peiDveaJv+WPl+eahOaNn+Wkseeoi+W6puadpeWGs+WumuaKlei1hOeahOmHkemineOAguaCqOS6huino+WSjOeQhuino+aVsOWtl+i1hOS6p+S8muS6p+eUn+ihjeeUn+mjjumZqe+8jOaJgOS7peWmguacieS7u+S9leeWkemXru+8jOW7uuiuruWFiOWvu+axgueQhui0oumhvumXrueahOWNj+WKqeOAguatpOWklu+8jOmZpOS6huS4iui/sOaPkOWPiui/h+eahOmjjumZqeS7peWklu+8jOi/mOS8muacieacquiDvemihOa1i+eahOmjjumZqeWtmOWcqOOAguaCqOW6lOaFjumHjeiAg+iZkeW5tueUqOa4heaZsOeahOWIpOaWreiDveWKm+WOu+ivhOS8sOiHquW3seeahOi0ouaUv+eKtuWGteWPiuS4iui/sOWQhOmhuemjjumZqeiAjOS9nOWHuuS7u+S9leS5sOWNluaVsOWtl+i1hOS6p+eahOWGs+Wumu+8jOW5tuaJv+aLheeUseatpOS6p+eUn+eahOWFqOmDqOaNn+Wkse+8jOaIkeS7rOWvueatpOS4jeaJv+aLheS7u+S9lei0o+S7u+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuaVrOWRiuaCqO+8mjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLuaCqOS6huino+avlOeJueiCoeaYr+WfuuS6juWMuuWdl+mTvueahOWOu+S4reW/g+WMluS6pOaYk+W5s+WPsO+8jOWFtuWfuuehgOi0puWPt+acjeWKoeWSjOS6pOaYk+aSruWQiOacjeWKoemDveeUseavlOeJueiCoeW5s+WPsOaPkOS+m+OAguS6puacieWFtuWug+acuuaehOaIluS4quS6uuWcqOavlOeJueiCoeW5s+WPsOS4iuWPkeihjOi1hOS6p+WPiu+8j+aIluaPkOS+m+acjeWKoeOAguaCqOS6huino+acrOe9keWFs+S7heS9nOS4uuaCqOWQkeavlOeJueiCoeW5s+WPsOWFheaPkOaVsOWtl+i1hOS6p+eahOW3peWFt+OAguacrOe9keWFs+WPquWvueiHqui6q+WPkeihjOeahOS6pOaYk+S7o+W4gei1hOS6p++8iOWQjeensOS7pUdERVgu5Li65YmN57yA77yJ6LSf6LSj77yM5LiN5a+55q+U54m56IKh5LiK5YW25a6D5py65p6E5oiW5Liq5Lq65Y+R6KGM55qE6LWE5Lqn6LSf6LSj77yM5pys572R5YWz5LiN5Y+C5LiO5oKo55qE5Lu75L2V5Lqk5piT77yM5oKo5bqU6Ieq6KGM6LCo5oWO5Yik5pat56Gu5a6a55u45YWz5pWw5a2X6LWE5Lqn5Y+KL+aIluS/oeaBr+eahOecn+WunuaAp+OAgeWQiOazleaAp+WSjOacieaViOaAp++8jOW5tuiHquihjOaJv+aLheWboOatpOS6p+eUn+eahOi0o+S7u+S4juaNn+WkseOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOavlOeJueiCoeWOu+S4reW/g+WMluS6pOaYk+ezu+e7n+WtmOaciemjjumZqe+8jOWMheaLrOS9huS4jemZkOS6jui9r+S7tu+8jOehrOS7tuWSjOS6kuiBlOe9kemTvue7k+eahOWksei0pe+8jOeUqOaIt+i0puaIt+ezu+e7n+eahOWuieWFqOmjjumZqeetieOAgueUseS6juaIkeS7rOS4jeiDveaOp+WItuS6kuiBlOe9keS7peWPiuavlOeJueiCoeW5s+WPsOeahOWPr+mdoOaAp+WSjOWPr+eUqOaAp++8jOaIkeS7rOS4jeS8muWvueS4iui/sOmjjumZqemAoOaIkOeahOeUqOaIt+aNn+WkseaJv+aLheS7u+S9lei0o+S7u+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOemgeatouS9v+eUqOacrOe9keWFs+S7juS6i+a0l+mSseOAgei1sOengeOAgeWVhuS4mui0v+i1guetieS4gOWIh+mdnuazleS6pOaYk+a0u+WKqO+8jOiLpeWPkeeOsOatpOexu+S6i+S7tu+8jOacrOe9keWFs+WwhumHh+WPluWQhOenjeWPr+S9v+eUqOS5i+aJi+aute+8jOWMheaLrOS9huS4jemZkOS6juS4reatouaPkOS+m+acjeWKoe+8jOmAmuefpeebuOWFs+adg+WKm+acuuWFs+etie+8jOaIkeS7rOS4jeaJv+aLheeUseatpOS6p+eUn+eahOaJgOaciei0o+S7u+W5tuS/neeVmeWQkeebuOWFs+S6uuWjq+i/veeptui0o+S7u+eahOadg+WIqeOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS4gOOAgeaAu+WImTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaCqOWcqOS9v+eUqOacrOe9keWFs+aPkOS+m+eahOacjeWKoeS5i+WJje+8jOW6lOS7lOe7humYheivu+acrOWNj+iuru+8jOWmguacieS4jeeQhuino+S5i+WkhOaIluWFtuS7luW/heimge+8jOivt+WSqOivouS4k+S4muW+i+W4iOOAguWmguaCqOS4jeWQjOaEj+acrOWNj+iuruWPii/miJbpmo/ml7blr7nlhbbnmoTkv67mlLnvvIzor7fmgqjnq4vljbPlgZzmraLkvb/nlKjmnKznvZHlhbPmj5DkvpvnmoTmnI3liqHjgILkvb/nlKjmnKznvZHlhbPnmoTku7vkvZXmnI3liqHljbPooajnpLrmgqjlt7Lkuobop6PlubblrozlhajlkIzmhI/mnKzljY/orq7lkITpobnlhoXlrrnvvIzljIXmi6zmnKznvZHlhbPlr7nmnKzljY/orq7pmo/ml7bmiYDlgZrnmoTku7vkvZXkv67mlLnjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5L2/55So5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh5ZKM5Yqf6IO977yM5oKo5bCG6KKr6KeG5Li65bey6ZiF6K+777yM55CG6Kej5bm277yaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDEuMi4xIOaOpeWPl+acrOWNj+iuruaJgOacieadoeasvuWPiuadoeS7tueahOe6puadn+OAgjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjIuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo56Gu6K6k5oKo5bey5bm05ruhMjHlkajlsoHmiJbmoLnmja7kuI3lkIznmoTlj6/pgILnlKjnmoTms5Xlvovop4TlrprnmoTlhbfmnInlj6/orqLnq4vlkIjlkIznmoTms5XlrprlubTpvoTvvIzlubbmnInlhYXliIbnmoTog73lipvmjqXlj5fov5nkupvmnaHmrL7vvIzlubborqLnq4vkuqTmmJPvvIzkvb/nlKjmnKznvZHlhbPov5vooYzmlbDlrZfotYTkuqfkuqTmmJPjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMi4zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjkv53or4HkuqTmmJPkuK3mtonlj4rliLDnmoTlsZ7kuo7mgqjnmoTmlbDlrZfotYTkuqflnYfkuLrlkIjms5Xlj5blvpflubbmiYDmnInjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMi40XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlkIzmhI/mgqjkuLrmgqjoh6rouqvnmoTkuqTmmJPmiJbpnZ7kuqTmmJPooYzkuLrmib/mi4Xlhajpg6jotKPku7vlkozku7vkvZXmlLbnm4rmiJbkuo/mjZ/jgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMi41XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlkIzmhI/pgbXlrojku7vkvZXmnInlhbPms5XlvovnmoTop4TlrprvvIzlsLHnqI7liqHnm67nmoTogIzoqIDvvIzljIXmi6zmiqXlkYrku7vkvZXkuqTmmJPliKnmtqbjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMi42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKzljY/orq7lj6rmmK/lsLHmgqjkuI7miJHku6zkuYvpl7Tovr7miJDnmoTmnYPliKnkuYnliqHlhbPns7vov5vooYznuqbmnZ/vvIzogIzlubbkuI3mtonlj4rmnKznvZHlhbPnlKjmiLfkuYvpl7TmiJblhbbku5bnvZHlhbPlkozmgqjkuYvpl7Tlm6DmlbDlrZfotYTkuqfkuqTmmJPogIzkuqfnlJ/nmoTms5XlvovlhbPns7vlj4rms5XlvovnuqDnurfjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7kuozjgIHljY/orq7kv67orqI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5L+d55WZ5LiN5pe25L+u6K6i5pys5Y2P6K6u44CB5bm25Lul5YWs56S655qE5pa55byP6L+b6KGM5YWs5ZGK44CB5LiN5YaN5Y2V54us6YCa55+l5oKo55qE5p2D5Yip77yM5Y+Y5pu05ZCO55qE5Y2P6K6u5Lya5Zyo5pys5Y2P6K6u6aaW6aG15qCH5rOo5Y+Y5pu05pe26Ze077yM5LiA57uP5Zyo5YWs5biD77yM56uL5Y2z6Ieq5Yqo55Sf5pWI44CC5oKo5bqU5LiN5pe25rWP6KeI5Y+K5YWz5rOo5pys5Y2P6K6u55qE5pu05paw5Y+Y5pu05pe26Ze05Y+K5pu05paw5YaF5a6577yM5aaC5oKo5LiN5ZCM5oSP55u45YWz5Y+Y5pu077yM5bqU5b2T56uL5Y2z5YGc5q2i5L2/55So5pys572R5YWz5pyN5Yqh77yb5oKo57un57ut5L2/55So5pys572R5YWz5pyN5Yqh77yM5Y2z6KGo56S65oKo5o6l5Y+X5bm25ZCM5oSP57uP5L+u6K6i55qE5Y2P6K6u55qE57qm5p2f44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiJ44CB5pyN5YqhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOe9keWFs+WPquS4uuaCqOaPkOS+m+WQkeavlOeJueiCoeW5s+WPsOWGsuWFpeWSjOaPkOWPluaVsOWtl+i1hOS6p+eahOacjeWKoe+8jOacrOe9keWFs+W5tuS4jeS9nOS4uuS5sOWutuaIluWNluWutuWPguS4juS5sOWNluaVsOWtl+i1hOS6p+ihjOS4uuacrOi6q++8m+acrOe9keWFs+S4jeaPkOS+m+S7u+S9leWbveWutuazleWumui0p+W4geWFheWFpeWSjOaPkOWPlueahOebuOWFs+acjeWKoeOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAzLjEg5pyN5Yqh5YaF5a65PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuMS4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjmnInmnYPpgJrov4fmnKznvZHlhbPlkJHmr5TnibnogqHlubPlj7DlhrLlhaXmiJbmj5Dlj5bmlbDlrZfotYTkuqfjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gMy4xLjIg5pys572R5YWz5om/6K+65Li65oKo5o+Q5L6b55qE5YW25LuW5pyN5Yqh44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gMy4yLuacjeWKoeinhOWImTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IOaCqOaJv+ivuumBteWuiOS4i+WIl+acrOe9keWFs+acjeWKoeinhOWIme+8mjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjIuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5bqU5b2T6YG15a6I5rOV5b6L5rOV6KeE44CB6KeE56ug44CB5Y+K5pS/562W6KaB5rGC55qE6KeE5a6a77yM5L+d6K+B6LSm5oi35Lit5omA5pyJ5pWw5a2X6LWE5Lqn5p2l5rqQ55qE5ZCI5rOV5oCn77yM5LiN5b6X5Zyo5pys572R5YWz5oiW5Yip55So5pys572R5YWz5pyN5Yqh5LuO5LqL6Z2e5rOV5oiW5YW25LuW5o2f5a6z5pys572R5YWz5oiW56ys5LiJ5pa55p2D55uK55qE5rS75Yqo77yM5aaC5Y+R6YCB5oiW5o6l5pS25Lu75L2V6L+d5rOV44CB6L+d6KeE44CB5L6154qv5LuW5Lq65p2D55uK55qE5L+h5oGv77yM5Y+R6YCB5oiW5o6l5pS25Lyg6ZSA5p2Q5paZ5oiW5a2Y5Zyo5YW25LuW5Y2x5a6z55qE5L+h5oGv5oiW6KiA6K6677yM5pyq57uP5pys572R5YWz5o6I5p2D5L2/55So5oiW5Lyq6YCg5pys572R5YWz55S15a2Q6YKu5Lu26aKY5aS05L+h5oGv562J44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjIuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5Zyo5L2/55So5pys572R5YWz5pyN5Yqh5LmL5YmN5bqU5YWF5YiG5LqG6Kej5q+U54m56IKh6LSm5Y+355qE5L2/55So5bi46K+G77yM5YGa5aW955u45bqU6LSm5Y+355qE5aSH5Lu95Y+K5a+G56CB5L+d5a2Y5bel5L2c77yM5a+55LqO5q+U54m56IKh6LSm5oi35a6J5YWo6Zeu6aKY6YCg5oiQ55qE5o2f5aSx77yM5pys572R5YWz5LiN5om/5ouF5Lu75L2V6LSj5Lu744CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjIuM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5Zyo5L2/55So5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh6L+H56iL5Lit77yM5omA5Lqn55Sf55qE5bqU57qz56iO6LWL77yM5Lul5Y+K5LiA5YiH56Gs5Lu244CB6L2v5Lu244CB5pyN5Yqh5Y+K5YW25a6D5pa56Z2i55qE6LS555So77yM5Z2H55Sx5oKo54us6Ieq5om/5ouF44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjIuNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5bqU5b2T6YG15a6I5pys572R5YWz5LiN5pe25Y+R5biD5ZKM5pu05paw55qE5pys5Y2P6K6u5Lul5Y+K5YW25LuW5pyN5Yqh5p2h5qy+5ZKM5pON5L2c6KeE5YiZ77yM5pyJ5p2D6ZqP5pe257uI5q2i5L2/55So5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5Zub44CB5pys572R5YWz55qE5p2D5Yip5ZKM5LmJ5YqhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys572R5YWz5pyJ5p2D5Zyo5Y+R546w5pys572R5YWz5LiK5pi+56S655qE5Lu75L2V5L+h5oGv5a2Y5Zyo5piO5pi+6ZSZ6K+v5pe277yM5a+55L+h5oGv5LqI5Lul5pu05q2j44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOe9keWFs+S/neeVmemaj+aXtuS/ruaUueOAgeS4reatouaIlue7iOatouacrOe9keWFs+acjeWKoeeahOadg+WIqe+8jOacrOe9keWFs+ihjOS9v+S/ruaUueaIluS4reatouacjeWKoeeahOadg+WIqeS4jemcgOS6i+WFiOWRiuefpeaCqO+8m+acrOe9keWFs+e7iOatouacrOe9keWFs+S4gOmhueaIluWkmumhueacjeWKoeeahO+8jOe7iOatouiHquacrOe9keWFs+WcqOe9keWFs+S4iuWPkeW4g+e7iOatouWFrOWRiuS5i+aXpeeUn+aViOOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNC4zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKznvZHlhbPlupTlvZPph4flj5blv4XopoHnmoTmioDmnK/miYvmrrXlkoznrqHnkIbmjqrmlr3kv53pmpzmnKznvZHlhbPnmoTmraPluLjov5DooYzjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7kupTjgIHotZTlgb88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNS4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlnKjku7vkvZXmg4XlhrXkuIvvvIzmiJHku6zlr7nmgqjnmoTnm7TmjqXmjZ/lrrPnmoTotZTlgb/otKPku7vlnYfkuI3kvJrotoXov4fmgqjku47kvb/nlKjmnKznvZHlhbPmnI3liqHkuqfnlJ/nmoTkuLrmnJ/kuInvvIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDPvvInkuKrmnIjnmoTmgLvotLnnlKjjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7lha3jgIHlr7vmsYLnpoHku6TmlZHmtY7nmoTmnYPliKk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5ZKM5oKo5Z2H5om/6K6k5pmu6YCa5rOV5a+56L+d57qm5oiW5Y+v6IO96L+d57qm5oOF5Ya155qE5pWR5rWO5o6q5pa95piv5Y+v6IO95piv5LiN6Laz5Lul5byl6KGl5oiR5Lus6YGt5Y+X55qE5YWo6YOo5o2f5aSx55qE77yM5pWF6Z2e6L+d57qm5pa55pyJ5p2D5Zyo6L+d57qm5oiW5Y+v6IO96L+d57qm5oOF5Ya15LiL5a+75rGC56aB5Luk5pWR5rWO5Lul5Y+K5pmu6YCa5rOV5oiW6KGh5bmz5rOV5YWB6K6455qE5YW25LuW5omA5pyJ55qE6KGl5pWR5o6q5pa944CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiD44CB6LSj5Lu76ZmQ5Yi25LiO5YWN6LSjPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5LqG6Kej5bm25ZCM5oSP77yM5Zyo5Lu75L2V5oOF5Ya15LiL77yM5oiR5Lus5LiN5bCx5Lul5LiL5ZCE5LqL6aG55om/5ouF6LSj5Lu777yaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS4xIOaUtuWFpeeahOaNn+Wkse+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS4yIOS6pOaYk+WIqea2puaIluWQiOWQjOaNn+Wkse+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS4zIOS4muWKoeS4reaWrTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS40IOmihOacn+WPr+iKguecgeeahOi0p+W4geeahOaNn+Wkse+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS41IOS/oeaBr+eahOaNn+Wkse+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS42IOacuuS8muOAgeWVhuiqieaIluWjsOiqieeahOaNn+Wkse+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS43IOaVsOaNrueahOaNn+Wdj+aIluaNn+Wkse+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMS44IOi0reS5sOabv+S7o+S6p+WTgeaIluacjeWKoeeahOaIkOacrO+8mzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjEuOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lu75L2V55Sx5LqO5L615p2D77yI5YyF5ous6L+H5aSx77yJ44CB6L+d57qm5oiW5YW25LuW5Lu75L2V5Y6f5Zug5Lqn55Sf55qE6Ze05o6l55qE44CB54m55q6K55qE5oiW6ZmE5bim5oCn55qE5o2f5aSx5oiW5o2f5a6z77yM5LiN6K666L+Z56eN5o2f5aSx5oiW5o2f5a6z5piv5ZCm5Y+v5Lul5Li65oiR5Lus5ZCI55CG6aKE6KeB77yb5LiN6K665oiR5Lus5piv5ZCm5LqL5YWI6KKr5ZGK55+l5a2Y5Zyo5q2k56eN5o2fXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlpLHmiJbmjZ/lrrPnmoTlj6/og73mgKfjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5LqG6Kej5bm25ZCM5oSP77yM5oiR5Lus5LiN5a+55Zug5LiL6L+w5Lu75LiA5oOF5Ya16ICM5a+86Ie05oKo55qE5Lu75L2V5o2f5a6z6LWU5YG/5om/5ouF6LSj5Lu777yaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjIuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5pyJ5ZCI55CG55qE55CG55Sx6K6k5Li65oKo55qE5YW35L2T5Lqk5piT5LqL6aG55Y+v6IO95a2Y5Zyo6YeN5aSn6L+d5rOV5oiW6L+d57qm5oOF5b2i44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjIuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5pyJ5ZCI55CG55qE55CG55Sx6K6k5Li65oKo5Zyo5pys572R5YWz55qE6KGM5Li65raJ5auM6L+d5rOV5oiW5LiN5b2T44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjIuM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6YCa6L+H5pys572R5YWz5pyN5Yqh6LSt5Lmw5oiW6I635Y+W5Lu75L2V5pWw5o2u44CB5L+h5oGv5oiW6L+b6KGM5Lqk5piT562J6KGM5Li65oiW5pu/5Luj6KGM5Li65Lqn55Sf55qE6LS555So5Y+K5o2f5aSx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDcuMi40IOaCqOWvueacrOe9keWFs+acjeWKoeeahOivr+ino+OAgjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjIuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lu75L2V6Z2e5Zug5oiR5Lus55qE5Y6f5Zug6ICM5byV6LW355qE5LiO5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh5pyJ5YWz55qE5YW25a6D5o2f5aSx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaIkeS7rOWvueeUseS6juS/oeaBr+e9kee7nOiuvuWkh+e7tOaKpOOAgeS/oeaBr+e9kee7nOi/nuaOpeaVhemanOOAgeeUteiEkeOAgemAmuiur+aIluWFtuS7luezu+e7n+eahOaVhemanOOAgeeUteWKm+aVhemanOOAgeWkqeawlOWOn+WboOOAgeaEj+WkluS6i+aVheOAgee9ouW3peOAgeWKs+WKqOS6ieiuruOAgeaatOS5seOAgei1t+S5ieOAgemqmuS5seOAgeeUn+S6p+WKm+aIlueUn+S6p+i1hOaWmeS4jei2s+OAgeeBq+eBvuOAgea0quawtOOAgemjjuaatOOAgeeIhueCuOOAgeaImOS6ieOAgemTtuihjOaIluWFtuS7luWQiOS9nOaWueWOn+WboOOAgeaVsOWtl+i1hOS6p+W4guWcuuW0qea6g+OAgeaUv+W6nOihjOS4uuOAgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+45rOV5oiW6KGM5pS/5py65YWz55qE5ZG95Luk44CB5YW25LuW5LiN5Zyo5oiR5Lus5Y+v5o6n6IyD5Zu05YaF5oiW5oiR5Lus5peg6IO95Yqb5o6n5Yi255qE6KGM5Li65oiW56ys5LiJ5pa555qE5Y6f5Zug6ICM6YCg5oiQ55qE5LiN6IO95pyN5Yqh5oiW5bu26L+f5pyN5Yqh77yM5Lul5Y+K6YCg5oiQ55qE5oKo55qE5o2f5aSx77yM5oiR5Lus5LiN5om/5ouF5Lu75L2V6LSj5Lu744CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaIkeS7rOS4jeiDveS/neivgeacrOe9keWFs+WMheWQq+eahOWFqOmDqOS/oeaBr+OAgeeoi+W6j+OAgeaWh+acrOetieWujOWFqOWuieWFqO+8jOS4jeWPl+S7u+S9leeXheavkuOAgeacqOmprOetieaBtuaEj+eoi+W6j+eahOW5suaJsOWSjOegtOWdj++8jOaVheaCqOeZu+mZhuOAgeS9v+eUqOacrOe9keWFs+S7u+S9leacjeWKoeaIluS4i+i9veWPiuS9v+eUqOivpeS4i+i9veeahOS7u+S9leeoi+W6j+OAgeS/oeaBr+OAgeaVsOaNruetieWdh+aYr+aCqOS4quS6uueahOWGs+WumuW5tuiHquihjOaJv+aLhemjjumZqeWPiuWPr+iDveS6p+eUn+eahOaNn+WkseOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy41XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zlr7nmnKznvZHlhbPkuK3pk77mjqXnmoTku7vkvZXnrKzkuInmlrnnvZHlhbPnmoTku7vkvZXkv6Hmga/jgIHkuqflk4Hlj4rkuJrliqHlj4rlhbbku5bku7vkvZXlvaLlvI/nmoTkuI3lsZ7kuo7miJHku6znmoTkuLvkvZPnmoTlhoXlrrnnrYnkuI3lgZrku7vkvZXkv53or4Hlkozmib/or7rvvIzmgqjlpoLmnpzkvb/nlKjnrKzkuInmlrnnvZHlhbPmj5DkvpvnmoTku7vkvZXmnI3liqHjgIHkv6Hmga/lj4rkuqflk4HnrYnlnYfkuLrmgqjkuKrkurrlhrPlrprkuJTmib/mi4XnlLHmraTkuqfnlJ/nmoTkuIDliIfotKPku7vjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5a+55LqO5oKo5L2/55So5pys572R5YWz5pyN5Yqh5LiN5YGa5Lu75L2V5piO56S65oiW5pqX56S655qE5L+d6K+B77yM5YyF5ous5L2G5LiN6ZmQ5LqO5pys572R5YWz5o+Q5L6b5pyN5Yqh55qE6YCC55So5oCn44CB5rKh5pyJ6ZSZ6K+v5oiW55aP5ryP44CB5oyB57ut5oCn44CB5YeG56Gu5oCn44CB5Y+v6Z2g5oCn44CB6YCC55So5LqO5p+Q5LiA54m55a6a55So6YCU44CC5ZCM5pe277yM5oiR5Lus5Lmf5LiN5a+55pys572R5YWz5o+Q5L6b55qE5pyN5Yqh5omA5raJ5Y+K55qE5oqA5pyv5Y+K5L+h5oGv55qE5pyJ5pWI5oCn44CB5YeG56Gu5oCn44CB5q2j56Gu5oCn44CB5Y+v6Z2g5oCn44CB6LSo6YeP44CB56iz5a6a44CB5a6M5pW05ZKM5Y+K5pe25oCn5L2c5Ye65Lu75L2V5om/6K+65ZKM5L+d6K+B44CC5piv5ZCm55m76ZmG5oiW5L2/55So5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh5piv5oKo5Liq5Lq655qE5Yaz5a6a5LiU6Ieq6KGM5om/5ouF6aOO6Zmp5Y+K5Y+v6IO95Lqn55Sf55qE5o2f5aSx44CC5oiR5Lus5a+55LqO5pWw5a2X6LWE5Lqn55qE5biC5Zy644CB5Lu35YC85Y+K5Lu35qC8562J5LiN5YGa5Lu75L2V5piO56S65oiW5pqX56S655qE5L+d6K+B77yM5oKo55CG6Kej5bm25LqG6Kej5pWw5a2X6LWE5Lqn5biC5Zy65piv5LiN56iz5a6a55qE77yM5Lu35qC85ZKM5Lu35YC86ZqP5pe25Lya5aSn5bmF5rOi5Yqo5oiW5bSp55uY77yM5Lqk5piT5pWw5a2X6LWE5Lqn5piv5oKo5Liq5Lq655qE6Ieq55Sx6YCJ5oup5Y+K5Yaz5a6a5LiU6Ieq6KGM5om/5ouF6aOO6Zmp5Y+K5Y+v6IO95Lqn55Sf55qE5o2f5aSx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOWNj+iuruS4reinhOWumueahOaIkeS7rOeahOS/neivgeWSjOaJv+ivuuaYr+eUseaIkeS7rOWwseacrOWNj+iuruWSjOacrOe9keWFs+aPkOS+m+eahOacjeWKoeeahOWUr+S4gOS/neivgeWSjOmZiOi/sO+8jOW5tuWPluS7o+S7u+S9leWFtuS7lumAlOW+hOWSjOaWueW8j+S6p+eUn+eahOS/neivgeWSjOaJv+ivuu+8jOaXoOiuuuaYr+S5pumdoueahOaIluWPo+WktOeahO+8jOaYjuekuueahOaIluaal+ekuueahOOAguaJgOaciei/meS6m+S/neivgeWSjOmZiOi/sOS7heS7heS7o+ihqOaIkeS7rOiHqui6q+eahOaJv+ivuuWSjOS/neivge+8jOW5tuS4jeS/neivgeS7u+S9leesrOS4ieaWuemBteWuiOacrOWNj+iuruS4reeahOS/neivgeWSjOaJv+ivuuOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy44XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zlubbkuI3mlL7lvIPmnKzljY/orq7kuK3mnKrmj5Dlj4rnmoTlnKjms5XlvovpgILnlKjnmoTmnIDlpKfojIPlm7TlhoXmiJHku6zkuqvmnInnmoTpmZDliLbjgIHlhY3pmaTmiJbmirXplIDmiJHku6zmjZ/lrrPotZTlgb/otKPku7vnmoTku7vkvZXmnYPliKnjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5L2/55So5pys572R5YWz5pyN5Yqh5Y2z6KGo56S66K6k5Y+v5oiR5Lus5oyJ54Wn5pys5Y2P6K6u5Lit6KeE5a6a55qE6KeE5YiZ6L+b6KGM55qE5Lu75L2V5pON5L2c77yM5Lqn55Sf55qE5Lu75L2V6aOO6Zmp5Z2H55Sx5oKo5om/5ouF44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5YWr44CB55+l6K+G5Lqn5p2DPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDguMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys572R5YWz5omA5YyF5ZCr55qE5YWo6YOo5pm65Yqb5oiQ5p6c5YyF5ous5L2G5LiN6ZmQ5LqO572R5YWz5qCH5b+X44CB5pWw5o2u5bqT44CB572R5YWz6K6+6K6h44CB5paH5a2X5ZKM5Zu+6KGo44CB6L2v5Lu244CB54Wn54mH44CB5b2V5YOP44CB6Z+z5LmQ44CB5aOw6Z+z5Y+K5YW25YmN6L+w57uE5ZCI77yM6L2v5Lu257yW6K+R44CB55u45YWz5rqQ5Luj56CB5ZKM6L2v5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAo5YyF5ous5bCP5bqU55So56iL5bqP5ZKM6ISa5pysKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg55qE55+l6K+G5Lqn5p2D5p2D5Yip5Z2H5b2S5pys572R5YWz5omA5pyJ44CC5oKo5LiN5b6X5Li65ZWG5Lia55uu55qE5aSN5Yi244CB5pu05pS544CB5ou36LSd44CB5Y+R6YCB5oiW5L2/55So5YmN6L+w5Lu75L2V5p2Q5paZ5oiW5YaF5a6544CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4LjIg5pys572R5YWz5ZCN56ew5Lit5YyF5ZCr55qE5omA5pyJ5p2D5YipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAo5YyF5ous5L2G5LiN6ZmQ5LqO5ZWG6KqJ5ZKM5ZWG5qCH44CB5qCH5b+XKSDlnYflvZLlhazlj7jmiYDmnInjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDguM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5o6l5Y+X5pys5Y2P6K6u5Y2z6KeG5Li65oKo5Li75Yqo5bCG5YW25Zyo5pys572R5YWz5Y+R6KGo55qE5Lu75L2V5b2i5byP55qE5L+h5oGv55qE6JGX5L2c5p2D77yMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDljIXmi6zkvYbkuI3pmZDkuo7vvJrlpI3liLbmnYPjgIHlj5HooYzmnYPjgIHlh7rnp5/mnYPjgIHlsZXop4jmnYPjgIHooajmvJTmnYPjgIHmlL7mmKDmnYPjgIHlub/mkq3mnYPjgIHkv6Hmga/nvZHnu5zkvKDmkq3mnYPjgIHmkYTliLbmnYPjgIHmlLnnvJbmnYPjgIHnv7vor5HmnYPjgIHmsYfnvJbmnYNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS7peWPiuW6lOW9k+eUseiRl+S9nOadg+S6uuS6q+acieeahOWFtuS7luWPr+i9rOiuqeadg+WIqeaXoOWBv+eLrOWutui9rOiuqee7meacrOe9keWFs+aJgOacie+8jOacrOe9keWFs+acieadg+WIqeWwseS7u+S9leS4u+S9k+S+teadg+WNleeLrOaPkOi1t+ivieiuvOW5tuiOt+W+l+WFqOmDqOi1lOWBv+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5Y2P6K6u5pWI5Yqb5Y+K5LqO5oKo5Zyo5pys572R5YWz5Y+R5biD55qE5Lu75L2V5Y+X6JGX5L2c5p2D5rOV5L+d5oqk55qE5L2c5ZOB5YaF5a6577yMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDml6Dorrror6XlhoXlrrnlvaLmiJDkuo7mnKzljY/orq7nrb7orqLliY3ov5jmmK/mnKzljY/orq7nrb7orqLlkI7jgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDguNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5Zyo5L2/55So5pys572R5YWz5pyN5Yqh6L+H56iL5Lit5LiN5b6X6Z2e5rOV5L2/55So5oiW5aSE5YiG5pys572R5YWz5oiW5LuW5Lq655qE55+l6K+G5Lqn5p2D5p2D5Yip44CC5oKo5LiN5b6X5bCG5bey5Y+R6KGo5LqO5pys572R5YWz55qE5L+h5oGv5Lul5Lu75L2V5b2i5byP5Y+R5biD5oiW5o6I5p2D5YW25a6D572R5YWz77yI5Y+K5aqS5L2T77yJ5L2/55So44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4LjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaCqOS9v+eUqOacrOe9keWFs+aPkOS+m+eahOS7u+S9leacjeWKoeWdh+S4jeinhuS4uuaIkeS7rOWQkeaCqOi9rOiuqeS7u+S9leefpeivhuS6p+adg+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS5neOAgeWPr+WIhuWJsuaApzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlpoLmnKzljY/orq7kuK3nmoTku7vkvZXmnaHmrL7ooqvku7vkvZXmnInnrqHovpbmnYPnmoTms5XpmaLorqTlrprkuLrkuI3lj6/miafooYznmoTvvIzml6DmlYjnmoTmiJbpnZ7ms5XnmoTvvIzlubbkuI3lvbHlk43mnKzljY/orq7nmoTlhbbkvZnmnaHmrL7nmoTmlYjlipvjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ljYHjgIHpnZ7ku6PnkIblhbPns7s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5Y2P6K6u5Lit55qE5Lu75L2V6KeE5a6a5Z2H5LiN5Y+v6KKr6K6k5Li65Yib6YCg5LqG44CB5pqX56S65LqG5oiW5Lul5YW25LuW5pa55byP5bCG5oiR5Lus6KeG5Li65oKo55qE5Luj55CG5Lq644CB5Y+X5omY5Lq65oiW5YW25LuW5Luj6KGo5Lq677yM5pys5Y2P6K6u5pyJ5YW25LuW6KeE5a6a55qE6Zmk5aSW44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5Y2B5LiA44CB5byD5p2DPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaIkeS7rOaIluaCqOS7u+S9leS4gOaWueWvuei/veeptuacrOWNj+iurue6puWumueahOi/nee6pui0o+S7u+aIluWFtuS7lui0o+S7u+eahOW8g+adg+W5tuS4jeiDveiupOWumuaIluino+mHiuS4uuWvueWFtuS7lui/nee6pui0o+S7u+eahOW8g+adg++8m+acquihjOS9v+S7u+S9leadg+WIqeaIluaVkea1juS4jeW+l+S7peS7u+S9leaWueW8j+iiq+ino+mHiuS4uuWvueivpeetieadg+WIqeaIluaVkea1jueahOaUvuW8g+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuWNgeS6jOOAgeagh+mimDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiYDmnInmoIfpopjku4XkvpvljY/orq7ooajov7Dmlrnkvr/vvIzlubbkuI3nlKjkuo7mianlpKfmiJbpmZDliLbor6XljY/orq7mnaHmrL7nmoTlhoXlrrnmiJbojIPlm7TjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ljYHkuInjgIHpgILnlKjms5Xlvos8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5Y2P6K6u5YWo6YOo5YaF5a655Z2H5Li65qC55o2u5paw5Yqg5Z2h5YWx5ZKM5Zu95rOV5b6L6K6i56uL55qE5ZCI5ZCM77yM5YW25oiQ56uL44CB6Kej6YeK44CB5YaF5a655Y+K5omn6KGM5Z2H6YCC55So5paw5Yqg5Z2h5YWx5ZKM5Zu955u45YWz5rOV5b6L6KeE5a6a77yb5Lu75L2V5Zug5oiW5LiO5pys5Y2P6K6u57qm5a6a55qE5pyN5Yqh5pyJ5YWz6ICM5Lqn55Sf55qE57Si6LWU5oiW6K+J6K6877yM6YO95bqU5L6d54Wn5paw5Yqg5Z2h5YWx5ZKM5Zu955qE5rOV5b6L6L+b6KGM566h6L6W5bm25Yqg5Lul6Kej6YeK5ZKM5omn6KGM44CC5Li66YG/5YWN55aR5LmJ77yM6L+Z5LiA5p2h5qy+5piO56Gu6YCC55So5LqO5Lu75L2V6ZKI5a+55oiR5Lus55qE5L615p2D57Si6LWU44CC5Lu75L2V6ZKI5a+55oiR5Lus5oiW6ICF5piv5ZKM5oiR5Lus5pyJ5YWz55qE57Si6LWU5oiW6K+J6K6855qE566h6L6W5rOV6Zmi5oiW6K+J6K685Zyw5Z2H5Zyo5paw5Yqg5Z2h5YWx5ZKM5Zu944CC5oKo5peg5p2h5Lu25Zyw6I635b6X5Zyo5paw5Yqg5Z2h5YWx5ZKM5Zu95rOV6Zmi6L+b6KGM6K+J6K685ZKM5LiK6K+J55qE5o6S5LuW5oCn55qE566h6L6W5p2D44CC5oKo5Lmf5peg5p2h5Lu25Zyw5ZCM5oSP5LiO5pys5Y2P6K6u5qy+5pyJ5YWz55qE5LqJ6K6u5oiW6Zeu6aKY5oiW5Lqn55Sf55qE5Lu75L2V57Si6LWU6K+35rGC5ZKM6K+J6K6855qE5Y+R55Sf5Zyw5oiW5rOV6Zmi5Z2H5o6S5LuW5oCn5b6X5Zyo5paw5Yqg5Z2h5YWx5ZKM5Zu944CC5LiN5pa55L6/5rOV6Zmi55qE5Y6f5YiZ5LiN6YCC55So5LqO5qC55o2u5pys5pyN5Yqh5p2h5qy+55qE6YCJ5oup55qE5rOV6Zmi44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5Y2B5Zub44CB5Y2P6K6u55qE55Sf5pWI5ZKM6Kej6YeKPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE0LjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOWNj+iuruS6juaCqOeCueWHu+acrOe9keWFs+azqOWGjOmhtemdoueahOWQjOaEj+azqOWGjOW5tuWujOaIkOazqOWGjOeoi+W6j+OAgeiOt+W+l+acrOe9keWFs+i0puWPt+WSjOWvhueggeaXtueUn+aViO+8jOWvueacrOe9keWFs+WSjOaCqOWdh+WFt+aciee6puadn+WKm+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE0LjIg5pys5Y2P6K6u55qE5pyA57uI6Kej6YeK5p2D5b2S5pys572R5YWz5omA5pyJ44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFncmVlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlNlcnZpY2UgQWdyZWVtZW50PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPQlNJRElBTiBURUNITk9MT0dZIENPLiBQVEUuIExURC4gKGhlcmVpbmFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcnJlZCB0byBhcyB0aGUgJ0NvbXBhbnknKSBpcyBhIGNvbXBhbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY29ycG9yYXRlZCB1bmRlciB0aGUgbGF3cyBpbiBTaW5nYXBvcmUgUmVwdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHREVYIChoZXJlaW5hZnRlciByZWZlcnJlZCB0byBhcyAnR0RFWCcgb3IgJ3RoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2F0ZXdheScpIGlzIGEgY3J5cHRvY3VycmVuY3kgZ2F0ZXdheSB0byBCaXRzaGFyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIGlzIG9wZXJhdGVkIGJ5IHRoZSBjb21wYW55LiBUaGUgbWFpbiBhY2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50IGZvciBHREVYIGlzIGh0dHBzOi8vZ2RleC5pbywgR0RFWCBpcyBhIGdhdGV3YXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgcHJvdmlkZSBjcnlwdG9jdXJyZW5jeSBkZXBvc2l0IGFuZCB3aXRoZHJhd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSAoaGVyZWluYWZ0ZXIgcmVmZXJyZWQgdG8gYXMgJ3RoZSBTZXJ2aWNlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvL2Zyb20gQml0c2hhcmVzLiBGb3IgdGhlIGNvbnZlbmllbmNlIG9mIHdvcmRpbmcgaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgQWdyZWVtZW50LCB0aGUgQ29tcGFueSBhbmQgdGhlIEdhdGV3YXkgYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcnJlZCB0byBhcyAnV2UnIG9yIG90aGVyIGFwcGxpY2FibGUgZm9ybXMgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0IHBlcnNvbiBwcm9ub3VucyBpbiB0aGlzIEFncmVlbWVudC4gQWxsIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbnMgb3Igb3RoZXIgc3ViamVjdHMgd2hvIHVzZSB0aGUgU2VydmljZSBzaGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgdXNlcnMgb2YgdGhlIEdhdGV3YXkuIEZvciB0aGUgY29udmVuaWVuY2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRpbmcgaW4gdGhpcyBBZ3JlZW1lbnQsIHRoZSB1c2VycyBhcmUgcmVmZXJyZWQgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzICdZb3UnIG9yIGFueSBvdGhlciBhcHBsaWNhYmxlIGZvcm1zIG9mIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kLXBlcnNvbiBwcm9ub3Vucy4gRm9yIHRoZSBjb252ZW5pZW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZGluZyBpbiB0aGlzIEFncmVlbWVudCwgeW91IGFuZCB1cyBhcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RpdmVseSByZWZlcnJlZCB0byBhcyAnYm90aCBwYXJ0aWVzJywgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsbHkgYXMgJ29uZSBwYXJ0eScuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW1wb3J0YW50IHJlbWluZGVyOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgaGVyZWJ5IHJlbWluZCB5b3UgdGhhdDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4gVGhlIGRpZ2l0YWwgYXNzZXRzIHRoZW1zZWx2ZXMgYXJlIG5vdCBvZmZlcmVkIGJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnkgZmluYW5jaWFsIGluc3RpdHV0aW9uLCBjb3Jwb3JhdGlvbiBvciB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhdGV3YXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLiBUaGUgZGlnaXRhbCBhc3NldCBtYXJrZXQgaXMgbmV3IGFuZCB1bmNvbmZpcm1lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB3aWxsIG5vdCBuZWNlc3NhcmlseSBleHBhbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLiBEaWdpdGFsIGFzc2V0cyBhcmUgcHJpbWFyaWx5IHVzZWQgYnkgc3BlY3VsYXRvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYXJlIHVzZWQgcmVsYXRpdmVseSBsZXNzIG9uIHJldGFpbCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lcmNpYWwgbWFya2V0czsgZGlnaXRhbCBhc3NldCB0cmFuc2FjdGlvbnMgYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobHkgcmlza3ksIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHRoZXkgYXJlIHRyYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3VnaG91dCAyNC1ob3VyIGEgZGF5IHdpdGhvdXQgbGltaXRzIG9uIHRoZSByaXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBmYWxsIGluIHByaWNlLCBhbmQgbWFya2V0IG1ha2VycyBhbmQgZ2xvYmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb3Zlcm5tZW50IHBvbGljaWVzIG1heSBjYXVzZSBtYWpvciBmbHVjdHVhdGlvbnMgaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIHByaWNlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuIERpZ2l0YWwgYXNzZXQgdHJhbnNhY3Rpb25zIG1heSBiZSBzdXNwZW5kZWQgb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2hpYml0ZWQgYXQgYW55IHRpbWUgZHVlIHRvIHRoZSBlbmFjdG1lbnQgb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhdGlvbiBvZiBuYXRpb25hbCBsYXdzLCByZWd1bGF0aW9ucyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXRvcnkgZG9jdW1lbnRzLiBEaWdpdGFsIGFzc2V0cyB0cmFkaW5nIGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobHkgcmlza3kgYW5kIHRoZXJlZm9yZSBub3Qgc3VpdGFibGUgZm9yIHRoZSB2YXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWpvcml0eSBvZiBwZW9wbGUuIFlvdSBhY2tub3dsZWRnZSBhbmQgdW5kZXJzdGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBpbnZlc3RtZW50IGluIGRpZ2l0YWwgYXNzZXRzIG1heSByZXN1bHQgaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwgb3IgdG90YWwgbG9zcyBvZiB5b3VyIGludmVzdG1lbnQgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVyZWZvcmUgeW91IGFyZSBhZHZpc2VkIHRvIGRlY2lkZSB0aGUgYW1vdW50IG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIGludmVzdG1lbnQgb24gdGhlIGJhc2lzIG9mIHlvdXIgbG9zcy1iZWFyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eS4gWW91IGFja25vd2xlZGdlIGFuZCB1bmRlcnN0YW5kIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0YWwgYXNzZXRzIG1heSBnZW5lcmF0ZSBkZXJpdmF0aXZlIHJpc2tzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmVmb3JlLCBpZiB5b3UgaGF2ZSBhbnkgZG91YnQsIHlvdSBhcmUgYWR2aXNlZCB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VlayBhc3Npc3RhbmNlIGZyb20gYSBmaW5hbmNpYWwgYWR2aXNlciBmaXJzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1cnRoZXJtb3JlLCBhc2lkZSBmcm9tIHRoZSBhYm92ZS1tZW50aW9uZWQgcmlza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVyZSBtYXkgYWxzbyBiZSB1bnByZWRpY3RhYmxlIHJpc2tzLiBUaGVyZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgYXJlIGFkdmlzZWQgdG8gY2FyZWZ1bGx5IGNvbnNpZGVyIGFuZCB1c2UgY2xlYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1ZGdtZW50IHRvIGFzc2VzcyB5b3VyIGZpbmFuY2lhbCBwb3NpdGlvbiBhbmQgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm92ZW1lbnRpb25lZCByaXNrcyBiZWZvcmUgbWFraW5nIGFueSBkZWNpc2lvbnMgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eWluZyBhbmQgc2VsbGluZyBkaWdpdGFsIGFzc2V0czsgYW55IGFuZCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvc3NlcyBhcmlzaW5nIHRoZXJlZnJvbSB3aWxsIGJlIGJvcm5lIGJ5IHlvdSBhbmQgd2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsIG5vdCBiZSBoZWxkIGxpYWJsZSBpbiBhbnkgbWFubmVyIHdoYXRzb2V2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LiBZb3UgdW5kZXJzdGFuZCB0aGF0IEJpdHNoYXJlcyBpcyBhIGRlY2VudHJhbGl6ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2hhbmdlIGJhc2VkIG9uIGJsb2NrY2hhaW4sIHRoZSBiYXNpYyBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlIGFuZCB0aGUgdHJhZGUgcHJvY2Vzc2luZyBzZXJ2aWNlIGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQgYnkgQml0c2hhcmVzLCB0aGVyZSBhcmUgYWxzbyBvdGhlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGl0dXRpb25zIG9yIHNpbmdsZSBwZXJzb25zIHRoYXQgaXNzdWUgYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQvb3IgcHJvdmlkZSBzZXJ2aWNlIG9uIEJpdHNoYXJlcy4gWW91IHVuZGVyc3RhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgdGhlIEdhdGV3YXkgaXMgb25seSB1c2VkIGZvciB5b3UgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXQvd2l0aGRyYXcgY3J5cHRvY3VycmVuY3kgdG8vZnJvbSBCaXRzaGFyZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgR2F0ZXdheSBvbmx5IHVuZGVydGFrZSB0aGUgZHVlIG9ibGlnYXRpb25zIGZvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGF2YWlsYWJpbGl0eSBvZiBvd24gaXNzdWVkIGFzc2V0cyAod2l0aCAnR0RFWC4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyBwcmVmaXggb2YgdGhlIG5hbWUpLCBkbyBub3QgdW5kZXJ0YWtlIHRoZSBkdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlnYXRpb25zIGZvciB0aGUgYWNjb3VudCBzZXJ2aWNlIGFuZCB0aGUgdHJhZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmcgc2VydmljZSBwcm92aWRlZCBieSBCaXRzaGFyZXMsIGRvIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJ0YWtlIHRoZSBkdWUgb2JsaWdhdGlvbnMgZm9yIGF2YWlsYWJpbGl0eSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGFzc2V0cyBpc3N1ZWQgYnkgb3RoZXIgaW5zdGl0dXRpb25zIG9yIHNpbmdsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29ucy57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA2LiBUaGVyZSBhcmUgcmlzayBpbiBib3RoIEludGVybmV0IGFuZCBCaXRzaGFyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlIGJ1dCBub3QgbGltaXQgdG8gZmFpbHVyZSBmb3Igc29mdHdhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXJkd2FyZSB0byBjb25uZWN0IHRvIEludGVybmV0LCBzZWN1cml0eSByaXNrIGZvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQml0c2hhcmVzIGFjY291bnRpbmcgc3lzdGVtLiBBcyB0aGUgYXZhaWxhYmlsaXR5IGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsaWFiaWxpdHkgb2YgSW50ZXJuZXQgYW5kIEJpdHNoYXJlcyBhcmUgbm90IHVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXIgY29udHJvbCwgd2UgZG8gbm90IHVuZGVydGFrZSBvYmxpZ2F0aW9ucyBmb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3NzIGNhdXNlZCBieSB0aGUgcmlza3MgbWVudGlvbmVkIGFib3ZlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy5pdCBpcyBwcm9oaWJpdGVkIHRvIHVzZSB0aGUgR2F0ZXdheSBmb3IgbW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdW5kZXJpbmcsIHNtdWdnbGluZywgYnJpYmVyee+8jGlmIGFueSB1c2VyIGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgcmVsZXZhbnQgdG8gdGhlc2UgYWN0aW9ucywgdGhlIEdhdGV3YXkgd2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZSB2YXJpb3VzIGFjdGlvbnMsIGluY2x1ZGUgYnV0IG5vdCBsaW1pdGVkIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hdGluZyB0aGUgU2VydmljZSB0byB0aGUgdXNlciwgaW5mb3JtaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxldmFudCBhdXRob3JpdHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7bG9jYWxlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IG1zZyA9IHRoaXMuX2dldEFncmVlbWVudChsb2NhbGUpO1xyXG4gICAgICAgIHJldHVybiBtc2c7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoR2RleEFncmVlbWVudE1vZGFsLCB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3NcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KTtcclxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUZBO0FBaUJBO0FBQ0E7OztBQUNBO0FBQ0E7QUEyQkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUdBO0FBS0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFoQkE7QUFKQTtBQWtDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQVpBO0FBMkJBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUE5QkE7QUFzQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQTNFQTtBQUpBO0FBQ0E7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFvREE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQWRBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBTkE7QUFUQTtBQXpCQTtBQURBO0FBdURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUEzSEE7QUFMQTtBQTZJQTs7OztBQXZnQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUFrZ0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQVBBO0FBQ0E7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFoQ0E7QUFrQ0E7QUF2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQUhBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBT0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVZBO0FBREE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQU5BO0FBTEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBTkE7QUFMQTtBQWZBO0FBREE7QUFQQTtBQTFCQTtBQW9FQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFKQTtBQXRCQTtBQXFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBaEJBO0FBOEJBO0FBN0NBO0FBdkNBO0FBdEVBO0FBaUtBOzs7O0FBN1NBO0FBQ0E7QUErU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXVCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFKQTtBQVBBO0FBTEE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQTFFQTtBQURBO0FBREE7QUFMQTtBQTRHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBVkE7QUFEQTtBQURBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFEQTtBQUZBO0FBREE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQURBO0FBaEJBO0FBREE7QUErQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBWkE7QUFoQ0E7QUFqQ0E7QUE3R0E7QUFtTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBSkE7QUFQQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFQQTtBQUxBO0FBdkRBO0FBREE7QUFEQTtBQUxBO0FBMkZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTEE7QUFEQTtBQVpBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBVEE7QUFsSEE7QUFzSkE7QUFDQTs7OztBQTFqQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFDQTtBQUNBO0FBMGpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNobEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBNUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUE0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXBCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFrQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUE0QkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBY0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFrQ0E7QUFjQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQVZBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVUE7QUFDQTtBQXZCQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBekJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQTdHQTtBQUFBO0FBQ0E7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFEQTtBQUxBO0FBWEE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBVkE7QUFEQTtBQURBO0FBbENBO0FBcURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXJCQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUEE7QUFQQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF4QkE7QUE0QkE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBYkE7QUFvQkE7QUFwS0E7QUFKQTtBQTRLQTs7OztBQXIxQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7QUFxMUJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTs7Ozs7Ozs7O0FDLzJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTs7OztBQTlCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQU9BOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBMEJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUZBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBRkE7QUE1QkE7QUF5Q0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVhBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWRBO0FBcUJBO0FBOURBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFWQTtBQURBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUxBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQU5BO0FBTEE7QUFmQTtBQURBO0FBUEE7QUF0QkE7QUErREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQVZBO0FBYkE7QUFpQ0E7QUFwR0E7QUF1R0E7Ozs7QUFsbEJBO0FBQ0E7QUFvbEJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7Ozs7Ozs7O0FDam5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBTEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBUEE7QUFMQTtBQXhFQTtBQURBO0FBREE7QUFMQTtBQXdHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFQQTtBQURBO0FBbEJBO0FBOEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBUkE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBUEE7QUFEQTtBQWxCQTtBQWhDQTtBQURBO0FBa0VBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFYQTtBQWNBO0FBZEE7QUFuRUE7QUExQkE7QUF6R0E7QUEwTkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQUxBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFQQTtBQUxBO0FBckRBO0FBREE7QUFEQTtBQUxBO0FBcUZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTEE7QUFEQTtBQVpBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBVEE7QUE1R0E7QUF5SUE7QUFDQTs7OztBQXhrQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBWUE7QUFEQTtBQUNBO0FBK2pCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7Ozs7QUFmQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7OztBQzVtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBdkJBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFtQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQVFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTRCQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWtDQTtBQVNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFVQTtBQUNBO0FBdkJBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF6QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFuQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFuSUE7QUFBQTtBQUNBO0FBb0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBREE7QUFMQTtBQVhBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBdkNBO0FBb0RBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXJCQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUEE7QUFQQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUExQkE7QUE4QkE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUFnQkE7QUFqS0E7QUFKQTtBQXlLQTs7OztBQTU2QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBNDZCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdDhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTs7O0FBa0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVkE7QUFGQTtBQWVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BO0FBUUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBTUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCQTtBQXdCQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFGQTtBQUhBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUtBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUFYQTtBQWZBO0FBREE7QUFzREE7Ozs7QUExUkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUErUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbFNBO0FBcVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBaEJBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekdBO0FBNVNBO0FBZ2FBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFwY0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUFvY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7QUM3Y0E7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9