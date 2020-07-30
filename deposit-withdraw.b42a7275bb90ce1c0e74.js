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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { style: { width: "30px" }, src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMTAzMDYiCiAgIHZpZXdCb3g9IjAgMCA1MDAuMDAwMDEgMTYyLjgxNTk0IgogICA+CiAgPGRlZnMKICAgICBpZD0iZGVmczEwMzA4Ij4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoMTAyNzEiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTAyNzMiCiAgICAgICAgIGQ9Im0gNDEzLjc0Miw5MC40MzUgYyAtMC4wNTcsLTQuNDk0IDQuMDA1LC03LjAwMiA3LjA2NSwtOC40OTMgMy4xNDQsLTEuNTMgNC4yLC0yLjUxMSA0LjE4OCwtMy44NzkgLTAuMDI0LC0yLjA5NCAtMi41MDgsLTMuMDE4IC00LjgzMywtMy4wNTQgLTQuMDU2LC0wLjA2MyAtNi40MTQsMS4wOTUgLTguMjg5LDEuOTcxIGwgLTEuNDYxLC02LjgzNyBjIDEuODgxLC0wLjg2NyA1LjM2NCwtMS42MjMgOC45NzYsLTEuNjU2IDguNDc4LDAgMTQuMDI1LDQuMTg1IDE0LjA1NSwxMC42NzQgMC4wMzMsOC4yMzUgLTExLjM5MSw4LjY5MSAtMTEuMzEzLDEyLjM3MiAwLjAyNywxLjExNiAxLjA5MiwyLjMwNyAzLjQyNiwyLjYxIDEuMTU1LDAuMTUzIDQuMzQ0LDAuMjcgNy45NTksLTEuMzk1IGwgMS40MTksNi42MTUgYyAtMS45NDQsMC43MDggLTQuNDQzLDEuMzg2IC03LjU1NCwxLjM4NiAtNy45OCwwIC0xMy41OTMsLTQuMjQyIC0xMy42MzgsLTEwLjMxNCBtIDM0LjgyNyw5Ljc0NCBjIC0xLjU0OCwwIC0yLjg1MywtMC45MDMgLTMuNDM1LC0yLjI4OSBsIC0xMi4xMTEsLTI4LjkxNyA4LjQ3MiwwIDEuNjg2LDQuNjU5IDEwLjM1MywwIDAuOTc4LC00LjY1OSA3LjQ2NywwIC02LjUxNiwzMS4yMDYgLTYuODk0LDAgbSAxLjE4NSwtOC40MyAyLjQ0NSwtMTEuNzE4IC02LjY5NiwwIDQuMjUxLDExLjcxOCBtIC00Ni4yODQsOC40MyAtNi42NzgsLTMxLjIwNiA4LjA3MywwIDYuNjc1LDMxLjIwNiAtOC4wNywwIG0gLTExLjk0MywwIC04LjQwMywtMjEuMjQgLTMuMzk5LDE4LjA2IGMgLTAuMzk5LDIuMDE2IC0xLjk3NCwzLjE4IC0zLjcyMywzLjE4IGwgLTEzLjczNywwIC0wLjE5MiwtMC45MDYgYyAyLjgyLC0wLjYxMiA2LjAyNCwtMS41OTkgNy45NjUsLTIuNjU1IDEuMTg4LC0wLjY0NSAxLjUyNywtMS4yMDkgMS45MTcsLTIuNzQyIGwgNi40MzgsLTI0LjkwMyA4LjUzMiwwIDEzLjA4LDMxLjIwNiAtOC40NzgsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDEwMjc3IgogICAgICAgc3ByZWFkTWV0aG9kPSJwYWQiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDg0LjE5OTUsMzEuMDA4OCwzMS4wMDg4LC04NC4xOTk1LDE5LjUxMiwtMjcuNDE5MikiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHkyPSIwIgogICAgICAgeDI9IjEiCiAgICAgICB5MT0iMCIKICAgICAgIHgxPSIwIj4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3AxMDI3OSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojMjIyMzU3IiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDEwMjgxIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiMyNTRhYTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMDMxMSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMzLjcwMTU3LC01MzYuNDI0MzEpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIGlkPSJnMTAyNjciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0Ljk4NDY4NTYsMCwwLC00Ljk4NDY4NTYsLTE0NzAuMTE4NSwxMDM5LjYyNjQpIj4KICAgICAgPGcKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTAyNzEpIgogICAgICAgICBpZD0iZzEwMjY5Ij4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MS42MTEsOTYuODk2KSIKICAgICAgICAgICBpZD0iZzEwMjc1Ij4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDEwMjgzIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDEwMjc3KTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Ik0gMCwwIDk4LjQzNywzNi4yNTIgMTIwLjgzMSwtMjQuNTU3IDIyLjM5NSwtNjAuODA5IiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { style: { width: "20px", margin: "0 10px 0" }, src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDY0OS45OTk5OCA0MDUuNjMyMjYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg5NSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhODk5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT5Bc3NldCAxPC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg3OSI+CiAgICA8c3R5bGUKICAgICAgIHR5cGU9InRleHQvY3NzIgogICAgICAgaWQ9InN0eWxlODc3Ij4uYXtvcGFjaXR5OjA7fS5ie2ZpbGw6I2ZmZjt9LmN7ZmlsbDojZmY1ZjAwO30uZHtmaWxsOiNlYjAwMWI7fS5le2ZpbGw6I2Y3OWUxYjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlCiAgICAgaWQ9InRpdGxlODgxIj5Bc3NldCAxPC90aXRsZT4KICA8cmVjdAogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiNmZjVmMDA7c3Ryb2tlLXdpZHRoOjUuNDkzODExNjEiCiAgICAgY2xhc3M9ImMiCiAgICAgeD0iMjI5LjgzMjYzIgogICAgIHk9IjQ3LjI5NzczNyIKICAgICB3aWR0aD0iMTkwLjQxNTUxIgogICAgIGhlaWdodD0iMzExLjAwNDciCiAgICAgaWQ9InJlY3Q4ODciIC8+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZWIwMDFiO3N0cm9rZS13aWR0aDo1LjQ5MzgxMTYxIgogICAgIGNsYXNzPSJkIgogICAgIGQ9Im0gMjQ5LjQ0NTU0LDIwMi44Mjc1NiBhIDE5Ny40NDc1OSwxOTcuNDQ3NTkgMCAwIDEgNzUuNTM5OTEsLTE1NS40NzQ4NjcgMTk3Ljc3NzIyLDE5Ny43NzcyMiAwIDEgMCAwLDMxMS4wMDQ2NzcgMTk3LjQ0NzU5LDE5Ny40NDc1OSAwIDAgMSAtNzUuNTM5OTEsLTE1NS41Mjk4MSB6IgogICAgIGlkPSJwYXRoODg5IiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2Y3OWUxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZSIKICAgICBkPSJtIDYyNi4xMDEzLDMyNS4zOTQ1IHYgLTYuMzcyODIgaCAyLjc0NjkgdiAtMS4zMTg1MiBoIC02LjUzNzY0IHYgMS4zMTg1MiBoIDIuNTgyMSB2IDYuMzcyODIgeiBtIDEyLjY5MDcsMCB2IC03LjY5MTM0IGggLTEuOTc3NzggbCAtMi4zMDc0LDUuNDkzODEgLTIuMzA3NCwtNS40OTM4MSBoIC0xLjk3Nzc3IHYgNy42OTEzNCBoIDEuNDI4MzkgdiAtNS44MjM0NCBsIDIuMTQyNTksNC45OTkzNyBoIDEuNDgzMzMgbCAyLjE0MjU4LC00Ljk5OTM3IHYgNS44MjM0NCB6IgogICAgIGlkPSJwYXRoODkxIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2Y3OWUxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZSIKICAgICBkPSJtIDY0NSwyMDIuODI3NTYgYSAxOTcuNzc3MjIsMTk3Ljc3NzIyIDAgMCAxIC0zMjAuMDE0NTUsMTU1LjQ3NDg3IDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAwIDAgMCwtMzExLjAwNDY3NSBBIDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAwIDEgNjQ1LDIwMi43NzI2MiBaIgogICAgIGlkPSJwYXRoODkzIiAvPgo8L3N2Zz4K" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { style: { width: "40px" }, src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2ZzEwOTA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNzUwIDIwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzUwIDIwNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxMDI5OEU7fQoJLnN0MXtmaWxsOiNGRkJFMDA7fQo8L3N0eWxlPgo8dGl0bGU+c2VwYTwvdGl0bGU+CjxwYXRoIGlkPSJwYXRoNTY4OSIgY2xhc3M9InN0MCIgZD0iTTE2Ni42LDY1LjRoLTUxLjNjMC04LjQtMS0xNC4xLTMtMTdjLTMtNC4zLTExLjQtNi40LTI1LjItNi40Yy0xMy40LDAtMjIuMywxLjItMjYuNiwzLjcKCVM1NCw1My42LDU0LDYxLjhjMCw3LjUsMS45LDEyLjQsNS43LDE0LjdjMy40LDEuOCw3LjEsMi44LDEwLjksMi45TDgxLDgwLjJjMjIuMiwxLjUsMzYsMi41LDQxLjYsMy4xYzE3LjUsMS44LDMwLjMsNi40LDM4LjEsMTQKCWM2LjIsNS45LDkuOSwxMy42LDExLjEsMjMuMWMwLjcsNi40LDEuMSwxMi45LDEsMTkuM2MwLDE2LjUtMS42LDI4LjYtNC43LDM2LjJjLTUuNywxNC4xLTE4LjUsMjIuOS0zOC41LDI2LjYKCWMtOC4zLDEuNi0yMS4xLDIuNC0zOC4zLDIuNGMtMjguNywwLTQ4LjgtMS43LTYwLjEtNS4xYy0xMy45LTQuMi0yMy0xMi44LTI3LjUtMjUuNkMxLjIsMTY3LjEsMCwxNTUuMiwwLDEzOC41aDUxLjN2NC4zCgljMCw4LjksMi42LDE0LjYsNy43LDE3LjJjNCwxLjksOC40LDIuOCwxMi44LDIuOGgxOC45YzkuNiwwLDE1LjgtMC41LDE4LjQtMS41YzQuNy0xLjksNy44LTQuOSw5LjMtOWMwLjktMy4yLDEuMy02LjUsMS4yLTkuOQoJYzAtOS0zLjMtMTQuNS05LjktMTYuNWMtMi41LTAuOC0xMy45LTEuOS0zNC4zLTMuMmMtMTYuNC0xLjItMjcuOC0yLjMtMzQuMi0zLjRjLTE2LjgtMy4xLTI4LTkuNi0zMy42LTE5LjQKCUMyLjcsOTEuNSwwLjIsNzguOSwwLjIsNjJjMC0xMi44LDEuMy0yMy4xLDQtMzAuOXM2LjktMTMuNiwxMi44LTE3LjZjOC42LTYuMiwxOS43LTkuOCwzMy4yLTEwLjljMTEuMi0xLDIzLjctMS41LDM3LjMtMS41CgljMjEuNSwwLDM2LjksMS4yLDQ2LDMuN2MyMi4zLDYsMzMuNSwyMi44LDMzLjUsNTAuNEMxNjcuMSw1Ny41LDE2Ni45LDYwLjksMTY2LjYsNjUuNCIvPgo8cGF0aCBpZD0icGF0aDU2OTMiIGNsYXNzPSJzdDAiIGQ9Ik0zOTIuMywyMDVWMGgxMDIuOGMxNC4xLDAsMjQuOCwxLjEsMzIuMiwzLjVjMTYuOSw1LjMsMjguMiwxNi4xLDM0LDMyLjUKCWMzLDguNiw0LjUsMjEuNSw0LjUsMzguOGMwLDIwLjgtMS43LDM1LjctNSw0NC44Yy02LjYsMTgtMjAuMSwyOC4zLTQwLjYsMzFjLTIuNCwwLjQtMTIuNywwLjgtMzAuOCwxLjFsLTkuMiwwLjNoLTMyLjh2NTNIMzkyLjN6CgkgTTQ0Ny41LDEwNC41aDM0LjRjMTAuOS0wLjQsMTcuNS0xLjIsMTkuOS0yLjVjMy4yLTEuOCw1LjUtNS40LDYuNS0xMC44YzAuOC01LjMsMS4yLTEwLjYsMS0xNmMwLTguNy0wLjctMTUuMS0yLjEtMTkuMwoJYy0yLTUuOS02LjgtOS41LTE0LjItMTAuOGMtMS41LTAuMi01LjEtMC4zLTEwLjctMC4zaC0zNC44VjEwNC41eiIvPgo8cGF0aCBpZD0icGF0aDU2OTciIGNsYXNzPSJzdDAiIGQ9Ik02ODMuNiwxNjkuNWgtNzMuOGwtOS45LDM1LjVoLTU3LjFMNjA0LjUsMGg4My4yTDc1MCwyMDVoLTU1LjlMNjgzLjYsMTY5LjV6IE02NzIuNiwxMjkuNgoJbC0yNS44LTg4LjlsLTI1LjEsODguOUg2NzIuNnoiLz4KPHBhdGggaWQ9InBhdGg1NzAxIiBjbGFzcz0ic3QxIiBkPSJNMzE2LjIsMjguOGMyMS45LDAsNDIuNiw5LjksNTYuNCwyNi45bDExLjktMjUuNUMzNjUsMTEuOSwzMzkuMywxLjcsMzEyLjYsMS44CgljLTQzLjUsMC04MC42LDI2LjItOTUuOSw2My40aC0yMy4ybC0xMy43LDI5LjNoMjkuOGMtMC4yLDIuNy0wLjQsNS40LTAuNCw4LjJjMCwzLjMsMC4yLDYuNywwLjUsMTBoLTE1bC0xMy43LDI5LjRoMzYuMwoJYzE1LjcsMzYuMiw1Mi40LDYxLjcsOTUuMiw2MS43YzIwLjcsMCw0MC45LTYsNTguMS0xNy41di0zNmMtMjYuNCwzMC4yLTcyLjIsMzMuMi0xMDIuNCw2LjhjLTUtNC40LTkuNC05LjQtMTMtMTVoNzZsMTMuNy0yOS40CglIMjQ0LjJjLTAuNS0zLjYtMC44LTcuMi0wLjgtMTAuOGMwLTIuNSwwLjEtNC45LDAuNC03LjRoMTA5LjhsMTMuNy0yOS4zaC0xMTRDMjY2LjIsNDIuNywyOTAuMiwyOC45LDMxNi4yLDI4LjgiLz4KPHBhdGggaWQ9InBhdGg1NzA1IiBjbGFzcz0ic3QwIiBkPSJNMzE2LjIsMjkuN2MyMS42LDAsNDIuMSw5LjgsNTUuNywyNi42bDAuOSwxLjFsMC42LTEuM2wxMS45LTI1LjVsMC4zLTAuNmwtMC41LTAuNAoJYy0zNi0zMy43LTkwLjUtMzguMi0xMzEuNS0xMC43Yy0xNi44LDExLjMtMzAsMjcuMy0zNy43LDQ2bDAuOC0wLjZIMTkzbC0wLjIsMC41bC0xMy43LDI5LjRsLTAuNiwxLjNoMzEuMmwtMC45LTEKCWMtMC4yLDMtMC40LDUuOC0wLjQsOC4zYzAsMy40LDAuMiw2LjcsMC41LDEwLjFsMC45LTFoLTE1LjVsLTAuMiwwLjVsLTEzLjcsMjkuNGwtMC42LDEuMmgzNy43bC0wLjgtMC41YzE2LjQsMzcuOCw1NCw2Mi4yLDk2LDYyLjIKCWMyMC45LDAuMSw0MS4zLTYuMSw1OC42LTE3LjZsMC40LTAuM1YxNDhsLTEuNSwxLjhjLTI2LjEsMjkuOC03MS40LDMyLjgtMTAxLjIsNi43Yy00LjktNC4zLTkuMi05LjMtMTIuOC0xNC44bC0wLjcsMS40aDc2LjYKCWwwLjItMC41bDEzLjctMjkuNGwwLjYtMS4ySDI0NC4ybDAuOSwwLjhjLTAuNS0zLjUtMC44LTcuMS0wLjgtMTAuN2MwLTIuNCwwLjEtNC45LDAuNC03LjNsLTAuOSwwLjhoMTEwLjRsMC4yLTAuNUwzNjgsNjUuNgoJbDAuNi0xLjNIMjUzLjJsMC44LDEuM0MyNjYuOCw0My41LDI5MC41LDI5LjgsMzE2LjIsMjkuNyBNMjUzLjIsNjYuMWgxMTRsLTAuOC0xLjJsLTEzLjcsMjkuNGwwLjgtMC41SDI0Mi45bC0wLjEsMC44CgljLTAuMiwyLjUtMC40LDUtMC40LDcuNWMwLDMuNywwLjMsNy40LDAuOCwxMWwwLjEsMC44SDM0NWwtMC44LTEuM2wtMTMuNywyOS40bDAuOC0wLjVoLTc3LjdsMC45LDEuNGMyMi4yLDM0LDY3LjcsNDMuNiwxMDEuNywyMS40CgljNS42LTMuNywxMC43LTguMSwxNS4yLTEzLjJsLTEuNS0wLjZ2MzZsMC40LTAuN0MzNTMuMiwxOTcsMzMzLjEsMjAzLDMxMi42LDIwM2MtNDEuMiwwLTc4LjMtMjQtOTQuNC02MS4xbC0wLjItMC41aC0zNi45bDAuOCwxLjMKCWwxMy43LTI5LjRsLTAuOCwwLjVoMTZsLTAuMS0xYy0wLjMtMy4zLTAuNS02LjctMC41LTkuOWMwLTIuNSwwLjEtNS4yLDAuNC04LjJsMC4xLTFoLTMwLjhsMC44LDEuMmwxMy43LTI5LjNsLTAuOCwwLjVoMjMuOAoJbDAuMi0wLjVjNy42LTE4LjQsMjAuNS0zNC4xLDM3LjEtNDUuMmM0MC4zLTI3LDkzLjktMjIuNiwxMjkuMiwxMC41bC0wLjItMWwtMTEuOSwyNS41bDEuNS0wLjJjLTI1LjYtMzEuNS03MS44LTM2LjQtMTAzLjQtMTAuOAoJYy03LDUuNy0xMi45LDEyLjYtMTcuNCwyMC40bC0wLjgsMS4zTDI1My4yLDY2LjF6Ii8+Cjwvc3ZnPgo=" })
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
                        RudexNotice1Informed_BuyCrypto ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__["default"], {
                            account: account
                        }) : null
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
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2823);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2978);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(547);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2007);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2934);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2918);
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
            receive_address: null
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

            //let receive_address = this.state.receive_address;
            var receive_address = void 0;

            if (!receive_address) {
                var account_name = this.props.account.get("name");
                receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
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
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2790);
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
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2959);
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
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2823);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2978);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(547);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2007);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2934);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2918);
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
            console.log("activeCoin: " + activeCoin);

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

            console.log("activeCoin: " + activeCoin);

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
                                    content: "gateway.choose_" + action
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto.title" })
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
        "name": "BTC",
        "description": "Bitcoin - BTC",
        "backingCoin": "BTC",
        "symbol": "RUDEX.BTC",
        "depositAllowed": true,
        //"withdrawalAllowed": true,

        "issuer": "rudex-bitcoin",
        "issuerId": "1.2.852589",
        //"minAmount": 180000,
        "confirmations": {
            "type": "blocks",
            "value": 3
        }
    }, {
        "name": "ETH",
        "description": "Ethereum - ETH",
        "backingCoin": "ETH",
        "symbol": "RUDEX.ETH",
        "depositAllowed": true,
        //"withdrawalAllowed": true,

        "issuer": "rudex-ethereum",
        "issuerId": "1.2.852823",
        //"minAmount": 500000,
        "confirmations": {
            "type": "blocks",
            "value": 30
        }
    }, {
        "name": "USDT",
        "description": "Tether - USDT (on Ethereum)",
        "backingCoin": "USDT",
        "symbol": "RUDEX.USDT",
        "depositAllowed": true,
        //"withdrawalAllowed": true,

        "issuer": "rudex-usdt",
        "issuerId": "1.2.927458",
        //"minAmount": 500000,
        "confirmations": {
            "type": "blocks",
            "value": 20
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
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(745);
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
            receive_address: {
                address: null,
                memo: null
            },

            submitAllowed: false,
            min_max_validate: {
                "valid": false,
                "direct": "min" //MIN or MAX
            },

            getAmount: 0,
            giveAmount: 0,

            //give: this.props.activePaymentMethod,
            //get: this.props.deposit_asset_name,

            raido: {
                affiliate_id: 10058,

                give_raw: _this.props.activePaymentMethod, //fiats
                //give_raw: "EUR",//fiats

                //give: "USD",
                give: _this.props.activePaymentMethod,

                give_decimal: 5,
                //get: "BTC",
                get: _this.props.deposit_asset_name,
                get_decimal: 5,

                price: 1,

                in: null,
                out: null,
                in_min_fee: 0,

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
                    //console.log("json_0: " + JSON.stringify(json.data));
                    //console.log("json_1: " + JSON.stringify(json.data.rows));
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
            //console.log("currencies: " + JSON.stringify(currencies));

            var curr_coin_original = this.props.deposit_asset_name;
            //console.log("curr_coin_original: " + curr_coin_original);
            //let curr_coin_original = this.props.receive_asset;
            var raido = this.state.raido;
            for (var i = 0; i < currencies.length; i++) {
                if (currencies[i].code === curr_coin_original) {

                    console.log("currencies[i].code MIN_DEPOSIT: " + currencies[i].code + " = " + currencies[i].min_deposit);
                    console.log("currencies[i].code MAX_DEPOSIT: " + currencies[i].code + " = " + currencies[i].max_deposit);

                    raido.give = this.state.raido.give;
                    raido.get = currencies[i].code;
                    //console.log("check-2:" + currencies[i].code);
                    raido.currencies = currencies;

                    //raido.in_enable = currencies[i].in_enable;//TODO
                    raido.out = currencies[i].id;
                    raido.min_deposit = currencies[i].min_deposit;
                    raido.max_deposit = currencies[i].max_deposit;

                    raido.give_decimal = currencies[i].decimal;

                    this.setState({ raido: raido });

                    //console.log("current code currency : " + JSON.stringify(currencies[i]));
                    //break;
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

            //console.log("currencies_check_USDT: "+JSON.stringify(currencies));
            //console.log("currencies.length:  "+currencies.length);

            for (var i = 0; i < currencies.length; i++) {
                if (currencies[i].code === raido.give_raw) {
                    //if (currencies[i].cur === raido.give_raw) {
                    raido.commission = parseFloat(currencies[i].commission);
                    raido.in_fee = parseFloat(currencies[i].in_fee);
                    raido.in_min_fee = parseFloat(currencies[i].in_min_fee);
                    raido.get_decimal = currencies[i].decimal;
                    raido.give = currencies[i].cur;

                    raido.in = currencies[i].id;
                    //console.log("raido_arr: " + JSON.stringify(raido));
                    console.log("raido.in_min_fee: " + raido.in_min_fee);

                    this.setState({ raido: raido });
                }
            }

            //let pair = "BTC"+"USD";
            var pair = raido.get + "" + raido.give;
            var direction = raido.direction;

            console.log("pair: " + pair);
            console.log("prices: " + JSON.stringify(prices));
            console.log("direction: " + raido.direction);

            var price = prices[pair][direction];
            console.log("price: " + price);

            if (price) {
                raido.price = price * 1;
                raido.prices = prices;
                this.setState({ raido: raido });
            }

            //console.log("load_end: " + JSON.stringify(this.state.raido));

            this.handleChange("auto");
        }
    }, {
        key: "handleChange",
        value: function handleChange(type, event) {
            //let name = event.target.name,

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
                //this.setState({getAmount: value / raido.price});
                res_getAmount = value / (raido.price / ((100 - (raido.commission + raido.in_fee)) / 100));
                //1 / ((volume - (volume * in_fee) - (volume * commission))*price * (1 - out_fee))
                var res_giveAmount = value;

                this.setState({ getAmount: res_getAmount });
                this.setState({ giveAmount: res_giveAmount });

                this.setState({ getAmount: Math.ceil(res_getAmount * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal) });
                this.setState({ giveAmount: Math.ceil(res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal) });
            } else if (name === "getAmount") {
                //this.setState({getAmount: value});
                //this.setState({giveAmount: raido.price * value});
                //this.setState({giveAmount: raido.price * value / ((100 - (raido.commission + raido.in_fee)) / 100)});
                res_getAmount = value;
                var _res_giveAmount = raido.price * value / ((100 - (raido.commission + raido.in_fee)) / 100) + raido.in_min_fee;
                //((volume - (volume * in_fee) - (volume * commission))*price * (1 - out_fee))

                this.setState({ getAmount: Math.ceil(res_getAmount * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal) });
                this.setState({ giveAmount: Math.ceil(_res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal) });

                /*this.setState({getAmount: res_getAmount});
                this.setState({giveAmount: res_giveAmount});*/
            }

            /*console.log("min_deposit: " + raido.min_deposit);
            console.log("max_deposit: " + raido.max_deposit);
            console.log("res_getAmount: " + res_getAmount);
            console.log("raido.max_deposit == 0: " + (raido.max_deposit == 0));
            console.log("================================");
            */
            if (res_getAmount >= raido.min_deposit && (raido.max_deposit == 0 || res_getAmount <= raido.max_deposit)) {
                //value
                /*            console.log("min_deposit: " + raido.min_deposit);
                            console.log("max_deposit: " + raido.max_deposit);
                            console.log("res_getAmount: " + res_getAmount);
                            console.log("================================");*/
                this.setState({
                    min_max_validate: {
                        "valid": true,
                        "direct": "min" //MIN or MAX
                    }
                });
                this.setState({ submitAllowed: true });
            } else {
                /*console.log("min_deposit: " + raido.min_deposit);
                console.log("max_deposit: " + raido.max_deposit);
                console.log("res_getAmount: " + res_getAmount);
                console.log("================================");*/

                if (res_getAmount >= raido.min_deposit) {
                    this.setState({
                        min_max_validate: {
                            "valid": false,
                            "direct": "max" //MIN or MAX
                        }
                    });
                } else {
                    this.setState({
                        min_max_validate: {
                            "valid": false,
                            "direct": "min" //MIN or MAX
                        }
                    });
                }

                this.setState({ submitAllowed: false });
            }
        }
    }, {
        key: "handlePaymentMethod",
        value: function handlePaymentMethod(e) {
            var payMethod = e.target["name"];
            var str = "paymentmethod";
            payMethod = payMethod.substr(str.length + 1, payMethod.length - str.length).toUpperCase();

            var raido = this.state.raido;
            raido.give_raw = payMethod;
            console.log("change payMethod on: " + payMethod);

            this.setState({ raido: raido });

            console.log("changeprices: " + JSON.stringify(this.state.raido.prices));
            this._setPricesRaido(this.state.raido.prices);

            //===

            var foo = document.querySelectorAll("label.btn-radio");
            for (var i = 0; i < foo.length; i++) {
                foo[i].classList.remove("active");
            }
            e.currentTarget.parentNode.classList.add("active");

            this.props.setActiveRaidoCoin(payMethod);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.raido !== this.state.raido || nextProps.deposit_coin_type !== this.props.getAmount || nextState.getAmount !== this.state.getAmount || nextState.giveAmount !== this.state.giveAmount ||

            //nextState.receive_address !== this.state.receive_address ||

            nextProps.receive_asset !== this.props.receive_asset || nextProps.deposit_asset_name !== this.props.deposit_asset_name || nextProps.action !== this.props.action || nextProps.currentLocale !== this.props.currentLocale;
        }

        /*    componentDidUpdate() {
                 if (1 == 1)
                    return true;
             }*/

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
            var objParams = {
                "affiliate_id": raido.affiliate_id,
                "volume": this.state.giveAmount,
                "in": raido.in,
                "out": raido.out,
                "out-p": this.state.receive_address.address,
                "direction": raido.direction
            };
            console.log("objParams: " + JSON.stringify(objParams));
            for (var item in objParams) {
                strUri += "&" + item + "=" + objParams[item];
            }
            console.log("strUri: " + strUri);
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

            //let btrsd_OP = this.props.deposit_asset_name;

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

            //let receive_address = this.state.receive_address;
            var receive_address = void 0;
            if (!receive_address) {
                var account_name = this.props.account.get("name");
                receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);

                //this.setState({receive_address});
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
                if (!receive_address && !this.props.supportsMemos) {
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
                            content: "gateway.deposit_inst"
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
                                    { className: "ant-col-24", style: {
                                            margin: "20px 0"
                                        } },
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
                                    { className: "ant-col-10" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        name: "giveAmount",
                                        type: "number",
                                        value: this.state.giveAmount,
                                        onChange: this.handleChange.bind(this, "giveAmount"),
                                        placeholder: "Вы заплатите",
                                        style: {
                                            backgroundImage: "url(/images/raido-payment-" + this.state.raido.give_raw.toLowerCase() + ".png)"
                                        }
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "ant-col-10" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        name: "getAmount",
                                        type: "number",
                                        value: this.state.getAmount,
                                        onChange: this.handleChange.bind(this, "getAmount"),
                                        placeholder: "Вы получите",
                                        style: {
                                            backgroundImage: "url(/asset-symbols/rudex." + this.state.raido.get.toLowerCase() + ".png)"
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: !this.state.min_max_validate.valid ? "raido_min_max_validate active" : "raido_min_max_validate" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.rudex.buy_crypto." + this.state.min_max_validate.direct + "_amount" }),
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "button-group", style: { paddingTop: 20 } })
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
    pro: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    action: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    min_amount: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
    confirmations: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object

    //fiats: PropTypes.array
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                        src: "/images/raido-payment-" + payment_id + ".png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy5iNDJhNzI3NWJiOTBjZTFjMGU3NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L0Rpc2FibGVDb3B5VGV4dC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9BY2NvdW50QmFsYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9saWIvY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb3B5LXRvLWNsaXBib2FyZC9saWIvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3B5LXRvLWNsaXBib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvRmluYW5jZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb0RlcG9zaXRSZXF1ZXN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvUGF5bWVudE1ldGhvZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IHt1cGRhdGVHYXRld2F5QmFja2Vyc30gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG4vL2ltcG9ydCBPcGVubGVkZ2VyR2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L09wZW5sZWRnZXJHYXRld2F5XCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsXCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvT3BlbkxlZGdlckZpYXRUcmFuc2FjdGlvbkhpc3RvcnlcIjtcbi8vaW1wb3J0IEJsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ibG9ja3RyYWRlcy9CbG9ja1RyYWRlc0JyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG4vL2ltcG9ydCBDaXRhZGVsQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9jaXRhZGVsL0NpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5XCI7XG5pbXBvcnQgUmFpZG9GaW5hbmNlIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvcmFpZG8vUmFpZG9GaW5hbmNlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRGVwb3NpdE1vZGFsIGZyb20gXCIuLi9Nb2RhbC9EZXBvc2l0TW9kYWxcIjtcbmltcG9ydCBXaXRoZHJhd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9XaXRoZHJhd01vZGFsTmV3XCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuXG5jbGFzcyBBY2NvdW50RGVwb3NpdFdpdGhkcmF3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjb250YWluZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9sU2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm9sU2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgYml0c3BhcmtTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwiYml0c3BhcmtTZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJ4YnRzeFNlcnZpY2VcIiwgXCJnYXRld2F5XCIpLFxuICAgICAgICAgICAgYnRTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYnRTZXJ2aWNlXCIsIFwiYnJpZGdlXCIpLFxuICAgICAgICAgICAgY2l0YWRlbFNlcnZpY2U6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJjaXRhZGVsU2VydmljZVwiLCBcImJyaWRnZVwiKSxcbiAgICAgICAgICAgIG1ldGFTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwibWV0YVNlcnZpY2VcIiwgXCJicmlkZ2VcIiksXG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2VydmljZVwiLCAwKSxcblxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNlcnZpY2VzRG93biAhPT0gdGhpcy5wcm9wcy5zZXJ2aWNlc0Rvd24gfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUcmFkZXNCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BlbkxlZGdlckJhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNpdGFkZWxCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNpdGFkZWxCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLm9sU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5vbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5ydWRleFNlcnZpY2UgIT09IHRoaXMuc3RhdGUucnVkZXhTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYml0c3BhcmtTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLmJpdHNwYXJrU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnhidHN4U2VydmljZSAhPT0gdGhpcy5zdGF0ZS54YnRzeFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5idFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYnRTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuY2l0YWRlbFNlcnZpY2UgIT09IHRoaXMuc3RhdGUuY2l0YWRlbFNlcnZpY2UgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5tZXRhU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5tZXRhU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVNlcnZpY2UgIT09IHRoaXMuc3RhdGUuYWN0aXZlU2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkICE9PVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0byAhPT1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudExvY2FsZSAhPT0gdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBhY2NvdW50VXRpbHMuZ2V0RmluYWxGZWVBc3NldCh0aGlzLnByb3BzLmFjY291bnQsIFwidHJhbnNmZXJcIik7XG4gICAgfVxuXG4gICAgdG9nZ2xlT0xTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvbFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJ1ZGV4Tm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkOiAhdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0bygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBSdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG86ICF0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0b1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVSdURFWFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVhidHN4U2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgeGJ0c3hTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICB4YnRzeFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQml0U3BhcmtTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiaXRzcGFya1NlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGJpdHNwYXJrU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVCVFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJ0U2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYnRTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUNpdGFkZWxTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaXRhZGVsU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGNpdGFkZWxTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZU1ldGFTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtZXRhU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbWV0YVNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TZXRTZXJ2aWNlKGUpIHtcbiAgICAgICAgLy9sZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlcnZpY2VzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNlcnZpY2U6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNlcnZpY2VzKHJ1ZGV4R2F0ZXdheUNvaW5zKSB7XG4gICAgICAgIC8vbGV0IHNlcnZpY2VzID0gW1wiT3BlbmxlZGdlciAoT1BFTi5YKVwiLCBcIkJsb2NrVHJhZGVzIChUUkFERS5YKVwiLCBcIlRyYW5zd2lzZXJcIiwgXCJCaXRLYXBpdGFsXCJdO1xuICAgICAgICBsZXQgc2VyTGlzdCA9IFtdO1xuICAgICAgICBsZXQge2FjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtydWRleFNlcnZpY2UsIFJ1ZGV4Tm90aWNlMUluZm9ybWVkLCBSdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG99ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgYWdyZWVtZW50X3J1ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ3LWPQvtCz0LvQsNGI0LXQvdC40LUt0L7QsS3QvtC60LDQt9Cw0L3QuNC4LdGD0YHQu9GD0LMt0YjQu9GO0LfQsFwiO1xuICAgICAgICBsZXQgYWdyZWVtZW50X2VuID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ1LWdhdGV3YXktc2VydmljZS1hZ3JlZW1lbnRcIjtcblxuICAgICAgICBzZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJSdURFWCAoUlVERVguWClcIixcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiUlVERVhcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBzZWdtZW50ZWQgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJ1REVYU2VydmljZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWRleFNlcnZpY2UgPT09IFwiZmlhdFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8udGl0bGVcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6XCIzMHB4XCJ9fSBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0NqeHpkbWNLSUNBZ2VHMXNibk02WkdNOUltaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2SWdvZ0lDQjRiV3h1Y3pwall6MGlhSFIwY0RvdkwyTnlaV0YwYVhabFkyOXRiVzl1Y3k1dmNtY3Zibk1qSWdvZ0lDQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlDaUFnSUhodGJHNXpPbk4yWnowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUNpQWdJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SUtJQ0FnZG1WeWMybHZiajBpTVM0eElnb2dJQ0JwWkQwaWMzWm5NVEF6TURZaUNpQWdJSFpwWlhkQ2IzZzlJakFnTUNBMU1EQXVNREF3TURFZ01UWXlMamd4TlRrMElnb2dJQ0ErQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6RXdNekE0SWo0S0lDQWdJRHhqYkdsd1VHRjBhQW9nSUNBZ0lDQWdhV1E5SW1Oc2FYQlFZWFJvTVRBeU56RWlDaUFnSUNBZ0lDQmpiR2x3VUdGMGFGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2lBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lHbGtQU0p3WVhSb01UQXlOek1pQ2lBZ0lDQWdJQ0FnSUdROUltMGdOREV6TGpjME1pdzVNQzQwTXpVZ1l5QXRNQzR3TlRjc0xUUXVORGswSURRdU1EQTFMQzAzTGpBd01pQTNMakEyTlN3dE9DNDBPVE1nTXk0eE5EUXNMVEV1TlRNZ05DNHlMQzB5TGpVeE1TQTBMakU0T0N3dE15NDROemtnTFRBdU1ESTBMQzB5TGpBNU5DQXRNaTQxTURnc0xUTXVNREU0SUMwMExqZ3pNeXd0TXk0d05UUWdMVFF1TURVMkxDMHdMakEyTXlBdE5pNDBNVFFzTVM0d09UVWdMVGd1TWpnNUxERXVPVGN4SUd3Z0xURXVORFl4TEMwMkxqZ3pOeUJqSURFdU9EZ3hMQzB3TGpnMk55QTFMak0yTkN3dE1TNDJNak1nT0M0NU56WXNMVEV1TmpVMklEZ3VORGM0TERBZ01UUXVNREkxTERRdU1UZzFJREUwTGpBMU5Td3hNQzQyTnpRZ01DNHdNek1zT0M0eU16VWdMVEV4TGpNNU1TdzRMalk1TVNBdE1URXVNekV6TERFeUxqTTNNaUF3TGpBeU55d3hMakV4TmlBeExqQTVNaXd5TGpNd055QXpMalF5Tml3eUxqWXhJREV1TVRVMUxEQXVNVFV6SURRdU16UTBMREF1TWpjZ055NDVOVGtzTFRFdU16azFJR3dnTVM0ME1Ua3NOaTQyTVRVZ1l5QXRNUzQ1TkRRc01DNDNNRGdnTFRRdU5EUXpMREV1TXpnMklDMDNMalUxTkN3eExqTTROaUF0Tnk0NU9Dd3dJQzB4TXk0MU9UTXNMVFF1TWpReUlDMHhNeTQyTXpnc0xURXdMak14TkNCdElETTBMamd5Tnl3NUxqYzBOQ0JqSUMweExqVTBPQ3d3SUMweUxqZzFNeXd0TUM0NU1ETWdMVE11TkRNMUxDMHlMakk0T1NCc0lDMHhNaTR4TVRFc0xUSTRMamt4TnlBNExqUTNNaXd3SURFdU5qZzJMRFF1TmpVNUlERXdMak0xTXl3d0lEQXVPVGM0TEMwMExqWTFPU0EzTGpRMk55d3dJQzAyTGpVeE5pd3pNUzR5TURZZ0xUWXVPRGswTERBZ2JTQXhMakU0TlN3dE9DNDBNeUF5TGpRME5Td3RNVEV1TnpFNElDMDJMalk1Tml3d0lEUXVNalV4TERFeExqY3hPQ0J0SUMwME5pNHlPRFFzT0M0ME15QXROaTQyTnpnc0xUTXhMakl3TmlBNExqQTNNeXd3SURZdU5qYzFMRE14TGpJd05pQXRPQzR3Tnl3d0lHMGdMVEV4TGprME15d3dJQzA0TGpRd015d3RNakV1TWpRZ0xUTXVNems1TERFNExqQTJJR01nTFRBdU16azVMREl1TURFMklDMHhMamszTkN3ekxqRTRJQzB6TGpjeU15d3pMakU0SUd3Z0xURXpMamN6Tnl3d0lDMHdMakU1TWl3dE1DNDVNRFlnWXlBeUxqZ3lMQzB3TGpZeE1pQTJMakF5TkN3dE1TNDFPVGtnTnk0NU5qVXNMVEl1TmpVMUlERXVNVGc0TEMwd0xqWTBOU0F4TGpVeU55d3RNUzR5TURrZ01TNDVNVGNzTFRJdU56UXlJR3dnTmk0ME16Z3NMVEkwTGprd015QTRMalV6TWl3d0lERXpMakE0TERNeExqSXdOaUF0T0M0ME56Z3NNQ0lnTHo0S0lDQWdJRHd2WTJ4cGNGQmhkR2crQ2lBZ0lDQThiR2x1WldGeVIzSmhaR2xsYm5RS0lDQWdJQ0FnSUdsa1BTSnNhVzVsWVhKSGNtRmthV1Z1ZERFd01qYzNJZ29nSUNBZ0lDQWdjM0J5WldGa1RXVjBhRzlrUFNKd1lXUWlDaUFnSUNBZ0lDQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtEZzBMakU1T1RVc016RXVNREE0T0N3ek1TNHdNRGc0TEMwNE5DNHhPVGsxTERFNUxqVXhNaXd0TWpjdU5ERTVNaWtpQ2lBZ0lDQWdJQ0JuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJS0lDQWdJQ0FnSUhreVBTSXdJZ29nSUNBZ0lDQWdlREk5SWpFaUNpQWdJQ0FnSUNCNU1UMGlNQ0lLSUNBZ0lDQWdJSGd4UFNJd0lqNEtJQ0FnSUNBZ1BITjBiM0FLSUNBZ0lDQWdJQ0FnYVdROUluTjBiM0F4TURJM09TSUtJQ0FnSUNBZ0lDQWdiMlptYzJWMFBTSXdJZ29nSUNBZ0lDQWdJQ0J6ZEhsc1pUMGljM1J2Y0MxdmNHRmphWFI1T2pFN2MzUnZjQzFqYjJ4dmNqb2pNakl5TXpVM0lpQXZQZ29nSUNBZ0lDQThjM1J2Y0FvZ0lDQWdJQ0FnSUNCcFpEMGljM1J2Y0RFd01qZ3hJZ29nSUNBZ0lDQWdJQ0J2Wm1aelpYUTlJakVpQ2lBZ0lDQWdJQ0FnSUhOMGVXeGxQU0p6ZEc5d0xXOXdZV05wZEhrNk1UdHpkRzl3TFdOdmJHOXlPaU15TlRSaFlUVWlJQzgrQ2lBZ0lDQThMMnhwYm1WaGNrZHlZV1JwWlc1MFBnb2dJRHd2WkdWbWN6NEtJQ0E4YldWMFlXUmhkR0VLSUNBZ0lDQnBaRDBpYldWMFlXUmhkR0V4TURNeE1TSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR2NLSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TXpNekxqY3dNVFUzTEMwMU16WXVOREkwTXpFcElnb2dJQ0FnSUdsa1BTSnNZWGxsY2pFaVBnb2dJQ0FnUEdjS0lDQWdJQ0FnSUdsa1BTSm5NVEF5TmpjaUNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnMExqazRORFk0TlRZc01Dd3dMQzAwTGprNE5EWTROVFlzTFRFME56QXVNVEU0TlN3eE1ETTVMall5TmpRcElqNEtJQ0FnSUNBZ1BHY0tJQ0FnSUNBZ0lDQWdZMnhwY0Mxd1lYUm9QU0oxY213b0kyTnNhWEJRWVhSb01UQXlOekVwSWdvZ0lDQWdJQ0FnSUNCcFpEMGlaekV3TWpZNUlqNEtJQ0FnSUNBZ0lDQThad29nSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtETTFNUzQyTVRFc09UWXVPRGsyS1NJS0lDQWdJQ0FnSUNBZ0lDQnBaRDBpWnpFd01qYzFJajRLSUNBZ0lDQWdJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQWdJQ0FnSUNCcFpEMGljR0YwYURFd01qZ3pJZ29nSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U5SW1acGJHdzZkWEpzS0NOc2FXNWxZWEpIY21Ga2FXVnVkREV3TWpjM0tUdG1hV3hzTFc5d1lXTnBkSGs2TVR0bWFXeHNMWEoxYkdVNmJtOXVlbVZ5Ynp0emRISnZhMlU2Ym05dVpTSUtJQ0FnSUNBZ0lDQWdJQ0FnSUdROUlrMGdNQ3d3SURrNExqUXpOeXd6Tmk0eU5USWdNVEl3TGpnek1Td3RNalF1TlRVM0lESXlMak01TlN3dE5qQXVPREE1SWlBdlBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdQQzluUGdvZ0lDQWdQQzluUGdvZ0lEd3ZaejRLUEM5emRtYytDZz09XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOlwiMjBweFwiLCBtYXJnaW46XCIwIDEwcHggMFwifX0gc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0I0Yld4dWN6cGpZejBpYUhSMGNEb3ZMMk55WldGMGFYWmxZMjl0Ylc5dWN5NXZjbWN2Ym5Naklnb2dJQ0I0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pQ2lBZ0lIaHRiRzV6T25OMlp6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUFnSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2RtbGxkMEp2ZUQwaU1DQXdJRFkwT1M0NU9UazVPQ0EwTURVdU5qTXlNallpQ2lBZ0lIWmxjbk5wYjI0OUlqRXVNU0lLSUNBZ2FXUTlJbk4yWnpnNU5TSStDaUFnUEcxbGRHRmtZWFJoQ2lBZ0lDQWdhV1E5SW0xbGRHRmtZWFJoT0RrNUlqNEtJQ0FnSUR4eVpHWTZVa1JHUGdvZ0lDQWdJQ0E4WTJNNlYyOXlhd29nSUNBZ0lDQWdJQ0J5WkdZNllXSnZkWFE5SWlJK0NpQWdJQ0FnSUNBZ1BHUmpPbVp2Y20xaGRENXBiV0ZuWlM5emRtY3JlRzFzUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ1BHUmpPblI1Y0dVS0lDQWdJQ0FnSUNBZ0lDQnlaR1k2Y21WemIzVnlZMlU5SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5a1kyMXBkSGx3WlM5VGRHbHNiRWx0WVdkbElpQXZQZ29nSUNBZ0lDQWdJRHhrWXpwMGFYUnNaVDVCYzNObGRDQXhQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6ZzNPU0krQ2lBZ0lDQThjM1I1YkdVS0lDQWdJQ0FnSUhSNWNHVTlJblJsZUhRdlkzTnpJZ29nSUNBZ0lDQWdhV1E5SW5OMGVXeGxPRGMzSWo0dVlYdHZjR0ZqYVhSNU9qQTdmUzVpZTJacGJHdzZJMlptWmp0OUxtTjdabWxzYkRvalptWTFaakF3TzMwdVpIdG1hV3hzT2lObFlqQXdNV0k3ZlM1bGUyWnBiR3c2STJZM09XVXhZanQ5UEM5emRIbHNaVDRLSUNBOEwyUmxabk0rQ2lBZ1BIUnBkR3hsQ2lBZ0lDQWdhV1E5SW5ScGRHeGxPRGd4SWo1QmMzTmxkQ0F4UEM5MGFYUnNaVDRLSUNBOGNtVmpkQW9nSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaVHRtYVd4c09pTm1aalZtTURBN2MzUnliMnRsTFhkcFpIUm9PalV1TkRrek9ERXhOakVpQ2lBZ0lDQWdZMnhoYzNNOUltTWlDaUFnSUNBZ2VEMGlNakk1TGpnek1qWXpJZ29nSUNBZ0lIazlJalEzTGpJNU56Y3pOeUlLSUNBZ0lDQjNhV1IwYUQwaU1Ua3dMalF4TlRVeElnb2dJQ0FnSUdobGFXZG9kRDBpTXpFeExqQXdORGNpQ2lBZ0lDQWdhV1E5SW5KbFkzUTRPRGNpSUM4K0NpQWdQSEJoZEdnS0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvalpXSXdNREZpTzNOMGNtOXJaUzEzYVdSMGFEbzFMalE1TXpneE1UWXhJZ29nSUNBZ0lHTnNZWE56UFNKa0lnb2dJQ0FnSUdROUltMGdNalE1TGpRME5UVTBMREl3TWk0NE1qYzFOaUJoSURFNU55NDBORGMxT1N3eE9UY3VORFEzTlRrZ01DQXdJREVnTnpVdU5UTTVPVEVzTFRFMU5TNDBOelE0TmpjZ01UazNMamMzTnpJeUxERTVOeTQzTnpjeU1pQXdJREVnTUNBd0xETXhNUzR3TURRMk56Y2dNVGszTGpRME56VTVMREU1Tnk0ME5EYzFPU0F3SURBZ01TQXROelV1TlRNNU9URXNMVEUxTlM0MU1qazRNU0I2SWdvZ0lDQWdJR2xrUFNKd1lYUm9PRGc1SWlBdlBnb2dJRHh3WVhSb0NpQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyWTNPV1V4WWp0emRISnZhMlV0ZDJsa2RHZzZOUzQwT1RNNE1URTJNU0lLSUNBZ0lDQmpiR0Z6Y3owaVpTSUtJQ0FnSUNCa1BTSnRJRFl5Tmk0eE1ERXpMRE15TlM0ek9UUTFJSFlnTFRZdU16Y3lPRElnYUNBeUxqYzBOamtnZGlBdE1TNHpNVGcxTWlCb0lDMDJMalV6TnpZMElIWWdNUzR6TVRnMU1pQm9JREl1TlRneU1TQjJJRFl1TXpjeU9ESWdlaUJ0SURFeUxqWTVNRGNzTUNCMklDMDNMalk1TVRNMElHZ2dMVEV1T1RjM056Z2diQ0F0TWk0ek1EYzBMRFV1TkRrek9ERWdMVEl1TXpBM05Dd3ROUzQwT1RNNE1TQm9JQzB4TGprM056YzNJSFlnTnk0Mk9URXpOQ0JvSURFdU5ESTRNemtnZGlBdE5TNDRNak0wTkNCc0lESXVNVFF5TlRrc05DNDVPVGt6TnlCb0lERXVORGd6TXpNZ2JDQXlMakUwTWpVNExDMDBMams1T1RNM0lIWWdOUzQ0TWpNME5DQjZJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3hJaUF2UGdvZ0lEeHdZWFJvQ2lBZ0lDQWdjM1I1YkdVOUltWnBiR3c2STJZM09XVXhZanR6ZEhKdmEyVXRkMmxrZEdnNk5TNDBPVE00TVRFMk1TSUtJQ0FnSUNCamJHRnpjejBpWlNJS0lDQWdJQ0JrUFNKdElEWTBOU3d5TURJdU9ESTNOVFlnWVNBeE9UY3VOemMzTWpJc01UazNMamMzTnpJeUlEQWdNQ0F4SUMwek1qQXVNREUwTlRVc01UVTFMalEzTkRnM0lERTVOeTQzTnpjeU1pd3hPVGN1TnpjM01qSWdNQ0F3SURBZ01Dd3RNekV4TGpBd05EWTNOU0JCSURFNU55NDNOemN5TWl3eE9UY3VOemMzTWpJZ01DQXdJREVnTmpRMUxESXdNaTQzTnpJMk1pQmFJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3pJaUF2UGdvOEwzTjJaejRLXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOlwiNDBweFwifX0gc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl5TGpFdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SW5OMlp6RXdPVEE0SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSUtDU0IyYVdWM1FtOTRQU0l3SURBZ056VXdJREl3TlNJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTnpVd0lESXdOVHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGdvSkxuTjBNSHRtYVd4c09pTXhNREk1T0VVN2ZRb0pMbk4wTVh0bWFXeHNPaU5HUmtKRk1EQTdmUW84TDNOMGVXeGxQZ284ZEdsMGJHVStjMlZ3WVR3dmRHbDBiR1UrQ2p4d1lYUm9JR2xrUFNKd1lYUm9OVFk0T1NJZ1kyeGhjM005SW5OME1DSWdaRDBpVFRFMk5pNDJMRFkxTGpSb0xUVXhMak5qTUMwNExqUXRNUzB4TkM0eExUTXRNVGRqTFRNdE5DNHpMVEV4TGpRdE5pNDBMVEkxTGpJdE5pNDBZeTB4TXk0MExEQXRNakl1TXl3eExqSXRNall1Tml3ekxqY0tDVk0xTkN3MU15NDJMRFUwTERZeExqaGpNQ3czTGpVc01TNDVMREV5TGpRc05TNDNMREUwTGpkak15NDBMREV1T0N3M0xqRXNNaTQ0TERFd0xqa3NNaTQ1VERneExEZ3dMakpqTWpJdU1pd3hMalVzTXpZc01pNDFMRFF4TGpZc015NHhZekUzTGpVc01TNDRMRE13TGpNc05pNDBMRE00TGpFc01UUUtDV00yTGpJc05TNDVMRGt1T1N3eE15NDJMREV4TGpFc01qTXVNV013TGpjc05pNDBMREV1TVN3eE1pNDVMREVzTVRrdU0yTXdMREUyTGpVdE1TNDJMREk0TGpZdE5DNDNMRE0yTGpKakxUVXVOeXd4TkM0eExURTRMalVzTWpJdU9TMHpPQzQxTERJMkxqWUtDV010T0M0ekxERXVOaTB5TVM0eExESXVOQzB6T0M0ekxESXVOR010TWpndU55d3dMVFE0TGpndE1TNDNMVFl3TGpFdE5TNHhZeTB4TXk0NUxUUXVNaTB5TXkweE1pNDRMVEkzTGpVdE1qVXVOa014TGpJc01UWTNMakVzTUN3eE5UVXVNaXd3TERFek9DNDFhRFV4TGpOMk5DNHpDZ2xqTUN3NExqa3NNaTQyTERFMExqWXNOeTQzTERFM0xqSmpOQ3d4TGprc09DNDBMREl1T0N3eE1pNDRMREl1T0dneE9DNDVZemt1Tml3d0xERTFMamd0TUM0MUxERTRMalF0TVM0MVl6UXVOeTB4TGprc055NDRMVFF1T1N3NUxqTXRPV013TGprdE15NHlMREV1TXkwMkxqVXNNUzR5TFRrdU9Rb0pZekF0T1MwekxqTXRNVFF1TlMwNUxqa3RNVFl1TldNdE1pNDFMVEF1T0MweE15NDVMVEV1T1Mwek5DNHpMVE11TW1NdE1UWXVOQzB4TGpJdE1qY3VPQzB5TGpNdE16UXVNaTB6TGpSakxURTJMamd0TXk0eExUSTRMVGt1Tmkwek15NDJMVEU1TGpRS0NVTXlMamNzT1RFdU5Td3dMaklzTnpndU9Td3dMaklzTmpKak1DMHhNaTQ0TERFdU15MHlNeTR4TERRdE16QXVPWE0yTGprdE1UTXVOaXd4TWk0NExURTNMalpqT0M0MkxUWXVNaXd4T1M0M0xUa3VPQ3d6TXk0eUxURXdMamxqTVRFdU1pMHhMREl6TGpjdE1TNDFMRE0zTGpNdE1TNDFDZ2xqTWpFdU5Td3dMRE0yTGprc01TNHlMRFEyTERNdU4yTXlNaTR6TERZc016TXVOU3d5TWk0NExETXpMalVzTlRBdU5FTXhOamN1TVN3MU55NDFMREUyTmk0NUxEWXdMamtzTVRZMkxqWXNOalV1TkNJdlBnbzhjR0YwYUNCcFpEMGljR0YwYURVMk9UTWlJR05zWVhOelBTSnpkREFpSUdROUlrMHpPVEl1TXl3eU1EVldNR2d4TURJdU9HTXhOQzR4TERBc01qUXVPQ3d4TGpFc016SXVNaXd6TGpWak1UWXVPU3cxTGpNc01qZ3VNaXd4Tmk0eExETTBMRE15TGpVS0NXTXpMRGd1Tml3MExqVXNNakV1TlN3MExqVXNNemd1T0dNd0xESXdMamd0TVM0M0xETTFMamN0TlN3ME5DNDRZeTAyTGpZc01UZ3RNakF1TVN3eU9DNHpMVFF3TGpZc016RmpMVEl1TkN3d0xqUXRNVEl1Tnl3d0xqZ3RNekF1T0N3eExqRnNMVGt1TWl3d0xqTm9MVE15TGpoMk5UTklNemt5TGpONkNna2dUVFEwTnk0MUxERXdOQzQxYURNMExqUmpNVEF1T1Mwd0xqUXNNVGN1TlMweExqSXNNVGt1T1MweUxqVmpNeTR5TFRFdU9DdzFMalV0TlM0MExEWXVOUzB4TUM0NFl6QXVPQzAxTGpNc01TNHlMVEV3TGpZc01TMHhObU13TFRndU55MHdMamN0TVRVdU1TMHlMakV0TVRrdU13b0pZeTB5TFRVdU9TMDJMamd0T1M0MUxURTBMakl0TVRBdU9HTXRNUzQxTFRBdU1pMDFMakV0TUM0ekxURXdMamN0TUM0emFDMHpOQzQ0VmpFd05DNDFlaUl2UGdvOGNHRjBhQ0JwWkQwaWNHRjBhRFUyT1RjaUlHTnNZWE56UFNKemREQWlJR1E5SWswMk9ETXVOaXd4TmprdU5XZ3ROek11T0d3dE9TNDVMRE0xTGpWb0xUVTNMakZNTmpBMExqVXNNR2c0TXk0eVREYzFNQ3d5TURWb0xUVTFMamxNTmpnekxqWXNNVFk1TGpWNklFMDJOekl1Tml3eE1qa3VOZ29KYkMweU5TNDRMVGc0TGpsc0xUSTFMakVzT0RndU9VZzJOekl1Tm5vaUx6NEtQSEJoZEdnZ2FXUTlJbkJoZEdnMU56QXhJaUJqYkdGemN6MGljM1F4SWlCa1BTSk5NekUyTGpJc01qZ3VPR015TVM0NUxEQXNOREl1Tml3NUxqa3NOVFl1TkN3eU5pNDViREV4TGprdE1qVXVOVU16TmpVc01URXVPU3d6TXprdU15d3hMamNzTXpFeUxqWXNNUzQ0Q2dsakxUUXpMalVzTUMwNE1DNDJMREkyTGpJdE9UVXVPU3cyTXk0MGFDMHlNeTR5YkMweE15NDNMREk1TGpOb01qa3VPR010TUM0eUxESXVOeTB3TGpRc05TNDBMVEF1TkN3NExqSmpNQ3d6TGpNc01DNHlMRFl1Tnl3d0xqVXNNVEJvTFRFMWJDMHhNeTQzTERJNUxqUm9Nell1TXdvSll6RTFMamNzTXpZdU1pdzFNaTQwTERZeExqY3NPVFV1TWl3Mk1TNDNZekl3TGpjc01DdzBNQzQ1TFRZc05UZ3VNUzB4Tnk0MWRpMHpObU10TWpZdU5Dd3pNQzR5TFRjeUxqSXNNek11TWkweE1ESXVOQ3cyTGpoakxUVXROQzQwTFRrdU5DMDVMalF0TVRNdE1UVm9OelpzTVRNdU55MHlPUzQwQ2dsSU1qUTBMakpqTFRBdU5TMHpMall0TUM0NExUY3VNaTB3TGpndE1UQXVPR013TFRJdU5Td3dMakV0TkM0NUxEQXVOQzAzTGpSb01UQTVMamhzTVRNdU55MHlPUzR6YUMweE1UUkRNalkyTGpJc05ESXVOeXd5T1RBdU1pd3lPQzQ1TERNeE5pNHlMREk0TGpnaUx6NEtQSEJoZEdnZ2FXUTlJbkJoZEdnMU56QTFJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NekUyTGpJc01qa3VOMk15TVM0MkxEQXNOREl1TVN3NUxqZ3NOVFV1Tnl3eU5pNDJiREF1T1N3eExqRnNNQzQyTFRFdU0yd3hNUzQ1TFRJMUxqVnNNQzR6TFRBdU5td3RNQzQxTFRBdU5Bb0pZeTB6Tmkwek15NDNMVGt3TGpVdE16Z3VNaTB4TXpFdU5TMHhNQzQzWXkweE5pNDRMREV4TGpNdE16QXNNamN1TXkwek55NDNMRFEyYkRBdU9DMHdMalpJTVRremJDMHdMaklzTUM0MWJDMHhNeTQzTERJNUxqUnNMVEF1Tml3eExqTm9NekV1TW13dE1DNDVMVEVLQ1dNdE1DNHlMRE10TUM0MExEVXVPQzB3TGpRc09DNHpZekFzTXk0MExEQXVNaXcyTGpjc01DNDFMREV3TGpGc01DNDVMVEZvTFRFMUxqVnNMVEF1TWl3d0xqVnNMVEV6TGpjc01qa3VOR3d0TUM0MkxERXVNbWd6Tnk0M2JDMHdMamd0TUM0MVl6RTJMalFzTXpjdU9DdzFOQ3cyTWk0eUxEazJMRFl5TGpJS0NXTXlNQzQ1TERBdU1TdzBNUzR6TFRZdU1TdzFPQzQyTFRFM0xqWnNNQzQwTFRBdU0xWXhORGhzTFRFdU5Td3hMamhqTFRJMkxqRXNNamt1T0MwM01TNDBMRE15TGpndE1UQXhMaklzTmk0M1l5MDBMamt0TkM0ekxUa3VNaTA1TGpNdE1USXVPQzB4TkM0NGJDMHdMamNzTVM0MGFEYzJMallLQ1d3d0xqSXRNQzQxYkRFekxqY3RNamt1Tkd3d0xqWXRNUzR5U0RJME5DNHliREF1T1N3d0xqaGpMVEF1TlMwekxqVXRNQzQ0TFRjdU1TMHdMamd0TVRBdU4yTXdMVEl1TkN3d0xqRXROQzQ1TERBdU5DMDNMak5zTFRBdU9Td3dMamhvTVRFd0xqUnNNQzR5TFRBdU5Vd3pOamdzTmpVdU5nb0piREF1TmkweExqTklNalV6TGpKc01DNDRMREV1TTBNeU5qWXVPQ3cwTXk0MUxESTVNQzQxTERJNUxqZ3NNekUyTGpJc01qa3VOeUJOTWpVekxqSXNOall1TVdneE1UUnNMVEF1T0MweExqSnNMVEV6TGpjc01qa3VOR3d3TGpndE1DNDFTREkwTWk0NWJDMHdMakVzTUM0NENnbGpMVEF1TWl3eUxqVXRNQzQwTERVdE1DNDBMRGN1TldNd0xETXVOeXd3TGpNc055NDBMREF1T0N3eE1Xd3dMakVzTUM0NFNETTBOV3d0TUM0NExURXVNMnd0TVRNdU55d3lPUzQwYkRBdU9DMHdMalZvTFRjM0xqZHNNQzQ1TERFdU5HTXlNaTR5TERNMExEWTNMamNzTkRNdU5pd3hNREV1Tnl3eU1TNDBDZ2xqTlM0MkxUTXVOeXd4TUM0M0xUZ3VNU3d4TlM0eUxURXpMakpzTFRFdU5TMHdMaloyTXpac01DNDBMVEF1TjBNek5UTXVNaXd4T1Rjc016TXpMakVzTWpBekxETXhNaTQyTERJd00yTXROREV1TWl3d0xUYzRMak10TWpRdE9UUXVOQzAyTVM0eGJDMHdMakl0TUM0MWFDMHpOaTQ1YkRBdU9Dd3hMak1LQ1d3eE15NDNMVEk1TGpSc0xUQXVPQ3d3TGpWb01UWnNMVEF1TVMweFl5MHdMak10TXk0ekxUQXVOUzAyTGpjdE1DNDFMVGt1T1dNd0xUSXVOU3d3TGpFdE5TNHlMREF1TkMwNExqSnNNQzR4TFRGb0xUTXdMamhzTUM0NExERXVNbXd4TXk0M0xUSTVMak5zTFRBdU9Dd3dMalZvTWpNdU9Bb0piREF1TWkwd0xqVmpOeTQyTFRFNExqUXNNakF1TlMwek5DNHhMRE0zTGpFdE5EVXVNbU0wTUM0ekxUSTNMRGt6TGprdE1qSXVOaXd4TWprdU1pd3hNQzQxYkMwd0xqSXRNV3d0TVRFdU9Td3lOUzQxYkRFdU5TMHdMakpqTFRJMUxqWXRNekV1TlMwM01TNDRMVE0yTGpRdE1UQXpMalF0TVRBdU9Bb0pZeTAzTERVdU55MHhNaTQ1TERFeUxqWXRNVGN1TkN3eU1DNDBiQzB3TGpnc01TNHpUREkxTXk0eUxEWTJMakY2SWk4K0Nqd3ZjM1puUGdvPVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCIgJiYgcnVkZXhHYXRld2F5Q29pbnMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGUgPT0gXCJydVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWdyZWVtZW50X3J1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWdyZWVtZW50X2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJ1ZGV4Tm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxX2luZm9ybWVkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVkZXhOb3RpY2UxSW5mb3JtZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2lucz17cnVkZXhHYXRld2F5Q29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9tZXJjaGFudC5yYWlkb2ZpbmFuY2UuZXUvbWVkaWEvODNlZWYzZDVhMTdiZjMwMGFmOTk4NmU5MTNjMmM5OWQucGRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZV90aGlyZF9wYXJ0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxX2luZm9ybWVkX3RoaXJkX3BhcnR5X3NlcnZpY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb0ZpbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXJMaXN0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBzZXJ2aWNlc0Rvd259ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVTZXJ2aWNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHJ1ZGV4R2F0ZXdheUNvaW5zID0gdGhpcy5wcm9wcy5ydWRleEJhY2tlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2luO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2VydmljZXMgPSB0aGlzLnJlbmRlclNlcnZpY2VzKHJ1ZGV4R2F0ZXdheUNvaW5zKTtcblxuICAgICAgICBjb25zdCBzZXJ2aWNlTmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBzZXJ2aWNlcy5tYXAoKHNlcnZpY2VzX29iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lcy5wdXNoKHNlcnZpY2VzX29iai5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNfb2JqLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZU5hbWUgPSBzZXJ2aWNlTmFtZXNbYWN0aXZlU2VydmljZV07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlRG93biA9IHNlcnZpY2VzRG93bi5nZXQoY3VycmVudFNlcnZpY2VOYW1lKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGFpbmVkID8gXCJncmlkLWNvbnRlbnRcIiA6IFwiZ3JpZC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jb250YWluZWQgPyBcIlwiIDogXCJncmlkLWNvbnRlbnRcIn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXBvc2l0TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZGVwb3NpdF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJkZXBvc2l0X21vZGFsX25ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zPXt0aGlzLnByb3BzLmJhY2tlZENvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpdGhkcmF3TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwid2l0aGRyYXdfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwid2l0aGRyYXdfbW9kYWxfbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VkQ29pbnM9e3RoaXMucHJvcHMuYmFja2VkQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImdhdGV3YXkucGhhc2Vfb3V0X3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlcG9zaXRfbW9kYWxfbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5kZXBvc2l0X21vZGFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMuZGVwb3NpdF9tb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5kZXBvc2l0LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ3aXRoZHJhd19tb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy53aXRoZHJhd19tb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLndpdGhkcmF3X21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS50aXRsZVwiIGNvbXBvbmVudD1cImgyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJkZXBvc2l0LXNob3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJyZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzbWFsbC1vcmRlci0yIG1lZGl1bS1vcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuc2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2V0U2VydmljZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlU2VydmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGdhdGV3YXkudW5hdmFpbGFibGVfJHtjdXJyZW50U2VydmljZU5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xIHNtYWxsLW9yZGVyLTEgbWVkaXVtLW9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA0MCwgd2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXJ2aWNlRG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aXZlU2VydmljZSAmJiBzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VydmljZXNbMF0udGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BY2NvdW50RGVwb3NpdFdpdGhkcmF3ID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50RGVwb3NpdFdpdGhkcmF3KTtcblxuY2xhc3MgRGVwb3NpdFN0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB1cGRhdGVHYXRld2F5QmFja2VycygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBY2NvdW50RGVwb3NpdFdpdGhkcmF3IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgRGVwb3NpdFN0b3JlV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmUsIEdhdGV3YXlTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgb3BlbkxlZGdlckJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcnVkZXhCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlJVREVYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBiaXRzcGFya0JhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiU1BBUktERVhcIixcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGJsb2NrVHJhZGVzQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJUUkFERVwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2l0YWRlbEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiQ0lUQURFTFwiLFxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgeGJ0c3hCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIlhCVFNYXCIsXG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlc0Rvd246IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmRvd24gfHwge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0IGZyb20gXCIuL1J1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuY2xhc3MgUnVEZXhHYXRld2F5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKHByb3BzLCB7YWN0aW9uOiBcImRlcG9zaXRcIn0pLFxuICAgICAgICAgICAgYWN0aW9uOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhBY3Rpb25cIiwgXCJkZXBvc2l0XCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fcnVkZXhcIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJQUFlcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucHJvdmlkZXIgIT09IHRoaXMucHJvcHMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4obmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGlvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luX3J1ZGV4XyR7dGhpcy5zdGF0ZS5hY3Rpb259YF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH0qL1xuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX3J1ZGV4XCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVDb2luOiBhY3RpdmVDb2luXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7W1wicnVkZXhBY3Rpb25cIl06IHR5cGV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y29pbnMsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVDb2luLCBhY3Rpb259ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNvaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkQ29pbnMgPSBjb2lucy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICBpZiAoIWEgfHwgIWEuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICA/IGEuZGVwb3NpdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgOiBhLndpdGhkcmF3YWxBbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbk9wdGlvbnMgPSBmaWx0ZXJlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbDtcblxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gb3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeCA9IG5hbWUgPT09IFwiUFBZXCIgPyBcIlwiIDogXCJSVURFWC5cIjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3ByZWZpeCArIG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luID0gZmlsdGVyZWRDb2lucy5maWx0ZXIoY29pbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpID09PSBhY3RpdmVDb2luXG4gICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbCA9PT0gYWN0aXZlQ29pbjtcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgaWYgKCFjb2luKSBjb2luID0gZmlsdGVyZWRDb2luc1swXTtcblxuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gdGhpcy5zdGF0ZS5hY3Rpb24gPT09IFwiZGVwb3NpdFwiO1xuXG4gICAgICAgIGxldCBzdXBwb3J0VXJsID0gXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb21cIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW1hcmdpbiB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJnYXRld2F5LmNob29zZV9cIiArIGFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9XCJleHRlcm5hbC1jb2luLXR5cGVzIGJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvaW4uc3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXk9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyX2FjY291bnQ9e2NvaW4uaXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0PXtjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZT17Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZT17Y29pbi5iYWNraW5nQ29pbi50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2FjY291bnQ9e2NvaW4uZ2F0ZXdheVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF93YWxsZXRfdHlwZT17Y29pbi53YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzX291dHB1dF9tZW1vcz17Y29pbi5zdXBwb3J0c01lbW9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1B1YmxpY0tleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luLnN1cHBvcnRzUHVibGljS2V5IHx8IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1R5cGU9e2NvaW4ubWVtb1R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl9hbW91bnQ9e2NvaW4ubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRlRmVlPXtjb2luLmdhdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17Y29pbi5wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM9e2NvaW4uY29uZmlybWF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3VwcG9ydDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5zdXBwb3J0X2Jsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luICYmIGNvaW4uc3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Fzc2V0LCB0bywgZnJvbUFjY291bnR9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNMaXN0PXtJbW11dGFibGUuTGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucmVjZW50X1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB0by5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tQWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zYWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJ1RGV4R2F0ZXdheSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBEaXNhYmxlQ29weVRleHQgZnJvbSBcIi4uL0Rpc2FibGVDb3B5VGV4dFwiO1xuaW1wb3J0IFJ1RGV4V2l0aGRyYXdNb2RhbCBmcm9tIFwiLi9SdURleFdpdGhkcmF3TW9kYWxcIjtcbmltcG9ydCBBY2NvdW50QmFsYW5jZSBmcm9tIFwiLi4vLi4vQWNjb3VudC9BY2NvdW50QmFsYW5jZVwiO1xuaW1wb3J0IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xuaW1wb3J0IHtyZXF1ZXN0RGVwb3NpdEFkZHJlc3N9IGZyb20gXCJsaWIvY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiO1xuaW1wb3J0IHtNb2RhbCwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge2F2YWlsYWJsZUdhdGV3YXlzfSBmcm9tIFwibGliL2NvbW1vbi9nYXRld2F5c1wiO1xuXG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlLnJlYWN0XCI7XG5cbmNsYXNzIFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnYXRld2F5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2FjY291bnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgaXNzdWVyX2FjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBkZXBvc2l0X2Fzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X3dhbGxldF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWNlaXZlX2Fzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2Y6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9tZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN1cHBvcnRzX291dHB1dF9tZW1vczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgc3VwcG9ydHNQdWJsaWNLZXk6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIG1lbW9UeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBtaW5fYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBnYXRlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjb25maXJtYXRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBhc3NldF9wcmVjaXNpb246IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZSA9IG5ldyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBxcmNvZGU6IFwiXCIsXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3M6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzID0gdGhpcy5hZGREZXBvc2l0QWRkcmVzcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gdGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlTW9kYWwgPSB0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2hvd1FyTW9kYWwgPSB0aGlzLnNob3dRck1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZVFyTW9kYWwgPSB0aGlzLmhpZGVRck1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd01vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TaG93UXJjb2RlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXJjb2RlOiB0ZXh0fSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93UXJNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UXJNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVRck1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXJNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiB0aGlzLmFkZERlcG9zaXRBZGRyZXNzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX25vdGlmeShzdSkge1xuICAgICAgICBsZXQgc3RyTiA9IFwiY29weV9hZGRyZXNzXCI7XG5cbiAgICAgICAgaWYgKHN1ID09IFwibWVtb1wiKSBzdHJOID0gXCJjb3B5X21lbW9cIjtcblxuICAgICAgICBOb3RpZmljYXRpb24uc3VjY2Vzcyh7XG4gICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm5vdGlmeS5cIiArIHN0ck4pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgIC8vICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKHRoaXMucHJvcHMuZ2F0ZXdheSwgYWNjb3VudF9uYW1lLCB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLCB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlKTtcbiAgICAvLyB9XG5cbiAgICBhZGREZXBvc2l0QWRkcmVzcyhyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NvdW50X25hbWV9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzfSk7XG4gICAgfVxuXG4gICAgZ2V0V2l0aGRyYXdNb2RhbElkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJ0aGlzLnByb3BzLmlzc3VlcjogXCIsIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQudG9KUygpIClcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwidGhpcy5yZWNlaXZlX2Fzc2V0Lmlzc3VlcjogXCIsIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC50b0pTKCkgKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJ3aXRoZHJhd19hc3NldF9cIiArXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZW1wdHlSb3cgPSA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCIsIG1pbkhlaWdodDogMTUwfX0gLz47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcblxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlc19vYmplY3QgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XG5cbiAgICAgICAgLy8gbGV0IGJhbGFuY2UgPSBcIjAgXCIgKyB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKSB7XG4gICAgICAgICAgICBsZXQgaGFzX25vbnplcm9fYmFsYW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0X2lkID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdF9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2Vfb2JqZWN0X2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSBiYWxhbmNlX29iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZSAhPSAwKSBoYXNfbm9uemVyb19iYWxhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc19ub256ZXJvX2JhbGFuY2UpIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBhY2NvdW50X2JhbGFuY2VzID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QudG9KUygpO1xuICAgICAgICAvLyBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcbiAgICAgICAgLy8gaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpO1xuICAgICAgICAvLyAgICAgaWYoIGN1cnJlbnRfYXNzZXRfaWQgKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGJhbGFuY2UgPSAoPHNwYW4+PFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiLz46IDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19Lz48L3NwYW4+KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzO1xuXG5cbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBxcmNvZGUgPSB0aGlzLnN0YXRlLnFyY29kZTtcblxuICAgICAgICBsZXQgZGVwb3NpdENvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMgJiYgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJpcnJldmVyc2libGVcIikge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubGFzdF9pcnJldmVyc2libGVcIiAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImJsb2Nrc1wiICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0Q29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5uX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3RoaXMucHJvcHMuY29uZmlybWF0aW9ucy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3X21vZGFsX2lkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBkZXBvc2l0X21lbW8gPSBudWxsO1xuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSA8c3Bhbj5wbGVhc2UgdXNlIHt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YuZ2V0KFwic3ltYm9sXCIpfSBpbnN0ZWFkLiA8c3BhbiBkYXRhLXRpcD17dGhpcy5wcm9wcy5kZXByZWNhdGVkX21lc3NhZ2V9IGRhdGEtcGxhY2U9XCJyaWdodFwiIGRhdGEtaHRtbD17dHJ1ZX0+PEljb24gbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCIgLz48L3NwYW4+PFJlYWN0VG9vbHRpcCAvPjwvc3Bhbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyB7XG4gICAgICAgIGxldCBjbGlwYm9hcmRUZXh0ID0gXCJcIjtcbiAgICAgICAgbGV0IG1lbW9UZXh0O1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtb19wcmVmaXg7XG4gICAgICAgIGxldCBjdXJyZW50R2F0ZXdheSA9IFwiUlVERVhcIjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uc2ltcGxlQXNzZXRHYXRld2F5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudDtcbiAgICAgICAgICAgIGlmICghIXRoaXMucHJvcHMubWVtb1R5cGUgJiYgdGhpcy5wcm9wcy5tZW1vVHlwZSA9PT0gXCJidHNpZFwiKSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2J0c2lkXCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKS5yZXBsYWNlKFwiMS4yLlwiLCBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXCJhcHBlbmRcIl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZF9kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPnttZW1vVGV4dH08L3NwYW4+O1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlICsgXCI6XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXJlY2VpdmVfYWRkcmVzcyAmJiAhdGhpcy5wcm9wcy5zdXBwb3J0c01lbW9zKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcy5tZW1vKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgYSBkZXBvc2l0IG1lbW8gKGxpa2UgZXRoZXJldW0pLCB3ZSBuZWVkIHRvIGRpc3BsYXkgYm90aCB0aGUgYWRkcmVzcyBhbmQgdGhlIG1lbW8gdGhleSBuZWVkIHRvIHNlbmRcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcztcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkZXBvc2l0X21lbW8gPSA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLm1lbW99PC9zcGFuPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgdW5pcXVlIGRlcG9zaXQgYWRkcmVzc2VzIHRvIHNlbGVjdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnlvdXJfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdENvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpPntkZXBvc2l0Q29uZmlybWF0aW9ufTwvaT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIiwgZm9udFNpemU6IFwiMS4xcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREUkVTUzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb3B5VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkudXNlX2NvcHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2FibGVDb3B5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNob3dRcmNvZGUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLnFyY29kZS5sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfbWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNhYmxlQ29weVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29weVRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnVzZV9jb3B5X2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNRU1POiA8Yj57ZGVwb3NpdF9tZW1vfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2hvd1FyY29kZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwucXJjb2RlLmxhYmVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVRck1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNRck1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVRck1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwb3NpdFFyQ29kZU1vZGFsIHRleHQ9e3FyY29kZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2NsaXBib2FyZFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLl9ub3RpZnkoXCJhZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtb1RleHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17bWVtb1RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLl9ub3RpZnkoXCJtZW1vXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Q29weSBtZW1vPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19zdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+V2hlbiB5b3Ugd2l0aGRyYXcge3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9LCB5b3Ugd2lsbCByZWNlaXZlIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9IGF0IGEgMToxIHJhdGlvIChtaW51cyBmZWVzKS48L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd190b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMS4zcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uV2l0aGRyYXcuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkud2l0aGRyYXdfY29pblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbjogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnNob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9uYW1lPXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9zeW1ib2w9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF93YWxsZXRfdHlwZT17dGhpcy5wcm9wcy5kZXBvc2l0X3dhbGxldF90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9zdXBwb3J0c1B1YmxpY0tleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19wcmVmaXg9e3dpdGhkcmF3X21lbW9fcHJlZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsX2lkPXt3aXRoZHJhd19tb2RhbF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXt0aGlzLnByb3BzLm1pbl9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17dGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKClbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBEZXBvc2l0UXJDb2RlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5wcm9wcy50ZXh0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMlwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgPFFSQ29kZSBzaXplPXsyMDB9IHZhbHVlPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwibm9uZVwifX0+e3RleHR9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIERpc2FibGVDb3B5VGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGRpc2FibGVDb3B5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICByZXBsYWNlQ29weVRleHQ6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNvcHkgPSB0aGlzLl9oYW5kbGVDb3B5LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRSZWYpIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuY2hpbGRSZWYpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLl9oYW5kbGVDb3B5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSAmJiB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2hhbmRsZUNvcHkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVDb3B5KGV2dCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVDb3B5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlQ29weVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5jbGlwYm9hcmREYXRhLnNldERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBsYWNlQ29weVRleHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gcmVmPXtyZWYgPT4gKHRoaXMuY2hpbGRSZWYgPSByZWYpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzYWJsZUNvcHlUZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IHt2YWxpZGF0ZUFkZHJlc3MsIFdpdGhkcmF3QWRkcmVzc2VzfSBmcm9tIFwiY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge2NoZWNrRmVlU3RhdHVzQXN5bmMsIGNoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcbmltcG9ydCB7UHJpY2UsIEFzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBSdURleFdpdGhkcmF3TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGlzc3VlcjogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX3N5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3V0cHV0X3dhbGxldF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvdXRwdXRfc3VwcG9ydHNfbWVtb3M6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgYW1vdW50X3RvX3dpdGhkcmF3OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LFxuICAgICAgICBtaW5fYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBnYXRlRmVlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudF90b193aXRoZHJhdyxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbl9pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxuICAgICAgICAgICAgICAgIHByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleTogXCJcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHk6IHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBwcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOlxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuYXNzZXRzX2J5X3N5bWJvbC5nZXQocHJvcHMuZmVlX2Fzc2V0X3N5bWJvbCkgfHxcbiAgICAgICAgICAgICAgICBcIjEuMy4wXCIsXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jaGVja01pbkFtb3VudCA9IHRoaXMuX2NoZWNrTWluQW1vdW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZlZSA9IGRlYm91bmNlKHRoaXMuX3VwZGF0ZUZlZS5iaW5kKHRoaXMpLCAyNTApO1xuXG4gICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsID0gdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwgPSB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5Nb3VudGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50ICYmXG4gICAgICAgICAgICBucC5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBucC5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IG5ldyBBc3NldCh7YW1vdW50OiAwfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dDb25maXJtYXRpb25Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlQ29uZmlybWF0aW9uTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF91cGRhdGVGZWUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X2lkLCBmcm9tX2FjY291bnR9ID0gc3RhdGU7XG4gICAgICAgIGNvbnN0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzWzBdICE9PSBmZWVfYXNzZXRfaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQgPSBmZWVfYXNzZXRfdHlwZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgYWNjb3VudElEOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmZWVJRDogZmVlX2Fzc2V0X2lkLFxuICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoe2ZlZSwgaGFzQmFsYW5jZSwgaGFzUG9vbEJhbGFuY2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51bk1vdW50ZWQpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBhY2NvdW50ID0gc3RhdGUuZnJvbV9hY2NvdW50O1xuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzOiBhc3NldHN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgLy8gY29uc3QgYXNzZXRzID0gW1wiMS4zLjBcIiwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV07XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYV0gPSBzdGF0dXNbaWR4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHN0YXRlLmZlZVN0YXR1cywgZmVlU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QW1vdW50Q2hhbmdlKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCAhPT0gdW5kZWZpbmVkICYmICFwYXJzZUZsb2F0KGFtb3VudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tNaW5BbW91bnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdENoYW5nZWQoaW5kZXgpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKVtpbmRleF07XG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xuICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgb3B0aW9uc19pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkKGUpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQoZSkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X3B1YmxpY0tleSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IG5ld193aXRoZHJhd19wdWJsaWNLZXksXG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5OlxuICAgICAgICAgICAgICAgIG5ld193aXRoZHJhd19wdWJsaWNLZXkgIT0gXCJcIiA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzLCBwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHtcbiAgICAgICAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgICAgICAgd2FsbGV0VHlwZTogcHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgbmV3QWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGpzb24gPSB7aXNWYWxpZDogZmFsc2V9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyA9PT0gbmV3X3dpdGhkcmF3X2FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IGpzb24uaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5OiBqc29uLmhhc093blByb3BlcnR5KFwicHVibGljS2V5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGpzb24ucHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHk6IHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8ganNvbi5oYXNPd25Qcm9wZXJ0eShcInB1YmxpY0tleVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCB3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBiYWxhbmNlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghYmFsYW5jZSB8fCAhZmVlQW1vdW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGhhc0JhbGFuY2UgPSBjaGVja0JhbGFuY2UoXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGJhbGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGhhc0JhbGFuY2UgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xuICAgICAgICByZXR1cm4gaGFzQmFsYW5jZTtcbiAgICB9XG5cbiAgICBfY2hlY2tNaW5BbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHt3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAod2l0aGRyYXdfYW1vdW50ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxlc3NUaGFuTWluaW11bSA9XG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQgPFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKTtcbiAgICAgICAgLyogICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJYXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbih0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbilcbiAgICAgICAgKTsqL1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5BbW91bnRFcnJvcjogbGVzc1RoYW5NaW5pbXVtfSk7XG4gICAgICAgIHJldHVybiBsZXNzVGhhbk1pbmltdW07XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3MgJiZcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MubGVuZ3RoKSAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQgIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19pc192YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQpID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xuICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgZmVlX2Fzc2V0X2lkfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8sL2csXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBzZW5kQW1vdW50ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IGFzc2V0LmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhbDogYW1vdW50XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlci5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFtb3VudC5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIHRoaXMuc3RhdGUud2l0aGRyYXdfcHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIG5ldyBCdWZmZXIodGhpcy5zdGF0ZS5tZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdENvbmZpcm1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwoKTtcblxuICAgICAgICBpZiAoIVdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xuICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHdpdGhkcmF3YWxzLmluZGV4T2YodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0O1xuICAgICAgICBsZXQgcHJlY2lzaW9uID0gdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihhc3NldC5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICBsZXQgYW1vdW50ID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIC8sL2csXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgZmVlX2Fzc2V0X2lkfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlci5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHBhcnNlSW50KGFtb3VudCAqIHByZWNpc2lvbiwgMTApLFxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgdGhpcy5zdGF0ZS53aXRoZHJhd19wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUubWVtb1xuICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgbmV3IEJ1ZmZlcih0aGlzLnN0YXRlLm1lbW8sIFwidXRmLThcIilcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkRyb3BEb3duTGlzdCgpIHtcbiAgICAgICAgaWYgKFdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpdGhkcmF3X2FkZHJlc3NfZmlyc3Q6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0V2l0aGRyYXdNb2RhbElkKCkge1xuICAgICAgICByZXR1cm4gXCJjb25maXJtYXRpb25cIjtcbiAgICB9XG5cbiAgICBvbkFjY291bnRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCkpLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5iYWxhbmNlLmdldChcImJhbGFuY2VcIiksXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IHRoZSBmZWUgaWYgaXQgaXMgdXNpbmcgdGhlIHNhbWUgYXNzZXRcbiAgICAgICAgICAgIGlmICh0b3RhbC5hc3NldF9pZCA9PT0gZmVlQW1vdW50LmFzc2V0X2lkKSB7XG4gICAgICAgICAgICAgICAgdG90YWwubWludXMoZmVlQW1vdW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogdG90YWwuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TmVzdGVkUmVmKHJlZikge1xuICAgICAgICB0aGlzLm5lc3RlZFJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWQoe2Fzc2V0fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50LCBmZWVTdGF0dXN9ID0gc3RhdGU7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzRmVlUG9vbEJhbGFuY2UoaWQpIHtcbiAgICAgICAgICAgIGlmIChmZWVTdGF0dXNbaWRdID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1c1tpZF0gJiYgZmVlU3RhdHVzW2lkXS5oYXNQb29sQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0JhbGFuY2UoaWQpIHtcbiAgICAgICAgICAgIGlmIChmZWVTdGF0dXNbaWRdID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1c1tpZF0gJiYgZmVlU3RhdHVzW2lkXS5oYXNCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZlZV9hc3NldF90eXBlcyA9IFtdO1xuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gc3RhdGUuZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudF9iYWxhbmNlcykge1xuICAgICAgICAgICAgbGV0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3Qoa2V5KTtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcbiAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0ICYmIGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBhc3NldHMgdGhhdCBkbyBub3QgaGF2ZSB2YWxpZCBjb3JlIGV4Y2hhbmdlIHJhdGVzXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlSXNWYWxpZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbmV3IEFzc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG5ldyBBc3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlSXNWYWxpZCA9IHAuaXNWYWxpZCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQuZ2V0KFwiaWRcIikgIT09IFwiMS4zLjBcIiAmJiAhcHJpY2VJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5zcGxpY2UoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gZmVlX2Fzc2V0X3R5cGVzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoYXNGZWVQb29sQmFsYW5jZShhKSAmJiBoYXNCYWxhbmNlKGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge2ZlZV9hc3NldF90eXBlc307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQsIHdpdGhkcmF3X3B1YmxpY0tleSwgbWVtb30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc3RvcmVkQWRkcmVzcyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICk7XG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcblxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGxldCBhc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpO1xuXG4gICAgICAgIGxldCB3aXRoZHJhd01vZGFsSWQgPSB0aGlzLmdldFdpdGhkcmF3TW9kYWxJZCgpO1xuICAgICAgICBsZXQgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSBudWxsO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgIGxldCBjb25maXJtYXRpb24gPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnNfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgIXN0b3JlZEFkZHJlc3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJ1ZGV4LWRpc2FibGVkLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJydWRleC1vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3N0b3JlZEFkZHJlc3MubWFwKGZ1bmN0aW9uKG5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TZWxlY3RDaGFuZ2VkLmJpbmQodGhpcywgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxuICAgICAgICAgICAgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyAmJiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MubGVuZ3RoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnZhbGlkX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5fdHlwZT17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXRDb25maXJtYXRpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNvbmZpcm1hdGlvbi5hY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmNvbmZpcm1hdGlvbi50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKVxuICAgICAgICAgICAgLy8gICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IDxJY29uIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5jaGVja21hcmtfY2lyY2xlLm9wZXJhdGlvbl9zdWNjZWVkXCIgY2xhc3NOYW1lPVwic3VjY2Vzc1wiIC8+O1xuICAgICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgICAgLy8gICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IDxJY29uIG5hbWU9XCJjcm9zcy1jaXJjbGVcIiB0aXRsZT1cImljb25zLmNyb3NzX2NpcmNsZS5vcGVyYXRpb25fZmFpbGVkXCIgY2xhc3NOYW1lPVwiYWxlcnRcIiAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XG4gICAgICAgIGxldCB3aXRoZHJhd19tZW1vID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNfbWVtb3MpIHtcbiAgICAgICAgICAgIHdpdGhkcmF3X21lbW8gPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5tZW1vXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZW1vQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVzdGltYXRlIGZlZSBWQVJJQUJMRVNcbiAgICAgICAgbGV0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG5cbiAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X2Fzc2V0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7OiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXQtY3Vyc29yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjb3VudEJhbGFuY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWxhbmNlID0gXCJObyBmdW5kc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIwcHhcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcgYW1vdW50ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibW9kYWwud2l0aGRyYXcuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QW1vdW50Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtcHR5X3dpdGhkcmF3X3ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy52YWxpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5taW5BbW91bnRFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRfZXJyb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudD17dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRmVlIHNlbGVjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmVlQW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGdhdGVfZmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkNhbGxiYWNrPXt0aGlzLnNldE5lc3RlZFJlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5nZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtmZWVfYXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc0JhbGFuY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GZWVCYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5oYXNQb29sQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub1Bvb2xCYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBHYXRlIGZlZSAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZ2F0ZUZlZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3IgcmlnaHQtc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZmVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXNlbGVjdC1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25Ecm9wRG93bkxpc3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzk2NjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1wb3NpdGlvbi1vcHRpb25zXCI+e29wdGlvbnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW52YWxpZF9hZGRyZXNzX21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBmb3IgUHVibGljS2V5IGlucHV0IChleC5QUklaTSkgKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LnB1YmxpY19rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1zZWxlY3QtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfcHVibGljS2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1lbW8gaW5wdXQgKi99XG4gICAgICAgICAgICAgICAgICAgIHt3aXRoZHJhd19tZW1vfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaXRoZHJhdy9DYW5jZWwgYnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5BbW91bnRFcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLndpdGhkcmF3LnN1Ym1pdFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5wZXJtLmNhbmNlbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1hdGlvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJ1RGV4V2l0aGRyYXdNb2RhbCA9IEJpbmRUb0NoYWluU3RhdGUoUnVEZXhXaXRoZHJhd01vZGFsKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBSdURleFdpdGhkcmF3TW9kYWwsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9zeW1ib2w6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiZmVlX2Fzc2V0XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBscyBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7cnVkZXhBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xuY29uc3QgcnVkZXhTdG9yYWdlID0gbmV3IGxzKFwiXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2luTGlzdCh1cmwgPSBydWRleEFQSXMuQkFTRSArIHJ1ZGV4QVBJcy5DT0lOU19MSVNUKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge21ldGhvZDogXCJwb3N0XCJ9KVxuICAgICAgICAudGhlbihyZXBseSA9PlxuICAgICAgICAgICAgcmVwbHkuanNvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZmV0Y2hpbmcgcnVkZXggbGlzdCBvZiBjb2luc1wiLCBlcnIsIHVybCk7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdERlcG9zaXRBZGRyZXNzKHtcbiAgICBpbnB1dENvaW5UeXBlLFxuICAgIG91dHB1dENvaW5UeXBlLFxuICAgIG91dHB1dEFkZHJlc3MsXG4gICAgdXJsID0gcnVkZXhBUElzLkJBU0UsXG4gICAgc3RhdGVDYWxsYmFja1xufSkge1xuICAgIGxldCBib2R5ID0ge1xuICAgICAgICBpbnB1dENvaW5UeXBlLFxuICAgICAgICBvdXRwdXRDb2luVHlwZSxcbiAgICAgICAgb3V0cHV0QWRkcmVzc1xuICAgIH07XG5cbiAgICBsZXQgYm9keV9zdHJpbmcgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgIGZldGNoKHVybCArIHJ1ZGV4QVBJcy5ORVdfREVQT1NJVF9BRERSRVNTLCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9KSxcbiAgICAgICAgYm9keTogYm9keV9zdHJpbmdcbiAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlcGx5ID0+IHtcbiAgICAgICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAganNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJyZXBseTogXCIsIGpzb24gKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczoganNvbi5pbnB1dEFkZHJlc3MgfHwgXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtbzoganNvbi5pbnB1dE1lbW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGpzb24uZXJyb3IgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKSBzdGF0ZUNhbGxiYWNrKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNhbGxiYWNrKHthZGRyZXNzOiBcInVua25vd25cIiwgbWVtbzogbnVsbH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiZXJyb3I6IFwiLGVycm9yICApO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZUNhbGxiYWNrKHthZGRyZXNzOiBcInVua25vd25cIiwgbWVtbzogbnVsbH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFkZHJlc3Moe1xuICAgIHVybCA9IHJ1ZGV4QVBJcy5CQVNFLFxuICAgIHdhbGxldFR5cGUsXG4gICAgbmV3QWRkcmVzc1xufSkge1xuICAgIGlmICghbmV3QWRkcmVzcykgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiByZXMoKSk7XG4gICAgcmV0dXJuIGZldGNoKHVybCArIFwiL3dhbGxldHMvXCIgKyB3YWxsZXRUeXBlICsgXCIvY2hlY2stYWRkcmVzc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9KSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2FkZHJlc3M6IG5ld0FkZHJlc3N9KVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlcGx5ID0+IHJlcGx5Lmpzb24oKS50aGVuKGpzb24gPT4ganNvbikpXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZGF0ZSBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1dpdGhkcmF3YWxBZGRyZXNzKHdhbGxldCkge1xuICAgIHJldHVybiBydWRleFN0b3JhZ2UuaGFzKGBoaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCk7XG59XG5cbmZ1bmN0aW9uIHNldFdpdGhkcmF3YWxBZGRyZXNzZXMoe3dhbGxldCwgYWRkcmVzc2VzfSkge1xuICAgIHJ1ZGV4U3RvcmFnZS5zZXQoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBhZGRyZXNzZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzKHdhbGxldCkge1xuICAgIHJldHVybiBydWRleFN0b3JhZ2UuZ2V0KGBoaXN0b3J5X2FkZHJlc3NfJHt3YWxsZXR9YCwgW10pO1xufVxuXG5mdW5jdGlvbiBzZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Moe3dhbGxldCwgYWRkcmVzc30pIHtcbiAgICBydWRleFN0b3JhZ2Uuc2V0KGBoaXN0b3J5X2FkZHJlc3NfbGFzdF8ke3dhbGxldH1gLCBhZGRyZXNzKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzKHdhbGxldCkge1xuICAgIHJldHVybiBydWRleFN0b3JhZ2UuZ2V0KGBoaXN0b3J5X2FkZHJlc3NfbGFzdF8ke3dhbGxldH1gLCBcIlwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IFdpdGhkcmF3QWRkcmVzc2VzID0ge1xuICAgIGhhczogaGFzV2l0aGRyYXdhbEFkZHJlc3MsXG4gICAgc2V0OiBzZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxuICAgIGdldDogZ2V0V2l0aGRyYXdhbEFkZHJlc3NlcyxcbiAgICBzZXRMYXN0OiBzZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3MsXG4gICAgZ2V0TGFzdDogZ2V0TGFzdFdpdGhkcmF3YWxBZGRyZXNzXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhIGJhbGFuY2Vfb2JqZWN0LCBkaXNwbGF5cyBpdCBpbiBhIHByZXR0eSB3YXlcclxuICpcclxuICogIEV4cGVjdHMgb25lIHByb3BlcnR5LCAnYmFsYW5jZScgd2hpY2ggc2hvdWxkIGJlIGEgYmFsYW5jZV9vYmplY3QgaWRcclxuICovXHJcblxyXG5jbGFzcyBBY2NvdW50QmFsYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBhc3NldF9pZCA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VfaWQgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgYXNzZXRfaWRdKTtcclxuXHJcbiAgICAgICAgaWYgKGJhbGFuY2VfaWQpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2VfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dGhpcy5wcm9wcy5yZXBsYWNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAwJm5ic3A7PEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dGhpcy5wcm9wcy5yZXBsYWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudEJhbGFuY2UpO1xyXG4iLCJpbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuXG5jbGFzcyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBpbmNyZW1lbnQgdGhpcyB0byBmb3JjZSBnZW5lcmF0aW5nIG5ldyBhZGRyZXNzZXMgZm9yIGFsbCBtYXBwaW5nc1xuICAgICAgICB0aGlzLmN1cnJlbnRfcnVkZXhfYWRkcmVzc19jYWNoZV92ZXJzaW9uX3N0cmluZyA9IFwiMVwiO1xuICAgIH1cblxuICAgIGdldEluZGV4Rm9yRGVwb3NpdEtleUluRXhjaGFuZ2UoXG4gICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgKSB7XG4gICAgICAgIGxldCBhcmdzID0gW1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X3J1ZGV4X2FkZHJlc3NfY2FjaGVfdmVyc2lvbl9zdHJpbmcsXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwcmV2aW91cywgY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLmNvbmNhdChcIltcIiwgY3VycmVudCwgXCJdXCIpO1xuICAgICAgICB9LCBcIlwiKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHtcImFkZHJlc3NcIjogYWRkcmVzcywgXCJtZW1vXCI6IG1lbW99LCB3aXRoIGEgbnVsbCBtZW1vIGlmIG5vdCBhcHBsaWNhYmxlXG4gICAgZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKFxuICAgICAgICBleGNoYW5nZV9uYW1lLFxuICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxuICAgICkge1xuICAgICAgICBsZXQgd2FsbGV0ID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCk7XG4gICAgICAgIGlmICghd2FsbGV0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXMgfHwge307XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV0gPVxuICAgICAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSB8fCB7fTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRJbmRleEZvckRlcG9zaXRLZXlJbkV4Y2hhbmdlKFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxuICAgICAgICApO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XSB8fCBbXTtcblxuICAgICAgICBsZXQgbnVtYmVyX29mX2tleXMgPSB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XS5sZW5ndGg7XG4gICAgICAgIGlmIChudW1iZXJfb2Zfa2V5cylcbiAgICAgICAgICAgIHJldHVybiB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XVtcbiAgICAgICAgICAgICAgICBudW1iZXJfb2Zfa2V5cyAtIDFcbiAgICAgICAgICAgIF07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICBleGNoYW5nZV9uYW1lLFxuICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZSxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgbWVtb1xuICAgICkge1xuICAgICAgICBpZiAoYWRkcmVzcyA9PT0gXCJ1bmtub3duXCIpIHJldHVybjtcblxuICAgICAgICBsZXQgd2FsbGV0ID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCk7XG4gICAgICAgIGlmICghd2FsbGV0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5cyA9IHdhbGxldC5kZXBvc2l0X2tleXMgfHwge307XG4gICAgICAgIHdhbGxldC5kZXBvc2l0X2tleXNbZXhjaGFuZ2VfbmFtZV0gPVxuICAgICAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXSB8fCB7fTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRJbmRleEZvckRlcG9zaXRLZXlJbkV4Y2hhbmdlKFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgaW5wdXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZVxuICAgICAgICApO1xuICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XSA9XG4gICAgICAgICAgICB3YWxsZXQuZGVwb3NpdF9rZXlzW2V4Y2hhbmdlX25hbWVdW2luZGV4XSB8fCBbXTtcbiAgICAgICAgd2FsbGV0LmRlcG9zaXRfa2V5c1tleGNoYW5nZV9uYW1lXVtpbmRleF0ucHVzaCh7XG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgbWVtbzogbWVtb1xuICAgICAgICB9KTtcbiAgICAgICAgV2FsbGV0RGIuX3VwZGF0ZVdhbGxldCgpO1xuICAgIH1cbn0gLy8gUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlXG5cbmV4cG9ydCBkZWZhdWx0IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9Db21wb25lbnQnKSxcbiAgICBDb3B5VG9DbGlwYm9hcmQgPSBfcmVxdWlyZS5Db3B5VG9DbGlwYm9hcmQ7XG5cbkNvcHlUb0NsaXBib2FyZC5Db3B5VG9DbGlwYm9hcmQgPSBDb3B5VG9DbGlwYm9hcmQ7XG5tb2R1bGUuZXhwb3J0cyA9IENvcHlUb0NsaXBib2FyZDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNvcHlUb0NsaXBib2FyZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NvcHlUb0NsaXBib2FyZCA9IHJlcXVpcmUoJ2NvcHktdG8tY2xpcGJvYXJkJyk7XG5cbnZhciBfY29weVRvQ2xpcGJvYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvcHlUb0NsaXBib2FyZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29weVRvQ2xpcGJvYXJkID0gZXhwb3J0cy5Db3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvcHlUb0NsaXBib2FyZCwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvcHlUb0NsaXBib2FyZCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weVRvQ2xpcGJvYXJkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb3B5VG9DbGlwYm9hcmQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb3B5VG9DbGlwYm9hcmQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMudGV4dCxcbiAgICAgICAgICBvbkNvcHkgPSBfdGhpcyRwcm9wcy5vbkNvcHksXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvcHRpb25zID0gX3RoaXMkcHJvcHMub3B0aW9ucztcblxuXG4gICAgICB2YXIgZWxlbSA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBfY29weVRvQ2xpcGJvYXJkMi5kZWZhdWx0KSh0ZXh0LCBvcHRpb25zKTtcblxuICAgICAgaWYgKG9uQ29weSkge1xuICAgICAgICBvbkNvcHkodGV4dCwgcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQnlwYXNzIG9uQ2xpY2sgaWYgaXQgd2FzIHByZXNlbnRcbiAgICAgIGlmIChlbGVtICYmIGVsZW0ucHJvcHMgJiYgdHlwZW9mIGVsZW0ucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbGVtLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvcHlUb0NsaXBib2FyZCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfdGV4dCA9IF9wcm9wcy50ZXh0LFxuICAgICAgICAgIF9vbkNvcHkgPSBfcHJvcHMub25Db3B5LFxuICAgICAgICAgIF9vcHRpb25zID0gX3Byb3BzLm9wdGlvbnMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3RleHQnLCAnb25Db3B5JywgJ29wdGlvbnMnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChlbGVtLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29weVRvQ2xpcGJvYXJkO1xufShfcmVhY3QyLmRlZmF1bHQuUHVyZUNvbXBvbmVudCk7XG5cbkNvcHlUb0NsaXBib2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ29weTogdW5kZWZpbmVkLFxuICBvcHRpb25zOiB1bmRlZmluZWRcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVzZWxlY3RDdXJyZW50ID0gcmVxdWlyZSgndG9nZ2xlLXNlbGVjdGlvbicpO1xuXG52YXIgZGVmYXVsdE1lc3NhZ2UgPSAnQ29weSB0byBjbGlwYm9hcmQ6ICN7a2V5fSwgRW50ZXInO1xuXG5mdW5jdGlvbiBmb3JtYXQobWVzc2FnZSkge1xuICB2YXIgY29weUtleSA9ICgvbWFjIG9zIHgvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ+KMmCcgOiAnQ3RybCcpICsgJytDJztcbiAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvI3tcXHMqa2V5XFxzKn0vZywgY29weUtleSk7XG59XG5cbmZ1bmN0aW9uIGNvcHkodGV4dCwgb3B0aW9ucykge1xuICB2YXIgZGVidWcsIG1lc3NhZ2UsIHJlc2VsZWN0UHJldmlvdXMsIHJhbmdlLCBzZWxlY3Rpb24sIG1hcmssIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgaWYgKCFvcHRpb25zKSB7IG9wdGlvbnMgPSB7fTsgfVxuICBkZWJ1ZyA9IG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XG4gIHRyeSB7XG4gICAgcmVzZWxlY3RQcmV2aW91cyA9IGRlc2VsZWN0Q3VycmVudCgpO1xuXG4gICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtYXJrLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAvLyByZXNldCB1c2VyIHN0eWxlcyBmb3Igc3BhbiBlbGVtZW50XG4gICAgbWFyay5zdHlsZS5hbGwgPSAndW5zZXQnO1xuICAgIC8vIHByZXZlbnRzIHNjcm9sbGluZyB0byB0aGUgZW5kIG9mIHRoZSBwYWdlXG4gICAgbWFyay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgbWFyay5zdHlsZS50b3AgPSAwO1xuICAgIG1hcmsuc3R5bGUuY2xpcCA9ICdyZWN0KDAsIDAsIDAsIDApJztcbiAgICAvLyB1c2VkIHRvIHByZXNlcnZlIHNwYWNlcyBhbmQgbGluZSBicmVha3NcbiAgICBtYXJrLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJztcbiAgICAvLyBkbyBub3QgaW5oZXJpdCB1c2VyLXNlbGVjdCAoaXQgbWF5IGJlIGBub25lYClcbiAgICBtYXJrLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAndGV4dCc7XG4gICAgbWFyay5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gJ3RleHQnO1xuICAgIG1hcmsuc3R5bGUubXNVc2VyU2VsZWN0ID0gJ3RleHQnO1xuICAgIG1hcmsuc3R5bGUudXNlclNlbGVjdCA9ICd0ZXh0JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFyayk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlKG1hcmspO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgaWYgKCFzdWNjZXNzZnVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcHkgY29tbWFuZCB3YXMgdW5zdWNjZXNzZnVsJyk7XG4gICAgfVxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gY29weSB1c2luZyBleGVjQ29tbWFuZDogJywgZXJyKTtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ3RyeWluZyBJRSBzcGVjaWZpYyBzdHVmZicpO1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0JywgdGV4dCk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjb3B5IHVzaW5nIGNsaXBib2FyZERhdGE6ICcsIGVycik7XG4gICAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKCdmYWxsaW5nIGJhY2sgdG8gcHJvbXB0Jyk7XG4gICAgICBtZXNzYWdlID0gZm9ybWF0KCdtZXNzYWdlJyBpbiBvcHRpb25zID8gb3B0aW9ucy5tZXNzYWdlIDogZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgd2luZG93LnByb21wdChtZXNzYWdlLCB0ZXh0KTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UocmFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXJrKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1hcmspO1xuICAgIH1cbiAgICByZXNlbGVjdFByZXZpb3VzKCk7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vLi4vLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQge1xuICAgIFJlY2VudFRyYW5zYWN0aW9ucyxcbiAgICBUcmFuc2FjdGlvbldyYXBwZXJcbn0gZnJvbSBcImNvbXBvbmVudHMvQWNjb3VudC9SZWNlbnRUcmFuc2FjdGlvbnNcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgXCJyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzXCI7XG5cbmltcG9ydCBSYWlkb0RlcG9zaXRSZXF1ZXN0IGZyb20gXCIuL1JhaWRvRGVwb3NpdFJlcXVlc3RcIjtcblxuY2xhc3MgUmFpZG9GaW5hbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKHByb3BzLCB7YWN0aW9uOiBcImRlcG9zaXRcIn0pLFxuICAgICAgICAgICAgYWN0aW9uOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhBY3Rpb25SYWlkb1wiLCBcImRlcG9zaXRcIiksXG5cbiAgICAgICAgICAgIGFjdGl2ZVBheW1lbnRNZXRob2Q6IFwiQ0FSREVcIixcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zZXRBY3RpdmVSYWlkb0NvaW4gPSB0aGlzLl9zZXRBY3RpdmVSYWlkb0NvaW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfc2V0QWN0aXZlUmFpZG9Db2luKG1ldGgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlUGF5bWVudE1ldGhvZDogbWV0aH0pO1xuICAgIH1cblxuICAgIF9nZXRBY3RpdmVDb2luKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICBsZXQgY2FjaGVkQ29pbiA9IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVDb2luX1JhaWRvXCIsIG51bGwpO1xuICAgICAgICBsZXQgZmlyc3RUaW1lQ29pbiA9IFwiQlRDXCI7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gY2FjaGVkQ29pbiA/IGNhY2hlZENvaW4gOiBmaXJzdFRpbWVDb2luO1xuXG4gICAgICAgIGlmIChzdGF0ZS5hY3Rpb24gPT09IFwid2l0aGRyYXdcIikge1xuICAgICAgICAgICAgYWN0aXZlQ29pbiA9IHRoaXMuX2ZpbmRDb2luQnlOYW1lKHByb3BzLCBhY3RpdmVDb2luKS5zeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmVDb2luOiBcIithY3RpdmVDb2luKTtcblxuICAgICAgICByZXR1cm4gYWN0aXZlQ29pbjtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnByb3ZpZGVyICE9PSB0aGlzLnByb3BzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKG5leHRQcm9wcywgdGhpcy5zdGF0ZS5hY3Rpb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0Q29pbihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlQ29pbjogZS52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBsZXQgY29pbk5hbWUgPSBlLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX1JhaWRvXCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhY3RpdmVDb2luOiBcIiArIGFjdGl2ZUNvaW4pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiB0eXBlLFxuICAgICAgICAgICAgYWN0aXZlQ29pbjogYWN0aXZlQ29pblxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1tcInJ1ZGV4QWN0aW9uUmFpZG9cIl06IHR5cGV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y29pbnMsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVDb2luLCBhY3Rpb259ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNvaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyZWRDb2lucyA9IGNvaW5zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIGlmICghYSB8fCAhYS5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYS5kZXBvc2l0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICA6IGEud2l0aGRyYXdhbEFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luT3B0aW9ucyA9IGZpbHRlcmVkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZml4ID0gbmFtZSA9PT0gXCJQUFlcIiA/IFwiXCIgOiBcIlJVREVYLlwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJlZml4ICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW4gPSBmaWx0ZXJlZENvaW5zLmZpbHRlcihjb2luID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IGFjdGl2ZUNvaW5cbiAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sID09PSBhY3RpdmVDb2luO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAoIWNvaW4pIGNvaW4gPSBmaWx0ZXJlZENvaW5zWzBdO1xuXG4gICAgICAgIGxldCBpc0RlcG9zaXQgPSB0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IHN1cHBvcnRVcmwgPSBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbVwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImdhdGV3YXkuY2hvb3NlX1wiICsgYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjoqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRcIiAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by50aXRsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb0RlcG9zaXRSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29pbi5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17Y29pbi5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e2NvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfY29pbl90eXBlPXtjb2luLmJhY2tpbmdDb2luLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYWNjb3VudD17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UeXBlPXtjb2luLm1lbW9UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXtjb2luLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBheW1lbnRNZXRob2Q9e3RoaXMuc3RhdGUuYWN0aXZlUGF5bWVudE1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUmFpZG9Db2luPXsobSkgPT4gKHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbihtKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlN1cHBvcnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguc3VwcG9ydF9ibG9ja1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1cHBvcnRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1cHBvcnRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29pbiAmJiBjb2luLnN5bWJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFjY291bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHthc3NldCwgdG8sIGZyb21BY2NvdW50fSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjZW50VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzTGlzdD17SW1tdXRhYmxlLkxpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3RWaWV3PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsSGVpZ2h0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9XCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnJlY2VudF9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWx0ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogdG8uZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbUFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2FjdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUmFpZG9GaW5hbmNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2luczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCVENcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCaXRjb2luIC0gQlRDXCIsXG4gICAgICAgICAgICBcImJhY2tpbmdDb2luXCI6IFwiQlRDXCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiOiBcIlJVREVYLkJUQ1wiLFxuICAgICAgICAgICAgXCJkZXBvc2l0QWxsb3dlZFwiOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIFwiaXNzdWVyXCI6IFwicnVkZXgtYml0Y29pblwiLFxuICAgICAgICAgICAgXCJpc3N1ZXJJZFwiOiBcIjEuMi44NTI1ODlcIixcbiAgICAgICAgICAgIC8vXCJtaW5BbW91bnRcIjogMTgwMDAwLFxuICAgICAgICAgICAgXCJjb25maXJtYXRpb25zXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRVRIXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXRoZXJldW0gLSBFVEhcIixcbiAgICAgICAgICAgIFwiYmFja2luZ0NvaW5cIjogXCJFVEhcIixcbiAgICAgICAgICAgIFwic3ltYm9sXCI6IFwiUlVERVguRVRIXCIsXG4gICAgICAgICAgICBcImRlcG9zaXRBbGxvd2VkXCI6IHRydWUsXG4gICAgICAgICAgICAvL1wid2l0aGRyYXdhbEFsbG93ZWRcIjogdHJ1ZSxcblxuICAgICAgICAgICAgXCJpc3N1ZXJcIjogXCJydWRleC1ldGhlcmV1bVwiLFxuICAgICAgICAgICAgXCJpc3N1ZXJJZFwiOiBcIjEuMi44NTI4MjNcIixcbiAgICAgICAgICAgIC8vXCJtaW5BbW91bnRcIjogNTAwMDAwLFxuICAgICAgICAgICAgXCJjb25maXJtYXRpb25zXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlVTRFRcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUZXRoZXIgLSBVU0RUIChvbiBFdGhlcmV1bSlcIixcbiAgICAgICAgICAgIFwiYmFja2luZ0NvaW5cIjogXCJVU0RUXCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiOiBcIlJVREVYLlVTRFRcIixcbiAgICAgICAgICAgIFwiZGVwb3NpdEFsbG93ZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIC8vXCJ3aXRoZHJhd2FsQWxsb3dlZFwiOiB0cnVlLFxuXG4gICAgICAgICAgICBcImlzc3VlclwiOiBcInJ1ZGV4LXVzZHRcIixcbiAgICAgICAgICAgIFwiaXNzdWVySWRcIjogXCIxLjIuOTI3NDU4XCIsXG4gICAgICAgICAgICAvL1wibWluQW1vdW50XCI6IDUwMDAwMCxcbiAgICAgICAgICAgIFwiY29uZmlybWF0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFJhaWRvRmluYW5jZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge3JlcXVlc3REZXBvc2l0QWRkcmVzc30gZnJvbSBcImxpYi9jb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQgQWNjb3VudEJhbGFuY2UgZnJvbSBcIi4uLy4uLy4uL0FjY291bnQvQWNjb3VudEJhbGFuY2VcIjtcbmltcG9ydCBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUgZnJvbSBcImNvbW1vbi9SdURleERlcG9zaXRBZGRyZXNzQ2FjaGVcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCB7YXZhaWxhYmxlR2F0ZXdheXN9IGZyb20gXCJsaWIvY29tbW9uL2dhdGV3YXlzXCI7XG5cbi8vUkFJRE9cbmltcG9ydCBSYWlkb1BheW1lbnRNZXRob2QgZnJvbSBcIi4vUmFpZG9QYXltZW50TWV0aG9kXCI7XG5pbXBvcnQgXCIuL1JhaWRvLmNzc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5cbmNsYXNzIFJhaWRvRGVwb3NpdFJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHBybzogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGlzc3Vlcl9hY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgZGVwb3NpdF9hc3NldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX2luX2Zhdm9yX29mOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWluX2Ftb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgY29uZmlybWF0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgICAgICAvL2ZpYXRzOiBQcm9wVHlwZXMuYXJyYXlcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZSA9IG5ldyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgICBtZW1vOiBudWxsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXRBbGxvd2VkOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbl9tYXhfdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBcInZhbGlkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGlyZWN0XCI6IFwibWluXCIsIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0QW1vdW50OiAwLFxuICAgICAgICAgICAgZ2l2ZUFtb3VudDogMCxcblxuICAgICAgICAgICAgLy9naXZlOiB0aGlzLnByb3BzLmFjdGl2ZVBheW1lbnRNZXRob2QsXG4gICAgICAgICAgICAvL2dldDogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUsXG5cbiAgICAgICAgICAgIHJhaWRvOiB7XG4gICAgICAgICAgICAgICAgYWZmaWxpYXRlX2lkOiAxMDA1OCxcblxuICAgICAgICAgICAgICAgIGdpdmVfcmF3OiB0aGlzLnByb3BzLmFjdGl2ZVBheW1lbnRNZXRob2QsLy9maWF0c1xuICAgICAgICAgICAgICAgIC8vZ2l2ZV9yYXc6IFwiRVVSXCIsLy9maWF0c1xuXG4gICAgICAgICAgICAgICAgLy9naXZlOiBcIlVTRFwiLFxuICAgICAgICAgICAgICAgIGdpdmU6IHRoaXMucHJvcHMuYWN0aXZlUGF5bWVudE1ldGhvZCxcblxuICAgICAgICAgICAgICAgIGdpdmVfZGVjaW1hbDogNSxcbiAgICAgICAgICAgICAgICAvL2dldDogXCJCVENcIixcbiAgICAgICAgICAgICAgICBnZXQ6IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lLFxuICAgICAgICAgICAgICAgIGdldF9kZWNpbWFsOiA1LFxuXG4gICAgICAgICAgICAgICAgcHJpY2U6IDEsXG5cbiAgICAgICAgICAgICAgICBpbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgaW5fbWluX2ZlZTogMCxcblxuICAgICAgICAgICAgICAgIGluX2ZlZTogMCxcbiAgICAgICAgICAgICAgICBjb21taXNzaW9uOiAwLFxuXG4gICAgICAgICAgICAgICAgbWluX2RlcG9zaXQ6IDAsXG4gICAgICAgICAgICAgICAgbWF4X2RlcG9zaXQ6IDEwMDAwMDAsXG5cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYnV5XCIsIC8vQlVZIG9yIFNFTExcblxuICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM6IFtdLFxuICAgICAgICAgICAgICAgIHByaWNlczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MgPSB0aGlzLmFkZERlcG9zaXRBZGRyZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX21ha2VVcmlSYWlkbyA9IHRoaXMuX21ha2VVcmlSYWlkby5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3NldENvaW5zUmFpZG8gPSB0aGlzLl9zZXRDb2luc1JhaWRvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3NldFByaWNlc1JhaWRvID0gdGhpcy5fc2V0UHJpY2VzUmFpZG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faW5pdFByaWNlcyA9IHRoaXMuX2luaXRQcmljZXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZCA9IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdEN1cnJlbmNpZXModGhpcy5fc2V0Q29pbnNSYWlkbyk7XG4gICAgfVxuXG5cbiAgICBpbml0Q3VycmVuY2llcyhzdGF0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBjb2lucyA9IFwiaHR0cHM6Ly9tZXJjaGFudC1kYXRhY2VudGVyLnJhaWRvZmluYW5jZS5ldTo4MDk1L2N1cnJlbmNpZXMvXCI7XG4gICAgICAgIGZldGNoKGNvaW5zLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIn0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICByZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImpzb25fMDogXCIgKyBKU09OLnN0cmluZ2lmeShqc29uLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwianNvbl8xOiBcIiArIEpTT04uc3RyaW5naWZ5KGpzb24uZGF0YS5yb3dzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRDb2luc1JhaWRvKGN1cnJlbmNpZXMpIHtcbiAgICAgICAgY3VycmVuY2llcyA9IGN1cnJlbmNpZXMucm93cztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbmNpZXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoY3VycmVuY2llcykpO1xuXG4gICAgICAgIGxldCBjdXJyX2NvaW5fb3JpZ2luYWwgPSB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJfY29pbl9vcmlnaW5hbDogXCIgKyBjdXJyX2NvaW5fb3JpZ2luYWwpO1xuICAgICAgICAvL2xldCBjdXJyX2NvaW5fb3JpZ2luYWwgPSB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQ7XG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVuY2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbmNpZXNbaV0uY29kZSA9PT0gY3Vycl9jb2luX29yaWdpbmFsKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbmNpZXNbaV0uY29kZSBNSU5fREVQT1NJVDogXCIgKyBjdXJyZW5jaWVzW2ldLmNvZGUgKyBcIiA9IFwiICsgY3VycmVuY2llc1tpXS5taW5fZGVwb3NpdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW5jaWVzW2ldLmNvZGUgTUFYX0RFUE9TSVQ6IFwiICsgY3VycmVuY2llc1tpXS5jb2RlICsgXCIgPSBcIiArIGN1cnJlbmNpZXNbaV0ubWF4X2RlcG9zaXQpO1xuXG4gICAgICAgICAgICAgICAgcmFpZG8uZ2l2ZSA9IHRoaXMuc3RhdGUucmFpZG8uZ2l2ZTtcbiAgICAgICAgICAgICAgICByYWlkby5nZXQgPSBjdXJyZW5jaWVzW2ldLmNvZGU7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNrLTI6XCIgKyBjdXJyZW5jaWVzW2ldLmNvZGUpO1xuICAgICAgICAgICAgICAgIHJhaWRvLmN1cnJlbmNpZXMgPSBjdXJyZW5jaWVzO1xuXG4gICAgICAgICAgICAgICAgLy9yYWlkby5pbl9lbmFibGUgPSBjdXJyZW5jaWVzW2ldLmluX2VuYWJsZTsvL1RPRE9cbiAgICAgICAgICAgICAgICByYWlkby5vdXQgPSBjdXJyZW5jaWVzW2ldLmlkO1xuICAgICAgICAgICAgICAgIHJhaWRvLm1pbl9kZXBvc2l0ID0gY3VycmVuY2llc1tpXS5taW5fZGVwb3NpdDtcbiAgICAgICAgICAgICAgICByYWlkby5tYXhfZGVwb3NpdCA9IGN1cnJlbmNpZXNbaV0ubWF4X2RlcG9zaXQ7XG5cbiAgICAgICAgICAgICAgICByYWlkby5naXZlX2RlY2ltYWwgPSBjdXJyZW5jaWVzW2ldLmRlY2ltYWw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkb30pO1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgY29kZSBjdXJyZW5jeSA6IFwiICsgSlNPTi5zdHJpbmdpZnkoY3VycmVuY2llc1tpXSkpO1xuICAgICAgICAgICAgICAgIC8vYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdFByaWNlcyh0aGlzLl9zZXRQcmljZXNSYWlkbyk7XG4gICAgfVxuXG4gICAgX2luaXRQcmljZXMoc3RhdGVDYWxsYmFjaykge1xuXG4gICAgICAgIGxldCBwcmljZXMgPSBcImh0dHBzOi8vbWVyY2hhbnQtZGF0YWNlbnRlci5yYWlkb2ZpbmFuY2UuZXU6ODA5NS9wcmljZXMvXCI7XG5cbiAgICAgICAgZmV0Y2gocHJpY2VzLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIn0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICByZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgX3NldFByaWNlc1JhaWRvKHByaWNlcykge1xuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuICAgICAgICBsZXQgY3VycmVuY2llcyA9IHJhaWRvLmN1cnJlbmNpZXM7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbmNpZXNfY2hlY2tfVVNEVDogXCIrSlNPTi5zdHJpbmdpZnkoY3VycmVuY2llcykpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVuY2llcy5sZW5ndGg6ICBcIitjdXJyZW5jaWVzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVuY2llc1tpXS5jb2RlID09PSByYWlkby5naXZlX3Jhdykge1xuICAgICAgICAgICAgICAgIC8vaWYgKGN1cnJlbmNpZXNbaV0uY3VyID09PSByYWlkby5naXZlX3Jhdykge1xuICAgICAgICAgICAgICAgIHJhaWRvLmNvbW1pc3Npb24gPSBwYXJzZUZsb2F0KGN1cnJlbmNpZXNbaV0uY29tbWlzc2lvbik7XG4gICAgICAgICAgICAgICAgcmFpZG8uaW5fZmVlID0gcGFyc2VGbG9hdChjdXJyZW5jaWVzW2ldLmluX2ZlZSk7XG4gICAgICAgICAgICAgICAgcmFpZG8uaW5fbWluX2ZlZSA9IHBhcnNlRmxvYXQoY3VycmVuY2llc1tpXS5pbl9taW5fZmVlKTtcbiAgICAgICAgICAgICAgICByYWlkby5nZXRfZGVjaW1hbCA9IGN1cnJlbmNpZXNbaV0uZGVjaW1hbDtcbiAgICAgICAgICAgICAgICByYWlkby5naXZlID0gY3VycmVuY2llc1tpXS5jdXI7XG5cbiAgICAgICAgICAgICAgICByYWlkby5pbiA9IGN1cnJlbmNpZXNbaV0uaWQ7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJhaWRvX2FycjogXCIgKyBKU09OLnN0cmluZ2lmeShyYWlkbykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFpZG8uaW5fbWluX2ZlZTogXCIgKyByYWlkby5pbl9taW5fZmVlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2xldCBwYWlyID0gXCJCVENcIitcIlVTRFwiO1xuICAgICAgICBsZXQgcGFpciA9IHJhaWRvLmdldCArIFwiXCIgKyByYWlkby5naXZlO1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gcmFpZG8uZGlyZWN0aW9uO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFpcjogXCIgKyBwYWlyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmljZXM6IFwiICsgSlNPTi5zdHJpbmdpZnkocHJpY2VzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uOiBcIiArIHJhaWRvLmRpcmVjdGlvbik7XG5cbiAgICAgICAgbGV0IHByaWNlID0gcHJpY2VzW3BhaXJdW2RpcmVjdGlvbl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpY2U6IFwiICsgcHJpY2UpO1xuXG4gICAgICAgIGlmIChwcmljZSkge1xuICAgICAgICAgICAgcmFpZG8ucHJpY2UgPSBwcmljZSAqIDE7XG4gICAgICAgICAgICByYWlkby5wcmljZXMgPSBwcmljZXM7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkbzogcmFpZG99KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkX2VuZDogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJhaWRvKSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXCJhdXRvXCIpO1xuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlKHR5cGUsIGV2ZW50KSB7XG4gICAgICAgIC8vbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcblxuICAgICAgICBsZXQgbmFtZSwgdmFsdWU7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IFwiYXV0b1wiKSB7XG4gICAgICAgICAgICBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vRGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0b2dnbGUgc3RhdGljIGdldEFtb3VudFxuICAgICAgICAgICAgbmFtZSA9IFwiZ2V0QW1vdW50XCI7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUuZ2V0QW1vdW50O1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dldEFtb3VudDogXCJcIn0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2l2ZUFtb3VudDogXCJcIn0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDE7XG5cbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcblxuICAgICAgICBsZXQgcmVzX2dldEFtb3VudDtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJnaXZlQW1vdW50XCIpIHtcbiAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7Z2V0QW1vdW50OiB2YWx1ZSAvIHJhaWRvLnByaWNlfSk7XG4gICAgICAgICAgICByZXNfZ2V0QW1vdW50ID0gdmFsdWUgLyAocmFpZG8ucHJpY2UgLyAoKDEwMCAtIChyYWlkby5jb21taXNzaW9uICsgcmFpZG8uaW5fZmVlKSkgLyAxMDApKTtcbiAgICAgICAgICAgIC8vMSAvICgodm9sdW1lIC0gKHZvbHVtZSAqIGluX2ZlZSkgLSAodm9sdW1lICogY29tbWlzc2lvbikpKnByaWNlICogKDEgLSBvdXRfZmVlKSlcbiAgICAgICAgICAgIGxldCByZXNfZ2l2ZUFtb3VudCA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtnZXRBbW91bnQ6IHJlc19nZXRBbW91bnR9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dpdmVBbW91bnQ6IHJlc19naXZlQW1vdW50fSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dldEFtb3VudDogTWF0aC5jZWlsKHJlc19nZXRBbW91bnQgKiBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKX0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2l2ZUFtb3VudDogTWF0aC5jZWlsKHJlc19naXZlQW1vdW50ICogTWF0aC5wb3coMTAsIHJhaWRvLmdldF9kZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImdldEFtb3VudFwiKSB7XG4gICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe2dldEFtb3VudDogdmFsdWV9KTtcbiAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7Z2l2ZUFtb3VudDogcmFpZG8ucHJpY2UgKiB2YWx1ZX0pO1xuICAgICAgICAgICAgLy90aGlzLnNldFN0YXRlKHtnaXZlQW1vdW50OiByYWlkby5wcmljZSAqIHZhbHVlIC8gKCgxMDAgLSAocmFpZG8uY29tbWlzc2lvbiArIHJhaWRvLmluX2ZlZSkpIC8gMTAwKX0pO1xuICAgICAgICAgICAgcmVzX2dldEFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgbGV0IHJlc19naXZlQW1vdW50ID0gcmFpZG8ucHJpY2UgKiB2YWx1ZSAvICgoMTAwIC0gKHJhaWRvLmNvbW1pc3Npb24gKyByYWlkby5pbl9mZWUpKSAvIDEwMCkgKyByYWlkby5pbl9taW5fZmVlO1xuICAgICAgICAgICAgLy8oKHZvbHVtZSAtICh2b2x1bWUgKiBpbl9mZWUpIC0gKHZvbHVtZSAqIGNvbW1pc3Npb24pKSpwcmljZSAqICgxIC0gb3V0X2ZlZSkpXG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dldEFtb3VudDogTWF0aC5jZWlsKHJlc19nZXRBbW91bnQgKiBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKX0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2l2ZUFtb3VudDogTWF0aC5jZWlsKHJlc19naXZlQW1vdW50ICogTWF0aC5wb3coMTAsIHJhaWRvLmdldF9kZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpfSk7XG5cbiAgICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7Z2V0QW1vdW50OiByZXNfZ2V0QW1vdW50fSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtnaXZlQW1vdW50OiByZXNfZ2l2ZUFtb3VudH0pOyovXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qY29uc29sZS5sb2coXCJtaW5fZGVwb3NpdDogXCIgKyByYWlkby5taW5fZGVwb3NpdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWF4X2RlcG9zaXQ6IFwiICsgcmFpZG8ubWF4X2RlcG9zaXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc19nZXRBbW91bnQ6IFwiICsgcmVzX2dldEFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmFpZG8ubWF4X2RlcG9zaXQgPT0gMDogXCIgKyAocmFpZG8ubWF4X2RlcG9zaXQgPT0gMCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuKi9cbiAgICAgICAgaWYgKChyZXNfZ2V0QW1vdW50ID49IHJhaWRvLm1pbl9kZXBvc2l0KSAmJiAocmFpZG8ubWF4X2RlcG9zaXQgPT0gMCB8fCByZXNfZ2V0QW1vdW50IDw9IHJhaWRvLm1heF9kZXBvc2l0KSkge1xuICAgICAgICAgICAgLy92YWx1ZVxuLyogICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1pbl9kZXBvc2l0OiBcIiArIHJhaWRvLm1pbl9kZXBvc2l0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF4X2RlcG9zaXQ6IFwiICsgcmFpZG8ubWF4X2RlcG9zaXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNfZ2V0QW1vdW50OiBcIiArIHJlc19nZXRBbW91bnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTsqL1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWluX21heF92YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBcInZhbGlkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0XCI6IFwibWluXCIsIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0QWxsb3dlZDogdHJ1ZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKmNvbnNvbGUubG9nKFwibWluX2RlcG9zaXQ6IFwiICsgcmFpZG8ubWluX2RlcG9zaXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXhfZGVwb3NpdDogXCIgKyByYWlkby5tYXhfZGVwb3NpdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc19nZXRBbW91bnQ6IFwiICsgcmVzX2dldEFtb3VudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpOyovXG5cbiAgICAgICAgICAgIGlmICgocmVzX2dldEFtb3VudCA+PSByYWlkby5taW5fZGVwb3NpdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWluX21heF92YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWxpZFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0XCI6IFwibWF4XCIsIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbGlkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3RcIjogXCJtaW5cIiwgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0QWxsb3dlZDogZmFsc2V9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaGFuZGxlUGF5bWVudE1ldGhvZChlKSB7XG4gICAgICAgIGxldCBwYXlNZXRob2QgPSBlLnRhcmdldFtcIm5hbWVcIl07XG4gICAgICAgIGxldCBzdHIgPSBcInBheW1lbnRtZXRob2RcIjtcbiAgICAgICAgcGF5TWV0aG9kID0gcGF5TWV0aG9kLnN1YnN0cihzdHIubGVuZ3RoICsgMSwgcGF5TWV0aG9kLmxlbmd0aCAtIHN0ci5sZW5ndGgpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcbiAgICAgICAgcmFpZG8uZ2l2ZV9yYXcgPSBwYXlNZXRob2Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIHBheU1ldGhvZCBvbjogXCIgKyBwYXlNZXRob2QpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvOiByYWlkb30pO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VwcmljZXM6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5yYWlkby5wcmljZXMpKTtcbiAgICAgICAgdGhpcy5fc2V0UHJpY2VzUmFpZG8odGhpcy5zdGF0ZS5yYWlkby5wcmljZXMpO1xuXG4gICAgICAgIC8vPT09XG5cbiAgICAgICAgdmFyIGZvbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbC5idG4tcmFkaW9cIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9vLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb29baV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0QWN0aXZlUmFpZG9Db2luKHBheU1ldGhvZCk7XG5cblxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFN0YXRlLnJhaWRvICE9PSB0aGlzLnN0YXRlLnJhaWRvIHx8XG5cbiAgICAgICAgICAgIG5leHRQcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSAhPT0gdGhpcy5wcm9wcy5nZXRBbW91bnQgfHxcblxuICAgICAgICAgICAgbmV4dFN0YXRlLmdldEFtb3VudCAhPT0gdGhpcy5zdGF0ZS5nZXRBbW91bnQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5naXZlQW1vdW50ICE9PSB0aGlzLnN0YXRlLmdpdmVBbW91bnQgfHxcblxuICAgICAgICAgICAgLy9uZXh0U3RhdGUucmVjZWl2ZV9hZGRyZXNzICE9PSB0aGlzLnN0YXRlLnJlY2VpdmVfYWRkcmVzcyB8fFxuXG4gICAgICAgICAgICBuZXh0UHJvcHMucmVjZWl2ZV9hc3NldCAhPT0gdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lICE9PSB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjdGlvbiAhPT0gdGhpcy5wcm9wcy5hY3Rpb24gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50TG9jYWxlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cbiAgICAgICAgICAgIGlmICgxID09IDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfSovXG5cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiB0aGlzLmFkZERlcG9zaXRBZGRyZXNzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGxldCBhY2NvdW50X25hbWUgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuY2FjaGVJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdhdGV3YXksXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudF9uYW1lfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzc30pO1xuICAgIH1cblxuICAgIF9tYWtlVXJpUmFpZG8oKSB7XG4gICAgICAgIGxldCBzdHJVcmkgPSBcIlwiO1xuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuICAgICAgICBsZXQgb2JqUGFyYW1zID0ge1xuICAgICAgICAgICAgXCJhZmZpbGlhdGVfaWRcIjogcmFpZG8uYWZmaWxpYXRlX2lkLFxuICAgICAgICAgICAgXCJ2b2x1bWVcIjogdGhpcy5zdGF0ZS5naXZlQW1vdW50LFxuICAgICAgICAgICAgXCJpblwiOiByYWlkby5pbixcbiAgICAgICAgICAgIFwib3V0XCI6IHJhaWRvLm91dCxcbiAgICAgICAgICAgIFwib3V0LXBcIjogdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IHJhaWRvLmRpcmVjdGlvblxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9ialBhcmFtczogXCIgKyBKU09OLnN0cmluZ2lmeShvYmpQYXJhbXMpKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBvYmpQYXJhbXMpIHtcbiAgICAgICAgICAgIHN0clVyaSArPSBcIiZcIiArIGl0ZW0gKyBcIj1cIiArIG9ialBhcmFtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInN0clVyaTogXCIgKyBzdHJVcmkpO1xuICAgICAgICByZXR1cm4gc3RyVXJpO1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcbiAgICAgICAgbGV0IHJhaWRvX2xpbmsgPSBcImh0dHBzOi8vcmFpZG9maW5hbmNlLmV1L2J1eS1zZWxsP1wiICsgdGhpcy5fbWFrZVVyaVJhaWRvKCk7XG4gICAgICAgIHdpbmRvdy5vcGVuKHJhaWRvX2xpbmssIFwiX2JsYW5rXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVtcHR5Um93ID0gPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwiLCBtaW5IZWlnaHQ6IDE1MH19Lz47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcblxuICAgICAgICAvL2xldCBidHJzZF9PUCA9IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lO1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzX29iamVjdCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcblxuICAgICAgICAvLyBsZXQgYmFsYW5jZSA9IFwiMCBcIiArIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpIHtcbiAgICAgICAgICAgIGxldCBoYXNfbm9uemVyb19iYWxhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3RfaWQgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZV9vYmplY3RfaWQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGJhbGFuY2Vfb2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlICE9IDApIGhhc19ub256ZXJvX2JhbGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzX25vbnplcm9fYmFsYW5jZSkgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5zdGF0ZS5yZWNlaXZlX2FkZHJlc3M7XG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3M7XG4gICAgICAgIGlmICghcmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdENvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMgJiYgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJpcnJldmVyc2libGVcIikge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubGFzdF9pcnJldmVyc2libGVcIi8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcblxuICAgICAgICBsZXQgY3VycmVudEdhdGV3YXkgPSBcIlJVREVYXCI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLnNpbXBsZUFzc2V0R2F0ZXdheSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghcmVjZWl2ZV9hZGRyZXNzICYmICF0aGlzLnByb3BzLnN1cHBvcnRzTWVtb3MpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgdW5pcXVlIGRlcG9zaXQgYWRkcmVzc2VzIHRvIHNlbGVjdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBRERSRVNTOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0Q29uZmlybWF0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGk+e2RlcG9zaXRDb25maXJtYXRpb259PC9pPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCIsIGZvbnRTaXplOiBcIjEuMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTI0IHJhaWRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTI0XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfaWQ9e1wiY2FyZHVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJCYW5rIENhcmQgKFVTRClcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfaWQ9e1wiY2FyZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJCYW5rIENhcmQgKEVVUilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfaWQ9e1wid2lyZWVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJTZXBhIChFVVIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLnJhaWRvLmdpdmVfcmF3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2l2ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2l2ZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCBcImdpdmVBbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLRiyDQt9Cw0L/Qu9Cw0YLQuNGC0LVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXFwvaW1hZ2VzXFwvcmFpZG8tcGF5bWVudC0ke3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXcudG9Mb3dlckNhc2UoKX0ucG5nKWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZXRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgXCJnZXRBbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLRiyDQv9C+0LvRg9GH0LjRgtC1XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFxcL2Fzc2V0LXN5bWJvbHNcXC9ydWRleC4ke3RoaXMuc3RhdGUucmFpZG8uZ2V0LnRvTG93ZXJDYXNlKCl9LnBuZylgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IXRoaXMuc3RhdGUubWluX21heF92YWxpZGF0ZS52YWxpZCA/IFwicmFpZG9fbWluX21heF92YWxpZGF0ZSBhY3RpdmVcIiA6IFwicmFpZG9fbWluX21heF92YWxpZGF0ZVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5cIiArIHRoaXMuc3RhdGUubWluX21heF92YWxpZGF0ZS5kaXJlY3QgKyBcIl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJhaWRvW3RoaXMuc3RhdGUubWluX21heF92YWxpZGF0ZS5kaXJlY3QgKyBcIl9kZXBvc2l0XCJdICogMX0ge3RoaXMuc3RhdGUucmFpZG8uZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jb2wtMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhaWRvX3RleHRfYmxvY2tcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmFwcHJveGltYXRlX2Ftb3VudFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWlkb190ZXh0X2Jsb2NrXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5maW5hbF90ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTEwIGFudC1jb2wtb2Zmc2V0LTZcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3VibWl0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXRBbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uYnV5XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMS4zcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uV2l0aGRyYXcuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoUmFpZG9EZXBvc2l0UmVxdWVzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFJhaWRvUGF5bWVudE1ldGhvZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt0aXRsZSwgcGF5bWVudF9pZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY2xhc3NObmFtZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlLnRvTG93ZXJDYXNlKCkgPT0gdGhpcy5wcm9wcy5wYXltZW50X2lkLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICBjbGFzc05uYW1lID0gXCJhY3RpdmVcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xhc3NObmFtZSA9IFwiXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC04XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJidG4gYnRuLXNtIGJ0bi1yYWRpb1wiICsgXCIgXCIgKyBjbGFzc05uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInBheW1lbnRtZXRob2QtXCIgKyBwYXltZW50X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL3JhaWRvLXBheW1lbnQtXCIgKyBwYXltZW50X2lkICsgXCIucG5nXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhaWRvUGF5bWVudE1ldGhvZDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUZBO0FBa0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUE2QkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFUQTtBQWhCQTtBQUpBO0FBeUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQVRBO0FBVUE7QUFDQTtBQVhBO0FBWkE7QUEyQkE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQTlCQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQVZBO0FBeUJBO0FBQ0E7QUFFQTtBQURBO0FBNUJBO0FBbEZBO0FBSkE7QUFDQTtBQTJIQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBb0RBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVBBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFkQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFUQTtBQU5BO0FBVEE7QUF6QkE7QUFEQTtBQXlEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBN0hBO0FBTEE7QUErSUE7Ozs7QUFyZEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUFDQTtBQWdkQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFQQTtBQUNBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBaENBO0FBa0NBO0FBdkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFIQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUxBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQU5BO0FBTEE7QUFmQTtBQURBO0FBUEE7QUExQkE7QUFvRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFKQTtBQXpCQTtBQXdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBaEJBO0FBOEJBO0FBN0NBO0FBMUNBO0FBdEVBO0FBb0tBOzs7O0FBaFRBO0FBQ0E7QUFrVEE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBSkE7QUFQQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBR0E7QUFQQTtBQVBBO0FBTEE7QUExRUE7QUFEQTtBQURBO0FBTEE7QUE0R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUFGQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBUEE7QUFEQTtBQWJBO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFQQTtBQURBO0FBVkE7QUEzQkE7QUFtREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQVhBO0FBYUE7QUFiQTtBQXBEQTtBQW9FQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQWZBO0FBckVBO0FBakNBO0FBN0dBO0FBOE9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFMQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBUEE7QUFMQTtBQXZEQTtBQURBO0FBREE7QUFMQTtBQTJGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUxBO0FBREE7QUFaQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBVEE7QUFsSEE7QUF5SkE7QUFDQTs7OztBQWhwQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBaXBCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7Ozs7QUFmQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUE1Q0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXhCQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBYUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNEJBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQWlCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWtDQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXpCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUE3R0E7QUFBQTtBQUNBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBREE7QUFMQTtBQVhBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVZBO0FBREE7QUFEQTtBQWxDQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFyQkE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBUEE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeEJBO0FBNEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQVZBO0FBREE7QUFEQTtBQVBBO0FBMkJBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBUkE7QUFVQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWRBO0FBcUJBO0FBak1BO0FBSkE7QUF5TUE7Ozs7QUFuNUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBQ0E7QUFtNUJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTs7Ozs7Ozs7O0FDNzZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTs7OztBQTlCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQUNBO0FBeUJBOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVZBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQUhBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBT0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVkE7QUFEQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBREE7QUFEQTtBQVBBO0FBeEJBO0FBbUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFqQkE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBSkE7QUFyQkE7QUFvQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQWhCQTtBQThCQTtBQTdDQTtBQXRDQTtBQXJFQTtBQStKQTs7OztBQTdTQTtBQUNBO0FBK1NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQUNBO0FBbkNBO0FBQ0E7QUFxREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBbEJBO0FBQ0E7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxFQTtBQW1FQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFHQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQVBBO0FBTEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBTEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFQQTtBQUxBO0FBMUVBO0FBREE7QUFEQTtBQUxBO0FBNkdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUZBO0FBREE7QUFUQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFsQkE7QUEyQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBS0E7QUFMQTtBQVhBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFtQkE7QUFuQkE7QUFGQTtBQVZBO0FBakVBO0FBREE7QUE1QkE7QUE5R0E7QUFvUEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBSkE7QUFQQTtBQUxBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUxBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFQQTtBQUxBO0FBdkRBO0FBREE7QUFEQTtBQUxBO0FBMEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBT0E7QUFaQTtBQTNGQTtBQW1IQTtBQUNBOzs7O0FBNTJCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBQ0E7QUE0MkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbjRCQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFEQTtBQWVBOzs7O0FBL0JBO0FBQ0E7QUFpQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==