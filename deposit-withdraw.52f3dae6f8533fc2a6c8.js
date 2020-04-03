(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[31],{

/***/ 3029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(585);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2151);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(586);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2018);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2019);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2179);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(568);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(740);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(741);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3030);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2146);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2156);
/* harmony import */ var _DepositWithdraw_gdex_GdexGateway__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3040);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2364);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2408);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2495);
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

/***/ 3030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3031);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(740);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(741);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2818);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2973);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(542);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(755);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2002);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2929);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2913);
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

/***/ 3031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(435);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2019);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3032);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3033);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3035);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3036);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3034);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2145);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2469);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(586);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3037);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2149);
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

/***/ 3032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(845);
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

/***/ 3033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2019);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(586);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2161);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2954);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(584);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3034);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1901);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(740);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(435);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(612);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(613);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(751);
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
                withdraw_publicKey: new_withdraw_publicKey
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
                        withdraw_publicKey: json.hasOwnProperty("publicKey") ? json.publicKey : ""
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(442).Buffer))

/***/ }),

/***/ 3034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoinList", function() { return fetchCoinList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(744);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(746);


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

/***/ 3035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2145);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2018);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2019);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2161);
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

/***/ 3036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(620);
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

/***/ 3040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_gdexMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3041);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2002);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GdexGatewayInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3042);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1901);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(740);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(741);
/* harmony import */ var _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3043);
/* harmony import */ var _GdexHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3045);
/* harmony import */ var _GdexAgreementModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3046);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var NodeRSA = __webpack_require__(3047);
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

/***/ 3041:
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(744);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(746);



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

/***/ 3042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2019);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2145);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2469);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3035);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2018);
/* harmony import */ var _lib_common_GdexCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3043);
/* harmony import */ var _lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3041);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2379);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GdexWithdrawModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3044);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(845);
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

/***/ 3043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(744);
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

/***/ 3044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2019);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(586);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2161);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2954);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(584);
/* harmony import */ var common_gdexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3041);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1901);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(740);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(435);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(612);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(613);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(751);
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

/***/ 3045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1909);
/* harmony import */ var _lib_common_gdexMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3041);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(845);
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

/***/ 3046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(740);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2787);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(845);
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

