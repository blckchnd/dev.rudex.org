(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[30],{

/***/ 3036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1907);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(591);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2158);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(592);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2025);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2026);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2186);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(574);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(746);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(747);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3037);
/* harmony import */ var _DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3047);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2153);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2163);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(851);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2371);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2415);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2502);
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

            RudexNotice1Informed: false,
            RudexNotice1Informed_BuyCrypto: false
        };
        return _this;
    }

    _createClass(AccountDepositWithdraw, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.account !== this.props.account || nextProps.servicesDown !== this.props.servicesDown || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.citadelBackedCoins, this.props.citadelBackedCoins) || nextState.olService !== this.state.olService || nextState.rudexService !== this.state.rudexService || nextState.bitsparkService !== this.state.bitsparkService || nextState.xbtsxService !== this.state.xbtsxService || nextState.btService !== this.state.btService || nextState.citadelService !== this.state.citadelService || nextState.metaService !== this.state.metaService || nextState.activeService !== this.state.activeService || nextState.RudexNotice1Informed !== this.state.RudexNotice1Informed || nextState.RudexNotice1Informed_BuyCrypto !== this.state.RudexNotice1Informed_BuyCrypto || nextProps.currentLocale !== this.props.currentLocale;
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
        key: "onRudexNotice1Informed_BuyCrypto",
        value: function onRudexNotice1Informed_BuyCrypto() {
            this.setState({
                RudexNotice1Informed_BuyCrypto: !this.state.RudexNotice1Informed_BuyCrypto
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
                RudexNotice1Informed = _state.RudexNotice1Informed,
                RudexNotice1Informed_BuyCrypto = _state.RudexNotice1Informed_BuyCrypto;


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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.rudex.buy_crypto.title" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                        style: { width: "30px" },
                                        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMTAzMDYiCiAgIHZpZXdCb3g9IjAgMCA1MDAuMDAwMDEgMTYyLjgxNTk0IgogICA+CiAgPGRlZnMKICAgICBpZD0iZGVmczEwMzA4Ij4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoMTAyNzEiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTAyNzMiCiAgICAgICAgIGQ9Im0gNDEzLjc0Miw5MC40MzUgYyAtMC4wNTcsLTQuNDk0IDQuMDA1LC03LjAwMiA3LjA2NSwtOC40OTMgMy4xNDQsLTEuNTMgNC4yLC0yLjUxMSA0LjE4OCwtMy44NzkgLTAuMDI0LC0yLjA5NCAtMi41MDgsLTMuMDE4IC00LjgzMywtMy4wNTQgLTQuMDU2LC0wLjA2MyAtNi40MTQsMS4wOTUgLTguMjg5LDEuOTcxIGwgLTEuNDYxLC02LjgzNyBjIDEuODgxLC0wLjg2NyA1LjM2NCwtMS42MjMgOC45NzYsLTEuNjU2IDguNDc4LDAgMTQuMDI1LDQuMTg1IDE0LjA1NSwxMC42NzQgMC4wMzMsOC4yMzUgLTExLjM5MSw4LjY5MSAtMTEuMzEzLDEyLjM3MiAwLjAyNywxLjExNiAxLjA5MiwyLjMwNyAzLjQyNiwyLjYxIDEuMTU1LDAuMTUzIDQuMzQ0LDAuMjcgNy45NTksLTEuMzk1IGwgMS40MTksNi42MTUgYyAtMS45NDQsMC43MDggLTQuNDQzLDEuMzg2IC03LjU1NCwxLjM4NiAtNy45OCwwIC0xMy41OTMsLTQuMjQyIC0xMy42MzgsLTEwLjMxNCBtIDM0LjgyNyw5Ljc0NCBjIC0xLjU0OCwwIC0yLjg1MywtMC45MDMgLTMuNDM1LC0yLjI4OSBsIC0xMi4xMTEsLTI4LjkxNyA4LjQ3MiwwIDEuNjg2LDQuNjU5IDEwLjM1MywwIDAuOTc4LC00LjY1OSA3LjQ2NywwIC02LjUxNiwzMS4yMDYgLTYuODk0LDAgbSAxLjE4NSwtOC40MyAyLjQ0NSwtMTEuNzE4IC02LjY5NiwwIDQuMjUxLDExLjcxOCBtIC00Ni4yODQsOC40MyAtNi42NzgsLTMxLjIwNiA4LjA3MywwIDYuNjc1LDMxLjIwNiAtOC4wNywwIG0gLTExLjk0MywwIC04LjQwMywtMjEuMjQgLTMuMzk5LDE4LjA2IGMgLTAuMzk5LDIuMDE2IC0xLjk3NCwzLjE4IC0zLjcyMywzLjE4IGwgLTEzLjczNywwIC0wLjE5MiwtMC45MDYgYyAyLjgyLC0wLjYxMiA2LjAyNCwtMS41OTkgNy45NjUsLTIuNjU1IDEuMTg4LC0wLjY0NSAxLjUyNywtMS4yMDkgMS45MTcsLTIuNzQyIGwgNi40MzgsLTI0LjkwMyA4LjUzMiwwIDEzLjA4LDMxLjIwNiAtOC40NzgsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDEwMjc3IgogICAgICAgc3ByZWFkTWV0aG9kPSJwYWQiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDg0LjE5OTUsMzEuMDA4OCwzMS4wMDg4LC04NC4xOTk1LDE5LjUxMiwtMjcuNDE5MikiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHkyPSIwIgogICAgICAgeDI9IjEiCiAgICAgICB5MT0iMCIKICAgICAgIHgxPSIwIj4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3AxMDI3OSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojMjIyMzU3IiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDEwMjgxIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiMyNTRhYTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMDMxMSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMzLjcwMTU3LC01MzYuNDI0MzEpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIGlkPSJnMTAyNjciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0Ljk4NDY4NTYsMCwwLC00Ljk4NDY4NTYsLTE0NzAuMTE4NSwxMDM5LjYyNjQpIj4KICAgICAgPGcKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTAyNzEpIgogICAgICAgICBpZD0iZzEwMjY5Ij4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MS42MTEsOTYuODk2KSIKICAgICAgICAgICBpZD0iZzEwMjc1Ij4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDEwMjgzIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDEwMjc3KTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Ik0gMCwwIDk4LjQzNywzNi4yNTIgMTIwLjgzMSwtMjQuNTU3IDIyLjM5NSwtNjAuODA5IiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                        style: {
                                            width: "20px",
                                            margin: "0 10px 0"
                                        },
                                        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDY0OS45OTk5OCA0MDUuNjMyMjYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg5NSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhODk5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT5Bc3NldCAxPC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg3OSI+CiAgICA8c3R5bGUKICAgICAgIHR5cGU9InRleHQvY3NzIgogICAgICAgaWQ9InN0eWxlODc3Ij4uYXtvcGFjaXR5OjA7fS5ie2ZpbGw6I2ZmZjt9LmN7ZmlsbDojZmY1ZjAwO30uZHtmaWxsOiNlYjAwMWI7fS5le2ZpbGw6I2Y3OWUxYjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlCiAgICAgaWQ9InRpdGxlODgxIj5Bc3NldCAxPC90aXRsZT4KICA8cmVjdAogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiNmZjVmMDA7c3Ryb2tlLXdpZHRoOjUuNDkzODExNjEiCiAgICAgY2xhc3M9ImMiCiAgICAgeD0iMjI5LjgzMjYzIgogICAgIHk9IjQ3LjI5NzczNyIKICAgICB3aWR0aD0iMTkwLjQxNTUxIgogICAgIGhlaWdodD0iMzExLjAwNDciCiAgICAgaWQ9InJlY3Q4ODciIC8+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZWIwMDFiO3N0cm9rZS13aWR0aDo1LjQ5MzgxMTYxIgogICAgIGNsYXNzPSJkIgogICAgIGQ9Im0gMjQ5LjQ0NTU0LDIwMi44Mjc1NiBhIDE5Ny40NDc1OSwxOTcuNDQ3NTkgMCAwIDEgNzUuNTM5OTEsLTE1NS40NzQ4NjcgMTk3Ljc3NzIyLDE5Ny43NzcyMiAwIDEgMCAwLDMxMS4wMDQ2NzcgMTk3LjQ0NzU5LDE5Ny40NDc1OSAwIDAgMSAtNzUuNTM5OTEsLTE1NS41Mjk4MSB6IgogICAgIGlkPSJwYXRoODg5IiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2Y3OWUxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZSIKICAgICBkPSJtIDYyNi4xMDEzLDMyNS4zOTQ1IHYgLTYuMzcyODIgaCAyLjc0NjkgdiAtMS4zMTg1MiBoIC02LjUzNzY0IHYgMS4zMTg1MiBoIDIuNTgyMSB2IDYuMzcyODIgeiBtIDEyLjY5MDcsMCB2IC03LjY5MTM0IGggLTEuOTc3NzggbCAtMi4zMDc0LDUuNDkzODEgLTIuMzA3NCwtNS40OTM4MSBoIC0xLjk3Nzc3IHYgNy42OTEzNCBoIDEuNDI4MzkgdiAtNS44MjM0NCBsIDIuMTQyNTksNC45OTkzNyBoIDEuNDgzMzMgbCAyLjE0MjU4LC00Ljk5OTM3IHYgNS44MjM0NCB6IgogICAgIGlkPSJwYXRoODkxIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2Y3OWUxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZSIKICAgICBkPSJtIDY0NSwyMDIuODI3NTYgYSAxOTcuNzc3MjIsMTk3Ljc3NzIyIDAgMCAxIC0zMjAuMDE0NTUsMTU1LjQ3NDg3IDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAwIDAgMCwtMzExLjAwNDY3NSBBIDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAwIDEgNjQ1LDIwMi43NzI2MiBaIgogICAgIGlkPSJwYXRoODkzIiAvPgo8L3N2Zz4K"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                        style: { width: "40px" },
                                        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2ZzEwOTA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNzUwIDIwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzUwIDIwNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxMDI5OEU7fQoJLnN0MXtmaWxsOiNGRkJFMDA7fQo8L3N0eWxlPgo8dGl0bGU+c2VwYTwvdGl0bGU+CjxwYXRoIGlkPSJwYXRoNTY4OSIgY2xhc3M9InN0MCIgZD0iTTE2Ni42LDY1LjRoLTUxLjNjMC04LjQtMS0xNC4xLTMtMTdjLTMtNC4zLTExLjQtNi40LTI1LjItNi40Yy0xMy40LDAtMjIuMywxLjItMjYuNiwzLjcKCVM1NCw1My42LDU0LDYxLjhjMCw3LjUsMS45LDEyLjQsNS43LDE0LjdjMy40LDEuOCw3LjEsMi44LDEwLjksMi45TDgxLDgwLjJjMjIuMiwxLjUsMzYsMi41LDQxLjYsMy4xYzE3LjUsMS44LDMwLjMsNi40LDM4LjEsMTQKCWM2LjIsNS45LDkuOSwxMy42LDExLjEsMjMuMWMwLjcsNi40LDEuMSwxMi45LDEsMTkuM2MwLDE2LjUtMS42LDI4LjYtNC43LDM2LjJjLTUuNywxNC4xLTE4LjUsMjIuOS0zOC41LDI2LjYKCWMtOC4zLDEuNi0yMS4xLDIuNC0zOC4zLDIuNGMtMjguNywwLTQ4LjgtMS43LTYwLjEtNS4xYy0xMy45LTQuMi0yMy0xMi44LTI3LjUtMjUuNkMxLjIsMTY3LjEsMCwxNTUuMiwwLDEzOC41aDUxLjN2NC4zCgljMCw4LjksMi42LDE0LjYsNy43LDE3LjJjNCwxLjksOC40LDIuOCwxMi44LDIuOGgxOC45YzkuNiwwLDE1LjgtMC41LDE4LjQtMS41YzQuNy0xLjksNy44LTQuOSw5LjMtOWMwLjktMy4yLDEuMy02LjUsMS4yLTkuOQoJYzAtOS0zLjMtMTQuNS05LjktMTYuNWMtMi41LTAuOC0xMy45LTEuOS0zNC4zLTMuMmMtMTYuNC0xLjItMjcuOC0yLjMtMzQuMi0zLjRjLTE2LjgtMy4xLTI4LTkuNi0zMy42LTE5LjQKCUMyLjcsOTEuNSwwLjIsNzguOSwwLjIsNjJjMC0xMi44LDEuMy0yMy4xLDQtMzAuOXM2LjktMTMuNiwxMi44LTE3LjZjOC42LTYuMiwxOS43LTkuOCwzMy4yLTEwLjljMTEuMi0xLDIzLjctMS41LDM3LjMtMS41CgljMjEuNSwwLDM2LjksMS4yLDQ2LDMuN2MyMi4zLDYsMzMuNSwyMi44LDMzLjUsNTAuNEMxNjcuMSw1Ny41LDE2Ni45LDYwLjksMTY2LjYsNjUuNCIvPgo8cGF0aCBpZD0icGF0aDU2OTMiIGNsYXNzPSJzdDAiIGQ9Ik0zOTIuMywyMDVWMGgxMDIuOGMxNC4xLDAsMjQuOCwxLjEsMzIuMiwzLjVjMTYuOSw1LjMsMjguMiwxNi4xLDM0LDMyLjUKCWMzLDguNiw0LjUsMjEuNSw0LjUsMzguOGMwLDIwLjgtMS43LDM1LjctNSw0NC44Yy02LjYsMTgtMjAuMSwyOC4zLTQwLjYsMzFjLTIuNCwwLjQtMTIuNywwLjgtMzAuOCwxLjFsLTkuMiwwLjNoLTMyLjh2NTNIMzkyLjN6CgkgTTQ0Ny41LDEwNC41aDM0LjRjMTAuOS0wLjQsMTcuNS0xLjIsMTkuOS0yLjVjMy4yLTEuOCw1LjUtNS40LDYuNS0xMC44YzAuOC01LjMsMS4yLTEwLjYsMS0xNmMwLTguNy0wLjctMTUuMS0yLjEtMTkuMwoJYy0yLTUuOS02LjgtOS41LTE0LjItMTAuOGMtMS41LTAuMi01LjEtMC4zLTEwLjctMC4zaC0zNC44VjEwNC41eiIvPgo8cGF0aCBpZD0icGF0aDU2OTciIGNsYXNzPSJzdDAiIGQ9Ik02ODMuNiwxNjkuNWgtNzMuOGwtOS45LDM1LjVoLTU3LjFMNjA0LjUsMGg4My4yTDc1MCwyMDVoLTU1LjlMNjgzLjYsMTY5LjV6IE02NzIuNiwxMjkuNgoJbC0yNS44LTg4LjlsLTI1LjEsODguOUg2NzIuNnoiLz4KPHBhdGggaWQ9InBhdGg1NzAxIiBjbGFzcz0ic3QxIiBkPSJNMzE2LjIsMjguOGMyMS45LDAsNDIuNiw5LjksNTYuNCwyNi45bDExLjktMjUuNUMzNjUsMTEuOSwzMzkuMywxLjcsMzEyLjYsMS44CgljLTQzLjUsMC04MC42LDI2LjItOTUuOSw2My40aC0yMy4ybC0xMy43LDI5LjNoMjkuOGMtMC4yLDIuNy0wLjQsNS40LTAuNCw4LjJjMCwzLjMsMC4yLDYuNywwLjUsMTBoLTE1bC0xMy43LDI5LjRoMzYuMwoJYzE1LjcsMzYuMiw1Mi40LDYxLjcsOTUuMiw2MS43YzIwLjcsMCw0MC45LTYsNTguMS0xNy41di0zNmMtMjYuNCwzMC4yLTcyLjIsMzMuMi0xMDIuNCw2LjhjLTUtNC40LTkuNC05LjQtMTMtMTVoNzZsMTMuNy0yOS40CglIMjQ0LjJjLTAuNS0zLjYtMC44LTcuMi0wLjgtMTAuOGMwLTIuNSwwLjEtNC45LDAuNC03LjRoMTA5LjhsMTMuNy0yOS4zaC0xMTRDMjY2LjIsNDIuNywyOTAuMiwyOC45LDMxNi4yLDI4LjgiLz4KPHBhdGggaWQ9InBhdGg1NzA1IiBjbGFzcz0ic3QwIiBkPSJNMzE2LjIsMjkuN2MyMS42LDAsNDIuMSw5LjgsNTUuNywyNi42bDAuOSwxLjFsMC42LTEuM2wxMS45LTI1LjVsMC4zLTAuNmwtMC41LTAuNAoJYy0zNi0zMy43LTkwLjUtMzguMi0xMzEuNS0xMC43Yy0xNi44LDExLjMtMzAsMjcuMy0zNy43LDQ2bDAuOC0wLjZIMTkzbC0wLjIsMC41bC0xMy43LDI5LjRsLTAuNiwxLjNoMzEuMmwtMC45LTEKCWMtMC4yLDMtMC40LDUuOC0wLjQsOC4zYzAsMy40LDAuMiw2LjcsMC41LDEwLjFsMC45LTFoLTE1LjVsLTAuMiwwLjVsLTEzLjcsMjkuNGwtMC42LDEuMmgzNy43bC0wLjgtMC41YzE2LjQsMzcuOCw1NCw2Mi4yLDk2LDYyLjIKCWMyMC45LDAuMSw0MS4zLTYuMSw1OC42LTE3LjZsMC40LTAuM1YxNDhsLTEuNSwxLjhjLTI2LjEsMjkuOC03MS40LDMyLjgtMTAxLjIsNi43Yy00LjktNC4zLTkuMi05LjMtMTIuOC0xNC44bC0wLjcsMS40aDc2LjYKCWwwLjItMC41bDEzLjctMjkuNGwwLjYtMS4ySDI0NC4ybDAuOSwwLjhjLTAuNS0zLjUtMC44LTcuMS0wLjgtMTAuN2MwLTIuNCwwLjEtNC45LDAuNC03LjNsLTAuOSwwLjhoMTEwLjRsMC4yLTAuNUwzNjgsNjUuNgoJbDAuNi0xLjNIMjUzLjJsMC44LDEuM0MyNjYuOCw0My41LDI5MC41LDI5LjgsMzE2LjIsMjkuNyBNMjUzLjIsNjYuMWgxMTRsLTAuOC0xLjJsLTEzLjcsMjkuNGwwLjgtMC41SDI0Mi45bC0wLjEsMC44CgljLTAuMiwyLjUtMC40LDUtMC40LDcuNWMwLDMuNywwLjMsNy40LDAuOCwxMWwwLjEsMC44SDM0NWwtMC44LTEuM2wtMTMuNywyOS40bDAuOC0wLjVoLTc3LjdsMC45LDEuNGMyMi4yLDM0LDY3LjcsNDMuNiwxMDEuNywyMS40CgljNS42LTMuNywxMC43LTguMSwxNS4yLTEzLjJsLTEuNS0wLjZ2MzZsMC40LTAuN0MzNTMuMiwxOTcsMzMzLjEsMjAzLDMxMi42LDIwM2MtNDEuMiwwLTc4LjMtMjQtOTQuNC02MS4xbC0wLjItMC41aC0zNi45bDAuOCwxLjMKCWwxMy43LTI5LjRsLTAuOCwwLjVoMTZsLTAuMS0xYy0wLjMtMy4zLTAuNS02LjctMC41LTkuOWMwLTIuNSwwLjEtNS4yLDAuNC04LjJsMC4xLTFoLTMwLjhsMC44LDEuMmwxMy43LTI5LjNsLTAuOCwwLjVoMjMuOAoJbDAuMi0wLjVjNy42LTE4LjQsMjAuNS0zNC4xLDM3LjEtNDUuMmM0MC4zLTI3LDkzLjktMjIuNiwxMjkuMiwxMC41bC0wLjItMWwtMTEuOSwyNS41bDEuNS0wLjJjLTI1LjYtMzEuNS03MS44LTM2LjQtMTAzLjQtMTAuOAoJYy03LDUuNy0xMi45LDEyLjYtMTcuNCwyMC40bC0wLjgsMS4zTDI1My4yLDY2LjF6Ii8+Cjwvc3ZnPgo="
                                    })
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                href: "https://merchant.raidofinance.eu/media/83eef3d5a17bf300af9986e913c2c99d.pdf",
                                content: "gateway.rudex.rudex_notice_third_party",
                                component: "a",
                                target: "_blank"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h5",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    defaultChecked: this.state.RudexNotice1Informed_BuyCrypto,
                                    onChange: this.onRudexNotice1Informed_BuyCrypto.bind(this)
                                }),
                                " ",
                                "-",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "gateway.rudex.rudex_notice1_informed_third_party_service" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        RudexNotice1Informed_BuyCrypto ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__["default"], { account: account }) : null
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"], stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().passwordAccount,
            account: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentAccount,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().viewSettings,
            currentLocale: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().settings.get("locale"),
            backedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins,
            openLedgerBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("OPEN", []),
            rudexBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("RUDEX", []),
            bitsparkBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("SPARKDEX", []),
            blockTradesBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("TRADE", []),
            citadelBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("CITADEL", []),
            xbtsxBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("XBTSX", []),
            servicesDown: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().down || {}
        };
    }
}));

