(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[30],{

/***/ 3034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1906);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(590);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2156);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(591);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2023);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2024);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2184);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(745);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(746);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3035);
/* harmony import */ var _DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3045);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2151);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2161);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2369);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2413);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2500);
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

/***/ 3035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3036);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1906);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2824);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2978);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(547);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2007);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2935);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2919);
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

/***/ 3036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2023);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2024);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3037);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3038);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3040);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3041);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3039);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2150);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2474);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(591);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3042);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2154);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2384);
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
                /*            let account_name = this.props.account.get("name");
                receive_address = this.deposit_address_cache.getCachedInputAddress(
                    this.props.gateway,
                    account_name,
                    this.props.deposit_coin_type,
                    this.props.receive_coin_type
                );*/
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

/***/ 3037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(850);
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

/***/ 3038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2023);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2024);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(591);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2166);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2960);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(589);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3039);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1906);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(745);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(440);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(617);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(618);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(756);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(447).Buffer))

/***/ }),

/***/ 3039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoinList", function() { return fetchCoinList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDepositAddress", function() { return requestDepositAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAddress", function() { return validateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawAddresses", function() { return WithdrawAddresses; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(749);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);


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

/***/ 3040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2150);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2023);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2024);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2166);
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

/***/ 3041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(625);
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

/***/ 3042:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3043),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ 3043:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(410);

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(3044);

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

/***/ 3044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(1606);

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

/***/ 3045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1906);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(746);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2824);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2978);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(547);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2007);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2935);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2919);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _RaidoDepositRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3046);
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