/***/ 3092:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3095:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy41MmYzZGFlNmY4NTMzZmMyYTZjOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L0Rpc2FibGVDb3B5VGV4dC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QmFsYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEdhdGV3YXkuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2NvbW1vbi9nZGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEdhdGV3YXlJbmZvLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9jb21tb24vR2RleENhY2hlLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvZ2RleC9HZGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9nZGV4L0dkZXhIaXN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEFncmVlbWVudE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBhY2NvdW50VXRpbHMgZnJvbSBcImNvbW1vbi9hY2NvdW50X3V0aWxzXCI7XG5pbXBvcnQge3VwZGF0ZUdhdGV3YXlCYWNrZXJzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlVdGlsc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbi8vaW1wb3J0IE9wZW5sZWRnZXJHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvT3BlbmxlZGdlckdhdGV3YXlcIjtcbi8vaW1wb3J0IE9wZW5MZWRnZXJGaWF0RGVwb3NpdFdpdGhkcmF3YWwgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL09wZW5MZWRnZXJGaWF0RGVwb3NpdFdpdGhkcmF3YWxcIjtcbi8vaW1wb3J0IE9wZW5MZWRnZXJGaWF0VHJhbnNhY3Rpb25IaXN0b3J5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeVwiO1xuLy9pbXBvcnQgQmxvY2tUcmFkZXNCcmlkZ2VEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2Jsb2NrdHJhZGVzL0Jsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3RcIjtcbi8vaW1wb3J0IENpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2NpdGFkZWwvQ2l0YWRlbEJyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbi8vaW1wb3J0IHtvcGVubGVkZ2VyQVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcbmltcG9ydCBSdURleEdhdGV3YXkgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXlcIjtcbmltcG9ydCBHYXRld2F5U3RvcmUgZnJvbSBcInN0b3Jlcy9HYXRld2F5U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG4vL2ltcG9ydCBCaXRzcGFya0dhdGV3YXkgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9iaXRzcGFyay9CaXRzcGFya0dhdGV3YXlcIjtcbmltcG9ydCBHZGV4R2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L2dkZXgvR2RleEdhdGV3YXlcIjtcbi8vaW1wb3J0IFhidHN4R2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L3hidHN4L1hidHN4R2F0ZXdheVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IERlcG9zaXRNb2RhbCBmcm9tIFwiLi4vTW9kYWwvRGVwb3NpdE1vZGFsXCI7XG5pbXBvcnQgV2l0aGRyYXdNb2RhbCBmcm9tIFwiLi4vTW9kYWwvV2l0aGRyYXdNb2RhbE5ld1wiO1xuaW1wb3J0IFRyYW5zbGF0ZVdpdGhMaW5rcyBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGVXaXRoTGlua3NcIjtcblxuY2xhc3MgQWNjb3VudERlcG9zaXRXaXRoZHJhdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgY29udGFpbmVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb250YWluZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvbFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJvbFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhTZXJ2aWNlXCIsIFwiZ2F0ZXdheVwiKSxcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICBcImJpdHNwYXJrU2VydmljZVwiLFxuICAgICAgICAgICAgICAgIFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgeGJ0c3hTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwieGJ0c3hTZXJ2aWNlXCIsIFwiZ2F0ZXdheVwiKSxcbiAgICAgICAgICAgIGJ0U2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImJ0U2VydmljZVwiLCBcImJyaWRnZVwiKSxcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiY2l0YWRlbFNlcnZpY2VcIiwgXCJicmlkZ2VcIiksXG4gICAgICAgICAgICBtZXRhU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm1ldGFTZXJ2aWNlXCIsIFwiYnJpZGdlXCIpLFxuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZVNlcnZpY2VcIiwgMCksXG5cbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNlcnZpY2VzRG93biAhPT0gdGhpcy5wcm9wcy5zZXJ2aWNlc0Rvd24gfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUcmFkZXNCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNpdGFkZWxCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNpdGFkZWxCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLm9sU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5vbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5ydWRleFNlcnZpY2UgIT09IHRoaXMuc3RhdGUucnVkZXhTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYml0c3BhcmtTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmJpdHNwYXJrU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnhidHN4U2VydmljZSAhPT0gdGhpcy5zdGF0ZS54YnRzeFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5idFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYnRTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY2l0YWRlbFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuY2l0YWRlbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5tZXRhU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5tZXRhU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYWN0aXZlU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkICE9PVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFjY291bnRVdGlscy5nZXRGaW5hbEZlZUFzc2V0KHRoaXMucHJvcHMuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPTFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVJ1REVYU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlWGJ0c3hTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIHhidHN4U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVCaXRTcGFya1NlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUJUU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBidFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2l0YWRlbFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWV0YVNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBtZXRhU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNldFNlcnZpY2UoZSkge1xuICAgICAgICAvL2xldCBpbmRleCA9IHRoaXMuc3RhdGUuc2VydmljZXMuaW5kZXhPZihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2VydmljZXMoXG4gICAgICAgIG9wZW5MZWRnZXJHYXRld2F5Q29pbnMsXG4gICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zLFxuICAgICAgICBiaXRzcGFya0dhdGV3YXlDb2lucyxcbiAgICAgICAgeGJ0c3hHYXRld2F5Q29pbnNcbiAgICApIHtcbiAgICAgICAgLy9sZXQgc2VydmljZXMgPSBbXCJPcGVubGVkZ2VyIChPUEVOLlgpXCIsIFwiQmxvY2tUcmFkZXMgKFRSQURFLlgpXCIsIFwiVHJhbnN3aXNlclwiLCBcIkJpdEthcGl0YWxcIl07XG4gICAgICAgIGxldCBzZXJMaXN0ID0gW107XG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgb2xTZXJ2aWNlLFxuICAgICAgICAgICAgYnRTZXJ2aWNlLFxuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlLFxuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlLFxuICAgICAgICAgICAgeGJ0c3hTZXJ2aWNlLFxuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2UsXG4gICAgICAgICAgICBSdWRleE5vdGljZTFJbmZvcm1lZFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgYWdyZWVtZW50X3J1ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ3LWPQvtCz0LvQsNGI0LXQvdC40LUt0L7QsS3QvtC60LDQt9Cw0L3QuNC4LdGD0YHQu9GD0LMt0YjQu9GO0LfQsFwiO1xuICAgICAgICBsZXQgYWdyZWVtZW50X2VuID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ1LWdhdGV3YXktc2VydmljZS1hZ3JlZW1lbnRcIjtcblxuICAgICAgICBzZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJSdURFWCAoUlVERVguWClcIixcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiUlVERVhcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBzZWdtZW50ZWQgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVSdURFWFNlcnZpY2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVkZXhTZXJ2aWNlID09PSBcImZpYXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZpYXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtydWRleFNlcnZpY2UgPT09IFwiZ2F0ZXdheVwiICYmIHJ1ZGV4R2F0ZXdheUNvaW5zLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlID09IFwicnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFncmVlbWVudF9ydVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFncmVlbWVudF9lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25SdWRleE5vdGljZTFJbmZvcm1lZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMV9pbmZvcm1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVkZXhOb3RpY2UxSW5mb3JtZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2lucz17cnVkZXhHYXRld2F5Q29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguY29taW5nX3Nvb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJHREVYXCIsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBcIkdERVhcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEdkZXhHYXRld2F5IGFjY291bnQ9e2FjY291bnR9IHByb3ZpZGVyPXtcImdkZXhcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogICAgICAgIHNlckxpc3QucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcIkJpdFNwYXJrIChTUEFSS0RFWC5YKVwiLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogXCJTUEFSS0RFWFwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVCaXRTcGFya1NlcnZpY2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlID09PSBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2JpdHNwYXJrU2VydmljZSA9PT0gXCJnYXRld2F5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgYml0c3BhcmtHYXRld2F5Q29pbnMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaXRzcGFya0dhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM9e2JpdHNwYXJrR2F0ZXdheUNvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcj1cImJpdHNwYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pOyovXG5cbiAgICAgICAgcmV0dXJuIHNlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIHNlcnZpY2VzRG93bn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZVNlcnZpY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgb3BlbkxlZGdlckdhdGV3YXlDb2lucyA9IHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2luO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcnVkZXhHYXRld2F5Q29pbnMgPSB0aGlzLnByb3BzLnJ1ZGV4QmFja2VkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBiaXRzcGFya0dhdGV3YXlDb2lucyA9IHRoaXMucHJvcHMuYml0c3BhcmtCYWNrZWRDb2luc1xuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29pbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHhidHN4R2F0ZXdheUNvaW5zID0gdGhpcy5wcm9wcy54YnRzeEJhY2tlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2luO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2VydmljZXMgPSB0aGlzLnJlbmRlclNlcnZpY2VzKFxuICAgICAgICAgICAgb3BlbkxlZGdlckdhdGV3YXlDb2lucyxcbiAgICAgICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zLFxuICAgICAgICAgICAgYml0c3BhcmtHYXRld2F5Q29pbnMsXG4gICAgICAgICAgICB4YnRzeEdhdGV3YXlDb2luc1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHNlcnZpY2VOYW1lcyA9IFtdO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHNlcnZpY2VzLm1hcCgoc2VydmljZXNfb2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2VydmljZU5hbWVzLnB1c2goc2VydmljZXNfb2JqLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc19vYmoubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lc1thY3RpdmVTZXJ2aWNlXTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2VEb3duID0gc2VydmljZXNEb3duLmdldChjdXJyZW50U2VydmljZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250YWluZWQgPyBcImdyaWQtY29udGVudFwiIDogXCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbnRhaW5lZCA/IFwiXCIgOiBcImdyaWQtY29udGVudFwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJkZXBvc2l0X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cImRlcG9zaXRfbW9kYWxfbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VkQ29pbnM9e3RoaXMucHJvcHMuYmFja2VkQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ3aXRoZHJhd19tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJ3aXRoZHJhd19tb2RhbF9uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZWRDb2lucz17dGhpcy5wcm9wcy5iYWNrZWRDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZ2F0ZXdheS5waGFzZV9vdXRfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVwb3NpdF9tb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy5kZXBvc2l0X21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmRlcG9zaXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIndpdGhkcmF3X21vZGFsX2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLndpdGhkcmF3X21vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMud2l0aGRyYXdfbW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnRpdGxlXCIgY29tcG9uZW50PVwiaDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJkZXBvc2l0LXNob3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJyZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzbWFsbC1vcmRlci0yIG1lZGl1bS1vcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuc2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2V0U2VydmljZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlU2VydmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGdhdGV3YXkudW5hdmFpbGFibGVfJHtjdXJyZW50U2VydmljZU5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xIHNtYWxsLW9yZGVyLTEgbWVkaXVtLW9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA0MCwgd2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXJ2aWNlRG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aXZlU2VydmljZSAmJiBzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VydmljZXNbMF0udGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuQWNjb3VudERlcG9zaXRXaXRoZHJhdyA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudERlcG9zaXRXaXRoZHJhdyk7XG5cbmNsYXNzIERlcG9zaXRTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdXBkYXRlR2F0ZXdheUJhY2tlcnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QWNjb3VudERlcG9zaXRXaXRoZHJhdyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIERlcG9zaXRTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlLCBHYXRld2F5U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgb3BlbkxlZGdlckJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcnVkZXhCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlJVREVYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBiaXRzcGFya0JhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiU1BBUktERVhcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJsb2NrVHJhZGVzQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJUUkFERVwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2l0YWRlbEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiQ0lUQURFTFwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgeGJ0c3hCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlhCVFNYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlc0Rvd246IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmRvd24gfHwge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0IGZyb20gXCIuL1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKHByb3BzLCB7YWN0aW9uOiBcImRlcG9zaXRcIn0pLFxuICAgICAgICAgICAgYWN0aW9uOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhBY3Rpb25cIiwgXCJkZXBvc2l0XCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fcnVkZXhcIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJQUFlcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucHJvdmlkZXIgIT09IHRoaXMucHJvcHMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4obmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luX3J1ZGV4XyR7dGhpcy5zdGF0ZS5hY3Rpb259YF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH0qL1xuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX3J1ZGV4XCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVDb2luOiBhY3RpdmVDb2luXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7W1wicnVkZXhBY3Rpb25cIl06IHR5cGV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y29pbnMsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVDb2luLCBhY3Rpb259ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNvaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkQ29pbnMgPSBjb2lucy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICBpZiAoIWEgfHwgIWEuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICA/IGEuZGVwb3NpdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgOiBhLndpdGhkcmF3YWxBbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbk9wdGlvbnMgPSBmaWx0ZXJlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbDtcblxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gb3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeCA9IG5hbWUgPT09IFwiUFBZXCIgPyBcIlwiIDogXCJSVURFWC5cIjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3ByZWZpeCArIG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luID0gZmlsdGVyZWRDb2lucy5maWx0ZXIoY29pbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpID09PSBhY3RpdmVDb2luXG4gICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbCA9PT0gYWN0aXZlQ29pbjtcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgaWYgKCFjb2luKSBjb2luID0gZmlsdGVyZWRDb2luc1swXTtcblxuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gdGhpcy5zdGF0ZS5hY3Rpb24gPT09IFwiZGVwb3NpdFwiO1xuXG4gICAgICAgIGxldCBzdXBwb3J0VXJsID0gXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb21cIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW1hcmdpbiB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJnYXRld2F5LmNob29zZV9cIiArIGFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9XCJleHRlcm5hbC1jb2luLXR5cGVzIGJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvaW4uc3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXk9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyX2FjY291bnQ9e2NvaW4uaXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0PXtjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZT17Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZT17Y29pbi5iYWNraW5nQ29pbi50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2FjY291bnQ9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF93YWxsZXRfdHlwZT17Y29pbi53YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzX291dHB1dF9tZW1vcz17Y29pbi5zdXBwb3J0c01lbW9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1B1YmxpY0tleT17Y29pbi5zdXBwb3J0c1B1YmxpY0tleSB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1R5cGU9e2NvaW4ubWVtb1R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl9hbW91bnQ9e2NvaW4ubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRlRmVlPXtjb2luLmdhdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17Y29pbi5wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM9e2NvaW4uY29uZmlybWF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3VwcG9ydDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5zdXBwb3J0X2Jsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luICYmIGNvaW4uc3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Fzc2V0LCB0bywgZnJvbUFjY291bnR9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNMaXN0PXtJbW11dGFibGUuTGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucmVjZW50X1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB0by5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tQWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zYWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJ1RGV4R2F0ZXdheSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBEaXNhYmxlQ29weVRleHQgZnJvbSBcIi4uL0Rpc2FibGVDb3B5VGV4dFwiO1xuaW1wb3J0IFJ1RGV4V2l0aGRyYXdNb2RhbCBmcm9tIFwiLi9SdURleFdpdGhkcmF3TW9kYWxcIjtcbmltcG9ydCBBY2NvdW50QmFsYW5jZSBmcm9tIFwiLi4vLi4vQWNjb3VudC9BY2NvdW50QmFsYW5jZVwiO1xuaW1wb3J0IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xuaW1wb3J0IHtyZXF1ZXN0RGVwb3NpdEFkZHJlc3N9IGZyb20gXCJsaWIvY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHthdmFpbGFibGVHYXRld2F5c30gZnJvbSBcImxpYi9jb21tb24vZ2F0ZXdheXNcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBpc3N1ZXJfYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGRlcG9zaXRfYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9pbl9mYXZvcl9vZjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX21lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBzdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVtb1R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGFzc2V0X3ByZWNpc2lvbjogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3M6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzID0gdGhpcy5hZGREZXBvc2l0QWRkcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0RGVwb3NpdE9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRDb2luVHlwZTogdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dEFkZHJlc3M6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgc3RhdGVDYWxsYmFjazogdGhpcy5hZGREZXBvc2l0QWRkcmVzc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgIC8vICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKHRoaXMucHJvcHMuZ2F0ZXdheSwgYWNjb3VudF9uYW1lLCB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLCB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlKTtcbiAgICAvLyB9XG5cbiAgICBhZGREZXBvc2l0QWRkcmVzcyhyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NvdW50X25hbWV9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzfSk7XG4gICAgfVxuXG4gICAgZ2V0V2l0aGRyYXdNb2RhbElkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJ0aGlzLnByb3BzLmlzc3VlcjogXCIsIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQudG9KUygpIClcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwidGhpcy5yZWNlaXZlX2Fzc2V0Lmlzc3VlcjogXCIsIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC50b0pTKCkgKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJ3aXRoZHJhd19hc3NldF9cIiArXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZW1wdHlSb3cgPSA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCIsIG1pbkhlaWdodDogMTUwfX0gLz47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcblxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlc19vYmplY3QgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XG5cbiAgICAgICAgLy8gbGV0IGJhbGFuY2UgPSBcIjAgXCIgKyB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKSB7XG4gICAgICAgICAgICBsZXQgaGFzX25vbnplcm9fYmFsYW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0X2lkID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdF9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2Vfb2JqZWN0X2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSBiYWxhbmNlX29iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZSAhPSAwKSBoYXNfbm9uemVyb19iYWxhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc19ub256ZXJvX2JhbGFuY2UpIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBhY2NvdW50X2JhbGFuY2VzID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QudG9KUygpO1xuICAgICAgICAvLyBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcbiAgICAgICAgLy8gaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpO1xuICAgICAgICAvLyAgICAgaWYoIGN1cnJlbnRfYXNzZXRfaWQgKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGJhbGFuY2UgPSAoPHNwYW4+PFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiLz46IDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19Lz48L3NwYW4+KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLnN0YXRlLnJlY2VpdmVfYWRkcmVzcztcbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXBvc2l0Q29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucyAmJiB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImlycmV2ZXJzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5sYXN0X2lycmV2ZXJzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd2l0aGRyYXdfbW9kYWxfaWQgPSB0aGlzLmdldFdpdGhkcmF3TW9kYWxJZCgpO1xuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGRlcG9zaXRfbWVtbyA9IG51bGw7XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IDxzcGFuPnBsZWFzZSB1c2Uge3RoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZi5nZXQoXCJzeW1ib2xcIil9IGluc3RlYWQuIDxzcGFuIGRhdGEtdGlwPXt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfbWVzc2FnZX0gZGF0YS1wbGFjZT1cInJpZ2h0XCIgZGF0YS1odG1sPXt0cnVlfT48SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIiAvPjwvc3Bhbj48UmVhY3RUb29sdGlwIC8+PC9zcGFuPjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgbGV0IGNsaXBib2FyZFRleHQgPSBcIlwiO1xuICAgICAgICBsZXQgbWVtb1RleHQ7XG4gICAgICAgIGxldCB3aXRoZHJhd19tZW1vX3ByZWZpeDtcbiAgICAgICAgbGV0IGN1cnJlbnRHYXRld2F5ID0gXCJSVURFWFwiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIWF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5zaW1wbGVBc3NldEdhdGV3YXkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudH08L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50O1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5tZW1vVHlwZSAmJiB0aGlzLnByb3BzLm1lbW9UeXBlID09PSBcImJ0c2lkXCIpIHtcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmRfYnRzaWRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLnJlcGxhY2UoXCIxLjIuXCIsIFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1wiYXBwZW5kXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwb3NpdF9tZW1vID0gPHNwYW4+e21lbW9UZXh0fTwvc3Bhbj47XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUgKyBcIjpcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghcmVjZWl2ZV9hZGRyZXNzICYmICF0aGlzLnByb3BzLnN1cHBvcnRzTWVtb3MpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyBhIGRlcG9zaXQgbWVtbyAobGlrZSBldGhlcmV1bSksIHdlIG5lZWQgdG8gZGlzcGxheSBib3RoIHRoZSBhZGRyZXNzIGFuZCB0aGUgbWVtbyB0aGV5IG5lZWQgdG8gc2VuZFxuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLm1lbW87XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPntyZWNlaXZlX2FkZHJlc3MubWVtb308L3NwYW4+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyB1bmlxdWUgZGVwb3NpdCBhZGRyZXNzZXMgdG8gc2VsZWN0IHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3RoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0Q29uZmlybWF0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGk+e2RlcG9zaXRDb25maXJtYXRpb259PC9pPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwiLCBmb250U2l6ZTogXCIxLjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBRERSRVNTOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzYWJsZUNvcHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvcHlUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS51c2VfY29weV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfYWRkcmVzc19mcmFnbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9tZW1vID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb3B5VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkudXNlX2NvcHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1FTU86IDxiPntkZXBvc2l0X21lbW99PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXNhYmxlQ29weVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e2NsaXBib2FyZFRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtb1RleHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e21lbW9UZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPkNvcHkgbWVtbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b193aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPldoZW4geW91IHdpdGhkcmF3IHt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSwgeW91IHdpbGwgcmVjZWl2ZSB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fSBhdCBhIDE6MSByYXRpbyAobWludXMgZmVlcykuPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjEuM3JlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbldpdGhkcmF3LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X25vd1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnYXRld2F5LndpdGhkcmF3X2NvaW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW46IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleFdpdGhkcmF3TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyPXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fbmFtZT17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZT17dGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfd2FsbGV0X3R5cGU9e3RoaXMucHJvcHMuZGVwb3NpdF93YWxsZXRfdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNfbWVtb3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fcHJlZml4PXt3aXRoZHJhd19tZW1vX3ByZWZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbF9pZD17d2l0aGRyYXdfbW9kYWxfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17dGhpcy5wcm9wcy5taW5fYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e3RoaXMucHJvcHMuZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9wcmVjaXNpb249e3RoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIERpc2FibGVDb3B5VGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGRpc2FibGVDb3B5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICByZXBsYWNlQ29weVRleHQ6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNvcHkgPSB0aGlzLl9oYW5kbGVDb3B5LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRSZWYpIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuY2hpbGRSZWYpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLl9oYW5kbGVDb3B5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSAmJiB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2hhbmRsZUNvcHkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVDb3B5KGV2dCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVDb3B5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlQ29weVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5jbGlwYm9hcmREYXRhLnNldERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBsYWNlQ29weVRleHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gcmVmPXtyZWYgPT4gKHRoaXMuY2hpbGRSZWYgPSByZWYpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzYWJsZUNvcHlUZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IHt2YWxpZGF0ZUFkZHJlc3MsIFdpdGhkcmF3QWRkcmVzc2VzfSBmcm9tIFwiY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge2NoZWNrRmVlU3RhdHVzQXN5bmMsIGNoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcbmltcG9ydCB7UHJpY2UsIEFzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBSdURleFdpdGhkcmF3TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGlzc3VlcjogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX3N5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3V0cHV0X3dhbGxldF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvdXRwdXRfc3VwcG9ydHNfbWVtb3M6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgYW1vdW50X3RvX3dpdGhkcmF3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LFxuICAgICAgICBtaW5fYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBnYXRlRmVlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudF90b193aXRoZHJhdyxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbl9pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxuICAgICAgICAgICAgICAgIHByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleTogXCJcIixcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBwcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOlxuICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldChwcm9wcy5mZWVfYXNzZXRfc3ltYm9sKSB8fFxuICAgICAgICAgICAgXCIxLjMuMFwiLFxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MsIHByb3BzKTtcblxuICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UgPSB0aGlzLl9jaGVja0JhbGFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2hlY2tNaW5BbW91bnQgPSB0aGlzLl9jaGVja01pbkFtb3VudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUgPSBkZWJvdW5jZSh0aGlzLl91cGRhdGVGZWUuYmluZCh0aGlzKSwgMjUwKTtcblxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsID0gdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuTW91bnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5hY2NvdW50ICE9PSB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCAmJlxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnAuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBuZXcgQXNzZXQoe2Ftb3VudDogMH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29uZmlybWF0aW9uTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlRmVlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQge2ZlZV9hc3NldF9pZCwgZnJvbV9hY2NvdW50fSA9IHN0YXRlO1xuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlc1swXSAhPT0gZmVlX2Fzc2V0X2lkXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkID0gZmVlX2Fzc2V0X3R5cGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmcm9tX2FjY291bnQpIHJldHVybiBudWxsO1xuICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcbiAgICAgICAgICAgIGFjY291bnRJRDogZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgZmVlSUQ6IGZlZV9hc3NldF9pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoe2ZlZSwgaGFzQmFsYW5jZSwgaGFzUG9vbEJhbGFuY2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51bk1vdW50ZWQpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBhY2NvdW50ID0gc3RhdGUuZnJvbV9hY2NvdW50O1xuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzOiBhc3NldHN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgLy8gY29uc3QgYXNzZXRzID0gW1wiMS4zLjBcIiwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV07XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1lbW8gPyBcIjpcIiArIHN0YXRlLm1lbW8gOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICBQcm9taXNlLmFsbChwKVxuICAgICAgICAgICAgLnRoZW4oc3RhdHVzID0+IHtcbiAgICAgICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgoYSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thXSA9IHN0YXR1c1tpZHhdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1lbW9DaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogZS50YXJnZXQudmFsdWV9LCB0aGlzLl91cGRhdGVGZWUpO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXdBbW91bnRDaGFuZ2Uoe2Ftb3VudH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTpcbiAgICAgICAgICAgICAgICBhbW91bnQgIT09IHVuZGVmaW5lZCAmJiAhcGFyc2VGbG9hdChhbW91bnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja01pbkFtb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q2hhbmdlZChpbmRleCkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApW2luZGV4XTtcbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQoZSkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZChlKSB7XG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfcHVibGljS2V5ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleTogbmV3X3dpdGhkcmF3X3B1YmxpY0tleSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzLCBwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHtcbiAgICAgICAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgICAgICAgd2FsbGV0VHlwZTogcHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgbmV3QWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoanNvbikgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBqc29uID0ge2lzVmFsaWQ6IGZhbHNlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgPT09IG5ld193aXRoZHJhd19hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBqc29uLmlzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleToganNvbi5oYXNPd25Qcm9wZXJ0eShcInB1YmxpY0tleVwiKSA/IGpzb24ucHVibGljS2V5IDogXCJcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCB3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBiYWxhbmNlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghYmFsYW5jZSB8fCAhZmVlQW1vdW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGhhc0JhbGFuY2UgPSBjaGVja0JhbGFuY2UoXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGJhbGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGhhc0JhbGFuY2UgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xuICAgICAgICByZXR1cm4gaGFzQmFsYW5jZTtcbiAgICB9XG5cbiAgICBfY2hlY2tNaW5BbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHt3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAod2l0aGRyYXdfYW1vdW50ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxlc3NUaGFuTWluaW11bSA9XG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQgPFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24pO1xuICAgICAgICAvKiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKVxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbkFtb3VudEVycm9yOiBsZXNzVGhhbk1pbmltdW19KTtcbiAgICAgICAgcmV0dXJuIGxlc3NUaGFuTWluaW11bTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxuICAgICAgICAgICAgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFsOiBhbW91bnRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdENvbmZpcm1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwoKTtcblxuICAgICAgICBpZiAoIVdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xuICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHdpdGhkcmF3YWxzLmluZGV4T2YodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0O1xuICAgICAgICBsZXQgcHJlY2lzaW9uID0gdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihhc3NldC5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICBsZXQgYW1vdW50ID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIC8sL2csXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgZmVlX2Fzc2V0X2lkfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlci5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHBhcnNlSW50KGFtb3VudCAqIHByZWNpc2lvbiwgMTApLFxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgIDogXCJcIikgK1xuICAgICAgICAgICAgKHRoaXMuc3RhdGUubWVtb1xuICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Ecm9wRG93bkxpc3QoKSB7XG4gICAgICAgIGlmIChXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaXNfdmFsaWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiBmYWxzZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcbiAgICAgICAgcmV0dXJuIFwiY29uZmlybWF0aW9uXCI7XG4gICAgfVxuXG4gICAgb25BY2NvdW50QmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpKS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHRvdGFsID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpLFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgZmVlIGlmIGl0IGlzIHVzaW5nIHRoZSBzYW1lIGFzc2V0XG4gICAgICAgICAgICBpZiAodG90YWwuYXNzZXRfaWQgPT09IGZlZUFtb3VudC5hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIHRvdGFsLm1pbnVzKGZlZUFtb3VudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRvdGFsLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE5lc3RlZFJlZihyZWYpIHtcbiAgICAgICAgdGhpcy5uZXN0ZWRSZWYgPSByZWY7XG4gICAgfVxuXG4gICAgb25GZWVDaGFuZ2VkKHthc3NldH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZmVlU3RhdHVzfSA9IHN0YXRlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZlZVBvb2xCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzUG9vbEJhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcbiAgICAgICAgaWYgKCEoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFjY291bnRfYmFsYW5jZXMpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGtleSk7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgYXNzZXRzIHRoYXQgZG8gbm90IGhhdmUgdmFsaWQgY29yZSBleGNoYW5nZSByYXRlc1xuICAgICAgICAgICAgICAgIGxldCBwcmljZUlzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG5ldyBBc3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBwLmlzVmFsaWQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0LmdldChcImlkXCIpICE9PSBcIjEuMy4wXCIgJiYgIXByaWNlSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IGZlZV9hc3NldF90eXBlcy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGFzRmVlUG9vbEJhbGFuY2UoYSkgJiYgaGFzQmFsYW5jZShhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkLCB3aXRoZHJhd19wdWJsaWNLZXksIG1lbW99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHN0b3JlZEFkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcblxuICAgICAgICBsZXQgd2l0aGRyYXdNb2RhbElkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBudWxsO1xuICAgICAgICBsZXQgY29uZmlybWF0aW9uID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICFzdG9yZWRBZGRyZXNzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJydWRleC1kaXNhYmxlZC1vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicnVkZXgtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdG9yZWRBZGRyZXNzLm1hcChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENvbmZpcm1hdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuY29uZmlybWF0aW9uLnRpdGxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19pc192YWxpZClcbiAgICAgICAgICAgIC8vICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSA8SWNvbiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMuY2hlY2ttYXJrX2NpcmNsZS5vcGVyYXRpb25fc3VjY2VlZFwiIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIiAvPjtcbiAgICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAgIC8vICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSA8SWNvbiBuYW1lPVwiY3Jvc3MtY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5jcm9zc19jaXJjbGUub3BlcmF0aW9uX2ZhaWxlZFwiIGNsYXNzTmFtZT1cImFsZXJ0XCIgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtbyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzX21lbW9zKSB7XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIubWVtb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZW1vQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVzdGltYXRlIGZlZSBWQVJJQUJMRVNcbiAgICAgICAgbGV0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG5cbiAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X2Fzc2V0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7OiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXQtY3Vyc29yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjb3VudEJhbGFuY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWxhbmNlID0gXCJObyBmdW5kc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIwcHhcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcgYW1vdW50ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibW9kYWwud2l0aGRyYXcuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QW1vdW50Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtcHR5X3dpdGhkcmF3X3ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy52YWxpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWluQW1vdW50RXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50X2Vycm9yXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudD17dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRmVlIHNlbGVjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmVlQW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGdhdGVfZmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkNhbGxiYWNrPXt0aGlzLnNldE5lc3RlZFJlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5nZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtmZWVfYXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc0JhbGFuY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GZWVCYWxhbmNlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc1Bvb2xCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vUG9vbEJhbGFuY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7LyogR2F0ZSBmZWUgKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdhdGVGZWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yIHJpZ2h0LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmZlZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXNlbGVjdC1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25Ecm9wRG93bkxpc3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzk2NjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1wb3NpdGlvbi1vcHRpb25zXCI+e29wdGlvbnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW52YWxpZF9hZGRyZXNzX21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBmb3IgUHVibGljS2V5IGlucHV0IChleC5QUklaTSkgKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LnB1YmxpY19rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1zZWxlY3QtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfcHVibGljS2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNZW1vIGlucHV0ICovfVxuICAgICAgICAgICAgICAgICAgICB7d2l0aGRyYXdfbWVtb31cblxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcvQ2FuY2VsIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluQW1vdW50RXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnBlcm0uY2FuY2VsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybWF0aW9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUnVEZXhXaXRoZHJhd01vZGFsID0gQmluZFRvQ2hhaW5TdGF0ZShSdURleFdpdGhkcmF3TW9kYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJ1RGV4V2l0aGRyYXdNb2RhbCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJmZWVfYXNzZXRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IGxzIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge3J1ZGV4QVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcclxuY29uc3QgcnVkZXhTdG9yYWdlID0gbmV3IGxzKFwiXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29pbkxpc3QodXJsID0gcnVkZXhBUElzLkJBU0UgKyBydWRleEFQSXMuQ09JTlNfTElTVCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZDogXCJwb3N0XCJ9KVxyXG4gICAgICAgIC50aGVuKHJlcGx5ID0+XHJcbiAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmZXRjaGluZyBydWRleCBsaXN0IG9mIGNvaW5zXCIsIGVyciwgdXJsKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh7XHJcbiAgICBpbnB1dENvaW5UeXBlLFxyXG4gICAgb3V0cHV0Q29pblR5cGUsXHJcbiAgICBvdXRwdXRBZGRyZXNzLFxyXG4gICAgdXJsID0gcnVkZXhBUElzLkJBU0UsXHJcbiAgICBzdGF0ZUNhbGxiYWNrXHJcbn0pIHtcclxuICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgIGlucHV0Q29pblR5cGUsXHJcbiAgICAgICAgb3V0cHV0Q29pblR5cGUsXHJcbiAgICAgICAgb3V0cHV0QWRkcmVzc1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYm9keV9zdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHJcbiAgICBmZXRjaCh1cmwgKyBydWRleEFQSXMuTkVXX0RFUE9TSVRfQUREUkVTUywge1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvZHk6IGJvZHlfc3RyaW5nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICByZXBseSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBqc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwicmVwbHk6IFwiLCBqc29uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBqc29uLmlucHV0QWRkcmVzcyB8fCBcInVua25vd25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW86IGpzb24uaW5wdXRNZW1vLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGpzb24uZXJyb3IgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaykgc3RhdGVDYWxsYmFjayhhZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiZXJyb3I6IFwiLGVycm9yICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiZXJyb3I6IFwiLGVycm9yICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVDYWxsYmFjayh7YWRkcmVzczogXCJ1bmtub3duXCIsIG1lbW86IG51bGx9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnJvcjpcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWRkcmVzcyh7XHJcbiAgICB1cmwgPSBydWRleEFQSXMuQkFTRSxcclxuICAgIHdhbGxldFR5cGUsXHJcbiAgICBuZXdBZGRyZXNzXHJcbn0pIHtcclxuICAgIGlmICghbmV3QWRkcmVzcykgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiByZXMoKSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsICsgXCIvd2FsbGV0cy9cIiArIHdhbGxldFR5cGUgKyBcIi9jaGVjay1hZGRyZXNzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7YWRkcmVzczogbmV3QWRkcmVzc30pXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcGx5ID0+IHJlcGx5Lmpzb24oKS50aGVuKGpzb24gPT4ganNvbikpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRhdGUgZXJyb3I6XCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1dpdGhkcmF3YWxBZGRyZXNzKHdhbGxldCkge1xyXG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5oYXMoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh7d2FsbGV0LCBhZGRyZXNzZXN9KSB7XHJcbiAgICBydWRleFN0b3JhZ2Uuc2V0KGBoaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCwgYWRkcmVzc2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh3YWxsZXQpIHtcclxuICAgIHJldHVybiBydWRleFN0b3JhZ2UuZ2V0KGBoaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Moe3dhbGxldCwgYWRkcmVzc30pIHtcclxuICAgIHJ1ZGV4U3RvcmFnZS5zZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIGFkZHJlc3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XHJcbiAgICByZXR1cm4gcnVkZXhTdG9yYWdlLmdldChgaGlzdG9yeV9hZGRyZXNzX2xhc3RfJHt3YWxsZXR9YCwgXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXaXRoZHJhd0FkZHJlc3NlcyA9IHtcclxuICAgIGhhczogaGFzV2l0aGRyYXdhbEFkZHJlc3MsXHJcbiAgICBzZXQ6IHNldFdpdGhkcmF3YWxBZGRyZXNzZXMsXHJcbiAgICBnZXQ6IGdldFdpdGhkcmF3YWxBZGRyZXNzZXMsXHJcbiAgICBzZXRMYXN0OiBzZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3MsXHJcbiAgICBnZXRMYXN0OiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3NcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhIGJhbGFuY2Vfb2JqZWN0LCBkaXNwbGF5cyBpdCBpbiBhIHByZXR0eSB3YXlcclxuICpcclxuICogIEV4cGVjdHMgb25lIHByb3BlcnR5LCAnYmFsYW5jZScgd2hpY2ggc2hvdWxkIGJlIGEgYmFsYW5jZV9vYmplY3QgaWRcclxuICovXHJcblxyXG5jbGFzcyBBY2NvdW50QmFsYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBhc3NldF9pZCA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VfaWQgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgYXNzZXRfaWRdKTtcclxuXHJcbiAgICAgICAgaWYgKGJhbGFuY2VfaWQpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2VfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dGhpcy5wcm9wcy5yZXBsYWNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAwJm5ic3A7PEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dGhpcy5wcm9wcy5yZXBsYWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudEJhbGFuY2UpO1xyXG4iLCJpbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xyXG5cclxuY2xhc3MgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIGluY3JlbWVudCB0aGlzIHRvIGZvcmNlIGdlbmVyYXRpbmcgbmV3IGFkZHJlc3NlcyBmb3IgYWxsIG1hcHBpbmdzXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X3J1ZGV4X2FkZHJlc3NfY2FjaGVfdmVyc2lvbl9zdHJpbmcgPSBcIjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmRleEZvckRlcG9zaXRLZXlJbkV4Y2hhbmdlKFxyXG4gICAgICAgIGFjY291bnRfbmFtZSxcclxuICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9ydWRleF9hZGRyZXNzX2NhY2hlX3ZlcnNpb25fc3RyaW5nLFxyXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5jb25jYXQoXCJbXCIsIGN1cnJlbnQsIFwiXVwiKTtcclxuICAgICAgICB9LCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHtcImFkZHJlc3NcIjogYWRkcmVzcywgXCJtZW1vXCI6IG1lbW99LCB3aXRoIGEgbnVsbCBtZW1vIGlmIG5vdCBhcHBsaWNhYmxlXHJcbiAgICBnZXRDYWNoZWRJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgZXhjaGFuZ2VfbmFtZSxcclxuICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICkge1xyXG4gICAgICAgIGxldCB3YWxsZXQgPSBXYWxsZXREYi5nZXRXYWxsZXQoKTtcclxuICAgICAgICBpZiAoIXdhbGxldCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXMgfHwge307XHJcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XHJcbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV0gfHwge307XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRJbmRleEZvckRlcG9zaXRLZXlJbkV4Y2hhbmdlKFxyXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXVtpbmRleF0gPVxyXG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XSB8fCBbXTtcclxuXHJcbiAgICAgICAgbGV0IG51bWJlcl9vZl9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXVtpbmRleF0ubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1iZXJfb2Zfa2V5cylcclxuICAgICAgICAgICAgcmV0dXJuIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdW1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyX29mX2tleXMgLSAxXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgZXhjaGFuZ2VfbmFtZSxcclxuICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICBtZW1vXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgd2FsbGV0ID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCk7XHJcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXMgPSB3YWxsZXQuZGVwb3NpdF9rZXlzIHx8IHt9O1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV0gPVxyXG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SW5kZXhGb3JEZXBvc2l0S2V5SW5FeGNoYW5nZShcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cclxuICAgICAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXVtpbmRleF0gfHwgW107XHJcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXVtpbmRleF0ucHVzaCh7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgIG1lbW86IG1lbW9cclxuICAgICAgICB9KTtcclxuICAgICAgICBXYWxsZXREYi5fdXBkYXRlV2FsbGV0KCk7XHJcbiAgICB9XHJcbn0gLy8gUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmZXRjaEFzc2V0cywgZmV0Y2hVc2VySW5mb30gZnJvbSBcImNvbW1vbi9nZGV4TWV0aG9kc1wiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBHZGV4R2F0ZXdheUluZm8gZnJvbSBcIi4vR2RleEdhdGV3YXlJbmZvXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IEdkZXhDYWNoZSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbW1vbi9HZGV4Q2FjaGVcIjtcclxuaW1wb3J0IEdkZXhIaXN0b3J5IGZyb20gXCIuL0dkZXhIaXN0b3J5XCI7XHJcbmltcG9ydCBHZGV4QWdyZWVtZW50TW9kYWwgZnJvbSBcIi4vR2RleEFncmVlbWVudE1vZGFsXCI7XHJcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBmZXRjaFdpdGhkcmF3UnVsZSxcclxuICAgIHVzZXJBZ3JlZW1lbnRcclxufSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbW1vbi9nZGV4TWV0aG9kc1wiO1xyXG52YXIgTm9kZVJTQSA9IHJlcXVpcmUoXCJub2RlLXJzYVwiKTtcclxubGV0IGdkZXhQdWJsaWNLZXkgPSBuZXcgTm9kZVJTQShcclxuICAgIFwiLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cXG5cIiArXHJcbiAgICAgICAgXCJNSUdmTUEwR0NTcUdTSWIzRFFFQkFRVUFBNEdOQURDQmlRS0JnUUNIK1F0SFBLY1d4ZEwyNXhMNHBDdXUxNnRLaDZ5UHgvVEZuZC84XFxuXCIgK1xyXG4gICAgICAgIFwiY1N0MlRDK3NQdVlzRDBoL3N5NFZLTnhoQmI3RjdVL1RMWGpNeE5jU2ZQVlBqUE0zWDJMdk9sbVU5TE9FY0pHcm1sbU9PaXlPL2t3c1xcblwiICtcclxuICAgICAgICBcInlLS09oUjRVeVoxTmdoaGZIanV5REJqNlY4ZkNMK3hCWlRKV3NoL1g2MVowd0xDd096WGNRQ3NOSndJREFRQUJcXG5cIiArXHJcbiAgICAgICAgXCItLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1cIlxyXG4pO1xyXG5cclxuY2xhc3MgR2RleEdhdGV3YXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgIGAke3Byb3BzLnByb3ZpZGVyfUFjdGlvbmAsXHJcbiAgICAgICAgICAgIFwiZGVwb3NpdFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNBZ3JlZW1lbnRWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29pbnM6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNvaW5JbmZvOiB0aGlzLl9nZXRBY3RpdmVDb2luSW5mbyhwcm9wcywge2FjdGlvbn0pLFxyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcl9pbmZvOiBudWxsLFxyXG4gICAgICAgICAgICBpc0FncmVlOiBmYWxzZSxcclxuICAgICAgICAgICAgYWdyZWVDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBhZ3JlZU5vdGljZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2FsZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcImxvY2FsZVwiKSxcclxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlOiBudWxsLFxyXG4gICAgICAgICAgICBtZW1vX3J1bGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXNlcl9pbmZvX2NhY2hlID0gbmV3IEdkZXhDYWNoZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dBZ3JlZW1lbnQgPSB0aGlzLnNob3dBZ3JlZW1lbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVBZ3JlZW1lbnQgPSB0aGlzLmhpZGVBZ3JlZW1lbnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWdyZWVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FncmVlbWVudFZpc2libGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQWdyZWVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FncmVlbWVudFZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEFjdGl2ZUNvaW5JbmZvKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgICAgIGxldCBjYWNoZWRDb2luTmFtZSA9IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgIGBhY3RpdmVDb2luXyR7cHJvcHMucHJvdmlkZXJ9XyR7c3RhdGUuYWN0aW9ufWAsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBjYWNoZWRDb2luSWQgPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICBgYWN0aXZlQ29pbklkXyR7cHJvcHMucHJvdmlkZXJ9YCxcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGZpcnN0VGltZUNvaW5OYW1lID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RhdGUuYWN0aW9uID09IFwiZGVwb3NpdFwiKSB7XHJcbiAgICAgICAgICAgIGZpcnN0VGltZUNvaW5OYW1lID0gXCJCVENcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJzdFRpbWVDb2luTmFtZSA9IFwiR0RFWC5CVENcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpcnN0VGltZUNvaW5JZCA9IDEwMDI7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW5OYW1lID0gY2FjaGVkQ29pbk5hbWVcclxuICAgICAgICAgICAgPyBjYWNoZWRDb2luTmFtZVxyXG4gICAgICAgICAgICA6IGZpcnN0VGltZUNvaW5OYW1lO1xyXG4gICAgICAgIGxldCBhY3RpdmVDb2luSWQgPSBjYWNoZWRDb2luSWQgPyBjYWNoZWRDb2luSWQgOiBmaXJzdFRpbWVDb2luSWQ7XHJcbiAgICAgICAgdGhpcy5fZ2V0V2l0aGRyYXdSdWxlKGFjdGl2ZUNvaW5JZCk7XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOiBhY3RpdmVDb2luTmFtZSwgaWQ6IGFjdGl2ZUNvaW5JZH07XHJcbiAgICB9XHJcblxyXG4gICAgX3RyYW5zZm9ybUNvaW4oZGF0YSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYXRhLmZpbHRlcihhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQuc3RhdHVzICE9IDA7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvaW4gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChhc3NldC50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lciBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uaW5uZXJBc3NldElkID0gYXNzZXQuYXNzZXRJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmlubmVyQXNzZXROYW1lID0gYXNzZXQuYXNzZXROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uaW5uZXJTeW1ib2wgPSBhc3NldC5hc3NldFN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm91dGVyQXNzZXRJZCA9IGFzc2V0LnJlbGF0aW9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5vdXRlckFzc2V0TmFtZSA9IGFzc2V0LnJlbGF0aW9uU3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ub3V0ZXJTeW1ib2wgPSBhc3NldC5yZWxhdGlvblN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLnN0YXR1cyA9IGFzc2V0LndpdGhkcmF3U3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uZ2F0ZUZlZSA9IGFzc2V0LndpdGhkcmF3RmVlcztcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm5lZWRNZW1vID0gYXNzZXQubmVlZE1lbW87XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5taW5UcmFuc2FjdGlvbkFtb3VudCA9IGFzc2V0Lm1pbldpdGhkcmF3QW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4udHlwZSA9IGFzc2V0LnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5yZWxhdGlvblByZWNpc2lvbiA9IGFzc2V0LnJlbGF0aW9uUHJlY2lzaW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhc3NldC50eXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRlciBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4uaW5uZXJBc3NldElkID0gYXNzZXQucmVsYXRpb25JZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLmlubmVyQXNzZXROYW1lID0gYXNzZXQucmVsYXRpb25TeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5pbm5lclN5bWJvbCA9IGFzc2V0LnJlbGF0aW9uU3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ub3V0ZXJBc3NldElkID0gYXNzZXQuYXNzZXRJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLm91dGVyQXNzZXROYW1lID0gYXNzZXQuYXNzZXROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ub3V0ZXJTeW1ib2wgPSBhc3NldC5hc3NldFN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2luLnN0YXR1cyA9IGFzc2V0LmRlcG9zaXRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5nYXRlRmVlID0gYXNzZXQuZGVwb3NpdEZlZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5uZWVkTWVtbyA9IGFzc2V0Lm5lZWRNZW1vO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4ubWluVHJhbnNhY3Rpb25BbW91bnQgPSBhc3NldC5taW5EZXBvc2l0QW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW4udHlwZSA9IGFzc2V0LnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29pbi5yZWxhdGlvblByZWNpc2lvbiA9IGFzc2V0LnJlbGF0aW9uUHJlY2lzaW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2luKSByZXN1bHQucHVzaChjb2luKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNmb3JtIGNvaW4gZmFpbGVkOiBcIiwgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VXNlckluZm8odXNlck5hbWUgPSBudWxsLCBpc0FncmVlID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdXNlck5hbWUpIHVzZXJOYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgaWYgKCFpc0FncmVlKSBpc0FncmVlID0gdGhpcy5zdGF0ZS5pc0FncmVlO1xyXG4gICAgICAgIC8vVXNlciBtdXN0IGFncmVlIHRvIHRoZSBhZ3JlZW1lbnRcclxuICAgICAgICBpZiAoIWlzQWdyZWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZldGNoVXNlckluZm8oe3VzZXJBY2NvdW50OiB1c2VyTmFtZSwgaXNBZ3JlZTogaXNBZ3JlZX0pO1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyID0gcmVzLnVzZXI7XHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzQWdyZWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyX2luZm86IHt1c2VyX2lkOiB1c2VyLnVpZCwgc3RhdHVzOiB1c2VyLnN0YXR1c31cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnN0YXR1cyA9PSAwICYmIHVzZXIuYWdyZWVBZ3JlZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVzZXJfaW5mb19jYWNoZS5jYWNoZVVzZXJJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc3RhdHVzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXNlcl9pbmZvX2NhY2hlLmRlbFVzZXJJbmZvKHVzZXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2VwdGlvbiBpbiBmZXRjaGluZyB1c2VyIGluZm86IFwiICsgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q29pbnMoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZldGNoQXNzZXRzKHt1c2VyQWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9KTtcclxuXHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICByZXN1bHQudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zX2RhdGEgPSBfdGhpcy5fdHJhbnNmb3JtQ29pbihkYXRhLmFzc2V0cyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7aXNBdmFpbGFibGU6IHRydWUsIGNvaW5zOiB0cmFuc19kYXRhfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyck1zZykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIgKyBlcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXN1bHQuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe2lzQXZhaWxhYmxlOiBmYWxzZX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0lzQWdyZWUodXNlck5hbWUgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF1c2VyTmFtZSkgdXNlck5hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICB2YXIgdXNlcl9pbmZvID0gdGhpcy51c2VyX2luZm9fY2FjaGUuZ2V0VXNlckluZm8odXNlck5hbWUpO1xyXG4gICAgICAgIGlmICh1c2VyX2luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcl9pbmZvOiB1c2VyX2luZm8sIGlzQWdyZWU6IHRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gdXNlckFncmVlbWVudCh7dXNlckFjY291bnQ6IHVzZXJOYW1lfSk7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICByZXN1bHQudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWdyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7aXNBZ3JlZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9nZXRVc2VySW5mbyh1c2VyTmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtpc0FncmVlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJNc2cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiICsgZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtpc0F2YWlsYWJsZTogZmFsc2V9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJc0FncmVlKCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q29pbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0V2l0aGRyYXdBc3NldElkKGFzc2V0TmFtZSkge1xyXG4gICAgICAgIGxldCBhc3NldFR5cGUgPSAxO1xyXG4gICAgICAgIGxldCBhc3NldFN5bWJvbCA9IFwiaW5uZXJTeW1ib2xcIjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3Rpb24gPT0gXCJkZXBvc2l0XCIpIHtcclxuICAgICAgICAgICAgYXNzZXRUeXBlID0gMjtcclxuICAgICAgICAgICAgYXNzZXRTeW1ib2wgPSBcIm91dGVyU3ltYm9sXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhc3NldElkID0gdGhpcy5zdGF0ZS5jb2lucy5maWx0ZXIoY29pbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2luLnR5cGUgPT0gYXNzZXRUeXBlICYmIGNvaW5bYXNzZXRTeW1ib2xdID09IGFzc2V0TmFtZTtcclxuICAgICAgICB9KVswXS5pbm5lckFzc2V0SWQ7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RDb2luKGUpIHtcclxuICAgICAgICBsZXQgYWN0aXZlQ29pbkluZm8gPSB0aGlzLnN0YXRlLmFjdGl2ZUNvaW5JbmZvO1xyXG4gICAgICAgIGFjdGl2ZUNvaW5JbmZvLm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgYXNzZXRJZCA9IHRoaXMuX2dldFdpdGhkcmF3QXNzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgYWN0aXZlQ29pbkluZm8uaWQgPSBhc3NldElkO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVDb2luSW5mbzogYWN0aXZlQ29pbkluZm9cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9nZXRXaXRoZHJhd1J1bGUoYXNzZXRJZCk7XHJcbiAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcclxuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luXyR7dGhpcy5wcm9wcy5wcm92aWRlcn1fJHt0aGlzLnN0YXRlLmFjdGlvbn1gXSA9XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldHRpbmdbYGFjdGl2ZUNvaW5JZF8ke3RoaXMucHJvcHMucHJvdmlkZXJ9YF0gPSBhc3NldElkO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0V2l0aGRyYXdSdWxlKGFzc2V0SWQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZmV0Y2hXaXRoZHJhd1J1bGUoe2Fzc2V0SWQ6IGFzc2V0SWR9KTtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJlc3VsdC50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJtZWRpYXRlID0gZ2RleFB1YmxpY0tleS5kZWNyeXB0UHVibGljKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudHJhbnNmZXJUb0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1dGYtOFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZTogaW50ZXJtZWRpYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbW9fcnVsZTogZGF0YS5tZW1vUnVsZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyck1zZykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIgKyBlcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe2ludGVybWVkaWF0ZTogbnVsbH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXN1bHQuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe2ludGVybWVkaWF0ZTogbnVsbH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlQWN0aW9uKHR5cGUpIHtcclxuICAgICAgICBsZXQgYWN0aXZlQ29pbkluZm8gPSB0aGlzLl9nZXRBY3RpdmVDb2luSW5mbyh0aGlzLnByb3BzLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNvaW5JbmZvOiBhY3RpdmVDb2luSW5mb1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIFtgJHt0aGlzLnByb3BzLnByb3ZpZGVyfUFjdGlvbmBdOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY2NvdW50ICE9IG5leHRQcm9wcy5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrSXNBZ3JlZShuZXh0UHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZUNoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FncmVlQ2hlY2tlZDogIXRoaXMuc3RhdGUuYWdyZWVDaGVja2VkfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWdyZWVOb3RpY2U6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dVc2VyQWdyZWVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0FncmVlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZWdpc3RlclVzZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdyZWVDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dldFVzZXJJbmZvKG51bGwsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FncmVlTm90aWNlOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGNvaW5zLFxyXG4gICAgICAgICAgICBhY3RpdmVDb2luSW5mbyxcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBpc0F2YWlsYWJsZSxcclxuICAgICAgICAgICAgdXNlcl9pbmZvLFxyXG4gICAgICAgICAgICBpc0FncmVlLFxyXG4gICAgICAgICAgICBhZ3JlZUNoZWNrZWQsXHJcbiAgICAgICAgICAgIGFncmVlTm90aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGUsXHJcbiAgICAgICAgICAgIG1lbW9fcnVsZVxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBpc3N1ZXIgPSB7XHJcbiAgICAgICAgICAgIHRpY2tldDogXCJodHRwczovL3N1cHBvcnQuZ2RleC5pby9cIixcclxuICAgICAgICAgICAgcXE6IFwiNjAyNTczMTk3XCIsXHJcbiAgICAgICAgICAgIHRlbGdyYW06IFwiaHR0cHM6Ly90Lm1lL0dERVhlclwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgc3VwcG9ydENvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyo8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlN1cHBvcnQ8L2xhYmVsPiovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuc3VwcG9ydF9nZGV4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBIZWxwOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpc3N1ZXIudGlja2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNzdWVyLnRpY2tldH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBRUTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vc2hhbmcucXEuY29tL3dwYS9xdW53cGE/aWRrZXk9NWQxOTJjMzI1MTQ2NzYyY2Y1YTkyNTYwMzhmZWQ5ZmFlZjRmY2FjZTIxYTM2ODgyODU0MzU0ZGQxZDU5OWYxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzc3Vlci5xcX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBUZWxlZ3JhbTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXNzdWVyLnRlbGdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc3N1ZXIudGVsZ3JhbX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFpc0FncmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthZ3JlZUNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdXBkYXRlQ2hlY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYWdyZWVtZW50LmhpbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9zaG93VXNlckFncmVlbWVudC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYWdyZWVtZW50Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7YWdyZWVOb3RpY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hZ3JlZW1lbnQubm90aWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fcmVnaXN0ZXJVc2VyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hZ3JlZW1lbnQucmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZUFncmVlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuY2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc0FncmVlbWVudFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVBZ3JlZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2RleEFncmVlbWVudE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUFncmVlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFwibG9jYWxlXCIsIFwiZW5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0Q29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvaW5zICYmIGlzQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhc3NldFN5bWJvbCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGFzc2V0SWQgPSBudWxsO1xyXG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gbnVsbDtcclxuICAgICAgICBpZiAoYWN0aW9uID09IFwiZGVwb3NpdFwiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0SWQgPSBcIm91dGVyQXNzZXRJZFwiO1xyXG4gICAgICAgICAgICBhc3NldFN5bWJvbCA9IFwib3V0ZXJTeW1ib2xcIjtcclxuICAgICAgICAgICAgYWN0aW9uVHlwZSA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXNzZXRJZCA9IFwiaW5uZXJBc3NldElkXCI7XHJcbiAgICAgICAgICAgIGFzc2V0U3ltYm9sID0gXCJpbm5lclN5bWJvbFwiO1xyXG4gICAgICAgICAgICBhY3Rpb25UeXBlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29pbnMgPSBjb2lucy5maWx0ZXIoY29pbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2luLnR5cGUgPT0gYWN0aW9uVHlwZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgY29pbk9wdGlvbnMgPSBjb2luc1xyXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjb2luW2Fzc2V0U3ltYm9sXX0ga2V5PXtjb2luW2Fzc2V0U3ltYm9sXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luW2Fzc2V0U3ltYm9sXX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb2luID0gY29pbnMuZmlsdGVyKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29pblthc3NldFN5bWJvbF0gPT0gYWN0aXZlQ29pbkluZm8ubmFtZTtcclxuICAgICAgICB9KVswXTtcclxuXHJcbiAgICAgICAgbGV0IGluZm9zID0gbnVsbDtcclxuICAgICAgICBpZiAoIWNvaW4gfHwgY29pbi5zdGF0dXMgIT0gMCkge1xyXG4gICAgICAgICAgICBpbmZvcyA9IChcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF91bmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthY3RpdmVDb2luSW5mby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdXNlcl9pbmZvKSB7XHJcbiAgICAgICAgICAgIGluZm9zID0gKFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVzZXJfdW5hdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyX2luZm8uc3RhdHVzICE9IDApIHtcclxuICAgICAgICAgICAgaW5mb3MgPSAoXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZnJvemVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImdhdGV3YXkuY2hvb3NlX1wiICsgYWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtY29pbi10eXBlcyBidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlQ29pbkluZm8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgbWVkaXVtLW9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfdGV4dFwiIC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcImRlcG9zaXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZUFjdGlvbi5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXBvc2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtpbmZvcyA/IChcclxuICAgICAgICAgICAgICAgICAgICBpbmZvc1xyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdkZXhHYXRld2F5SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbj17Y29pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17aW50ZXJtZWRpYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ9e3VzZXJfaW5mby51c2VyX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5zdGF0ZS5hY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17XCJnZGV4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRzQ29pbj17Y29pbi5pbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vX3J1bGU9e21lbW9fcnVsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2RleEhpc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17dXNlcl9pbmZvLnVzZXJfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyQWNjb3VudD17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJZD17Y29pblthc3NldElkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0TmFtZT17Y29pblthc3NldFN5bWJvbF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRUeXBlPXthY3Rpb24gPT0gXCJkZXBvc2l0XCIgPyAxIDogMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnJlY2VudF9cIiArIHRoaXMuc3RhdGUuYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c3VwcG9ydENvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBHZGV4R2F0ZXdheSxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5nc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IGxzIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge2dkZXhBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xyXG5cclxuY29uc3QgZ2RleFN0b3JhZ2UgPSBuZXcgbHMoXCJcIik7XHJcblxyXG5sZXQgYXNzZXRzUmVxdWVzdCA9IHt9O1xyXG5sZXQgUkVRVUVTVF9USU1FT1VUID0gMTAwMDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hXaXRoZHJhd1J1bGUocmVxQm9keSwgdGltZW91dCA9IC0xKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdFNpbXBsZShcclxuICAgICAgICByZXFCb2R5LFxyXG4gICAgICAgIGdkZXhBUElzLkJBU0UgKyBnZGV4QVBJcy5XSVRIRFJBV19SVUxFLFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyQWdyZWVtZW50KHJlcUJvZHksIHRpbWVvdXQgPSAtMSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3RTaW1wbGUoXHJcbiAgICAgICAgcmVxQm9keSxcclxuICAgICAgICBnZGV4QVBJcy5CQVNFICsgZ2RleEFQSXMuVVNFUl9BR1JFRU1FTlQsXHJcbiAgICAgICAgdGltZW91dFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQXNzZXRzKHJlcUJvZHksIHRpbWVvdXQgPSAtMSkge1xyXG4gICAgaWYgKCFyZXFCb2R5LnJlcXVlc3RUeXBlKSByZXFCb2R5LnJlcXVlc3RUeXBlID0gMDtcclxuICAgIGlmICghcmVxQm9keS5hc3NldFR5cGUpIHJlcUJvZHkuYXNzZXRUeXBlID0gMDtcclxuICAgIGlmICghcmVxQm9keS52ZXJzaW9uKSByZXFCb2R5LnZlcnNpb24gPSBcIjEuMVwiO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RTaW1wbGUocmVxQm9keSwgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLkFTU0VUX0xJU1QsIHRpbWVvdXQpO1xyXG59XHJcblxyXG4vL1widXNlckFjY291bnRcIlxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VySW5mbyhyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKFxyXG4gICAgICAgIHJlcUJvZHksXHJcbiAgICAgICAgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLkdFVF9VU0VSX0lORk8sXHJcbiAgICAgICAgdGltZW91dFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWRkcmVzcyhyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIGlmICghcmVxQm9keS5hZGRyZXNzKSByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcygpKTtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKFxyXG4gICAgICAgIHJlcUJvZHksXHJcbiAgICAgICAgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLkNIRUNLX1dJVEhEUkFZX0FERFJFU1MsXHJcbiAgICAgICAgdGltZW91dFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3REZXBvc2l0QWRkcmVzcyhyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKFxyXG4gICAgICAgIHJlcUJvZHksXHJcbiAgICAgICAgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLkdFVF9ERVBPU0lUX0FERFJFU1MsXHJcbiAgICAgICAgdGltZW91dFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zYWN0aW9uUmVjb3JkTGlzdChyZXFCb2R5LCB0eXBlLCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIGlmICh0eXBlID09IDEpIHJldHVybiBnZXREZXBvc2l0UmVjb3JkTGlzdChyZXFCb2R5LCB0aW1lb3V0KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT0gMikgcmV0dXJuIGdldFdpdGhkcmF3UmVjb3JkTGlzdChyZXFCb2R5LCB0aW1lb3V0KTtcclxuICAgIGVsc2UgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiByZXMoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXBvc2l0UmVjb3JkTGlzdChyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKFxyXG4gICAgICAgIHJlcUJvZHksXHJcbiAgICAgICAgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLkRFUE9TSVRfUkVDT1JEX0xJU1QsXHJcbiAgICAgICAgdGltZW91dFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpdGhkcmF3UmVjb3JkTGlzdChyZXFCb2R5LCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0U2ltcGxlKFxyXG4gICAgICAgIHJlcUJvZHksXHJcbiAgICAgICAgZ2RleEFQSXMuQkFTRSArIGdkZXhBUElzLldJVEhEUkFXX1JFQ09SRF9MSVNULFxyXG4gICAgICAgIHRpbWVvdXRcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RTaW1wbGUocmVxQm9keSwgcmVxVXJsLCB0aW1lb3V0ID0gLTEpIHtcclxuICAgIGlmICh0aW1lb3V0ID09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoVGltZW91dChyZXFCb2R5LCByZXFVcmwsIFJFUVVFU1RfVElNRU9VVCk7XHJcbiAgICB9IGVsc2UgaWYgKHRpbWVvdXQgPT0gMCkge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0V2l0aG91dFRpbWVvdXQocmVxQm9keSwgcmVxVXJsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RXaXRoVGltZW91dChyZXFCb2R5LCByZXFVcmwsIHRpbWVvdXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0V2l0aFRpbWVvdXQocmVxQm9keSwgcmVxVXJsLCB0aW1lb3V0KSB7XHJcbiAgICBpZiAoIXJlcUJvZHkucmVxdWVzdENoYW5uZWwpIHJlcUJvZHkucmVxdWVzdENoYW5uZWwgPSAwO1xyXG4gICAgaWYgKCFyZXFCb2R5LnZlcnNpb24pIHJlcUJvZHkudmVyc2lvbiA9IFwiMS4wXCI7XHJcbiAgICBpZiAoIXJlcUJvZHkudGltZXN0YW1wKSByZXFCb2R5LnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKCFyZXFCb2R5Lm91dGVyQ2hhbm5lbCkgcmVxQm9keS5vdXRlckNoYW5uZWwgPSBcIkJpdHNoYXJlc1wiO1xyXG4gICAgbGV0IGJvZHlfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmVxQm9keSk7XHJcbiAgICBpZiAoYXNzZXRzUmVxdWVzdFtib2R5X3N0cmluZ10pIHJldHVybjtcclxuICAgIGFzc2V0c1JlcXVlc3RbYm9keV9zdHJpbmddID0gdHJ1ZTtcclxuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2gocmVxVXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgYm9keTogYm9keV9zdHJpbmdcclxuICAgICAgICAgICAgICAgIC8vIG1vZGU6IFwibm8tY29yc1wiXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVwbHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVwbHlcclxuICAgICAgICAgICAgICAgICAgICAuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhc3NldHNSZXF1ZXN0W2JvZHlfc3RyaW5nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24uY29kZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe2NvZGU6IGpzb24uY29kZSwgbWVzc2FnZToganNvbi5tZXNzYWdlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhc3NldHNSZXF1ZXN0W2JvZHlfc3RyaW5nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtjb2RlOiAtMSwgbWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHtjb2RlOiAtMiwgbWVzc2FnZTogXCJSZXF1ZXN0IHRpbWVvdXQuXCJ9KTtcclxuICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgfSlcclxuICAgIF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0V2l0aG91dFRpbWVvdXQocmVxQm9keSwgcmVxVXJsKSB7XHJcbiAgICBpZiAoIXJlcUJvZHkucmVxdWVzdENoYW5uZWwpIHJlcUJvZHkucmVxdWVzdENoYW5uZWwgPSAwO1xyXG4gICAgaWYgKCFyZXFCb2R5LnZlcnNpb24pIHJlcUJvZHkudmVyc2lvbiA9IFwiMS4wXCI7XHJcbiAgICBpZiAoIXJlcUJvZHkudGltZXN0YW1wKSByZXFCb2R5LnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKCFyZXFCb2R5Lm91dGVyQ2hhbm5lbCkgcmVxQm9keS5vdXRlckNoYW5uZWwgPSBcIkJpdHNoYXJlc1wiO1xyXG4gICAgbGV0IGJvZHlfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmVxQm9keSk7XHJcbiAgICBpZiAoYXNzZXRzUmVxdWVzdFtib2R5X3N0cmluZ10pIHJldHVybjtcclxuICAgIGFzc2V0c1JlcXVlc3RbYm9keV9zdHJpbmddID0gdHJ1ZTtcclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmZXRjaChyZXFVcmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBib2R5OiBib2R5X3N0cmluZ1xyXG4gICAgICAgIH0pLnRoZW4ocmVwbHkgPT4ge1xyXG4gICAgICAgICAgICByZXBseVxyXG4gICAgICAgICAgICAgICAgLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFzc2V0c1JlcXVlc3RbYm9keV9zdHJpbmddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmNvZGUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7Y29kZToganNvbi5jb2RlLCBtZXNzYWdlOiBqc29uLm1lc3NhZ2V9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhc3NldHNSZXF1ZXN0W2JvZHlfc3RyaW5nXTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe2NvZGU6IC0xLCBtZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzV2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XHJcbiAgICByZXR1cm4gZ2RleFN0b3JhZ2UuaGFzKGBnZGV4X2hpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh7d2FsbGV0LCBhZGRyZXNzZXN9KSB7XHJcbiAgICBnZGV4U3RvcmFnZS5zZXQoYGdkZXhfaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIGFkZHJlc3Nlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpdGhkcmF3YWxBZGRyZXNzZXMod2FsbGV0KSB7XHJcbiAgICByZXR1cm4gZ2RleFN0b3JhZ2UuZ2V0KGBnZGV4X2hpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyh7d2FsbGV0LCBhZGRyZXNzfSkge1xyXG4gICAgZ2RleFN0b3JhZ2Uuc2V0KGBnZGV4X2hpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIGFkZHJlc3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XHJcbiAgICByZXR1cm4gZ2RleFN0b3JhZ2UuZ2V0KGBnZGV4X2hpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2l0aGRyYXdBZGRyZXNzZXMgPSB7XHJcbiAgICBoYXM6IGhhc1dpdGhkcmF3YWxBZGRyZXNzLFxyXG4gICAgc2V0OiBzZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxyXG4gICAgZ2V0OiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxyXG4gICAgc2V0TGFzdDogc2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzLFxyXG4gICAgZ2V0TGFzdDogZ2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi8uLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XHJcbmltcG9ydCBBY2NvdW50QmFsYW5jZSBmcm9tIFwiLi4vLi4vQWNjb3VudC9BY2NvdW50QmFsYW5jZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBHZGV4Q2FjaGUgZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vR2RleENhY2hlXCI7XHJcbmltcG9ydCB7cmVxdWVzdERlcG9zaXRBZGRyZXNzfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbW1vbi9nZGV4TWV0aG9kc1wiO1xyXG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGUucmVhY3RcIjtcclxuaW1wb3J0IEdkZXhXaXRoZHJhd01vZGFsIGZyb20gXCIuL0dkZXhXaXRoZHJhd01vZGFsXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtNb2RhbCwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIEdkZXhHYXRld2F5SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIC8vIGlubmVyX2Fzc2V0X25hbWU6ICAgICAgICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAvLyBvdXRlcl9hc3NldF9uYW1lOiAgICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcclxuICAgICAgICBpc3N1ZXJfYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXHJcbiAgICAgICAgZ2F0ZXdheTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBidHNDb2luOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXHJcbiAgICAgICAgbWVtb19ydWxlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3M6IG51bGwsXHJcbiAgICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBxcmNvZGU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IEdkZXhDYWNoZSgpO1xyXG4gICAgICAgIHRoaXMuX2NvcHkgPSB0aGlzLl9jb3B5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5fY29weSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1FyTW9kYWwgPSB0aGlzLnNob3dRck1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oaWRlUXJNb2RhbCA9IHRoaXMuaGlkZVFyTW9kYWwuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UXJNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVRck1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlcG9zaXRBZGRyZXNzKCkge1xyXG4gICAgICAgIHRoaXMuX2dldERlcG9zaXRBZGRyZXNzKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvaW4sXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RGVwb3NpdEFkZHJlc3ModXNlcl9pZCwgdXNlcl9uYW1lLCBjb2luLCBhY3Rpb24pIHtcclxuICAgICAgICAvLyBUaGUgY29pbiBjYW4gb25seSBzdXBwb3J0IHdpdGhkcmF3IHNvbWV0aW1lLCBubyBuZWVkIHRvIGNhbGwgZ2V0IGRlcG9zaXQgYWRkcmVzc1xyXG4gICAgICAgIGlmIChhY3Rpb24gIT0gXCJkZXBvc2l0XCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGNhY2hlZF9yZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgICAgIHVzZXJfbmFtZSxcclxuICAgICAgICAgICAgY29pbi5vdXRlclN5bWJvbCxcclxuICAgICAgICAgICAgY29pbi5pbm5lclN5bWJvbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjYWNoZWRfcmVjZWl2ZV9hZGRyZXNzICYmXHJcbiAgICAgICAgICAgIGNhY2hlZF9yZWNlaXZlX2FkZHJlc3MgIT0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3NcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiBjYWNoZWRfcmVjZWl2ZV9hZGRyZXNzfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gR2V0IGFkZHJlc3MgZnJvbSBzZXJ2ZXIgc2lkZVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHtcclxuICAgICAgICAgICAgYnRzQXNzZXRJZDogY29pbi5pbm5lckFzc2V0SWQsXHJcbiAgICAgICAgICAgIG91dEFzc2V0SWQ6IGNvaW4ub3V0ZXJBc3NldElkLFxyXG4gICAgICAgICAgICB1aWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgICAgIHVzZXJBY2NvdW50OiB1c2VyX25hbWVcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MgJiYgZGF0YS5hZGRyZXNzLmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjZWl2ZV9hZGRyZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtbzogZGF0YS5hZGRyZXNzLm1lbW9cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2luLm91dGVyU3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2luLmlubmVyU3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtyZWNlaXZlX2FkZHJlc3M6IHJlY2VpdmVfYWRkcmVzc30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzczogbnVsbH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGVwb3NpdEFkZHJlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBucC51c2VyX2lkICE9PSB0aGlzLnByb3BzLnVzZXJfaWQgfHxcclxuICAgICAgICAgICAgbnAuYWN0aW9uICE9PSB0aGlzLnByb3BzLmFjdGlvbiB8fFxyXG4gICAgICAgICAgICBucC5jb2luICE9IHRoaXMucHJvcHMuY29pblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcyhcclxuICAgICAgICAgICAgICAgIG5wLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICBucC5hY2NvdW50LmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICBucC5jb2luLFxyXG4gICAgICAgICAgICAgICAgbnAuYWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2NvcHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcIndpdGhkcmF3X2Fzc2V0X1wiICtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcclxuICAgICAgICAgICAgXCJfXCIgK1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvaW4uaW5uZXJTeW1ib2xcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2l0aGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3dRcmNvZGUodGV4dCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3FyY29kZTogdGV4dH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UXJNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb3B5KGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jbGlwYm9hcmRUZXh0KVxyXG4gICAgICAgICAgICAgICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRoaXMuc3RhdGUuY2xpcGJvYXJkVGV4dCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC9wbGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGUoXCJnYXRld2F5LnVzZV9jb3B5X2J1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvQ2xpcGJvYXJkKGNsaXBib2FyZFRleHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGlwYm9hcmRUZXh0fSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGVtcHR5Um93ID0gPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwiLCBtaW5IZWlnaHQ6IDE1MH19IC8+O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMuYWNjb3VudCB8fFxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudCB8fFxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5jb2luXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XHJcbiAgICAgICAgY29uc3Qge2NvaW4sIGJ0c0NvaW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvLyBhc3NldCBpcyBub3QgbG9hZGVkXHJcbiAgICAgICAgaWYgKCFidHNDb2luKSByZXR1cm4gZW1wdHlSb3c7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xyXG4gICAgICAgIGxldCBxcmNvZGUgPSB0aGlzLnN0YXRlLnFyY29kZTtcclxuICAgICAgICBsZXQgd2l0aGRyYXdfbW9kYWxfaWQgPSB0aGlzLmdldFdpdGhkcmF3TW9kYWxJZCgpO1xyXG4gICAgICAgIGxldCBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBjbGlwYm9hcmRUZXh0ID0gXCJcIjtcclxuICAgICAgICBsZXQgbWVtb1RleHQgPSBcIlwiO1xyXG4gICAgICAgIGxldCBkZXBvc2l0X21lbW9fZnJhZ21lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICB2YXIgd2l0aGRyYXdfbWVtb19wcmVmaXggPSBjb2luLm91dGVyU3ltYm9sICsgXCI6XCI7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xyXG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X21lbW9fZnJhZ21lbnQgPSA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLm1lbW99PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgICAgICBtZW1vVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpdGhkcmF3X21lbW9fcHJlZml4ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xyXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzX29iamVjdCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGFjY291bnRfYmFsYW5jZXNfb2JqZWN0KVxyXG4gICAgICAgICAgICBiYWxhbmNlID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QudG9KUygpW2J0c0NvaW4uZ2V0KFwiaWRcIildO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJsb2NrdHJhZGVzX19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfc3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fZGVwb3NpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLm91dGVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjb2luLmlubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uaW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfaW5zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4ub3V0ZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF93YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5vdXRlclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbW9UZXh0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF93YXJuaW5nX21lbW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5vdXRlclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEyNXB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvQ2xpcGJvYXJkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuY29weV9hZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2hvd1FyY29kZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLnFyY29kZS5sYWJlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtb1RleHQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5Lm1lbW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21lbW9UZXh0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEyNXB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9DbGlwYm9hcmQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jb3B5X21lbW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TaG93UXJjb2RlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwucXJjb2RlLmxhYmVsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZVFyTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC5jbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXJNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZVFyTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJnZGV4LWdhdGV3YXlcIj5hYmM8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwb3NpdFFyQ29kZU1vZGFsIHRleHQ9e3FyY29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmxvY2t0cmFkZXNfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfc3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fd2l0aGRyYXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NvaW4uaW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5vdXRlclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5pbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfaW5zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIxLjNyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbldpdGhkcmF3LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19ub3dcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS53aXRoZHJhd19jb2luXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW46IGNvaW4ub3V0ZXJBc3NldE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGNvaW4ub3V0ZXJTeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHZGV4V2l0aGRyYXdNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyPXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5pbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX25hbWU9e2NvaW4ub3V0ZXJBc3NldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRlRmVlPXtjb2luLmdhdGVGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9pZD17Y29pbi5vdXRlckFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9zeW1ib2w9e2NvaW4ub3V0ZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNfbWVtb3M9e2NvaW4ubmVlZE1lbW8gPT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpdGhkcmF3QW1vdW50PXtjb2luLm1pblRyYW5zYWN0aW9uQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fcHJlY2lzaW9uPXtjb2luLnJlbGF0aW9uUHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19wcmVmaXg9e3dpdGhkcmF3X21lbW9fcHJlZml4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19ydWxlPXt0aGlzLnByb3BzLm1lbW9fcnVsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsX2lkPXt3aXRoZHJhd19tb2RhbF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGVwb3NpdFFyQ29kZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudGV4dDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxRUkNvZGUgc2l6ZT17MjAwfSB2YWx1ZT17dGV4dH0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIn19Pnt0ZXh0fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoR2RleEdhdGV3YXlJbmZvKTtcclxuIiwiaW1wb3J0IHNzIGZyb20gXCJjb21tb24vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5jb25zdCBzZXNzaW9uID0gbmV3IHNzKFwiX19nZGV4X191c2VyX1wiKTtcclxuXHJcbmNsYXNzIEdkZXhDYWNoZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRfZ2RleF9hZGRyZXNzX2NhY2hlX3ZlcnNpb25fc3RyaW5nID0gXCIxXCI7XHJcbiAgICAgICAgdGhpcy5kYXkgPSA4NjQwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbyh1c2VyX2FjY291bnQpIHtcclxuICAgICAgICBsZXQgdXNlcl9pbmZvID0gc2Vzc2lvbi5nZXQodXNlcl9hY2NvdW50LCBudWxsKTtcclxuICAgICAgICBpZiAoIXVzZXJfaW5mbykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGN1cl90aW1lID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgIC8vIFVzZXIgaW5mbyBleHBpcmUgdGltZSBzZXQgdG8gMSBkYXlcclxuICAgICAgICBpZiAoTWF0aC5hYnModXNlcl9pbmZvLmN0aW1lIC0gY3VyX3RpbWUpID4gdGhpcy5kYXkpIHtcclxuICAgICAgICAgICAgc2Vzc2lvbi5yZW1vdmUodXNlcl9hY2NvdW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1c2VyX2luZm87XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVVc2VySW5mbyh1c2VyX2FjY291bnQsIHVzZXJfaWQsIHN0YXR1cykge1xyXG4gICAgICAgIGxldCB1c2VyX2luZm8gPSBzZXNzaW9uLmdldCh1c2VyX2FjY291bnQsIHt9KTtcclxuICAgICAgICBpZiAodXNlcl9pbmZvICE9IHt9KSB7XHJcbiAgICAgICAgICAgIHVzZXJfaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGN0aW1lOiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2Vzc2lvbi5zZXQodXNlcl9hY2NvdW50LCB1c2VyX2luZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxVc2VySW5mbyh1c2VyX2FjY291bnQpIHtcclxuICAgICAgICBpZiAoc2Vzc2lvbi5oYXModXNlcl9hY2NvdW50KSkgc2Vzc2lvbi5kZWwodXNlcl9hY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmRleEZvckRlcG9zaXRLZXkoYWNjb3VudF9uYW1lLCBpbnB1dF9jb2luX3R5cGUsIG91dHB1dF9jb2luX3R5cGUpIHtcclxuICAgICAgICBsZXQgYXJncyA9IFtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2dkZXhfYWRkcmVzc19jYWNoZV92ZXJzaW9uX3N0cmluZyxcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwcmV2aW91cywgY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KFwiW1wiLCBjdXJyZW50LCBcIl1cIik7XHJcbiAgICAgICAgfSwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKGFjY291bnRfbmFtZSwgaW5wdXRfY29pbl90eXBlLCBvdXRwdXRfY29pbl90eXBlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleShcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBkZXBvc2l0X2tleXMgPSBzZXNzaW9uLmdldChcImRlcG9zaXRfa2V5c1wiLCB7fSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRlcG9zaXRfa2V5c1tpbmRleF0gfHwgbnVsbDtcclxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICAvLyBjYWNoZSBkZXBvc2l0IGFkZHJlc3MgZm9yIDEgd2Vla1xyXG4gICAgICAgICAgICBsZXQgY3VyX3RpbWUgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhyZXN1bHQuY3RpbWUgLSBjdXJfdGltZSkgPiB0aGlzLmRheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0QWRkcmVzcyhcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjYWNoZUlucHV0QWRkcmVzcyhcclxuICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxyXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICBtZW1vXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SW5kZXhGb3JEZXBvc2l0S2V5KFxyXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXHJcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGRlcG9zaXRfa2V5cyA9IHNlc3Npb24uZ2V0KFwiZGVwb3NpdF9rZXlzXCIsIHt9KTtcclxuICAgICAgICBkZXBvc2l0X2tleXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICBtZW1vOiBtZW1vLFxyXG4gICAgICAgICAgICBjdGltZTogTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXNzaW9uLnNldChcImRlcG9zaXRfa2V5c1wiLCBkZXBvc2l0X2tleXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXRBZGRyZXNzKGFjY291bnRfbmFtZSwgaW5wdXRfY29pbl90eXBlLCBvdXRwdXRfY29pbl90eXBlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleShcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBkZXBvc2l0X2tleXMgPSBzZXNzaW9uLmdldChcImRlcG9zaXRfa2V5c1wiLCBudWxsKTtcclxuICAgICAgICBpZiAoIWRlcG9zaXRfa2V5cykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZGVwb3NpdF9rZXlzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAvLyBEZXBvc2l0IGtleSBpcyBlbXB0eSwgbm8gbmVlZCB0byBjbGVhclxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlcG9zaXRfa2V5c1tpbmRleF0gPSB7YWRkcmVzczogbnVsbCwgbWVtbzogbnVsbCwgY3RpbWU6IG51bGx9O1xyXG4gICAgICAgIHNlc3Npb24uc2V0KFwiZGVwb3NpdF9rZXlzXCIsIGRlcG9zaXRfa2V5cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdkZXhDYWNoZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7dmFsaWRhdGVBZGRyZXNzLCBXaXRoZHJhd0FkZHJlc3Nlc30gZnJvbSBcImNvbW1vbi9nZGV4TWV0aG9kc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luYywgY2hlY2tCYWxhbmNlfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xyXG5pbXBvcnQge0Fzc2V0LCBQcmljZX0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0J1dHRvbiwgTW9kYWx9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNsYXNzIEdkZXhXaXRoZHJhd01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcclxuICAgICAgICBpc3N1ZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG1lbW9fcnVsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXHJcbiAgICAgICAgb3V0cHV0X3N1cHBvcnRzX21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudF90b193aXRoZHJhdyxcclxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChwcm9wcy5vdXRwdXRfY29pbl9uYW1lKSxcclxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbCxcclxuICAgICAgICAgICAgb3B0aW9uc19pc192YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vdXRwdXRfY29pbl9uYW1lXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgICAgYmVsb3dfbWludW11bV93aXRoZHJhd192YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbl9lcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbW9fZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZW1vX2xlbmd0aF9lcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogcHJvcHMuYWNjb3VudCxcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOlxyXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldChwcm9wcy5mZWVfYXNzZXRfc3ltYm9sKSB8fFxyXG4gICAgICAgICAgICAgICAgXCIxLjMuMFwiLFxyXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxyXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2Vycm9yX2NvZGU6IG51bGwsXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZXJyb3JfbWVzc2FnZTogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MsIHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlID0gZGVib3VuY2UodGhpcy5fdXBkYXRlRmVlLmJpbmQodGhpcyksIDI1MCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsID0gdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy51bk1vdW50ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcclxuICAgICAgICBpZiAobnAub3V0cHV0X2NvaW5fbmFtZSAhPSB0aGlzLnByb3BzLm91dHB1dF9jb2luX25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIG5wLm91dHB1dF9jb2luX25hbWVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIG5wLm91dHB1dF9jb2luX25hbWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQgJiZcclxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBucC5hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1czoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBuZXcgQXNzZXQoe2Ftb3VudDogMH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25maXJtYXRpb25Nb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlQ29uZmlybWF0aW9uTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9hc3NlbWJsZU1lbW8oKSB7XHJcbiAgICAgICAgbGV0IG1lbW9fcnVsZSA9IHRoaXMucHJvcHMubWVtb19ydWxlO1xyXG4gICAgICAgIGxldCBtZW1vX21lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChtZW1vX3J1bGUpIHtcclxuICAgICAgICAgICAgICAgIG1lbW9fcnVsZS5zcGxpdChcIjtcIikuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW1bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fbWVzc2FnZSArPSBpdGVtLnNsaWNlKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vX21lc3NhZ2UgKz0gdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vX21lc3NhZ2UgKz0gaXRlbS5zbGljZSgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19tZXNzYWdlICs9IHRoaXMuc3RhdGUubWVtbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbW9fbWVzc2FnZS5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vX2xlbmd0aF9lcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vX2xlbmd0aF9lcnJvcjogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW9fZXJyb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtb19tZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW9fZXJyb3I6IHRydWV9KTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlRmVlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xyXG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X2lkLCBmcm9tX2FjY291bnR9ID0gc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXNbMF0gIT09IGZlZV9hc3NldF9pZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQgPSBmZWVfYXNzZXRfdHlwZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XHJcbiAgICAgICAgICAgIGFjY291bnRJRDogZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBmZWVJRDogZmVlX2Fzc2V0X2lkLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5fYXNzZW1ibGVNZW1vKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHtmZWUsIGhhc0JhbGFuY2UsIGhhc1Bvb2xCYWxhbmNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51bk1vdW50ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBmZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogIWhhc0JhbGFuY2UgfHwgIWhhc1Bvb2xCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRmVlU3RhdHVzKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xyXG4gICAgICAgIGxldCBhY2NvdW50ID0gc3RhdGUuZnJvbV9hY2NvdW50O1xyXG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzOiBhc3NldHN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcclxuICAgICAgICAvLyBjb25zdCBhc3NldHMgPSBbXCIxLjMuMFwiLCB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTtcclxuICAgICAgICBsZXQgZmVlU3RhdHVzID0ge307XHJcbiAgICAgICAgbGV0IHAgPSBbXTtcclxuICAgICAgICBhc3NldHMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgcC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZUlEOiBhLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1lbW8gPyBcIjpcIiArIHN0YXRlLm1lbW8gOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocClcclxuICAgICAgICAgICAgLnRoZW4oc3RhdHVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYV0gPSBzdGF0dXNbaWR4XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhzdGF0ZS5mZWVTdGF0dXMsIGZlZVN0YXR1cykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWVtb0NoYW5nZWQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpdGhkcmF3QW1vdW50Q2hhbmdlKHthbW91bnR9KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTpcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgIT09IHVuZGVmaW5lZCAmJiAhcGFyc2VGbG9hdChhbW91bnQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RDaGFuZ2VkKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbFxyXG4gICAgICAgIClbaW5kZXhdO1xyXG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xyXG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkKGUpIHtcclxuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IG5ld193aXRoZHJhd19hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcywgcHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHtcclxuICAgICAgICAgICAgYXNzZXRJZDogcHJvcHMub3V0cHV0X2NvaW5faWQsXHJcbiAgICAgICAgICAgIGFzc2V0TmFtZTogcHJvcHMub3V0cHV0X2NvaW5fbmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IGRhdGEudmFsaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19lcnJvcl9jb2RlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZXJyb3JfbWVzc2FnZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gZXJyLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA8IDApIG1lc3NhZ2UgPSBcIlN5c3RlbSBlcnJvcjogcGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2Vycm9yX2NvZGU6IGVyci5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZXJyb3JfbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2NoZWNrUHJlY2lzaW9uKCkge1xyXG4gICAgICAgIGxldCB7d2l0aGRyYXdfYW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHtvdXRwdXRfY29pbl9wcmVjaXNpb259ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAob3V0cHV0X2NvaW5fcHJlY2lzaW9uID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aXRoZHJhd19hbW91bnQgIT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCA9IHdpdGhkcmF3X2Ftb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgIHdpdGhkcmF3X2Ftb3VudCA9IHdpdGhkcmF3X2Ftb3VudC50cmltKCk7XHJcbiAgICAgICAgaWYgKHdpdGhkcmF3X2Ftb3VudC5pbmRleE9mKFwiLlwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlY2lzaW9uX2Vycm9yOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50Lmxlbmd0aCAtIHdpdGhkcmF3X2Ftb3VudC5pbmRleE9mKFwiLlwiKSAtIDEgPlxyXG4gICAgICAgICAgICBvdXRwdXRfY29pbl9wcmVjaXNpb25cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlY2lzaW9uX2Vycm9yOiB0cnVlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlY2lzaW9uX2Vycm9yOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tCYWxhbmNlKCkge1xyXG4gICAgICAgIGxldCB7ZmVlQW1vdW50LCB3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge2Fzc2V0LCBiYWxhbmNlLCBtaW5XaXRoZHJhd0Ftb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmICghYmFsYW5jZSkge1xyXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBvd24gYW55IGFzc2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZmVlQW1vdW50KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcclxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgZmVlQW1vdW50LFxyXG4gICAgICAgICAgICBiYWxhbmNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBiYWxhbmNlIGlzIHplcm9cclxuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aXRoZHJhd19hbW91bnQgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbCh3aXRoZHJhd19hbW91bnQsIC8sL2csIFwiXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtaW5XaXRoZHJhd0Ftb3VudCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgbWluV2l0aGRyYXdBbW91bnQgPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwobWluV2l0aGRyYXdBbW91bnQsIC8sL2csIFwiXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgaWYgKHdpdGhkcmF3X2Ftb3VudCA8IG1pbldpdGhkcmF3QW1vdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JlbG93X21pbnVtdW1fd2l0aGRyYXdfdmFsdWU6IHRydWV9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JlbG93X21pbnVtdW1fd2l0aGRyYXdfdmFsdWU6IGZhbHNlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NoZWNrUHJlY2lzaW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIGhhc0JhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXHJcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50ICE9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8sL2csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzZW5kQW1vdW50ID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhbDogYW1vdW50XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlci5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2VtYmxlTWVtbygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXRDb25maXJtYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wpKSB7XHJcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xyXG4gICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XHJcbiAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XHJcbiAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XHJcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcclxuICAgICAgICBsZXQgYW1vdW50ID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxyXG4gICAgICAgICAgICAvLC9nLFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgZmVlX2Fzc2V0X2lkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBwYXJzZUludChhbW91bnQgKiBwcmVjaXNpb24sIDEwKSxcclxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2VtYmxlTWVtbygpLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJvcERvd25MaXN0KCkge1xyXG4gICAgICAgIGlmIChXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2wpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcclxuICAgICAgICByZXR1cm4gXCJjb25maXJtYXRpb25cIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnRCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCkpLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gU3VidHJhY3QgdGhlIGZlZSBpZiBpdCBpcyB1c2luZyB0aGUgc2FtZSBhc3NldFxyXG4gICAgICAgICAgICBpZiAodG90YWwuYXNzZXRfaWQgPT09IGZlZUFtb3VudC5hc3NldF9pZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWwubWludXMoZmVlQW1vdW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRvdGFsLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXROZXN0ZWRSZWYocmVmKSB7XHJcbiAgICAgICAgdGhpcy5uZXN0ZWRSZWYgPSByZWY7XHJcbiAgICB9XHJcblxyXG4gICAgb25GZWVDaGFuZ2VkKHthc3NldH0pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50LCBmZWVTdGF0dXN9ID0gc3RhdGU7XHJcbiAgICAgICAgZnVuY3Rpb24gaGFzRmVlUG9vbEJhbGFuY2UoaWQpIHtcclxuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzUG9vbEJhbGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYXNCYWxhbmNlKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChmZWVTdGF0dXNbaWRdID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmVlX2Fzc2V0X3R5cGVzID0gW107XHJcbiAgICAgICAgaWYgKCEoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGtleSk7XHJcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgYXNzZXRzIHRoYXQgZG8gbm90IGhhdmUgdmFsaWQgY29yZSBleGNoYW5nZSByYXRlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlSXNWYWxpZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHA7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBuZXcgQXNzZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbmV3IEFzc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBwLmlzVmFsaWQoKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlSXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhc3NldC5nZXQoXCJpZFwiKSAhPT0gXCIxLjMuMFwiICYmICFwcmljZUlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBmZWVfYXNzZXRfdHlwZXMuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFzRmVlUG9vbEJhbGFuY2UoYSkgJiYgaGFzQmFsYW5jZShhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3dpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQsIG1lbW99ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgc3RvcmVkQWRkcmVzcyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2xcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGxldCBhc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpO1xyXG5cclxuICAgICAgICBsZXQgd2l0aGRyYXdNb2RhbElkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcclxuICAgICAgICBsZXQgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcclxuICAgICAgICBsZXQgY29uZmlybWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFzdG9yZWRBZGRyZXNzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsb2NrdHJhZGVzLWRpc2FibGVkLW9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJsb2NrdHJhZGVzLW9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVkQWRkcmVzcy5tYXAoZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VsZWN0Q2hhbmdlZC5iaW5kKHRoaXMsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXHJcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgJiYgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLmxlbmd0aClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfZXJyb3JfY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfZXJyb3JfY29kZX06e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19lcnJvcl9tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0Q29uZmlybWF0aW9uLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uYWNjZXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNvbmZpcm1hdGlvbi5jYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuY29uZmlybWF0aW9uLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcclxuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtbyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c19tZW1vcykge1xyXG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIubWVtb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lbW9fZXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubWVtb19lcnJvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW1vX2xlbmd0aF9lcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5tZW1vX2xlbmd0aF9lcnJvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRXN0aW1hdGUgZmVlIFZBUklBQkxFU1xyXG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50X2Fzc2V0X2lkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF07XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXQtY3Vyc29yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NvdW50QmFsYW5jZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWxhbmNlID0gXCJObyBmdW5kc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVN1Ym1pdCA9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmVsb3dfbWludW11bV93aXRoZHJhd192YWx1ZSB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9fZXJyb3IgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vX2xlbmd0aF9lcnJvciB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlY2lzaW9uX2Vycm9yO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBmdWxsLXdpZHRoLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjBcIn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcgYW1vdW50ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibW9kYWwud2l0aGRyYXcuYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0Ftb3VudENoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbXB0eV93aXRoZHJhd192YWx1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLnZhbGlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5iZWxvd19taW51bXVtX3dpdGhkcmF3X3ZhbHVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubWluaW11bV9hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMucHJvcHMubWluV2l0aGRyYXdBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByZWNpc2lvbl9lcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLnByZWNpc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbj17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9wcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGZWUgc2VsZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZlZUFtb3VudCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGdhdGVfZmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZDYWxsYmFjaz17dGhpcy5zZXROZXN0ZWRSZWYuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmdldEFtb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWw6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5mZWVBbW91bnQuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtmZWVfYXNzZXRfdHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc0JhbGFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRmVlQmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzUG9vbEJhbGFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vUG9vbEJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEdhdGUgZmVlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdhdGVGZWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvciByaWdodC1zZWxlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmZlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmdhdGVGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2t0cmFkZXMtc2VsZWN0LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25Ecm9wRG93bkxpc3QuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjOTY2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2t0cmFkZXMtcG9zaXRpb24tb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW52YWxpZF9hZGRyZXNzX21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNZW1vIGlucHV0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHt3aXRoZHJhd19tZW1vfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcvQ2FuY2VsIGJ1dHRvbnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5wZXJtLmNhbmNlbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuR2RleFdpdGhkcmF3TW9kYWwgPSBCaW5kVG9DaGFpblN0YXRlKEdkZXhXaXRoZHJhd01vZGFsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBHZGV4V2l0aGRyYXdNb2RhbCxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfc3ltYm9sOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVlX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7Z2V0VHJhbnNhY3Rpb25SZWNvcmRMaXN0fSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbW1vbi9nZGV4TWV0aG9kc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBERVBPU0lUX1NUQVRVUyA9IHtcclxuICAgIDE6IFwiY29uZmlybWluZ1wiLFxyXG4gICAgMjogXCJ3YWl0aW5nXCIsXHJcbiAgICAzOiBcInRyYW5zZmVyaW5nXCIsXHJcbiAgICA0OiBcInN1Y2Nlc3NcIixcclxuICAgIDU6IFwiZmFpbFwiXHJcbn07XHJcbmNvbnN0IFdJVEhEUkFXX1NUQVRVUyA9IHtcclxuICAgIDE6IFwiY29uZmlybWluZ1wiLFxyXG4gICAgMjogXCJhdWRpdGluZ1wiLFxyXG4gICAgMzogXCJhdWRpdGVkXCIsXHJcbiAgICA0OiBcInJlZnVzZWRcIixcclxuICAgIDU6IFwidHJhbnNmZXJpbmdcIixcclxuICAgIDY6IFwic3VjY2Vzc1wiLFxyXG4gICAgNzogXCJmYWlsXCJcclxufTtcclxuXHJcbmNsYXNzIEdkZXhIaXN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgY29tcGFjdFZpZXc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBmdWxsSGVpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICB1c2VySWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgYXNzZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBhc3NldE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjb3JkVHlwZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICB1c2VyQWNjb3VudDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIG1heEhlaWdodDogNTAwLFxyXG4gICAgICAgIGZ1bGxIZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiA4NSxcclxuICAgICAgICAgICAgcGFnZU51bTogMCxcclxuICAgICAgICAgICAgdG90YWxOdW06IDAsXHJcbiAgICAgICAgICAgIG5leHRQYWdlRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsbERhdGE6IHt9LFxyXG4gICAgICAgICAgICBoaXN0b3J5U3RhdHVzVHlwZTpcclxuICAgICAgICAgICAgICAgIHByb3BzLnJlY29yZFR5cGUgPT0gMVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJkZXBvc2l0X2hpc3Rvcnlfc3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwid2l0aGRyYXdfaGlzdG9yeV9zdGF0dXNcIixcclxuICAgICAgICAgICAgaGlzdG9yeVN0YXR1c1ZhbHVlOlxyXG4gICAgICAgICAgICAgICAgcHJvcHMucmVjb3JkVHlwZSA9PSAxID8gREVQT1NJVF9TVEFUVVMgOiBXSVRIRFJBV19TVEFUVVNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldFRyYW5zYWN0aW9uSGlzdG9yeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY29yZFR5cGUgIT0gbmV4dFByb3BzLnJlY29yZFR5cGUgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldElkICE9IG5leHRQcm9wcy5hc3NldElkIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXROYW1lICE9IG5leHRQcm9wcy5hc3NldE5hbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VySWQgIT0gbmV4dFByb3BzLnVzZXJJZCB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJBY2NvdW50ICE9IG5leHRQcm9wcy51c2VyQWNjb3VudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRUcmFuc2FjdGlvbkhpc3RvcnkoXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFzc2V0SWQsXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYXNzZXROYW1lLFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLnJlY29yZFR5cGUsXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMudXNlckFjY291bnQsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGlmICghdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3codGhpcy5wcm9wcy51c2VySWQsIG5leHRQcm9wcy51c2VySWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbGxEYXRhICE9IG5leHRTdGF0ZS5hbGxEYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYWdlTnVtICE9IG5leHRTdGF0ZS5wYWdlTnVtKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFRyYW5zYWN0aW9uSGlzdG9yeShcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgYXNzZXRJZCxcclxuICAgICAgICBhc3NldE5hbWUsXHJcbiAgICAgICAgcmVjb3JkVHlwZSxcclxuICAgICAgICB1c2VyQWNjb3VudCxcclxuICAgICAgICBmb3JjZSA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgcGFnZVNpemUgPSB0aGlzLnByb3BzLnBhZ2VTaXplO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIHBhZ2VOdW0sXHJcbiAgICAgICAgICAgIGFsbERhdGEsXHJcbiAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNWYWx1ZSxcclxuICAgICAgICAgICAgaGlzdG9yeVN0YXR1c1R5cGVcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoZm9yY2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwYWdlTnVtID0gMTtcclxuICAgICAgICAgICAgYWxsRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBoaXN0b3J5U3RhdHVzVHlwZSA9XHJcbiAgICAgICAgICAgICAgICByZWNvcmRUeXBlID09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZGVwb3NpdF9oaXN0b3J5X3N0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIndpdGhkcmF3X2hpc3Rvcnlfc3RhdHVzXCI7XHJcbiAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICByZWNvcmRUeXBlID09IDEgPyBERVBPU0lUX1NUQVRVUyA6IFdJVEhEUkFXX1NUQVRVUztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYWdlTnVtICs9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGdldFRyYW5zYWN0aW9uUmVjb3JkTGlzdChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdWlkOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhc3NldElkOiBhc3NldElkLFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bTogcGFnZU51bSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJBY2NvdW50OiB1c2VyQWNjb3VudFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWNvcmRUeXBlXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yZWNvcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnJlY29yZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGF0YVtpdGVtLnR4aWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHhpZDogaXRlbS50eGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGl0ZW0uY3RpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml4dGltZTogRGF0ZS5wYXJzZShpdGVtLmN0aW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNWYWx1ZVtpdGVtLnN0YXR1c11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbihcIi5cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsUmVhc29uOiBpdGVtLmZhaWxSZWFzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldE5hbWU6IGFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsTnVtOiByZXMudG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlRW5hYmxlZDogcmVzLnRvdGFsID4gcGFnZU51bSAqIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxEYXRhOiBhbGxEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBwYWdlTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5U3RhdHVzVHlwZTogaGlzdG9yeVN0YXR1c1R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlTdGF0dXNWYWx1ZTogaGlzdG9yeVN0YXR1c1ZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxOdW06IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2VFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhbGxEYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRUcmFuc2FjdGlvbkhpc3RvcnkoKSB7XHJcbiAgICAgICAgbGV0IHt1c2VySWQsIGFzc2V0SWQsIGFzc2V0TmFtZSwgcmVjb3JkVHlwZSwgdXNlckFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLl9nZXRUcmFuc2FjdGlvbkhpc3RvcnkoXHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgYXNzZXRJZCxcclxuICAgICAgICAgICAgYXNzZXROYW1lLFxyXG4gICAgICAgICAgICByZWNvcmRUeXBlLFxyXG4gICAgICAgICAgICB1c2VyQWNjb3VudCxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Fzc2V0TmFtZSwgY29tcGFjdFZpZXcsIHN0eWxlLCBtYXhIZWlnaHR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge2hlYWRlckhlaWdodCwgYWxsRGF0YX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgaGlzdG9yeSA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFsbERhdGEpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChhbGxEYXRhW2l0ZW1dKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoaXN0b3J5LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIudW5peHRpbWUgLSBhLnVuaXh0aW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0eWxlID0gc3R5bGUgPyBzdHlsZSA6IHt9O1xyXG4gICAgICAgIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgIGlmIChhbGxEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkaXNwbGF5X2hpc3RvcnkgPSBoaXN0b3J5Lmxlbmd0aFxyXG4gICAgICAgICAgICA/IGhpc3RvcnkubWFwKG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17by50eGlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC10ZCBjb2x1bW4taGlkZS10aW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17by5zdGF0dXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudHJhbnNhY3Rpb25faGlzdG9yeV9pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17by5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldE5hbWU9e2Fzc2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4aWQ9e28udHhpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57by50aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PVwibm9fcmVjZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Y29tcGFjdFZpZXcgPyBcIjJcIiA6IFwiM1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJvcGVyYXRpb24ubm9fcmVjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICBkaXNwbGF5X2hpc3RvcnkucHVzaChcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRvdGFsLXZhbHVlXCIga2V5PVwidG90YWxfdmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS10aW55XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7e3RoaXMuc3RhdGUubmV4dFBhZ2VFbmFibGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmdldFRyYW5zYWN0aW9uSGlzdG9yeS5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5jaGV2cm9uX2Rvd24udHJhbnNhY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudC10cmFuc2FjdGlvbnMgbm8tb3ZlcmZsb3dcIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhc2hib2FyZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5yZWNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1jb250ZW50IGdyaWQtYmxvY2sgbm8tbWFyZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZnVsbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidHJhbnNhY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb21wYWN0VmlldyA/IFwiIGNvbXBhY3RcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5kYXNoYm9hcmQgPyBcIiBkYXNoYm9hcmQtdGFibGVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwiaGlzdG9yeV9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5zdGF0dXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmluZm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PntkaXNwbGF5X2hpc3Rvcnl9PC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dG9uIG5hbWU9XCLkuIvkuIDpobVcIiAgLz4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZGV4SGlzdG9yeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgR2RleEFncmVlbWVudE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2NhbGU6IHByb3BzLnNldHRpbmdzLmdldChcImxvY2FsZVwiLCBcImVuXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlZnMpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlZnMuYWdyZWVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5yZWZzLmFncmVlbWVudDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgIFBzLmluaXRpYWxpemUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlZnMpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlZnMuYWdyZWVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5yZWZzLmFncmVlbWVudDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgIFBzLnVwZGF0ZShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEFncmVlbWVudChsb2NhbGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGxvY2FsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiemhcIjpcclxuICAgICAgICAgICAgY2FzZSBcImNuXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYWdyZWVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+55So5oi35pyN5Yqh5Y2P6K6uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPQlNJRElBTiBURUNITk9MT0dZIENPLiBQVEUuIExURC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaYr+S4gOWutuagueaNruaWsOWKoOWdoeWFseWSjOWbveazleW+i+aIkOeri+eahOWFrOWPuO+8jEdERVjmmK/nlLHor6Xlhazlj7jov5DokKXnmoTmr5TnibnogqHnvZHlhbMo5Lul5LiL56ew4oCcR0RFWOKAneaIluKAnOacrOe9keWFs+KAnSnvvIzkuLvorr/pl67lhaXlj6PkuLpodHRwczovL3d3dy5nZGV4Lmlv77yMR0RFWOaYr+S4gOS4quWcqOavlOeJueiCoeW5s+WPsOS4uueUqOaIt+aPkOS+m+aVsOWtl+i1hOS6p+WFheaPkOacjeWKoe+8iOS7peS4i+ensOKAnOivpeacjeWKoeKAneaIluKAnOacjeWKoeKAne+8ieeahOW5s+WPsOOAguS4uuS6huacrOWNj+iuruihqOi/sOS5i+aWueS+v++8jOWFrOWPuOWSjOivpee9keWFs+WcqOacrOWNj+iuruS4reWQiOensOS9v+eUqOKAnOaIkeS7rOKAneaIluWFtuS7luesrOS4gOS6uuensOensOWRvOOAguS9v+eUqOivpeacjeWKoeeahOiHqueEtuS6uuaIluWFtuS7luS4u+S9k+Wdh+S4uuacrOe9keWFs+eahOeUqOaIt++8jOacrOWNj+iuruS4uuihqOi/sOS5i+S+v+WIqe+8jOS7peS4i+S9v+eUqOKAnOaCqOKAneaIluWFtuS7luesrOS6jOS6uuensOOAguaIkeS7rOWSjOaCqOWcqOacrOWNj+iuruS4reWQiOensOS4uuKAnOWPjOaWueKAne+8jOaIkeS7rOaIluaCqOWNleensOS4uuKAnOS4gOaWueKAneOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPumHjeimgeaPkOekuu+8mjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5oiR5Lus5Zyo5q2k54m55Yir5o+Q6YaS5oKo77yaPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuIOaVsOWtl+i1hOS6p+acrOi6q+S4jeeUseS7u+S9lemHkeiejeacuuaehOaIluWFrOWPuOaIluacrOe9keWFs+WPkeihjO+8m1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaVsOWtl+i1hOS6p+W4guWcuuaYr+WFqOaWsOeahOOAgeacque7j+ehruiupOeahO+8jOiAjOS4lOWPr+iDveS4jeS8muWinumVv++8m1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaVsOWtl+i1hOS6p+S4u+imgeeUseaKleacuuiAheWkp+mHj+S9v+eUqO+8jOmbtuWUruWSjOWVhuS4muW4guWcuuS9v+eUqOebuOWvuei+g+Wwke+8jOaVsOWtl+i1hOS6p+S6pOaYk+WtmOWcqOaegemrmOmjjumZqe+8jOWFtuWFqOWkqeS4jemXtOaWreS6pOaYk++8jOayoeaciea2qOi3jOmZkOWItu+8jOS7t+agvOWuueaYk+WPl+W6hOWutuOAgeWFqOeQg+aUv+W6nOaUv+etlueahOW9seWTjeiAjOWkp+W5heazouWKqO+8m1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWboOWQhOWbveazleW+i+OAgeazleinhOWSjOinhOiMg+aAp+aWh+S7tueahOWItuWumuaIluiAheS/ruaUue+8jOaVsOWtl+i1hOS6p+S6pOaYk+maj+aXtuWPr+iDveiiq+aaguWBnOaIluiiq+emgeatouOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pWw5a2X6LWE5Lqn5Lqk5piT5pyJ5p6B6auY6aOO6Zmp77yM5bm25LiN6YCC5ZCI57ud5aSn6YOo5YiG5Lq65aOr44CC5oKo5LqG6Kej5ZKM55CG6Kej5q2k5oqV6LWE5pyJ5Y+v6IO95a+86Ie06YOo5YiG5o2f5aSx5oiW5YWo6YOo5o2f5aSx77yM5omA5Lul5oKo5bqU6K+l5Lul6IO95om/5Y+X55qE5o2f5aSx56iL5bqm5p2l5Yaz5a6a5oqV6LWE55qE6YeR6aKd44CC5oKo5LqG6Kej5ZKM55CG6Kej5pWw5a2X6LWE5Lqn5Lya5Lqn55Sf6KGN55Sf6aOO6Zmp77yM5omA5Lul5aaC5pyJ5Lu75L2V55aR6Zeu77yM5bu66K6u5YWI5a+75rGC55CG6LSi6aG+6Zeu55qE5Y2P5Yqp44CC5q2k5aSW77yM6Zmk5LqG5LiK6L+w5o+Q5Y+K6L+H55qE6aOO6Zmp5Lul5aSW77yM6L+Y5Lya5pyJ5pyq6IO96aKE5rWL55qE6aOO6Zmp5a2Y5Zyo44CC5oKo5bqU5oWO6YeN6ICD6JmR5bm255So5riF5pmw55qE5Yik5pat6IO95Yqb5Y676K+E5Lyw6Ieq5bex55qE6LSi5pS/54q25Ya15Y+K5LiK6L+w5ZCE6aG56aOO6Zmp6ICM5L2c5Ye65Lu75L2V5Lmw5Y2W5pWw5a2X6LWE5Lqn55qE5Yaz5a6a77yM5bm25om/5ouF55Sx5q2k5Lqn55Sf55qE5YWo6YOo5o2f5aSx77yM5oiR5Lus5a+55q2k5LiN5om/5ouF5Lu75L2V6LSj5Lu744CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5pWs5ZGK5oKo77yaPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEu5oKo5LqG6Kej5q+U54m56IKh5piv5Z+65LqO5Yy65Z2X6ZO+55qE5Y675Lit5b+D5YyW5Lqk5piT5bmz5Y+w77yM5YW25Z+656GA6LSm5Y+35pyN5Yqh5ZKM5Lqk5piT5pKu5ZCI5pyN5Yqh6YO955Sx5q+U54m56IKh5bmz5Y+w5o+Q5L6b44CC5Lqm5pyJ5YW25a6D5py65p6E5oiW5Liq5Lq65Zyo5q+U54m56IKh5bmz5Y+w5LiK5Y+R6KGM6LWE5Lqn5Y+K77yP5oiW5o+Q5L6b5pyN5Yqh44CC5oKo5LqG6Kej5pys572R5YWz5LuF5L2c5Li65oKo5ZCR5q+U54m56IKh5bmz5Y+w5YWF5o+Q5pWw5a2X6LWE5Lqn55qE5bel5YW344CC5pys572R5YWz5Y+q5a+56Ieq6Lqr5Y+R6KGM55qE5Lqk5piT5Luj5biB6LWE5Lqn77yI5ZCN56ew5LulR0RFWC7kuLrliY3nvIDvvInotJ/otKPvvIzkuI3lr7nmr5TnibnogqHkuIrlhbblroPmnLrmnoTmiJbkuKrkurrlj5HooYznmoTotYTkuqfotJ/otKPvvIzmnKznvZHlhbPkuI3lj4LkuI7mgqjnmoTku7vkvZXkuqTmmJPvvIzmgqjlupToh6rooYzosKjmhY7liKTmlq3noa7lrprnm7jlhbPmlbDlrZfotYTkuqflj4ov5oiW5L+h5oGv55qE55yf5a6e5oCn44CB5ZCI5rOV5oCn5ZKM5pyJ5pWI5oCn77yM5bm26Ieq6KGM5om/5ouF5Zug5q2k5Lqn55Sf55qE6LSj5Lu75LiO5o2f5aSx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5q+U54m56IKh5Y675Lit5b+D5YyW5Lqk5piT57O757uf5a2Y5pyJ6aOO6Zmp77yM5YyF5ous5L2G5LiN6ZmQ5LqO6L2v5Lu277yM56Gs5Lu25ZKM5LqS6IGU572R6ZO+57uT55qE5aSx6LSl77yM55So5oi36LSm5oi357O757uf55qE5a6J5YWo6aOO6Zmp562J44CC55Sx5LqO5oiR5Lus5LiN6IO95o6n5Yi25LqS6IGU572R5Lul5Y+K5q+U54m56IKh5bmz5Y+w55qE5Y+v6Z2g5oCn5ZKM5Y+v55So5oCn77yM5oiR5Lus5LiN5Lya5a+55LiK6L+w6aOO6Zmp6YCg5oiQ55qE55So5oi35o2f5aSx5om/5ouF5Lu75L2V6LSj5Lu744CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg56aB5q2i5L2/55So5pys572R5YWz5LuO5LqL5rSX6ZKx44CB6LWw56eB44CB5ZWG5Lia6LS/6LWC562J5LiA5YiH6Z2e5rOV5Lqk5piT5rS75Yqo77yM6Iul5Y+R546w5q2k57G75LqL5Lu277yM5pys572R5YWz5bCG6YeH5Y+W5ZCE56eN5Y+v5L2/55So5LmL5omL5q6177yM5YyF5ous5L2G5LiN6ZmQ5LqO5Lit5q2i5o+Q5L6b5pyN5Yqh77yM6YCa55+l55u45YWz5p2D5Yqb5py65YWz562J77yM5oiR5Lus5LiN5om/5ouF55Sx5q2k5Lqn55Sf55qE5omA5pyJ6LSj5Lu75bm25L+d55WZ5ZCR55u45YWz5Lq65aOr6L+956m26LSj5Lu755qE5p2D5Yip44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiA44CB5oC75YiZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5Zyo5L2/55So5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh5LmL5YmN77yM5bqU5LuU57uG6ZiF6K+75pys5Y2P6K6u77yM5aaC5pyJ5LiN55CG6Kej5LmL5aSE5oiW5YW25LuW5b+F6KaB77yM6K+35ZKo6K+i5LiT5Lia5b6L5biI44CC5aaC5oKo5LiN5ZCM5oSP5pys5Y2P6K6u5Y+KL+aIlumaj+aXtuWvueWFtueahOS/ruaUue+8jOivt+aCqOeri+WNs+WBnOatouS9v+eUqOacrOe9keWFs+aPkOS+m+eahOacjeWKoeOAguS9v+eUqOacrOe9keWFs+eahOS7u+S9leacjeWKoeWNs+ihqOekuuaCqOW3suS6huino+W5tuWujOWFqOWQjOaEj+acrOWNj+iuruWQhOmhueWGheWuue+8jOWMheaLrOacrOe9keWFs+WvueacrOWNj+iurumaj+aXtuaJgOWBmueahOS7u+S9leS/ruaUueOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkvb/nlKjmnKznvZHlhbPmj5DkvpvnmoTmnI3liqHlkozlip/og73vvIzmgqjlsIbooqvop4bkuLrlt7LpmIXor7vvvIznkIbop6PlubbvvJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gMS4yLjEg5o6l5Y+X5pys5Y2P6K6u5omA5pyJ5p2h5qy+5Y+K5p2h5Lu255qE57qm5p2f44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMi4yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjnoa7orqTmgqjlt7LlubTmu6EyMeWRqOWygeaIluagueaNruS4jeWQjOeahOWPr+mAgueUqOeahOazleW+i+inhOWumueahOWFt+acieWPr+iuoueri+WQiOWQjOeahOazleWumuW5tOm+hO+8jOW5tuacieWFheWIhueahOiDveWKm+aOpeWPl+i/meS6m+adoeasvu+8jOW5tuiuoueri+S6pOaYk++8jOS9v+eUqOacrOe9keWFs+i/m+ihjOaVsOWtl+i1hOS6p+S6pOaYk+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yLjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaCqOS/neivgeS6pOaYk+S4rea2ieWPiuWIsOeahOWxnuS6juaCqOeahOaVsOWtl+i1hOS6p+Wdh+S4uuWQiOazleWPluW+l+W5tuaJgOacieOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yLjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaCqOWQjOaEj+aCqOS4uuaCqOiHqui6q+eahOS6pOaYk+aIlumdnuS6pOaYk+ihjOS4uuaJv+aLheWFqOmDqOi0o+S7u+WSjOS7u+S9leaUtuebiuaIluS6j+aNn+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaCqOWQjOaEj+mBteWuiOS7u+S9leacieWFs+azleW+i+eahOinhOWumu+8jOWwseeojuWKoeebrueahOiAjOiogO+8jOWMheaLrOaKpeWRiuS7u+S9leS6pOaYk+WIqea2puOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yLjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOWNj+iuruWPquaYr+WwseaCqOS4juaIkeS7rOS5i+mXtOi+vuaIkOeahOadg+WIqeS5ieWKoeWFs+ezu+i/m+ihjOe6puadn++8jOiAjOW5tuS4jea2ieWPiuacrOe9keWFs+eUqOaIt+S5i+mXtOaIluWFtuS7lue9keWFs+WSjOaCqOS5i+mXtOWboOaVsOWtl+i1hOS6p+S6pOaYk+iAjOS6p+eUn+eahOazleW+i+WFs+ezu+WPiuazleW+i+e6oOe6t+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS6jOOAgeWNj+iuruS/ruiuojwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zkv53nlZnkuI3ml7bkv67orqLmnKzljY/orq7jgIHlubbku6XlhaznpLrnmoTmlrnlvI/ov5vooYzlhazlkYrjgIHkuI3lho3ljZXni6zpgJrnn6XmgqjnmoTmnYPliKnvvIzlj5jmm7TlkI7nmoTljY/orq7kvJrlnKjmnKzljY/orq7pppbpobXmoIfms6jlj5jmm7Tml7bpl7TvvIzkuIDnu4/lnKjlhazluIPvvIznq4vljbPoh6rliqjnlJ/mlYjjgILmgqjlupTkuI3ml7bmtY/op4jlj4rlhbPms6jmnKzljY/orq7nmoTmm7TmlrDlj5jmm7Tml7bpl7Tlj4rmm7TmlrDlhoXlrrnvvIzlpoLmgqjkuI3lkIzmhI/nm7jlhbPlj5jmm7TvvIzlupTlvZPnq4vljbPlgZzmraLkvb/nlKjmnKznvZHlhbPmnI3liqHvvJvmgqjnu6fnu63kvb/nlKjmnKznvZHlhbPmnI3liqHvvIzljbPooajnpLrmgqjmjqXlj5flubblkIzmhI/nu4/kv67orqLnmoTljY/orq7nmoTnuqbmnZ/jgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7kuInjgIHmnI3liqE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys572R5YWz5Y+q5Li65oKo5o+Q5L6b5ZCR5q+U54m56IKh5bmz5Y+w5Yay5YWl5ZKM5o+Q5Y+W5pWw5a2X6LWE5Lqn55qE5pyN5Yqh77yM5pys572R5YWz5bm25LiN5L2c5Li65Lmw5a625oiW5Y2W5a625Y+C5LiO5Lmw5Y2W5pWw5a2X6LWE5Lqn6KGM5Li65pys6Lqr77yb5pys572R5YWz5LiN5o+Q5L6b5Lu75L2V5Zu95a625rOV5a6a6LSn5biB5YWF5YWl5ZKM5o+Q5Y+W55qE55u45YWz5pyN5Yqh44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDMuMSDmnI3liqHlhoXlrrk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMy4xLjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaCqOacieadg+mAmui/h+acrOe9keWFs+WQkeavlOeJueiCoeW5s+WPsOWGsuWFpeaIluaPkOWPluaVsOWtl+i1hOS6p+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAzLjEuMiDmnKznvZHlhbPmib/or7rkuLrmgqjmj5DkvpvnmoTlhbbku5bmnI3liqHjgII8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAzLjIu5pyN5Yqh6KeE5YiZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4g5oKo5om/6K+66YG15a6I5LiL5YiX5pys572R5YWz5pyN5Yqh6KeE5YiZ77yaPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuMi4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlupTlvZPpgbXlrojms5Xlvovms5Xop4TjgIHop4Tnq6DjgIHlj4rmlL/nrZbopoHmsYLnmoTop4TlrprvvIzkv53or4HotKbmiLfkuK3miYDmnInmlbDlrZfotYTkuqfmnaXmupDnmoTlkIjms5XmgKfvvIzkuI3lvpflnKjmnKznvZHlhbPmiJbliKnnlKjmnKznvZHlhbPmnI3liqHku47kuovpnZ7ms5XmiJblhbbku5bmjZ/lrrPmnKznvZHlhbPmiJbnrKzkuInmlrnmnYPnm4rnmoTmtLvliqjvvIzlpoLlj5HpgIHmiJbmjqXmlLbku7vkvZXov53ms5XjgIHov53op4TjgIHkvrXniq/ku5bkurrmnYPnm4rnmoTkv6Hmga/vvIzlj5HpgIHmiJbmjqXmlLbkvKDplIDmnZDmlpnmiJblrZjlnKjlhbbku5bljbHlrrPnmoTkv6Hmga/miJboqIDorrrvvIzmnKrnu4/mnKznvZHlhbPmjojmnYPkvb/nlKjmiJbkvKrpgKDmnKznvZHlhbPnlLXlrZDpgq7ku7bpopjlpLTkv6Hmga/nrYnjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuMi4yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlnKjkvb/nlKjmnKznvZHlhbPmnI3liqHkuYvliY3lupTlhYXliIbkuobop6Pmr5TnibnogqHotKblj7fnmoTkvb/nlKjluLjor4bvvIzlgZrlpb3nm7jlupTotKblj7fnmoTlpIfku73lj4rlr4bnoIHkv53lrZjlt6XkvZzvvIzlr7nkuo7mr5TnibnogqHotKbmiLflronlhajpl67popjpgKDmiJDnmoTmjZ/lpLHvvIzmnKznvZHlhbPkuI3mib/mi4Xku7vkvZXotKPku7vjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuMi4zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlnKjkvb/nlKjmnKznvZHlhbPmj5DkvpvnmoTmnI3liqHov4fnqIvkuK3vvIzmiYDkuqfnlJ/nmoTlupTnurPnqI7otYvvvIzku6Xlj4rkuIDliIfnoazku7bjgIHova/ku7bjgIHmnI3liqHlj4rlhbblroPmlrnpnaLnmoTotLnnlKjvvIzlnYfnlLHmgqjni6zoh6rmib/mi4XjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuMi40XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlupTlvZPpgbXlrojmnKznvZHlhbPkuI3ml7blj5HluIPlkozmm7TmlrDnmoTmnKzljY/orq7ku6Xlj4rlhbbku5bmnI3liqHmnaHmrL7lkozmk43kvZzop4TliJnvvIzmnInmnYPpmo/ml7bnu4jmraLkvb/nlKjmnKznvZHlhbPmj5DkvpvnmoTmnI3liqHjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7lm5vjgIHmnKznvZHlhbPnmoTmnYPliKnlkozkuYnliqE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNC4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKznvZHlhbPmnInmnYPlnKjlj5HnjrDmnKznvZHlhbPkuIrmmL7npLrnmoTku7vkvZXkv6Hmga/lrZjlnKjmmI7mmL7plJnor6/ml7bvvIzlr7nkv6Hmga/kuojku6Xmm7TmraPjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys572R5YWz5L+d55WZ6ZqP5pe25L+u5pS544CB5Lit5q2i5oiW57uI5q2i5pys572R5YWz5pyN5Yqh55qE5p2D5Yip77yM5pys572R5YWz6KGM5L2/5L+u5pS55oiW5Lit5q2i5pyN5Yqh55qE5p2D5Yip5LiN6ZyA5LqL5YWI5ZGK55+l5oKo77yb5pys572R5YWz57uI5q2i5pys572R5YWz5LiA6aG55oiW5aSa6aG55pyN5Yqh55qE77yM57uI5q2i6Ieq5pys572R5YWz5Zyo572R5YWz5LiK5Y+R5biD57uI5q2i5YWs5ZGK5LmL5pel55Sf5pWI44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOe9keWFs+W6lOW9k+mHh+WPluW/heimgeeahOaKgOacr+aJi+auteWSjOeuoeeQhuaOquaWveS/nemanOacrOe9keWFs+eahOato+W4uOi/kOihjOOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS6lOOAgei1lOWBvzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWcqOS7u+S9leaDheWGteS4i++8jOaIkeS7rOWvueaCqOeahOebtOaOpeaNn+Wus+eahOi1lOWBv+i0o+S7u+Wdh+S4jeS8mui2hei/h+aCqOS7juS9v+eUqOacrOe9keWFs+acjeWKoeS6p+eUn+eahOS4uuacn+S4ie+8iFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgM++8ieS4quaciOeahOaAu+i0ueeUqOOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuWFreOAgeWvu+axguemgeS7pOaVkea1jueahOadg+WIqTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zlkozmgqjlnYfmib/orqTmma7pgJrms5Xlr7nov53nuqbmiJblj6/og73ov53nuqbmg4XlhrXnmoTmlZHmtY7mjqrmlr3mmK/lj6/og73mmK/kuI3otrPku6XlvKXooaXmiJHku6zpga3lj5fnmoTlhajpg6jmjZ/lpLHnmoTvvIzmlYXpnZ7ov53nuqbmlrnmnInmnYPlnKjov53nuqbmiJblj6/og73ov53nuqbmg4XlhrXkuIvlr7vmsYLnpoHku6TmlZHmtY7ku6Xlj4rmma7pgJrms5XmiJbooaHlubPms5XlhYHorrjnmoTlhbbku5bmiYDmnInnmoTooaXmlZHmjqrmlr3jgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7kuIPjgIHotKPku7vpmZDliLbkuI7lhY3otKM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjkuobop6PlubblkIzmhI/vvIzlnKjku7vkvZXmg4XlhrXkuIvvvIzmiJHku6zkuI3lsLHku6XkuIvlkITkuovpobnmib/mi4XotKPku7vvvJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjEg5pS25YWl55qE5o2f5aSx77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjIg5Lqk5piT5Yip5ram5oiW5ZCI5ZCM5o2f5aSx77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjMg5Lia5Yqh5Lit5patPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjQg6aKE5pyf5Y+v6IqC55yB55qE6LSn5biB55qE5o2f5aSx77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjUg5L+h5oGv55qE5o2f5aSx77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjYg5py65Lya44CB5ZWG6KqJ5oiW5aOw6KqJ55qE5o2f5aSx77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjcg5pWw5o2u55qE5o2f5Z2P5oiW5o2f5aSx77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4xLjgg6LSt5Lmw5pu/5Luj5Lqn5ZOB5oiW5pyN5Yqh55qE5oiQ5pys77ybPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMS45XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDku7vkvZXnlLHkuo7kvrXmnYPvvIjljIXmi6zov4flpLHvvInjgIHov53nuqbmiJblhbbku5bku7vkvZXljp/lm6DkuqfnlJ/nmoTpl7TmjqXnmoTjgIHnibnmrornmoTmiJbpmYTluKbmgKfnmoTmjZ/lpLHmiJbmjZ/lrrPvvIzkuI3orrrov5nnp43mjZ/lpLHmiJbmjZ/lrrPmmK/lkKblj6/ku6XkuLrmiJHku6zlkIjnkIbpooTop4HvvJvkuI3orrrmiJHku6zmmK/lkKbkuovlhYjooqvlkYrnn6XlrZjlnKjmraTnp43mjZ9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWkseaIluaNn+Wus+eahOWPr+iDveaAp+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy4yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjkuobop6PlubblkIzmhI/vvIzmiJHku6zkuI3lr7nlm6DkuIvov7Dku7vkuIDmg4XlhrXogIzlr7zoh7TmgqjnmoTku7vkvZXmjZ/lrrPotZTlgb/mib/mi4XotKPku7vvvJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMi4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zmnInlkIjnkIbnmoTnkIbnlLHorqTkuLrmgqjnmoTlhbfkvZPkuqTmmJPkuovpobnlj6/og73lrZjlnKjph43lpKfov53ms5XmiJbov53nuqbmg4XlvaLjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMi4yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zmnInlkIjnkIbnmoTnkIbnlLHorqTkuLrmgqjlnKjmnKznvZHlhbPnmoTooYzkuLrmtonlq4zov53ms5XmiJbkuI3lvZPjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMi4zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpgJrov4fmnKznvZHlhbPmnI3liqHotK3kubDmiJbojrflj5bku7vkvZXmlbDmja7jgIHkv6Hmga/miJbov5vooYzkuqTmmJPnrYnooYzkuLrmiJbmm7/ku6PooYzkuLrkuqfnlJ/nmoTotLnnlKjlj4rmjZ/lpLHjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gNy4yLjQg5oKo5a+55pys572R5YWz5pyN5Yqh55qE6K+v6Kej44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuMi41XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDku7vkvZXpnZ7lm6DmiJHku6znmoTljp/lm6DogIzlvJXotbfnmoTkuI7mnKznvZHlhbPmj5DkvpvnmoTmnI3liqHmnInlhbPnmoTlhbblroPmjZ/lpLHjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5a+555Sx5LqO5L+h5oGv572R57uc6K6+5aSH57u05oqk44CB5L+h5oGv572R57uc6L+e5o6l5pWF6Zqc44CB55S16ISR44CB6YCa6K6v5oiW5YW25LuW57O757uf55qE5pWF6Zqc44CB55S15Yqb5pWF6Zqc44CB5aSp5rCU5Y6f5Zug44CB5oSP5aSW5LqL5pWF44CB572i5bel44CB5Yqz5Yqo5LqJ6K6u44CB5pq05Lmx44CB6LW35LmJ44CB6aqa5Lmx44CB55Sf5Lqn5Yqb5oiW55Sf5Lqn6LWE5paZ5LiN6Laz44CB54Gr54G+44CB5rSq5rC044CB6aOO5pq044CB54iG54K444CB5oiY5LqJ44CB6ZO26KGM5oiW5YW25LuW5ZCI5L2c5pa55Y6f5Zug44CB5pWw5a2X6LWE5Lqn5biC5Zy65bSp5rqD44CB5pS/5bqc6KGM5Li644CBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlj7jms5XmiJbooYzmlL/mnLrlhbPnmoTlkb3ku6TjgIHlhbbku5bkuI3lnKjmiJHku6zlj6/mjqfojIPlm7TlhoXmiJbmiJHku6zml6Dog73lipvmjqfliLbnmoTooYzkuLrmiJbnrKzkuInmlrnnmoTljp/lm6DogIzpgKDmiJDnmoTkuI3og73mnI3liqHmiJblu7bov5/mnI3liqHvvIzku6Xlj4rpgKDmiJDnmoTmgqjnmoTmjZ/lpLHvvIzmiJHku6zkuI3mib/mi4Xku7vkvZXotKPku7vjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5LiN6IO95L+d6K+B5pys572R5YWz5YyF5ZCr55qE5YWo6YOo5L+h5oGv44CB56iL5bqP44CB5paH5pys562J5a6M5YWo5a6J5YWo77yM5LiN5Y+X5Lu75L2V55eF5q+S44CB5pyo6ams562J5oG25oSP56iL5bqP55qE5bmy5omw5ZKM56C05Z2P77yM5pWF5oKo55m76ZmG44CB5L2/55So5pys572R5YWz5Lu75L2V5pyN5Yqh5oiW5LiL6L295Y+K5L2/55So6K+l5LiL6L2955qE5Lu75L2V56iL5bqP44CB5L+h5oGv44CB5pWw5o2u562J5Z2H5piv5oKo5Liq5Lq655qE5Yaz5a6a5bm26Ieq6KGM5om/5ouF6aOO6Zmp5Y+K5Y+v6IO95Lqn55Sf55qE5o2f5aSx44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaIkeS7rOWvueacrOe9keWFs+S4remTvuaOpeeahOS7u+S9leesrOS4ieaWuee9keWFs+eahOS7u+S9leS/oeaBr+OAgeS6p+WTgeWPiuS4muWKoeWPiuWFtuS7luS7u+S9leW9ouW8j+eahOS4jeWxnuS6juaIkeS7rOeahOS4u+S9k+eahOWGheWuueetieS4jeWBmuS7u+S9leS/neivgeWSjOaJv+ivuu+8jOaCqOWmguaenOS9v+eUqOesrOS4ieaWuee9keWFs+aPkOS+m+eahOS7u+S9leacjeWKoeOAgeS/oeaBr+WPiuS6p+WTgeetieWdh+S4uuaCqOS4quS6uuWGs+WumuS4lOaJv+aLheeUseatpOS6p+eUn+eahOS4gOWIh+i0o+S7u+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy42XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmiJHku6zlr7nkuo7mgqjkvb/nlKjmnKznvZHlhbPmnI3liqHkuI3lgZrku7vkvZXmmI7npLrmiJbmmpfnpLrnmoTkv53or4HvvIzljIXmi6zkvYbkuI3pmZDkuo7mnKznvZHlhbPmj5DkvpvmnI3liqHnmoTpgILnlKjmgKfjgIHmsqHmnInplJnor6/miJbnlo/mvI/jgIHmjIHnu63mgKfjgIHlh4bnoa7mgKfjgIHlj6/pnaDmgKfjgIHpgILnlKjkuo7mn5DkuIDnibnlrprnlKjpgJTjgILlkIzml7bvvIzmiJHku6zkuZ/kuI3lr7nmnKznvZHlhbPmj5DkvpvnmoTmnI3liqHmiYDmtonlj4rnmoTmioDmnK/lj4rkv6Hmga/nmoTmnInmlYjmgKfjgIHlh4bnoa7mgKfjgIHmraPnoa7mgKfjgIHlj6/pnaDmgKfjgIHotKjph4/jgIHnqLPlrprjgIHlrozmlbTlkozlj4rml7bmgKfkvZzlh7rku7vkvZXmib/or7rlkozkv53or4HjgILmmK/lkKbnmbvpmYbmiJbkvb/nlKjmnKznvZHlhbPmj5DkvpvnmoTmnI3liqHmmK/mgqjkuKrkurrnmoTlhrPlrprkuJToh6rooYzmib/mi4Xpo47pmanlj4rlj6/og73kuqfnlJ/nmoTmjZ/lpLHjgILmiJHku6zlr7nkuo7mlbDlrZfotYTkuqfnmoTluILlnLrjgIHku7flgLzlj4rku7fmoLznrYnkuI3lgZrku7vkvZXmmI7npLrmiJbmmpfnpLrnmoTkv53or4HvvIzmgqjnkIbop6Plubbkuobop6PmlbDlrZfotYTkuqfluILlnLrmmK/kuI3nqLPlrprnmoTvvIzku7fmoLzlkozku7flgLzpmo/ml7bkvJrlpKfluYXms6LliqjmiJbltKnnm5jvvIzkuqTmmJPmlbDlrZfotYTkuqfmmK/mgqjkuKrkurrnmoToh6rnlLHpgInmi6nlj4rlhrPlrprkuJToh6rooYzmib/mi4Xpo47pmanlj4rlj6/og73kuqfnlJ/nmoTmjZ/lpLHjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDcuN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5Y2P6K6u5Lit6KeE5a6a55qE5oiR5Lus55qE5L+d6K+B5ZKM5om/6K+65piv55Sx5oiR5Lus5bCx5pys5Y2P6K6u5ZKM5pys572R5YWz5o+Q5L6b55qE5pyN5Yqh55qE5ZSv5LiA5L+d6K+B5ZKM6ZmI6L+w77yM5bm25Y+W5Luj5Lu75L2V5YW25LuW6YCU5b6E5ZKM5pa55byP5Lqn55Sf55qE5L+d6K+B5ZKM5om/6K+677yM5peg6K665piv5Lmm6Z2i55qE5oiW5Y+j5aS055qE77yM5piO56S655qE5oiW5pqX56S655qE44CC5omA5pyJ6L+Z5Lqb5L+d6K+B5ZKM6ZmI6L+w5LuF5LuF5Luj6KGo5oiR5Lus6Ieq6Lqr55qE5om/6K+65ZKM5L+d6K+B77yM5bm25LiN5L+d6K+B5Lu75L2V56ys5LiJ5pa56YG15a6I5pys5Y2P6K6u5Lit55qE5L+d6K+B5ZKM5om/6K+644CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaIkeS7rOW5tuS4jeaUvuW8g+acrOWNj+iuruS4reacquaPkOWPiueahOWcqOazleW+i+mAgueUqOeahOacgOWkp+iMg+WbtOWGheaIkeS7rOS6q+acieeahOmZkOWItuOAgeWFjemZpOaIluaKtemUgOaIkeS7rOaNn+Wus+i1lOWBv+i0o+S7u+eahOS7u+S9leadg+WIqeOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNy45XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkvb/nlKjmnKznvZHlhbPmnI3liqHljbPooajnpLrorqTlj6/miJHku6zmjInnhafmnKzljY/orq7kuK3op4TlrprnmoTop4TliJnov5vooYznmoTku7vkvZXmk43kvZzvvIzkuqfnlJ/nmoTku7vkvZXpo47pmanlnYfnlLHmgqjmib/mi4XjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7lhavjgIHnn6Xor4bkuqfmnYM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOC4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKznvZHlhbPmiYDljIXlkKvnmoTlhajpg6jmmbrlipvmiJDmnpzljIXmi6zkvYbkuI3pmZDkuo7nvZHlhbPmoIflv5fjgIHmlbDmja7lupPjgIHnvZHlhbPorr7orqHjgIHmloflrZflkozlm77ooajjgIHova/ku7bjgIHnhafniYfjgIHlvZXlg4/jgIHpn7PkuZDjgIHlo7Dpn7Plj4rlhbbliY3ov7Dnu4TlkIjvvIzova/ku7bnvJbor5HjgIHnm7jlhbPmupDku6PnoIHlkozova/ku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICjljIXmi6zlsI/lupTnlKjnqIvluo/lkozohJrmnKwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDnmoTnn6Xor4bkuqfmnYPmnYPliKnlnYflvZLmnKznvZHlhbPmiYDmnInjgILmgqjkuI3lvpfkuLrllYbkuJrnm67nmoTlpI3liLbjgIHmm7TmlLnjgIHmi7fotJ3jgIHlj5HpgIHmiJbkvb/nlKjliY3ov7Dku7vkvZXmnZDmlpnmiJblhoXlrrnjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDguMiDmnKznvZHlhbPlkI3np7DkuK3ljIXlkKvnmoTmiYDmnInmnYPliKlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICjljIXmi6zkvYbkuI3pmZDkuo7llYboqonlkozllYbmoIfjgIHmoIflv5cpIOWdh+W9kuWFrOWPuOaJgOacieOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOC4zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjmjqXlj5fmnKzljY/orq7ljbPop4bkuLrmgqjkuLvliqjlsIblhbblnKjmnKznvZHlhbPlj5HooajnmoTku7vkvZXlvaLlvI/nmoTkv6Hmga/nmoTokZfkvZzmnYPvvIxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWMheaLrOS9huS4jemZkOS6ju+8muWkjeWItuadg+OAgeWPkeihjOadg+OAgeWHuuenn+adg+OAgeWxleiniOadg+OAgeihqOa8lOadg+OAgeaUvuaYoOadg+OAgeW5v+aSreadg+OAgeS/oeaBr+e9kee7nOS8oOaSreadg+OAgeaRhOWItuadg+OAgeaUuee8luadg+OAgee/u+ivkeadg+OAgeaxh+e8luadg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lul5Y+K5bqU5b2T55Sx6JGX5L2c5p2D5Lq65Lqr5pyJ55qE5YW25LuW5Y+v6L2s6K6p5p2D5Yip5peg5YG/54us5a626L2s6K6p57uZ5pys572R5YWz5omA5pyJ77yM5pys572R5YWz5pyJ5p2D5Yip5bCx5Lu75L2V5Li75L2T5L615p2D5Y2V54us5o+Q6LW36K+J6K685bm26I635b6X5YWo6YOo6LWU5YG/44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKzljY/orq7mlYjlipvlj4rkuo7mgqjlnKjmnKznvZHlhbPlj5HluIPnmoTku7vkvZXlj5fokZfkvZzmnYPms5Xkv53miqTnmoTkvZzlk4HlhoXlrrnvvIxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXoOiuuuivpeWGheWuueW9ouaIkOS6juacrOWNj+iuruetvuiuouWJjei/mOaYr+acrOWNj+iuruetvuiuouWQjuOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOC40XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqjlnKjkvb/nlKjmnKznvZHlhbPmnI3liqHov4fnqIvkuK3kuI3lvpfpnZ7ms5Xkvb/nlKjmiJblpITliIbmnKznvZHlhbPmiJbku5bkurrnmoTnn6Xor4bkuqfmnYPmnYPliKnjgILmgqjkuI3lvpflsIblt7Llj5Hooajkuo7mnKznvZHlhbPnmoTkv6Hmga/ku6Xku7vkvZXlvaLlvI/lj5HluIPmiJbmjojmnYPlhbblroPnvZHlhbPvvIjlj4rlqpLkvZPvvInkvb/nlKjjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDguNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKo5L2/55So5pys572R5YWz5o+Q5L6b55qE5Lu75L2V5pyN5Yqh5Z2H5LiN6KeG5Li65oiR5Lus5ZCR5oKo6L2s6K6p5Lu75L2V55+l6K+G5Lqn5p2D44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5Lmd44CB5Y+v5YiG5Ymy5oCnPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWmguacrOWNj+iuruS4reeahOS7u+S9leadoeasvuiiq+S7u+S9leacieeuoei+luadg+eahOazlemZouiupOWumuS4uuS4jeWPr+aJp+ihjOeahO+8jOaXoOaViOeahOaIlumdnuazleeahO+8jOW5tuS4jeW9seWTjeacrOWNj+iurueahOWFtuS9meadoeasvueahOaViOWKm+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuWNgeOAgemdnuS7o+eQhuWFs+ezuzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKzljY/orq7kuK3nmoTku7vkvZXop4TlrprlnYfkuI3lj6/ooqvorqTkuLrliJvpgKDkuobjgIHmmpfnpLrkuobmiJbku6Xlhbbku5bmlrnlvI/lsIbmiJHku6zop4bkuLrmgqjnmoTku6PnkIbkurrjgIHlj5fmiZjkurrmiJblhbbku5bku6PooajkurrvvIzmnKzljY/orq7mnInlhbbku5bop4TlrprnmoTpmaTlpJbjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ljYHkuIDjgIHlvIPmnYM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Lus5oiW5oKo5Lu75L2V5LiA5pa55a+56L+956m25pys5Y2P6K6u57qm5a6a55qE6L+d57qm6LSj5Lu75oiW5YW25LuW6LSj5Lu755qE5byD5p2D5bm25LiN6IO96K6k5a6a5oiW6Kej6YeK5Li65a+55YW25LuW6L+d57qm6LSj5Lu755qE5byD5p2D77yb5pyq6KGM5L2/5Lu75L2V5p2D5Yip5oiW5pWR5rWO5LiN5b6X5Lul5Lu75L2V5pa55byP6KKr6Kej6YeK5Li65a+56K+l562J5p2D5Yip5oiW5pWR5rWO55qE5pS+5byD44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5Y2B5LqM44CB5qCH6aKYPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaJgOacieagh+mimOS7heS+m+WNj+iuruihqOi/sOaWueS+v++8jOW5tuS4jeeUqOS6juaJqeWkp+aIlumZkOWItuivpeWNj+iuruadoeasvueahOWGheWuueaIluiMg+WbtOOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuWNgeS4ieOAgemAgueUqOazleW+izwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKzljY/orq7lhajpg6jlhoXlrrnlnYfkuLrmoLnmja7mlrDliqDlnaHlhbHlkozlm73ms5XlvovorqLnq4vnmoTlkIjlkIzvvIzlhbbmiJDnq4vjgIHop6Pph4rjgIHlhoXlrrnlj4rmiafooYzlnYfpgILnlKjmlrDliqDlnaHlhbHlkozlm73nm7jlhbPms5Xlvovop4TlrprvvJvku7vkvZXlm6DmiJbkuI7mnKzljY/orq7nuqblrprnmoTmnI3liqHmnInlhbPogIzkuqfnlJ/nmoTntKLotZTmiJbor4norrzvvIzpg73lupTkvp3nhafmlrDliqDlnaHlhbHlkozlm73nmoTms5Xlvovov5vooYznrqHovpblubbliqDku6Xop6Pph4rlkozmiafooYzjgILkuLrpgb/lhY3nlpHkuYnvvIzov5nkuIDmnaHmrL7mmI7noa7pgILnlKjkuo7ku7vkvZXpkojlr7nmiJHku6znmoTkvrXmnYPntKLotZTjgILku7vkvZXpkojlr7nmiJHku6zmiJbogIXmmK/lkozmiJHku6zmnInlhbPnmoTntKLotZTmiJbor4norrznmoTnrqHovpbms5XpmaLmiJbor4norrzlnLDlnYflnKjmlrDliqDlnaHlhbHlkozlm73jgILmgqjml6DmnaHku7blnLDojrflvpflnKjmlrDliqDlnaHlhbHlkozlm73ms5XpmaLov5vooYzor4norrzlkozkuIror4nnmoTmjpLku5bmgKfnmoTnrqHovpbmnYPjgILmgqjkuZ/ml6DmnaHku7blnLDlkIzmhI/kuI7mnKzljY/orq7mrL7mnInlhbPnmoTkuonorq7miJbpl67popjmiJbkuqfnlJ/nmoTku7vkvZXntKLotZTor7fmsYLlkozor4norrznmoTlj5HnlJ/lnLDmiJbms5XpmaLlnYfmjpLku5bmgKflvpflnKjmlrDliqDlnaHlhbHlkozlm73jgILkuI3mlrnkvr/ms5XpmaLnmoTljp/liJnkuI3pgILnlKjkuo7moLnmja7mnKzmnI3liqHmnaHmrL7nmoTpgInmi6nnmoTms5XpmaLjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ljYHlm5vjgIHljY/orq7nmoTnlJ/mlYjlkozop6Pph4o8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTQuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5Y2P6K6u5LqO5oKo54K55Ye75pys572R5YWz5rOo5YaM6aG16Z2i55qE5ZCM5oSP5rOo5YaM5bm25a6M5oiQ5rOo5YaM56iL5bqP44CB6I635b6X5pys572R5YWz6LSm5Y+35ZKM5a+G56CB5pe255Sf5pWI77yM5a+55pys572R5YWz5ZKM5oKo5Z2H5YW35pyJ57qm5p2f5Yqb44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MTQuMiDmnKzljY/orq7nmoTmnIDnu4jop6Pph4rmnYPlvZLmnKznvZHlhbPmiYDmnInjgII8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYWdyZWVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+U2VydmljZSBBZ3JlZW1lbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9CU0lESUFOIFRFQ0hOT0xPR1kgQ08uIFBURS4gTFRELiAoaGVyZWluYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVkIHRvIGFzIHRoZSAnQ29tcGFueScpIGlzIGEgY29tcGFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jb3Jwb3JhdGVkIHVuZGVyIHRoZSBsYXdzIGluIFNpbmdhcG9yZSBSZXB1YmxpYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdERVggKGhlcmVpbmFmdGVyIHJlZmVycmVkIHRvIGFzICdHREVYJyBvciAndGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYXRld2F5JykgaXMgYSBjcnlwdG9jdXJyZW5jeSBnYXRld2F5IHRvIEJpdHNoYXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggaXMgb3BlcmF0ZWQgYnkgdGhlIGNvbXBhbnkuIFRoZSBtYWluIGFjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQgZm9yIEdERVggaXMgaHR0cHM6Ly9nZGV4LmlvLCBHREVYIGlzIGEgZ2F0ZXdheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBwcm92aWRlIGNyeXB0b2N1cnJlbmN5IGRlcG9zaXQgYW5kIHdpdGhkcmF3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlIChoZXJlaW5hZnRlciByZWZlcnJlZCB0byBhcyAndGhlIFNlcnZpY2UnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8vZnJvbSBCaXRzaGFyZXMuIEZvciB0aGUgY29udmVuaWVuY2Ugb2Ygd29yZGluZyBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBBZ3JlZW1lbnQsIHRoZSBDb21wYW55IGFuZCB0aGUgR2F0ZXdheSBhcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVkIHRvIGFzICdXZScgb3Igb3RoZXIgYXBwbGljYWJsZSBmb3JtcyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgcGVyc29uIHByb25vdW5zIGluIHRoaXMgQWdyZWVtZW50LiBBbGwgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29ucyBvciBvdGhlciBzdWJqZWN0cyB3aG8gdXNlIHRoZSBTZXJ2aWNlIHNoYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSB1c2VycyBvZiB0aGUgR2F0ZXdheS4gRm9yIHRoZSBjb252ZW5pZW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZGluZyBpbiB0aGlzIEFncmVlbWVudCwgdGhlIHVzZXJzIGFyZSByZWZlcnJlZCB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgJ1lvdScgb3IgYW55IG90aGVyIGFwcGxpY2FibGUgZm9ybXMgb2YgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQtcGVyc29uIHByb25vdW5zLiBGb3IgdGhlIGNvbnZlbmllbmNlIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkaW5nIGluIHRoaXMgQWdyZWVtZW50LCB5b3UgYW5kIHVzIGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGl2ZWx5IHJlZmVycmVkIHRvIGFzICdib3RoIHBhcnRpZXMnLCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxseSBhcyAnb25lIHBhcnR5Jy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JbXBvcnRhbnQgcmVtaW5kZXI6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBoZXJlYnkgcmVtaW5kIHlvdSB0aGF0OjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLiBUaGUgZGlnaXRhbCBhc3NldHMgdGhlbXNlbHZlcyBhcmUgbm90IG9mZmVyZWQgYnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBmaW5hbmNpYWwgaW5zdGl0dXRpb24sIGNvcnBvcmF0aW9uIG9yIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2F0ZXdheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuIFRoZSBkaWdpdGFsIGFzc2V0IG1hcmtldCBpcyBuZXcgYW5kIHVuY29uZmlybWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHdpbGwgbm90IG5lY2Vzc2FyaWx5IGV4cGFuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuIERpZ2l0YWwgYXNzZXRzIGFyZSBwcmltYXJpbHkgdXNlZCBieSBzcGVjdWxhdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhcmUgdXNlZCByZWxhdGl2ZWx5IGxlc3Mgb24gcmV0YWlsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVyY2lhbCBtYXJrZXRzOyBkaWdpdGFsIGFzc2V0IHRyYW5zYWN0aW9ucyBhcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hseSByaXNreSwgZHVlIHRvIHRoZSBmYWN0IHRoYXQgdGhleSBhcmUgdHJhZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdob3V0IDI0LWhvdXIgYSBkYXkgd2l0aG91dCBsaW1pdHMgb24gdGhlIHJpc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGZhbGwgaW4gcHJpY2UsIGFuZCBtYXJrZXQgbWFrZXJzIGFuZCBnbG9iYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvdmVybm1lbnQgcG9saWNpZXMgbWF5IGNhdXNlIG1ham9yIGZsdWN0dWF0aW9ucyBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlaXIgcHJpY2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNC4gRGlnaXRhbCBhc3NldCB0cmFuc2FjdGlvbnMgbWF5IGJlIHN1c3BlbmRlZCBvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvaGliaXRlZCBhdCBhbnkgdGltZSBkdWUgdG8gdGhlIGVuYWN0bWVudCBvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uIG9mIG5hdGlvbmFsIGxhd3MsIHJlZ3VsYXRpb25zIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVndWxhdG9yeSBkb2N1bWVudHMuIERpZ2l0YWwgYXNzZXRzIHRyYWRpbmcgaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hseSByaXNreSBhbmQgdGhlcmVmb3JlIG5vdCBzdWl0YWJsZSBmb3IgdGhlIHZhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ham9yaXR5IG9mIHBlb3BsZS4gWW91IGFja25vd2xlZGdlIGFuZCB1bmRlcnN0YW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IGludmVzdG1lbnQgaW4gZGlnaXRhbCBhc3NldHMgbWF5IHJlc3VsdCBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbCBvciB0b3RhbCBsb3NzIG9mIHlvdXIgaW52ZXN0bWVudCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlZm9yZSB5b3UgYXJlIGFkdmlzZWQgdG8gZGVjaWRlIHRoZSBhbW91bnQgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgaW52ZXN0bWVudCBvbiB0aGUgYmFzaXMgb2YgeW91ciBsb3NzLWJlYXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5LiBZb3UgYWNrbm93bGVkZ2UgYW5kIHVuZGVyc3RhbmQgdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRhbCBhc3NldHMgbWF5IGdlbmVyYXRlIGRlcml2YXRpdmUgcmlza3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVyZWZvcmUsIGlmIHlvdSBoYXZlIGFueSBkb3VidCwgeW91IGFyZSBhZHZpc2VkIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWVrIGFzc2lzdGFuY2UgZnJvbSBhIGZpbmFuY2lhbCBhZHZpc2VyIGZpcnN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVydGhlcm1vcmUsIGFzaWRlIGZyb20gdGhlIGFib3ZlLW1lbnRpb25lZCByaXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZXJlIG1heSBhbHNvIGJlIHVucHJlZGljdGFibGUgcmlza3MuIFRoZXJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBhcmUgYWR2aXNlZCB0byBjYXJlZnVsbHkgY29uc2lkZXIgYW5kIHVzZSBjbGVhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVkZ21lbnQgdG8gYXNzZXNzIHlvdXIgZmluYW5jaWFsIHBvc2l0aW9uIGFuZCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3ZlbWVudGlvbmVkIHJpc2tzIGJlZm9yZSBtYWtpbmcgYW55IGRlY2lzaW9ucyBvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5aW5nIGFuZCBzZWxsaW5nIGRpZ2l0YWwgYXNzZXRzOyBhbnkgYW5kIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9zc2VzIGFyaXNpbmcgdGhlcmVmcm9tIHdpbGwgYmUgYm9ybmUgYnkgeW91IGFuZCB3ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGwgbm90IGJlIGhlbGQgbGlhYmxlIGluIGFueSBtYW5uZXIgd2hhdHNvZXZlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUuIFlvdSB1bmRlcnN0YW5kIHRoYXQgQml0c2hhcmVzIGlzIGEgZGVjZW50cmFsaXplZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2UgYmFzZWQgb24gYmxvY2tjaGFpbiwgdGhlIGJhc2ljIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UgYW5kIHRoZSB0cmFkZSBwcm9jZXNzaW5nIHNlcnZpY2UgYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZCBieSBCaXRzaGFyZXMsIHRoZXJlIGFyZSBhbHNvIG90aGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbnMgb3Igc2luZ2xlIHBlcnNvbnMgdGhhdCBpc3N1ZSBhc3NldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZC9vciBwcm92aWRlIHNlcnZpY2Ugb24gQml0c2hhcmVzLiBZb3UgdW5kZXJzdGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB0aGUgR2F0ZXdheSBpcyBvbmx5IHVzZWQgZm9yIHlvdSB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdC93aXRoZHJhdyBjcnlwdG9jdXJyZW5jeSB0by9mcm9tIEJpdHNoYXJlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBHYXRld2F5IG9ubHkgdW5kZXJ0YWtlIHRoZSBkdWUgb2JsaWdhdGlvbnMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgYXZhaWxhYmlsaXR5IG9mIG93biBpc3N1ZWQgYXNzZXRzICh3aXRoICdHREVYLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHByZWZpeCBvZiB0aGUgbmFtZSksIGRvIG5vdCB1bmRlcnRha2UgdGhlIGR1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaWdhdGlvbnMgZm9yIHRoZSBhY2NvdW50IHNlcnZpY2UgYW5kIHRoZSB0cmFkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZyBzZXJ2aWNlIHByb3ZpZGVkIGJ5IEJpdHNoYXJlcywgZG8gbm90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcnRha2UgdGhlIGR1ZSBvYmxpZ2F0aW9ucyBmb3IgYXZhaWxhYmlsaXR5IG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgYXNzZXRzIGlzc3VlZCBieSBvdGhlciBpbnN0aXR1dGlvbnMgb3Igc2luZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25zLntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYuIFRoZXJlIGFyZSByaXNrIGluIGJvdGggSW50ZXJuZXQgYW5kIEJpdHNoYXJlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYnV0IG5vdCBsaW1pdCB0byBmYWlsdXJlIGZvciBzb2Z0d2FyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhcmR3YXJlIHRvIGNvbm5lY3QgdG8gSW50ZXJuZXQsIHNlY3VyaXR5IHJpc2sgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaXRzaGFyZXMgYWNjb3VudGluZyBzeXN0ZW0uIEFzIHRoZSBhdmFpbGFiaWxpdHkgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxpYWJpbGl0eSBvZiBJbnRlcm5ldCBhbmQgQml0c2hhcmVzIGFyZSBub3QgdW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91ciBjb250cm9sLCB3ZSBkbyBub3QgdW5kZXJ0YWtlIG9ibGlnYXRpb25zIGZvciB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvc3MgY2F1c2VkIGJ5IHRoZSByaXNrcyBtZW50aW9uZWQgYWJvdmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3Lml0IGlzIHByb2hpYml0ZWQgdG8gdXNlIHRoZSBHYXRld2F5IGZvciBtb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF1bmRlcmluZywgc211Z2dsaW5nLCBicmliZXJ577yMaWYgYW55IHVzZXIgYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCByZWxldmFudCB0byB0aGVzZSBhY3Rpb25zLCB0aGUgR2F0ZXdheSB3aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlIHZhcmlvdXMgYWN0aW9ucywgaW5jbHVkZSBidXQgbm90IGxpbWl0ZWQgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1pbmF0aW5nIHRoZSBTZXJ2aWNlIHRvIHRoZSB1c2VyLCBpbmZvcm1pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW50IGF1dGhvcml0eS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtsb2NhbGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgbXNnID0gdGhpcy5fZ2V0QWdyZWVtZW50KGxvY2FsZSk7XHJcbiAgICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChHZGV4QWdyZWVtZW50TW9kYWwsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5nc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBRkE7QUFpQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQTJCQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBR0E7QUFLQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQWhCQTtBQUpBO0FBa0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQVRBO0FBVUE7QUFDQTtBQVhBO0FBWkE7QUEyQkE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQTlCQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBM0VBO0FBSkE7QUFDQTtBQXNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQW9EQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFQQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBZEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFOQTtBQVRBO0FBekJBO0FBREE7QUF1REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQTNIQTtBQUxBO0FBNklBOzs7O0FBdmdCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQWtnQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBUEE7QUFDQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQWhDQTtBQWtDQTtBQXZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBSEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFPQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkE7QUFEQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBTkE7QUFMQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUxBO0FBZkE7QUFEQTtBQVBBO0FBMUJBO0FBb0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBSkE7QUF2QkE7QUFzQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQWhCQTtBQThCQTtBQTdDQTtBQXhDQTtBQXRFQTtBQWtLQTs7OztBQTlTQTtBQUNBO0FBZ1RBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF3QkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWEE7QUFZQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBSkE7QUFQQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBR0E7QUFQQTtBQVBBO0FBTEE7QUExRUE7QUFEQTtBQURBO0FBTEE7QUE0R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUFGQTtBQURBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFEQTtBQWhCQTtBQURBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVpBO0FBaENBO0FBakNBO0FBN0dBO0FBbU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQXZEQTtBQURBO0FBREE7QUFMQTtBQTJGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBREE7QUFaQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBVEE7QUFsSEE7QUF5SkE7QUFDQTs7OztBQTlqQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBQ0E7QUE4akJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUE1Q0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBbUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNEJBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQWlCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWtDQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXpCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUE3R0E7QUFBQTtBQUNBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBREE7QUFMQTtBQVhBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWxDQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFyQkE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBUEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeEJBO0FBNEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFQQTtBQURBO0FBREE7QUFQQTtBQXdCQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFiQTtBQW9CQTtBQTdMQTtBQUpBO0FBcU1BOzs7O0FBcDRCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQUNBO0FBbzRCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7Ozs7OztBQzk1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7Ozs7QUE5QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUFDQTtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7QUFHQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFPQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTBCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFGQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFGQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUZBO0FBNUJBO0FBeUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFYQTtBQW1CQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFkQTtBQXFCQTtBQTlEQTtBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFPQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVkE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBTkE7QUFMQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUxBO0FBZkE7QUFEQTtBQVBBO0FBdEJBO0FBK0RBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFWQTtBQWJBO0FBaUNBO0FBcEdBO0FBdUdBOzs7O0FBbGxCQTtBQUNBO0FBb2xCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBOzs7Ozs7OztBQ2puQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFrQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQUxBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVBBO0FBTEE7QUF4RUE7QUFEQTtBQURBO0FBTEE7QUF3R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBUkE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBUEE7QUFEQTtBQWxCQTtBQThCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQVJBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQVBBO0FBREE7QUFsQkE7QUFoQ0E7QUFEQTtBQWtFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBWEE7QUFjQTtBQWRBO0FBbkVBO0FBMUJBO0FBekdBO0FBME5BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFMQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBUEE7QUFMQTtBQXJEQTtBQURBO0FBREE7QUFMQTtBQXFGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBREE7QUFaQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQVRBO0FBNUdBO0FBeUlBO0FBQ0E7Ozs7QUF4a0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQVlBO0FBREE7QUFDQTtBQStqQkE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BOzs7O0FBZkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7QUM1bUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBbUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFRQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUE0QkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFrQ0E7QUFTQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQVZBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVUE7QUFDQTtBQXZCQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBekJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBbkJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBbklBO0FBQUE7QUFDQTtBQW9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQURBO0FBTEE7QUFYQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQXZDQTtBQW9EQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFyQkE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBUEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBMUJBO0FBOEJBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBO0FBaktBO0FBSkE7QUF5S0E7Ozs7QUE1NkJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQTQ2QkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Q4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVZBO0FBRkE7QUFlQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTtBQVFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQU1BO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQkE7QUF3QkE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBRkE7QUFIQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFLQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBREE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcEJBO0FBWEE7QUFmQTtBQURBO0FBc0RBOzs7O0FBMVJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBK1FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxTQTtBQXFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQWhCQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpHQTtBQTVTQTtBQWdhQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBcGNBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBb2NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7O0FDN2NBOzs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==