/***/ }),

/***/ 3037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3038);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(746);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(747);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2826);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2980);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(761);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2009);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2937);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2921);
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
                            maxWidth: 30,
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

/***/ 3038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(441);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2025);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2026);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3039);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3040);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3042);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3043);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3041);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2152);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2476);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(851);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3044);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(757);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2156);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2386);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_18__);
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
            isQrModalVisible: false,
            qrcode: "",
            isModalVisible: false,
            receive_address: null,
            account_name: null
        };

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);

        _this.showModal = _this.showModal.bind(_this);
        _this.hideModal = _this.hideModal.bind(_this);

        _this.showQrModal = _this.showQrModal.bind(_this);
        _this.hideQrModal = _this.hideQrModal.bind(_this);
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
        key: "onShowQrcode",
        value: function onShowQrcode(text) {
            var _this2 = this;

            this.setState({ qrcode: text }, function () {
                _this2.showQrModal();
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
            var _this3 = this;

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
            if (this.state.account_name === this.props.account.get("name")) {
                var account_name = this.props.account.get("name");
                var receive_address_from_cache = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
                if (receive_address_from_cache !== undefined) {
                    receive_address = receive_address_from_cache;
                }
            } else if (!this.props.supports_output_memos) {
                Object(lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__["requestDepositAddress"])(this._getDepositObject());
                return emptyRow;
            }

            var qrcode = this.state.qrcode;
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
                if ((!receive_address || !receive_address.address) && !this.props.supports_output_memos) {
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
                        {
                            style: {
                                wordBreak: "break-word",
                                lineHeight: "1.5em",
                                marginTop: "15px",
                                display: "block"
                            }
                        },
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
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "modal.qrcode.label" })
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
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "modal.qrcode.label" })
                                            )
                                        )
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Modal"],
                                    {
                                        footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                                            {
                                                key: "close",
                                                type: "primary",
                                                onClick: this.hideQrModal
                                            },
                                            counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("modal.close")
                                        )],
                                        visible: this.state.isQrModalVisible,
                                        onCancel: this.hideQrModal
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DepositQrCodeModal, { text: qrcode })
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
                                            return _this3._notify("address");
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
                                            return _this3._notify("memo");
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_18___default.a, { size: 200, value: text }),
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

/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RuDexGatewayDepositRequest));

/***/ }),

/***/ 3039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(420);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(851);
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

/***/ 3040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2793);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2025);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2026);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(592);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2168);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2962);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(590);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3041);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1907);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(746);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(441);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(618);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(619);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(851);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(757);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(448).Buffer))

/***/ }),

/***/ 3041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoinList", function() { return fetchCoinList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);


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

/***/ 3042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2152);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2025);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2026);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2168);
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

/***/ 3043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
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
            if (!wallet) return undefined; //when Wallet isn't exist
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

/***/ 3044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3045),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ 3045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(411);

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(3046);

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

/***/ 3046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(1607);

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


/***/ }),

/***/ 3047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1907);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(746);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(747);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2826);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2980);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(761);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2009);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2937);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2921);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _RaidoDepositRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3048);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var RaidoFinance = function (_React$Component) {
    _inherits(RaidoFinance, _React$Component);

    function RaidoFinance(props) {
        _classCallCheck(this, RaidoFinance);

        var _this = _possibleConstructorReturn(this, (RaidoFinance.__proto__ || Object.getPrototypeOf(RaidoFinance)).call(this));

        _this.state = {
            activeCoin: _this._getActiveCoin(props, { action: "deposit" }),
            action: props.viewSettings.get("rudexActionRaido", "deposit"),

            activePaymentMethod: "CARDE"
        };
        _this._setActiveRaidoCoin = _this._setActiveRaidoCoin.bind(_this);
        return _this;
    }

    _createClass(RaidoFinance, [{
        key: "_setActiveRaidoCoin",
        value: function _setActiveRaidoCoin(meth) {
            this.setState({ activePaymentMethod: meth });
        }
    }, {
        key: "_getActiveCoin",
        value: function _getActiveCoin(props, state) {
            var cachedCoin = props.viewSettings.get("activeCoin_Raido", null);
            var firstTimeCoin = "BTC";
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
            setting["activeCoin_Raido"] = coinName;
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting(setting);
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

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting(_defineProperty({}, "rudexActionRaido", type));
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
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], null);
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: "gateway.rudex.buy_crypto.choose_" + action
                                }),
                                ":",
                                " "
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                onChange: this.onSelectCoin.bind(this),
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
                            style: { minHeight: "2rem" },
                            className: "left-label"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { paddingBottom: 15 } })
                    )
                ),
                !coin ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginBottom: 15 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RaidoDepositRequest__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            key: "" + coin.symbol,
                            gateway: coin.gatewayWallet,
                            issuer_account: coin.issuer,
                            account: account,
                            deposit_asset: coin.backingCoin.toUpperCase(),
                            deposit_asset_name: coin.name,
                            deposit_coin_type: coin.backingCoin.toLowerCase(),
                            deposit_account: coin.gatewayWallet,
                            receive_asset: coin.symbol,
                            receive_coin_type: coin.symbol.toLowerCase(),
                            memoType: coin.memoType,
                            min_amount: coin.minAmount,
                            confirmations: coin.confirmations,
                            action: this.state.action,
                            activePaymentMethod: this.state.activePaymentMethod,
                            setActiveRaidoCoin: function setActiveRaidoCoin(m) {
                                return _this2._setActiveRaidoCoin(m);
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Support"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.support_block" }),
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
                        components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__["TransactionWrapper"],
                        {
                            asset: coin.symbol,
                            fromAccount: isDeposit ? coin.issuerId : this.props.account.get("id"),
                            to: isDeposit ? this.props.account.get("id") : coin.issuerId
                        },
                        function (_ref) {
                            var asset = _ref.asset,
                                to = _ref.to,
                                fromAccount = _ref.fromAccount;

                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__["RecentTransactions"], {
                                accountsList: immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List([_this2.props.account.get("id")]),
                                limit: 10,
                                compactView: true,
                                fullHeight: true,
                                filter: "transfer",
                                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

    return RaidoFinance;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RaidoFinance.defaultProps = {
    coins: [{
        name: "BTC",
        description: "Bitcoin - BTC",
        backingCoin: "BTC",
        symbol: "RUDEX.BTC",
        depositAllowed: true,
        //"withdrawalAllowed": true,

        issuer: "rudex-bitcoin",
        issuerId: "1.2.852589",
        //"minAmount": 180000,
        confirmations: {
            type: "blocks",
            value: 3
        }
    }, {
        name: "ETH",
        description: "Ethereum - ETH",
        backingCoin: "ETH",
        symbol: "RUDEX.ETH",
        depositAllowed: true,
        //"withdrawalAllowed": true,

        issuer: "rudex-ethereum",
        issuerId: "1.2.852823",
        //"minAmount": 500000,
        confirmations: {
            type: "blocks",
            value: 30
        }
    }, {
        name: "USDT",
        description: "Tether - USDT (on Ethereum)",
        backingCoin: "USDT",
        symbol: "RUDEX.USDT",
        depositAllowed: true,
        //"withdrawalAllowed": true,

        issuer: "rudex-usdt",
        issuerId: "1.2.927458",
        //"minAmount": 500000,
        confirmations: {
            type: "blocks",
            value: 20
        }
    }]
};

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(RaidoFinance, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 3048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(441);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2025);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2026);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3041);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3042);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3043);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2152);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2476);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(851);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2156);
/* harmony import */ var _RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3049);
/* harmony import */ var _Raido_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3050);
/* harmony import */ var _Raido_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Raido_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_14__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















//RAIDO




var RaidoDepositRequest = function (_React$Component) {
    _inherits(RaidoDepositRequest, _React$Component);

    function RaidoDepositRequest(props) {
        _classCallCheck(this, RaidoDepositRequest);

        var _this = _possibleConstructorReturn(this, (RaidoDepositRequest.__proto__ || Object.getPrototypeOf(RaidoDepositRequest)).call(this, props));

        _this.deposit_address_cache = new common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_7__["default"]();

        _this.state = {
            account_name: null,

            receive_address: {
                address: null,
                memo: null
            },

            submitAllowed: false,
            min_max_validate: {
                valid: false,
                direct: "min" //MIN or MAX
            },

            getAmount: 0,
            giveAmount: 0,

            raido: {
                affiliate_id: 10058,

                give_raw: _this.props.activePaymentMethod, //fiats
                give: _this.props.activePaymentMethod,
                give_decimal: 5,

                //get: "BTC",
                get: _this.props.deposit_asset_name,
                get_decimal: 5,

                price: 1,

                in: null,
                out: null,
                in_min_fee: 0,
                withdraw_fee: 0,

                in_fee: 0,
                commission: 0,

                min_deposit: 0,
                max_deposit: 1000000,

                direction: "buy", //BUY or SELL

                currencies: [],
                prices: []
            }
        };

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._makeUriRaido = _this._makeUriRaido.bind(_this);

        _this._setCoinsRaido = _this._setCoinsRaido.bind(_this);
        _this._setPricesRaido = _this._setPricesRaido.bind(_this);
        _this._initPrices = _this._initPrices.bind(_this);

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handlePaymentMethod = _this.handlePaymentMethod.bind(_this);

        _this.initCurrencies(_this._setCoinsRaido);
        return _this;
    }

    _createClass(RaidoDepositRequest, [{
        key: "initCurrencies",
        value: function initCurrencies(stateCallback) {
            var coins = "https://merchant-datacenter.raidofinance.eu:8095/currencies/";
            fetch(coins, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (reply) {
                reply.json().then(function (json) {
                    if (stateCallback) stateCallback(json.data);
                });
            }).catch(function (err) {
                console.log("fetch error:", err);
            });
        }
    }, {
        key: "_setCoinsRaido",
        value: function _setCoinsRaido(currencies) {
            currencies = currencies.rows;

            var curr_coin_original = this.props.deposit_asset_name;
            var raido = this.state.raido;

            for (var i = 0; i < currencies.length; i++) {
                if (currencies[i].code === curr_coin_original) {
                    console.log("withdraw_fee: " + currencies[i].withdraw_fee * 1);

                    raido.give = this.state.raido.give;
                    raido.get = currencies[i].code;

                    raido.currencies = currencies;

                    //raido.in_enable = currencies[i].in_enable;//TODO
                    raido.out = currencies[i].id;
                    raido.min_deposit = currencies[i].min_deposit;
                    raido.max_deposit = currencies[i].max_deposit;
                    raido.withdraw_fee = currencies[i].withdraw_fee * 1;

                    raido.give_decimal = currencies[i].decimal;

                    this.setState({ raido: raido });
                }
            }
            this._initPrices(this._setPricesRaido);
        }
    }, {
        key: "_initPrices",
        value: function _initPrices(stateCallback) {
            var prices = "https://merchant-datacenter.raidofinance.eu:8095/prices/";

            fetch(prices, {
                method: "get",
                headers: new Headers({ Accept: "application/json" })
            }).then(function (reply) {
                reply.json().then(function (json) {
                    if (stateCallback) stateCallback(json.data);
                });
            }).catch(function (err) {
                console.log("fetch error:", err);
            });
        }
    }, {
        key: "_setPricesRaido",
        value: function _setPricesRaido(prices) {
            var raido = this.state.raido;
            var currencies = raido.currencies;

            for (var i = 0; i < currencies.length; i++) {
                if (currencies[i].code === raido.give_raw) {
                    //if (currencies[i].cur === raido.give_raw) {
                    raido.commission = parseFloat(currencies[i].commission);
                    raido.in_fee = parseFloat(currencies[i].in_fee);
                    raido.in_min_fee = parseFloat(currencies[i].in_min_fee);
                    raido.get_decimal = currencies[i].decimal;
                    raido.give = currencies[i].cur;
                    raido.in = currencies[i].id;

                    this.setState({ raido: raido });
                }
            }

            var pair = raido.get + "" + raido.give;
            var direction = raido.direction;

            var price = prices[pair][direction];
            console.log("price: " + price);

            if (price) {
                raido.price = price * 1;
                raido.prices = prices;
                this.setState({ raido: raido });
            }

            this.handleChange("auto");
        }
    }, {
        key: "handleChange",
        value: function handleChange(type, event) {
            var name = void 0,
                value = void 0;

            if (type !== "auto") {
                name = event.target.name;
                value = event.target.value;
            } else {
                //Default properties for toggle static getAmount
                name = "getAmount";
                value = this.state.getAmount;
            }

            if (value === "" || value === 0) {
                this.setState({ getAmount: "" });
                this.setState({ giveAmount: "" });
                return;
            }

            value = value * 1;

            var raido = this.state.raido;

            var res_getAmount = void 0;

            if (name === "giveAmount") {
                res_getAmount = value / (raido.price / ((100 - (raido.commission + raido.in_fee)) / 100));
                var res_giveAmount = value;

                this.setState({
                    getAmount: Math.ceil((res_getAmount - raido.withdraw_fee) * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal)
                });
                this.setState({
                    giveAmount: Math.ceil(res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal)
                });
            } else if (name === "getAmount") {
                res_getAmount = value;
                var _res_giveAmount = raido.price * (value + raido.withdraw_fee) / ((100 - (raido.commission + raido.in_fee)) / 100) + raido.in_min_fee;

                this.setState({
                    getAmount: Math.ceil(res_getAmount * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal)
                });
                this.setState({
                    giveAmount: Math.ceil(_res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal)
                });
            }

            if (res_getAmount >= raido.min_deposit && (raido.max_deposit == 0 || res_getAmount <= raido.max_deposit)) {
                this.setState({
                    min_max_validate: {
                        valid: true,
                        direct: "min" //MIN or MAX
                    }
                });
                this.setState({ submitAllowed: true });
            } else {
                if (res_getAmount >= raido.min_deposit) {
                    this.setState({
                        min_max_validate: {
                            valid: false,
                            direct: "max" //MIN or MAX
                        }
                    });
                } else {
                    this.setState({
                        min_max_validate: {
                            valid: false,
                            direct: "min" //MIN or MAX
                        }
                    });
                }

                this.setState({ submitAllowed: false });
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.raido !== this.state.raido || nextProps.deposit_coin_type !== this.props.getAmount || nextState.getAmount !== this.state.getAmount || nextState.giveAmount !== this.state.giveAmount || nextProps.receive_asset !== this.props.receive_asset || nextProps.deposit_asset_name !== this.props.deposit_asset_name || nextProps.action !== this.props.action || nextProps.currentLocale !== this.props.currentLocale;
        }
    }, {
        key: "handlePaymentMethod",
        value: function handlePaymentMethod(e) {
            var payMethod = e.target["name"];
            var str = "paymentmethod";
            payMethod = payMethod.substr(str.length + 1, payMethod.length - str.length).toUpperCase();

            var raido = this.state.raido;
            raido.give_raw = payMethod;

            this.setState({ raido: raido });

            this._setPricesRaido(this.state.raido.prices);

            var finding_el = document.querySelectorAll("label.btn-radio");
            for (var i = 0; i < finding_el.length; i++) {
                finding_el[i].classList.remove("active");
            }
            e.currentTarget.parentNode.classList.add("active");

            this.props.setActiveRaidoCoin(payMethod);
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
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            var account_name = this.props.account.get("name");
            this.deposit_address_cache.cacheInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type, receive_address.address, receive_address.memo);
            this.setState({ account_name: account_name });
            this.setState({ receive_address: receive_address });
        }
    }, {
        key: "_makeUriRaido",
        value: function _makeUriRaido() {
            var strUri = "";
            var raido = this.state.raido;
            var receive_address = this.state.receive_address;

            var objParams = {
                affiliate_id: raido.affiliate_id,
                offer_id: 3,
                volume: this.state.giveAmount,
                in: raido.in,
                out: raido.out,
                "out-p": receive_address.address,
                direction: raido.direction
            };
            for (var item in objParams) {
                strUri += "&" + item + "=" + objParams[item];
            }
            return strUri;
        }
    }, {
        key: "onSubmitRequest",
        value: function onSubmitRequest(e) {
            e.preventDefault();
            this.setState({ error: null });
            var raido_link = "https://raidofinance.eu/buy-sell?" + this._makeUriRaido();
            window.open(raido_link, "_blank");
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: "none", minHeight: 150 } });
            if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;

            var account_balances_object = this.props.account.get("balances");

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

            var receive_address = this.state.receive_address;
            if (this.state.account_name === this.props.account.get("name")) {
                var account_name = this.props.account.get("name");
                var receive_address_from_cache = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
                if (receive_address_from_cache !== undefined) {
                    receive_address = receive_address_from_cache;
                }
            } else if (!this.props.supports_output_memos) {
                Object(lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__["requestDepositAddress"])(this._getDepositObject());
                return emptyRow;
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

            var deposit_address_fragment = null;

            var currentGateway = "RUDEX";
            if (!!lib_common_gateways__WEBPACK_IMPORTED_MODULE_11__["availableGateways"][currentGateway].simpleAssetGateway && this.props.deposit_account) {
                deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    this.props.deposit_account
                );
            } else {
                if ((!receive_address || !receive_address.address) && !this.props.supportsMemos) {
                    Object(lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__["requestDepositAddress"])(this._getDepositObject());
                    return emptyRow;
                }
                if (receive_address.memo) {
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                } else {
                    // This is a client that uses unique deposit addresses to select the output
                    deposit_address_fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        receive_address.address
                    );
                }
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
                            content: "gateway.rudex.buy_crypto.deposit_summary"
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
                            content: "gateway.rudex.buy_crypto.buy_inst"
                        }),
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
                                            deposit_address_fragment
                                        )
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
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
                                        ) : null
                                    )
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px 0", fontSize: "1.1rem" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "ant-col-24 raido" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "ant-col-24",
                                        style: {
                                            margin: "20px 0"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        payment_id: "cardu",
                                        title: "Bank Card (USD)",
                                        active: this.state.raido.give_raw,
                                        onClick: function onClick() {
                                            return _this2.handlePaymentMethod;
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        payment_id: "carde",
                                        title: "Bank Card (EUR)",
                                        active: this.state.raido.give_raw,
                                        onClick: function onClick() {
                                            return _this2.handlePaymentMethod;
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        payment_id: "wiree",
                                        title: "Sepa (EUR)",
                                        active: this.state.raido.give_raw,
                                        onClick: function onClick() {
                                            return _this2.handlePaymentMethod;
                                        }
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "ant-col-10 give" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto.you_give" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        name: "giveAmount",
                                        type: "number",
                                        value: this.state.giveAmount,
                                        onChange: this.handleChange.bind(this, "giveAmount"),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("gateway.rudex.buy_crypto.you_give_placeholder"),
                                        style: {
                                            backgroundImage: "url(" + "" + "images/raido-payment-" + this.state.raido.give_raw.toLowerCase() + ".png)"
                                        }
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "ant-col-10 get",
                                        style: { marginLeft: "10%" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto.you_get" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        name: "getAmount",
                                        type: "number",
                                        value: this.state.getAmount,
                                        onChange: this.handleChange.bind(this, "getAmount"),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("gateway.rudex.buy_crypto.you_get_placeholder"),
                                        style: {
                                            backgroundImage: "url(/asset-symbols/rudex." + this.state.raido.get.toLowerCase() + ".png)"
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: !this.state.min_max_validate.valid ? "raido_min_max_validate active" : "raido_min_max_validate"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            content: "gateway.rudex.buy_crypto." + this.state.min_max_validate.direct + "_amount"
                                        }),
                                        this.state.raido[this.state.min_max_validate.direct + "_deposit"] * 1,
                                        " ",
                                        this.state.raido.get
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "ant-col-24" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "raido_text_block" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                            content: "gateway.rudex.buy_crypto.withdraw_fee_included",
                                            withdraw_fee: this.state.raido.withdraw_fee,
                                            asset: this.state.raido.get
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "raido_text_block" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto.approximate_amount" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "raido_text_block" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto.final_text" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "b",
                                            null,
                                            this.props.account.get("name")
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "ant-col-10 ant-col-offset-6" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "button",
                                            {
                                                className: "button",
                                                disabled: !this.state.submitAllowed,
                                                onClick: this.state.submitAllowed ? this.onSubmitRequest.bind(this) : null,
                                                style: {
                                                    marginTop: "15px",
                                                    width: "100%"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto.buy" })
                                        )
                                    )
                                )
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                            className: "button-group",
                            style: { paddingTop: 20 }
                        })
                    )
                );
            }
        }
    }]);

    return RaidoDepositRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RaidoDepositRequest.propTypes = {
    gateway: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    deposit_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    deposit_asset_name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    deposit_account: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    receive_coin_type: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    action: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
    confirmations: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
};