/***/ 3046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2023);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2024);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3039);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3040);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3041);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2150);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2474);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2154);
/* harmony import */ var _RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3047);
/* harmony import */ var _Raido_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3048);
/* harmony import */ var _Raido_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Raido_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(607);
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
                    console.log("withdraw_fee: " + currencies[i].withdraw_fee);

                    raido.give = this.state.raido.give;
                    raido.get = currencies[i].code;

                    raido.currencies = currencies;

                    //raido.in_enable = currencies[i].in_enable;//TODO
                    raido.out = currencies[i].id;
                    raido.min_deposit = currencies[i].min_deposit;
                    raido.max_deposit = currencies[i].max_deposit;
                    raido.withdraw_fee = currencies[i].withdraw_fee;

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

            if (value === "") {
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
                    getAmount: Math.ceil((res_getAmount - raido.withdraw_fee * 1) * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal)
                });
                this.setState({
                    giveAmount: Math.ceil(res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal)
                });
            } else if (name === "getAmount") {
                res_getAmount = value;
                var _res_giveAmount = raido.price * (value + raido.withdraw_fee * 1) / ((100 - (raido.commission + raido.in_fee)) / 100) + raido.in_min_fee;

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
                /*            let account_name = this.props.account.get("name");
                receive_address = this.deposit_address_cache.getCachedInputAddress(
                    this.props.gateway,
                    account_name,
                    this.props.deposit_coin_type,
                    this.props.receive_coin_type
                );*/
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
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("gateway.rudex.buy_crypto.you_give"),
                                        style: {
                                            backgroundImage: "url(/images/raido-payment-" + this.state.raido.give_raw.toLowerCase() + ".png)"
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
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_14___default.a.translate("gateway.rudex.buy_crypto.you_get"),
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

/***/ 3047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: "/images/raido-payment-" + payment_id + ".png" })
                )
            );
        }
    }]);

    return RaidoPaymentMethod;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaidoPaymentMethod);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy4xMzAxOTcxMTcwZjRlZmIyZmIzZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L0Rpc2FibGVDb3B5VGV4dC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QmFsYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb3B5LXRvLWNsaXBib2FyZC9saWIvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3B5LXRvLWNsaXBib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvRmluYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb0RlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvUGF5bWVudE1ldGhvZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IHt1cGRhdGVHYXRld2F5QmFja2Vyc30gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG4vL2ltcG9ydCBPcGVubGVkZ2VyR2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L09wZW5sZWRnZXJHYXRld2F5XCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsXCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvT3BlbkxlZGdlckZpYXRUcmFuc2FjdGlvbkhpc3RvcnlcIjtcbi8vaW1wb3J0IEJsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ibG9ja3RyYWRlcy9CbG9ja1RyYWRlc0JyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG4vL2ltcG9ydCBDaXRhZGVsQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9jaXRhZGVsL0NpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5XCI7XG5pbXBvcnQgUmFpZG9GaW5hbmNlIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvcmFpZG8vUmFpZG9GaW5hbmNlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRGVwb3NpdE1vZGFsIGZyb20gXCIuLi9Nb2RhbC9EZXBvc2l0TW9kYWxcIjtcbmltcG9ydCBXaXRoZHJhd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9XaXRoZHJhd01vZGFsTmV3XCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuXG5jbGFzcyBBY2NvdW50RGVwb3NpdFdpdGhkcmF3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjb250YWluZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9sU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm9sU2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwiYml0c3BhcmtTZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJ4YnRzeFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgYnRTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYnRTZXJ2aWNlXCIsIFwiYnJpZGdlXCIpLFxuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJjaXRhZGVsU2VydmljZVwiLCBcImJyaWRnZVwiKSxcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwibWV0YVNlcnZpY2VcIiwgXCJicmlkZ2VcIiksXG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2VydmljZVwiLCAwKSxcblxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNlcnZpY2VzRG93biAhPT0gdGhpcy5wcm9wcy5zZXJ2aWNlc0Rvd24gfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUcmFkZXNCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNpdGFkZWxCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNpdGFkZWxCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLm9sU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5vbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5ydWRleFNlcnZpY2UgIT09IHRoaXMuc3RhdGUucnVkZXhTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYml0c3BhcmtTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmJpdHNwYXJrU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnhidHN4U2VydmljZSAhPT0gdGhpcy5zdGF0ZS54YnRzeFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5idFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYnRTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY2l0YWRlbFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuY2l0YWRlbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5tZXRhU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5tZXRhU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYWN0aXZlU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkICE9PVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG8gIT09XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG8gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFjY291bnRVdGlscy5nZXRGaW5hbEZlZUFzc2V0KHRoaXMucHJvcHMuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPTFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0bzogIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVJ1REVYU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlWGJ0c3hTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIHhidHN4U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVCaXRTcGFya1NlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUJUU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBidFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2l0YWRlbFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWV0YVNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBtZXRhU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNldFNlcnZpY2UoZSkge1xuICAgICAgICAvL2xldCBpbmRleCA9IHRoaXMuc3RhdGUuc2VydmljZXMuaW5kZXhPZihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2VydmljZXMocnVkZXhHYXRld2F5Q29pbnMpIHtcbiAgICAgICAgLy9sZXQgc2VydmljZXMgPSBbXCJPcGVubGVkZ2VyIChPUEVOLlgpXCIsIFwiQmxvY2tUcmFkZXMgKFRSQURFLlgpXCIsIFwiVHJhbnN3aXNlclwiLCBcIkJpdEthcGl0YWxcIl07XG4gICAgICAgIGxldCBzZXJMaXN0ID0gW107XG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQsXG4gICAgICAgICAgICBSdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG9cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGFncmVlbWVudF9ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0Ny1j0L7Qs9C70LDRiNC10L3QuNC1LdC+0LEt0L7QutCw0LfQsNC90LjQuC3Rg9GB0LvRg9CzLdGI0LvRjtC30LBcIjtcbiAgICAgICAgbGV0IGFncmVlbWVudF9lbiA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0NS1nYXRld2F5LXNlcnZpY2UtYWdyZWVtZW50XCI7XG5cbiAgICAgICAgc2VyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUnVERVggKFJVREVYLlgpXCIsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBcIlJVREVYXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJ1REVYU2VydmljZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWRleFNlcnZpY2UgPT09IFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8udGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0NqeHpkbWNLSUNBZ2VHMXNibk02WkdNOUltaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2SWdvZ0lDQjRiV3h1Y3pwall6MGlhSFIwY0RvdkwyTnlaV0YwYVhabFkyOXRiVzl1Y3k1dmNtY3Zibk1qSWdvZ0lDQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlDaUFnSUhodGJHNXpPbk4yWnowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUNpQWdJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SUtJQ0FnZG1WeWMybHZiajBpTVM0eElnb2dJQ0JwWkQwaWMzWm5NVEF6TURZaUNpQWdJSFpwWlhkQ2IzZzlJakFnTUNBMU1EQXVNREF3TURFZ01UWXlMamd4TlRrMElnb2dJQ0ErQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6RXdNekE0SWo0S0lDQWdJRHhqYkdsd1VHRjBhQW9nSUNBZ0lDQWdhV1E5SW1Oc2FYQlFZWFJvTVRBeU56RWlDaUFnSUNBZ0lDQmpiR2x3VUdGMGFGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2lBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lHbGtQU0p3WVhSb01UQXlOek1pQ2lBZ0lDQWdJQ0FnSUdROUltMGdOREV6TGpjME1pdzVNQzQwTXpVZ1l5QXRNQzR3TlRjc0xUUXVORGswSURRdU1EQTFMQzAzTGpBd01pQTNMakEyTlN3dE9DNDBPVE1nTXk0eE5EUXNMVEV1TlRNZ05DNHlMQzB5TGpVeE1TQTBMakU0T0N3dE15NDROemtnTFRBdU1ESTBMQzB5TGpBNU5DQXRNaTQxTURnc0xUTXVNREU0SUMwMExqZ3pNeXd0TXk0d05UUWdMVFF1TURVMkxDMHdMakEyTXlBdE5pNDBNVFFzTVM0d09UVWdMVGd1TWpnNUxERXVPVGN4SUd3Z0xURXVORFl4TEMwMkxqZ3pOeUJqSURFdU9EZ3hMQzB3TGpnMk55QTFMak0yTkN3dE1TNDJNak1nT0M0NU56WXNMVEV1TmpVMklEZ3VORGM0TERBZ01UUXVNREkxTERRdU1UZzFJREUwTGpBMU5Td3hNQzQyTnpRZ01DNHdNek1zT0M0eU16VWdMVEV4TGpNNU1TdzRMalk1TVNBdE1URXVNekV6TERFeUxqTTNNaUF3TGpBeU55d3hMakV4TmlBeExqQTVNaXd5TGpNd055QXpMalF5Tml3eUxqWXhJREV1TVRVMUxEQXVNVFV6SURRdU16UTBMREF1TWpjZ055NDVOVGtzTFRFdU16azFJR3dnTVM0ME1Ua3NOaTQyTVRVZ1l5QXRNUzQ1TkRRc01DNDNNRGdnTFRRdU5EUXpMREV1TXpnMklDMDNMalUxTkN3eExqTTROaUF0Tnk0NU9Dd3dJQzB4TXk0MU9UTXNMVFF1TWpReUlDMHhNeTQyTXpnc0xURXdMak14TkNCdElETTBMamd5Tnl3NUxqYzBOQ0JqSUMweExqVTBPQ3d3SUMweUxqZzFNeXd0TUM0NU1ETWdMVE11TkRNMUxDMHlMakk0T1NCc0lDMHhNaTR4TVRFc0xUSTRMamt4TnlBNExqUTNNaXd3SURFdU5qZzJMRFF1TmpVNUlERXdMak0xTXl3d0lEQXVPVGM0TEMwMExqWTFPU0EzTGpRMk55d3dJQzAyTGpVeE5pd3pNUzR5TURZZ0xUWXVPRGswTERBZ2JTQXhMakU0TlN3dE9DNDBNeUF5TGpRME5Td3RNVEV1TnpFNElDMDJMalk1Tml3d0lEUXVNalV4TERFeExqY3hPQ0J0SUMwME5pNHlPRFFzT0M0ME15QXROaTQyTnpnc0xUTXhMakl3TmlBNExqQTNNeXd3SURZdU5qYzFMRE14TGpJd05pQXRPQzR3Tnl3d0lHMGdMVEV4TGprME15d3dJQzA0TGpRd015d3RNakV1TWpRZ0xUTXVNems1TERFNExqQTJJR01nTFRBdU16azVMREl1TURFMklDMHhMamszTkN3ekxqRTRJQzB6TGpjeU15d3pMakU0SUd3Z0xURXpMamN6Tnl3d0lDMHdMakU1TWl3dE1DNDVNRFlnWXlBeUxqZ3lMQzB3TGpZeE1pQTJMakF5TkN3dE1TNDFPVGtnTnk0NU5qVXNMVEl1TmpVMUlERXVNVGc0TEMwd0xqWTBOU0F4TGpVeU55d3RNUzR5TURrZ01TNDVNVGNzTFRJdU56UXlJR3dnTmk0ME16Z3NMVEkwTGprd015QTRMalV6TWl3d0lERXpMakE0TERNeExqSXdOaUF0T0M0ME56Z3NNQ0lnTHo0S0lDQWdJRHd2WTJ4cGNGQmhkR2crQ2lBZ0lDQThiR2x1WldGeVIzSmhaR2xsYm5RS0lDQWdJQ0FnSUdsa1BTSnNhVzVsWVhKSGNtRmthV1Z1ZERFd01qYzNJZ29nSUNBZ0lDQWdjM0J5WldGa1RXVjBhRzlrUFNKd1lXUWlDaUFnSUNBZ0lDQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtEZzBMakU1T1RVc016RXVNREE0T0N3ek1TNHdNRGc0TEMwNE5DNHhPVGsxTERFNUxqVXhNaXd0TWpjdU5ERTVNaWtpQ2lBZ0lDQWdJQ0JuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJS0lDQWdJQ0FnSUhreVBTSXdJZ29nSUNBZ0lDQWdlREk5SWpFaUNpQWdJQ0FnSUNCNU1UMGlNQ0lLSUNBZ0lDQWdJSGd4UFNJd0lqNEtJQ0FnSUNBZ1BITjBiM0FLSUNBZ0lDQWdJQ0FnYVdROUluTjBiM0F4TURJM09TSUtJQ0FnSUNBZ0lDQWdiMlptYzJWMFBTSXdJZ29nSUNBZ0lDQWdJQ0J6ZEhsc1pUMGljM1J2Y0MxdmNHRmphWFI1T2pFN2MzUnZjQzFqYjJ4dmNqb2pNakl5TXpVM0lpQXZQZ29nSUNBZ0lDQThjM1J2Y0FvZ0lDQWdJQ0FnSUNCcFpEMGljM1J2Y0RFd01qZ3hJZ29nSUNBZ0lDQWdJQ0J2Wm1aelpYUTlJakVpQ2lBZ0lDQWdJQ0FnSUhOMGVXeGxQU0p6ZEc5d0xXOXdZV05wZEhrNk1UdHpkRzl3TFdOdmJHOXlPaU15TlRSaFlUVWlJQzgrQ2lBZ0lDQThMMnhwYm1WaGNrZHlZV1JwWlc1MFBnb2dJRHd2WkdWbWN6NEtJQ0E4YldWMFlXUmhkR0VLSUNBZ0lDQnBaRDBpYldWMFlXUmhkR0V4TURNeE1TSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR2NLSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TXpNekxqY3dNVFUzTEMwMU16WXVOREkwTXpFcElnb2dJQ0FnSUdsa1BTSnNZWGxsY2pFaVBnb2dJQ0FnUEdjS0lDQWdJQ0FnSUdsa1BTSm5NVEF5TmpjaUNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnMExqazRORFk0TlRZc01Dd3dMQzAwTGprNE5EWTROVFlzTFRFME56QXVNVEU0TlN3eE1ETTVMall5TmpRcElqNEtJQ0FnSUNBZ1BHY0tJQ0FnSUNBZ0lDQWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01UQXlOekVwSWdvZ0lDQWdJQ0FnSUNCcFpEMGlaekV3TWpZNUlqNEtJQ0FnSUNBZ0lDQThad29nSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtETTFNUzQyTVRFc09UWXVPRGsyS1NJS0lDQWdJQ0FnSUNBZ0lDQnBaRDBpWnpFd01qYzFJajRLSUNBZ0lDQWdJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQWdJQ0FnSUNCcFpEMGljR0YwYURFd01qZ3pJZ29nSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U5SW1acGJHdzZkWEpzS0NOc2FXNWxZWEpIY21Ga2FXVnVkREV3TWpjM0tUdG1hV3hzTFc5d1lXTnBkSGs2TVR0bWFXeHNMWEoxYkdVNmJtOXVlbVZ5Ynp0emRISnZhMlU2Ym05dVpTSUtJQ0FnSUNBZ0lDQWdJQ0FnSUdROUlrMGdNQ3d3SURrNExqUXpOeXd6Tmk0eU5USWdNVEl3TGpnek1Td3RNalF1TlRVM0lESXlMak01TlN3dE5qQXVPREE1SWlBdlBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdQQzluUGdvZ0lDQWdQQzluUGdvZ0lEd3ZaejRLUEM5emRtYytDZz09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxMHB4IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0I0Yld4dWN6cGpZejBpYUhSMGNEb3ZMMk55WldGMGFYWmxZMjl0Ylc5dWN5NXZjbWN2Ym5Naklnb2dJQ0I0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pQ2lBZ0lIaHRiRzV6T25OMlp6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUFnSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2RtbGxkMEp2ZUQwaU1DQXdJRFkwT1M0NU9UazVPQ0EwTURVdU5qTXlNallpQ2lBZ0lIWmxjbk5wYjI0OUlqRXVNU0lLSUNBZ2FXUTlJbk4yWnpnNU5TSStDaUFnUEcxbGRHRmtZWFJoQ2lBZ0lDQWdhV1E5SW0xbGRHRmtZWFJoT0RrNUlqNEtJQ0FnSUR4eVpHWTZVa1JHUGdvZ0lDQWdJQ0E4WTJNNlYyOXlhd29nSUNBZ0lDQWdJQ0J5WkdZNllXSnZkWFE5SWlJK0NpQWdJQ0FnSUNBZ1BHUmpPbVp2Y20xaGRENXBiV0ZuWlM5emRtY3JlRzFzUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ1BHUmpPblI1Y0dVS0lDQWdJQ0FnSUNBZ0lDQnlaR1k2Y21WemIzVnlZMlU5SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5a1kyMXBkSGx3WlM5VGRHbHNiRWx0WVdkbElpQXZQZ29nSUNBZ0lDQWdJRHhrWXpwMGFYUnNaVDVCYzNObGRDQXhQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6ZzNPU0krQ2lBZ0lDQThjM1I1YkdVS0lDQWdJQ0FnSUhSNWNHVTlJblJsZUhRdlkzTnpJZ29nSUNBZ0lDQWdhV1E5SW5OMGVXeGxPRGMzSWo0dVlYdHZjR0ZqYVhSNU9qQTdmUzVpZTJacGJHdzZJMlptWmp0OUxtTjdabWxzYkRvalptWTFaakF3TzMwdVpIdG1hV3hzT2lObFlqQXdNV0k3ZlM1bGUyWnBiR3c2STJZM09XVXhZanQ5UEM5emRIbHNaVDRLSUNBOEwyUmxabk0rQ2lBZ1BIUnBkR3hsQ2lBZ0lDQWdhV1E5SW5ScGRHeGxPRGd4SWo1QmMzTmxkQ0F4UEM5MGFYUnNaVDRLSUNBOGNtVmpkQW9nSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaVHRtYVd4c09pTm1aalZtTURBN2MzUnliMnRsTFhkcFpIUm9PalV1TkRrek9ERXhOakVpQ2lBZ0lDQWdZMnhoYzNNOUltTWlDaUFnSUNBZ2VEMGlNakk1TGpnek1qWXpJZ29nSUNBZ0lIazlJalEzTGpJNU56Y3pOeUlLSUNBZ0lDQjNhV1IwYUQwaU1Ua3dMalF4TlRVeElnb2dJQ0FnSUdobGFXZG9kRDBpTXpFeExqQXdORGNpQ2lBZ0lDQWdhV1E5SW5KbFkzUTRPRGNpSUM4K0NpQWdQSEJoZEdnS0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvalpXSXdNREZpTzNOMGNtOXJaUzEzYVdSMGFEbzFMalE1TXpneE1UWXhJZ29nSUNBZ0lHTnNZWE56UFNKa0lnb2dJQ0FnSUdROUltMGdNalE1TGpRME5UVTBMREl3TWk0NE1qYzFOaUJoSURFNU55NDBORGMxT1N3eE9UY3VORFEzTlRrZ01DQXdJREVnTnpVdU5UTTVPVEVzTFRFMU5TNDBOelE0TmpjZ01UazNMamMzTnpJeUxERTVOeTQzTnpjeU1pQXdJREVnTUNBd0xETXhNUzR3TURRMk56Y2dNVGszTGpRME56VTVMREU1Tnk0ME5EYzFPU0F3SURBZ01TQXROelV1TlRNNU9URXNMVEUxTlM0MU1qazRNU0I2SWdvZ0lDQWdJR2xrUFNKd1lYUm9PRGc1SWlBdlBnb2dJRHh3WVhSb0NpQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyWTNPV1V4WWp0emRISnZhMlV0ZDJsa2RHZzZOUzQwT1RNNE1URTJNU0lLSUNBZ0lDQmpiR0Z6Y3owaVpTSUtJQ0FnSUNCa1BTSnRJRFl5Tmk0eE1ERXpMRE15TlM0ek9UUTFJSFlnTFRZdU16Y3lPRElnYUNBeUxqYzBOamtnZGlBdE1TNHpNVGcxTWlCb0lDMDJMalV6TnpZMElIWWdNUzR6TVRnMU1pQm9JREl1TlRneU1TQjJJRFl1TXpjeU9ESWdlaUJ0SURFeUxqWTVNRGNzTUNCMklDMDNMalk1TVRNMElHZ2dMVEV1T1RjM056Z2diQ0F0TWk0ek1EYzBMRFV1TkRrek9ERWdMVEl1TXpBM05Dd3ROUzQwT1RNNE1TQm9JQzB4TGprM056YzNJSFlnTnk0Mk9URXpOQ0JvSURFdU5ESTRNemtnZGlBdE5TNDRNak0wTkNCc0lESXVNVFF5TlRrc05DNDVPVGt6TnlCb0lERXVORGd6TXpNZ2JDQXlMakUwTWpVNExDMDBMams1T1RNM0lIWWdOUzQ0TWpNME5DQjZJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3hJaUF2UGdvZ0lEeHdZWFJvQ2lBZ0lDQWdjM1I1YkdVOUltWnBiR3c2STJZM09XVXhZanR6ZEhKdmEyVXRkMmxrZEdnNk5TNDBPVE00TVRFMk1TSUtJQ0FnSUNCamJHRnpjejBpWlNJS0lDQWdJQ0JrUFNKdElEWTBOU3d5TURJdU9ESTNOVFlnWVNBeE9UY3VOemMzTWpJc01UazNMamMzTnpJeUlEQWdNQ0F4SUMwek1qQXVNREUwTlRVc01UVTFMalEzTkRnM0lERTVOeTQzTnpjeU1pd3hPVGN1TnpjM01qSWdNQ0F3SURBZ01Dd3RNekV4TGpBd05EWTNOU0JCSURFNU55NDNOemN5TWl3eE9UY3VOemMzTWpJZ01DQXdJREVnTmpRMUxESXdNaTQzTnpJMk1pQmFJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3pJaUF2UGdvOEwzTjJaejRLXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI0MHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJeUxqRXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUluTjJaekV3T1RBNElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lLQ1NCMmFXVjNRbTk0UFNJd0lEQWdOelV3SURJd05TSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ056VXdJREl3TlRzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ284YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBnb0pMbk4wTUh0bWFXeHNPaU14TURJNU9FVTdmUW9KTG5OME1YdG1hV3hzT2lOR1JrSkZNREE3ZlFvOEwzTjBlV3hsUGdvOGRHbDBiR1UrYzJWd1lUd3ZkR2wwYkdVK0NqeHdZWFJvSUdsa1BTSndZWFJvTlRZNE9TSWdZMnhoYzNNOUluTjBNQ0lnWkQwaVRURTJOaTQyTERZMUxqUm9MVFV4TGpOak1DMDRMalF0TVMweE5DNHhMVE10TVRkakxUTXROQzR6TFRFeExqUXROaTQwTFRJMUxqSXROaTQwWXkweE15NDBMREF0TWpJdU15d3hMakl0TWpZdU5pd3pMamNLQ1ZNMU5DdzFNeTQyTERVMExEWXhMamhqTUN3M0xqVXNNUzQ1TERFeUxqUXNOUzQzTERFMExqZGpNeTQwTERFdU9DdzNMakVzTWk0NExERXdMamtzTWk0NVREZ3hMRGd3TGpKak1qSXVNaXd4TGpVc016WXNNaTQxTERReExqWXNNeTR4WXpFM0xqVXNNUzQ0TERNd0xqTXNOaTQwTERNNExqRXNNVFFLQ1dNMkxqSXNOUzQ1TERrdU9Td3hNeTQyTERFeExqRXNNak11TVdNd0xqY3NOaTQwTERFdU1Td3hNaTQ1TERFc01Ua3VNMk13TERFMkxqVXRNUzQyTERJNExqWXROQzQzTERNMkxqSmpMVFV1Tnl3eE5DNHhMVEU0TGpVc01qSXVPUzB6T0M0MUxESTJMallLQ1dNdE9DNHpMREV1TmkweU1TNHhMREl1TkMwek9DNHpMREl1TkdNdE1qZ3VOeXd3TFRRNExqZ3RNUzQzTFRZd0xqRXROUzR4WXkweE15NDVMVFF1TWkweU15MHhNaTQ0TFRJM0xqVXRNalV1TmtNeExqSXNNVFkzTGpFc01Dd3hOVFV1TWl3d0xERXpPQzQxYURVeExqTjJOQzR6Q2dsak1DdzRMamtzTWk0MkxERTBMallzTnk0M0xERTNMakpqTkN3eExqa3NPQzQwTERJdU9Dd3hNaTQ0TERJdU9HZ3hPQzQ1WXprdU5pd3dMREUxTGpndE1DNDFMREU0TGpRdE1TNDFZelF1TnkweExqa3NOeTQ0TFRRdU9TdzVMak10T1dNd0xqa3RNeTR5TERFdU15MDJMalVzTVM0eUxUa3VPUW9KWXpBdE9TMHpMak10TVRRdU5TMDVMamt0TVRZdU5XTXRNaTQxTFRBdU9DMHhNeTQ1TFRFdU9TMHpOQzR6TFRNdU1tTXRNVFl1TkMweExqSXRNamN1T0MweUxqTXRNelF1TWkwekxqUmpMVEUyTGpndE15NHhMVEk0TFRrdU5pMHpNeTQyTFRFNUxqUUtDVU15TGpjc09URXVOU3d3TGpJc056Z3VPU3d3TGpJc05qSmpNQzB4TWk0NExERXVNeTB5TXk0eExEUXRNekF1T1hNMkxqa3RNVE11Tml3eE1pNDRMVEUzTGpaak9DNDJMVFl1TWl3eE9TNDNMVGt1T0N3ek15NHlMVEV3TGpsak1URXVNaTB4TERJekxqY3RNUzQxTERNM0xqTXRNUzQxQ2dsak1qRXVOU3d3TERNMkxqa3NNUzR5TERRMkxETXVOMk15TWk0ekxEWXNNek11TlN3eU1pNDRMRE16TGpVc05UQXVORU14TmpjdU1TdzFOeTQxTERFMk5pNDVMRFl3TGprc01UWTJMallzTmpVdU5DSXZQZ284Y0dGMGFDQnBaRDBpY0dGMGFEVTJPVE1pSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB6T1RJdU15d3lNRFZXTUdneE1ESXVPR014TkM0eExEQXNNalF1T0N3eExqRXNNekl1TWl3ekxqVmpNVFl1T1N3MUxqTXNNamd1TWl3eE5pNHhMRE0wTERNeUxqVUtDV016TERndU5pdzBMalVzTWpFdU5TdzBMalVzTXpndU9HTXdMREl3TGpndE1TNDNMRE0xTGpjdE5TdzBOQzQ0WXkwMkxqWXNNVGd0TWpBdU1Td3lPQzR6TFRRd0xqWXNNekZqTFRJdU5Dd3dMalF0TVRJdU55d3dMamd0TXpBdU9Dd3hMakZzTFRrdU1pd3dMak5vTFRNeUxqaDJOVE5JTXpreUxqTjZDZ2tnVFRRME55NDFMREV3TkM0MWFETTBMalJqTVRBdU9TMHdMalFzTVRjdU5TMHhMaklzTVRrdU9TMHlMalZqTXk0eUxURXVPQ3cxTGpVdE5TNDBMRFl1TlMweE1DNDRZekF1T0MwMUxqTXNNUzR5TFRFd0xqWXNNUzB4Tm1Nd0xUZ3VOeTB3TGpjdE1UVXVNUzB5TGpFdE1Ua3VNd29KWXkweUxUVXVPUzAyTGpndE9TNDFMVEUwTGpJdE1UQXVPR010TVM0MUxUQXVNaTAxTGpFdE1DNHpMVEV3TGpjdE1DNHphQzB6TkM0NFZqRXdOQzQxZWlJdlBnbzhjR0YwYUNCcFpEMGljR0YwYURVMk9UY2lJR05zWVhOelBTSnpkREFpSUdROUlrMDJPRE11Tml3eE5qa3VOV2d0TnpNdU9Hd3RPUzQ1TERNMUxqVm9MVFUzTGpGTU5qQTBMalVzTUdnNE15NHlURGMxTUN3eU1EVm9MVFUxTGpsTU5qZ3pMallzTVRZNUxqVjZJRTAyTnpJdU5pd3hNamt1TmdvSmJDMHlOUzQ0TFRnNExqbHNMVEkxTGpFc09EZ3VPVWcyTnpJdU5ub2lMejRLUEhCaGRHZ2dhV1E5SW5CaGRHZzFOekF4SWlCamJHRnpjejBpYzNReElpQmtQU0pOTXpFMkxqSXNNamd1T0dNeU1TNDVMREFzTkRJdU5pdzVMamtzTlRZdU5Dd3lOaTQ1YkRFeExqa3RNalV1TlVNek5qVXNNVEV1T1N3ek16a3VNeXd4TGpjc016RXlMallzTVM0NENnbGpMVFF6TGpVc01DMDRNQzQyTERJMkxqSXRPVFV1T1N3Mk15NDBhQzB5TXk0eWJDMHhNeTQzTERJNUxqTm9Namt1T0dNdE1DNHlMREl1Tnkwd0xqUXNOUzQwTFRBdU5DdzRMakpqTUN3ekxqTXNNQzR5TERZdU55d3dMalVzTVRCb0xURTFiQzB4TXk0M0xESTVMalJvTXpZdU13b0pZekUxTGpjc016WXVNaXcxTWk0MExEWXhMamNzT1RVdU1pdzJNUzQzWXpJd0xqY3NNQ3cwTUM0NUxUWXNOVGd1TVMweE55NDFkaTB6Tm1NdE1qWXVOQ3d6TUM0eUxUY3lMaklzTXpNdU1pMHhNREl1TkN3MkxqaGpMVFV0TkM0MExUa3VOQzA1TGpRdE1UTXRNVFZvTnpac01UTXVOeTB5T1M0MENnbElNalEwTGpKakxUQXVOUzB6TGpZdE1DNDRMVGN1TWkwd0xqZ3RNVEF1T0dNd0xUSXVOU3d3TGpFdE5DNDVMREF1TkMwM0xqUm9NVEE1TGpoc01UTXVOeTB5T1M0emFDMHhNVFJETWpZMkxqSXNOREl1Tnl3eU9UQXVNaXd5T0M0NUxETXhOaTR5TERJNExqZ2lMejRLUEhCaGRHZ2dhV1E5SW5CaGRHZzFOekExSWlCamJHRnpjejBpYzNRd0lpQmtQU0pOTXpFMkxqSXNNamt1TjJNeU1TNDJMREFzTkRJdU1TdzVMamdzTlRVdU55d3lOaTQyYkRBdU9Td3hMakZzTUM0MkxURXVNMnd4TVM0NUxUSTFMalZzTUM0ekxUQXVObXd0TUM0MUxUQXVOQW9KWXkwek5pMHpNeTQzTFRrd0xqVXRNemd1TWkweE16RXVOUzB4TUM0M1l5MHhOaTQ0TERFeExqTXRNekFzTWpjdU15MHpOeTQzTERRMmJEQXVPQzB3TGpaSU1Ua3piQzB3TGpJc01DNDFiQzB4TXk0M0xESTVMalJzTFRBdU5pd3hMak5vTXpFdU1td3RNQzQ1TFRFS0NXTXRNQzR5TERNdE1DNDBMRFV1T0Mwd0xqUXNPQzR6WXpBc015NDBMREF1TWl3MkxqY3NNQzQxTERFd0xqRnNNQzQ1TFRGb0xURTFMalZzTFRBdU1pd3dMalZzTFRFekxqY3NNamt1Tkd3dE1DNDJMREV1TW1nek55NDNiQzB3TGpndE1DNDFZekUyTGpRc016Y3VPQ3cxTkN3Mk1pNHlMRGsyTERZeUxqSUtDV015TUM0NUxEQXVNU3cwTVM0ekxUWXVNU3cxT0M0MkxURTNMalpzTUM0MExUQXVNMVl4TkRoc0xURXVOU3d4TGpoakxUSTJMakVzTWprdU9DMDNNUzQwTERNeUxqZ3RNVEF4TGpJc05pNDNZeTAwTGprdE5DNHpMVGt1TWkwNUxqTXRNVEl1T0MweE5DNDRiQzB3TGpjc01TNDBhRGMyTGpZS0NXd3dMakl0TUM0MWJERXpMamN0TWprdU5Hd3dMall0TVM0eVNESTBOQzR5YkRBdU9Td3dMamhqTFRBdU5TMHpMalV0TUM0NExUY3VNUzB3TGpndE1UQXVOMk13TFRJdU5Dd3dMakV0TkM0NUxEQXVOQzAzTGpOc0xUQXVPU3d3TGpob01URXdMalJzTUM0eUxUQXVOVXd6Tmpnc05qVXVOZ29KYkRBdU5pMHhMak5JTWpVekxqSnNNQzQ0TERFdU0wTXlOall1T0N3ME15NDFMREk1TUM0MUxESTVMamdzTXpFMkxqSXNNamt1TnlCTk1qVXpMaklzTmpZdU1XZ3hNVFJzTFRBdU9DMHhMakpzTFRFekxqY3NNamt1Tkd3d0xqZ3RNQzQxU0RJME1pNDViQzB3TGpFc01DNDRDZ2xqTFRBdU1pd3lMalV0TUM0MExEVXRNQzQwTERjdU5XTXdMRE11Tnl3d0xqTXNOeTQwTERBdU9Dd3hNV3d3TGpFc01DNDRTRE0wTld3dE1DNDRMVEV1TTJ3dE1UTXVOeXd5T1M0MGJEQXVPQzB3TGpWb0xUYzNMamRzTUM0NUxERXVOR015TWk0eUxETTBMRFkzTGpjc05ETXVOaXd4TURFdU55d3lNUzQwQ2dsak5TNDJMVE11Tnl3eE1DNDNMVGd1TVN3eE5TNHlMVEV6TGpKc0xURXVOUzB3TGpaMk16WnNNQzQwTFRBdU4wTXpOVE11TWl3eE9UY3NNek16TGpFc01qQXpMRE14TWk0MkxESXdNMk10TkRFdU1pd3dMVGM0TGpNdE1qUXRPVFF1TkMwMk1TNHhiQzB3TGpJdE1DNDFhQzB6Tmk0NWJEQXVPQ3d4TGpNS0NXd3hNeTQzTFRJNUxqUnNMVEF1T0N3d0xqVm9NVFpzTFRBdU1TMHhZeTB3TGpNdE15NHpMVEF1TlMwMkxqY3RNQzQxTFRrdU9XTXdMVEl1TlN3d0xqRXROUzR5TERBdU5DMDRMakpzTUM0eExURm9MVE13TGpoc01DNDRMREV1TW13eE15NDNMVEk1TGpOc0xUQXVPQ3d3TGpWb01qTXVPQW9KYkRBdU1pMHdMalZqTnk0MkxURTRMalFzTWpBdU5TMHpOQzR4TERNM0xqRXRORFV1TW1NME1DNHpMVEkzTERrekxqa3RNakl1Tml3eE1qa3VNaXd4TUM0MWJDMHdMakl0TVd3dE1URXVPU3d5TlM0MWJERXVOUzB3TGpKakxUSTFMall0TXpFdU5TMDNNUzQ0TFRNMkxqUXRNVEF6TGpRdE1UQXVPQW9KWXkwM0xEVXVOeTB4TWk0NUxERXlMall0TVRjdU5Dd3lNQzQwYkMwd0xqZ3NNUzR6VERJMU15NHlMRFkyTGpGNklpOCtDand2YzNablBnbz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7cnVkZXhTZXJ2aWNlID09PSBcImdhdGV3YXlcIiAmJiBydWRleEdhdGV3YXlDb2lucy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudExvY2FsZSA9PSBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZ3JlZW1lbnRfcnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUnVkZXhOb3RpY2UxSW5mb3JtZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFfaW5mb3JtZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlMUluZm9ybWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhHYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM9e3J1ZGV4R2F0ZXdheUNvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHtydWRleFNlcnZpY2UgPT09IFwiZmlhdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vbWVyY2hhbnQucmFpZG9maW5hbmNlLmV1L21lZGlhLzgzZWVmM2Q1YTE3YmYzMDBhZjk5ODZlOTEzYzJjOTlkLnBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2VfdGhpcmRfcGFydHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxX2luZm9ybWVkX3RoaXJkX3BhcnR5X3NlcnZpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0byA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvRmluYW5jZSBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VyTGlzdDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgc2VydmljZXNEb3dufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlU2VydmljZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBydWRleEdhdGV3YXlDb2lucyA9IHRoaXMucHJvcHMucnVkZXhCYWNrZWRDb2luc1xuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29pbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5yZW5kZXJTZXJ2aWNlcyhydWRleEdhdGV3YXlDb2lucyk7XG5cbiAgICAgICAgY29uc3Qgc2VydmljZU5hbWVzID0gW107XG4gICAgICAgIGxldCBvcHRpb25zID0gc2VydmljZXMubWFwKChzZXJ2aWNlc19vYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZXMucHVzaChzZXJ2aWNlc19vYmouaWRlbnRpZmllcik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzX29iai5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2VOYW1lID0gc2VydmljZU5hbWVzW2FjdGl2ZVNlcnZpY2VdO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZURvd24gPSBzZXJ2aWNlc0Rvd24uZ2V0KGN1cnJlbnRTZXJ2aWNlTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRhaW5lZCA/IFwiZ3JpZC1jb250ZW50XCIgOiBcImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29udGFpbmVkID8gXCJcIiA6IFwiZ3JpZC1jb250ZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwb3NpdE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImRlcG9zaXRfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwiZGVwb3NpdF9tb2RhbF9uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZWRDb2lucz17dGhpcy5wcm9wcy5iYWNrZWRDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXRoZHJhd01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIndpdGhkcmF3X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cIndpdGhkcmF3X21vZGFsX25ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zPXt0aGlzLnByb3BzLmJhY2tlZENvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJnYXRld2F5LnBoYXNlX291dF93YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZXBvc2l0X21vZGFsX2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZGVwb3NpdF9tb2RhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuZGVwb3NpdC5zdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwid2l0aGRyYXdfbW9kYWxfbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMud2l0aGRyYXdfbW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy53aXRoZHJhd19tb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkudGl0bGVcIiBjb21wb25lbnQ9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzaG93LWZvci1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj1cImRlcG9zaXQtc2hvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj1cInJlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IHNtYWxsLW9yZGVyLTIgbWVkaXVtLW9yZGVyLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5zZXJ2aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRTZXJ2aWNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVTZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VydmljZURvd24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgZ2F0ZXdheS51bmF2YWlsYWJsZV8ke2N1cnJlbnRTZXJ2aWNlTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpdW0tNSBtZWRpdW0tb2Zmc2V0LTEgc21hbGwtb3JkZXItMSBtZWRpdW0tb3JkZXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3toZWlnaHQ6IDQwLCB3aWR0aDogNDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21faW1hZ2U9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTV9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhY3RpdmVTZXJ2aWNlICYmIHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VydmljZXNbYWN0aXZlU2VydmljZV0udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXJ2aWNlc1swXS50ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5BY2NvdW50RGVwb3NpdFdpdGhkcmF3ID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50RGVwb3NpdFdpdGhkcmF3KTtcblxuY2xhc3MgRGVwb3NpdFN0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB1cGRhdGVHYXRld2F5QmFja2VycygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBY2NvdW50RGVwb3NpdFdpdGhkcmF3IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgRGVwb3NpdFN0b3JlV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmUsIEdhdGV3YXlTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIGFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwibG9jYWxlXCIpLFxuICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICBvcGVuTGVkZ2VyQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJPUEVOXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBydWRleEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiUlVERVhcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJpdHNwYXJrQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJTUEFSS0RFWFwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYmxvY2tUcmFkZXNCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlRSQURFXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjaXRhZGVsQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJDSVRBREVMXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB4YnRzeEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiWEJUU1hcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNlcnZpY2VzRG93bjogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuZG93biB8fCB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4vUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHtcbiAgICBSZWNlbnRUcmFuc2FjdGlvbnMsXG4gICAgVHJhbnNhY3Rpb25XcmFwcGVyXG59IGZyb20gXCJjb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFwicmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1wiO1xuXG5jbGFzcyBSdURleEdhdGV3YXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHthY3Rpb246IFwiZGVwb3NpdFwifSksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblwiLCBcImRlcG9zaXRcIilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZ2V0QWN0aXZlQ29pbihwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgbGV0IGNhY2hlZENvaW4gPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlQ29pbl9ydWRleFwiLCBudWxsKTtcbiAgICAgICAgbGV0IGZpcnN0VGltZUNvaW4gPSBcIlBQWVwiO1xuICAgICAgICBsZXQgYWN0aXZlQ29pbiA9IGNhY2hlZENvaW4gPyBjYWNoZWRDb2luIDogZmlyc3RUaW1lQ29pbjtcblxuICAgICAgICBpZiAoc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW4gPSB0aGlzLl9maW5kQ29pbkJ5TmFtZShwcm9wcywgYWN0aXZlQ29pbikuc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvaW47XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5wcm92aWRlciAhPT0gdGhpcy5wcm9wcy5wcm92aWRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29pbjogdGhpcy5fZ2V0QWN0aXZlQ29pbihuZXh0UHJvcHMsIHRoaXMuc3RhdGUuYWN0aW9uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAgICBvblNlbGVjdENvaW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIHNldHRpbmdbYGFjdGl2ZUNvaW5fcnVkZXhfJHt0aGlzLnN0YXRlLmFjdGlvbn1gXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoc2V0dGluZyk7XG4gICAgfSovXG5cbiAgICBvblNlbGVjdENvaW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGUudmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcbiAgICAgICAgbGV0IGNvaW5OYW1lID0gZS52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGNvaW5OYW1lID0gdGhpcy5fZmluZENvaW5CeVN5bWJvbCh0aGlzLnByb3BzLCBjb2luTmFtZSkuYmFja2luZ0NvaW47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ1tcImFjdGl2ZUNvaW5fcnVkZXhcIl0gPSBjb2luTmFtZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5TmFtZShwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzLmNvaW5zWzBdO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5U3ltYm9sKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2luID0gcHJvcHMuY29pbnNbaV07XG4gICAgICAgICAgICBpZiAoY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSB0aGlzLl9nZXRBY3RpdmVDb2luKHRoaXMucHJvcHMsIHthY3Rpb246IHR5cGV9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGFjdGl2ZUNvaW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtbXCJydWRleEFjdGlvblwiXTogdHlwZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjb2lucywgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUNvaW4sIGFjdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghY29pbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyZWRDb2lucyA9IGNvaW5zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIGlmICghYSB8fCAhYS5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYS5kZXBvc2l0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICA6IGEud2l0aGRyYXdhbEFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luT3B0aW9ucyA9IGZpbHRlcmVkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZml4ID0gbmFtZSA9PT0gXCJQUFlcIiA/IFwiXCIgOiBcIlJVREVYLlwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJlZml4ICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW4gPSBmaWx0ZXJlZENvaW5zLmZpbHRlcihjb2luID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IGFjdGl2ZUNvaW5cbiAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sID09PSBhY3RpdmVDb2luO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAoIWNvaW4pIGNvaW4gPSBmaWx0ZXJlZENvaW5zWzBdO1xuXG4gICAgICAgIGxldCBpc0RlcG9zaXQgPSB0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IHN1cHBvcnRVcmwgPSBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbVwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImdhdGV3YXkuY2hvb3NlX1wiICsgYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT1cImV4dGVybmFsLWNvaW4tdHlwZXMgYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDb2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUNvaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvaW5PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L1NlbGVjdD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfdGV4dFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcImRlcG9zaXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwid2l0aGRyYXdcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyFjb2luID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29pbi5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17Y29pbi5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e2NvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfY29pbl90eXBlPXtjb2luLmJhY2tpbmdDb2luLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYWNjb3VudD17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X3dhbGxldF90eXBlPXtjb2luLndhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2NvaW5fdHlwZT17Y29pbi5zeW1ib2wudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zPXtjb2luLnN1cHBvcnRzTWVtb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUHVibGljS2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uc3VwcG9ydHNQdWJsaWNLZXkgfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVHlwZT17Y29pbi5tZW1vVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17Y29pbi5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e2NvaW4uZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfcHJlY2lzaW9uPXtjb2luLnByZWNpc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnN1cHBvcnRfYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4gJiYgY29pbi5zeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXQsIHRvLCBmcm9tQWNjb3VudH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e0ltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmlsdGVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNhY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUnVEZXhHYXRld2F5LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IERpc2FibGVDb3B5VGV4dCBmcm9tIFwiLi4vRGlzYWJsZUNvcHlUZXh0XCI7XG5pbXBvcnQgUnVEZXhXaXRoZHJhd01vZGFsIGZyb20gXCIuL1J1RGV4V2l0aGRyYXdNb2RhbFwiO1xuaW1wb3J0IEFjY291bnRCYWxhbmNlIGZyb20gXCIuLi8uLi9BY2NvdW50L0FjY291bnRCYWxhbmNlXCI7XG5pbXBvcnQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIGZyb20gXCJjb21tb24vUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXCI7XG5pbXBvcnQge3JlcXVlc3REZXBvc2l0QWRkcmVzc30gZnJvbSBcImxpYi9jb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmQgZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7YXZhaWxhYmxlR2F0ZXdheXN9IGZyb20gXCJsaWIvY29tbW9uL2dhdGV3YXlzXCI7XG5cbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgUVJDb2RlIGZyb20gXCJxcmNvZGUucmVhY3RcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBpc3N1ZXJfYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGRlcG9zaXRfYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9pbl9mYXZvcl9vZjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX21lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBzdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVtb1R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGFzc2V0X3ByZWNpc2lvbjogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHFyY29kZTogXCJcIixcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MgPSB0aGlzLmFkZERlcG9zaXRBZGRyZXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93UXJNb2RhbCA9IHRoaXMuc2hvd1FyTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXJNb2RhbCA9IHRoaXMuaGlkZVFyTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNob3dRcmNvZGUodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxcmNvZGU6IHRleHR9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dRck1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dRck1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXJNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZVFyTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfbm90aWZ5KHN1KSB7XG4gICAgICAgIGxldCBzdHJOID0gXCJjb3B5X2FkZHJlc3NcIjtcblxuICAgICAgICBpZiAoc3UgPT0gXCJtZW1vXCIpIHN0ck4gPSBcImNvcHlfbWVtb1wiO1xuXG4gICAgICAgIE5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubm90aWZ5LlwiICsgc3RyTilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgLy8gICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3ModGhpcy5wcm9wcy5nYXRld2F5LCBhY2NvdW50X25hbWUsIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUpO1xuICAgIC8vIH1cblxuICAgIGFkZERlcG9zaXRBZGRyZXNzKHJlY2VpdmVfYWRkcmVzcykge1xuICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnRfbmFtZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlX2FkZHJlc3N9KTtcbiAgICB9XG5cbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInRoaXMucHJvcHMuaXNzdWVyOiBcIiwgdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC50b0pTKCkgKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJ0aGlzLnJlY2VpdmVfYXNzZXQuaXNzdWVyOiBcIiwgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LnRvSlMoKSApXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcIndpdGhkcmF3X2Fzc2V0X1wiICtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKSArXG4gICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhdygpIHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbXB0eVJvdyA9IDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIiwgbWluSGVpZ2h0OiAxNTB9fSAvPjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXRcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzX29iamVjdCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcblxuICAgICAgICAvLyBsZXQgYmFsYW5jZSA9IFwiMCBcIiArIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpIHtcbiAgICAgICAgICAgIGxldCBoYXNfbm9uemVyb19iYWxhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3RfaWQgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZV9vYmplY3RfaWQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGJhbGFuY2Vfb2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlICE9IDApIGhhc19ub256ZXJvX2JhbGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzX25vbnplcm9fYmFsYW5jZSkgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC50b0pTKCk7XG4gICAgICAgIC8vIGxldCBhc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpO1xuICAgICAgICAvLyBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIC8vICAgICBpZiggY3VycmVudF9hc3NldF9pZCApXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgYmFsYW5jZSA9ICg8c3Bhbj48VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIvPjogPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX0vPjwvc3Bhbj4pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NvdW50X25hbWUgPT09IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAvKiAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZVxuICAgICAgICAgICAgKTsqL1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vcykge1xuICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcXJjb2RlID0gdGhpcy5zdGF0ZS5xcmNvZGU7XG4gICAgICAgIGxldCBkZXBvc2l0Q29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucyAmJiB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImlycmV2ZXJzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5sYXN0X2lycmV2ZXJzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd2l0aGRyYXdfbW9kYWxfaWQgPSB0aGlzLmdldFdpdGhkcmF3TW9kYWxJZCgpO1xuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGRlcG9zaXRfbWVtbyA9IG51bGw7XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IDxzcGFuPnBsZWFzZSB1c2Uge3RoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZi5nZXQoXCJzeW1ib2xcIil9IGluc3RlYWQuIDxzcGFuIGRhdGEtdGlwPXt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfbWVzc2FnZX0gZGF0YS1wbGFjZT1cInJpZ2h0XCIgZGF0YS1odG1sPXt0cnVlfT48SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIiAvPjwvc3Bhbj48UmVhY3RUb29sdGlwIC8+PC9zcGFuPjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgbGV0IGNsaXBib2FyZFRleHQgPSBcIlwiO1xuICAgICAgICBsZXQgbWVtb1RleHQ7XG4gICAgICAgIGxldCB3aXRoZHJhd19tZW1vX3ByZWZpeDtcbiAgICAgICAgbGV0IGN1cnJlbnRHYXRld2F5ID0gXCJSVURFWFwiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIWF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5zaW1wbGVBc3NldEdhdGV3YXkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudH08L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50O1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5tZW1vVHlwZSAmJiB0aGlzLnByb3BzLm1lbW9UeXBlID09PSBcImJ0c2lkXCIpIHtcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmRfYnRzaWRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLnJlcGxhY2UoXCIxLjIuXCIsIFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1wiYXBwZW5kXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwb3NpdF9tZW1vID0gPHNwYW4+e21lbW9UZXh0fTwvc3Bhbj47XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUgKyBcIjpcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoIXJlY2VpdmVfYWRkcmVzcyB8fCAhcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyBhIGRlcG9zaXQgbWVtbyAobGlrZSBldGhlcmV1bSksIHdlIG5lZWQgdG8gZGlzcGxheSBib3RoIHRoZSBhZGRyZXNzIGFuZCB0aGUgbWVtbyB0aGV5IG5lZWQgdG8gc2VuZFxuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLm1lbW87XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPntyZWNlaXZlX2FkZHJlc3MubWVtb308L3NwYW4+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyB1bmlxdWUgZGVwb3NpdCBhZGRyZXNzZXMgdG8gc2VsZWN0IHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3RoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0Q29uZmlybWF0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGk+e2RlcG9zaXRDb25maXJtYXRpb259PC9pPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwiLCBmb250U2l6ZTogXCIxLjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBRERSRVNTOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzYWJsZUNvcHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvcHlUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS51c2VfY29weV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfYWRkcmVzc19mcmFnbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2hvd1FyY29kZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwucXJjb2RlLmxhYmVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9tZW1vID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb3B5VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkudXNlX2NvcHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1FTU86IDxiPntkZXBvc2l0X21lbW99PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXNhYmxlQ29weVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TaG93UXJjb2RlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5xcmNvZGUubGFiZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZVFyTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc1FyTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZVFyTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXBvc2l0UXJDb2RlTW9kYWwgdGV4dD17cXJjb2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y2xpcGJvYXJkVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuX25vdGlmeShcImFkZHJlc3NcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vVGV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXttZW1vVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuX25vdGlmeShcIm1lbW9cIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5Db3B5IG1lbW88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fd2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5XaGVuIHlvdSB3aXRoZHJhdyB7dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKX0sIHlvdSB3aWxsIHJlY2VpdmUge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH0gYXQgYSAxOjEgcmF0aW8gKG1pbnVzIGZlZXMpLjwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIxLjNyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25XaXRoZHJhdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19ub3dcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS53aXRoZHJhd19jb2luXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luOiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhXaXRoZHJhd01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc2hvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3Vlcj17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX25hbWU9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX3N5bWJvbD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGU9e3RoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X3dhbGxldF90eXBlPXt0aGlzLnByb3BzLmRlcG9zaXRfd2FsbGV0X3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X3N1cHBvcnRzX21lbW9zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdXBwb3J0c19vdXRwdXRfbWVtb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X3N1cHBvcnRzUHVibGljS2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vX3ByZWZpeD17d2l0aGRyYXdfbWVtb19wcmVmaXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxfaWQ9e3dpdGhkcmF3X21vZGFsX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl9hbW91bnQ9e3RoaXMucHJvcHMubWluX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRlRmVlPXt0aGlzLnByb3BzLmdhdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfcHJlY2lzaW9uPXt0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIERlcG9zaXRRckNvZGVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnByb3BzLnRleHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICA8UVJDb2RlIHNpemU9ezIwMH0gdmFsdWU9e3RleHR9IC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJub25lXCJ9fT57dGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgRGlzYWJsZUNvcHlUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgZGlzYWJsZUNvcHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHJlcGxhY2VDb3B5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ29weSA9IHRoaXMuX2hhbmRsZUNvcHkuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZFJlZikgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5jaGlsZFJlZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2hhbmRsZUNvcHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5faGFuZGxlQ29weSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUNvcHkoZXZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUNvcHkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZXZ0LmNsaXBib2FyZERhdGEuc2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQvcGxhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiByZWY9e3JlZiA9PiAodGhpcy5jaGlsZFJlZiA9IHJlZil9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNhYmxlQ29weVRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XG5pbXBvcnQge3ZhbGlkYXRlQWRkcmVzcywgV2l0aGRyYXdBZGRyZXNzZXN9IGZyb20gXCJjb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luYywgY2hlY2tCYWxhbmNlfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtCdXR0b24sIE1vZGFsfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIFJ1RGV4V2l0aGRyYXdNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNzdWVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvdXRwdXRfd2FsbGV0X3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X3N1cHBvcnRzUHVibGljS2V5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBhbW91bnRfdG9fd2l0aGRyYXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRoaXMucHJvcHMuYW1vdW50X3RvX3dpdGhkcmF3LFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcbiAgICAgICAgICAgICAgICBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5OiBcIlwiLFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTogdGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgbWVtbzogXCJcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IHByb3BzLmFjY291bnQsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6XG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldChwcm9wcy5mZWVfYXNzZXRfc3ltYm9sKSB8fFxuICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcbiAgICAgICAgICAgIGZlZVN0YXR1czoge31cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLCBwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NoZWNrTWluQW1vdW50ID0gdGhpcy5fY2hlY2tNaW5BbW91bnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlID0gZGVib3VuY2UodGhpcy5fdXBkYXRlRmVlLmJpbmQodGhpcyksIDI1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwgPSB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bk1vdW50ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQgJiZcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IG5wLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1czoge30sXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogbmV3IEFzc2V0KHthbW91bnQ6IDB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpcm1hdGlvbk1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVDb25maXJtYXRpb25Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUZlZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgbGV0IHtmZWVfYXNzZXRfaWQsIGZyb21fYWNjb3VudH0gPSBzdGF0ZTtcbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXNbMF0gIT09IGZlZV9hc3NldF9pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCA9IGZlZV9hc3NldF90eXBlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZnJvbV9hY2NvdW50KSByZXR1cm4gbnVsbDtcbiAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICBhY2NvdW50SUQ6IGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGZlZUlEOiBmZWVfYXNzZXRfaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1lbW8gPyBcIjpcIiArIHN0YXRlLm1lbW8gOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCh7ZmVlLCBoYXNCYWxhbmNlLCBoYXNQb29sQmFsYW5jZX0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVuTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBmZWUsXG4gICAgICAgICAgICAgICAgICAgIGhhc0JhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGhhc1Bvb2xCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogIWhhc0JhbGFuY2UgfHwgIWhhc1Bvb2xCYWxhbmNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja0ZlZVN0YXR1cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgbGV0IGFjY291bnQgPSBzdGF0ZS5mcm9tX2FjY291bnQ7XG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHtmZWVfYXNzZXRfdHlwZXM6IGFzc2V0c30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xuICAgICAgICAvLyBjb25zdCBhc3NldHMgPSBbXCIxLjMuMFwiLCB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTtcbiAgICAgICAgbGV0IGZlZVN0YXR1cyA9IHt9O1xuICAgICAgICBsZXQgcCA9IFtdO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIHAucHVzaChcbiAgICAgICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBmZWVJRDogYSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1lbW8gPyBcIjpcIiArIHN0YXRlLm1lbW8gOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICBQcm9taXNlLmFsbChwKVxuICAgICAgICAgICAgLnRoZW4oc3RhdHVzID0+IHtcbiAgICAgICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgoYSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thXSA9IHN0YXR1c1tpZHhdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1lbW9DaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogZS50YXJnZXQudmFsdWV9LCB0aGlzLl91cGRhdGVGZWUpO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXdBbW91bnRDaGFuZ2Uoe2Ftb3VudH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgIXBhcnNlRmxvYXQoYW1vdW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja01pbkFtb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q2hhbmdlZChpbmRleCkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApW2luZGV4XTtcbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQoZSkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZChlKSB7XG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfcHVibGljS2V5ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleTogbmV3X3dpdGhkcmF3X3B1YmxpY0tleSxcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHk6XG4gICAgICAgICAgICAgICAgbmV3X3dpdGhkcmF3X3B1YmxpY0tleSAhPSBcIlwiID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe1xuICAgICAgICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICAgICAgICB3YWxsZXRUeXBlOiBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBuZXdBZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICB9KS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAganNvbiA9IHtpc1ZhbGlkOiBmYWxzZX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzID09PSBuZXdfd2l0aGRyYXdfYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDoganNvbi5pc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IGpzb24uaGFzT3duUHJvcGVydHkoXCJwdWJsaWNLZXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ganNvbi5wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTogdGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBqc29uLmhhc093blByb3BlcnR5KFwicHVibGljS2V5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja0JhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIHdpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGJhbGFuY2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFiYWxhbmNlIHx8ICFmZWVBbW91bnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICAgICAgYmFsYW5jZVxuICAgICAgICApO1xuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6ICFoYXNCYWxhbmNlfSk7XG4gICAgICAgIHJldHVybiBoYXNCYWxhbmNlO1xuICAgIH1cblxuICAgIF9jaGVja01pbkFtb3VudCgpIHtcbiAgICAgICAgY29uc3Qge3dpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICh3aXRoZHJhd19hbW91bnQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbGVzc1RoYW5NaW5pbXVtID1cbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCA8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24pO1xuICAgICAgICAvKiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKVxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbkFtb3VudEVycm9yOiBsZXNzVGhhbk1pbmltdW19KTtcbiAgICAgICAgcmV0dXJuIGxlc3NUaGFuTWluaW11bTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxuICAgICAgICAgICAgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFsOiBhbW91bnRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgdGhpcy5zdGF0ZS53aXRoZHJhd19wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgbmV3IEJ1ZmZlcih0aGlzLnN0YXRlLm1lbW8sIFwidXRmLThcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCgpO1xuXG4gICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG4gICAgICAgIGxldCBwcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgIGxldCBhbW91bnQgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoYW1vdW50ICogcHJlY2lzaW9uLCAxMCksXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGZlZUFtb3VudCA/IGZlZUFtb3VudC5hc3NldF9pZCA6IGZlZV9hc3NldF9pZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRHJvcERvd25MaXN0KCkge1xuICAgICAgICBpZiAoV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2l0aGRyYXdfYWRkcmVzc19maXJzdDogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XG4gICAgICAgIHJldHVybiBcImNvbmZpcm1hdGlvblwiO1xuICAgIH1cblxuICAgIG9uQWNjb3VudEJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKSkuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU3VidHJhY3QgdGhlIGZlZSBpZiBpdCBpcyB1c2luZyB0aGUgc2FtZSBhc3NldFxuICAgICAgICAgICAgaWYgKHRvdGFsLmFzc2V0X2lkID09PSBmZWVBbW91bnQuYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICB0b3RhbC5taW51cyhmZWVBbW91bnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0b3RhbC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXROZXN0ZWRSZWYocmVmKSB7XG4gICAgICAgIHRoaXMubmVzdGVkUmVmID0gcmVmO1xuICAgIH1cblxuICAgIG9uRmVlQ2hhbmdlZCh7YXNzZXR9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHtmcm9tX2FjY291bnQsIGZlZVN0YXR1c30gPSBzdGF0ZTtcblxuICAgICAgICBmdW5jdGlvbiBoYXNGZWVQb29sQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmVlX2Fzc2V0X3R5cGVzID0gW107XG4gICAgICAgIGlmICghKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2ZlZV9hc3NldF90eXBlc307XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldE9iamVjdChrZXkpO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50X2JhbGFuY2VzW2tleV0pO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5zcGxpY2UoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGFzc2V0cyB0aGF0IGRvIG5vdCBoYXZlIHZhbGlkIGNvcmUgZXhjaGFuZ2UgcmF0ZXNcbiAgICAgICAgICAgICAgICBsZXQgcHJpY2VJc1ZhbGlkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbmV3IEFzc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gcC5pc1ZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhc3NldC5nZXQoXCJpZFwiKSAhPT0gXCIxLjMuMFwiICYmICFwcmljZUlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBmZWVfYXNzZXRfdHlwZXMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZVBvb2xCYWxhbmNlKGEpICYmIGhhc0JhbGFuY2UoYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZCwgd2l0aGRyYXdfcHVibGljS2V5LCBtZW1vfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBzdG9yZWRBZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgbGV0IGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcyk7XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3TW9kYWxJZCA9IHRoaXMuZ2V0V2l0aGRyYXdNb2RhbElkKCk7XG4gICAgICAgIGxldCBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IG51bGw7XG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbmZpcm1hdGlvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhc3RvcmVkQWRkcmVzcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicnVkZXgtZGlzYWJsZWQtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJ1ZGV4LW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVkQWRkcmVzcy5tYXAoZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENvbmZpcm1hdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuY29uZmlybWF0aW9uLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpXG4gICAgICAgICAgICAvLyAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gPEljb24gbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIiB0aXRsZT1cImljb25zLmNoZWNrbWFya19jaXJjbGUub3BlcmF0aW9uX3N1Y2NlZWRcIiBjbGFzc05hbWU9XCJzdWNjZXNzXCIgLz47XG4gICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyAgIGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gPEljb24gbmFtZT1cImNyb3NzLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMuY3Jvc3NfY2lyY2xlLm9wZXJhdGlvbl9mYWlsZWRcIiBjbGFzc05hbWU9XCJhbGVydFwiIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcbiAgICAgICAgbGV0IHdpdGhkcmF3X21lbW8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c19tZW1vcykge1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtbyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLm1lbW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXN0aW1hdGUgZmVlIFZBUklBQkxFU1xuICAgICAgICBsZXQge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcblxuICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF07XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldC1jdXJzb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NvdW50QmFsYW5jZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGZ1bGwtd2lkdGgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjBweFwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaXRoZHJhdyBhbW91bnQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJtb2RhbC53aXRoZHJhdy5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdBbW91bnRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1wdHlfd2l0aGRyYXdfdmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLnZhbGlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1pbkFtb3VudEVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudF9lcnJvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1tYXJnaW5cIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGZWUgc2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWVBbW91bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgZ2F0ZV9mZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e3RoaXMuc2V0TmVzdGVkUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmdldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUuZmVlQW1vdW50LmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2ZlZV9hc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0ZlZUJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc1Bvb2xCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vUG9vbEJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEdhdGUgZmVlICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5nYXRlRmVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvciByaWdodC1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5mZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9jb2luX3N5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtc2VsZWN0LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5vbkRyb3BEb3duTGlzdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjOTY2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXBvc2l0aW9uLW9wdGlvbnNcIj57b3B0aW9uc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIGZvciBQdWJsaWNLZXkgaW5wdXQgKGV4LlBSSVpNKSAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibW9kYWwud2l0aGRyYXcucHVibGljX2tleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXNlbGVjdC1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd19wdWJsaWNLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uV2l0aGRyYXdQdWJsaWNLZXlDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7LyogTWVtbyBpbnB1dCAqL31cbiAgICAgICAgICAgICAgICAgICAge3dpdGhkcmF3X21lbW99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFdpdGhkcmF3L0NhbmNlbCBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbkFtb3VudEVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnBlcm0uY2FuY2VsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybWF0aW9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUnVEZXhXaXRoZHJhd01vZGFsID0gQmluZFRvQ2hhaW5TdGF0ZShSdURleFdpdGhkcmF3TW9kYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJ1RGV4V2l0aGRyYXdNb2RhbCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJmZWVfYXNzZXRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IGxzIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtydWRleEFQSXN9IGZyb20gXCJhcGkvYXBpQ29uZmlnXCI7XG5jb25zdCBydWRleFN0b3JhZ2UgPSBuZXcgbHMoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvaW5MaXN0KHVybCA9IHJ1ZGV4QVBJcy5CQVNFICsgcnVkZXhBUElzLkNPSU5TX0xJU1QpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kOiBcInBvc3RcIn0pXG4gICAgICAgIC50aGVuKHJlcGx5ID0+XG4gICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmZXRjaGluZyBydWRleCBsaXN0IG9mIGNvaW5zXCIsIGVyciwgdXJsKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGVwb3NpdEFkZHJlc3Moe1xuICAgIGlucHV0Q29pblR5cGUsXG4gICAgb3V0cHV0Q29pblR5cGUsXG4gICAgb3V0cHV0QWRkcmVzcyxcbiAgICB1cmwgPSBydWRleEFQSXMuQkFTRSxcbiAgICBzdGF0ZUNhbGxiYWNrXG59KSB7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICAgIGlucHV0Q29pblR5cGUsXG4gICAgICAgIG91dHB1dENvaW5UeXBlLFxuICAgICAgICBvdXRwdXRBZGRyZXNzXG4gICAgfTtcblxuICAgIGxldCBib2R5X3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgZmV0Y2godXJsICsgcnVkZXhBUElzLk5FV19ERVBPU0lUX0FERFJFU1MsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBib2R5X3N0cmluZ1xuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInJlcGx5OiBcIiwganNvbiApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBqc29uLmlucHV0QWRkcmVzcyB8fCBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vOiBqc29uLmlucHV0TWVtbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoganNvbi5lcnJvciB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcImVycm9yOiBcIixlcnJvciAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWRkcmVzcyh7XG4gICAgdXJsID0gcnVkZXhBUElzLkJBU0UsXG4gICAgd2FsbGV0VHlwZSxcbiAgICBuZXdBZGRyZXNzXG59KSB7XG4gICAgaWYgKCFuZXdBZGRyZXNzKSByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcygpKTtcbiAgICByZXR1cm4gZmV0Y2godXJsICsgXCIvd2FsbGV0cy9cIiArIHdhbGxldFR5cGUgKyBcIi9jaGVjay1hZGRyZXNzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7YWRkcmVzczogbmV3QWRkcmVzc30pXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVwbHkgPT4gcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiBqc29uKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzV2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5oYXMoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gKTtcbn1cblxuZnVuY3Rpb24gc2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh7d2FsbGV0LCBhZGRyZXNzZXN9KSB7XG4gICAgcnVkZXhTdG9yYWdlLnNldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIGFkZHJlc3Nlcyk7XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhkcmF3YWxBZGRyZXNzZXMod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyh7d2FsbGV0LCBhZGRyZXNzfSkge1xuICAgIHJ1ZGV4U3RvcmFnZS5zZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIGFkZHJlc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIFwiXCIpO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aGRyYXdBZGRyZXNzZXMgPSB7XG4gICAgaGFzOiBoYXNXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBzZXQ6IHNldFdpdGhkcmF3YWxBZGRyZXNzZXMsXG4gICAgZ2V0OiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxuICAgIHNldExhc3Q6IHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBnZXRMYXN0OiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Ncbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XHJcblxyXG4vKipcclxuICogIEdpdmVuIGEgYmFsYW5jZV9vYmplY3QsIGRpc3BsYXlzIGl0IGluIGEgcHJldHR5IHdheVxyXG4gKlxyXG4gKiAgRXhwZWN0cyBvbmUgcHJvcGVydHksICdiYWxhbmNlJyB3aGljaCBzaG91bGQgYmUgYSBiYWxhbmNlX29iamVjdCBpZFxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnRCYWxhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcclxuICAgICAgICBhc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0X2lkID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICBsZXQgYmFsYW5jZV9pZCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldF9pZF0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsYW5jZV9pZClcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YmFsYW5jZV9pZH1cclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXt0aGlzLnByb3BzLnJlcGxhY2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDAmbmJzcDs8QXNzZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXt0aGlzLnByb3BzLnJlcGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50QmFsYW5jZSk7XHJcbiIsImltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5cbmNsYXNzIFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGluY3JlbWVudCB0aGlzIHRvIGZvcmNlIGdlbmVyYXRpbmcgbmV3IGFkZHJlc3NlcyBmb3IgYWxsIG1hcHBpbmdzXG4gICAgICAgIHRoaXMuY3VycmVudF9ydWRleF9hZGRyZXNzX2NhY2hlX3ZlcnNpb25fc3RyaW5nID0gXCIxXCI7XG4gICAgfVxuXG4gICAgZ2V0SW5kZXhGb3JEZXBvc2l0S2V5SW5FeGNoYW5nZShcbiAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGVcbiAgICApIHtcbiAgICAgICAgbGV0IGFyZ3MgPSBbXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfcnVkZXhfYWRkcmVzc19jYWNoZV92ZXJzaW9uX3N0cmluZyxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KFwiW1wiLCBjdXJyZW50LCBcIl1cIik7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMge1wiYWRkcmVzc1wiOiBhZGRyZXNzLCBcIm1lbW9cIjogbWVtb30sIHdpdGggYSBudWxsIG1lbW8gaWYgbm90IGFwcGxpY2FibGVcbiAgICBnZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXG4gICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgKSB7XG4gICAgICAgIGxldCB3YWxsZXQgPSBXYWxsZXREYi5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgICk7XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xuXG4gICAgICAgIGxldCBudW1iZXJfb2Zfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdLmxlbmd0aDtcbiAgICAgICAgaWYgKG51bWJlcl9vZl9rZXlzKVxuICAgICAgICAgICAgcmV0dXJuIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdW1xuICAgICAgICAgICAgICAgIG51bWJlcl9vZl9rZXlzIC0gMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgIGV4Y2hhbmdlX25hbWUsXG4gICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBtZW1vXG4gICAgKSB7XG4gICAgICAgIGlmIChhZGRyZXNzID09PSBcInVua25vd25cIikgcmV0dXJuO1xuXG4gICAgICAgIGxldCB3YWxsZXQgPSBXYWxsZXREYi5nZXRXYWxsZXQoKTtcbiAgICAgICAgaWYgKCF3YWxsZXQpIHJldHVybiBudWxsO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzID0gd2FsbGV0LmRlcG9zaXRfa2V5cyB8fCB7fTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdIHx8IHt9O1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgICk7XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdID1cbiAgICAgICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV1baW5kZXhdIHx8IFtdO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XS5wdXNoKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICBtZW1vOiBtZW1vXG4gICAgICAgIH0pO1xuICAgICAgICBXYWxsZXREYi5fdXBkYXRlV2FsbGV0KCk7XG4gICAgfVxufSAvLyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGVcblxuZXhwb3J0IGRlZmF1bHQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpLFxuICAgIENvcHlUb0NsaXBib2FyZCA9IF9yZXF1aXJlLkNvcHlUb0NsaXBib2FyZDtcblxuQ29weVRvQ2xpcGJvYXJkLkNvcHlUb0NsaXBib2FyZCA9IENvcHlUb0NsaXBib2FyZDtcbm1vZHVsZS5leHBvcnRzID0gQ29weVRvQ2xpcGJvYXJkOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY29weVRvQ2xpcGJvYXJkID0gcmVxdWlyZSgnY29weS10by1jbGlwYm9hcmQnKTtcblxudmFyIF9jb3B5VG9DbGlwYm9hcmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29weVRvQ2xpcGJvYXJkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb3B5VG9DbGlwYm9hcmQgPSBleHBvcnRzLkNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29weVRvQ2xpcGJvYXJkLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29weVRvQ2xpcGJvYXJkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3B5VG9DbGlwYm9hcmQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENvcHlUb0NsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvcHlUb0NsaXBib2FyZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcy50ZXh0LFxuICAgICAgICAgIG9uQ29weSA9IF90aGlzJHByb3BzLm9uQ29weSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wcy5vcHRpb25zO1xuXG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIF9jb3B5VG9DbGlwYm9hcmQyLmRlZmF1bHQpKHRleHQsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob25Db3B5KSB7XG4gICAgICAgIG9uQ29weSh0ZXh0LCByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBCeXBhc3Mgb25DbGljayBpZiBpdCB3YXMgcHJlc2VudFxuICAgICAgaWYgKGVsZW0gJiYgZWxlbS5wcm9wcyAmJiB0eXBlb2YgZWxlbS5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsZW0ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29weVRvQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIF90ZXh0ID0gX3Byb3BzLnRleHQsXG4gICAgICAgICAgX29uQ29weSA9IF9wcm9wcy5vbkNvcHksXG4gICAgICAgICAgX29wdGlvbnMgPSBfcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsndGV4dCcsICdvbkNvcHknLCAnb3B0aW9ucycsICdjaGlsZHJlbiddKTtcblxuICAgICAgdmFyIGVsZW0gPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGVsZW0sIF9leHRlbmRzKHt9LCBwcm9wcywgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2sgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb3B5VG9DbGlwYm9hcmQ7XG59KF9yZWFjdDIuZGVmYXVsdC5QdXJlQ29tcG9uZW50KTtcblxuQ29weVRvQ2xpcGJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Db3B5OiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IHVuZGVmaW5lZFxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZXNlbGVjdEN1cnJlbnQgPSByZXF1aXJlKCd0b2dnbGUtc2VsZWN0aW9uJyk7XG5cbnZhciBkZWZhdWx0TWVzc2FnZSA9ICdDb3B5IHRvIGNsaXBib2FyZDogI3trZXl9LCBFbnRlcic7XG5cbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlKSB7XG4gIHZhciBjb3B5S2V5ID0gKC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAn4oyYJyA6ICdDdHJsJykgKyAnK0MnO1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8je1xccyprZXlcXHMqfS9nLCBjb3B5S2V5KTtcbn1cblxuZnVuY3Rpb24gY29weSh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBkZWJ1ZywgbWVzc2FnZSwgcmVzZWxlY3RQcmV2aW91cywgcmFuZ2UsIHNlbGVjdGlvbiwgbWFyaywgc3VjY2VzcyA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMpIHsgb3B0aW9ucyA9IHt9OyB9XG4gIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdHJ5IHtcbiAgICByZXNlbGVjdFByZXZpb3VzID0gZGVzZWxlY3RDdXJyZW50KCk7XG5cbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1hcmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIC8vIHJlc2V0IHVzZXIgc3R5bGVzIGZvciBzcGFuIGVsZW1lbnRcbiAgICBtYXJrLnN0eWxlLmFsbCA9ICd1bnNldCc7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBtYXJrLnN0eWxlLnRvcCA9IDA7XG4gICAgbWFyay5zdHlsZS5jbGlwID0gJ3JlY3QoMCwgMCwgMCwgMCknO1xuICAgIC8vIHVzZWQgdG8gcHJlc2VydmUgc3BhY2VzIGFuZCBsaW5lIGJyZWFrc1xuICAgIG1hcmsuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcbiAgICBtYXJrLnN0eWxlLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS5tc1VzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gJ3RleHQnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGUobWFyayk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29weSBjb21tYW5kIHdhcyB1bnN1Y2Nlc3NmdWwnKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjb3B5IHVzaW5nIGV4ZWNDb21tYW5kOiAnLCBlcnIpO1xuICAgIGRlYnVnICYmIGNvbnNvbGUud2FybigndHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmJyk7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQnLCB0ZXh0KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNvcHkgdXNpbmcgY2xpcGJvYXJkRGF0YTogJywgZXJyKTtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ2ZhbGxpbmcgYmFjayB0byBwcm9tcHQnKTtcbiAgICAgIG1lc3NhZ2UgPSBmb3JtYXQoJ21lc3NhZ2UnIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVSYW5nZShyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFyayk7XG4gICAgfVxuICAgIHJlc2VsZWN0UHJldmlvdXMoKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuaW1wb3J0IFJhaWRvRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4vUmFpZG9EZXBvc2l0UmVxdWVzdFwiO1xuXG5jbGFzcyBSYWlkb0ZpbmFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHthY3Rpb246IFwiZGVwb3NpdFwifSksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblJhaWRvXCIsIFwiZGVwb3NpdFwiKSxcblxuICAgICAgICAgICAgYWN0aXZlUGF5bWVudE1ldGhvZDogXCJDQVJERVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbiA9IHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zZXRBY3RpdmVSYWlkb0NvaW4obWV0aCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVQYXltZW50TWV0aG9kOiBtZXRofSk7XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fUmFpZG9cIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJCVENcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucHJvdmlkZXIgIT09IHRoaXMucHJvcHMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4obmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGNvaW5OYW1lID0gdGhpcy5fZmluZENvaW5CeVN5bWJvbCh0aGlzLnByb3BzLCBjb2luTmFtZSkuYmFja2luZ0NvaW47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ1tcImFjdGl2ZUNvaW5fUmFpZG9cIl0gPSBjb2luTmFtZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5TmFtZShwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzLmNvaW5zWzBdO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5U3ltYm9sKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2luID0gcHJvcHMuY29pbnNbaV07XG4gICAgICAgICAgICBpZiAoY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSB0aGlzLl9nZXRBY3RpdmVDb2luKHRoaXMucHJvcHMsIHthY3Rpb246IHR5cGV9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGFjdGl2ZUNvaW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtbXCJydWRleEFjdGlvblJhaWRvXCJdOiB0eXBlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NvaW5zLCBhY2NvdW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlQ29pbiwgYWN0aW9ufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFjb2lucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmaWx0ZXJlZENvaW5zID0gY29pbnMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgaWYgKCFhIHx8ICFhLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBhLmRlcG9zaXRBbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgIDogYS53aXRoZHJhd2FsQWxsb3dlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW5PcHRpb25zID0gZmlsdGVyZWRDb2luc1xuICAgICAgICAgICAgLm1hcChjb2luID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY29pbi5zeW1ib2w7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IG9wdGlvbi5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVmaXggPSBuYW1lID09PSBcIlBQWVwiID8gXCJcIiA6IFwiUlVERVguXCI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcmVmaXggKyBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbiA9IGZpbHRlcmVkQ29pbnMuZmlsdGVyKGNvaW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gYWN0aXZlQ29pblxuICAgICAgICAgICAgICAgIDogY29pbi5zeW1ib2wgPT09IGFjdGl2ZUNvaW47XG4gICAgICAgIH0pWzBdO1xuXG4gICAgICAgIGlmICghY29pbikgY29pbiA9IGZpbHRlcmVkQ29pbnNbMF07XG5cbiAgICAgICAgbGV0IGlzRGVwb3NpdCA9IHRoaXMuc3RhdGUuYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBsZXQgc3VwcG9ydFVybCA9IFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbkhlaWdodDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmNob29zZV9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUNvaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvaW5PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L1NlbGVjdD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfdGV4dFwiIC8+OiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by50aXRsZV90YWJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwid2l0aGRyYXdcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyFjb2luID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvRGVwb3NpdFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2luLnN5bWJvbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRld2F5PXtjb2luLmdhdGV3YXlXYWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50PXtjb2luLmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldD17Y29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU9e2NvaW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU9e2NvaW4uYmFja2luZ0NvaW4udG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hY2NvdW50PXtjb2luLmdhdGV3YXlXYWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2NvaW5fdHlwZT17Y29pbi5zeW1ib2wudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1R5cGU9e2NvaW4ubWVtb1R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl9hbW91bnQ9e2NvaW4ubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zPXtjb2luLmNvbmZpcm1hdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5zdGF0ZS5hY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBheW1lbnRNZXRob2Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVQYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUmFpZG9Db2luPXttID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRBY3RpdmVSYWlkb0NvaW4obSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnN1cHBvcnRfYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4gJiYgY29pbi5zeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXQsIHRvLCBmcm9tQWNjb3VudH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e0ltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmlsdGVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNhY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJhaWRvRmluYW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29pbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCVENcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpdGNvaW4gLSBCVENcIixcbiAgICAgICAgICAgIGJhY2tpbmdDb2luOiBcIkJUQ1wiLFxuICAgICAgICAgICAgc3ltYm9sOiBcIlJVREVYLkJUQ1wiLFxuICAgICAgICAgICAgZGVwb3NpdEFsbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICAvL1wid2l0aGRyYXdhbEFsbG93ZWRcIjogdHJ1ZSxcblxuICAgICAgICAgICAgaXNzdWVyOiBcInJ1ZGV4LWJpdGNvaW5cIixcbiAgICAgICAgICAgIGlzc3VlcklkOiBcIjEuMi44NTI1ODlcIixcbiAgICAgICAgICAgIC8vXCJtaW5BbW91bnRcIjogMTgwMDAwLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJFVEhcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV0aGVyZXVtIC0gRVRIXCIsXG4gICAgICAgICAgICBiYWNraW5nQ29pbjogXCJFVEhcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5FVEhcIixcbiAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIGlzc3VlcjogXCJydWRleC1ldGhlcmV1bVwiLFxuICAgICAgICAgICAgaXNzdWVySWQ6IFwiMS4yLjg1MjgyM1wiLFxuICAgICAgICAgICAgLy9cIm1pbkFtb3VudFwiOiA1MDAwMDAsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJVU0RUXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXRoZXIgLSBVU0RUIChvbiBFdGhlcmV1bSlcIixcbiAgICAgICAgICAgIGJhY2tpbmdDb2luOiBcIlVTRFRcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgICAgICBkZXBvc2l0QWxsb3dlZDogdHJ1ZSxcbiAgICAgICAgICAgIC8vXCJ3aXRoZHJhd2FsQWxsb3dlZFwiOiB0cnVlLFxuXG4gICAgICAgICAgICBpc3N1ZXI6IFwicnVkZXgtdXNkdFwiLFxuICAgICAgICAgICAgaXNzdWVySWQ6IFwiMS4yLjkyNzQ1OFwiLFxuICAgICAgICAgICAgLy9cIm1pbkFtb3VudFwiOiA1MDAwMDAsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgUmFpZG9GaW5hbmNlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtyZXF1ZXN0RGVwb3NpdEFkZHJlc3N9IGZyb20gXCJsaWIvY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IEFjY291bnRCYWxhbmNlIGZyb20gXCIuLi8uLi8uLi9BY2NvdW50L0FjY291bnRCYWxhbmNlXCI7XG5pbXBvcnQgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlIGZyb20gXCJjb21tb24vUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQge2F2YWlsYWJsZUdhdGV3YXlzfSBmcm9tIFwibGliL2NvbW1vbi9nYXRld2F5c1wiO1xuXG4vL1JBSURPXG5pbXBvcnQgUmFpZG9QYXltZW50TWV0aG9kIGZyb20gXCIuL1JhaWRvUGF5bWVudE1ldGhvZFwiO1xuaW1wb3J0IFwiLi9SYWlkby5jc3NcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuY2xhc3MgUmFpZG9EZXBvc2l0UmVxdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2F0ZXdheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWNlaXZlX2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGlzc3Vlcl9hY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgZGVwb3NpdF9hc3NldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX2luX2Zhdm9yX29mOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWluX2Ftb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgY29uZmlybWF0aW9uczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50X25hbWU6IG51bGwsXG5cbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgbWVtbzogbnVsbFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0QWxsb3dlZDogZmFsc2UsXG4gICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpcmVjdDogXCJtaW5cIiAvL01JTiBvciBNQVhcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEFtb3VudDogMCxcbiAgICAgICAgICAgIGdpdmVBbW91bnQ6IDAsXG5cbiAgICAgICAgICAgIHJhaWRvOiB7XG4gICAgICAgICAgICAgICAgYWZmaWxpYXRlX2lkOiAxMDA1OCxcblxuICAgICAgICAgICAgICAgIGdpdmVfcmF3OiB0aGlzLnByb3BzLmFjdGl2ZVBheW1lbnRNZXRob2QsIC8vZmlhdHNcbiAgICAgICAgICAgICAgICBnaXZlOiB0aGlzLnByb3BzLmFjdGl2ZVBheW1lbnRNZXRob2QsXG4gICAgICAgICAgICAgICAgZ2l2ZV9kZWNpbWFsOiA1LFxuXG4gICAgICAgICAgICAgICAgLy9nZXQ6IFwiQlRDXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICBnZXRfZGVjaW1hbDogNSxcblxuICAgICAgICAgICAgICAgIHByaWNlOiAxLFxuXG4gICAgICAgICAgICAgICAgaW46IG51bGwsXG4gICAgICAgICAgICAgICAgb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIGluX21pbl9mZWU6IDAsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfZmVlOiAwLFxuXG4gICAgICAgICAgICAgICAgaW5fZmVlOiAwLFxuICAgICAgICAgICAgICAgIGNvbW1pc3Npb246IDAsXG5cbiAgICAgICAgICAgICAgICBtaW5fZGVwb3NpdDogMCxcbiAgICAgICAgICAgICAgICBtYXhfZGVwb3NpdDogMTAwMDAwMCxcblxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJidXlcIiwgLy9CVVkgb3IgU0VMTFxuXG4gICAgICAgICAgICAgICAgY3VycmVuY2llczogW10sXG4gICAgICAgICAgICAgICAgcHJpY2VzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MgPSB0aGlzLmFkZERlcG9zaXRBZGRyZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX21ha2VVcmlSYWlkbyA9IHRoaXMuX21ha2VVcmlSYWlkby5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3NldENvaW5zUmFpZG8gPSB0aGlzLl9zZXRDb2luc1JhaWRvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3NldFByaWNlc1JhaWRvID0gdGhpcy5fc2V0UHJpY2VzUmFpZG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faW5pdFByaWNlcyA9IHRoaXMuX2luaXRQcmljZXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZCA9IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdEN1cnJlbmNpZXModGhpcy5fc2V0Q29pbnNSYWlkbyk7XG4gICAgfVxuXG4gICAgaW5pdEN1cnJlbmNpZXMoc3RhdGVDYWxsYmFjaykge1xuICAgICAgICBsZXQgY29pbnMgPVxuICAgICAgICAgICAgXCJodHRwczovL21lcmNoYW50LWRhdGFjZW50ZXIucmFpZG9maW5hbmNlLmV1OjgwOTUvY3VycmVuY2llcy9cIjtcbiAgICAgICAgZmV0Y2goY29pbnMsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwifSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcGx5ID0+IHtcbiAgICAgICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldENvaW5zUmFpZG8oY3VycmVuY2llcykge1xuICAgICAgICBjdXJyZW5jaWVzID0gY3VycmVuY2llcy5yb3dzO1xuXG4gICAgICAgIGxldCBjdXJyX2NvaW5fb3JpZ2luYWwgPSB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZTtcbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW5jaWVzW2ldLmNvZGUgPT09IGN1cnJfY29pbl9vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2l0aGRyYXdfZmVlOiBcIiArIGN1cnJlbmNpZXNbaV0ud2l0aGRyYXdfZmVlKTtcblxuICAgICAgICAgICAgICAgIHJhaWRvLmdpdmUgPSB0aGlzLnN0YXRlLnJhaWRvLmdpdmU7XG4gICAgICAgICAgICAgICAgcmFpZG8uZ2V0ID0gY3VycmVuY2llc1tpXS5jb2RlO1xuXG4gICAgICAgICAgICAgICAgcmFpZG8uY3VycmVuY2llcyA9IGN1cnJlbmNpZXM7XG5cbiAgICAgICAgICAgICAgICAvL3JhaWRvLmluX2VuYWJsZSA9IGN1cnJlbmNpZXNbaV0uaW5fZW5hYmxlOy8vVE9ET1xuICAgICAgICAgICAgICAgIHJhaWRvLm91dCA9IGN1cnJlbmNpZXNbaV0uaWQ7XG4gICAgICAgICAgICAgICAgcmFpZG8ubWluX2RlcG9zaXQgPSBjdXJyZW5jaWVzW2ldLm1pbl9kZXBvc2l0O1xuICAgICAgICAgICAgICAgIHJhaWRvLm1heF9kZXBvc2l0ID0gY3VycmVuY2llc1tpXS5tYXhfZGVwb3NpdDtcbiAgICAgICAgICAgICAgICByYWlkby53aXRoZHJhd19mZWUgPSBjdXJyZW5jaWVzW2ldLndpdGhkcmF3X2ZlZTtcblxuICAgICAgICAgICAgICAgIHJhaWRvLmdpdmVfZGVjaW1hbCA9IGN1cnJlbmNpZXNbaV0uZGVjaW1hbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdFByaWNlcyh0aGlzLl9zZXRQcmljZXNSYWlkbyk7XG4gICAgfVxuXG4gICAgX2luaXRQcmljZXMoc3RhdGVDYWxsYmFjaykge1xuICAgICAgICBsZXQgcHJpY2VzID0gXCJodHRwczovL21lcmNoYW50LWRhdGFjZW50ZXIucmFpZG9maW5hbmNlLmV1OjgwOTUvcHJpY2VzL1wiO1xuXG4gICAgICAgIGZldGNoKHByaWNlcywge1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe0FjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaykgc3RhdGVDYWxsYmFjayhqc29uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0UHJpY2VzUmFpZG8ocHJpY2VzKSB7XG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG4gICAgICAgIGxldCBjdXJyZW5jaWVzID0gcmFpZG8uY3VycmVuY2llcztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW5jaWVzW2ldLmNvZGUgPT09IHJhaWRvLmdpdmVfcmF3KSB7XG4gICAgICAgICAgICAgICAgLy9pZiAoY3VycmVuY2llc1tpXS5jdXIgPT09IHJhaWRvLmdpdmVfcmF3KSB7XG4gICAgICAgICAgICAgICAgcmFpZG8uY29tbWlzc2lvbiA9IHBhcnNlRmxvYXQoY3VycmVuY2llc1tpXS5jb21taXNzaW9uKTtcbiAgICAgICAgICAgICAgICByYWlkby5pbl9mZWUgPSBwYXJzZUZsb2F0KGN1cnJlbmNpZXNbaV0uaW5fZmVlKTtcbiAgICAgICAgICAgICAgICByYWlkby5pbl9taW5fZmVlID0gcGFyc2VGbG9hdChjdXJyZW5jaWVzW2ldLmluX21pbl9mZWUpO1xuICAgICAgICAgICAgICAgIHJhaWRvLmdldF9kZWNpbWFsID0gY3VycmVuY2llc1tpXS5kZWNpbWFsO1xuICAgICAgICAgICAgICAgIHJhaWRvLmdpdmUgPSBjdXJyZW5jaWVzW2ldLmN1cjtcbiAgICAgICAgICAgICAgICByYWlkby5pbiA9IGN1cnJlbmNpZXNbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkb30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhaXIgPSByYWlkby5nZXQgKyBcIlwiICsgcmFpZG8uZ2l2ZTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHJhaWRvLmRpcmVjdGlvbjtcblxuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZXNbcGFpcl1bZGlyZWN0aW9uXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmljZTogXCIgKyBwcmljZSk7XG5cbiAgICAgICAgaWYgKHByaWNlKSB7XG4gICAgICAgICAgICByYWlkby5wcmljZSA9IHByaWNlICogMTtcbiAgICAgICAgICAgIHJhaWRvLnByaWNlcyA9IHByaWNlcztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvOiByYWlkb30pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXCJhdXRvXCIpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSh0eXBlLCBldmVudCkge1xuICAgICAgICBsZXQgbmFtZSwgdmFsdWU7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IFwiYXV0b1wiKSB7XG4gICAgICAgICAgICBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vRGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0b2dnbGUgc3RhdGljIGdldEFtb3VudFxuICAgICAgICAgICAgbmFtZSA9IFwiZ2V0QW1vdW50XCI7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUuZ2V0QW1vdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtnZXRBbW91bnQ6IFwiXCJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dpdmVBbW91bnQ6IFwiXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUgKiAxO1xuXG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG5cbiAgICAgICAgbGV0IHJlc19nZXRBbW91bnQ7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZ2l2ZUFtb3VudFwiKSB7XG4gICAgICAgICAgICByZXNfZ2V0QW1vdW50ID1cbiAgICAgICAgICAgICAgICB2YWx1ZSAvXG4gICAgICAgICAgICAgICAgKHJhaWRvLnByaWNlIC9cbiAgICAgICAgICAgICAgICAgICAgKCgxMDAgLSAocmFpZG8uY29tbWlzc2lvbiArIHJhaWRvLmluX2ZlZSkpIC8gMTAwKSk7XG4gICAgICAgICAgICBsZXQgcmVzX2dpdmVBbW91bnQgPSB2YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2V0QW1vdW50OlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzX2dldEFtb3VudCAtIHJhaWRvLndpdGhkcmF3X2ZlZSAqIDEpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKVxuICAgICAgICAgICAgICAgICAgICApIC8gTWF0aC5wb3coMTAsIHJhaWRvLmdpdmVfZGVjaW1hbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2l2ZUFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzX2dpdmVBbW91bnQgKiBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpXG4gICAgICAgICAgICAgICAgICAgICkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImdldEFtb3VudFwiKSB7XG4gICAgICAgICAgICByZXNfZ2V0QW1vdW50ID0gdmFsdWU7XG4gICAgICAgICAgICBsZXQgcmVzX2dpdmVBbW91bnQgPVxuICAgICAgICAgICAgICAgIChyYWlkby5wcmljZSAqICh2YWx1ZSArIHJhaWRvLndpdGhkcmF3X2ZlZSAqIDEpKSAvXG4gICAgICAgICAgICAgICAgICAgICgoMTAwIC0gKHJhaWRvLmNvbW1pc3Npb24gKyByYWlkby5pbl9mZWUpKSAvIDEwMCkgK1xuICAgICAgICAgICAgICAgIHJhaWRvLmluX21pbl9mZWU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdldEFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzX2dldEFtb3VudCAqIE1hdGgucG93KDEwLCByYWlkby5naXZlX2RlY2ltYWwpXG4gICAgICAgICAgICAgICAgICAgICkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBnaXZlQW1vdW50OlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNfZ2l2ZUFtb3VudCAqIE1hdGgucG93KDEwLCByYWlkby5nZXRfZGVjaW1hbClcbiAgICAgICAgICAgICAgICAgICAgKSAvIE1hdGgucG93KDEwLCByYWlkby5nZXRfZGVjaW1hbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzX2dldEFtb3VudCA+PSByYWlkby5taW5fZGVwb3NpdCAmJlxuICAgICAgICAgICAgKHJhaWRvLm1heF9kZXBvc2l0ID09IDAgfHwgcmVzX2dldEFtb3VudCA8PSByYWlkby5tYXhfZGVwb3NpdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6IFwibWluXCIgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXRBbGxvd2VkOiB0cnVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVzX2dldEFtb3VudCA+PSByYWlkby5taW5fZGVwb3NpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6IFwibWF4XCIgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1pbl9tYXhfdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdDogXCJtaW5cIiAvL01JTiBvciBNQVhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXRBbGxvd2VkOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0U3RhdGUucmFpZG8gIT09IHRoaXMuc3RhdGUucmFpZG8gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSAhPT0gdGhpcy5wcm9wcy5nZXRBbW91bnQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5nZXRBbW91bnQgIT09IHRoaXMuc3RhdGUuZ2V0QW1vdW50IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuZ2l2ZUFtb3VudCAhPT0gdGhpcy5zdGF0ZS5naXZlQW1vdW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucmVjZWl2ZV9hc3NldCAhPT0gdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lICE9PSB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjdGlvbiAhPT0gdGhpcy5wcm9wcy5hY3Rpb24gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQYXltZW50TWV0aG9kKGUpIHtcbiAgICAgICAgbGV0IHBheU1ldGhvZCA9IGUudGFyZ2V0W1wibmFtZVwiXTtcbiAgICAgICAgbGV0IHN0ciA9IFwicGF5bWVudG1ldGhvZFwiO1xuICAgICAgICBwYXlNZXRob2QgPSBwYXlNZXRob2RcbiAgICAgICAgICAgIC5zdWJzdHIoc3RyLmxlbmd0aCArIDEsIHBheU1ldGhvZC5sZW5ndGggLSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcbiAgICAgICAgcmFpZG8uZ2l2ZV9yYXcgPSBwYXlNZXRob2Q7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmFpZG86IHJhaWRvfSk7XG5cbiAgICAgICAgdGhpcy5fc2V0UHJpY2VzUmFpZG8odGhpcy5zdGF0ZS5yYWlkby5wcmljZXMpO1xuXG4gICAgICAgIGxldCBmaW5kaW5nX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxhYmVsLmJ0bi1yYWRpb1wiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kaW5nX2VsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmaW5kaW5nX2VsW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLnByb3BzLnNldEFjdGl2ZVJhaWRvQ29pbihwYXlNZXRob2QpO1xuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiB0aGlzLmFkZERlcG9zaXRBZGRyZXNzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9uYW1lfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzc30pO1xuICAgIH1cblxuICAgIF9tYWtlVXJpUmFpZG8oKSB7XG4gICAgICAgIGxldCBzdHJVcmkgPSBcIlwiO1xuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG5cbiAgICAgICAgbGV0IG9ialBhcmFtcyA9IHtcbiAgICAgICAgICAgIGFmZmlsaWF0ZV9pZDogcmFpZG8uYWZmaWxpYXRlX2lkLFxuICAgICAgICAgICAgb2ZmZXJfaWQ6IDMsXG4gICAgICAgICAgICB2b2x1bWU6IHRoaXMuc3RhdGUuZ2l2ZUFtb3VudCxcbiAgICAgICAgICAgIGluOiByYWlkby5pbixcbiAgICAgICAgICAgIG91dDogcmFpZG8ub3V0LFxuICAgICAgICAgICAgXCJvdXQtcFwiOiByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcmFpZG8uZGlyZWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGl0ZW0gaW4gb2JqUGFyYW1zKSB7XG4gICAgICAgICAgICBzdHJVcmkgKz0gXCImXCIgKyBpdGVtICsgXCI9XCIgKyBvYmpQYXJhbXNbaXRlbV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clVyaTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdFJlcXVlc3QoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsfSk7XG4gICAgICAgIGxldCByYWlkb19saW5rID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9yYWlkb2ZpbmFuY2UuZXUvYnV5LXNlbGw/XCIgKyB0aGlzLl9tYWtlVXJpUmFpZG8oKTtcbiAgICAgICAgd2luZG93Lm9wZW4ocmFpZG9fbGluaywgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZW1wdHlSb3cgPSA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCIsIG1pbkhlaWdodDogMTUwfX0gLz47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcblxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlc19vYmplY3QgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZikge1xuICAgICAgICAgICAgbGV0IGhhc19ub256ZXJvX2JhbGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdF9pZCA9IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3RfaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX29iamVjdF9pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlID0gYmFsYW5jZV9vYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgIT0gMCkgaGFzX25vbnplcm9fYmFsYW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNfbm9uemVyb19iYWxhbmNlKSByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjY291bnRfbmFtZSA9PT0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIikpIHtcbiAgICAgICAgICAgIC8qICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlXG4gICAgICAgICAgICApOyovXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zKSB7XG4gICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXBvc2l0Q29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucyAmJiB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImlycmV2ZXJzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5sYXN0X2lycmV2ZXJzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcblxuICAgICAgICBsZXQgY3VycmVudEdhdGV3YXkgPSBcIlJVREVYXCI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLnNpbXBsZUFzc2V0R2F0ZXdheSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKCFyZWNlaXZlX2FkZHJlc3MgfHwgIXJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzKSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnN1cHBvcnRzTWVtb3NcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWNlaXZlX2FkZHJlc3MubWVtbykge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyB1bmlxdWUgZGVwb3NpdCBhZGRyZXNzZXMgdG8gc2VsZWN0IHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5kZXBvc2l0X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYnV5X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREUkVTUzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2RlcG9zaXRfYWRkcmVzc19mcmFnbWVudH08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRDb25maXJtYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpPntkZXBvc2l0Q29uZmlybWF0aW9ufTwvaT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwiLCBmb250U2l6ZTogXCIxLjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0yNCByYWlkb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbnQtY29sLTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpZG9QYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZD17XCJjYXJkdVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkJhbmsgQ2FyZCAoVVNEKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpZG9QYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZD17XCJjYXJkZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkJhbmsgQ2FyZCAoRVVSKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpZG9QYXltZW50TWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZD17XCJ3aXJlZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlNlcGEgKEVVUilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTEwIGdpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by55b3VfZ2l2ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2l2ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2l2ZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnaXZlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnlvdV9naXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcXC9pbWFnZXNcXC9yYWlkby1wYXltZW50LSR7dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhdy50b0xvd2VyQ2FzZSgpfS5wbmcpYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbnQtY29sLTEwIGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTAlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ueW91X2dldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZXRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnlvdV9nZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFxcL2Fzc2V0LXN5bWJvbHNcXC9ydWRleC4ke3RoaXMuc3RhdGUucmFpZG8uZ2V0LnRvTG93ZXJDYXNlKCl9LnBuZylgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLm1pbl9tYXhfdmFsaWRhdGUudmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyYWlkb19taW5fbWF4X3ZhbGlkYXRlIGFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmFpZG9fbWluX21heF92YWxpZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbl9tYXhfdmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlyZWN0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJhaWRvW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbl9tYXhfdmFsaWRhdGUuZGlyZWN0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gKiAxfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yYWlkby5nZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFpZG9fdGV4dF9ibG9ja1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ud2l0aGRyYXdfZmVlX2luY2x1ZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfZmVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmFpZG8ud2l0aGRyYXdfZmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUucmFpZG8uZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFpZG9fdGV4dF9ibG9ja1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYXBwcm94aW1hdGVfYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWlkb190ZXh0X2Jsb2NrXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5maW5hbF90ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0xMCBhbnQtY29sLW9mZnNldC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc3VibWl0QWxsb3dlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN1Ym1pdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXRSZXF1ZXN0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYnV5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fd2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKFJhaWRvRGVwb3NpdFJlcXVlc3QpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBSYWlkb1BheW1lbnRNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3RpdGxlLCBwYXltZW50X2lkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZS50b0xvd2VyQ2FzZSgpID09XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnRfaWQudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgICAgICBjbGFzc05uYW1lID0gXCJhY3RpdmVcIjtcbiAgICAgICAgZWxzZSBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcImJ0biBidG4tc20gYnRuLXJhZGlvXCIgKyBcIiBcIiArIGNsYXNzTm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGF5bWVudG1ldGhvZC1cIiArIHBheW1lbnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy9yYWlkby1wYXltZW50LVwiICsgcGF5bWVudF9pZCArIFwiLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhaWRvUGF5bWVudE1ldGhvZDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBRkE7QUFrQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQTZCQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQWZBO0FBVEE7QUFoQkE7QUFKQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQVpBO0FBMkJBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUE5QkE7QUFzQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFOQTtBQVNBO0FBVkE7QUFXQTtBQUNBO0FBWkE7QUFWQTtBQTBCQTtBQUNBO0FBNUJBO0FBOUZBO0FBSkE7QUFDQTtBQXNJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBb0RBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVBBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFkQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQU5BO0FBVEE7QUF6QkE7QUFEQTtBQXVEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBM0hBO0FBTEE7QUE2SUE7Ozs7QUFuZUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUE4ZEE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBUEE7QUFDQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQWhDQTtBQWtDQTtBQXZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBSEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFPQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkE7QUFEQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBTkE7QUFMQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUxBO0FBZkE7QUFEQTtBQVBBO0FBMUJBO0FBb0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBSkE7QUF6QkE7QUF3Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQWhCQTtBQThCQTtBQTdDQTtBQTFDQTtBQXRFQTtBQW9LQTs7OztBQWhUQTtBQUNBO0FBa1RBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXdCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQVBBO0FBTEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFQQTtBQUxBO0FBMUVBO0FBREE7QUFEQTtBQUxBO0FBNEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFWQTtBQURBO0FBREE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQVBBO0FBREE7QUFiQTtBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBUEE7QUFEQTtBQVZBO0FBM0JBO0FBbURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVVBO0FBQ0E7QUFiQTtBQWVBO0FBZkE7QUFwREE7QUFzRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFmQTtBQXZFQTtBQWpDQTtBQTdHQTtBQWdQQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFKQTtBQVBBO0FBTEE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQVBBO0FBTEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBR0E7QUFQQTtBQVBBO0FBTEE7QUF2REE7QUFEQTtBQURBO0FBTEE7QUEyRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFMQTtBQURBO0FBWkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQVRBO0FBbEhBO0FBeUpBO0FBQ0E7Ozs7QUFycEJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQXNwQkE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BOzs7O0FBZkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBNUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUE0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFrQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUF4QkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBc0NBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQWFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTRCQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFpQkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFrQ0E7QUFpQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQVZBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFVQTtBQUNBO0FBdkJBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF6QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBN0dBO0FBQUE7QUFDQTtBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQURBO0FBTEE7QUFYQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFWQTtBQURBO0FBREE7QUFsQ0E7QUFxREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBckJBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFQQTtBQVBBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXhCQTtBQTRCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFWQTtBQURBO0FBREE7QUFQQTtBQTJCQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVJBO0FBVUE7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFkQTtBQXFCQTtBQWpNQTtBQUpBO0FBeU1BOzs7O0FBbjVCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQUNBO0FBbTVCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7Ozs7OztBQzc2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7Ozs7QUE5QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUFDQTtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7QUFHQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBSEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFiQTtBQURBO0FBMEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFQQTtBQTNCQTtBQXNFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQWxCQTtBQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFKQTtBQXhCQTtBQXVDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBaEJBO0FBOEJBO0FBN0NBO0FBekNBO0FBeEVBO0FBcUtBOzs7O0FBL1NBO0FBQ0E7QUFpVEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBbENBO0FBQ0E7QUFvREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBakJBO0FBQ0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlEQTtBQStEQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBdURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQTFFQTtBQURBO0FBREE7QUFMQTtBQTZHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFGQTtBQURBO0FBUEE7QUFEQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBcEJBO0FBNEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBWEE7QUFGQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQVhBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVFBO0FBR0E7QUFDQTtBQW5CQTtBQXBCQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFmQTtBQURBO0FBcEJBO0FBM0ZBO0FBREE7QUExQkE7QUE5R0E7QUFpUkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBSkE7QUFQQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFQQTtBQUxBO0FBdkRBO0FBREE7QUFEQTtBQUxBO0FBeUZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFaQTtBQTFGQTtBQTZHQTtBQUNBOzs7O0FBdDBCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQXMwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1MUJBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBREE7QUFZQTs7OztBQTdCQTtBQUNBO0FBK0JBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=