/* harmony default export */ __webpack_exports__["default"] = (Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RaidoDepositRequest));

/***/ }),

/***/ 3049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RaidoPaymentMethod = function (_React$Component) {
    _inherits(RaidoPaymentMethod, _React$Component);

    function RaidoPaymentMethod(props) {
        _classCallCheck(this, RaidoPaymentMethod);

        return _possibleConstructorReturn(this, (RaidoPaymentMethod.__proto__ || Object.getPrototypeOf(RaidoPaymentMethod)).call(this));
    }

    _createClass(RaidoPaymentMethod, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                payment_id = _props.payment_id;

            var classNname = "";

            if (this.props.active.toLowerCase() == this.props.payment_id.toLowerCase()) classNname = "active";else classNname = "";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "ant-col-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "btn btn-sm btn-radio" + " " + classNname },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "paymentmethod-" + payment_id,
                        type: "radio",
                        onClick: this.props.onClick()
                    }),
                    title,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                        src: "" + "images/raido-payment-" + payment_id + ".png"
                    })
                )
            );
        }
    }]);

    return RaidoPaymentMethod;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaidoPaymentMethod);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy5hYmFiYzg1Mjc2ZWUzN2IyZTMwZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L0Rpc2FibGVDb3B5VGV4dC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QmFsYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb3B5LXRvLWNsaXBib2FyZC9saWIvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3B5LXRvLWNsaXBib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvRmluYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb0RlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvUGF5bWVudE1ldGhvZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IHt1cGRhdGVHYXRld2F5QmFja2Vyc30gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG4vL2ltcG9ydCBPcGVubGVkZ2VyR2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L09wZW5sZWRnZXJHYXRld2F5XCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsXCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvT3BlbkxlZGdlckZpYXRUcmFuc2FjdGlvbkhpc3RvcnlcIjtcbi8vaW1wb3J0IEJsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ibG9ja3RyYWRlcy9CbG9ja1RyYWRlc0JyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG4vL2ltcG9ydCBDaXRhZGVsQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9jaXRhZGVsL0NpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5XCI7XG5pbXBvcnQgUmFpZG9GaW5hbmNlIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvcmFpZG8vUmFpZG9GaW5hbmNlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRGVwb3NpdE1vZGFsIGZyb20gXCIuLi9Nb2RhbC9EZXBvc2l0TW9kYWxcIjtcbmltcG9ydCBXaXRoZHJhd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9XaXRoZHJhd01vZGFsTmV3XCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuXG5jbGFzcyBBY2NvdW50RGVwb3NpdFdpdGhkcmF3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjb250YWluZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9sU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm9sU2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwiYml0c3BhcmtTZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJ4YnRzeFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgYnRTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYnRTZXJ2aWNlXCIsIFwiYnJpZGdlXCIpLFxuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJjaXRhZGVsU2VydmljZVwiLCBcImJyaWRnZVwiKSxcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwibWV0YVNlcnZpY2VcIiwgXCJicmlkZ2VcIiksXG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2VydmljZVwiLCAwKSxcblxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNlcnZpY2VzRG93biAhPT0gdGhpcy5wcm9wcy5zZXJ2aWNlc0Rvd24gfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUcmFkZXNCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNpdGFkZWxCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNpdGFkZWxCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLm9sU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5vbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5ydWRleFNlcnZpY2UgIT09IHRoaXMuc3RhdGUucnVkZXhTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYml0c3BhcmtTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmJpdHNwYXJrU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnhidHN4U2VydmljZSAhPT0gdGhpcy5zdGF0ZS54YnRzeFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5idFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYnRTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY2l0YWRlbFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuY2l0YWRlbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5tZXRhU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5tZXRhU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYWN0aXZlU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkICE9PVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG8gIT09XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG8gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFjY291bnRVdGlscy5nZXRGaW5hbEZlZUFzc2V0KHRoaXMucHJvcHMuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPTFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0bzogIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVJ1REVYU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlWGJ0c3hTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIHhidHN4U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVCaXRTcGFya1NlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUJUU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBidFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2l0YWRlbFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWV0YVNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBtZXRhU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNldFNlcnZpY2UoZSkge1xuICAgICAgICAvL2xldCBpbmRleCA9IHRoaXMuc3RhdGUuc2VydmljZXMuaW5kZXhPZihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2VydmljZXMocnVkZXhHYXRld2F5Q29pbnMpIHtcbiAgICAgICAgLy9sZXQgc2VydmljZXMgPSBbXCJPcGVubGVkZ2VyIChPUEVOLlgpXCIsIFwiQmxvY2tUcmFkZXMgKFRSQURFLlgpXCIsIFwiVHJhbnN3aXNlclwiLCBcIkJpdEthcGl0YWxcIl07XG4gICAgICAgIGxldCBzZXJMaXN0ID0gW107XG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQsXG4gICAgICAgICAgICBSdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG9cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGFncmVlbWVudF9ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0Ny1j0L7Qs9C70LDRiNC10L3QuNC1LdC+0LEt0L7QutCw0LfQsNC90LjQuC3Rg9GB0LvRg9CzLdGI0LvRjtC30LBcIjtcbiAgICAgICAgbGV0IGFncmVlbWVudF9lbiA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0NS1nYXRld2F5LXNlcnZpY2UtYWdyZWVtZW50XCI7XG5cbiAgICAgICAgc2VyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUnVERVggKFJVREVYLlgpXCIsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBcIlJVREVYXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJ1REVYU2VydmljZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWRleFNlcnZpY2UgPT09IFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8udGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0NqeHpkbWNLSUNBZ2VHMXNibk02WkdNOUltaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2SWdvZ0lDQjRiV3h1Y3pwall6MGlhSFIwY0RvdkwyTnlaV0YwYVhabFkyOXRiVzl1Y3k1dmNtY3Zibk1qSWdvZ0lDQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlDaUFnSUhodGJHNXpPbk4yWnowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUNpQWdJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SUtJQ0FnZG1WeWMybHZiajBpTVM0eElnb2dJQ0JwWkQwaWMzWm5NVEF6TURZaUNpQWdJSFpwWlhkQ2IzZzlJakFnTUNBMU1EQXVNREF3TURFZ01UWXlMamd4TlRrMElnb2dJQ0ErQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6RXdNekE0SWo0S0lDQWdJRHhqYkdsd1VHRjBhQW9nSUNBZ0lDQWdhV1E5SW1Oc2FYQlFZWFJvTVRBeU56RWlDaUFnSUNBZ0lDQmpiR2x3VUdGMGFGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2lBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lHbGtQU0p3WVhSb01UQXlOek1pQ2lBZ0lDQWdJQ0FnSUdROUltMGdOREV6TGpjME1pdzVNQzQwTXpVZ1l5QXRNQzR3TlRjc0xUUXVORGswSURRdU1EQTFMQzAzTGpBd01pQTNMakEyTlN3dE9DNDBPVE1nTXk0eE5EUXNMVEV1TlRNZ05DNHlMQzB5TGpVeE1TQTBMakU0T0N3dE15NDROemtnTFRBdU1ESTBMQzB5TGpBNU5DQXRNaTQxTURnc0xUTXVNREU0SUMwMExqZ3pNeXd0TXk0d05UUWdMVFF1TURVMkxDMHdMakEyTXlBdE5pNDBNVFFzTVM0d09UVWdMVGd1TWpnNUxERXVPVGN4SUd3Z0xURXVORFl4TEMwMkxqZ3pOeUJqSURFdU9EZ3hMQzB3TGpnMk55QTFMak0yTkN3dE1TNDJNak1nT0M0NU56WXNMVEV1TmpVMklEZ3VORGM0TERBZ01UUXVNREkxTERRdU1UZzFJREUwTGpBMU5Td3hNQzQyTnpRZ01DNHdNek1zT0M0eU16VWdMVEV4TGpNNU1TdzRMalk1TVNBdE1URXVNekV6TERFeUxqTTNNaUF3TGpBeU55d3hMakV4TmlBeExqQTVNaXd5TGpNd055QXpMalF5Tml3eUxqWXhJREV1TVRVMUxEQXVNVFV6SURRdU16UTBMREF1TWpjZ055NDVOVGtzTFRFdU16azFJR3dnTVM0ME1Ua3NOaTQyTVRVZ1l5QXRNUzQ1TkRRc01DNDNNRGdnTFRRdU5EUXpMREV1TXpnMklDMDNMalUxTkN3eExqTTROaUF0Tnk0NU9Dd3dJQzB4TXk0MU9UTXNMVFF1TWpReUlDMHhNeTQyTXpnc0xURXdMak14TkNCdElETTBMamd5Tnl3NUxqYzBOQ0JqSUMweExqVTBPQ3d3SUMweUxqZzFNeXd0TUM0NU1ETWdMVE11TkRNMUxDMHlMakk0T1NCc0lDMHhNaTR4TVRFc0xUSTRMamt4TnlBNExqUTNNaXd3SURFdU5qZzJMRFF1TmpVNUlERXdMak0xTXl3d0lEQXVPVGM0TEMwMExqWTFPU0EzTGpRMk55d3dJQzAyTGpVeE5pd3pNUzR5TURZZ0xUWXVPRGswTERBZ2JTQXhMakU0TlN3dE9DNDBNeUF5TGpRME5Td3RNVEV1TnpFNElDMDJMalk1Tml3d0lEUXVNalV4TERFeExqY3hPQ0J0SUMwME5pNHlPRFFzT0M0ME15QXROaTQyTnpnc0xUTXhMakl3TmlBNExqQTNNeXd3SURZdU5qYzFMRE14TGpJd05pQXRPQzR3Tnl3d0lHMGdMVEV4TGprME15d3dJQzA0TGpRd015d3RNakV1TWpRZ0xUTXVNems1TERFNExqQTJJR01nTFRBdU16azVMREl1TURFMklDMHhMamszTkN3ekxqRTRJQzB6TGpjeU15d3pMakU0SUd3Z0xURXpMamN6Tnl3d0lDMHdMakU1TWl3dE1DNDVNRFlnWXlBeUxqZ3lMQzB3TGpZeE1pQTJMakF5TkN3dE1TNDFPVGtnTnk0NU5qVXNMVEl1TmpVMUlERXVNVGc0TEMwd0xqWTBOU0F4TGpVeU55d3RNUzR5TURrZ01TNDVNVGNzTFRJdU56UXlJR3dnTmk0ME16Z3NMVEkwTGprd015QTRMalV6TWl3d0lERXpMakE0TERNeExqSXdOaUF0T0M0ME56Z3NNQ0lnTHo0S0lDQWdJRHd2WTJ4cGNGQmhkR2crQ2lBZ0lDQThiR2x1WldGeVIzSmhaR2xsYm5RS0lDQWdJQ0FnSUdsa1BTSnNhVzVsWVhKSGNtRmthV1Z1ZERFd01qYzNJZ29nSUNBZ0lDQWdjM0J5WldGa1RXVjBhRzlrUFNKd1lXUWlDaUFnSUNBZ0lDQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtEZzBMakU1T1RVc016RXVNREE0T0N3ek1TNHdNRGc0TEMwNE5DNHhPVGsxTERFNUxqVXhNaXd0TWpjdU5ERTVNaWtpQ2lBZ0lDQWdJQ0JuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJS0lDQWdJQ0FnSUhreVBTSXdJZ29nSUNBZ0lDQWdlREk5SWpFaUNpQWdJQ0FnSUNCNU1UMGlNQ0lLSUNBZ0lDQWdJSGd4UFNJd0lqNEtJQ0FnSUNBZ1BITjBiM0FLSUNBZ0lDQWdJQ0FnYVdROUluTjBiM0F4TURJM09TSUtJQ0FnSUNBZ0lDQWdiMlptYzJWMFBTSXdJZ29nSUNBZ0lDQWdJQ0J6ZEhsc1pUMGljM1J2Y0MxdmNHRmphWFI1T2pFN2MzUnZjQzFqYjJ4dmNqb2pNakl5TXpVM0lpQXZQZ29nSUNBZ0lDQThjM1J2Y0FvZ0lDQWdJQ0FnSUNCcFpEMGljM1J2Y0RFd01qZ3hJZ29nSUNBZ0lDQWdJQ0J2Wm1aelpYUTlJakVpQ2lBZ0lDQWdJQ0FnSUhOMGVXeGxQU0p6ZEc5d0xXOXdZV05wZEhrNk1UdHpkRzl3TFdOdmJHOXlPaU15TlRSaFlUVWlJQzgrQ2lBZ0lDQThMMnhwYm1WaGNrZHlZV1JwWlc1MFBnb2dJRHd2WkdWbWN6NEtJQ0E4YldWMFlXUmhkR0VLSUNBZ0lDQnBaRDBpYldWMFlXUmhkR0V4TURNeE1TSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR2NLSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TXpNekxqY3dNVFUzTEMwMU16WXVOREkwTXpFcElnb2dJQ0FnSUdsa1BTSnNZWGxsY2pFaVBnb2dJQ0FnUEdjS0lDQWdJQ0FnSUdsa1BTSm5NVEF5TmpjaUNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnMExqazRORFk0TlRZc01Dd3dMQzAwTGprNE5EWTROVFlzTFRFME56QXVNVEU0TlN3eE1ETTVMall5TmpRcElqNEtJQ0FnSUNBZ1BHY0tJQ0FnSUNBZ0lDQWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01UQXlOekVwSWdvZ0lDQWdJQ0FnSUNCcFpEMGlaekV3TWpZNUlqNEtJQ0FnSUNBZ0lDQThad29nSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtETTFNUzQyTVRFc09UWXVPRGsyS1NJS0lDQWdJQ0FnSUNBZ0lDQnBaRDBpWnpFd01qYzFJajRLSUNBZ0lDQWdJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQWdJQ0FnSUNCcFpEMGljR0YwYURFd01qZ3pJZ29nSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U5SW1acGJHdzZkWEpzS0NOc2FXNWxZWEpIY21Ga2FXVnVkREV3TWpjM0tUdG1hV3hzTFc5d1lXTnBkSGs2TVR0bWFXeHNMWEoxYkdVNmJtOXVlbVZ5Ynp0emRISnZhMlU2Ym05dVpTSUtJQ0FnSUNBZ0lDQWdJQ0FnSUdROUlrMGdNQ3d3SURrNExqUXpOeXd6Tmk0eU5USWdNVEl3TGpnek1Td3RNalF1TlRVM0lESXlMak01TlN3dE5qQXVPREE1SWlBdlBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdQQzluUGdvZ0lDQWdQQzluUGdvZ0lEd3ZaejRLUEM5emRtYytDZz09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxMHB4IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0I0Yld4dWN6cGpZejBpYUhSMGNEb3ZMMk55WldGMGFYWmxZMjl0Ylc5dWN5NXZjbWN2Ym5Naklnb2dJQ0I0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pQ2lBZ0lIaHRiRzV6T25OMlp6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUFnSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2RtbGxkMEp2ZUQwaU1DQXdJRFkwT1M0NU9UazVPQ0EwTURVdU5qTXlNallpQ2lBZ0lIWmxjbk5wYjI0OUlqRXVNU0lLSUNBZ2FXUTlJbk4yWnpnNU5TSStDaUFnUEcxbGRHRmtZWFJoQ2lBZ0lDQWdhV1E5SW0xbGRHRmtZWFJoT0RrNUlqNEtJQ0FnSUR4eVpHWTZVa1JHUGdvZ0lDQWdJQ0E4WTJNNlYyOXlhd29nSUNBZ0lDQWdJQ0J5WkdZNllXSnZkWFE5SWlJK0NpQWdJQ0FnSUNBZ1BHUmpPbVp2Y20xaGRENXBiV0ZuWlM5emRtY3JlRzFzUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ1BHUmpPblI1Y0dVS0lDQWdJQ0FnSUNBZ0lDQnlaR1k2Y21WemIzVnlZMlU5SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5a1kyMXBkSGx3WlM5VGRHbHNiRWx0WVdkbElpQXZQZ29nSUNBZ0lDQWdJRHhrWXpwMGFYUnNaVDVCYzNObGRDQXhQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6ZzNPU0krQ2lBZ0lDQThjM1I1YkdVS0lDQWdJQ0FnSUhSNWNHVTlJblJsZUhRdlkzTnpJZ29nSUNBZ0lDQWdhV1E5SW5OMGVXeGxPRGMzSWo0dVlYdHZjR0ZqYVhSNU9qQTdmUzVpZTJacGJHdzZJMlptWmp0OUxtTjdabWxzYkRvalptWTFaakF3TzMwdVpIdG1hV3hzT2lObFlqQXdNV0k3ZlM1bGUyWnBiR3c2STJZM09XVXhZanQ5UEM5emRIbHNaVDRLSUNBOEwyUmxabk0rQ2lBZ1BIUnBkR3hsQ2lBZ0lDQWdhV1E5SW5ScGRHeGxPRGd4SWo1QmMzTmxkQ0F4UEM5MGFYUnNaVDRLSUNBOGNtVmpkQW9nSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaVHRtYVd4c09pTm1aalZtTURBN2MzUnliMnRsTFhkcFpIUm9PalV1TkRrek9ERXhOakVpQ2lBZ0lDQWdZMnhoYzNNOUltTWlDaUFnSUNBZ2VEMGlNakk1TGpnek1qWXpJZ29nSUNBZ0lIazlJalEzTGpJNU56Y3pOeUlLSUNBZ0lDQjNhV1IwYUQwaU1Ua3dMalF4TlRVeElnb2dJQ0FnSUdobGFXZG9kRDBpTXpFeExqQXdORGNpQ2lBZ0lDQWdhV1E5SW5KbFkzUTRPRGNpSUM4K0NpQWdQSEJoZEdnS0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvalpXSXdNREZpTzNOMGNtOXJaUzEzYVdSMGFEbzFMalE1TXpneE1UWXhJZ29nSUNBZ0lHTnNZWE56UFNKa0lnb2dJQ0FnSUdROUltMGdNalE1TGpRME5UVTBMREl3TWk0NE1qYzFOaUJoSURFNU55NDBORGMxT1N3eE9UY3VORFEzTlRrZ01DQXdJREVnTnpVdU5UTTVPVEVzTFRFMU5TNDBOelE0TmpjZ01UazNMamMzTnpJeUxERTVOeTQzTnpjeU1pQXdJREVnTUNBd0xETXhNUzR3TURRMk56Y2dNVGszTGpRME56VTVMREU1Tnk0ME5EYzFPU0F3SURBZ01TQXROelV1TlRNNU9URXNMVEUxTlM0MU1qazRNU0I2SWdvZ0lDQWdJR2xrUFNKd1lYUm9PRGc1SWlBdlBnb2dJRHh3WVhSb0NpQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyWTNPV1V4WWp0emRISnZhMlV0ZDJsa2RHZzZOUzQwT1RNNE1URTJNU0lLSUNBZ0lDQmpiR0Z6Y3owaVpTSUtJQ0FnSUNCa1BTSnRJRFl5Tmk0eE1ERXpMRE15TlM0ek9UUTFJSFlnTFRZdU16Y3lPRElnYUNBeUxqYzBOamtnZGlBdE1TNHpNVGcxTWlCb0lDMDJMalV6TnpZMElIWWdNUzR6TVRnMU1pQm9JREl1TlRneU1TQjJJRFl1TXpjeU9ESWdlaUJ0SURFeUxqWTVNRGNzTUNCMklDMDNMalk1TVRNMElHZ2dMVEV1T1RjM056Z2diQ0F0TWk0ek1EYzBMRFV1TkRrek9ERWdMVEl1TXpBM05Dd3ROUzQwT1RNNE1TQm9JQzB4TGprM056YzNJSFlnTnk0Mk9URXpOQ0JvSURFdU5ESTRNemtnZGlBdE5TNDRNak0wTkNCc0lESXVNVFF5TlRrc05DNDVPVGt6TnlCb0lERXVORGd6TXpNZ2JDQXlMakUwTWpVNExDMDBMams1T1RNM0lIWWdOUzQ0TWpNME5DQjZJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3hJaUF2UGdvZ0lEeHdZWFJvQ2lBZ0lDQWdjM1I1YkdVOUltWnBiR3c2STJZM09XVXhZanR6ZEhKdmEyVXRkMmxrZEdnNk5TNDBPVE00TVRFMk1TSUtJQ0FnSUNCamJHRnpjejBpWlNJS0lDQWdJQ0JrUFNKdElEWTBOU3d5TURJdU9ESTNOVFlnWVNBeE9UY3VOemMzTWpJc01UazNMamMzTnpJeUlEQWdNQ0F4SUMwek1qQXVNREUwTlRVc01UVTFMalEzTkRnM0lERTVOeTQzTnpjeU1pd3hPVGN1TnpjM01qSWdNQ0F3SURBZ01Dd3RNekV4TGpBd05EWTNOU0JCSURFNU55NDNOemN5TWl3eE9UY3VOemMzTWpJZ01DQXdJREVnTmpRMUxESXdNaTQzTnpJMk1pQmFJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3pJaUF2UGdvOEwzTjJaejRLXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI0MHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJeUxqRXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUluTjJaekV3T1RBNElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lLQ1NCMmFXVjNRbTk0UFNJd0lEQWdOelV3SURJd05TSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ056VXdJREl3TlRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ284YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBnb0pMbk4wTUh0bWFXeHNPaU14TURJNU9FVTdmUW9KTG5OME1YdG1hV3hzT2lOR1JrSkZNREE3ZlFvOEwzTjBlV3hsUGdvOGRHbDBiR1UrYzJWd1lUd3ZkR2wwYkdVK0NqeHdZWFJvSUdsa1BTSndZWFJvTlRZNE9TSWdZMnhoYzNNOUluTjBNQ0lnWkQwaVRURTJOaTQyTERZMUxqUm9MVFV4TGpOak1DMDRMalF0TVMweE5DNHhMVE10TVRkakxUTXROQzR6TFRFeExqUXROaTQwTFRJMUxqSXROaTQwWXkweE15NDBMREF0TWpJdU15d3hMakl0TWpZdU5pd3pMamNLQ1ZNMU5DdzFNeTQyTERVMExEWXhMamhqTUN3M0xqVXNNUzQ1TERFeUxqUXNOUzQzTERFMExqZGpNeTQwTERFdU9DdzNMakVzTWk0NExERXdMamtzTWk0NVREZ3hMRGd3TGpKak1qSXVNaXd4TGpVc016WXNNaTQxTERReExqWXNNeTR4WXpFM0xqVXNNUzQ0TERNd0xqTXNOaTQwTERNNExqRXNNVFFLQ1dNMkxqSXNOUzQ1TERrdU9Td3hNeTQyTERFeExqRXNNak11TVdNd0xqY3NOaTQwTERFdU1Td3hNaTQ1TERFc01Ua3VNMk13TERFMkxqVXRNUzQyTERJNExqWXROQzQzTERNMkxqSmpMVFV1Tnl3eE5DNHhMVEU0TGpVc01qSXVPUzB6T0M0MUxESTJMallLQ1dNdE9DNHpMREV1TmkweU1TNHhMREl1TkMwek9DNHpMREl1TkdNdE1qZ3VOeXd3TFRRNExqZ3RNUzQzTFRZd0xqRXROUzR4WXkweE15NDVMVFF1TWkweU15MHhNaTQ0TFRJM0xqVXRNalV1TmtNeExqSXNNVFkzTGpFc01Dd3hOVFV1TWl3d0xERXpPQzQxYURVeExqTjJOQzR6Q2dsak1DdzRMamtzTWk0MkxERTBMallzTnk0M0xERTNMakpqTkN3eExqa3NPQzQwTERJdU9Dd3hNaTQ0TERJdU9HZ3hPQzQ1WXprdU5pd3dMREUxTGpndE1DNDFMREU0TGpRdE1TNDFZelF1TnkweExqa3NOeTQ0TFRRdU9TdzVMak10T1dNd0xqa3RNeTR5TERFdU15MDJMalVzTVM0eUxUa3VPUW9KWXpBdE9TMHpMak10TVRRdU5TMDVMamt0TVRZdU5XTXRNaTQxTFRBdU9DMHhNeTQ1TFRFdU9TMHpOQzR6TFRNdU1tTXRNVFl1TkMweExqSXRNamN1T0MweUxqTXRNelF1TWkwekxqUmpMVEUyTGpndE15NHhMVEk0TFRrdU5pMHpNeTQyTFRFNUxqUUtDVU15TGpjc09URXVOU3d3TGpJc056Z3VPU3d3TGpJc05qSmpNQzB4TWk0NExERXVNeTB5TXk0eExEUXRNekF1T1hNMkxqa3RNVE11Tml3eE1pNDRMVEUzTGpaak9DNDJMVFl1TWl3eE9TNDNMVGt1T0N3ek15NHlMVEV3TGpsak1URXVNaTB4TERJekxqY3RNUzQxTERNM0xqTXRNUzQxQ2dsak1qRXVOU3d3TERNMkxqa3NNUzR5TERRMkxETXVOMk15TWk0ekxEWXNNek11TlN3eU1pNDRMRE16TGpVc05UQXVORU14TmpjdU1TdzFOeTQxTERFMk5pNDVMRFl3TGprc01UWTJMallzTmpVdU5DSXZQZ284Y0dGMGFDQnBaRDBpY0dGMGFEVTJPVE1pSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB6T1RJdU15d3lNRFZXTUdneE1ESXVPR014TkM0eExEQXNNalF1T0N3eExqRXNNekl1TWl3ekxqVmpNVFl1T1N3MUxqTXNNamd1TWl3eE5pNHhMRE0wTERNeUxqVUtDV016TERndU5pdzBMalVzTWpFdU5TdzBMalVzTXpndU9HTXdMREl3TGpndE1TNDNMRE0xTGpjdE5TdzBOQzQ0WXkwMkxqWXNNVGd0TWpBdU1Td3lPQzR6TFRRd0xqWXNNekZqTFRJdU5Dd3dMalF0TVRJdU55d3dMamd0TXpBdU9Dd3hMakZzTFRrdU1pd3dMak5vTFRNeUxqaDJOVE5JTXpreUxqTjZDZ2tnVFRRME55NDFMREV3TkM0MWFETTBMalJqTVRBdU9TMHdMalFzTVRjdU5TMHhMaklzTVRrdU9TMHlMalZqTXk0eUxURXVPQ3cxTGpVdE5TNDBMRFl1TlMweE1DNDRZekF1T0MwMUxqTXNNUzR5TFRFd0xqWXNNUzB4Tm1Nd0xUZ3VOeTB3TGpjdE1UVXVNUzB5TGpFdE1Ua3VNd29KWXkweUxUVXVPUzAyTGpndE9TNDFMVEUwTGpJdE1UQXVPR010TVM0MUxUQXVNaTAxTGpFdE1DNHpMVEV3TGpjdE1DNHphQzB6TkM0NFZqRXdOQzQxZWlJdlBnbzhjR0YwYUNCcFpEMGljR0YwYURVMk9UY2lJR05zWVhOelBTSnpkREFpSUdROUlrMDJPRE11Tml3eE5qa3VOV2d0TnpNdU9Hd3RPUzQ1TERNMUxqVm9MVFUzTGpGTU5qQTBMalVzTUdnNE15NHlURGMxTUN3eU1EVm9MVFUxTGpsTU5qZ3pMallzTVRZNUxqVjZJRTAyTnpJdU5pd3hNamt1TmdvSmJDMHlOUzQ0TFRnNExqbHNMVEkxTGpFc09EZ3VPVWcyTnpJdU5ub2lMejRLUEhCaGRHZ2dhV1E5SW5CaGRHZzFOekF4SWlCamJHRnpjejBpYzNReElpQmtQU0pOTXpFMkxqSXNNamd1T0dNeU1TNDVMREFzTkRJdU5pdzVMamtzTlRZdU5Dd3lOaTQ1YkRFeExqa3RNalV1TlVNek5qVXNNVEV1T1N3ek16a3VNeXd4TGpjc016RXlMallzTVM0NENnbGpMVFF6TGpVc01DMDRNQzQyTERJMkxqSXRPVFV1T1N3Mk15NDBhQzB5TXk0eWJDMHhNeTQzTERJNUxqTm9Namt1T0dNdE1DNHlMREl1Tnkwd0xqUXNOUzQwTFRBdU5DdzRMakpqTUN3ekxqTXNNQzR5TERZdU55d3dMalVzTVRCb0xURTFiQzB4TXk0M0xESTVMalJvTXpZdU13b0pZekUxTGpjc016WXVNaXcxTWk0MExEWXhMamNzT1RVdU1pdzJNUzQzWXpJd0xqY3NNQ3cwTUM0NUxUWXNOVGd1TVMweE55NDFkaTB6Tm1NdE1qWXVOQ3d6TUM0eUxUY3lMaklzTXpNdU1pMHhNREl1TkN3MkxqaGpMVFV0TkM0MExUa3VOQzA1TGpRdE1UTXRNVFZvTnpac01UTXVOeTB5T1M0MENnbElNalEwTGpKakxUQXVOUzB6TGpZdE1DNDRMVGN1TWkwd0xqZ3RNVEF1T0dNd0xUSXVOU3d3TGpFdE5DNDVMREF1TkMwM0xqUm9NVEE1TGpoc01UTXVOeTB5T1M0emFDMHhNVFJETWpZMkxqSXNOREl1Tnl3eU9UQXVNaXd5T0M0NUxETXhOaTR5TERJNExqZ2lMejRLUEhCaGRHZ2dhV1E5SW5CaGRHZzFOekExSWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTXpFMkxqSXNNamt1TjJNeU1TNDJMREFzTkRJdU1TdzVMamdzTlRVdU55d3lOaTQyYkRBdU9Td3hMakZzTUM0MkxURXVNMnd4TVM0NUxUSTFMalZzTUM0ekxUQXVObXd0TUM0MUxUQXVOQW9KWXkwek5pMHpNeTQzTFRrd0xqVXRNemd1TWkweE16RXVOUzB4TUM0M1l5MHhOaTQ0TERFeExqTXRNekFzTWpjdU15MHpOeTQzTERRMmJEQXVPQzB3TGpaSU1Ua3piQzB3TGpJc01DNDFiQzB4TXk0M0xESTVMalJzTFRBdU5pd3hMak5vTXpFdU1td3RNQzQ1TFRFS0NXTXRNQzR5TERNdE1DNDBMRFV1T0Mwd0xqUXNPQzR6WXpBc015NDBMREF1TWl3MkxqY3NNQzQxTERFd0xqRnNNQzQ1TFRGb0xURTFMalZzTFRBdU1pd3dMalZzTFRFekxqY3NNamt1Tkd3dE1DNDJMREV1TW1nek55NDNiQzB3TGpndE1DNDFZekUyTGpRc016Y3VPQ3cxTkN3Mk1pNHlMRGsyTERZeUxqSUtDV015TUM0NUxEQXVNU3cwTVM0ekxUWXVNU3cxT0M0MkxURTNMalpzTUM0MExUQXVNMVl4TkRoc0xURXVOU3d4TGpoakxUSTJMakVzTWprdU9DMDNNUzQwTERNeUxqZ3RNVEF4TGpJc05pNDNZeTAwTGprdE5DNHpMVGt1TWkwNUxqTXRNVEl1T0MweE5DNDRiQzB3TGpjc01TNDBhRGMyTGpZS0NXd3dMakl0TUM0MWJERXpMamN0TWprdU5Hd3dMall0TVM0eVNESTBOQzR5YkRBdU9Td3dMamhqTFRBdU5TMHpMalV0TUM0NExUY3VNUzB3TGpndE1UQXVOMk13TFRJdU5Dd3dMakV0TkM0NUxEQXVOQzAzTGpOc0xUQXVPU3d3TGpob01URXdMalJzTUM0eUxUQXVOVXd6Tmpnc05qVXVOZ29KYkRBdU5pMHhMak5JTWpVekxqSnNNQzQ0TERFdU0wTXlOall1T0N3ME15NDFMREk1TUM0MUxESTVMamdzTXpFMkxqSXNNamt1TnlCTk1qVXpMaklzTmpZdU1XZ3hNVFJzTFRBdU9DMHhMakpzTFRFekxqY3NNamt1Tkd3d0xqZ3RNQzQxU0RJME1pNDViQzB3TGpFc01DNDRDZ2xqTFRBdU1pd3lMalV0TUM0MExEVXRNQzQwTERjdU5XTXdMRE11Tnl3d0xqTXNOeTQwTERBdU9Dd3hNV3d3TGpFc01DNDRTRE0wTld3dE1DNDRMVEV1TTJ3dE1UTXVOeXd5T1M0MGJEQXVPQzB3TGpWb0xUYzNMamRzTUM0NUxERXVOR015TWk0eUxETTBMRFkzTGpjc05ETXVOaXd4TURFdU55d3lNUzQwQ2dsak5TNDJMVE11Tnl3eE1DNDNMVGd1TVN3eE5TNHlMVEV6TGpKc0xURXVOUzB3TGpaMk16WnNNQzQwTFRBdU4wTXpOVE11TWl3eE9UY3NNek16TGpFc01qQXpMRE14TWk0MkxESXdNMk10TkRFdU1pd3dMVGM0TGpNdE1qUXRPVFF1TkMwMk1TNHhiQzB3TGpJdE1DNDFhQzB6Tmk0NWJEQXVPQ3d4TGpNS0NXd3hNeTQzTFRJNUxqUnNMVEF1T0N3d0xqVm9NVFpzTFRBdU1TMHhZeTB3TGpNdE15NHpMVEF1TlMwMkxqY3RNQzQxTFRrdU9XTXdMVEl1TlN3d0xqRXROUzR5TERBdU5DMDRMakpzTUM0eExURm9MVE13TGpoc01DNDRMREV1TW13eE15NDNMVEk1TGpOc0xUQXVPQ3d3TGpWb01qTXVPQW9KYkRBdU1pMHdMalZqTnk0MkxURTRMalFzTWpBdU5TMHpOQzR4TERNM0xqRXRORFV1TW1NME1DNHpMVEkzTERrekxqa3RNakl1Tml3eE1qa3VNaXd4TUM0MWJDMHdMakl0TVd3dE1URXVPU3d5TlM0MWJERXVOUzB3TGpKakxUSTFMall0TXpFdU5TMDNNUzQ0TFRNMkxqUXRNVEF6TGpRdE1UQXVPQW9KWXkwM0xEVXVOeTB4TWk0NUxERXlMall0TVRjdU5Dd3lNQzQwYkMwd0xqZ3NNUzR6VERJMU15NHlMRFkyTGpGNklpOCtDand2YzNablBnbz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7cnVkZXhTZXJ2aWNlID09PSBcImdhdGV3YXlcIiAmJiBydWRleEdhdGV3YXlDb2lucy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudExvY2FsZSA9PSBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZ3JlZW1lbnRfcnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUnVkZXhOb3RpY2UxSW5mb3JtZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFfaW5mb3JtZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlMUluZm9ybWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhHYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM9e3J1ZGV4R2F0ZXdheUNvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHtydWRleFNlcnZpY2UgPT09IFwiZmlhdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vbWVyY2hhbnQucmFpZG9maW5hbmNlLmV1L21lZGlhLzgzZWVmM2Q1YTE3YmYzMDBhZjk5ODZlOTEzYzJjOTlkLnBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2VfdGhpcmRfcGFydHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxX2luZm9ybWVkX3RoaXJkX3BhcnR5X3NlcnZpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0byA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvRmluYW5jZSBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VyTGlzdDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgc2VydmljZXNEb3dufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlU2VydmljZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBydWRleEdhdGV3YXlDb2lucyA9IHRoaXMucHJvcHMucnVkZXhCYWNrZWRDb2luc1xuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29pbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5yZW5kZXJTZXJ2aWNlcyhydWRleEdhdGV3YXlDb2lucyk7XG5cbiAgICAgICAgY29uc3Qgc2VydmljZU5hbWVzID0gW107XG4gICAgICAgIGxldCBvcHRpb25zID0gc2VydmljZXMubWFwKChzZXJ2aWNlc19vYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZXMucHVzaChzZXJ2aWNlc19vYmouaWRlbnRpZmllcik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzX29iai5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2VOYW1lID0gc2VydmljZU5hbWVzW2FjdGl2ZVNlcnZpY2VdO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZURvd24gPSBzZXJ2aWNlc0Rvd24uZ2V0KGN1cnJlbnRTZXJ2aWNlTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRhaW5lZCA/IFwiZ3JpZC1jb250ZW50XCIgOiBcImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29udGFpbmVkID8gXCJcIiA6IFwiZ3JpZC1jb250ZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwb3NpdE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImRlcG9zaXRfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiZGVwb3NpdF9tb2RhbF9uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZWRDb2lucz17dGhpcy5wcm9wcy5iYWNrZWRDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXRoZHJhd01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIndpdGhkcmF3X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIndpdGhkcmF3X21vZGFsX25ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zPXt0aGlzLnByb3BzLmJhY2tlZENvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJnYXRld2F5LnBoYXNlX291dF93YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZXBvc2l0X21vZGFsX2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZGVwb3NpdF9tb2RhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuZGVwb3NpdC5zdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwid2l0aGRyYXdfbW9kYWxfbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMud2l0aGRyYXdfbW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy53aXRoZHJhd19tb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkudGl0bGVcIiBjb21wb25lbnQ9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzaG93LWZvci1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj1cImRlcG9zaXQtc2hvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj1cInJlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IHNtYWxsLW9yZGVyLTIgbWVkaXVtLW9yZGVyLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5zZXJ2aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRTZXJ2aWNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVTZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VydmljZURvd24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgZ2F0ZXdheS51bmF2YWlsYWJsZV8ke2N1cnJlbnRTZXJ2aWNlTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpdW0tNSBtZWRpdW0tb2Zmc2V0LTEgc21hbGwtb3JkZXItMSBtZWRpdW0tb3JkZXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3toZWlnaHQ6IDQwLCB3aWR0aDogNDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21faW1hZ2U9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTV9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhY3RpdmVTZXJ2aWNlICYmIHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VydmljZXNbYWN0aXZlU2VydmljZV0udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXJ2aWNlc1swXS50ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5BY2NvdW50RGVwb3NpdFdpdGhkcmF3ID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50RGVwb3NpdFdpdGhkcmF3KTtcblxuY2xhc3MgRGVwb3NpdFN0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB1cGRhdGVHYXRld2F5QmFja2VycygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBY2NvdW50RGVwb3NpdFdpdGhkcmF3IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgRGVwb3NpdFN0b3JlV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmUsIEdhdGV3YXlTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIGFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwibG9jYWxlXCIpLFxuICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICBvcGVuTGVkZ2VyQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJPUEVOXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBydWRleEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiUlVERVhcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJpdHNwYXJrQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJTUEFSS0RFWFwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYmxvY2tUcmFkZXNCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlRSQURFXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjaXRhZGVsQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJDSVRBREVMXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB4YnRzeEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiWEJUU1hcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNlcnZpY2VzRG93bjogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuZG93biB8fCB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4vUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHtcbiAgICBSZWNlbnRUcmFuc2FjdGlvbnMsXG4gICAgVHJhbnNhY3Rpb25XcmFwcGVyXG59IGZyb20gXCJjb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFwicmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1wiO1xuXG5jbGFzcyBSdURleEdhdGV3YXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHthY3Rpb246IFwiZGVwb3NpdFwifSksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblwiLCBcImRlcG9zaXRcIilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZ2V0QWN0aXZlQ29pbihwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgbGV0IGNhY2hlZENvaW4gPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlQ29pbl9ydWRleFwiLCBudWxsKTtcbiAgICAgICAgbGV0IGZpcnN0VGltZUNvaW4gPSBcIlBQWVwiO1xuICAgICAgICBsZXQgYWN0aXZlQ29pbiA9IGNhY2hlZENvaW4gPyBjYWNoZWRDb2luIDogZmlyc3RUaW1lQ29pbjtcblxuICAgICAgICBpZiAoc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW4gPSB0aGlzLl9maW5kQ29pbkJ5TmFtZShwcm9wcywgYWN0aXZlQ29pbikuc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvaW47XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5wcm92aWRlciAhPT0gdGhpcy5wcm9wcy5wcm92aWRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29pbjogdGhpcy5fZ2V0QWN0aXZlQ29pbihuZXh0UHJvcHMsIHRoaXMuc3RhdGUuYWN0aW9uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAgICBvblNlbGVjdENvaW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIHNldHRpbmdbYGFjdGl2ZUNvaW5fcnVkZXhfJHt0aGlzLnN0YXRlLmFjdGlvbn1gXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoc2V0dGluZyk7XG4gICAgfSovXG5cbiAgICBvblNlbGVjdENvaW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGUudmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcbiAgICAgICAgbGV0IGNvaW5OYW1lID0gZS52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGNvaW5OYW1lID0gdGhpcy5fZmluZENvaW5CeVN5bWJvbCh0aGlzLnByb3BzLCBjb2luTmFtZSkuYmFja2luZ0NvaW47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ1tcImFjdGl2ZUNvaW5fcnVkZXhcIl0gPSBjb2luTmFtZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5TmFtZShwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzLmNvaW5zWzBdO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5U3ltYm9sKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2luID0gcHJvcHMuY29pbnNbaV07XG4gICAgICAgICAgICBpZiAoY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSB0aGlzLl9nZXRBY3RpdmVDb2luKHRoaXMucHJvcHMsIHthY3Rpb246IHR5cGV9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGFjdGl2ZUNvaW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtbXCJydWRleEFjdGlvblwiXTogdHlwZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjb2lucywgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUNvaW4sIGFjdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghY29pbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyZWRDb2lucyA9IGNvaW5zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIGlmICghYSB8fCAhYS5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYS5kZXBvc2l0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICA6IGEud2l0aGRyYXdhbEFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luT3B0aW9ucyA9IGZpbHRlcmVkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZml4ID0gbmFtZSA9PT0gXCJQUFlcIiA/IFwiXCIgOiBcIlJVREVYLlwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJlZml4ICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW4gPSBmaWx0ZXJlZENvaW5zLmZpbHRlcihjb2luID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IGFjdGl2ZUNvaW5cbiAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sID09PSBhY3RpdmVDb2luO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAoIWNvaW4pIGNvaW4gPSBmaWx0ZXJlZENvaW5zWzBdO1xuXG4gICAgICAgIGxldCBpc0RlcG9zaXQgPSB0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IHN1cHBvcnRVcmwgPSBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbVwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImdhdGV3YXkuY2hvb3NlX1wiICsgYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT1cImV4dGVybmFsLWNvaW4tdHlwZXMgYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDb2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUNvaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvaW5PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L1NlbGVjdD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfdGV4dFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcImRlcG9zaXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwid2l0aGRyYXdcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyFjb2luID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29pbi5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17Y29pbi5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e2NvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfY29pbl90eXBlPXtjb2luLmJhY2tpbmdDb2luLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYWNjb3VudD17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X3dhbGxldF90eXBlPXtjb2luLndhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2NvaW5fdHlwZT17Y29pbi5zeW1ib2wudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zPXtjb2luLnN1cHBvcnRzTWVtb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUHVibGljS2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uc3VwcG9ydHNQdWJsaWNLZXkgfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVHlwZT17Y29pbi5tZW1vVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17Y29pbi5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e2NvaW4uZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfcHJlY2lzaW9uPXtjb2luLnByZWNpc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnN1cHBvcnRfYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4gJiYgY29pbi5zeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXQsIHRvLCBmcm9tQWNjb3VudH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e0ltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmlsdGVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNhY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUnVEZXhHYXRld2F5LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IERpc2FibGVDb3B5VGV4dCBmcm9tIFwiLi4vRGlzYWJsZUNvcHlUZXh0XCI7XG5pbXBvcnQgUnVEZXhXaXRoZHJhd01vZGFsIGZyb20gXCIuL1J1RGV4V2l0aGRyYXdNb2RhbFwiO1xuaW1wb3J0IEFjY291bnRCYWxhbmNlIGZyb20gXCIuLi8uLi9BY2NvdW50L0FjY291bnRCYWxhbmNlXCI7XG5pbXBvcnQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIGZyb20gXCJjb21tb24vUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXCI7XG5pbXBvcnQge3JlcXVlc3REZXBvc2l0QWRkcmVzc30gZnJvbSBcImxpYi9jb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmQgZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7YXZhaWxhYmxlR2F0ZXdheXN9IGZyb20gXCJsaWIvY29tbW9uL2dhdGV3YXlzXCI7XG5cbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGUucmVhY3RcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBpc3N1ZXJfYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGRlcG9zaXRfYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9pbl9mYXZvcl9vZjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX21lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBzdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVtb1R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGFzc2V0X3ByZWNpc2lvbjogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHFyY29kZTogXCJcIixcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MgPSB0aGlzLmFkZERlcG9zaXRBZGRyZXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93UXJNb2RhbCA9IHRoaXMuc2hvd1FyTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXJNb2RhbCA9IHRoaXMuaGlkZVFyTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNob3dRcmNvZGUodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxcmNvZGU6IHRleHR9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dRck1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dRck1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXJNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZVFyTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfbm90aWZ5KHN1KSB7XG4gICAgICAgIGxldCBzdHJOID0gXCJjb3B5X2FkZHJlc3NcIjtcblxuICAgICAgICBpZiAoc3UgPT0gXCJtZW1vXCIpIHN0ck4gPSBcImNvcHlfbWVtb1wiO1xuXG4gICAgICAgIE5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubm90aWZ5LlwiICsgc3RyTilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgLy8gICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3ModGhpcy5wcm9wcy5nYXRld2F5LCBhY2NvdW50X25hbWUsIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUpO1xuICAgIC8vIH1cblxuICAgIGFkZERlcG9zaXRBZGRyZXNzKHJlY2VpdmVfYWRkcmVzcykge1xuICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnRfbmFtZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlX2FkZHJlc3N9KTtcbiAgICB9XG5cbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInRoaXMucHJvcHMuaXNzdWVyOiBcIiwgdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC50b0pTKCkgKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJ0aGlzLnJlY2VpdmVfYXNzZXQuaXNzdWVyOiBcIiwgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LnRvSlMoKSApXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcIndpdGhkcmF3X2Fzc2V0X1wiICtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKSArXG4gICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhdygpIHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbXB0eVJvdyA9IDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIiwgbWluSGVpZ2h0OiAxNTB9fSAvPjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXRcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzX29iamVjdCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcblxuICAgICAgICAvLyBsZXQgYmFsYW5jZSA9IFwiMCBcIiArIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpIHtcbiAgICAgICAgICAgIGxldCBoYXNfbm9uemVyb19iYWxhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3RfaWQgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZV9vYmplY3RfaWQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGJhbGFuY2Vfb2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlICE9IDApIGhhc19ub256ZXJvX2JhbGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzX25vbnplcm9fYmFsYW5jZSkgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC50b0pTKCk7XG4gICAgICAgIC8vIGxldCBhc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpO1xuICAgICAgICAvLyBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIC8vICAgICBpZiggY3VycmVudF9hc3NldF9pZCApXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgYmFsYW5jZSA9ICg8c3Bhbj48VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIvPjogPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX0vPjwvc3Bhbj4pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NvdW50X25hbWUgPT09IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGUgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyA9IHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vcykge1xuICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcXJjb2RlID0gdGhpcy5zdGF0ZS5xcmNvZGU7XG4gICAgICAgIGxldCBkZXBvc2l0Q29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucyAmJiB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImlycmV2ZXJzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5sYXN0X2lycmV2ZXJzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd2l0aGRyYXdfbW9kYWxfaWQgPSB0aGlzLmdldFdpdGhkcmF3TW9kYWxJZCgpO1xuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGRlcG9zaXRfbWVtbyA9IG51bGw7XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IDxzcGFuPnBsZWFzZSB1c2Uge3RoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZi5nZXQoXCJzeW1ib2xcIil9IGluc3RlYWQuIDxzcGFuIGRhdGEtdGlwPXt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfbWVzc2FnZX0gZGF0YS1wbGFjZT1cInJpZ2h0XCIgZGF0YS1odG1sPXt0cnVlfT48SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIiAvPjwvc3Bhbj48UmVhY3RUb29sdGlwIC8+PC9zcGFuPjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgbGV0IGNsaXBib2FyZFRleHQgPSBcIlwiO1xuICAgICAgICBsZXQgbWVtb1RleHQ7XG4gICAgICAgIGxldCB3aXRoZHJhd19tZW1vX3ByZWZpeDtcbiAgICAgICAgbGV0IGN1cnJlbnRHYXRld2F5ID0gXCJSVURFWFwiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIWF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5zaW1wbGVBc3NldEdhdGV3YXkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudH08L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50O1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5tZW1vVHlwZSAmJiB0aGlzLnByb3BzLm1lbW9UeXBlID09PSBcImJ0c2lkXCIpIHtcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmRfYnRzaWRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLnJlcGxhY2UoXCIxLjIuXCIsIFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1wiYXBwZW5kXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwb3NpdF9tZW1vID0gPHNwYW4+e21lbW9UZXh0fTwvc3Bhbj47XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUgKyBcIjpcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoIXJlY2VpdmVfYWRkcmVzcyB8fCAhcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyBhIGRlcG9zaXQgbWVtbyAobGlrZSBldGhlcmV1bSksIHdlIG5lZWQgdG8gZGlzcGxheSBib3RoIHRoZSBhZGRyZXNzIGFuZCB0aGUgbWVtbyB0aGV5IG5lZWQgdG8gc2VuZFxuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLm1lbW87XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPntyZWNlaXZlX2FkZHJlc3MubWVtb308L3NwYW4+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyB1bmlxdWUgZGVwb3NpdCBhZGRyZXNzZXMgdG8gc2VsZWN0IHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpdGhkcmF3X21lbW9fcHJlZml4ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9zdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudD17dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRDb25maXJtYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aT57ZGVwb3NpdENvbmZpcm1hdGlvbn08L2k+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCIsIGZvbnRTaXplOiBcIjEuMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERFJFU1M6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNhYmxlQ29weVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29weVRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnVzZV9jb3B5X2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXNhYmxlQ29weVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TaG93UXJjb2RlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5xcmNvZGUubGFiZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X21lbW8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzYWJsZUNvcHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvcHlUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS51c2VfY29weV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUVNTzogPGI+e2RlcG9zaXRfbWVtb308L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2FibGVDb3B5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNob3dRcmNvZGUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLnFyY29kZS5sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlUXJNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXJNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlUXJNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRRckNvZGVNb2RhbCB0ZXh0PXtxcmNvZGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtjbGlwYm9hcmRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5fbm90aWZ5KFwiYWRkcmVzc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbW9UZXh0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e21lbW9UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5fbm90aWZ5KFwibWVtb1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPkNvcHkgbWVtbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b193aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPldoZW4geW91IHdpdGhkcmF3IHt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSwgeW91IHdpbGwgcmVjZWl2ZSB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fSBhdCBhIDE6MSByYXRpbyAobWludXMgZmVlcykuPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjEuM3JlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbldpdGhkcmF3LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X25vd1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnYXRld2F5LndpdGhkcmF3X2NvaW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW46IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleFdpdGhkcmF3TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyPXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fbmFtZT17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZT17dGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfd2FsbGV0X3R5cGU9e3RoaXMucHJvcHMuZGVwb3NpdF93YWxsZXRfdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNfbWVtb3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fcHJlZml4PXt3aXRoZHJhd19tZW1vX3ByZWZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbF9pZD17d2l0aGRyYXdfbW9kYWxfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17dGhpcy5wcm9wcy5taW5fYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e3RoaXMucHJvcHMuZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9wcmVjaXNpb249e3RoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgRGVwb3NpdFFyQ29kZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudGV4dDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTJcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxRUkNvZGUgc2l6ZT17MjAwfSB2YWx1ZT17dGV4dH0gLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIn19Pnt0ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBEaXNhYmxlQ29weVRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBkaXNhYmxlQ29weTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgcmVwbGFjZUNvcHlUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVDb3B5ID0gdGhpcy5faGFuZGxlQ29weS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkUmVmKSB0aGlzLm5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmNoaWxkUmVmKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSAmJiB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5faGFuZGxlQ29weSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLl9oYW5kbGVDb3B5KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlQ29weShldnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlQ29weSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZUNvcHlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBldnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC9wbGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwbGFjZUNvcHlUZXh0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIHJlZj17cmVmID0+ICh0aGlzLmNoaWxkUmVmID0gcmVmKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2FibGVDb3B5VGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCB7dmFsaWRhdGVBZGRyZXNzLCBXaXRoZHJhd0FkZHJlc3Nlc30gZnJvbSBcImNvbW1vbi9SdURleE1ldGhvZHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jLCBjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XG5pbXBvcnQge1ByaWNlLCBBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge0J1dHRvbiwgTW9kYWx9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgUnVEZXhXaXRoZHJhd01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBpc3N1ZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl9zeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG91dHB1dF93YWxsZXRfdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3V0cHV0X3N1cHBvcnRzX21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXk6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIGFtb3VudF90b193aXRoZHJhdzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcbiAgICAgICAgbWluX2Ftb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZ2F0ZUZlZTogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogdGhpcy5wcm9wcy5hbW91bnRfdG9fd2l0aGRyYXcsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxuICAgICAgICAgICAgICAgIHByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9uc19pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb25faXNfdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcbiAgICAgICAgICAgICAgICBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IFwiXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5OiB0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICBtZW1vOiBcIlwiLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19maXJzdDogdHJ1ZSxcbiAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogcHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZDpcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmFzc2V0c19ieV9zeW1ib2wuZ2V0KHByb3BzLmZlZV9hc3NldF9zeW1ib2wpIHx8XG4gICAgICAgICAgICAgICAgXCIxLjMuMFwiLFxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MsIHByb3BzKTtcblxuICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UgPSB0aGlzLl9jaGVja0JhbGFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2hlY2tNaW5BbW91bnQgPSB0aGlzLl9jaGVja01pbkFtb3VudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUgPSBkZWJvdW5jZSh0aGlzLl91cGRhdGVGZWUuYmluZCh0aGlzKSwgMjUwKTtcblxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsID0gdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuTW91bnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5hY2NvdW50ICE9PSB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCAmJlxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnAuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBuZXcgQXNzZXQoe2Ftb3VudDogMH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29uZmlybWF0aW9uTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlRmVlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQge2ZlZV9hc3NldF9pZCwgZnJvbV9hY2NvdW50fSA9IHN0YXRlO1xuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlc1swXSAhPT0gZmVlX2Fzc2V0X2lkXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkID0gZmVlX2Fzc2V0X3R5cGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmcm9tX2FjY291bnQpIHJldHVybiBudWxsO1xuICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcbiAgICAgICAgICAgIGFjY291bnRJRDogZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgZmVlSUQ6IGZlZV9hc3NldF9pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAoc3RhdGUubWVtbyA/IFwiOlwiICsgc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHtmZWUsIGhhc0JhbGFuY2UsIGhhc1Bvb2xCYWxhbmNlfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudW5Nb3VudGVkKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IGZlZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzUG9vbEJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAhaGFzQmFsYW5jZSB8fCAhaGFzUG9vbEJhbGFuY2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrRmVlU3RhdHVzKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQgYWNjb3VudCA9IHN0YXRlLmZyb21fYWNjb3VudDtcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlczogYXNzZXRzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSk7XG4gICAgICAgIC8vIGNvbnN0IGFzc2V0cyA9IFtcIjEuMy4wXCIsIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildO1xuICAgICAgICBsZXQgZmVlU3RhdHVzID0ge307XG4gICAgICAgIGxldCBwID0gW107XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgcC5wdXNoKFxuICAgICAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGZlZUlEOiBhLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUubWVtbyA/IFwiOlwiICsgc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKHApXG4gICAgICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2FdID0gc3RhdHVzW2lkeF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhzdGF0ZS5mZWVTdGF0dXMsIGZlZVN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTWVtb0NoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBlLnRhcmdldC52YWx1ZX0sIHRoaXMuX3VwZGF0ZUZlZSk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd0Ftb3VudENoYW5nZSh7YW1vdW50fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOlxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgIT09IHVuZGVmaW5lZCAmJiAhcGFyc2VGbG9hdChhbW91bnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrTWluQW1vdW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDaGFuZ2VkKGluZGV4KSB7XG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfYWRkcmVzcyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgIClbaW5kZXhdO1xuICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBhZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MpO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXdBZGRyZXNzQ2hhbmdlZChlKSB7XG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfYWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MpO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXdQdWJsaWNLZXlDaGFuZ2VkKGUpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19wdWJsaWNLZXkgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5OiBuZXdfd2l0aGRyYXdfcHVibGljS2V5LFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTpcbiAgICAgICAgICAgICAgICBuZXdfd2l0aGRyYXdfcHVibGljS2V5ICE9IFwiXCIgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcywgcHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHZhbGlkYXRlQWRkcmVzcyh7XG4gICAgICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgICAgICAgIHdhbGxldFR5cGU6IHByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIG5ld0FkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBqc29uID0ge2lzVmFsaWQ6IGZhbHNlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgPT09IG5ld193aXRoZHJhd19hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBqc29uLmlzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleToganNvbi5oYXNPd25Qcm9wZXJ0eShcInB1YmxpY0tleVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBqc29uLnB1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5OiB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGpzb24uaGFzT3duUHJvcGVydHkoXCJwdWJsaWNLZXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrQmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgd2l0aGRyYXdfYW1vdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHthc3NldCwgYmFsYW5jZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWJhbGFuY2UgfHwgIWZlZUFtb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBiYWxhbmNlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcbiAgICAgICAgcmV0dXJuIGhhc0JhbGFuY2U7XG4gICAgfVxuXG4gICAgX2NoZWNrTWluQW1vdW50KCkge1xuICAgICAgICBjb25zdCB7d2l0aGRyYXdfYW1vdW50fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKHdpdGhkcmF3X2Ftb3VudCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBsZXNzVGhhbk1pbmltdW0gPVxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50IDxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbih0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbik7XG4gICAgICAgIC8qICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiWFwiLFxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24pXG4gICAgICAgICk7Ki9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluQW1vdW50RXJyb3I6IGxlc3NUaGFuTWluaW11bX0pO1xuICAgICAgICByZXR1cm4gbGVzc1RoYW5NaW5pbXVtO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLmxlbmd0aCkgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50KSA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIVdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLmluZGV4T2YodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKSA9PSAtMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGZlZV9hc3NldF9pZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLC9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZEFtb3VudCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXIuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUubWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudCA/IGZlZUFtb3VudC5hc3NldF9pZCA6IGZlZV9hc3NldF9pZFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXRDb25maXJtYXRpb24oKSB7XG4gICAgICAgIHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCk7XG5cbiAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBbXTtcbiAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xuICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldDtcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAvLC9nLFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGZlZV9hc3NldF9pZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXIuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBwYXJzZUludChhbW91bnQgKiBwcmVjaXNpb24sIDEwKSxcbiAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIHRoaXMuc3RhdGUud2l0aGRyYXdfcHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIG5ldyBCdWZmZXIodGhpcy5zdGF0ZS5tZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Ecm9wRG93bkxpc3QoKSB7XG4gICAgICAgIGlmIChXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaXNfdmFsaWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiBmYWxzZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcbiAgICAgICAgcmV0dXJuIFwiY29uZmlybWF0aW9uXCI7XG4gICAgfVxuXG4gICAgb25BY2NvdW50QmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpKS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHRvdGFsID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpLFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgZmVlIGlmIGl0IGlzIHVzaW5nIHRoZSBzYW1lIGFzc2V0XG4gICAgICAgICAgICBpZiAodG90YWwuYXNzZXRfaWQgPT09IGZlZUFtb3VudC5hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIHRvdGFsLm1pbnVzKGZlZUFtb3VudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRvdGFsLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE5lc3RlZFJlZihyZWYpIHtcbiAgICAgICAgdGhpcy5uZXN0ZWRSZWYgPSByZWY7XG4gICAgfVxuXG4gICAgb25GZWVDaGFuZ2VkKHthc3NldH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZmVlU3RhdHVzfSA9IHN0YXRlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZlZVBvb2xCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzUG9vbEJhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcbiAgICAgICAgaWYgKCEoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFjY291bnRfYmFsYW5jZXMpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGtleSk7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgYXNzZXRzIHRoYXQgZG8gbm90IGhhdmUgdmFsaWQgY29yZSBleGNoYW5nZSByYXRlc1xuICAgICAgICAgICAgICAgIGxldCBwcmljZUlzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG5ldyBBc3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBwLmlzVmFsaWQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0LmdldChcImlkXCIpICE9PSBcIjEuMy4wXCIgJiYgIXByaWNlSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IGZlZV9hc3NldF90eXBlcy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGFzRmVlUG9vbEJhbGFuY2UoYSkgJiYgaGFzQmFsYW5jZShhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkLCB3aXRoZHJhd19wdWJsaWNLZXksIG1lbW99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHN0b3JlZEFkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcblxuICAgICAgICBsZXQgd2l0aGRyYXdNb2RhbElkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBudWxsO1xuICAgICAgICBsZXQgY29uZmlybWF0aW9uID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICFzdG9yZWRBZGRyZXNzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJydWRleC1kaXNhYmxlZC1vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicnVkZXgtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdG9yZWRBZGRyZXNzLm1hcChmdW5jdGlvbihuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VsZWN0Q2hhbmdlZC5iaW5kKHRoaXMsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3MgJiZcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgJiYgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLmxlbmd0aClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19pc192YWxpZCkge1xuICAgICAgICAgICAgICAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS52YWxpZF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luX3R5cGU9e3RoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0Q29uZmlybWF0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uYWNjZXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNvbmZpcm1hdGlvbi5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5jb25maXJtYXRpb24udGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19pc192YWxpZClcbiAgICAgICAgICAgIC8vICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSA8SWNvbiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMuY2hlY2ttYXJrX2NpcmNsZS5vcGVyYXRpb25fc3VjY2VlZFwiIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIiAvPjtcbiAgICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAgIC8vICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSA8SWNvbiBuYW1lPVwiY3Jvc3MtY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5jcm9zc19jaXJjbGUub3BlcmF0aW9uX2ZhaWxlZFwiIGNsYXNzTmFtZT1cImFsZXJ0XCIgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtbyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzX21lbW9zKSB7XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIubWVtb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW99XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFc3RpbWF0ZSBmZWUgVkFSSUFCTEVTXG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuXG4gICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICBpZiAoY3VycmVudF9hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXTtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0LWN1cnNvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjY291bnRCYWxhbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBiYWxhbmNlID0gXCJObyBmdW5kc1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgZnVsbC13aWR0aC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMHB4XCJ9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFdpdGhkcmF3IGFtb3VudCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIm1vZGFsLndpdGhkcmF3LmFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1t0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0Ftb3VudENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbXB0eV93aXRoZHJhd192YWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMudmFsaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWluQW1vdW50RXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50X2Vycm9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3RoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEZlZSBzZWxlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZlZUFtb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBnYXRlX2ZlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZDYWxsYmFjaz17dGhpcy5zZXROZXN0ZWRSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5mZWVBbW91bnQuZ2V0QW1vdW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5mZWVBbW91bnQuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZmVlX2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5oYXNCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRmVlQmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzUG9vbEJhbGFuY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9Qb29sQmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7LyogR2F0ZSBmZWUgKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdhdGVGZWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yIHJpZ2h0LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmZlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmdhdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1zZWxlY3QtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdBZGRyZXNzQ2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uRHJvcERvd25MaXN0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM5NjYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtcG9zaXRpb24tb3B0aW9uc1wiPntvcHRpb25zfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2ludmFsaWRfYWRkcmVzc19tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogZm9yIFB1YmxpY0tleSBpbnB1dCAoZXguUFJJWk0pICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5wdWJsaWNfa2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtc2VsZWN0LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpdGhkcmF3X3B1YmxpY0tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdQdWJsaWNLZXlDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNZW1vIGlucHV0ICovfVxuICAgICAgICAgICAgICAgICAgICB7d2l0aGRyYXdfbWVtb31cblxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcvQ2FuY2VsIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluQW1vdW50RXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQucGVybS5jYW5jZWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtYXRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SdURleFdpdGhkcmF3TW9kYWwgPSBCaW5kVG9DaGFpblN0YXRlKFJ1RGV4V2l0aGRyYXdNb2RhbCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUnVEZXhXaXRoZHJhd01vZGFsLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfc3ltYm9sOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImZlZV9hc3NldFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgbHMgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge3J1ZGV4QVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcbmNvbnN0IHJ1ZGV4U3RvcmFnZSA9IG5ldyBscyhcIlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29pbkxpc3QodXJsID0gcnVkZXhBUElzLkJBU0UgKyBydWRleEFQSXMuQ09JTlNfTElTVCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHttZXRob2Q6IFwicG9zdFwifSlcbiAgICAgICAgLnRoZW4ocmVwbHkgPT5cbiAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZldGNoaW5nIHJ1ZGV4IGxpc3Qgb2YgY29pbnNcIiwgZXJyLCB1cmwpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh7XG4gICAgaW5wdXRDb2luVHlwZSxcbiAgICBvdXRwdXRDb2luVHlwZSxcbiAgICBvdXRwdXRBZGRyZXNzLFxuICAgIHVybCA9IHJ1ZGV4QVBJcy5CQVNFLFxuICAgIHN0YXRlQ2FsbGJhY2tcbn0pIHtcbiAgICBsZXQgYm9keSA9IHtcbiAgICAgICAgaW5wdXRDb2luVHlwZSxcbiAgICAgICAgb3V0cHV0Q29pblR5cGUsXG4gICAgICAgIG91dHB1dEFkZHJlc3NcbiAgICB9O1xuXG4gICAgbGV0IGJvZHlfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICBmZXRjaCh1cmwgKyBydWRleEFQSXMuTkVXX0RFUE9TSVRfQUREUkVTUywge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSksXG4gICAgICAgIGJvZHk6IGJvZHlfc3RyaW5nXG4gICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICByZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgcmVwbHkuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGpzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwicmVwbHk6IFwiLCBqc29uIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGpzb24uaW5wdXRBZGRyZXNzIHx8IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW86IGpzb24uaW5wdXRNZW1vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBqc29uLmVycm9yIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaykgc3RhdGVDYWxsYmFjayhhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiZXJyb3I6IFwiLGVycm9yICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDYWxsYmFjayh7YWRkcmVzczogXCJ1bmtub3duXCIsIG1lbW86IG51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcImVycm9yOiBcIixlcnJvciAgKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVDYWxsYmFjayh7YWRkcmVzczogXCJ1bmtub3duXCIsIG1lbW86IG51bGx9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyb3I6XCIsIGVycik7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBZGRyZXNzKHtcbiAgICB1cmwgPSBydWRleEFQSXMuQkFTRSxcbiAgICB3YWxsZXRUeXBlLFxuICAgIG5ld0FkZHJlc3Ncbn0pIHtcbiAgICBpZiAoIW5ld0FkZHJlc3MpIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4gcmVzKCkpO1xuICAgIHJldHVybiBmZXRjaCh1cmwgKyBcIi93YWxsZXRzL1wiICsgd2FsbGV0VHlwZSArIFwiL2NoZWNrLWFkZHJlc3NcIiwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSksXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHthZGRyZXNzOiBuZXdBZGRyZXNzfSlcbiAgICB9KVxuICAgICAgICAudGhlbihyZXBseSA9PiByZXBseS5qc29uKCkudGhlbihqc29uID0+IGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRhdGUgZXJyb3I6XCIsIGVycik7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNXaXRoZHJhd2FsQWRkcmVzcyh3YWxsZXQpIHtcbiAgICByZXR1cm4gcnVkZXhTdG9yYWdlLmhhcyhgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWApO1xufVxuXG5mdW5jdGlvbiBzZXRXaXRoZHJhd2FsQWRkcmVzc2VzKHt3YWxsZXQsIGFkZHJlc3Nlc30pIHtcbiAgICBydWRleFN0b3JhZ2Uuc2V0KGBoaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCwgYWRkcmVzc2VzKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh3YWxsZXQpIHtcbiAgICByZXR1cm4gcnVkZXhTdG9yYWdlLmdldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIFtdKTtcbn1cblxuZnVuY3Rpb24gc2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzKHt3YWxsZXQsIGFkZHJlc3N9KSB7XG4gICAgcnVkZXhTdG9yYWdlLnNldChgaGlzdG9yeV9hZGRyZXNzX2xhc3RfJHt3YWxsZXR9YCwgYWRkcmVzcyk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RXaXRoZHJhd2FsQWRkcmVzcyh3YWxsZXQpIHtcbiAgICByZXR1cm4gcnVkZXhTdG9yYWdlLmdldChgaGlzdG9yeV9hZGRyZXNzX2xhc3RfJHt3YWxsZXR9YCwgXCJcIik7XG59XG5cbmV4cG9ydCBjb25zdCBXaXRoZHJhd0FkZHJlc3NlcyA9IHtcbiAgICBoYXM6IGhhc1dpdGhkcmF3YWxBZGRyZXNzLFxuICAgIHNldDogc2V0V2l0aGRyYXdhbEFkZHJlc3NlcyxcbiAgICBnZXQ6IGdldFdpdGhkcmF3YWxBZGRyZXNzZXMsXG4gICAgc2V0TGFzdDogc2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzLFxuICAgIGdldExhc3Q6IGdldExhc3RXaXRoZHJhd2FsQWRkcmVzc1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAgR2l2ZW4gYSBiYWxhbmNlX29iamVjdCwgZGlzcGxheXMgaXQgaW4gYSBwcmV0dHkgd2F5XHJcbiAqXHJcbiAqICBFeHBlY3RzIG9uZSBwcm9wZXJ0eSwgJ2JhbGFuY2UnIHdoaWNoIHNob3VsZCBiZSBhIGJhbGFuY2Vfb2JqZWN0IGlkXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudEJhbGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGxldCBiYWxhbmNlX2lkID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0X2lkXSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxhbmNlX2lkKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgMCZuYnNwOzxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRCYWxhbmNlKTtcclxuIiwiaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcblxuY2xhc3MgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gaW5jcmVtZW50IHRoaXMgdG8gZm9yY2UgZ2VuZXJhdGluZyBuZXcgYWRkcmVzc2VzIGZvciBhbGwgbWFwcGluZ3NcbiAgICAgICAgdGhpcy5jdXJyZW50X3J1ZGV4X2FkZHJlc3NfY2FjaGVfdmVyc2lvbl9zdHJpbmcgPSBcIjFcIjtcbiAgICB9XG5cbiAgICBnZXRJbmRleEZvckRlcG9zaXRLZXlJbkV4Y2hhbmdlKFxuICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxuICAgICkge1xuICAgICAgICBsZXQgYXJncyA9IFtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9ydWRleF9hZGRyZXNzX2NhY2hlX3ZlcnNpb25fc3RyaW5nLFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cy5jb25jYXQoXCJbXCIsIGN1cnJlbnQsIFwiXVwiKTtcbiAgICAgICAgfSwgXCJcIik7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB7XCJhZGRyZXNzXCI6IGFkZHJlc3MsIFwibWVtb1wiOiBtZW1vfSwgd2l0aCBhIG51bGwgbWVtbyBpZiBub3QgYXBwbGljYWJsZVxuICAgIGdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgZXhjaGFuZ2VfbmFtZSxcbiAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGVcbiAgICApIHtcbiAgICAgICAgbGV0IHdhbGxldCA9IFdhbGxldERiLmdldFdhbGxldCgpO1xuICAgICAgICBpZiAoIXdhbGxldCkgcmV0dXJuIHVuZGVmaW5lZDsgLy93aGVuIFdhbGxldCBpc24ndCBleGlzdFxuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgICk7XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xuXG4gICAgICAgIGxldCBudW1iZXJfb2Zfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdLmxlbmd0aDtcbiAgICAgICAgaWYgKG51bWJlcl9vZl9rZXlzKVxuICAgICAgICAgICAgcmV0dXJuIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdW1xuICAgICAgICAgICAgICAgIG51bWJlcl9vZl9rZXlzIC0gMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXG4gICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBtZW1vXG4gICAgKSB7XG4gICAgICAgIGlmIChhZGRyZXNzID09PSBcInVua25vd25cIikgcmV0dXJuO1xuXG4gICAgICAgIGxldCB3YWxsZXQgPSBXYWxsZXREYi5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgICk7XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XS5wdXNoKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICBtZW1vOiBtZW1vXG4gICAgICAgIH0pO1xuICAgICAgICBXYWxsZXREYi5fdXBkYXRlV2FsbGV0KCk7XG4gICAgfVxufSAvLyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGVcblxuZXhwb3J0IGRlZmF1bHQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpLFxuICAgIENvcHlUb0NsaXBib2FyZCA9IF9yZXF1aXJlLkNvcHlUb0NsaXBib2FyZDtcblxuQ29weVRvQ2xpcGJvYXJkLkNvcHlUb0NsaXBib2FyZCA9IENvcHlUb0NsaXBib2FyZDtcbm1vZHVsZS5leHBvcnRzID0gQ29weVRvQ2xpcGJvYXJkOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY29weVRvQ2xpcGJvYXJkID0gcmVxdWlyZSgnY29weS10by1jbGlwYm9hcmQnKTtcblxudmFyIF9jb3B5VG9DbGlwYm9hcmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29weVRvQ2xpcGJvYXJkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb3B5VG9DbGlwYm9hcmQgPSBleHBvcnRzLkNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29weVRvQ2xpcGJvYXJkLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29weVRvQ2xpcGJvYXJkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3B5VG9DbGlwYm9hcmQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENvcHlUb0NsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvcHlUb0NsaXBib2FyZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcy50ZXh0LFxuICAgICAgICAgIG9uQ29weSA9IF90aGlzJHByb3BzLm9uQ29weSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wcy5vcHRpb25zO1xuXG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIF9jb3B5VG9DbGlwYm9hcmQyLmRlZmF1bHQpKHRleHQsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob25Db3B5KSB7XG4gICAgICAgIG9uQ29weSh0ZXh0LCByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBCeXBhc3Mgb25DbGljayBpZiBpdCB3YXMgcHJlc2VudFxuICAgICAgaWYgKGVsZW0gJiYgZWxlbS5wcm9wcyAmJiB0eXBlb2YgZWxlbS5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsZW0ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29weVRvQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIF90ZXh0ID0gX3Byb3BzLnRleHQsXG4gICAgICAgICAgX29uQ29weSA9IF9wcm9wcy5vbkNvcHksXG4gICAgICAgICAgX29wdGlvbnMgPSBfcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsndGV4dCcsICdvbkNvcHknLCAnb3B0aW9ucycsICdjaGlsZHJlbiddKTtcblxuICAgICAgdmFyIGVsZW0gPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGVsZW0sIF9leHRlbmRzKHt9LCBwcm9wcywgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2sgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb3B5VG9DbGlwYm9hcmQ7XG59KF9yZWFjdDIuZGVmYXVsdC5QdXJlQ29tcG9uZW50KTtcblxuQ29weVRvQ2xpcGJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Db3B5OiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IHVuZGVmaW5lZFxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZXNlbGVjdEN1cnJlbnQgPSByZXF1aXJlKCd0b2dnbGUtc2VsZWN0aW9uJyk7XG5cbnZhciBkZWZhdWx0TWVzc2FnZSA9ICdDb3B5IHRvIGNsaXBib2FyZDogI3trZXl9LCBFbnRlcic7XG5cbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlKSB7XG4gIHZhciBjb3B5S2V5ID0gKC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAn4oyYJyA6ICdDdHJsJykgKyAnK0MnO1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8je1xccyprZXlcXHMqfS9nLCBjb3B5S2V5KTtcbn1cblxuZnVuY3Rpb24gY29weSh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBkZWJ1ZywgbWVzc2FnZSwgcmVzZWxlY3RQcmV2aW91cywgcmFuZ2UsIHNlbGVjdGlvbiwgbWFyaywgc3VjY2VzcyA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMpIHsgb3B0aW9ucyA9IHt9OyB9XG4gIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdHJ5IHtcbiAgICByZXNlbGVjdFByZXZpb3VzID0gZGVzZWxlY3RDdXJyZW50KCk7XG5cbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1hcmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIC8vIHJlc2V0IHVzZXIgc3R5bGVzIGZvciBzcGFuIGVsZW1lbnRcbiAgICBtYXJrLnN0eWxlLmFsbCA9ICd1bnNldCc7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBtYXJrLnN0eWxlLnRvcCA9IDA7XG4gICAgbWFyay5zdHlsZS5jbGlwID0gJ3JlY3QoMCwgMCwgMCwgMCknO1xuICAgIC8vIHVzZWQgdG8gcHJlc2VydmUgc3BhY2VzIGFuZCBsaW5lIGJyZWFrc1xuICAgIG1hcmsuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICBtYXJrLnN0eWxlLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS5tc1VzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gJ3RleHQnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGUobWFyayk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29weSBjb21tYW5kIHdhcyB1bnN1Y2Nlc3NmdWwnKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjb3B5IHVzaW5nIGV4ZWNDb21tYW5kOiAnLCBlcnIpO1xuICAgIGRlYnVnICYmIGNvbnNvbGUud2FybigndHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmJyk7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQnLCB0ZXh0KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNvcHkgdXNpbmcgY2xpcGJvYXJkRGF0YTogJywgZXJyKTtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ2ZhbGxpbmcgYmFjayB0byBwcm9tcHQnKTtcbiAgICAgIG1lc3NhZ2UgPSBmb3JtYXQoJ21lc3NhZ2UnIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVSYW5nZShyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFyayk7XG4gICAgfVxuICAgIHJlc2VsZWN0UHJldmlvdXMoKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuaW1wb3J0IFJhaWRvRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4vUmFpZG9EZXBvc2l0UmVxdWVzdFwiO1xuXG5jbGFzcyBSYWlkb0ZpbmFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHthY3Rpb246IFwiZGVwb3NpdFwifSksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblJhaWRvXCIsIFwiZGVwb3NpdFwiKSxcblxuICAgICAgICAgICAgYWN0aXZlUGF5bWVudE1ldGhvZDogXCJDQVJERVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbiA9IHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zZXRBY3RpdmVSYWlkb0NvaW4obWV0aCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVQYXltZW50TWV0aG9kOiBtZXRofSk7XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fUmFpZG9cIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJCVENcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucHJvdmlkZXIgIT09IHRoaXMucHJvcHMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4obmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGNvaW5OYW1lID0gdGhpcy5fZmluZENvaW5CeVN5bWJvbCh0aGlzLnByb3BzLCBjb2luTmFtZSkuYmFja2luZ0NvaW47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ1tcImFjdGl2ZUNvaW5fUmFpZG9cIl0gPSBjb2luTmFtZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5TmFtZShwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzLmNvaW5zWzBdO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5U3ltYm9sKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2luID0gcHJvcHMuY29pbnNbaV07XG4gICAgICAgICAgICBpZiAoY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSB0aGlzLl9nZXRBY3RpdmVDb2luKHRoaXMucHJvcHMsIHthY3Rpb246IHR5cGV9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGFjdGl2ZUNvaW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtbXCJydWRleEFjdGlvblJhaWRvXCJdOiB0eXBlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NvaW5zLCBhY2NvdW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlQ29pbiwgYWN0aW9ufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFjb2lucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmaWx0ZXJlZENvaW5zID0gY29pbnMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgaWYgKCFhIHx8ICFhLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBhLmRlcG9zaXRBbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgIDogYS53aXRoZHJhd2FsQWxsb3dlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW5PcHRpb25zID0gZmlsdGVyZWRDb2luc1xuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY29pbi5zeW1ib2w7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IG9wdGlvbi5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVmaXggPSBuYW1lID09PSBcIlBQWVwiID8gXCJcIiA6IFwiUlVERVguXCI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcmVmaXggKyBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbiA9IGZpbHRlcmVkQ29pbnMuZmlsdGVyKGNvaW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gYWN0aXZlQ29pblxuICAgICAgICAgICAgICAgIDogY29pbi5zeW1ib2wgPT09IGFjdGl2ZUNvaW47XG4gICAgICAgIH0pWzBdO1xuXG4gICAgICAgIGlmICghY29pbikgY29pbiA9IGZpbHRlcmVkQ29pbnNbMF07XG5cbiAgICAgICAgbGV0IGlzRGVwb3NpdCA9IHRoaXMuc3RhdGUuYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBsZXQgc3VwcG9ydFVybCA9IFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbkhlaWdodDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmNob29zZV9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUNvaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvaW5PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L1NlbGVjdD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfdGV4dFwiIC8+OiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by50aXRsZV90YWJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwid2l0aGRyYXdcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyFjb2luID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvRGVwb3NpdFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2luLnN5bWJvbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRld2F5PXtjb2luLmdhdGV3YXlXYWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50PXtjb2luLmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldD17Y29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU9e2NvaW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU9e2NvaW4uYmFja2luZ0NvaW4udG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hY2NvdW50PXtjb2luLmdhdGV3YXlXYWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2NvaW5fdHlwZT17Y29pbi5zeW1ib2wudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1R5cGU9e2NvaW4ubWVtb1R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl9hbW91bnQ9e2NvaW4ubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zPXtjb2luLmNvbmZpcm1hdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5zdGF0ZS5hY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBheW1lbnRNZXRob2Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVQYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUmFpZG9Db2luPXttID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRBY3RpdmVSYWlkb0NvaW4obSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnN1cHBvcnRfYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4gJiYgY29pbi5zeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXQsIHRvLCBmcm9tQWNjb3VudH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e0ltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmlsdGVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNhY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJhaWRvRmluYW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29pbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCVENcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpdGNvaW4gLSBCVENcIixcbiAgICAgICAgICAgIGJhY2tpbmdDb2luOiBcIkJUQ1wiLFxuICAgICAgICAgICAgc3ltYm9sOiBcIlJVREVYLkJUQ1wiLFxuICAgICAgICAgICAgZGVwb3NpdEFsbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICAvL1wid2l0aGRyYXdhbEFsbG93ZWRcIjogdHJ1ZSxcblxuICAgICAgICAgICAgaXNzdWVyOiBcInJ1ZGV4LWJpdGNvaW5cIixcbiAgICAgICAgICAgIGlzc3VlcklkOiBcIjEuMi44NTI1ODlcIixcbiAgICAgICAgICAgIC8vXCJtaW5BbW91bnRcIjogMTgwMDAwLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJFVEhcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV0aGVyZXVtIC0gRVRIXCIsXG4gICAgICAgICAgICBiYWNraW5nQ29pbjogXCJFVEhcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5FVEhcIixcbiAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIGlzc3VlcjogXCJydWRleC1ldGhlcmV1bVwiLFxuICAgICAgICAgICAgaXNzdWVySWQ6IFwiMS4yLjg1MjgyM1wiLFxuICAgICAgICAgICAgLy9cIm1pbkFtb3VudFwiOiA1MDAwMDAsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJVU0RUXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXRoZXIgLSBVU0RUIChvbiBFdGhlcmV1bSlcIixcbiAgICAgICAgICAgIGJhY2tpbmdDb2luOiBcIlVTRFRcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgICAgICBkZXBvc2l0QWxsb3dlZDogdHJ1ZSxcbiAgICAgICAgICAgIC8vXCJ3aXRoZHJhd2FsQWxsb3dlZFwiOiB0cnVlLFxuXG4gICAgICAgICAgICBpc3N1ZXI6IFwicnVkZXgtdXNkdFwiLFxuICAgICAgICAgICAgaXNzdWVySWQ6IFwiMS4yLjkyNzQ1OFwiLFxuICAgICAgICAgICAgLy9cIm1pbkFtb3VudFwiOiA1MDAwMDAsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUmFpZG9GaW5hbmNlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtyZXF1ZXN0RGVwb3NpdEFkZHJlc3N9IGZyb20gXCJsaWIvY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IEFjY291bnRCYWxhbmNlIGZyb20gXCIuLi8uLi8uLi9BY2NvdW50L0FjY291bnRCYWxhbmNlXCI7XG5pbXBvcnQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIGZyb20gXCJjb21tb24vUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQge2F2YWlsYWJsZUdhdGV3YXlzfSBmcm9tIFwibGliL2NvbW1vbi9nYXRld2F5c1wiO1xuXG4vL1JBSURPXG5pbXBvcnQgUmFpZG9QYXltZW50TWV0aG9kIGZyb20gXCIuL1JhaWRvUGF5bWVudE1ldGhvZFwiO1xuaW1wb3J0IFwiLi9SYWlkby5jc3NcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuY2xhc3MgUmFpZG9EZXBvc2l0UmVxdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2F0ZXdheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWNlaXZlX2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGlzc3Vlcl9hY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgZGVwb3NpdF9hc3NldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX2luX2Zhdm9yX29mOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWluX2Ftb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgY29uZmlybWF0aW9uczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50X25hbWU6IG51bGwsXG5cbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgbWVtbzogbnVsbFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0QWxsb3dlZDogZmFsc2UsXG4gICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpcmVjdDogXCJtaW5cIiAvL01JTiBvciBNQVhcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEFtb3VudDogMCxcbiAgICAgICAgICAgIGdpdmVBbW91bnQ6IDAsXG5cbiAgICAgICAgICAgIHJhaWRvOiB7XG4gICAgICAgICAgICAgICAgYWZmaWxpYXRlX2lkOiAxMDA1OCxcblxuICAgICAgICAgICAgICAgIGdpdmVfcmF3OiB0aGlzLnByb3BzLmFjdGl2ZVBheW1lbnRNZXRob2QsIC8vZmlhdHNcbiAgICAgICAgICAgICAgICBnaXZlOiB0aGlzLnByb3BzLmFjdGl2ZVBheW1lbnRNZXRob2QsXG4gICAgICAgICAgICAgICAgZ2l2ZV9kZWNpbWFsOiA1LFxuXG4gICAgICAgICAgICAgICAgLy9nZXQ6IFwiQlRDXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICBnZXRfZGVjaW1hbDogNSxcblxuICAgICAgICAgICAgICAgIHByaWNlOiAxLFxuXG4gICAgICAgICAgICAgICAgaW46IG51bGwsXG4gICAgICAgICAgICAgICAgb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIGluX21pbl9mZWU6IDAsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfZmVlOiAwLFxuXG4gICAgICAgICAgICAgICAgaW5fZmVlOiAwLFxuICAgICAgICAgICAgICAgIGNvbW1pc3Npb246IDAsXG5cbiAgICAgICAgICAgICAgICBtaW5fZGVwb3NpdDogMCxcbiAgICAgICAgICAgICAgICBtYXhfZGVwb3NpdDogMTAwMDAwMCxcblxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJidXlcIiwgLy9CVVkgb3IgU0VMTFxuXG4gICAgICAgICAgICAgICAgY3VycmVuY2llczogW10sXG4gICAgICAgICAgICAgICAgcHJpY2VzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MgPSB0aGlzLmFkZERlcG9zaXRBZGRyZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX21ha2VVcmlSYWlkbyA9IHRoaXMuX21ha2VVcmlSYWlkby5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3NldENvaW5zUmFpZG8gPSB0aGlzLl9zZXRDb2luc1JhaWRvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3NldFByaWNlc1JhaWRvID0gdGhpcy5fc2V0UHJpY2VzUmFpZG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faW5pdFByaWNlcyA9IHRoaXMuX2luaXRQcmljZXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZCA9IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdEN1cnJlbmNpZXModGhpcy5fc2V0Q29pbnNSYWlkbyk7XG4gICAgfVxuXG4gICAgaW5pdEN1cnJlbmNpZXMoc3RhdGVDYWxsYmFjaykge1xuICAgICAgICBsZXQgY29pbnMgPVxuICAgICAgICAgICAgXCJodHRwczovL21lcmNoYW50LWRhdGFjZW50ZXIucmFpZG9maW5hbmNlLmV1OjgwOTUvY3VycmVuY2llcy9cIjtcbiAgICAgICAgZmV0Y2goY29pbnMsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwifSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcGx5ID0+IHtcbiAgICAgICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldENvaW5zUmFpZG8oY3VycmVuY2llcykge1xuICAgICAgICBjdXJyZW5jaWVzID0gY3VycmVuY2llcy5yb3dzO1xuXG4gICAgICAgIGxldCBjdXJyX2NvaW5fb3JpZ2luYWwgPSB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZTtcbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW5jaWVzW2ldLmNvZGUgPT09IGN1cnJfY29pbl9vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2l0aGRyYXdfZmVlOiBcIiArIGN1cnJlbmNpZXNbaV0ud2l0aGRyYXdfZmVlICogMSk7XG5cbiAgICAgICAgICAgICAgICByYWlkby5naXZlID0gdGhpcy5zdGF0ZS5yYWlkby5naXZlO1xuICAgICAgICAgICAgICAgIHJhaWRvLmdldCA9IGN1cnJlbmNpZXNbaV0uY29kZTtcblxuICAgICAgICAgICAgICAgIHJhaWRvLmN1cnJlbmNpZXMgPSBjdXJyZW5jaWVzO1xuXG4gICAgICAgICAgICAgICAgLy9yYWlkby5pbl9lbmFibGUgPSBjdXJyZW5jaWVzW2ldLmluX2VuYWJsZTsvL1RPRE9cbiAgICAgICAgICAgICAgICByYWlkby5vdXQgPSBjdXJyZW5jaWVzW2ldLmlkO1xuICAgICAgICAgICAgICAgIHJhaWRvLm1pbl9kZXBvc2l0ID0gY3VycmVuY2llc1tpXS5taW5fZGVwb3NpdDtcbiAgICAgICAgICAgICAgICByYWlkby5tYXhfZGVwb3NpdCA9IGN1cnJlbmNpZXNbaV0ubWF4X2RlcG9zaXQ7XG4gICAgICAgICAgICAgICAgcmFpZG8ud2l0aGRyYXdfZmVlID0gY3VycmVuY2llc1tpXS53aXRoZHJhd19mZWUgKiAxO1xuXG4gICAgICAgICAgICAgICAgcmFpZG8uZ2l2ZV9kZWNpbWFsID0gY3VycmVuY2llc1tpXS5kZWNpbWFsO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmFpZG99KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbml0UHJpY2VzKHRoaXMuX3NldFByaWNlc1JhaWRvKTtcbiAgICB9XG5cbiAgICBfaW5pdFByaWNlcyhzdGF0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwcmljZXMgPSBcImh0dHBzOi8vbWVyY2hhbnQtZGF0YWNlbnRlci5yYWlkb2ZpbmFuY2UuZXU6ODA5NS9wcmljZXMvXCI7XG5cbiAgICAgICAgZmV0Y2gocHJpY2VzLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIn0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKSBzdGF0ZUNhbGxiYWNrKGpzb24uZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRQcmljZXNSYWlkbyhwcmljZXMpIHtcbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcbiAgICAgICAgbGV0IGN1cnJlbmNpZXMgPSByYWlkby5jdXJyZW5jaWVzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVuY2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbmNpZXNbaV0uY29kZSA9PT0gcmFpZG8uZ2l2ZV9yYXcpIHtcbiAgICAgICAgICAgICAgICAvL2lmIChjdXJyZW5jaWVzW2ldLmN1ciA9PT0gcmFpZG8uZ2l2ZV9yYXcpIHtcbiAgICAgICAgICAgICAgICByYWlkby5jb21taXNzaW9uID0gcGFyc2VGbG9hdChjdXJyZW5jaWVzW2ldLmNvbW1pc3Npb24pO1xuICAgICAgICAgICAgICAgIHJhaWRvLmluX2ZlZSA9IHBhcnNlRmxvYXQoY3VycmVuY2llc1tpXS5pbl9mZWUpO1xuICAgICAgICAgICAgICAgIHJhaWRvLmluX21pbl9mZWUgPSBwYXJzZUZsb2F0KGN1cnJlbmNpZXNbaV0uaW5fbWluX2ZlZSk7XG4gICAgICAgICAgICAgICAgcmFpZG8uZ2V0X2RlY2ltYWwgPSBjdXJyZW5jaWVzW2ldLmRlY2ltYWw7XG4gICAgICAgICAgICAgICAgcmFpZG8uZ2l2ZSA9IGN1cnJlbmNpZXNbaV0uY3VyO1xuICAgICAgICAgICAgICAgIHJhaWRvLmluID0gY3VycmVuY2llc1tpXS5pZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFpciA9IHJhaWRvLmdldCArIFwiXCIgKyByYWlkby5naXZlO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gcmFpZG8uZGlyZWN0aW9uO1xuXG4gICAgICAgIGxldCBwcmljZSA9IHByaWNlc1twYWlyXVtkaXJlY3Rpb25dO1xuICAgICAgICBjb25zb2xlLmxvZyhcInByaWNlOiBcIiArIHByaWNlKTtcblxuICAgICAgICBpZiAocHJpY2UpIHtcbiAgICAgICAgICAgIHJhaWRvLnByaWNlID0gcHJpY2UgKiAxO1xuICAgICAgICAgICAgcmFpZG8ucHJpY2VzID0gcHJpY2VzO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmFpZG86IHJhaWRvfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZShcImF1dG9cIik7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKHR5cGUsIGV2ZW50KSB7XG4gICAgICAgIGxldCBuYW1lLCB2YWx1ZTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gXCJhdXRvXCIpIHtcbiAgICAgICAgICAgIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9EZWZhdWx0IHByb3BlcnRpZXMgZm9yIHRvZ2dsZSBzdGF0aWMgZ2V0QW1vdW50XG4gICAgICAgICAgICBuYW1lID0gXCJnZXRBbW91bnRcIjtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS5nZXRBbW91bnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dldEFtb3VudDogXCJcIn0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2l2ZUFtb3VudDogXCJcIn0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDE7XG5cbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcblxuICAgICAgICBsZXQgcmVzX2dldEFtb3VudDtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJnaXZlQW1vdW50XCIpIHtcbiAgICAgICAgICAgIHJlc19nZXRBbW91bnQgPVxuICAgICAgICAgICAgICAgIHZhbHVlIC9cbiAgICAgICAgICAgICAgICAocmFpZG8ucHJpY2UgL1xuICAgICAgICAgICAgICAgICAgICAoKDEwMCAtIChyYWlkby5jb21taXNzaW9uICsgcmFpZG8uaW5fZmVlKSkgLyAxMDApKTtcbiAgICAgICAgICAgIGxldCByZXNfZ2l2ZUFtb3VudCA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBnZXRBbW91bnQ6XG4gICAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNfZ2V0QW1vdW50IC0gcmFpZG8ud2l0aGRyYXdfZmVlKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIHJhaWRvLmdpdmVfZGVjaW1hbClcbiAgICAgICAgICAgICAgICAgICAgKSAvIE1hdGgucG93KDEwLCByYWlkby5naXZlX2RlY2ltYWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdpdmVBbW91bnQ6XG4gICAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc19naXZlQW1vdW50ICogTWF0aC5wb3coMTAsIHJhaWRvLmdldF9kZWNpbWFsKVxuICAgICAgICAgICAgICAgICAgICApIC8gTWF0aC5wb3coMTAsIHJhaWRvLmdldF9kZWNpbWFsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJnZXRBbW91bnRcIikge1xuICAgICAgICAgICAgcmVzX2dldEFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgbGV0IHJlc19naXZlQW1vdW50ID1cbiAgICAgICAgICAgICAgICAocmFpZG8ucHJpY2UgKiAodmFsdWUgKyByYWlkby53aXRoZHJhd19mZWUpKSAvXG4gICAgICAgICAgICAgICAgICAgICgoMTAwIC0gKHJhaWRvLmNvbW1pc3Npb24gKyByYWlkby5pbl9mZWUpKSAvIDEwMCkgK1xuICAgICAgICAgICAgICAgIHJhaWRvLmluX21pbl9mZWU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdldEFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzX2dldEFtb3VudCAqIE1hdGgucG93KDEwLCByYWlkby5naXZlX2RlY2ltYWwpXG4gICAgICAgICAgICAgICAgICAgICkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBnaXZlQW1vdW50OlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNfZ2l2ZUFtb3VudCAqIE1hdGgucG93KDEwLCByYWlkby5nZXRfZGVjaW1hbClcbiAgICAgICAgICAgICAgICAgICAgKSAvIE1hdGgucG93KDEwLCByYWlkby5nZXRfZGVjaW1hbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzX2dldEFtb3VudCA+PSByYWlkby5taW5fZGVwb3NpdCAmJlxuICAgICAgICAgICAgKHJhaWRvLm1heF9kZXBvc2l0ID09IDAgfHwgcmVzX2dldEFtb3VudCA8PSByYWlkby5tYXhfZGVwb3NpdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6IFwibWluXCIgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXRBbGxvd2VkOiB0cnVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVzX2dldEFtb3VudCA+PSByYWlkby5taW5fZGVwb3NpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6IFwibWF4XCIgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1pbl9tYXhfdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdDogXCJtaW5cIiAvL01JTiBvciBNQVhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXRBbGxvd2VkOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0U3RhdGUucmFpZG8gIT09IHRoaXMuc3RhdGUucmFpZG8gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSAhPT0gdGhpcy5wcm9wcy5nZXRBbW91bnQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5nZXRBbW91bnQgIT09IHRoaXMuc3RhdGUuZ2V0QW1vdW50IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuZ2l2ZUFtb3VudCAhPT0gdGhpcy5zdGF0ZS5naXZlQW1vdW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucmVjZWl2ZV9hc3NldCAhPT0gdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lICE9PSB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjdGlvbiAhPT0gdGhpcy5wcm9wcy5hY3Rpb24gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQYXltZW50TWV0aG9kKGUpIHtcbiAgICAgICAgbGV0IHBheU1ldGhvZCA9IGUudGFyZ2V0W1wibmFtZVwiXTtcbiAgICAgICAgbGV0IHN0ciA9IFwicGF5bWVudG1ldGhvZFwiO1xuICAgICAgICBwYXlNZXRob2QgPSBwYXlNZXRob2RcbiAgICAgICAgICAgIC5zdWJzdHIoc3RyLmxlbmd0aCArIDEsIHBheU1ldGhvZC5sZW5ndGggLSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcbiAgICAgICAgcmFpZG8uZ2l2ZV9yYXcgPSBwYXlNZXRob2Q7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmFpZG86IHJhaWRvfSk7XG5cbiAgICAgICAgdGhpcy5fc2V0UHJpY2VzUmFpZG8odGhpcy5zdGF0ZS5yYWlkby5wcmljZXMpO1xuXG4gICAgICAgIGxldCBmaW5kaW5nX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxhYmVsLmJ0bi1yYWRpb1wiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kaW5nX2VsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmaW5kaW5nX2VsW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLnByb3BzLnNldEFjdGl2ZVJhaWRvQ29pbihwYXlNZXRob2QpO1xuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiB0aGlzLmFkZERlcG9zaXRBZGRyZXNzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9uYW1lfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzc30pO1xuICAgIH1cblxuICAgIF9tYWtlVXJpUmFpZG8oKSB7XG4gICAgICAgIGxldCBzdHJVcmkgPSBcIlwiO1xuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG5cbiAgICAgICAgbGV0IG9ialBhcmFtcyA9IHtcbiAgICAgICAgICAgIGFmZmlsaWF0ZV9pZDogcmFpZG8uYWZmaWxpYXRlX2lkLFxuICAgICAgICAgICAgb2ZmZXJfaWQ6IDMsXG4gICAgICAgICAgICB2b2x1bWU6IHRoaXMuc3RhdGUuZ2l2ZUFtb3VudCxcbiAgICAgICAgICAgIGluOiByYWlkby5pbixcbiAgICAgICAgICAgIG91dDogcmFpZG8ub3V0LFxuICAgICAgICAgICAgXCJvdXQtcFwiOiByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcmFpZG8uZGlyZWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGl0ZW0gaW4gb2JqUGFyYW1zKSB7XG4gICAgICAgICAgICBzdHJVcmkgKz0gXCImXCIgKyBpdGVtICsgXCI9XCIgKyBvYmpQYXJhbXNbaXRlbV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clVyaTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdFJlcXVlc3QoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsfSk7XG4gICAgICAgIGxldCByYWlkb19saW5rID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9yYWlkb2ZpbmFuY2UuZXUvYnV5LXNlbGw/XCIgKyB0aGlzLl9tYWtlVXJpUmFpZG8oKTtcbiAgICAgICAgd2luZG93Lm9wZW4ocmFpZG9fbGluaywgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZW1wdHlSb3cgPSA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCIsIG1pbkhlaWdodDogMTUwfX0gLz47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcblxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlc19vYmplY3QgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZikge1xuICAgICAgICAgICAgbGV0IGhhc19ub256ZXJvX2JhbGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdF9pZCA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3RfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX29iamVjdF9pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlID0gYmFsYW5jZV9vYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgIT0gMCkgaGFzX25vbnplcm9fYmFsYW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNfbm9uemVyb19iYWxhbmNlKSByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjY291bnRfbmFtZSA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIikpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3NfZnJvbV9jYWNoZSA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlX2FkZHJlc3NfZnJvbV9jYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzID0gcmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zKSB7XG4gICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXBvc2l0Q29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucyAmJiB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImlycmV2ZXJzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5sYXN0X2lycmV2ZXJzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcblxuICAgICAgICBsZXQgY3VycmVudEdhdGV3YXkgPSBcIlJVREVYXCI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLnNpbXBsZUFzc2V0R2F0ZXdheSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKCFyZWNlaXZlX2FkZHJlc3MgfHwgIXJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzKSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnN1cHBvcnRzTWVtb3NcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWNlaXZlX2FkZHJlc3MubWVtbykge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyB1bmlxdWUgZGVwb3NpdCBhZGRyZXNzZXMgdG8gc2VsZWN0IHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5kZXBvc2l0X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYnV5X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREUkVTUzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2RlcG9zaXRfYWRkcmVzc19mcmFnbWVudH08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRDb25maXJtYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpPntkZXBvc2l0Q29uZmlybWF0aW9ufTwvaT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwiLCBmb250U2l6ZTogXCIxLjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0yNCByYWlkb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbnQtY29sLTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpZG9QYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZD17XCJjYXJkdVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkJhbmsgQ2FyZCAoVVNEKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpZG9QYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZD17XCJjYXJkZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkJhbmsgQ2FyZCAoRVVSKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpZG9QYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZD17XCJ3aXJlZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlNlcGEgKEVVUilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTEwIGdpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by55b3VfZ2l2ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2l2ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2l2ZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnaXZlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnlvdV9naXZlX3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke19fQkFTRV9VUkxfX31pbWFnZXNcXC9yYWlkby1wYXltZW50LSR7dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhdy50b0xvd2VyQ2FzZSgpfS5wbmcpYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbnQtY29sLTEwIGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTAlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ueW91X2dldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZXRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnlvdV9nZXRfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFxcL2Fzc2V0LXN5bWJvbHNcXC9ydWRleC4ke3RoaXMuc3RhdGUucmFpZG8uZ2V0LnRvTG93ZXJDYXNlKCl9LnBuZylgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLm1pbl9tYXhfdmFsaWRhdGUudmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyYWlkb19taW5fbWF4X3ZhbGlkYXRlIGFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmFpZG9fbWluX21heF92YWxpZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbl9tYXhfdmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlyZWN0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJhaWRvW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbl9tYXhfdmFsaWRhdGUuZGlyZWN0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gKiAxfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yYWlkby5nZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFpZG9fdGV4dF9ibG9ja1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ud2l0aGRyYXdfZmVlX2luY2x1ZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfZmVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmFpZG8ud2l0aGRyYXdfZmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUucmFpZG8uZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFpZG9fdGV4dF9ibG9ja1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYXBwcm94aW1hdGVfYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWlkb190ZXh0X2Jsb2NrXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5maW5hbF90ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0xMCBhbnQtY29sLW9mZnNldC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc3VibWl0QWxsb3dlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN1Ym1pdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXRSZXF1ZXN0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYnV5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fd2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKFJhaWRvRGVwb3NpdFJlcXVlc3QpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBSYWlkb1BheW1lbnRNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3RpdGxlLCBwYXltZW50X2lkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZS50b0xvd2VyQ2FzZSgpID09XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnRfaWQudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgICAgICBjbGFzc05uYW1lID0gXCJhY3RpdmVcIjtcbiAgICAgICAgZWxzZSBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcImJ0biBidG4tc20gYnRuLXJhZGlvXCIgKyBcIiBcIiArIGNsYXNzTm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGF5bWVudG1ldGhvZC1cIiArIHBheW1lbnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfX0JBU0VfVVJMX199aW1hZ2VzL3JhaWRvLXBheW1lbnQtYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWlkb1BheW1lbnRNZXRob2Q7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUZBO0FBa0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUE2QkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFmQTtBQVRBO0FBaEJBO0FBSkE7QUFxREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQVFBO0FBVEE7QUFVQTtBQUNBO0FBWEE7QUFaQTtBQTJCQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBOUJBO0FBc0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFTQTtBQVZBO0FBV0E7QUFDQTtBQVpBO0FBVkE7QUEwQkE7QUFDQTtBQTVCQTtBQTlGQTtBQUpBO0FBQ0E7QUFzSUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQW9EQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFQQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBZEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFOQTtBQVRBO0FBekJBO0FBREE7QUF1REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQTNIQTtBQUxBO0FBNklBOzs7O0FBbmVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBOGRBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQVBBO0FBQ0E7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFoQ0E7QUFrQ0E7QUF2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Z0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQUhBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBT0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVZBO0FBREE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQU5BO0FBTEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBTkE7QUFMQTtBQWZBO0FBREE7QUFQQTtBQTFCQTtBQW9FQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUpBO0FBekJBO0FBd0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFoQkE7QUE4QkE7QUE3Q0E7QUExQ0E7QUF0RUE7QUFvS0E7Ozs7QUFoVEE7QUFDQTtBQWtUQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF3QkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBSkE7QUFQQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBR0E7QUFQQTtBQVBBO0FBTEE7QUExRUE7QUFEQTtBQURBO0FBTEE7QUE0R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUFGQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBUEE7QUFEQTtBQWJBO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFQQTtBQURBO0FBVkE7QUEzQkE7QUFtREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVUE7QUFDQTtBQWJBO0FBZUE7QUFmQTtBQXBEQTtBQXNFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQWZBO0FBdkVBO0FBakNBO0FBN0dBO0FBZ1BBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQXZEQTtBQURBO0FBREE7QUFMQTtBQTJGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBREE7QUFaQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBVEE7QUFsSEE7QUF5SkE7QUFDQTs7OztBQWpxQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBa3FCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7Ozs7QUFmQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUE1Q0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXhCQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBYUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNEJBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQWlCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWtDQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXpCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUE3R0E7QUFBQTtBQUNBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBREE7QUFMQTtBQVhBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWxDQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFyQkE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBUEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeEJBO0FBNEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQVZBO0FBREE7QUFEQTtBQVBBO0FBMkJBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBUkE7QUFVQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWRBO0FBcUJBO0FBak1BO0FBSkE7QUF5TUE7Ozs7QUFuNUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBQ0E7QUFtNUJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTs7Ozs7Ozs7O0FDNzZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTs7OztBQTlCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFIQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWJBO0FBREE7QUEwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQVBBO0FBM0JBO0FBc0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBbEJBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUpBO0FBeEJBO0FBdUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFoQkE7QUE4QkE7QUE3Q0E7QUF6Q0E7QUF4RUE7QUFxS0E7Ozs7QUEvU0E7QUFDQTtBQWlUQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFsQ0E7QUFDQTtBQW9EQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFqQkE7QUFDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOURBO0FBK0RBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXVEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBR0E7QUFQQTtBQVBBO0FBTEE7QUExRUE7QUFEQTtBQURBO0FBTEE7QUE2R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBRkE7QUFEQTtBQVBBO0FBREE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQXBCQTtBQTRCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQVhBO0FBRkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFYQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFRQTtBQUdBO0FBQ0E7QUFuQkE7QUFwQkE7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBZkE7QUFEQTtBQXBCQTtBQTNGQTtBQURBO0FBMUJBO0FBOUdBO0FBaVJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQXZEQTtBQURBO0FBREE7QUFMQTtBQXlGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBWkE7QUExRkE7QUE2R0E7QUFDQTs7OztBQXowQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7QUF5MEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDLzFCQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFEQTtBQWtCQTs7OztBQW5DQTtBQUNBO0FBcUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=