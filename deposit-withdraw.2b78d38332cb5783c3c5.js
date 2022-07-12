"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[9],{

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2088);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2117);





/**
 *  Given a balance_object, displays it in a pretty way
 *
 *  Expects one property, 'balance' which should be a balance_object id
 */

class AccountBalance extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
  };
  static defaultProps = {
    autosubscribe: false
  };

  render() {
    let asset_id = this.props.asset.get("id");
    let balance_id = this.props.account.getIn(["balances", asset_id]);
    if (balance_id) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      balance: balance_id,
      replace: this.props.replace
    });else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: this.props.asset.get("symbol"),
      replace: this.props.replace
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountBalance));

/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(606);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2094);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1963);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2134);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(589);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(656);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(657);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2906);
/* harmony import */ var _DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2914);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2089);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2112);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2310);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2345);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2436);







 //import OpenledgerGateway from "../DepositWithdraw/OpenledgerGateway";
//import OpenLedgerFiatDepositWithdrawal from "../DepositWithdraw/openledger/OpenLedgerFiatDepositWithdrawal";
//import OpenLedgerFiatTransactionHistory from "../DepositWithdraw/openledger/OpenLedgerFiatTransactionHistory";
//import BlockTradesBridgeDepositRequest from "../DepositWithdraw/blocktrades/BlockTradesBridgeDepositRequest";
//import CitadelBridgeDepositRequest from "../DepositWithdraw/citadel/CitadelBridgeDepositRequest";














class AccountDepositWithdraw extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired,
    contained: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool)
  };
  static defaultProps = {
    contained: false
  };

  constructor(props) {
    super();
    this.state = {
      rudexService: props.viewSettings.get("rudexService", "gateway"),
      rudexServiceBEP20: props.viewSettings.get("rudexServiceBEP20", "gateway"),
      activeService: props.viewSettings.get("activeService", 0),
      RudexNoticeInformed: false,
      RudexNoticeInformed_BuyCrypto: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.account !== this.props.account || nextProps.servicesDown !== this.props.servicesDown || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.citadelBackedCoins, this.props.citadelBackedCoins) || nextState.rudexService !== this.state.rudexService || nextState.rudexServiceBEP20 !== this.state.rudexServiceBEP20 || nextState.activeService !== this.state.activeService || nextState.RudexNoticeInformed !== this.state.RudexNoticeInformed || nextState.RudexNoticeInformed_BuyCrypto !== this.state.RudexNoticeInformed_BuyCrypto || nextProps.currentLocale !== this.props.currentLocale;
  }

  UNSAFE_componentWillMount() {
    common_account_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFinalFeeAsset(this.props.account, "transfer");
  }

  toggleOLService(service) {
    this.setState({
      olService: service
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
      olService: service
    });
  }

  onRudexNoticeInformed() {
    this.setState({
      RudexNoticeInformed: !this.state.RudexNoticeInformed
    });
  }

  onRudexNoticeInformed_BuyCrypto() {
    this.setState({
      RudexNoticeInformed_BuyCrypto: !this.state.RudexNoticeInformed_BuyCrypto
    });
  }

  toggleRuDEXService(service) {
    this.setState({
      rudexService: service
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
      rudexService: service
    });
  }

  toggleRuDEX_BEP20Service(service) {
    this.setState({
      rudexServiceBEP20: service
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
      rudexServiceBEP20: service
    });
  }

  onSetService(e) {
    //let index = this.state.services.indexOf(e.target.value);
    this.setState({
      activeService: parseInt(e.target.value)
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
      activeService: parseInt(e.target.value)
    });
  }

  renderServices(rudexGatewayCoins, rudexGatewayCoinsBEP20) {
    //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
    let serList = [];
    let {
      account
    } = this.props;
    let {
      rudexService,
      rudexServiceBEP20,
      RudexNoticeInformed,
      RudexNoticeInformed_BuyCrypto
    } = this.state;
    let agreement_ru = "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза";
    let agreement_en = "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement";
    serList.push({
      //name: "RuDEX (RUDEX.X)",
      name: "COINS (Native Chains)",
      identifier: "RUDEX",
      template: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "content-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "service-selector",
        style: {
          marginBottom: "2rem"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "button-group segmented no-margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        onClick: this.toggleRuDEXService.bind(this, "gateway"),
        className: rudexService === "gateway" ? "is-active" : ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.gateway"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        onClick: this.toggleRuDEXService.bind(this, "fiat"),
        className: rudexService === "fiat" ? "is-active" : ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.rudex.buy_crypto.title"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        style: {
          width: "30px"
        },
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMTAzMDYiCiAgIHZpZXdCb3g9IjAgMCA1MDAuMDAwMDEgMTYyLjgxNTk0IgogICA+CiAgPGRlZnMKICAgICBpZD0iZGVmczEwMzA4Ij4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoMTAyNzEiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTAyNzMiCiAgICAgICAgIGQ9Im0gNDEzLjc0Miw5MC40MzUgYyAtMC4wNTcsLTQuNDk0IDQuMDA1LC03LjAwMiA3LjA2NSwtOC40OTMgMy4xNDQsLTEuNTMgNC4yLC0yLjUxMSA0LjE4OCwtMy44NzkgLTAuMDI0LC0yLjA5NCAtMi41MDgsLTMuMDE4IC00LjgzMywtMy4wNTQgLTQuMDU2LC0wLjA2MyAtNi40MTQsMS4wOTUgLTguMjg5LDEuOTcxIGwgLTEuNDYxLC02LjgzNyBjIDEuODgxLC0wLjg2NyA1LjM2NCwtMS42MjMgOC45NzYsLTEuNjU2IDguNDc4LDAgMTQuMDI1LDQuMTg1IDE0LjA1NSwxMC42NzQgMC4wMzMsOC4yMzUgLTExLjM5MSw4LjY5MSAtMTEuMzEzLDEyLjM3MiAwLjAyNywxLjExNiAxLjA5MiwyLjMwNyAzLjQyNiwyLjYxIDEuMTU1LDAuMTUzIDQuMzQ0LDAuMjcgNy45NTksLTEuMzk1IGwgMS40MTksNi42MTUgYyAtMS45NDQsMC43MDggLTQuNDQzLDEuMzg2IC03LjU1NCwxLjM4NiAtNy45OCwwIC0xMy41OTMsLTQuMjQyIC0xMy42MzgsLTEwLjMxNCBtIDM0LjgyNyw5Ljc0NCBjIC0xLjU0OCwwIC0yLjg1MywtMC45MDMgLTMuNDM1LC0yLjI4OSBsIC0xMi4xMTEsLTI4LjkxNyA4LjQ3MiwwIDEuNjg2LDQuNjU5IDEwLjM1MywwIDAuOTc4LC00LjY1OSA3LjQ2NywwIC02LjUxNiwzMS4yMDYgLTYuODk0LDAgbSAxLjE4NSwtOC40MyAyLjQ0NSwtMTEuNzE4IC02LjY5NiwwIDQuMjUxLDExLjcxOCBtIC00Ni4yODQsOC40MyAtNi42NzgsLTMxLjIwNiA4LjA3MywwIDYuNjc1LDMxLjIwNiAtOC4wNywwIG0gLTExLjk0MywwIC04LjQwMywtMjEuMjQgLTMuMzk5LDE4LjA2IGMgLTAuMzk5LDIuMDE2IC0xLjk3NCwzLjE4IC0zLjcyMywzLjE4IGwgLTEzLjczNywwIC0wLjE5MiwtMC45MDYgYyAyLjgyLC0wLjYxMiA2LjAyNCwtMS41OTkgNy45NjUsLTIuNjU1IDEuMTg4LC0wLjY0NSAxLjUyNywtMS4yMDkgMS45MTcsLTIuNzQyIGwgNi40MzgsLTI0LjkwMyA4LjUzMiwwIDEzLjA4LDMxLjIwNiAtOC40NzgsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDEwMjc3IgogICAgICAgc3ByZWFkTWV0aG9kPSJwYWQiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDg0LjE5OTUsMzEuMDA4OCwzMS4wMDg4LC04NC4xOTk1LDE5LjUxMiwtMjcuNDE5MikiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHkyPSIwIgogICAgICAgeDI9IjEiCiAgICAgICB5MT0iMCIKICAgICAgIHgxPSIwIj4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3AxMDI3OSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojMjIyMzU3IiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDEwMjgxIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiMyNTRhYTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMDMxMSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMzLjcwMTU3LC01MzYuNDI0MzEpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIGlkPSJnMTAyNjciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0Ljk4NDY4NTYsMCwwLC00Ljk4NDY4NTYsLTE0NzAuMTE4NSwxMDM5LjYyNjQpIj4KICAgICAgPGcKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTAyNzEpIgogICAgICAgICBpZD0iZzEwMjY5Ij4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MS42MTEsOTYuODk2KSIKICAgICAgICAgICBpZD0iZzEwMjc1Ij4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDEwMjgzIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDEwMjc3KTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Ik0gMCwwIDk4LjQzNywzNi4yNTIgMTIwLjgzMSwtMjQuNTU3IDIyLjM5NSwtNjAuODA5IiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        style: {
          width: "20px",
          margin: "0 10px 0"
        },
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDY0OS45OTk5OCA0MDUuNjMyMjYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg5NSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhODk5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT5Bc3NldCAxPC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg3OSI+CiAgICA8c3R5bGUKICAgICAgIHR5cGU9InRleHQvY3NzIgogICAgICAgaWQ9InN0eWxlODc3Ij4uYXtvcGFjaXR5OjA7fS5ie2ZpbGw6I2ZmZjt9LmN7ZmlsbDojZmY1ZjAwO30uZHtmaWxsOiNlYjAwMWI7fS5le2ZpbGw6I2Y3OWUxYjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlCiAgICAgaWQ9InRpdGxlODgxIj5Bc3NldCAxPC90aXRsZT4KICA8cmVjdAogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiNmZjVmMDA7c3Ryb2tlLXdpZHRoOjUuNDkzODExNjEiCiAgICAgY2xhc3M9ImMiCiAgICAgeD0iMjI5LjgzMjYzIgogICAgIHk9IjQ3LjI5NzczNyIKICAgICB3aWR0aD0iMTkwLjQxNTUxIgogICAgIGhlaWdodD0iMzExLjAwNDciCiAgICAgaWQ9InJlY3Q4ODciIC8+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZWIwMDFiO3N0cm9rZS13aWR0aDo1LjQ5MzgxMTYxIgogICAgIGNsYXNzPSJkIgogICAgIGQ9Im0gMjQ5LjQ0NTU0LDIwMi44Mjc1NiBhIDE5Ny40NDc1OSwxOTcuNDQ3NTkgMCAwIDEgNzUuNTM5OTEsLTE1NS40NzQ4NjcgMTk3Ljc3NzIyLDE5Ny43NzcyMiAwIDEgMCAwLDMxMS4wMDQ2NzcgMTk3LjQ0NzU5LDE5Ny40NDc1OSAwIDAgMSAtNzUuNTM5OTEsLTE1NS41Mjk4MSB6IgogICAgIGlkPSJwYXRoODg5IiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2Y3OWUxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZSIKICAgICBkPSJtIDYyNi4xMDEzLDMyNS4zOTQ1IHYgLTYuMzcyODIgaCAyLjc0NjkgdiAtMS4zMTg1MiBoIC02LjUzNzY0IHYgMS4zMTg1MiBoIDIuNTgyMSB2IDYuMzcyODIgeiBtIDEyLjY5MDcsMCB2IC03LjY5MTM0IGggLTEuOTc3NzggbCAtMi4zMDc0LDUuNDkzODEgLTIuMzA3NCwtNS40OTM4MSBoIC0xLjk3Nzc3IHYgNy42OTEzNCBoIDEuNDI4MzkgdiAtNS44MjM0NCBsIDIuMTQyNTksNC45OTkzNyBoIDEuNDgzMzMgbCAyLjE0MjU4LC00Ljk5OTM3IHYgNS44MjM0NCB6IgogICAgIGlkPSJwYXRoODkxIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2Y3OWUxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZSIKICAgICBkPSJtIDY0NSwyMDIuODI3NTYgYSAxOTcuNzc3MjIsMTk3Ljc3NzIyIDAgMCAxIC0zMjAuMDE0NTUsMTU1LjQ3NDg3IDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAwIDAgMCwtMzExLjAwNDY3NSBBIDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAwIDEgNjQ1LDIwMi43NzI2MiBaIgogICAgIGlkPSJwYXRoODkzIiAvPgo8L3N2Zz4K"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        style: {
          width: "40px"
        },
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2ZzEwOTA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNzUwIDIwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzUwIDIwNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxMDI5OEU7fQoJLnN0MXtmaWxsOiNGRkJFMDA7fQo8L3N0eWxlPgo8dGl0bGU+c2VwYTwvdGl0bGU+CjxwYXRoIGlkPSJwYXRoNTY4OSIgY2xhc3M9InN0MCIgZD0iTTE2Ni42LDY1LjRoLTUxLjNjMC04LjQtMS0xNC4xLTMtMTdjLTMtNC4zLTExLjQtNi40LTI1LjItNi40Yy0xMy40LDAtMjIuMywxLjItMjYuNiwzLjcKCVM1NCw1My42LDU0LDYxLjhjMCw3LjUsMS45LDEyLjQsNS43LDE0LjdjMy40LDEuOCw3LjEsMi44LDEwLjksMi45TDgxLDgwLjJjMjIuMiwxLjUsMzYsMi41LDQxLjYsMy4xYzE3LjUsMS44LDMwLjMsNi40LDM4LjEsMTQKCWM2LjIsNS45LDkuOSwxMy42LDExLjEsMjMuMWMwLjcsNi40LDEuMSwxMi45LDEsMTkuM2MwLDE2LjUtMS42LDI4LjYtNC43LDM2LjJjLTUuNywxNC4xLTE4LjUsMjIuOS0zOC41LDI2LjYKCWMtOC4zLDEuNi0yMS4xLDIuNC0zOC4zLDIuNGMtMjguNywwLTQ4LjgtMS43LTYwLjEtNS4xYy0xMy45LTQuMi0yMy0xMi44LTI3LjUtMjUuNkMxLjIsMTY3LjEsMCwxNTUuMiwwLDEzOC41aDUxLjN2NC4zCgljMCw4LjksMi42LDE0LjYsNy43LDE3LjJjNCwxLjksOC40LDIuOCwxMi44LDIuOGgxOC45YzkuNiwwLDE1LjgtMC41LDE4LjQtMS41YzQuNy0xLjksNy44LTQuOSw5LjMtOWMwLjktMy4yLDEuMy02LjUsMS4yLTkuOQoJYzAtOS0zLjMtMTQuNS05LjktMTYuNWMtMi41LTAuOC0xMy45LTEuOS0zNC4zLTMuMmMtMTYuNC0xLjItMjcuOC0yLjMtMzQuMi0zLjRjLTE2LjgtMy4xLTI4LTkuNi0zMy42LTE5LjQKCUMyLjcsOTEuNSwwLjIsNzguOSwwLjIsNjJjMC0xMi44LDEuMy0yMy4xLDQtMzAuOXM2LjktMTMuNiwxMi44LTE3LjZjOC42LTYuMiwxOS43LTkuOCwzMy4yLTEwLjljMTEuMi0xLDIzLjctMS41LDM3LjMtMS41CgljMjEuNSwwLDM2LjksMS4yLDQ2LDMuN2MyMi4zLDYsMzMuNSwyMi44LDMzLjUsNTAuNEMxNjcuMSw1Ny41LDE2Ni45LDYwLjksMTY2LjYsNjUuNCIvPgo8cGF0aCBpZD0icGF0aDU2OTMiIGNsYXNzPSJzdDAiIGQ9Ik0zOTIuMywyMDVWMGgxMDIuOGMxNC4xLDAsMjQuOCwxLjEsMzIuMiwzLjVjMTYuOSw1LjMsMjguMiwxNi4xLDM0LDMyLjUKCWMzLDguNiw0LjUsMjEuNSw0LjUsMzguOGMwLDIwLjgtMS43LDM1LjctNSw0NC44Yy02LjYsMTgtMjAuMSwyOC4zLTQwLjYsMzFjLTIuNCwwLjQtMTIuNywwLjgtMzAuOCwxLjFsLTkuMiwwLjNoLTMyLjh2NTNIMzkyLjN6CgkgTTQ0Ny41LDEwNC41aDM0LjRjMTAuOS0wLjQsMTcuNS0xLjIsMTkuOS0yLjVjMy4yLTEuOCw1LjUtNS40LDYuNS0xMC44YzAuOC01LjMsMS4yLTEwLjYsMS0xNmMwLTguNy0wLjctMTUuMS0yLjEtMTkuMwoJYy0yLTUuOS02LjgtOS41LTE0LjItMTAuOGMtMS41LTAuMi01LjEtMC4zLTEwLjctMC4zaC0zNC44VjEwNC41eiIvPgo8cGF0aCBpZD0icGF0aDU2OTciIGNsYXNzPSJzdDAiIGQ9Ik02ODMuNiwxNjkuNWgtNzMuOGwtOS45LDM1LjVoLTU3LjFMNjA0LjUsMGg4My4yTDc1MCwyMDVoLTU1LjlMNjgzLjYsMTY5LjV6IE02NzIuNiwxMjkuNgoJbC0yNS44LTg4LjlsLTI1LjEsODguOUg2NzIuNnoiLz4KPHBhdGggaWQ9InBhdGg1NzAxIiBjbGFzcz0ic3QxIiBkPSJNMzE2LjIsMjguOGMyMS45LDAsNDIuNiw5LjksNTYuNCwyNi45bDExLjktMjUuNUMzNjUsMTEuOSwzMzkuMywxLjcsMzEyLjYsMS44CgljLTQzLjUsMC04MC42LDI2LjItOTUuOSw2My40aC0yMy4ybC0xMy43LDI5LjNoMjkuOGMtMC4yLDIuNy0wLjQsNS40LTAuNCw4LjJjMCwzLjMsMC4yLDYuNywwLjUsMTBoLTE1bC0xMy43LDI5LjRoMzYuMwoJYzE1LjcsMzYuMiw1Mi40LDYxLjcsOTUuMiw2MS43YzIwLjcsMCw0MC45LTYsNTguMS0xNy41di0zNmMtMjYuNCwzMC4yLTcyLjIsMzMuMi0xMDIuNCw2LjhjLTUtNC40LTkuNC05LjQtMTMtMTVoNzZsMTMuNy0yOS40CglIMjQ0LjJjLTAuNS0zLjYtMC44LTcuMi0wLjgtMTAuOGMwLTIuNSwwLjEtNC45LDAuNC03LjRoMTA5LjhsMTMuNy0yOS4zaC0xMTRDMjY2LjIsNDIuNywyOTAuMiwyOC45LDMxNi4yLDI4LjgiLz4KPHBhdGggaWQ9InBhdGg1NzA1IiBjbGFzcz0ic3QwIiBkPSJNMzE2LjIsMjkuN2MyMS42LDAsNDIuMSw5LjgsNTUuNywyNi42bDAuOSwxLjFsMC42LTEuM2wxMS45LTI1LjVsMC4zLTAuNmwtMC41LTAuNAoJYy0zNi0zMy43LTkwLjUtMzguMi0xMzEuNS0xMC43Yy0xNi44LDExLjMtMzAsMjcuMy0zNy43LDQ2bDAuOC0wLjZIMTkzbC0wLjIsMC41bC0xMy43LDI5LjRsLTAuNiwxLjNoMzEuMmwtMC45LTEKCWMtMC4yLDMtMC40LDUuOC0wLjQsOC4zYzAsMy40LDAuMiw2LjcsMC41LDEwLjFsMC45LTFoLTE1LjVsLTAuMiwwLjVsLTEzLjcsMjkuNGwtMC42LDEuMmgzNy43bC0wLjgtMC41YzE2LjQsMzcuOCw1NCw2Mi4yLDk2LDYyLjIKCWMyMC45LDAuMSw0MS4zLTYuMSw1OC42LTE3LjZsMC40LTAuM1YxNDhsLTEuNSwxLjhjLTI2LjEsMjkuOC03MS40LDMyLjgtMTAxLjIsNi43Yy00LjktNC4zLTkuMi05LjMtMTIuOC0xNC44bC0wLjcsMS40aDc2LjYKCWwwLjItMC41bDEzLjctMjkuNGwwLjYtMS4ySDI0NC4ybDAuOSwwLjhjLTAuNS0zLjUtMC44LTcuMS0wLjgtMTAuN2MwLTIuNCwwLjEtNC45LDAuNC03LjNsLTAuOSwwLjhoMTEwLjRsMC4yLTAuNUwzNjgsNjUuNgoJbDAuNi0xLjNIMjUzLjJsMC44LDEuM0MyNjYuOCw0My41LDI5MC41LDI5LjgsMzE2LjIsMjkuNyBNMjUzLjIsNjYuMWgxMTRsLTAuOC0xLjJsLTEzLjcsMjkuNGwwLjgtMC41SDI0Mi45bC0wLjEsMC44CgljLTAuMiwyLjUtMC40LDUtMC40LDcuNWMwLDMuNywwLjMsNy40LDAuOCwxMWwwLjEsMC44SDM0NWwtMC44LTEuM2wtMTMuNywyOS40bDAuOC0wLjVoLTc3LjdsMC45LDEuNGMyMi4yLDM0LDY3LjcsNDMuNiwxMDEuNywyMS40CgljNS42LTMuNywxMC43LTguMSwxNS4yLTEzLjJsLTEuNS0wLjZ2MzZsMC40LTAuN0MzNTMuMiwxOTcsMzMzLjEsMjAzLDMxMi42LDIwM2MtNDEuMiwwLTc4LjMtMjQtOTQuNC02MS4xbC0wLjItMC41aC0zNi45bDAuOCwxLjMKCWwxMy43LTI5LjRsLTAuOCwwLjVoMTZsLTAuMS0xYy0wLjMtMy4zLTAuNS02LjctMC41LTkuOWMwLTIuNSwwLjEtNS4yLDAuNC04LjJsMC4xLTFoLTMwLjhsMC44LDEuMmwxMy43LTI5LjNsLTAuOCwwLjVoMjMuOAoJbDAuMi0wLjVjNy42LTE4LjQsMjAuNS0zNC4xLDM3LjEtNDUuMmM0MC4zLTI3LDkzLjktMjIuNiwxMjkuMiwxMC41bC0wLjItMWwtMTEuOSwyNS41bDEuNS0wLjJjLTI1LjYtMzEuNS03MS44LTM2LjQtMTAzLjQtMTAuOAoJYy03LDUuNy0xMi45LDEyLjYtMTcuNCwyMC40bC0wLjgsMS4zTDI1My4yLDY2LjF6Ii8+Cjwvc3ZnPgo="
      }))))), rudexService === "gateway" && rudexGatewayCoins.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: this.props.currentLocale == "ru" ? agreement_ru : agreement_en,
        content: "gateway.rudex.rudex_notice1",
        component: "a",
        target: "_blank"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.RudexNoticeInformed,
        onChange: this.onRudexNoticeInformed.bind(this)
      }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.rudex.rudex_notice1_informed"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), RudexNoticeInformed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__["default"], {
        account: account,
        coins: rudexGatewayCoins,
        network: "native",
        gateway: "rudex"
      }) : null) : null, rudexService === "fiat" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "https://merchant.raidofinance.eu/media/83eef3d5a17bf300af9986e913c2c99d.pdf",
        content: "gateway.rudex.rudex_notice_third_party",
        component: "a",
        target: "_blank"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.RudexNoticeInformed_BuyCrypto,
        onChange: this.onRudexNoticeInformed_BuyCrypto.bind(this)
      }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.rudex.rudex_notice1_informed_third_party_service"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), RudexNoticeInformed_BuyCrypto ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__["default"], {
        account: account
      }) : null) : null)
    }, {
      name: "Binance Smart Chain (BEP-20 tokens)",
      identifier: "RUDEX_BEP20",
      template: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "content-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "service-selector",
        style: {
          marginBottom: "2rem"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "button-group segmented no-margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        onClick: this.toggleRuDEX_BEP20Service.bind(this, "gateway"),
        className: rudexServiceBEP20 === "gateway" ? "is-active" : ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.gateway"
      }))))), rudexServiceBEP20 === "gateway" && rudexGatewayCoinsBEP20.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: this.props.currentLocale == "ru" ? agreement_ru : agreement_en,
        content: "gateway.rudex.rudex_notice1",
        component: "a",
        target: "_blank"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.RudexNoticeInformed,
        onChange: this.onRudexNoticeInformed.bind(this)
      }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.rudex.rudex_notice1_informed"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), RudexNoticeInformed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__["default"], {
        account: account,
        coins: rudexGatewayCoinsBEP20,
        network: "bsc-tokens",
        gateway: "rudex"
      }) : null) : null)
    });
    return serList;
  }

  render() {
    let {
      account,
      servicesDown
    } = this.props;
    let {
      activeService
    } = this.state;
    let rudexGatewayCoins = this.props.rudexBackedCoins.map(coin => {
      return coin;
    }).sort((a, b) => {
      if (a.symbol < b.symbol) return -1;
      if (a.symbol > b.symbol) return 1;
      return 0;
    });
    let rudexGatewayCoinsBEP20 = this.props.rudexBackedCoinsBEP20.map(coin => {
      return coin;
    }).sort((a, b) => {
      if (a.symbol < b.symbol) return -1;
      if (a.symbol > b.symbol) return 1;
      return 0;
    });
    let services = this.renderServices(rudexGatewayCoins, rudexGatewayCoinsBEP20);
    const serviceNames = [];
    let options = services.map((services_obj, index) => {
      serviceNames.push(services_obj.identifier);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        key: index,
        value: index
      }, services_obj.name);
    });
    const currentServiceName = serviceNames[activeService];
    const currentServiceDown = servicesDown.get(currentServiceName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.props.contained ? "grid-content" : "grid-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.props.contained ? "" : "grid-content",
      style: {
        paddingTop: "2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "gateway.title",
      component: "h2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical medium-horizontal no-margin no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-6 show-for-medium"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      path: "components/DepositWithdraw",
      section: "deposit-short"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-5 medium-offset-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      account: account.get("name"),
      path: "components/DepositWithdraw",
      section: "receive"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical medium-horizontal no-margin no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-6 small-order-2 medium-order-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "label",
      className: "left-label",
      content: "gateway.service"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      onChange: this.onSetService.bind(this),
      className: "bts-select",
      value: activeService
    }, options), currentServiceDown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      style: {
        color: "red",
        marginBottom: "1em",
        display: "block"
      },
      content: `gateway.unavailable_${currentServiceName}`
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-5 medium-offset-1 small-order-1 medium-order-2",
      style: {
        paddingBottom: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "label",
      className: "left-label",
      content: "gateway.your_account"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_15__["default"], {
      size: {
        height: 40,
        width: 40
      },
      account: account.get("name"),
      custom_image: null
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      value: account.get("name"),
      placeholder: null,
      disabled: true,
      onChange: () => {},
      onKeyDown: () => {},
      tabIndex: 1
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-padding",
      style: {
        paddingTop: 15
      }
    }, currentServiceDown ? null : activeService && services[activeService] ? services[activeService].template : services[0].template)));
  }

}

AccountDepositWithdraw = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(AccountDepositWithdraw);

class DepositStoreWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  UNSAFE_componentWillMount() {
    (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__.updateGatewayBackers)();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AccountDepositWithdraw, this.props);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(DepositStoreWrapper, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"], stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"]];
  },

  getProps() {
    return {
      currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().passwordAccount,
      account: stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentAccount,
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().viewSettings,
      currentLocale: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().settings.get("locale"),
      backedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins,

      /*            openLedgerBackedCoins: GatewayStore.getState().backedCoins.get(
                      "OPEN",
                      []
                  ),*/
      rudexBackedCoins: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("RUDEX", []),
      rudexBackedCoinsBEP20: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().backedCoins.get("RUDEX_BEP20", []),

      /*            bitsparkBackedCoins: GatewayStore.getState().backedCoins.get(
                      "SPARKDEX",
                      []
                  ),
                  blockTradesBackedCoins: GatewayStore.getState().backedCoins.get(
                      "TRADE",
                      []
                  ),
                  citadelBackedCoins: GatewayStore.getState().backedCoins.get(
                      "CITADEL",
                      []
                  ),
                  xbtsxBackedCoins: GatewayStore.getState().backedCoins.get(
                      "XBTSX",
                      []
                  ),*/
      servicesDown: stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().down || {}
    };
  }

}));

/***/ }),

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1964);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);






class DynamicObjectResolver extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    dos: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObjectsList
  };
  static defaultProps = {
    dos: (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)()
  };

  constructor() {
    super();
    this.getDynamicObject = this.getDynamicObject.bind(this);
  }

  getDynamicObject(id) {
    return this.props.dos.find(a => {
      return a && a.get("id") === id;
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), { ...this.props,
      getDynamicObject: this.getDynamicObject
    });
  }

}

DynamicObjectResolver = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(DynamicObjectResolver);
/**
 * HOC that resolves either a number of assets directly with ChainAsset,
 * or a list of assets with ChainAssets
 *
 *  Options
 *  -'propNames' an array of prop names to be resolved as assets. (defaults to "asset" or "assets")
 *  -'defaultProps' default values to use for objects (optional)
 *  -'asList' defines whether to use ChainAssetsList or not (useful for resolving large quantities of assets)
 *  -'withDynamic' defines whether to also resolve dynamic objects or not
 */

function AssetWrapper(Component, options = {}) {
  options.propNames = options.propNames || [!!options.asList ? "assets" : "asset"];
  const finalPropTypes = options.propNames.reduce((res, type) => {
    res[type] = options.asList ? components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAssetsList : components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired;
    return res;
  }, {});
  let defaultProps = Object.keys(finalPropTypes).reduce((res, key) => {
    let current = options.defaultProps && options.defaultProps[key];
    res[key] = !!options.asList ? (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)(current || []) : current || "1.3.0";
    return res;
  }, {});

  if (options.defaultProps && !!options.defaultProps.tempComponent) {
    defaultProps.tempComponent = options.defaultProps.tempComponent;
  }

  class AssetsResolver extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static propTypes = finalPropTypes;
    static defaultProps = defaultProps;

    render() {
      let finalAssets = {};
      let passTroughProps = {};
      let dos = (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)();
      Object.keys(this.props).forEach(prop => {
        if (this.props[prop] && options.propNames.indexOf(prop) !== -1) {
          if (options.withDynamic) {
            if (!options.asList) {
              dos = dos.push(this.props[prop].get("dynamic_asset_data_id"));
            } else {
              this.props[prop].forEach(a => {
                if (!!a) dos = dos.push(a.get("dynamic_asset_data_id"));
              });
            }
          }

          finalAssets[prop] = options.asList ? this.props[prop].filter(a => !!a) : this.props[prop];
        } else {
          passTroughProps[prop] = this.props[prop];
        }
      });
      let wrapped = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), { ...passTroughProps,
        ...finalAssets
      });
      if (options.withDynamic) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicObjectResolver, {
        dos: dos
      }, wrapped);else return wrapped;
    }

  }

  AssetsResolver = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AssetsResolver);

  class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetsResolver, this.props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
        ref: "bound_component"
      }));
    }

  }

  Wrapper.displayName = `Wrapper(${(0,common_reactUtils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component)})`;
  return Wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetWrapper);

/***/ }),

/***/ 2906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(657);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2701);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2850);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1941);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2808);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2793);














class RuDexGateway extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCoin: this._getActiveCoin(props, {
        action: props.viewSettings.get("rudexAction") || "deposit"
      }),
      action: props.viewSettings.get("rudexAction") || "deposit"
    };
  }

  _getActiveCoin(props, state) {
    let cachedCoin;
    let firstTimeCoin;
    let activeCoin;
    cachedCoin = props.viewSettings.get("activeCoin_rudex_" + props.network, null); //firstTimeCoin = "GOLOS";

    firstTimeCoin = props.coins[0].name;
    activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;

    if (state.action === "withdraw") {
      activeCoin = this._findCoinByName(props, activeCoin).symbol;
    }

    return activeCoin;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.provider !== this.props.provider) {
      this.setState({
        activeCoin: this._getActiveCoin(nextProps, this.state)
      });
    }

    if (nextProps.network !== this.props.network) {
      this.setState({
        activeCoin: this._getActiveCoin(nextProps, this.state)
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


  onSelectCoin(e) {
    this.setState({
      activeCoin: e.value
    });
    let setting = {};
    let coinName = e.value;

    if (this.state.action === "withdraw") {
      coinName = this._findCoinBySymbol(this.props, coinName).backingCoin;
    }

    setting["activeCoin_rudex_" + this.props.network] = coinName;
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting(setting);
  }

  _findCoinByName(props, name) {
    for (let i = 0; i < props.coins.length; i++) {
      let coin = props.coins[i];
      if (coin.backingCoin.toUpperCase() === name) return coin;
    }

    return props.coins[0];
  }

  _findCoinBySymbol(props, name) {
    for (let i = 0; i < props.coins.length; i++) {
      let coin = props.coins[i];
      if (coin.symbol.toUpperCase() === name) return coin;
    }

    return null;
  }

  changeAction(type) {
    let activeCoin = this._getActiveCoin(this.props, {
      action: type
    });

    this.setState({
      action: type,
      activeCoin: activeCoin
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({
      ["rudexAction"]: type
    });
  }

  render() {
    let {
      coins,
      account
    } = this.props;
    let {
      activeCoin,
      action
    } = this.state;

    if (!coins.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    }

    let filteredCoins = coins.filter(a => {
      if (!a || !a.symbol) {
        return false;
      } else {
        return true;
        /*return action === "deposit"
            ? a.depositAllowed
            : a.withdrawalAllowed;*/
      }
    });
    let coinOptions = filteredCoins.map(coin => {
      let option = action === "deposit" ? coin.backingCoin.toUpperCase() : coin.symbol;
      let name = option.replace("RUDEX.", ""); //let prefix = name === "PPY" ? "" : "RUDEX.";

      let prefix = "RUDEX.";
      return {
        value: option,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          replaceNoneToBts: false,
          maxWidth: 30,
          name: prefix + name
        }), option.replace("RUDEX.", ""))
      };
    }).filter(a => {
      return a !== null;
    });
    let coin = filteredCoins.filter(coin => {
      return action === "deposit" ? coin.backingCoin.toUpperCase() === activeCoin : coin.symbol === activeCoin;
    })[0];
    if (!coin) coin = filteredCoins[0];
    let isDeposit = this.state.action === "deposit";
    let supportUrl = "https://rudex.freshdesk.com";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block no-margin vertical medium-horizontal no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        minHeight: "2rem"
      },
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.choose_" + action
    }), ":", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_11__["default"] //className="external-coin-types bts-select"
    //onChange={this.onSelectCoin.bind(this)}
    , {
      onChange: this.onSelectCoin.bind(this),
      clearable: false,
      searchable: false,
      value: activeCoin,
      options: coinOptions
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-6 medium-offset-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        minHeight: "2rem"
      },
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.gateway_text"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "button-group segmented no-margin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: action === "deposit" ? "is-active" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.changeAction.bind(this, "deposit")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.deposit"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: action === "withdraw" ? "is-active" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.changeAction.bind(this, "withdraw")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.withdraw"
    }))))))), !coin ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: `${coin.symbol}`,
      gateway: "rudex",
      issuer_account: coin.issuer,
      account: account,
      deposit_asset: coin.backingCoin.toUpperCase(),
      deposit_asset_name: coin.name,
      deposit_coin_type: coin.backingCoin.toLowerCase(),
      deposit_account: coin.gatewayWallet,
      deposit_wallet_type: coin.walletType,
      depositAllowed: coin.depositAllowed,
      withdrawalAllowed: coin.withdrawalAllowed,
      description: coin.description,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.rudex.support_block"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: supportUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "external-link"
    }, supportUrl))), coin && coin.symbol ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__.TransactionWrapper, {
      asset: coin.symbol,
      fromAccount: isDeposit ? coin.issuerId : this.props.account.get("id"),
      to: isDeposit ? this.props.account.get("id") : coin.issuerId
    }, ({
      asset,
      to,
      fromAccount
    }) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__.RecentTransactions, {
        accountsList: immutable__WEBPACK_IMPORTED_MODULE_8___default().List([this.props.account.get("id")]),
        limit: 10,
        compactView: true,
        fullHeight: true,
        filter: "transfer",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          content: "gateway.recent_" + this.state.action
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
    }) : null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_3__.connect)(RuDexGateway, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
    };
  }

}));

/***/ }),

/***/ 2907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1963);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2908);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2909);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2911);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2311);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2910);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2088);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2410);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2912);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2092);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2325);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_17__);





















class RuDexGatewayDepositRequest extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    gateway: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    deposit_coin_type: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    deposit_asset_name: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    deposit_account: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    receive_coin_type: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    deposit_wallet_type: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_message: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    action: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    supports_output_memos: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool.isRequired),
    supportsPublicKey: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool.isRequired),
    memoType: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),
    min_amount: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
    gateFee: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
    confirmations: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
    asset_precision: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number)
  };

  constructor(props) {
    super(props);
    this.deposit_address_cache = new common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.state = {
      isQrModalVisible: false,
      qrcode: "",
      isModalVisible: false,
      receive_address: null,
      account_name: null
    };
    this.addDepositAddress = this.addDepositAddress.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showQrModal = this.showQrModal.bind(this);
    this.hideQrModal = this.hideQrModal.bind(this);
  }

  showModal() {
    this.setState({
      isModalVisible: true
    });
  }

  hideModal() {
    this.setState({
      isModalVisible: false
    });
  }

  onShowQrcode(text) {
    this.setState({
      qrcode: text
    }, () => {
      this.showQrModal();
    });
  }

  showQrModal() {
    this.setState({
      isQrModalVisible: true
    });
  }

  hideQrModal() {
    this.setState({
      isQrModalVisible: false
    });
  }

  _getDepositObject() {
    return {
      walletType: this.props.deposit_wallet_type,
      inputCoinType: this.props.deposit_coin_type,
      outputCoinType: this.props.receive_coin_type,
      outputAddress: this.props.account.get("name"),
      stateCallback: this.addDepositAddress
    };
  }

  _notify(su) {
    let strN = "copy_address";
    if (su == "memo") strN = "copy_memo";
    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Notification.success({
      message: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("account.notify." + strN)
    });
  } // UNSAFE_componentWillMount() {
  //     let account_name = this.props.account.get("name");
  //     let receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
  // }


  addDepositAddress(receive_address) {
    let account_name = this.props.account.get("name");
    this.deposit_address_cache.cacheInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type, receive_address.address, receive_address.memo);
    this.setState({
      account_name
    });
    this.setState({
      receive_address
    });
  }

  getWithdrawModalId() {
    // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
    // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
    return "withdraw_asset_" + this.props.issuer_account.get("name") + "_" + this.props.receive_asset.get("symbol");
  }

  onWithdraw() {
    this.showModal();
  }

  render() {
    let emptyRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "none",
        minHeight: 150
      }
    });
    if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;
    let account_balances_object = this.props.account.get("balances"); // let balance = "0 " + this.props.receive_asset.get("symbol");

    if (this.props.deprecated_in_favor_of) {
      let has_nonzero_balance = false;
      let balance_object_id = account_balances_object.get(this.props.receive_asset.get("id"));

      if (balance_object_id) {
        let balance_object = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(balance_object_id);

        if (balance_object) {
          let balance = balance_object.get("balance");
          if (balance != 0) has_nonzero_balance = true;
        }
      }

      if (!has_nonzero_balance) return emptyRow;
    } // let account_balances = account_balances_object.toJS();
    // let asset_types = Object.keys(account_balances);
    // if (asset_types.length > 0) {
    //     let current_asset_id = this.props.receive_asset.get("id");
    //     if( current_asset_id )
    //     {
    //         balance = (<span><Translate component="span" content="transfer.available"/>: <BalanceComponent balance={account_balances[current_asset_id]}/></span>);
    //     }
    // }


    let receive_address = this.state.receive_address;

    if (this.state.account_name === this.props.account.get("name")) {
      let account_name = this.props.account.get("name");
      let receive_address_from_cache = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);

      if (receive_address_from_cache !== undefined) {
        receive_address = receive_address_from_cache;
      }
    } else if (!this.props.supports_output_memos) {
      (0,lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.requestDepositAddress)(this._getDepositObject());
      return emptyRow;
    }

    let qrcode = this.state.qrcode;
    let depositConfirmation = null;

    if (this.props.confirmations && this.props.confirmations.type) {
      if (this.props.confirmations.type === "irreversible") {
        depositConfirmation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "gateway.gateway_deposit.confirmations.last_irreversible"
        });
      } else if (this.props.confirmations.type === "blocks" && this.props.confirmations.value) {
        depositConfirmation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "gateway.gateway_deposit.confirmations.n_blocks",
          blocks: this.props.confirmations.value
        });
      }
    }

    let withdraw_modal_id = this.getWithdrawModalId();
    let deposit_address_fragment = null;
    let deposit_memo = null; // if (this.props.deprecated_in_favor_of)
    // {
    //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get("symbol")} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" title="icons.question_circle" /></span><ReactTooltip /></span>;
    // }
    // else
    // {

    let clipboardText = "";
    let memoText;
    let withdraw_memo_prefix;
    let currentGateway = "RUDEX";

    if (!!lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__.availableGateways[currentGateway].simpleAssetGateway && this.props.deposit_account) {
      deposit_address_fragment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.deposit_account);
      clipboardText = this.props.deposit_account;

      if (!!this.props.memoType && this.props.memoType === "btsid") {
        memoText = lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__.availableGateways[currentGateway].fixedMemo["prepend_btsid"] + this.props.account.get("id").replace("1.2.", "") + lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__.availableGateways[currentGateway].fixedMemo["append"];
      } else {
        memoText = lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__.availableGateways[currentGateway].fixedMemo["prepend_default"] + this.props.account.get("name") + lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__.availableGateways[currentGateway].fixedMemo["append"];
      }

      deposit_memo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, memoText);
      withdraw_memo_prefix = this.props.deposit_coin_type + ":";
    } else {
      if ((!receive_address || !receive_address.address) && !this.props.supports_output_memos) {
        (0,lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.requestDepositAddress)(this._getDepositObject());
        return emptyRow;
      }

      if (receive_address.memo) {
        // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
        memoText = receive_address.memo;
        clipboardText = receive_address.address;
        deposit_address_fragment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, receive_address.address);
        deposit_memo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, receive_address.memo);
      } else {
        // This is a client that uses unique deposit addresses to select the output
        clipboardText = receive_address.address;
        deposit_address_fragment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            wordBreak: "break-word",
            lineHeight: "1.5em",
            marginTop: "15px",
            display: "block"
          }
        }, receive_address.address);
      }

      withdraw_memo_prefix = "";
    }

    if (this.props.action === "deposit") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "rudex__gateway grid-block no-padding no-margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.deposit_summary"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.asset_to_deposit"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, this.props.deposit_asset)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.asset_to_receive"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: this.props.receive_asset.get("symbol"),
        replace: false
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.intermediate"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
        account: this.props.issuer_account.get("id")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.your_account"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
        account: this.props.account.get("id")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.balance"
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
        account: this.props.account.get("name"),
        asset: this.props.receive_asset.get("symbol"),
        replace: false
      }))))))), this.props.depositAllowed == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.deposit_inst"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "left-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.deposit_to",
        asset: this.props.description
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "left-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.min_amount",
        minamount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
        symbol: this.props.deposit_coin_type
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "left-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.min_amount_warn",
        minamount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
        symbol: this.props.deposit_coin_type
      }))), depositConfirmation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, depositConfirmation), ")") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: "10px 0",
          fontSize: "1.1rem"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "ADDRESS:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DisableCopyText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        replaceCopyText: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("gateway.use_copy_button")
      }, deposit_address_fragment))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button",
        onClick: this.onShowQrcode.bind(this, clipboardText)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "modal.qrcode.label"
      })))), deposit_memo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DisableCopyText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        replaceCopyText: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("gateway.use_copy_button")
      }, "MEMO:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, deposit_memo))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button",
        onClick: this.onShowQrcode.bind(this, memoText)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "modal.qrcode.label"
      })))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Modal, {
        footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
          key: "close",
          type: "primary",
          onClick: this.hideQrModal
        }, counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("modal.close"))],
        visible: this.state.isQrModalVisible,
        onCancel: this.hideQrModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DepositQrCodeModal, {
        text: qrcode
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button-group",
        style: {
          paddingTop: 10
        }
      }, deposit_address_fragment ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default()), {
        text: clipboardText,
        onCopy: () => this._notify("address")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button"
      }, "Copy address")) : null, memoText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default()), {
        text: memoText,
        onCopy: () => this._notify("memo")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button"
      }, "Copy memo")) : null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.rudex.under_construction"
      })));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "rudex__gateway grid-block no-padding no-margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.withdraw_summary"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.asset_to_withdraw"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: this.props.receive_asset.get("symbol"),
        replace: false
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.asset_to_receive"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, this.props.deposit_asset)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.intermediate"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__["default"], {
        account: this.props.issuer_account.get("id")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.balance"
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__["default"], {
        account: this.props.account.get("name"),
        asset: this.props.receive_asset.get("symbol"),
        replace: false
      }))))))), this.props.withdrawalAllowed == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.withdraw_inst"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "left-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.withdraw_to",
        asset: this.props.description
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button-group",
        style: {
          paddingTop: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "button success",
        style: {
          fontSize: "1.3rem"
        },
        onClick: this.onWithdraw.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.withdraw_now"
      }), " "))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.rudex.under_construction"
      })), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Modal, {
        onCancel: this.hideModal,
        title: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("gateway.withdraw_coin", {
          coin: this.props.deposit_asset_name,
          symbol: this.props.deposit_asset
        }),
        footer: null,
        visible: this.state.isModalVisible
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hideModal: this.hideModal,
        showModal: this.showModal,
        account: this.props.account.get("name"),
        issuer: this.props.issuer_account.get("name"),
        asset: this.props.receive_asset.get("symbol"),
        output_coin_name: this.props.deposit_asset_name,
        output_coin_symbol: this.props.deposit_asset,
        output_coin_type: this.props.deposit_coin_type,
        output_wallet_type: this.props.deposit_wallet_type,
        description: this.props.description,
        output_supports_memos: this.props.supports_output_memos,
        output_supportsPublicKey: this.props.supportsPublicKey,
        memo_prefix: withdraw_memo_prefix,
        modal_id: withdraw_modal_id,
        min_amount: this.props.min_amount,
        gateFee: this.props.gateFee,
        asset_precision: this.props.asset_precision,
        balance: this.props.account.get("balances").toJS()[this.props.receive_asset.get("id")]
      })));
    }
  }

}

class DepositQrCodeModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = this.props.text;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "small-12",
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((qrcode_react__WEBPACK_IMPORTED_MODULE_17___default()), {
      size: 200,
      value: text
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        textTransform: "none"
      }
    }, text));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RuDexGatewayDepositRequest));

/***/ }),

/***/ 2909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(607);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2117);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2832);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(605);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2910);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(656);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(437);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(636);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(637);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];



















class RuDexWithdrawModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    issuer: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    output_coin_name: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string.isRequired),
    output_coin_symbol: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string.isRequired),
    output_coin_type: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string.isRequired),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    output_wallet_type: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    output_supports_memos: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool.isRequired),
    output_supportsPublicKey: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool.isRequired),
    amount_to_withdraw: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    balance: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject,
    min_amount: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),
    gateFee: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number)
  };

  constructor(props) {
    super(props);
    this.state = {
      isConfirmationModalVisible: false,
      withdraw_amount: this.props.amount_to_withdraw,
      withdraw_address: common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.getLast(props.output_wallet_type),
      withdraw_address_check_in_progress: true,
      withdraw_address_is_valid: null,
      options_is_valid: false,
      confirmation_is_valid: false,
      withdraw_address_selected: common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.getLast(props.output_wallet_type),
      withdraw_publicKey: "",
      withdraw_publicKey_not_empty: this.props.output_supportsPublicKey ? false : true,
      memo: "",
      withdraw_address_first: true,
      empty_withdraw_value: false,
      from_account: props.account,
      fee_asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_12__.ChainStore.assets_by_symbol.get(props.fee_asset_symbol) || "1.3.0",
      feeStatus: {}
    };

    this._validateAddress(this.state.withdraw_address, props);

    this._checkBalance = this._checkBalance.bind(this);
    this._checkMinAmount = this._checkMinAmount.bind(this);
    this._updateFee = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_17__["default"])(this._updateFee.bind(this), 250);
    this.showConfirmationModal = this.showConfirmationModal.bind(this);
    this.hideConfirmationModal = this.hideConfirmationModal.bind(this);
  }

  UNSAFE_componentWillMount() {
    this._updateFee();

    this._checkFeeStatus();
  }

  componentWillUnmount() {
    this.unMounted = true;
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.account !== this.state.from_account && np.account !== this.props.account) {
      this.setState({
        from_account: np.account,
        feeStatus: {},
        feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
          amount: 0
        })
      }, () => {
        this._updateFee();

        this._checkFeeStatus();
      });
    }
  }

  showConfirmationModal() {
    this.setState({
      isConfirmationModalVisible: true
    });
  }

  hideConfirmationModal() {
    this.setState({
      isConfirmationModalVisible: false
    });
  }

  _updateFee(state = this.state) {
    let {
      fee_asset_id,
      from_account
    } = state;

    const {
      fee_asset_types
    } = this._getAvailableAssets(state);

    if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
      fee_asset_id = fee_asset_types[0];
    }

    if (!from_account) return null;
    (0,common_trxHelper__WEBPACK_IMPORTED_MODULE_13__.checkFeeStatusAsync)({
      accountID: from_account.get("id"),
      feeID: fee_asset_id,
      options: ["price_per_kbyte"],
      data: {
        type: "memo",
        content: this.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
      }
    }).then(({
      fee,
      hasBalance,
      hasPoolBalance
    }) => {
      if (this.unMounted) return;
      this.setState({
        feeAmount: fee,
        hasBalance,
        hasPoolBalance,
        error: !hasBalance || !hasPoolBalance
      }, this._checkBalance);
    });
  }

  _checkFeeStatus(state = this.state) {
    let account = state.from_account;
    if (!account) return;

    const {
      fee_asset_types: assets
    } = this._getAvailableAssets(state); // const assets = ["1.3.0", this.props.asset.get("id")];


    let feeStatus = {};
    let p = [];
    assets.forEach(a => {
      p.push((0,common_trxHelper__WEBPACK_IMPORTED_MODULE_13__.checkFeeStatusAsync)({
        accountID: account.get("id"),
        feeID: a,
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: this.props.output_coin_type + ":" + state.withdraw_address + (state.memo ? ":" + state.memo : "")
        }
      }));
    });
    Promise.all(p).then(status => {
      assets.forEach((a, idx) => {
        feeStatus[a] = status[idx];
      });

      if (!common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(state.feeStatus, feeStatus)) {
        this.setState({
          feeStatus
        });
      }

      this._checkBalance();
    }).catch(err => {
      console.error(err);
    });
  }

  onMemoChanged(e) {
    this.setState({
      memo: e.target.value
    }, this._updateFee);
  }

  onWithdrawAmountChange({
    amount
  }) {
    this.setState({
      withdraw_amount: amount,
      empty_withdraw_value: amount !== undefined && !parseFloat(amount)
    }, function () {
      this._checkBalance();

      this._checkMinAmount();
    });
  }

  onSelectChanged(index) {
    let new_withdraw_address = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.get(this.props.output_wallet_type)[index];
    common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.setLast({
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

  onWithdrawAddressChanged(e) {
    let new_withdraw_address = e.target.value.trim();
    this.setState({
      withdraw_address: new_withdraw_address,
      withdraw_address_check_in_progress: true,
      withdraw_address_selected: new_withdraw_address,
      withdraw_address_is_valid: null
    }, this._updateFee);

    this._validateAddress(new_withdraw_address);
  }

  onWithdrawPublicKeyChanged(e) {
    let new_withdraw_publicKey = e.target.value.trim();
    this.setState({
      withdraw_publicKey: new_withdraw_publicKey,
      withdraw_publicKey_not_empty: new_withdraw_publicKey != "" ? true : false
    });
  }

  _validateAddress(new_withdraw_address, props = this.props) {
    (0,common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.validateAddress)({
      url: props.url,
      walletType: props.output_wallet_type,
      newAddress: new_withdraw_address
    }).then(json => {
      if (typeof json === "undefined") {
        json = {
          isValid: false
        };
      }

      if (this.state.withdraw_address === new_withdraw_address) {
        this.setState({
          withdraw_address_check_in_progress: false,
          withdraw_address_is_valid: json.isValid,
          withdraw_publicKey: json.hasOwnProperty("publicKey") ? json.publicKey : "",
          withdraw_publicKey_not_empty: this.props.output_supportsPublicKey ? json.hasOwnProperty("publicKey") ? true : false : true
        });
      }
    });
  }

  _checkBalance() {
    const {
      feeAmount,
      withdraw_amount
    } = this.state;
    const {
      asset,
      balance
    } = this.props;
    if (!balance || !feeAmount) return;
    const hasBalance = (0,common_trxHelper__WEBPACK_IMPORTED_MODULE_13__.checkBalance)(withdraw_amount, asset, feeAmount, balance);
    if (hasBalance === null) return;
    this.setState({
      balanceError: !hasBalance
    });
    return hasBalance;
  }

  _checkMinAmount() {
    const {
      withdraw_amount
    } = this.state;
    if (withdraw_amount === null) return;
    const lessThanMinimum = withdraw_amount < this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(this.props.asset_precision);
    /*        console.log(
        "X",
        withdraw_amount,
        this.props.min_amount /
        utils.get_asset_precision(this.props.asset_precision)
    );*/

    this.setState({
      minAmountError: lessThanMinimum
    });
    return lessThanMinimum;
  }

  onSubmit() {
    if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length && this.state.withdraw_amount !== null) {
      if (!this.state.withdraw_address_is_valid) {
        this.showConfirmationModal();
      } else if (parseFloat(this.state.withdraw_amount) > 0) {
        if (!common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.has(this.props.output_wallet_type)) {
          let withdrawals = [];
          withdrawals.push(this.state.withdraw_address);
          common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.set({
            wallet: this.props.output_wallet_type,
            addresses: withdrawals
          });
        } else {
          let withdrawals = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.get(this.props.output_wallet_type);

          if (withdrawals.indexOf(this.state.withdraw_address) == -1) {
            withdrawals.push(this.state.withdraw_address);
            common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.set({
              wallet: this.props.output_wallet_type,
              addresses: withdrawals
            });
          }
        }

        common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.setLast({
          wallet: this.props.output_wallet_type,
          address: this.state.withdraw_address
        });
        let asset = this.props.asset;
        const {
          feeAmount,
          fee_asset_id
        } = this.state;
        let amount = parseFloat(String.prototype.replace.call(this.state.withdraw_amount, /,/g, ""));
        let sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
          asset_id: asset.get("id"),
          precision: asset.get("precision"),
          real: amount
        });
        actions_AccountActions__WEBPACK_IMPORTED_MODULE_8__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), sendAmount.getAmount(), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.props.output_supportsPublicKey ? ":" + this.state.withdraw_publicKey : "") + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : fee_asset_id);
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

  onSubmitConfirmation() {
    this.hideConfirmationModal();

    if (!common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.has(this.props.output_wallet_type)) {
      let withdrawals = [];
      withdrawals.push(this.state.withdraw_address);
      common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.set({
        wallet: this.props.output_wallet_type,
        addresses: withdrawals
      });
    } else {
      let withdrawals = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.get(this.props.output_wallet_type);

      if (withdrawals.indexOf(this.state.withdraw_address) == -1) {
        withdrawals.push(this.state.withdraw_address);
        common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.set({
          wallet: this.props.output_wallet_type,
          addresses: withdrawals
        });
      }
    }

    common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.setLast({
      wallet: this.props.output_wallet_type,
      address: this.state.withdraw_address
    });
    let asset = this.props.asset;
    let precision = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(asset.get("precision"));
    let amount = String.prototype.replace.call(this.state.withdraw_amount, /,/g, "");
    const {
      feeAmount,
      fee_asset_id
    } = this.state;
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_8__["default"].transfer(this.props.account.get("id"), this.props.issuer.get("id"), parseInt(amount * precision, 10), asset.get("id"), this.props.output_coin_type + ":" + this.state.withdraw_address + (this.props.output_supportsPublicKey ? ":" + this.state.withdraw_publicKey : "") + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, feeAmount ? feeAmount.asset_id : fee_asset_id);
  }

  onDropDownList() {
    if (common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.has(this.props.output_wallet_type)) {
      if (this.state.options_is_valid === false) {
        this.setState({
          options_is_valid: true
        });
        this.setState({
          withdraw_address_first: false
        });
      }

      if (this.state.options_is_valid === true) {
        this.setState({
          options_is_valid: false
        });
      }
    }
  }

  getWithdrawModalId() {
    return "confirmation";
  }

  onAccountBalance() {
    const {
      feeAmount
    } = this.state;

    if (Object.keys(this.props.account.get("balances").toJS()).includes(this.props.asset.get("id"))) {
      let total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
        amount: this.props.balance.get("balance"),
        asset_id: this.props.asset.get("id"),
        precision: this.props.asset.get("precision")
      }); // Subtract the fee if it is using the same asset

      if (total.asset_id === feeAmount.asset_id) {
        total.minus(feeAmount);
      }

      this.setState({
        withdraw_amount: total.getAmount({
          real: true
        }),
        empty_withdraw_value: false
      }, this._checkBalance);
    }
  }

  setNestedRef(ref) {
    this.nestedRef = ref;
  }

  onFeeChanged({
    asset
  }) {
    this.setState({
      fee_asset_id: asset.get("id")
    }, this._updateFee);
  }

  _getAvailableAssets(state = this.state) {
    const {
      from_account,
      feeStatus
    } = state;

    function hasFeePoolBalance(id) {
      if (feeStatus[id] === undefined) return true;
      return feeStatus[id] && feeStatus[id].hasPoolBalance;
    }

    function hasBalance(id) {
      if (feeStatus[id] === undefined) return true;
      return feeStatus[id] && feeStatus[id].hasBalance;
    }

    let fee_asset_types = [];

    if (!(from_account && from_account.get("balances"))) {
      return {
        fee_asset_types
      };
    }

    let account_balances = state.from_account.get("balances").toJS();
    fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].sortID);

    for (let key in account_balances) {
      let asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__.ChainStore.getObject(key);
      let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_12__.ChainStore.getObject(account_balances[key]);

      if (balanceObject && balanceObject.get("balance") === 0) {
        if (fee_asset_types.indexOf(key) !== -1) {
          fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
        }
      }

      if (asset) {
        // Remove any assets that do not have valid core exchange rates
        let priceIsValid = false,
            p;

        try {
          p = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Price({
            base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset(asset.getIn(["options", "core_exchange_rate", "base"]).toJS()),
            quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset(asset.getIn(["options", "core_exchange_rate", "quote"]).toJS())
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

    fee_asset_types = fee_asset_types.filter(a => {
      return hasFeePoolBalance(a) && hasBalance(a);
    });
    return {
      fee_asset_types
    };
  }

  render() {
    let {
      withdraw_address_selected,
      withdraw_publicKey,
      memo
    } = this.state;
    let storedAddress = common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__.WithdrawAddresses.get(this.props.output_wallet_type);
    let balance = null;
    let account_balances = this.props.account.get("balances").toJS();
    let asset_types = Object.keys(account_balances);
    let withdrawModalId = this.getWithdrawModalId();
    let invalid_address_message = null;
    let options = null;
    let confirmation = null;

    if (this.state.options_is_valid) {
      options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: !storedAddress.length ? "rudex-disabled-options" : "rudex-options"
      }, storedAddress.map(function (name, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          key: index,
          onClick: this.onSelectChanged.bind(this, index)
        }, name);
      }, this));
    }

    if (!this.state.withdraw_address_check_in_progress && this.state.withdraw_address && this.state.withdraw_address.length) {
      if (!this.state.withdraw_address_is_valid) {
        invalid_address_message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "has-error",
          style: {
            paddingTop: 10
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "gateway.valid_address",
          coin_type: this.props.description
        }));
        confirmation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Modal, {
          closable: false,
          footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
            key: "submit",
            type: "primary",
            onClick: this.onSubmitConfirmation.bind(this)
          }, counterpart__WEBPACK_IMPORTED_MODULE_6___default().translate("modal.confirmation.accept")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
            key: "cancel",
            style: {
              marginLeft: "8px"
            },
            onClick: this.hideConfirmationModal
          }, counterpart__WEBPACK_IMPORTED_MODULE_6___default().translate("modal.confirmation.cancel"))],
          visible: this.state.isConfirmationModalVisible,
          onCancel: this.hideConfirmationModal
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "modal.confirmation.title"
        })));
      } // if (this.state.withdraw_address_is_valid)
      //   invalid_address_message = <Icon name="checkmark-circle" title="icons.checkmark_circle.operation_succeed" className="success" />;
      // else
      //   invalid_address_message = <Icon name="cross-circle" title="icons.cross_circle.operation_failed" className="alert" />;

    }

    let tabIndex = 1;
    let withdraw_memo = null;

    if (this.props.output_supports_memos) {
      withdraw_memo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "content-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "span",
        content: "transfer.memo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
        rows: "3",
        value: memo,
        tabIndex: tabIndex++,
        onChange: this.onMemoChanged.bind(this)
      }));
    } // Estimate fee VARIABLES


    let {
      fee_asset_types
    } = this._getAvailableAssets();

    if (asset_types.length > 0) {
      let current_asset_id = this.props.asset.get("id");

      if (current_asset_id) {
        let current = account_balances[current_asset_id];
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            borderBottom: "#A09F9F 1px dotted",
            cursor: "pointer"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          component: "span",
          content: "transfer.available"
        }), "\xA0:\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "set-cursor",
          onClick: this.onAccountBalance.bind(this)
        }, current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
          balance: account_balances[current_asset_id]
        }) : 0));
      } else balance = "No funds";
    } else {
      balance = "No funds";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      className: "grid-block vertical full-width-content",
      style: {
        paddingTop: "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "modal.withdraw.amount",
      amount: this.state.withdraw_amount,
      asset: this.props.asset.get("id"),
      assets: [this.props.asset.get("id")],
      placeholder: "0.0",
      onChange: this.onWithdrawAmountChange.bind(this),
      display_balance: balance
    }), this.state.empty_withdraw_value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "transfer.errors.valid"
    })) : null, this.state.balanceError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "transfer.errors.insufficient"
    })) : null, this.state.minAmountError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "gateway.rudex.min_amount_error"
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "gateway.rudex.min_amount",
      minamount: common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
      symbol: this.props.output_coin_symbol
    })))), this.state.feeAmount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block gate_fee"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
      refCallback: this.setNestedRef.bind(this),
      disabled: true,
      amount: this.state.feeAmount.getAmount({
        real: true
      }),
      onChange: this.onFeeChanged.bind(this),
      asset: this.state.feeAmount.asset_id,
      assets: fee_asset_types,
      tabIndex: tabIndex++
    }), !this.state.hasBalance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "transfer.errors.noFeeBalance"
    })) : null, !this.state.hasPoolBalance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "transfer.errors.noPoolBalance"
    })) : null) : null, this.props.gateFee ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "amount-selector right-selector",
      style: {
        paddingBottom: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "gateway.fee"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      disabled: true,
      value: this.props.gateFee
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropdown-wrapper inactive"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.props.output_coin_symbol))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "span",
      content: "modal.withdraw.address",
      amount: common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number((this.state.withdraw_amount - this.props.gateFee) * Math.pow(10, this.props.asset_precision) / common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
      asset: this.props.output_coin_symbol
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rudex-select-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      value: withdraw_address_selected,
      tabIndex: "4",
      onChange: this.onWithdrawAddressChanged.bind(this),
      autoComplete: "off"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: this.onDropDownList.bind(this)
    }, "\u25BC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rudex-position-options"
    }, options), invalid_address_message), this.props.output_supportsPublicKey ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "span",
      content: "modal.withdraw.public_key"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rudex-select-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      value: withdraw_publicKey,
      tabIndex: "5",
      onChange: this.onWithdrawPublicKeyChanged.bind(this),
      onInput: this.onWithdrawPublicKeyChanged.bind(this),
      autoComplete: "off"
    })))) : null, withdraw_memo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
      disabled: this.state.error || this.state.balanceError || this.state.minAmountError || !this.state.withdraw_publicKey_not_empty,
      type: "primary",
      onClick: this.onSubmit.bind(this)
    }, counterpart__WEBPACK_IMPORTED_MODULE_6___default().translate("modal.withdraw.submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
      onClick: this.props.hideModal,
      style: {
        marginLeft: "8px"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_6___default().translate("account.perm.cancel"))), confirmation));
  }

}

RuDexWithdrawModal = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(RuDexWithdrawModal);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_10__.connect)(RuDexWithdrawModal, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
  },

  getProps(props) {
    return {
      fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().settings.get("fee_asset")
    };
  }

}));

/***/ }),

/***/ 2915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1963);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2910);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2911);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2311);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2088);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2410);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2092);
/* harmony import */ var _RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2916);
/* harmony import */ var _Raido_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2917);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);











 //RAIDO





class RaidoDepositRequest extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    gateway: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    deposit_coin_type: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    deposit_asset_name: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    deposit_account: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    receive_coin_type: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    issuer_account: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount,
    deposit_asset: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    receive_asset: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    deprecated_in_favor_of: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    action: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    min_amount: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
    confirmations: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)
  };

  constructor(props) {
    super(props);
    this.deposit_address_cache = new common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.state = {
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
        give_raw: this.props.activePaymentMethod,
        //fiats
        give: this.props.activePaymentMethod,
        give_decimal: 5,
        //get: "BTC",
        get: this.props.deposit_asset_name,
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
        direction: "buy",
        //BUY or SELL
        currencies: [],
        prices: []
      }
    };
    this.addDepositAddress = this.addDepositAddress.bind(this);
    this._makeUriRaido = this._makeUriRaido.bind(this);
    this._setCoinsRaido = this._setCoinsRaido.bind(this);
    this._setPricesRaido = this._setPricesRaido.bind(this);
    this._initPrices = this._initPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePaymentMethod = this.handlePaymentMethod.bind(this);
    this.initCurrencies(this._setCoinsRaido);
  }

  initCurrencies(stateCallback) {
    let coins = "https://merchant-datacenter.raidofinance.eu:8095/currencies/";
    fetch(coins, {
      method: "get",
      headers: new Headers({
        Accept: "application/json"
      })
    }).then(reply => {
      reply.json().then(json => {
        if (stateCallback) stateCallback(json.data);
      });
    }).catch(err => {
      console.log("fetch error:", err);
    });
  }

  _setCoinsRaido(currencies) {
    currencies = currencies.rows;
    let curr_coin_original = this.props.deposit_asset_name;
    let raido = this.state.raido;

    for (let i = 0; i < currencies.length; i++) {
      if (currencies[i].code === curr_coin_original) {
        console.log("withdraw_fee: " + currencies[i].withdraw_fee * 1);
        raido.give = this.state.raido.give;
        raido.get = currencies[i].code;
        raido.currencies = currencies; //raido.in_enable = currencies[i].in_enable;//TODO

        raido.out = currencies[i].id;
        raido.min_deposit = currencies[i].min_deposit;
        raido.max_deposit = currencies[i].max_deposit;
        raido.withdraw_fee = currencies[i].withdraw_fee * 1;
        raido.give_decimal = currencies[i].decimal;
        this.setState({
          raido
        });
      }
    }

    this._initPrices(this._setPricesRaido);
  }

  _initPrices(stateCallback) {
    let prices = "https://merchant-datacenter.raidofinance.eu:8095/prices/";
    fetch(prices, {
      method: "get",
      headers: new Headers({
        Accept: "application/json"
      })
    }).then(reply => {
      reply.json().then(json => {
        if (stateCallback) stateCallback(json.data);
      });
    }).catch(err => {
      console.log("fetch error:", err);
    });
  }

  _setPricesRaido(prices) {
    let raido = this.state.raido;
    let currencies = raido.currencies;

    for (let i = 0; i < currencies.length; i++) {
      if (currencies[i].code === raido.give_raw) {
        //if (currencies[i].cur === raido.give_raw) {
        raido.commission = parseFloat(currencies[i].commission);
        raido.in_fee = parseFloat(currencies[i].in_fee);
        raido.in_min_fee = parseFloat(currencies[i].in_min_fee);
        raido.get_decimal = currencies[i].decimal;
        raido.give = currencies[i].cur;
        raido.in = currencies[i].id;
        this.setState({
          raido
        });
      }
    }

    let pair = raido.get + "" + raido.give;
    let direction = raido.direction;
    let price = prices[pair][direction];
    console.log("price: " + price);

    if (price) {
      raido.price = price * 1;
      raido.prices = prices;
      this.setState({
        raido: raido
      });
    }

    this.handleChange("auto");
  }

  handleChange(type, event) {
    let name, value;

    if (type !== "auto") {
      name = event.target.name;
      value = event.target.value;
    } else {
      //Default properties for toggle static getAmount
      name = "getAmount";
      value = this.state.getAmount;
    }

    if (value === "" || value === 0) {
      this.setState({
        getAmount: ""
      });
      this.setState({
        giveAmount: ""
      });
      return;
    }

    value = value * 1;
    let raido = this.state.raido;
    let res_getAmount;

    if (name === "giveAmount") {
      res_getAmount = value / (raido.price / ((100 - (raido.commission + raido.in_fee)) / 100));
      let res_giveAmount = value;
      this.setState({
        getAmount: Math.ceil((res_getAmount - raido.withdraw_fee) * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal)
      });
      this.setState({
        giveAmount: Math.ceil(res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal)
      });
    } else if (name === "getAmount") {
      res_getAmount = value;
      let res_giveAmount = raido.price * (value + raido.withdraw_fee) / ((100 - (raido.commission + raido.in_fee)) / 100) + raido.in_min_fee;
      this.setState({
        getAmount: Math.ceil(res_getAmount * Math.pow(10, raido.give_decimal)) / Math.pow(10, raido.give_decimal)
      });
      this.setState({
        giveAmount: Math.ceil(res_giveAmount * Math.pow(10, raido.get_decimal)) / Math.pow(10, raido.get_decimal)
      });
    }

    if (res_getAmount >= raido.min_deposit && (raido.max_deposit == 0 || res_getAmount <= raido.max_deposit)) {
      this.setState({
        min_max_validate: {
          valid: true,
          direct: "min" //MIN or MAX

        }
      });
      this.setState({
        submitAllowed: true
      });
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

      this.setState({
        submitAllowed: false
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.raido !== this.state.raido || nextProps.deposit_coin_type !== this.props.getAmount || nextState.getAmount !== this.state.getAmount || nextState.giveAmount !== this.state.giveAmount || nextProps.receive_asset !== this.props.receive_asset || nextProps.deposit_asset_name !== this.props.deposit_asset_name || nextProps.action !== this.props.action || nextProps.currentLocale !== this.props.currentLocale;
  }

  handlePaymentMethod(e) {
    let payMethod = e.target["name"];
    let str = "paymentmethod";
    payMethod = payMethod.substr(str.length + 1, payMethod.length - str.length).toUpperCase();
    let raido = this.state.raido;
    raido.give_raw = payMethod;
    this.setState({
      raido: raido
    });

    this._setPricesRaido(this.state.raido.prices);

    let finding_el = document.querySelectorAll("label.btn-radio");

    for (var i = 0; i < finding_el.length; i++) {
      finding_el[i].classList.remove("active");
    }

    e.currentTarget.parentNode.classList.add("active");
    this.props.setActiveRaidoCoin(payMethod);
  }

  _getDepositObject() {
    return {
      inputCoinType: this.props.deposit_coin_type,
      outputCoinType: this.props.receive_coin_type,
      outputAddress: this.props.account.get("name"),
      stateCallback: this.addDepositAddress
    };
  }

  addDepositAddress(receive_address) {
    let account_name = this.props.account.get("name");
    this.deposit_address_cache.cacheInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type, receive_address.address, receive_address.memo);
    this.setState({
      account_name
    });
    this.setState({
      receive_address
    });
  }

  _makeUriRaido() {
    let strUri = "";
    let raido = this.state.raido;
    let receive_address = this.state.receive_address;
    let objParams = {
      affiliate_id: raido.affiliate_id,
      offer_id: 3,
      volume: this.state.giveAmount,
      in: raido.in,
      out: raido.out,
      "out-p": receive_address.address,
      direction: raido.direction
    };

    for (let item in objParams) {
      strUri += "&" + item + "=" + objParams[item];
    }

    return strUri;
  }

  onSubmitRequest(e) {
    e.preventDefault();
    this.setState({
      error: null
    });

    let raido_link = "https://raidofinance.eu/buy-sell?" + this._makeUriRaido();

    window.open(raido_link, "_blank");
  }

  render() {
    let emptyRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "none",
        minHeight: 150
      }
    });
    if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset) return emptyRow;
    let account_balances_object = this.props.account.get("balances");

    if (this.props.deprecated_in_favor_of) {
      let has_nonzero_balance = false;
      let balance_object_id = account_balances_object.get(this.props.receive_asset.get("id"));

      if (balance_object_id) {
        let balance_object = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(balance_object_id);

        if (balance_object) {
          let balance = balance_object.get("balance");
          if (balance != 0) has_nonzero_balance = true;
        }
      }

      if (!has_nonzero_balance) return emptyRow;
    }

    let receive_address = this.state.receive_address;

    if (this.state.account_name === this.props.account.get("name")) {
      let account_name = this.props.account.get("name");
      let receive_address_from_cache = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);

      if (receive_address_from_cache !== undefined) {
        receive_address = receive_address_from_cache;
      }
    } else if (!this.props.supports_output_memos) {
      (0,lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__.requestDepositAddress)(this._getDepositObject());
      return emptyRow;
    }

    let depositConfirmation = null;

    if (this.props.confirmations && this.props.confirmations.type) {
      if (this.props.confirmations.type === "irreversible") {
        depositConfirmation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "gateway.gateway_deposit.confirmations.last_irreversible"
        });
      } else if (this.props.confirmations.type === "blocks" && this.props.confirmations.value) {
        depositConfirmation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "gateway.gateway_deposit.confirmations.n_blocks",
          blocks: this.props.confirmations.value
        });
      }
    }

    let deposit_address_fragment = null;
    let currentGateway = "RUDEX";

    if (!!lib_common_gateways__WEBPACK_IMPORTED_MODULE_10__.availableGateways[currentGateway].simpleAssetGateway && this.props.deposit_account) {
      deposit_address_fragment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.deposit_account);
    } else {
      if ((!receive_address || !receive_address.address) && !this.props.supportsMemos) {
        (0,lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__.requestDepositAddress)(this._getDepositObject());
        return emptyRow;
      }

      if (receive_address.memo) {
        deposit_address_fragment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, receive_address.address);
      } else {
        // This is a client that uses unique deposit addresses to select the output
        deposit_address_fragment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, receive_address.address);
      }
    }

    if (this.props.action === "deposit") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "rudex__gateway grid-block no-padding no-margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.rudex.buy_crypto.deposit_summary"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.your_account"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__["default"], {
        account: this.props.account.get("id")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.balance"
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        account: this.props.account.get("name"),
        asset: this.props.receive_asset.get("symbol"),
        replace: false
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.rudex.buy_crypto.buy_inst"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "ADDRESS:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, deposit_address_fragment))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, depositConfirmation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, depositConfirmation), ")") : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: "10px 0",
          fontSize: "1.1rem"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ant-col-24 raido"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ant-col-24",
        style: {
          margin: "20px 0"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_11__["default"], {
        payment_id: "cardu",
        title: "Bank Card (USD)",
        active: this.state.raido.give_raw,
        onClick: () => this.handlePaymentMethod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_11__["default"], {
        payment_id: "carde",
        title: "Bank Card (EUR)",
        active: this.state.raido.give_raw,
        onClick: () => this.handlePaymentMethod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_11__["default"], {
        payment_id: "wiree",
        title: "Sepa (EUR)",
        active: this.state.raido.give_raw,
        onClick: () => this.handlePaymentMethod
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ant-col-10 give"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto.you_give"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        name: "giveAmount",
        type: "number",
        value: this.state.giveAmount,
        onChange: this.handleChange.bind(this, "giveAmount"),
        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("gateway.rudex.buy_crypto.you_give_placeholder"),
        style: {
          backgroundImage: `url(${""}images\/raido-payment-${this.state.raido.give_raw.toLowerCase()}.png)`
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ant-col-10 get",
        style: {
          marginLeft: "10%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto.you_get"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        name: "getAmount",
        type: "number",
        value: this.state.getAmount,
        onChange: this.handleChange.bind(this, "getAmount"),
        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("gateway.rudex.buy_crypto.you_get_placeholder"),
        style: {
          backgroundImage: `url(${""}asset-symbols\/rudex.${this.state.raido.get.toLowerCase()}.png)`
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: !this.state.min_max_validate.valid ? "raido_min_max_validate active" : "raido_min_max_validate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto." + this.state.min_max_validate.direct + "_amount"
      }), this.state.raido[this.state.min_max_validate.direct + "_deposit"] * 1, " ", this.state.raido.get)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ant-col-24"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "raido_text_block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto.withdraw_fee_included",
        withdraw_fee: this.state.raido.withdraw_fee,
        asset: this.state.raido.get
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "raido_text_block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto.approximate_amount"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "raido_text_block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto.final_text"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, this.props.account.get("name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ant-col-10 ant-col-offset-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "button",
        disabled: !this.state.submitAllowed,
        onClick: this.state.submitAllowed ? this.onSubmitRequest.bind(this) : null,
        style: {
          marginTop: "15px",
          width: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.buy_crypto.buy"
      }))))))));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "rudex__gateway grid-block no-padding no-margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.withdraw_summary"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.asset_to_withdraw"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: this.props.receive_asset.get("symbol"),
        replace: false
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.asset_to_receive"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, this.props.deposit_asset)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "td",
        content: "gateway.intermediate"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__["default"], {
        account: this.props.issuer_account.get("id")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.balance"
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          fontWeight: "bold",
          color: "#049cce",
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        account: this.props.account.get("name"),
        asset: this.props.receive_asset.get("symbol"),
        replace: false
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "small-12 medium-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "h4",
        content: "gateway.withdraw_inst"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "left-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.withdraw_to",
        asset: this.props.deposit_asset
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "button-group",
        style: {
          paddingTop: 20
        }
      })));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(RaidoDepositRequest));

/***/ }),

/***/ 2914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(656);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(657);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2701);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2850);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1941);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2808);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2793);
/* harmony import */ var _RaidoDepositRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2915);














class RaidoFinance extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      activeCoin: this._getActiveCoin(props, {
        action: "deposit"
      }),
      action: props.viewSettings.get("rudexActionRaido", "deposit"),
      activePaymentMethod: "CARDE"
    };
    this._setActiveRaidoCoin = this._setActiveRaidoCoin.bind(this);
  }

  _setActiveRaidoCoin(meth) {
    this.setState({
      activePaymentMethod: meth
    });
  }

  _getActiveCoin(props, state) {
    let cachedCoin;
    let firstTimeCoin;
    let activeCoin;
    cachedCoin = props.viewSettings.get("activeCoin_Raido", "deposit"); //let firstTimeCoin = "BTC";

    firstTimeCoin = props.coins[0];
    activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;
    /*        if (state.action === "withdraw") {
                activeCoin = this._findCoinByName(props, activeCoin).symbol;
            }*/

    return activeCoin;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.provider !== this.props.provider) {
      this.setState({
        activeCoin: this._getActiveCoin(nextProps, this.state)
      });
    }
  }

  onSelectCoin(e) {
    this.setState({
      activeCoin: e.value
    });
    let setting = {};
    let coinName = e.value;

    if (this.state.action === "withdraw") {
      coinName = this._findCoinBySymbol(this.props, coinName).backingCoin;
    }

    setting["activeCoin_Raido"] = coinName;
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting(setting);
  }

  _findCoinByName(props, name) {
    for (let i = 0; i < props.coins.length; i++) {
      let coin = props.coins[i];
      if (coin.backingCoin.toUpperCase() === name) return coin;
    }

    return props.coins[0];
  }

  _findCoinBySymbol(props, name) {
    for (let i = 0; i < props.coins.length; i++) {
      let coin = props.coins[i];
      if (coin.symbol.toUpperCase() === name) return coin;
    }

    return null;
  }

  changeAction(type) {
    let activeCoin = this._getActiveCoin(this.props, {
      action: type
    });

    this.setState({
      action: type,
      activeCoin: activeCoin
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting({
      ["rudexActionRaido"]: type
    });
  }

  render() {
    let {
      coins,
      account
    } = this.props;
    let {
      activeCoin,
      action
    } = this.state;

    if (!coins.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], null);
    }

    let filteredCoins = coins.filter(a => {
      if (!a || !a.symbol) {
        return false;
      } else {
        return action === "deposit" ? a.depositAllowed : a.withdrawalAllowed;
      }
    });
    let coinOptions = filteredCoins.map(coin => {
      let option = action === "deposit" ? coin.backingCoin.toUpperCase() : coin.symbol;
      let name = option.replace("RUDEX.", "");
      let prefix = name === "PPY" ? "" : "RUDEX.";
      return {
        value: option,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          replaceNoneToBts: false,
          maxWidth: 20,
          name: prefix + name
        }), option.replace("RUDEX.", ""))
      };
    }).filter(a => {
      return a !== null;
    });
    let coin = filteredCoins.filter(coin => {
      return action === "deposit" ? coin.backingCoin.toUpperCase() === activeCoin : coin.symbol === activeCoin;
    })[0];
    if (!coin) coin = filteredCoins[0];
    let isDeposit = this.state.action === "deposit";
    let supportUrl = "https://rudex.freshdesk.com";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block no-margin vertical medium-horizontal no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        minHeight: "2rem"
      },
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "gateway.rudex.buy_crypto.choose_" + action
    }), ":", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onChange: this.onSelectCoin.bind(this),
      clearable: false,
      searchable: false,
      value: activeCoin,
      options: coinOptions
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "medium-6 medium-offset-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        minHeight: "2rem"
      },
      className: "left-label"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: 15
      }
    }))), !coin ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RaidoDepositRequest__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: `${coin.symbol}`,
      gateway: "rudex",
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
      setActiveRaidoCoin: m => this._setActiveRaidoCoin(m)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "gateway.rudex.support_block"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: supportUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "external-link"
    }, supportUrl))), coin && coin.symbol ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__.TransactionWrapper, {
      asset: coin.symbol,
      fromAccount: isDeposit ? coin.issuerId : this.props.account.get("id"),
      to: isDeposit ? this.props.account.get("id") : coin.issuerId
    }, ({
      asset,
      to,
      fromAccount
    }) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__.RecentTransactions, {
        accountsList: immutable__WEBPACK_IMPORTED_MODULE_7___default().List([this.props.account.get("id")]),
        limit: 10,
        compactView: true,
        fullHeight: true,
        filter: "transfer",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "gateway.recent_" + this.state.action
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
    }) : null));
  }

}

RaidoFinance.defaultProps = {
  coins: [{
    name: "BTC",
    description: "Bitcoin - BTC",
    backingCoin: "BTC",
    symbol: "RUDEX.BTC",
    depositAllowed: true,
    //"withdrawalAllowed": true,
    issuer: "rudex-bitcoin",
    issuerId: "1.2.955",
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
    issuerId: "1.2.956",
    //"minAmount": 500000,
    confirmations: {
      type: "blocks",
      value: 30
    }
  }
  /* {
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
   }*/
  ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(RaidoFinance, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
  },

  getProps() {
    return {
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings
    };
  }

}));

/***/ }),

/***/ 2916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);


class RaidoPaymentMethod extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
  }

  render() {
    let {
      title,
      payment_id
    } = this.props;
    let classNname = "";
    if (this.props.active.toLowerCase() == this.props.payment_id.toLowerCase()) classNname = "active";else classNname = "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ant-col-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "btn btn-sm btn-radio" + " " + classNname
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      name: "paymentmethod-" + payment_id,
      type: "radio",
      onClick: this.props.onClick()
    }), title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${""}images/raido-payment-` + payment_id + ".png"
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RaidoPaymentMethod);

/***/ }),

/***/ 2832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2118);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2734);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2085);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(607);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _DecimalChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2086);











class AssetSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    // asset id
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    scroll_length: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)
  };

  shouldComponentUpdate(np) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].are_equal_shallow(np.assets, this.props.assets) || np.value !== this.props.value || np.scroll_length !== this.props.scroll_length;
  }

  render() {
    if (!this.props.assets.length) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      entries: this.props.assets.map(a => a && a.get("symbol")).filter(a => !!a),
      values: this.props.assets.reduce((map, a) => {
        if (a && a.get("symbol")) map[a.get("symbol")] = a;
        return map;
      }, {}),
      singleEntry: this.props.assets[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
        asset: this.props.assets[0].get("id"),
        amount: 0,
        hide_amount: true
      }) : null,
      value: this.props.value,
      onChange: this.props.onChange,
      scroll_length: this.props.scroll_length
    });
  }

}

AssetSelector = (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(AssetSelector, {
  asList: true
});

class AmountSelector extends _DecimalChecker__WEBPACK_IMPORTED_MODULE_8__.DecimalChecker {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    // a translation key for the label
    assets: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),
    amount: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().any),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    error: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    scroll_length: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)
  };
  static defaultProps = {
    disabled: false,
    tabIndex: 0
  };

  componentDidMount() {
    this.onAssetChange(this.props.asset);
  }

  formatAmount(v) {
    /*// TODO: use asset's precision to format the number*/
    if (!v) v = "";
    if (typeof v === "number") v = v.toString();
    let value = v.trim().replace(/,/g, "");
    return value;
  }

  _onChange(e) {
    if (this.props.onChange) this.props.onChange({
      amount: this.getNumericEventValue(e),
      asset: this.props.asset
    });
  }

  onAssetChange(selected_asset) {
    if (this.props.onChange) this.props.onChange({
      amount: this.props.amount,
      asset: selected_asset
    });
  }

  render() {
    //console.log("Calling AmountSelector: " + this.props.label + this.props.asset + this.props.assets + this.props.amount + this.props.placeholder + this.props.error);
    let value = this.props.error ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(this.props.error) : this.formatAmount(this.props.amount);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "amount-selector",
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "right-label"
    }, this.props.display_balance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "left-label",
      component: "label",
      content: this.props.label
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      disabled: this.props.disabled,
      type: "text",
      value: value || "",
      placeholder: this.props.placeholder,
      onChange: this._onChange.bind(this),
      tabIndex: this.props.tabIndex,
      onPaste: this.props.onPaste || this.onPaste.bind(this),
      onKeyPress: this.onKeyPress.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, this.props.isPrice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropdown-wrapper inactive"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.props.asset.get("symbol"), "/", this.props.base)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetSelector, {
      ref: this.props.refCallback,
      value: this.props.asset.get("symbol"),
      assets: immutable__WEBPACK_IMPORTED_MODULE_4___default().List(this.props.assets),
      onChange: this.onAssetChange.bind(this),
      scroll_length: this.props.scroll_length
    }))));
  }

}

AmountSelector = (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(AmountSelector);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountSelector);

/***/ }),

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2702);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  };
  static defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      imgError: false
    };
  }

  shouldComponentUpdate(np, ns) {
    return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
  }

  _onError(imgName) {
    if (!this.state.imgError) {
      if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "asset-symbols/unknown.png";else this.refs[imgName.toLowerCase()].remove();
      this.setState({
        imgError: true
      });
    }
  }

  render() {
    let {
      asset
    } = this.props;

    function getImageWrapper(asset) {
      if (asset === null) return "unknown";
      let symbol = asset.get("symbol");
      return (0,branding__WEBPACK_IMPORTED_MODULE_2__.getImageName)(symbol);
    }

    const imgName = getImageWrapper(asset);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      ref: imgName.toLowerCase(),
      className: "column-hide-small",
      onError: this._onError.bind(this, imgName),
      style: {
        maxWidth: this.props.maxWidth,
        marginRight: 5,
        marginTop: "-3px"
      },
      src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
    });
  }

}

AssetImage = (0,_Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);
class AssetImageWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetImage, _extends({}, this.props, {
      asset: this.props.name
    }));
  }

}

/***/ }),

/***/ 2734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    scroll_length: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  };
  static defaultProps = {
    scroll_length: 9
  };

  constructor(props) {
    const scroll_length = props.scroll_length;
    super(props);
    this.state = {
      active: false
    };
    this.listener = false;
    this.onBodyClick = this.onBodyClick.bind(this);
  }

  componentDidMount() {
    this._setListener();
  }

  shouldComponentUpdate(np, ns) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(np.entries, this.props.entries) || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(ns, this.state) || np.value !== this.props.value;
  }

  _setListener(props = this.props) {
    if (props.entries.length > 1 && !this.listener) {
      this.listener = true;
      document.body.addEventListener("click", this.onBodyClick, {
        capture: false,
        passive: true
      });
    }
  }

  _removeListener() {
    document.body.removeEventListener("click", this.onBodyClick);
    this.listener = false;
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.entries.length === 1) {
      this._removeListener();
    } else if (np.entries.length > 1) {
      this._setListener(np);
    }
  }

  componentWillUnmount() {
    this._removeListener();
  }

  onBodyClick(e) {
    let el = e.target;
    let insideActionSheet = false;

    do {
      if (el.classList && el.classList.contains("dropdown") && el.id === this.props.id) {
        insideActionSheet = true;
        break;
      }
    } while (el = el.parentNode);

    if (!insideActionSheet) {
      this.setState({
        active: false
      });
    } else {
      e.stopPropagation();
    }
  }

  onChange(value, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onChange(value);
    this.setState({
      active: false
    });
  }

  _toggleDropdown() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const {
      entries,
      value
    } = this.props;
    let {
      active
    } = this.state;
    if (entries.length === 0) return null;

    if (entries.length == 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dropdown-wrapper inactive" + (this.props.upperCase ? " upper-case" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.props.singleEntry ? this.props.singleEntry : entries[0]));
    } else {
      let options = entries.map(value => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: this.props.upperCase ? "upper-case" : "",
          key: value,
          onClick: this.onChange.bind(this, this.props.values[value])
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: this._toggleDropdown.bind(this),
        className: "dropdown-wrapper" + (active ? " active" : "") + (this.props.upperCase ? " upper-case" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          paddingRight: 15
        }
      }, value ? value : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "hidden"
      }, "A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "dropdown",
        style: {
          overflow: entries.length > this.props.scroll_length ? "auto" : "hidden"
        }
      }, options));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(431);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




class DisableCopyText extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    disableCopy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    replaceCopyText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  };

  constructor(props) {
    super(props);
    this._handleCopy = this._handleCopy.bind(this);
  }

  componentDidMount() {
    if (this.childRef) this.node = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.childRef);

    if (this.node && this.node.addEventListener) {
      this.node.addEventListener("copy", this._handleCopy);
    }
  }

  componentWillUnmount() {
    if (this.node && this.node.removeEventListener) this.node.removeEventListener("copy", this._handleCopy);
  }

  _handleCopy(evt) {
    if (this.props.disableCopy !== false) {
      if (this.props.replaceCopyText) {
        evt.clipboardData.setData("text/plain", this.props.replaceCopyText);
      }

      evt.preventDefault();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      ref: ref => this.childRef = ref
    }, this.props.children);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisableCopyText);

/***/ }),

/***/ 2910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCoinList": () => (/* binding */ fetchCoinList),
/* harmony export */   "requestDepositAddress": () => (/* binding */ requestDepositAddress),
/* harmony export */   "validateAddress": () => (/* binding */ validateAddress),
/* harmony export */   "WithdrawAddresses": () => (/* binding */ WithdrawAddresses)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(663);


const rudexStorage = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])("");
function fetchCoinList(url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs.BASE + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs.COINS_LIST) {
  return fetch(url, {
    method: "post"
  }).then(reply => reply.json().then(result => {
    return result;
  })).catch(err => {
    console.log("error fetching rudex list of coins", err, url);
  });
}
function requestDepositAddress({
  walletType,
  inputCoinType,
  outputCoinType,
  outputAddress,
  //url = rudexAPIs.BASE,
  url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs,
  stateCallback
}) {
  let body = {
    walletType,
    inputCoinType,
    outputCoinType,
    outputAddress
  };
  let body_string = JSON.stringify(body);

  if (walletType === "bsc-tokens") {
    url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.bep20rudexAPIs;
  } //fetch(url + rudexAPIs.NEW_DEPOSIT_ADDRESS, {


  fetch(url.BASE + url.NEW_DEPOSIT_ADDRESS, {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    body: body_string
  }).then(reply => {
    reply.json().then(json => {
      // console.log( "reply: ", json )
      let address = {
        address: json.inputAddress || "unknown",
        memo: json.inputMemo,
        error: json.error || null
      };
      if (stateCallback) stateCallback(address);
    }, error => {
      // console.log( "error: ",error  );
      if (stateCallback) stateCallback({
        address: "unknown",
        memo: null
      });
    });
  }, error => {
    // console.log( "error: ",error  );
    if (stateCallback) stateCallback({
      address: "unknown",
      memo: null
    });
  }).catch(err => {
    console.log("fetch error:", err);
  });
}
function validateAddress({
  //url = rudexAPIs.BASE,
  url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs,
  walletType,
  newAddress
}) {
  if (walletType === "bsc-tokens") {
    url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.bep20rudexAPIs;
  }

  if (!newAddress) return new Promise(res => res());
  return fetch(url.BASE + "/wallets/" + walletType + "/check-address", {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      address: newAddress
    })
  }).then(reply => reply.json().then(json => json)).catch(err => {
    console.log("validate error:", err);
  });
}

function hasWithdrawalAddress(wallet) {
  return rudexStorage.has(`history_address_${wallet}`);
}

function setWithdrawalAddresses({
  wallet,
  addresses
}) {
  rudexStorage.set(`history_address_${wallet}`, addresses);
}

function getWithdrawalAddresses(wallet) {
  return rudexStorage.get(`history_address_${wallet}`, []);
}

function setLastWithdrawalAddress({
  wallet,
  address
}) {
  rudexStorage.set(`history_address_last_${wallet}`, address);
}

function getLastWithdrawalAddress(wallet) {
  return rudexStorage.get(`history_address_last_${wallet}`, "");
}

const WithdrawAddresses = {
  has: hasWithdrawalAddress,
  set: setWithdrawalAddresses,
  get: getWithdrawalAddresses,
  setLast: setLastWithdrawalAddress,
  getLast: getLastWithdrawalAddress
};

/***/ }),

/***/ 2913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(428));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(1451));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _require = __webpack_require__(2913),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy4yYjc4ZDM4MzMyY2I1NzgzYzNjNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUZBO0FBTUE7O0FBOUJBOztBQWlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUkE7QUFVQTs7QUFFQTtBQUNBO0FBdUJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFJQTtBQUxBO0FBWUE7QUFBQTtBQUlBO0FBSUE7QUFMQTtBQWFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQWNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQUNBO0FBR0E7QUFMQTtBQVVBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBY0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFJQTtBQU5BO0FBV0E7QUFBQTtBQU1BO0FBQUE7QUFySUE7QUE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFJQTtBQUxBO0FBWUE7QUFBQTtBQVdBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQUNBO0FBR0E7QUFMQTtBQVVBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBNURBO0FBMEVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQW9EQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFhQTs7QUEvZ0JBOztBQWtoQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQVBBOztBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBc0NBOztBQTNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6akJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOztBQXpCQTs7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFLQTs7QUEvQ0E7O0FBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTs7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUtBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQWFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBREE7QUFPQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBY0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFNQTtBQUFBO0FBSUE7QUFEQTtBQU1BO0FBREE7QUFNQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFhQTtBQUNBO0FBS0E7QUFQQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQWhCQTtBQThCQTtBQU9BOztBQXBVQTs7QUF1VUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTs7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUlBO0FBR0E7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBV0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBR0E7QUFKQTtBQVVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFTQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQURBO0FBU0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBR0E7QUFHQTtBQVBBO0FBZ0JBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQVZBO0FBY0E7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQVZBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBT0E7QUFEQTtBQWFBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFRQTtBQURBO0FBV0E7QUFDQTtBQUZBO0FBT0E7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBYkE7QUFlQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFHQTtBQUpBO0FBVUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBWUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFEQTtBQVNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUdBO0FBR0E7QUFQQTtBQWtCQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUErQkE7QUFDQTs7QUFudEJBOztBQXN0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBZkE7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzl2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7O0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBeEJBOztBQTJCQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BOztBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFTQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBYUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBa0JBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBaUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUtBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUdBOztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUF2QkE7QUEwQkE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7OztBQUdBO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQVZBO0FBa0JBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBYUE7QUFoQkE7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFTQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFWQTtBQXVCQTtBQU1BO0FBQ0E7QUFSQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFXQTs7QUFqNkJBOztBQW82QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3o3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUEzQkE7QUFqQkE7QUFnREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFNQTs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFEQTtBQU1BOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBU0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTs7QUFFQTtBQUVBOztBQUNBO0FBSUE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBMERBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFTQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFHQTtBQUdBO0FBUEE7QUFnQkE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBWEE7QUFrQkE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBWEE7QUFnQkE7QUFEQTtBQVFBO0FBREE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBR0E7QUFKQTtBQVVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFTQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFHQTtBQUdBO0FBUEE7QUFlQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBOztBQXowQkE7O0FBNDBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDLzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQWFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBc0NBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFsQkE7QUFzQkE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBYUE7QUFDQTtBQUtBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFoQkE7QUE4QkE7QUFPQTs7QUFyVEE7O0FBd1RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBREE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFSQTs7Ozs7Ozs7Ozs7O0FDallBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFEQTtBQVVBOztBQW5DQTs7QUFzQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBOztBQXpDQTs7QUE0Q0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWUE7O0FBL0ZBOztBQWlHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQVlBOztBQWhFQTs7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFhQTtBQUNBOztBQTVKQTs7QUErSkE7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBOztBQTVDQTs7QUErQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnRCYWxhbmNlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXkuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvRGVwb3NpdFJlcXVlc3QuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb0ZpbmFuY2UuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb1BheW1lbnRNZXRob2QuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9GbG9hdGluZ0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvRGlzYWJsZUNvcHlUZXh0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAgR2l2ZW4gYSBiYWxhbmNlX29iamVjdCwgZGlzcGxheXMgaXQgaW4gYSBwcmV0dHkgd2F5XHJcbiAqXHJcbiAqICBFeHBlY3RzIG9uZSBwcm9wZXJ0eSwgJ2JhbGFuY2UnIHdoaWNoIHNob3VsZCBiZSBhIGJhbGFuY2Vfb2JqZWN0IGlkXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudEJhbGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGxldCBiYWxhbmNlX2lkID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0X2lkXSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxhbmNlX2lkKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgMCZuYnNwOzxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRCYWxhbmNlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IHt1cGRhdGVHYXRld2F5QmFja2Vyc30gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG4vL2ltcG9ydCBPcGVubGVkZ2VyR2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L09wZW5sZWRnZXJHYXRld2F5XCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsXCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvT3BlbkxlZGdlckZpYXRUcmFuc2FjdGlvbkhpc3RvcnlcIjtcbi8vaW1wb3J0IEJsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ibG9ja3RyYWRlcy9CbG9ja1RyYWRlc0JyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG4vL2ltcG9ydCBDaXRhZGVsQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9jaXRhZGVsL0NpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5XCI7XG5pbXBvcnQgUmFpZG9GaW5hbmNlIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvcmFpZG8vUmFpZG9GaW5hbmNlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRGVwb3NpdE1vZGFsIGZyb20gXCIuLi9Nb2RhbC9EZXBvc2l0TW9kYWxcIjtcbmltcG9ydCBXaXRoZHJhd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9XaXRoZHJhd01vZGFsTmV3XCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuXG5jbGFzcyBBY2NvdW50RGVwb3NpdFdpdGhkcmF3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjb250YWluZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcInJ1ZGV4U2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBydWRleFNlcnZpY2VCRVAyMDogcHJvcHMudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICBcInJ1ZGV4U2VydmljZUJFUDIwXCIsXG4gICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2VydmljZVwiLCAwKSxcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlSW5mb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2VJbmZvcm1lZF9CdXlDcnlwdG86IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuc2VydmljZXNEb3duICE9PSB0aGlzLnByb3BzLnNlcnZpY2VzRG93biB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja1RyYWRlc0JhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmxvY2tUcmFkZXNCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5vcGVuTGVkZ2VyQmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vcGVuTGVkZ2VyQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY2l0YWRlbEJhY2tlZENvaW5zLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2l0YWRlbEJhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUucnVkZXhTZXJ2aWNlICE9PSB0aGlzLnN0YXRlLnJ1ZGV4U2VydmljZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnJ1ZGV4U2VydmljZUJFUDIwICE9PSB0aGlzLnN0YXRlLnJ1ZGV4U2VydmljZUJFUDIwIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYWN0aXZlU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuUnVkZXhOb3RpY2VJbmZvcm1lZCAhPT0gdGhpcy5zdGF0ZS5SdWRleE5vdGljZUluZm9ybWVkIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuUnVkZXhOb3RpY2VJbmZvcm1lZF9CdXlDcnlwdG8gIT09XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZUluZm9ybWVkX0J1eUNyeXB0byB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRMb2NhbGUgIT09IHRoaXMucHJvcHMuY3VycmVudExvY2FsZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFjY291bnRVdGlscy5nZXRGaW5hbEZlZUFzc2V0KHRoaXMucHJvcHMuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPTFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2VJbmZvcm1lZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBSdWRleE5vdGljZUluZm9ybWVkOiAhdGhpcy5zdGF0ZS5SdWRleE5vdGljZUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2VJbmZvcm1lZF9CdXlDcnlwdG8oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUnVkZXhOb3RpY2VJbmZvcm1lZF9CdXlDcnlwdG86ICF0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgLlJ1ZGV4Tm90aWNlSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVJ1REVYU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlUnVERVhfQkVQMjBTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2VCRVAyMDogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlQkVQMjA6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TZXRTZXJ2aWNlKGUpIHtcbiAgICAgICAgLy9sZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlcnZpY2VzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNlcnZpY2U6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNlcnZpY2VzKHJ1ZGV4R2F0ZXdheUNvaW5zLCBydWRleEdhdGV3YXlDb2luc0JFUDIwKSB7XG4gICAgICAgIC8vbGV0IHNlcnZpY2VzID0gW1wiT3BlbmxlZGdlciAoT1BFTi5YKVwiLCBcIkJsb2NrVHJhZGVzIChUUkFERS5YKVwiLCBcIlRyYW5zd2lzZXJcIiwgXCJCaXRLYXBpdGFsXCJdO1xuICAgICAgICBsZXQgc2VyTGlzdCA9IFtdO1xuICAgICAgICBsZXQge2FjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZSxcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZUJFUDIwLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2VJbmZvcm1lZCxcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBhZ3JlZW1lbnRfcnUgPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDctY9C+0LPQu9Cw0YjQtdC90LjQtS3QvtCxLdC+0LrQsNC30LDQvdC40Lgt0YPRgdC70YPQsy3RiNC70Y7Qt9CwXCI7XG4gICAgICAgIGxldCBhZ3JlZW1lbnRfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDUtZ2F0ZXdheS1zZXJ2aWNlLWFncmVlbWVudFwiO1xuXG4gICAgICAgIHNlckxpc3QucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL25hbWU6IFwiUnVERVggKFJVREVYLlgpXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDT0lOUyAoTmF0aXZlIENoYWlucylcIixcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBcIlJVREVYXCIsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJ1REVYU2VydmljZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVkZXhTZXJ2aWNlID09PSBcImZpYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p4emRtY0tJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNCNGJXeHVjenBqWXowaWFIUjBjRG92TDJOeVpXRjBhWFpsWTI5dGJXOXVjeTV2Y21jdmJuTWpJZ29nSUNCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaUNpQWdJSGh0Ykc1ek9uTjJaejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpQ2lBZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdkbVZ5YzJsdmJqMGlNUzR4SWdvZ0lDQnBaRDBpYzNabk1UQXpNRFlpQ2lBZ0lIWnBaWGRDYjNnOUlqQWdNQ0ExTURBdU1EQXdNREVnTVRZeUxqZ3hOVGswSWdvZ0lDQStDaUFnUEdSbFpuTUtJQ0FnSUNCcFpEMGlaR1ZtY3pFd016QTRJajRLSUNBZ0lEeGpiR2x3VUdGMGFBb2dJQ0FnSUNBZ2FXUTlJbU5zYVhCUVlYUm9NVEF5TnpFaUNpQWdJQ0FnSUNCamJHbHdVR0YwYUZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0FnSUdsa1BTSndZWFJvTVRBeU56TWlDaUFnSUNBZ0lDQWdJR1E5SW0wZ05ERXpMamMwTWl3NU1DNDBNelVnWXlBdE1DNHdOVGNzTFRRdU5EazBJRFF1TURBMUxDMDNMakF3TWlBM0xqQTJOU3d0T0M0ME9UTWdNeTR4TkRRc0xURXVOVE1nTkM0eUxDMHlMalV4TVNBMExqRTRPQ3d0TXk0NE56a2dMVEF1TURJMExDMHlMakE1TkNBdE1pNDFNRGdzTFRNdU1ERTRJQzAwTGpnek15d3RNeTR3TlRRZ0xUUXVNRFUyTEMwd0xqQTJNeUF0Tmk0ME1UUXNNUzR3T1RVZ0xUZ3VNamc1TERFdU9UY3hJR3dnTFRFdU5EWXhMQzAyTGpnek55QmpJREV1T0RneExDMHdMamcyTnlBMUxqTTJOQ3d0TVM0Mk1qTWdPQzQ1TnpZc0xURXVOalUySURndU5EYzRMREFnTVRRdU1ESTFMRFF1TVRnMUlERTBMakExTlN3eE1DNDJOelFnTUM0d016TXNPQzR5TXpVZ0xURXhMak01TVN3NExqWTVNU0F0TVRFdU16RXpMREV5TGpNM01pQXdMakF5Tnl3eExqRXhOaUF4TGpBNU1pd3lMak13TnlBekxqUXlOaXd5TGpZeElERXVNVFUxTERBdU1UVXpJRFF1TXpRMExEQXVNamNnTnk0NU5Ua3NMVEV1TXprMUlHd2dNUzQwTVRrc05pNDJNVFVnWXlBdE1TNDVORFFzTUM0M01EZ2dMVFF1TkRRekxERXVNemcySUMwM0xqVTFOQ3d4TGpNNE5pQXROeTQ1T0N3d0lDMHhNeTQxT1RNc0xUUXVNalF5SUMweE15NDJNemdzTFRFd0xqTXhOQ0J0SURNMExqZ3lOeXc1TGpjME5DQmpJQzB4TGpVME9Dd3dJQzB5TGpnMU15d3RNQzQ1TURNZ0xUTXVORE0xTEMweUxqSTRPU0JzSUMweE1pNHhNVEVzTFRJNExqa3hOeUE0TGpRM01pd3dJREV1TmpnMkxEUXVOalU1SURFd0xqTTFNeXd3SURBdU9UYzRMQzAwTGpZMU9TQTNMalEyTnl3d0lDMDJMalV4Tml3ek1TNHlNRFlnTFRZdU9EazBMREFnYlNBeExqRTROU3d0T0M0ME15QXlMalEwTlN3dE1URXVOekU0SUMwMkxqWTVOaXd3SURRdU1qVXhMREV4TGpjeE9DQnRJQzAwTmk0eU9EUXNPQzQwTXlBdE5pNDJOemdzTFRNeExqSXdOaUE0TGpBM015d3dJRFl1TmpjMUxETXhMakl3TmlBdE9DNHdOeXd3SUcwZ0xURXhMamswTXl3d0lDMDRMalF3TXl3dE1qRXVNalFnTFRNdU16azVMREU0TGpBMklHTWdMVEF1TXprNUxESXVNREUySUMweExqazNOQ3d6TGpFNElDMHpMamN5TXl3ekxqRTRJR3dnTFRFekxqY3pOeXd3SUMwd0xqRTVNaXd0TUM0NU1EWWdZeUF5TGpneUxDMHdMall4TWlBMkxqQXlOQ3d0TVM0MU9Ua2dOeTQ1TmpVc0xUSXVOalUxSURFdU1UZzRMQzB3TGpZME5TQXhMalV5Tnl3dE1TNHlNRGtnTVM0NU1UY3NMVEl1TnpReUlHd2dOaTQwTXpnc0xUSTBMamt3TXlBNExqVXpNaXd3SURFekxqQTRMRE14TGpJd05pQXRPQzQwTnpnc01DSWdMejRLSUNBZ0lEd3ZZMnhwY0ZCaGRHZytDaUFnSUNBOGJHbHVaV0Z5UjNKaFpHbGxiblFLSUNBZ0lDQWdJR2xrUFNKc2FXNWxZWEpIY21Ga2FXVnVkREV3TWpjM0lnb2dJQ0FnSUNBZ2MzQnlaV0ZrVFdWMGFHOWtQU0p3WVdRaUNpQWdJQ0FnSUNCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RnMExqRTVPVFVzTXpFdU1EQTRPQ3d6TVM0d01EZzRMQzA0TkM0eE9UazFMREU1TGpVeE1pd3RNamN1TkRFNU1pa2lDaUFnSUNBZ0lDQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lLSUNBZ0lDQWdJSGt5UFNJd0lnb2dJQ0FnSUNBZ2VESTlJakVpQ2lBZ0lDQWdJQ0I1TVQwaU1DSUtJQ0FnSUNBZ0lIZ3hQU0l3SWo0S0lDQWdJQ0FnUEhOMGIzQUtJQ0FnSUNBZ0lDQWdhV1E5SW5OMGIzQXhNREkzT1NJS0lDQWdJQ0FnSUNBZ2IyWm1jMlYwUFNJd0lnb2dJQ0FnSUNBZ0lDQnpkSGxzWlQwaWMzUnZjQzF2Y0dGamFYUjVPakU3YzNSdmNDMWpiMnh2Y2pvak1qSXlNelUzSWlBdlBnb2dJQ0FnSUNBOGMzUnZjQW9nSUNBZ0lDQWdJQ0JwWkQwaWMzUnZjREV3TWpneElnb2dJQ0FnSUNBZ0lDQnZabVp6WlhROUlqRWlDaUFnSUNBZ0lDQWdJSE4wZVd4bFBTSnpkRzl3TFc5d1lXTnBkSGs2TVR0emRHOXdMV052Ykc5eU9pTXlOVFJoWVRVaUlDOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThiV1YwWVdSaGRHRUtJQ0FnSUNCcFpEMGliV1YwWVdSaGRHRXhNRE14TVNJK0NpQWdJQ0E4Y21SbU9sSkVSajRLSUNBZ0lDQWdQR05qT2xkdmNtc0tJQ0FnSUNBZ0lDQWdjbVJtT21GaWIzVjBQU0lpUGdvZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2YzNabkszaHRiRHd2WkdNNlptOXliV0YwUGdvZ0lDQWdJQ0FnSUR4a1l6cDBlWEJsQ2lBZ0lDQWdJQ0FnSUNBZ2NtUm1PbkpsYzI5MWNtTmxQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012WkdOdGFYUjVjR1V2VTNScGJHeEpiV0ZuWlNJZ0x6NEtJQ0FnSUNBZ0lDQThaR002ZEdsMGJHVStQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHY0tJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNek16TGpjd01UVTNMQzAxTXpZdU5ESTBNekVwSWdvZ0lDQWdJR2xrUFNKc1lYbGxjakVpUGdvZ0lDQWdQR2NLSUNBZ0lDQWdJR2xrUFNKbk1UQXlOamNpQ2lBZ0lDQWdJQ0IwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2cwTGprNE5EWTROVFlzTUN3d0xDMDBMams0TkRZNE5UWXNMVEUwTnpBdU1URTROU3d4TURNNUxqWXlOalFwSWo0S0lDQWdJQ0FnUEdjS0lDQWdJQ0FnSUNBZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQlFZWFJvTVRBeU56RXBJZ29nSUNBZ0lDQWdJQ0JwWkQwaVp6RXdNalk1SWo0S0lDQWdJQ0FnSUNBOFp3b2dJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RNMU1TNDJNVEVzT1RZdU9EazJLU0lLSUNBZ0lDQWdJQ0FnSUNCcFpEMGlaekV3TWpjMUlqNEtJQ0FnSUNBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lDQWdJQ0JwWkQwaWNHRjBhREV3TWpneklnb2dJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NmRYSnNLQ05zYVc1bFlYSkhjbUZrYVdWdWRERXdNamMzS1R0bWFXeHNMVzl3WVdOcGRIazZNVHRtYVd4c0xYSjFiR1U2Ym05dWVtVnlienR6ZEhKdmEyVTZibTl1WlNJS0lDQWdJQ0FnSUNBZ0lDQWdJR1E5SWswZ01Dd3dJRGs0TGpRek55d3pOaTR5TlRJZ01USXdMamd6TVN3dE1qUXVOVFUzSURJeUxqTTVOU3d0TmpBdU9EQTVJaUF2UGdvZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ1BDOW5QZ29nSUNBZ1BDOW5QZ29nSUR3dlp6NEtQQzl6ZG1jK0NnPT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMTBweCAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0I0Yld4dWN6cGpZejBpYUhSMGNEb3ZMMk55WldGMGFYWmxZMjl0Ylc5dWN5NXZjbWN2Ym5Naklnb2dJQ0I0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pQ2lBZ0lIaHRiRzV6T25OMlp6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUFnSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2RtbGxkMEp2ZUQwaU1DQXdJRFkwT1M0NU9UazVPQ0EwTURVdU5qTXlNallpQ2lBZ0lIWmxjbk5wYjI0OUlqRXVNU0lLSUNBZ2FXUTlJbk4yWnpnNU5TSStDaUFnUEcxbGRHRmtZWFJoQ2lBZ0lDQWdhV1E5SW0xbGRHRmtZWFJoT0RrNUlqNEtJQ0FnSUR4eVpHWTZVa1JHUGdvZ0lDQWdJQ0E4WTJNNlYyOXlhd29nSUNBZ0lDQWdJQ0J5WkdZNllXSnZkWFE5SWlJK0NpQWdJQ0FnSUNBZ1BHUmpPbVp2Y20xaGRENXBiV0ZuWlM5emRtY3JlRzFzUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ1BHUmpPblI1Y0dVS0lDQWdJQ0FnSUNBZ0lDQnlaR1k2Y21WemIzVnlZMlU5SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5a1kyMXBkSGx3WlM5VGRHbHNiRWx0WVdkbElpQXZQZ29nSUNBZ0lDQWdJRHhrWXpwMGFYUnNaVDVCYzNObGRDQXhQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6ZzNPU0krQ2lBZ0lDQThjM1I1YkdVS0lDQWdJQ0FnSUhSNWNHVTlJblJsZUhRdlkzTnpJZ29nSUNBZ0lDQWdhV1E5SW5OMGVXeGxPRGMzSWo0dVlYdHZjR0ZqYVhSNU9qQTdmUzVpZTJacGJHdzZJMlptWmp0OUxtTjdabWxzYkRvalptWTFaakF3TzMwdVpIdG1hV3hzT2lObFlqQXdNV0k3ZlM1bGUyWnBiR3c2STJZM09XVXhZanQ5UEM5emRIbHNaVDRLSUNBOEwyUmxabk0rQ2lBZ1BIUnBkR3hsQ2lBZ0lDQWdhV1E5SW5ScGRHeGxPRGd4SWo1QmMzTmxkQ0F4UEM5MGFYUnNaVDRLSUNBOGNtVmpkQW9nSUNBZ0lITjBlV3hsUFNKa2FYTndiR0Y1T21sdWJHbHVaVHRtYVd4c09pTm1aalZtTURBN2MzUnliMnRsTFhkcFpIUm9PalV1TkRrek9ERXhOakVpQ2lBZ0lDQWdZMnhoYzNNOUltTWlDaUFnSUNBZ2VEMGlNakk1TGpnek1qWXpJZ29nSUNBZ0lIazlJalEzTGpJNU56Y3pOeUlLSUNBZ0lDQjNhV1IwYUQwaU1Ua3dMalF4TlRVeElnb2dJQ0FnSUdobGFXZG9kRDBpTXpFeExqQXdORGNpQ2lBZ0lDQWdhV1E5SW5KbFkzUTRPRGNpSUM4K0NpQWdQSEJoZEdnS0lDQWdJQ0J6ZEhsc1pUMGlabWxzYkRvalpXSXdNREZpTzNOMGNtOXJaUzEzYVdSMGFEbzFMalE1TXpneE1UWXhJZ29nSUNBZ0lHTnNZWE56UFNKa0lnb2dJQ0FnSUdROUltMGdNalE1TGpRME5UVTBMREl3TWk0NE1qYzFOaUJoSURFNU55NDBORGMxT1N3eE9UY3VORFEzTlRrZ01DQXdJREVnTnpVdU5UTTVPVEVzTFRFMU5TNDBOelE0TmpjZ01UazNMamMzTnpJeUxERTVOeTQzTnpjeU1pQXdJREVnTUNBd0xETXhNUzR3TURRMk56Y2dNVGszTGpRME56VTVMREU1Tnk0ME5EYzFPU0F3SURBZ01TQXROelV1TlRNNU9URXNMVEUxTlM0MU1qazRNU0I2SWdvZ0lDQWdJR2xrUFNKd1lYUm9PRGc1SWlBdlBnb2dJRHh3WVhSb0NpQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyWTNPV1V4WWp0emRISnZhMlV0ZDJsa2RHZzZOUzQwT1RNNE1URTJNU0lLSUNBZ0lDQmpiR0Z6Y3owaVpTSUtJQ0FnSUNCa1BTSnRJRFl5Tmk0eE1ERXpMRE15TlM0ek9UUTFJSFlnTFRZdU16Y3lPRElnYUNBeUxqYzBOamtnZGlBdE1TNHpNVGcxTWlCb0lDMDJMalV6TnpZMElIWWdNUzR6TVRnMU1pQm9JREl1TlRneU1TQjJJRFl1TXpjeU9ESWdlaUJ0SURFeUxqWTVNRGNzTUNCMklDMDNMalk1TVRNMElHZ2dMVEV1T1RjM056Z2diQ0F0TWk0ek1EYzBMRFV1TkRrek9ERWdMVEl1TXpBM05Dd3ROUzQwT1RNNE1TQm9JQzB4TGprM056YzNJSFlnTnk0Mk9URXpOQ0JvSURFdU5ESTRNemtnZGlBdE5TNDRNak0wTkNCc0lESXVNVFF5TlRrc05DNDVPVGt6TnlCb0lERXVORGd6TXpNZ2JDQXlMakUwTWpVNExDMDBMams1T1RNM0lIWWdOUzQ0TWpNME5DQjZJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3hJaUF2UGdvZ0lEeHdZWFJvQ2lBZ0lDQWdjM1I1YkdVOUltWnBiR3c2STJZM09XVXhZanR6ZEhKdmEyVXRkMmxrZEdnNk5TNDBPVE00TVRFMk1TSUtJQ0FnSUNCamJHRnpjejBpWlNJS0lDQWdJQ0JrUFNKdElEWTBOU3d5TURJdU9ESTNOVFlnWVNBeE9UY3VOemMzTWpJc01UazNMamMzTnpJeUlEQWdNQ0F4SUMwek1qQXVNREUwTlRVc01UVTFMalEzTkRnM0lERTVOeTQzTnpjeU1pd3hPVGN1TnpjM01qSWdNQ0F3SURBZ01Dd3RNekV4TGpBd05EWTNOU0JCSURFNU55NDNOemN5TWl3eE9UY3VOemMzTWpJZ01DQXdJREVnTmpRMUxESXdNaTQzTnpJMk1pQmFJZ29nSUNBZ0lHbGtQU0p3WVhSb09Ea3pJaUF2UGdvOEwzTjJaejRLXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI0MHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXlMakV1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJbk4yWnpFd09UQTRJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJS0NTQjJhV1YzUW05NFBTSXdJREFnTnpVd0lESXdOU0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdOelV3SURJd05Uc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQZ29KTG5OME1IdG1hV3hzT2lNeE1ESTVPRVU3ZlFvSkxuTjBNWHRtYVd4c09pTkdSa0pGTURBN2ZRbzhMM04wZVd4bFBnbzhkR2wwYkdVK2MyVndZVHd2ZEdsMGJHVStDanh3WVhSb0lHbGtQU0p3WVhSb05UWTRPU0lnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVEUyTmk0MkxEWTFMalJvTFRVeExqTmpNQzA0TGpRdE1TMHhOQzR4TFRNdE1UZGpMVE10TkM0ekxURXhMalF0Tmk0MExUSTFMakl0Tmk0MFl5MHhNeTQwTERBdE1qSXVNeXd4TGpJdE1qWXVOaXd6TGpjS0NWTTFOQ3cxTXk0MkxEVTBMRFl4TGpoak1DdzNMalVzTVM0NUxERXlMalFzTlM0M0xERTBMamRqTXk0MExERXVPQ3czTGpFc01pNDRMREV3TGprc01pNDVURGd4TERnd0xqSmpNakl1TWl3eExqVXNNellzTWk0MUxEUXhMallzTXk0eFl6RTNMalVzTVM0NExETXdMak1zTmk0MExETTRMakVzTVRRS0NXTTJMaklzTlM0NUxEa3VPU3d4TXk0MkxERXhMakVzTWpNdU1XTXdMamNzTmk0MExERXVNU3d4TWk0NUxERXNNVGt1TTJNd0xERTJMalV0TVM0MkxESTRMall0TkM0M0xETTJMakpqTFRVdU55d3hOQzR4TFRFNExqVXNNakl1T1Mwek9DNDFMREkyTGpZS0NXTXRPQzR6TERFdU5pMHlNUzR4TERJdU5DMHpPQzR6TERJdU5HTXRNamd1Tnl3d0xUUTRMamd0TVM0M0xUWXdMakV0TlM0eFl5MHhNeTQ1TFRRdU1pMHlNeTB4TWk0NExUSTNMalV0TWpVdU5rTXhMaklzTVRZM0xqRXNNQ3d4TlRVdU1pd3dMREV6T0M0MWFEVXhMak4yTkM0ekNnbGpNQ3c0TGprc01pNDJMREUwTGpZc055NDNMREUzTGpKak5Dd3hMamtzT0M0MExESXVPQ3d4TWk0NExESXVPR2d4T0M0NVl6a3VOaXd3TERFMUxqZ3RNQzQxTERFNExqUXRNUzQxWXpRdU55MHhMamtzTnk0NExUUXVPU3c1TGpNdE9XTXdMamt0TXk0eUxERXVNeTAyTGpVc01TNHlMVGt1T1FvSll6QXRPUzB6TGpNdE1UUXVOUzA1TGprdE1UWXVOV010TWk0MUxUQXVPQzB4TXk0NUxURXVPUzB6TkM0ekxUTXVNbU10TVRZdU5DMHhMakl0TWpjdU9DMHlMak10TXpRdU1pMHpMalJqTFRFMkxqZ3RNeTR4TFRJNExUa3VOaTB6TXk0MkxURTVMalFLQ1VNeUxqY3NPVEV1TlN3d0xqSXNOemd1T1N3d0xqSXNOakpqTUMweE1pNDRMREV1TXkweU15NHhMRFF0TXpBdU9YTTJMamt0TVRNdU5pd3hNaTQ0TFRFM0xqWmpPQzQyTFRZdU1pd3hPUzQzTFRrdU9Dd3pNeTR5TFRFd0xqbGpNVEV1TWkweExESXpMamN0TVM0MUxETTNMak10TVM0MUNnbGpNakV1TlN3d0xETTJMamtzTVM0eUxEUTJMRE11TjJNeU1pNHpMRFlzTXpNdU5Td3lNaTQ0TERNekxqVXNOVEF1TkVNeE5qY3VNU3cxTnk0MUxERTJOaTQ1TERZd0xqa3NNVFkyTGpZc05qVXVOQ0l2UGdvOGNHRjBhQ0JwWkQwaWNHRjBhRFUyT1RNaUlHTnNZWE56UFNKemREQWlJR1E5SWswek9USXVNeXd5TURWV01HZ3hNREl1T0dNeE5DNHhMREFzTWpRdU9Dd3hMakVzTXpJdU1pd3pMalZqTVRZdU9TdzFMak1zTWpndU1pd3hOaTR4TERNMExETXlMalVLQ1dNekxEZ3VOaXcwTGpVc01qRXVOU3cwTGpVc016Z3VPR013TERJd0xqZ3RNUzQzTERNMUxqY3ROU3cwTkM0NFl5MDJMallzTVRndE1qQXVNU3d5T0M0ekxUUXdMallzTXpGakxUSXVOQ3d3TGpRdE1USXVOeXd3TGpndE16QXVPQ3d4TGpGc0xUa3VNaXd3TGpOb0xUTXlMamgyTlROSU16a3lMak42Q2drZ1RUUTBOeTQxTERFd05DNDFhRE0wTGpSak1UQXVPUzB3TGpRc01UY3VOUzB4TGpJc01Ua3VPUzB5TGpWak15NHlMVEV1T0N3MUxqVXROUzQwTERZdU5TMHhNQzQ0WXpBdU9DMDFMak1zTVM0eUxURXdMallzTVMweE5tTXdMVGd1Tnkwd0xqY3RNVFV1TVMweUxqRXRNVGt1TXdvSll5MHlMVFV1T1MwMkxqZ3RPUzQxTFRFMExqSXRNVEF1T0dNdE1TNDFMVEF1TWkwMUxqRXRNQzR6TFRFd0xqY3RNQzR6YUMwek5DNDRWakV3TkM0MWVpSXZQZ284Y0dGMGFDQnBaRDBpY0dGMGFEVTJPVGNpSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAyT0RNdU5pd3hOamt1TldndE56TXVPR3d0T1M0NUxETTFMalZvTFRVM0xqRk1OakEwTGpVc01HZzRNeTR5VERjMU1Dd3lNRFZvTFRVMUxqbE1Oamd6TGpZc01UWTVMalY2SUUwMk56SXVOaXd4TWprdU5nb0piQzB5TlM0NExUZzRMamxzTFRJMUxqRXNPRGd1T1VnMk56SXVObm9pTHo0S1BIQmhkR2dnYVdROUluQmhkR2cxTnpBeElpQmpiR0Z6Y3owaWMzUXhJaUJrUFNKTk16RTJMaklzTWpndU9HTXlNUzQ1TERBc05ESXVOaXc1TGprc05UWXVOQ3d5Tmk0NWJERXhMamt0TWpVdU5VTXpOalVzTVRFdU9Td3pNemt1TXl3eExqY3NNekV5TGpZc01TNDRDZ2xqTFRRekxqVXNNQzA0TUM0MkxESTJMakl0T1RVdU9TdzJNeTQwYUMweU15NHliQzB4TXk0M0xESTVMak5vTWprdU9HTXRNQzR5TERJdU55MHdMalFzTlM0MExUQXVOQ3c0TGpKak1Dd3pMak1zTUM0eUxEWXVOeXd3TGpVc01UQm9MVEUxYkMweE15NDNMREk1TGpSb016WXVNd29KWXpFMUxqY3NNell1TWl3MU1pNDBMRFl4TGpjc09UVXVNaXcyTVM0M1l6SXdMamNzTUN3ME1DNDVMVFlzTlRndU1TMHhOeTQxZGkwek5tTXRNall1TkN3ek1DNHlMVGN5TGpJc016TXVNaTB4TURJdU5DdzJMamhqTFRVdE5DNDBMVGt1TkMwNUxqUXRNVE10TVRWb056WnNNVE11TnkweU9TNDBDZ2xJTWpRMExqSmpMVEF1TlMwekxqWXRNQzQ0TFRjdU1pMHdMamd0TVRBdU9HTXdMVEl1TlN3d0xqRXROQzQ1TERBdU5DMDNMalJvTVRBNUxqaHNNVE11TnkweU9TNHphQzB4TVRSRE1qWTJMaklzTkRJdU55d3lPVEF1TWl3eU9DNDVMRE14Tmk0eUxESTRMamdpTHo0S1BIQmhkR2dnYVdROUluQmhkR2cxTnpBMUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16RTJMaklzTWprdU4yTXlNUzQyTERBc05ESXVNU3c1TGpnc05UVXVOeXd5Tmk0MmJEQXVPU3d4TGpGc01DNDJMVEV1TTJ3eE1TNDVMVEkxTGpWc01DNHpMVEF1Tm13dE1DNDFMVEF1TkFvSll5MHpOaTB6TXk0M0xUa3dMalV0TXpndU1pMHhNekV1TlMweE1DNDNZeTB4Tmk0NExERXhMak10TXpBc01qY3VNeTB6Tnk0M0xEUTJiREF1T0Mwd0xqWklNVGt6YkMwd0xqSXNNQzQxYkMweE15NDNMREk1TGpSc0xUQXVOaXd4TGpOb016RXVNbXd0TUM0NUxURUtDV010TUM0eUxETXRNQzQwTERVdU9DMHdMalFzT0M0ell6QXNNeTQwTERBdU1pdzJMamNzTUM0MUxERXdMakZzTUM0NUxURm9MVEUxTGpWc0xUQXVNaXd3TGpWc0xURXpMamNzTWprdU5Hd3RNQzQyTERFdU1tZ3pOeTQzYkMwd0xqZ3RNQzQxWXpFMkxqUXNNemN1T0N3MU5DdzJNaTR5TERrMkxEWXlMaklLQ1dNeU1DNDVMREF1TVN3ME1TNHpMVFl1TVN3MU9DNDJMVEUzTGpac01DNDBMVEF1TTFZeE5EaHNMVEV1TlN3eExqaGpMVEkyTGpFc01qa3VPQzAzTVM0MExETXlMamd0TVRBeExqSXNOaTQzWXkwMExqa3ROQzR6TFRrdU1pMDVMak10TVRJdU9DMHhOQzQ0YkMwd0xqY3NNUzQwYURjMkxqWUtDV3d3TGpJdE1DNDFiREV6TGpjdE1qa3VOR3d3TGpZdE1TNHlTREkwTkM0eWJEQXVPU3d3TGpoakxUQXVOUzB6TGpVdE1DNDRMVGN1TVMwd0xqZ3RNVEF1TjJNd0xUSXVOQ3d3TGpFdE5DNDVMREF1TkMwM0xqTnNMVEF1T1N3d0xqaG9NVEV3TGpSc01DNHlMVEF1TlV3ek5qZ3NOalV1TmdvSmJEQXVOaTB4TGpOSU1qVXpMakpzTUM0NExERXVNME15TmpZdU9DdzBNeTQxTERJNU1DNDFMREk1TGpnc016RTJMaklzTWprdU55Qk5NalV6TGpJc05qWXVNV2d4TVRSc0xUQXVPQzB4TGpKc0xURXpMamNzTWprdU5Hd3dMamd0TUM0MVNESTBNaTQ1YkMwd0xqRXNNQzQ0Q2dsakxUQXVNaXd5TGpVdE1DNDBMRFV0TUM0MExEY3VOV013TERNdU55d3dMak1zTnk0MExEQXVPQ3d4TVd3d0xqRXNNQzQ0U0RNME5Xd3RNQzQ0TFRFdU0yd3RNVE11Tnl3eU9TNDBiREF1T0Mwd0xqVm9MVGMzTGpkc01DNDVMREV1TkdNeU1pNHlMRE0wTERZM0xqY3NORE11Tml3eE1ERXVOeXd5TVM0MENnbGpOUzQyTFRNdU55d3hNQzQzTFRndU1Td3hOUzR5TFRFekxqSnNMVEV1TlMwd0xqWjJNelpzTUM0MExUQXVOME16TlRNdU1pd3hPVGNzTXpNekxqRXNNakF6TERNeE1pNDJMREl3TTJNdE5ERXVNaXd3TFRjNExqTXRNalF0T1RRdU5DMDJNUzR4YkMwd0xqSXRNQzQxYUMwek5pNDViREF1T0N3eExqTUtDV3d4TXk0M0xUSTVMalJzTFRBdU9Dd3dMalZvTVRac0xUQXVNUzB4WXkwd0xqTXRNeTR6TFRBdU5TMDJMamN0TUM0MUxUa3VPV013TFRJdU5Td3dMakV0TlM0eUxEQXVOQzA0TGpKc01DNHhMVEZvTFRNd0xqaHNNQzQ0TERFdU1td3hNeTQzTFRJNUxqTnNMVEF1T0N3d0xqVm9Nak11T0FvSmJEQXVNaTB3TGpWak55NDJMVEU0TGpRc01qQXVOUzB6TkM0eExETTNMakV0TkRVdU1tTTBNQzR6TFRJM0xEa3pMamt0TWpJdU5pd3hNamt1TWl3eE1DNDFiQzB3TGpJdE1Xd3RNVEV1T1N3eU5TNDFiREV1TlMwd0xqSmpMVEkxTGpZdE16RXVOUzAzTVM0NExUTTJMalF0TVRBekxqUXRNVEF1T0FvSll5MDNMRFV1TnkweE1pNDVMREV5TGpZdE1UY3VOQ3d5TUM0MGJDMHdMamdzTVM0elRESTFNeTR5TERZMkxqRjZJaTgrQ2p3dmMzWm5QZ289XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGUgPT0gXCJydVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFncmVlbWVudF9ydVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25SdWRleE5vdGljZUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFfaW5mb3JtZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSdWRleE5vdGljZUluZm9ybWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4R2F0ZXdheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM9e3J1ZGV4R2F0ZXdheUNvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcms9e1wibmF0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17XCJydWRleFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJmaWF0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL21lcmNoYW50LnJhaWRvZmluYW5jZS5ldS9tZWRpYS84M2VlZjNkNWExN2JmMzAwYWY5OTg2ZTkxM2MyYzk5ZC5wZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2VfdGhpcmRfcGFydHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUnVkZXhOb3RpY2VJbmZvcm1lZF9CdXlDcnlwdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJ1ZGV4Tm90aWNlSW5mb3JtZWRfQnV5Q3J5cHRvLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnJ1ZGV4X25vdGljZTFfaW5mb3JtZWRfdGhpcmRfcGFydHlfc2VydmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlSW5mb3JtZWRfQnV5Q3J5cHRvID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvRmluYW5jZSBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJCaW5hbmNlIFNtYXJ0IENoYWluIChCRVAtMjAgdG9rZW5zKVwiLFxuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiUlVERVhfQkVQMjBcIixcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUnVERVhfQkVQMjBTZXJ2aWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVkZXhTZXJ2aWNlQkVQMjAgPT09IFwiZ2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtydWRleFNlcnZpY2VCRVAyMCA9PT0gXCJnYXRld2F5XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zQkVQMjAubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudExvY2FsZSA9PSBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWdyZWVtZW50X3J1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFncmVlbWVudF9lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJ1ZGV4Tm90aWNlSW5mb3JtZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMV9pbmZvcm1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1ZGV4Tm90aWNlSW5mb3JtZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhHYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2lucz17cnVkZXhHYXRld2F5Q29pbnNCRVAyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrPXtcImJzYy10b2tlbnNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRld2F5PXtcInJ1ZGV4XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHNlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIHNlcnZpY2VzRG93bn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZVNlcnZpY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgcnVkZXhHYXRld2F5Q29pbnMgPSB0aGlzLnByb3BzLnJ1ZGV4QmFja2VkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBydWRleEdhdGV3YXlDb2luc0JFUDIwID0gdGhpcy5wcm9wcy5ydWRleEJhY2tlZENvaW5zQkVQMjBcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXJ2aWNlcyA9IHRoaXMucmVuZGVyU2VydmljZXMoXG4gICAgICAgICAgICBydWRleEdhdGV3YXlDb2lucyxcbiAgICAgICAgICAgIHJ1ZGV4R2F0ZXdheUNvaW5zQkVQMjBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzZXJ2aWNlTmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBzZXJ2aWNlcy5tYXAoKHNlcnZpY2VzX29iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lcy5wdXNoKHNlcnZpY2VzX29iai5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNfb2JqLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZU5hbWUgPSBzZXJ2aWNlTmFtZXNbYWN0aXZlU2VydmljZV07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlRG93biA9IHNlcnZpY2VzRG93bi5nZXQoY3VycmVudFNlcnZpY2VOYW1lKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGFpbmVkID8gXCJncmlkLWNvbnRlbnRcIiA6IFwiZ3JpZC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jb250YWluZWQgPyBcIlwiIDogXCJncmlkLWNvbnRlbnRcIn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXBvc2l0TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZGVwb3NpdF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJkZXBvc2l0X21vZGFsX25ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zPXt0aGlzLnByb3BzLmJhY2tlZENvaW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpdGhkcmF3TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwid2l0aGRyYXdfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPVwid2l0aGRyYXdfbW9kYWxfbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VkQ29pbnM9e3RoaXMucHJvcHMuYmFja2VkQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImdhdGV3YXkucGhhc2Vfb3V0X3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlcG9zaXRfbW9kYWxfbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5kZXBvc2l0X21vZGFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMuZGVwb3NpdF9tb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5kZXBvc2l0LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ3aXRoZHJhd19tb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy53aXRoZHJhd19tb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLndpdGhkcmF3X21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS50aXRsZVwiIGNvbXBvbmVudD1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IHNob3ctZm9yLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPVwiZGVwb3NpdC1zaG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNSBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPVwicmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgc21hbGwtb3JkZXItMiBtZWRpdW0tb3JkZXItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFNlcnZpY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZVNlcnZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXJ2aWNlRG93biA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2BnYXRld2F5LnVuYXZhaWxhYmxlXyR7Y3VycmVudFNlcnZpY2VOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGl1bS01IG1lZGl1bS1vZmZzZXQtMSBzbWFsbC1vcmRlci0xIG1lZGl1bS1vcmRlci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnlvdXJfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17e2hlaWdodDogNDAsIHdpZHRoOiA0MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbV9pbWFnZT17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLXBhZGRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxNX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VydmljZURvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFjdGl2ZVNlcnZpY2UgJiYgc2VydmljZXNbYWN0aXZlU2VydmljZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXJ2aWNlc1swXS50ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFjY291bnREZXBvc2l0V2l0aGRyYXcgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnREZXBvc2l0V2l0aGRyYXcpO1xuXG5jbGFzcyBEZXBvc2l0U3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB1cGRhdGVHYXRld2F5QmFja2VycygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBY2NvdW50RGVwb3NpdFdpdGhkcmF3IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRGVwb3NpdFN0b3JlV3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZSwgR2F0ZXdheVN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBhY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXCJsb2NhbGVcIiksXG4gICAgICAgICAgICBiYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMsXG4gICAgICAgICAgICAvKiAgICAgICAgICAgIG9wZW5MZWRnZXJCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICApLCovXG4gICAgICAgICAgICBydWRleEJhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgXCJSVURFWFwiLFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcnVkZXhCYWNrZWRDb2luc0JFUDIwOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgXCJSVURFWF9CRVAyMFwiLFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLyogICAgICAgICAgICBiaXRzcGFya0JhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTUEFSS0RFWFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUcmFkZXNCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVFJBREVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdGFkZWxCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ0lUQURFTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgeGJ0c3hCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWEJUU1hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSwqL1xuICAgICAgICAgICAgc2VydmljZXNEb3duOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5kb3duIHx8IHt9XG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi9SdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQge1xuICAgIFJlY2VudFRyYW5zYWN0aW9ucyxcbiAgICBUcmFuc2FjdGlvbldyYXBwZXJcbn0gZnJvbSBcImNvbXBvbmVudHMvQWNjb3VudC9SZWNlbnRUcmFuc2FjdGlvbnNcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgXCJyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzXCI7XG5cbmNsYXNzIFJ1RGV4R2F0ZXdheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKHByb3BzLCB7YWN0aW9uOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwicnVkZXhBY3Rpb25cIikgfHwgXCJkZXBvc2l0XCJ9ICksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblwiKSB8fCBcImRlcG9zaXRcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9nZXRBY3RpdmVDb2luKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICBsZXQgY2FjaGVkQ29pbjtcbiAgICAgICAgbGV0IGZpcnN0VGltZUNvaW47XG4gICAgICAgIGxldCBhY3RpdmVDb2luO1xuXG4gICAgICAgIGNhY2hlZENvaW4gPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgXCJhY3RpdmVDb2luX3J1ZGV4X1wiICsgcHJvcHMubmV0d29yayxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcbiAgICAgICAgLy9maXJzdFRpbWVDb2luID0gXCJHT0xPU1wiO1xuICAgICAgICBmaXJzdFRpbWVDb2luID0gcHJvcHMuY29pbnNbMF0ubmFtZTtcblxuICAgICAgICBhY3RpdmVDb2luID0gY2FjaGVkQ29pbiA/IGNhY2hlZENvaW4gOiBmaXJzdFRpbWVDb2luO1xuXG4gICAgICAgIGlmIChzdGF0ZS5hY3Rpb24gPT09IFwid2l0aGRyYXdcIikge1xuICAgICAgICAgICAgYWN0aXZlQ29pbiA9IHRoaXMuX2ZpbmRDb2luQnlOYW1lKHByb3BzLCBhY3RpdmVDb2luKS5zeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlQ29pbjtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5wcm92aWRlciAhPT0gdGhpcy5wcm9wcy5wcm92aWRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29pbjogdGhpcy5fZ2V0QWN0aXZlQ29pbihuZXh0UHJvcHMsIHRoaXMuc3RhdGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMubmV0d29yayAhPT0gdGhpcy5wcm9wcy5uZXR3b3JrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKG5leHRQcm9wcywgdGhpcy5zdGF0ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBzZXR0aW5nW2BhY3RpdmVDb2luX3J1ZGV4XyR7dGhpcy5zdGF0ZS5hY3Rpb259YF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH0qL1xuXG4gICAgb25TZWxlY3RDb2luKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVDb2luOiBlLnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIGxldCBjb2luTmFtZSA9IGUudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX3J1ZGV4X1wiICsgdGhpcy5wcm9wcy5uZXR3b3JrXSA9IGNvaW5OYW1lO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoc2V0dGluZyk7XG4gICAgfVxuXG4gICAgX2ZpbmRDb2luQnlOYW1lKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2luID0gcHJvcHMuY29pbnNbaV07XG4gICAgICAgICAgICBpZiAoY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpID09PSBuYW1lKSByZXR1cm4gY29pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHMuY29pbnNbMF07XG4gICAgfVxuXG4gICAgX2ZpbmRDb2luQnlTeW1ib2wocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLnN5bWJvbC50b1VwcGVyQ2FzZSgpID09PSBuYW1lKSByZXR1cm4gY29pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjaGFuZ2VBY3Rpb24odHlwZSkge1xuICAgICAgICBsZXQgYWN0aXZlQ29pbiA9IHRoaXMuX2dldEFjdGl2ZUNvaW4odGhpcy5wcm9wcywge2FjdGlvbjogdHlwZX0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiB0eXBlLFxuICAgICAgICAgICAgYWN0aXZlQ29pbjogYWN0aXZlQ29pblxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1tcInJ1ZGV4QWN0aW9uXCJdOiB0eXBlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NvaW5zLCBhY2NvdW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlQ29pbiwgYWN0aW9ufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFjb2lucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmaWx0ZXJlZENvaW5zID0gY29pbnMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgaWYgKCFhIHx8ICFhLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgLypyZXR1cm4gYWN0aW9uID09PSBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICA/IGEuZGVwb3NpdEFsbG93ZWRcbiAgICAgICAgICAgICAgICAgICAgOiBhLndpdGhkcmF3YWxBbGxvd2VkOyovXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luT3B0aW9ucyA9IGZpbHRlcmVkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAvL2xldCBwcmVmaXggPSBuYW1lID09PSBcIlBQWVwiID8gXCJcIiA6IFwiUlVERVguXCI7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeCA9IFwiUlVERVguXCI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcmVmaXggKyBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbiA9IGZpbHRlcmVkQ29pbnMuZmlsdGVyKGNvaW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gYWN0aXZlQ29pblxuICAgICAgICAgICAgICAgIDogY29pbi5zeW1ib2wgPT09IGFjdGl2ZUNvaW47XG4gICAgICAgIH0pWzBdO1xuXG4gICAgICAgIGlmICghY29pbikgY29pbiA9IGZpbHRlcmVkQ29pbnNbMF07XG5cbiAgICAgICAgbGV0IGlzRGVwb3NpdCA9IHRoaXMuc3RhdGUuYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBsZXQgc3VwcG9ydFVybCA9IFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbkhlaWdodDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiZ2F0ZXdheS5jaG9vc2VfXCIgKyBhY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPVwiZXh0ZXJuYWwtY29pbi10eXBlcyBidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDb2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlQ29pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y29pbk9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvU2VsZWN0PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgbWVkaXVtLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbkhlaWdodDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV90ZXh0XCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBzZWdtZW50ZWQgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZUFjdGlvbi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZUFjdGlvbi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7IWNvaW4gPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2luLnN5bWJvbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXRld2F5PXtcInJ1ZGV4XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50PXtjb2luLmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldD17Y29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU9e2NvaW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU9e2NvaW4uYmFja2luZ0NvaW4udG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hY2NvdW50PXtjb2luLmdhdGV3YXlXYWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfd2FsbGV0X3R5cGU9e2NvaW4ud2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdEFsbG93ZWQ9e2NvaW4uZGVwb3NpdEFsbG93ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxBbGxvd2VkPXtjb2luLndpdGhkcmF3YWxBbGxvd2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29pbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9hc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfY29pbl90eXBlPXtjb2luLnN5bWJvbC50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c19vdXRwdXRfbWVtb3M9e2NvaW4uc3VwcG9ydHNNZW1vc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQdWJsaWNLZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbi5zdXBwb3J0c1B1YmxpY0tleSB8fCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UeXBlPXtjb2luLm1lbW9UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXtjb2luLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZT17Y29pbi5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9wcmVjaXNpb249e2NvaW4ucHJlY2lzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zPXtjb2luLmNvbmZpcm1hdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5zdGF0ZS5hY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlN1cHBvcnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguc3VwcG9ydF9ibG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1cHBvcnRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1cHBvcnRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29pbiAmJiBjb2luLnN5bWJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFjY291bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHthc3NldCwgdG8sIGZyb21BY2NvdW50fSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjZW50VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzTGlzdD17SW1tdXRhYmxlLkxpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3RWaWV3PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsSGVpZ2h0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9XCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnJlY2VudF9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWx0ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogdG8uZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbUFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2FjdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChSdURleEdhdGV3YXksIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBEaXNhYmxlQ29weVRleHQgZnJvbSBcIi4uL0Rpc2FibGVDb3B5VGV4dFwiO1xuaW1wb3J0IFJ1RGV4V2l0aGRyYXdNb2RhbCBmcm9tIFwiLi9SdURleFdpdGhkcmF3TW9kYWxcIjtcbmltcG9ydCBBY2NvdW50QmFsYW5jZSBmcm9tIFwiLi4vLi4vQWNjb3VudC9BY2NvdW50QmFsYW5jZVwiO1xuaW1wb3J0IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xuaW1wb3J0IHtyZXF1ZXN0RGVwb3NpdEFkZHJlc3N9IGZyb20gXCJsaWIvY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiO1xuaW1wb3J0IHtNb2RhbCwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge2F2YWlsYWJsZUdhdGV3YXlzfSBmcm9tIFwibGliL2NvbW1vbi9nYXRld2F5c1wiO1xuXG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlLnJlYWN0XCI7XG5cbmNsYXNzIFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnYXRld2F5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2FjY291bnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgaXNzdWVyX2FjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBkZXBvc2l0X2Fzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X3dhbGxldF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX2luX2Zhdm9yX29mOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGRlcHJlY2F0ZWRfbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdXBwb3J0c19vdXRwdXRfbWVtb3M6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIHN1cHBvcnRzUHVibGljS2V5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBtZW1vVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWluX2Ftb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZ2F0ZUZlZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgY29uZmlybWF0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgYXNzZXRfcHJlY2lzaW9uOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUgPSBuZXcgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUXJNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcXJjb2RlOiBcIlwiLFxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzOiBudWxsLFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGREZXBvc2l0QWRkcmVzcyA9IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNob3dRck1vZGFsID0gdGhpcy5zaG93UXJNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVRck1vZGFsID0gdGhpcy5oaWRlUXJNb2RhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2hvd1FyY29kZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3FyY29kZTogdGV4dH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1FyTW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1FyTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlUXJNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0RGVwb3NpdE9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdhbGxldFR5cGU6IHRoaXMucHJvcHMuZGVwb3NpdF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRDb2luVHlwZTogdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dEFkZHJlc3M6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgc3RhdGVDYWxsYmFjazogdGhpcy5hZGREZXBvc2l0QWRkcmVzc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9ub3RpZnkoc3UpIHtcbiAgICAgICAgbGV0IHN0ck4gPSBcImNvcHlfYWRkcmVzc1wiO1xuXG4gICAgICAgIGlmIChzdSA9PSBcIm1lbW9cIikgc3RyTiA9IFwiY29weV9tZW1vXCI7XG5cbiAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5ub3RpZnkuXCIgKyBzdHJOKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgLy8gICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3ModGhpcy5wcm9wcy5nYXRld2F5LCBhY2NvdW50X25hbWUsIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUpO1xuICAgIC8vIH1cblxuICAgIGFkZERlcG9zaXRBZGRyZXNzKHJlY2VpdmVfYWRkcmVzcykge1xuICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnRfbmFtZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlX2FkZHJlc3N9KTtcbiAgICB9XG5cbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInRoaXMucHJvcHMuaXNzdWVyOiBcIiwgdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC50b0pTKCkgKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJ0aGlzLnJlY2VpdmVfYXNzZXQuaXNzdWVyOiBcIiwgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LnRvSlMoKSApXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcIndpdGhkcmF3X2Fzc2V0X1wiICtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKSArXG4gICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhdygpIHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbXB0eVJvdyA9IDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIiwgbWluSGVpZ2h0OiAxNTB9fSAvPjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXRcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzX29iamVjdCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcblxuICAgICAgICAvLyBsZXQgYmFsYW5jZSA9IFwiMCBcIiArIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpIHtcbiAgICAgICAgICAgIGxldCBoYXNfbm9uemVyb19iYWxhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3RfaWQgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZV9vYmplY3RfaWQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGJhbGFuY2Vfb2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlICE9IDApIGhhc19ub256ZXJvX2JhbGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzX25vbnplcm9fYmFsYW5jZSkgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC50b0pTKCk7XG4gICAgICAgIC8vIGxldCBhc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpO1xuICAgICAgICAvLyBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIC8vICAgICBpZiggY3VycmVudF9hc3NldF9pZCApXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgYmFsYW5jZSA9ICg8c3Bhbj48VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIvPjogPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX0vPjwvc3Bhbj4pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NvdW50X25hbWUgPT09IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGUgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyA9IHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vcykge1xuICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcXJjb2RlID0gdGhpcy5zdGF0ZS5xcmNvZGU7XG4gICAgICAgIGxldCBkZXBvc2l0Q29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucyAmJiB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImlycmV2ZXJzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5sYXN0X2lycmV2ZXJzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiYmxvY2tzXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLm5fYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17dGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd2l0aGRyYXdfbW9kYWxfaWQgPSB0aGlzLmdldFdpdGhkcmF3TW9kYWxJZCgpO1xuICAgICAgICBsZXQgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGRlcG9zaXRfbWVtbyA9IG51bGw7XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IDxzcGFuPnBsZWFzZSB1c2Uge3RoaXMucHJvcHMuZGVwcmVjYXRlZF9pbl9mYXZvcl9vZi5nZXQoXCJzeW1ib2xcIil9IGluc3RlYWQuIDxzcGFuIGRhdGEtdGlwPXt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfbWVzc2FnZX0gZGF0YS1wbGFjZT1cInJpZ2h0XCIgZGF0YS1odG1sPXt0cnVlfT48SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIiAvPjwvc3Bhbj48UmVhY3RUb29sdGlwIC8+PC9zcGFuPjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgbGV0IGNsaXBib2FyZFRleHQgPSBcIlwiO1xuICAgICAgICBsZXQgbWVtb1RleHQ7XG4gICAgICAgIGxldCB3aXRoZHJhd19tZW1vX3ByZWZpeDtcbiAgICAgICAgbGV0IGN1cnJlbnRHYXRld2F5ID0gXCJSVURFWFwiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIWF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5zaW1wbGVBc3NldEdhdGV3YXkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudH08L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50O1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5tZW1vVHlwZSAmJiB0aGlzLnByb3BzLm1lbW9UeXBlID09PSBcImJ0c2lkXCIpIHtcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmRfYnRzaWRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLnJlcGxhY2UoXCIxLjIuXCIsIFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICBdICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1wiYXBwZW5kXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwb3NpdF9tZW1vID0gPHNwYW4+e21lbW9UZXh0fTwvc3Bhbj47XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUgKyBcIjpcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoIXJlY2VpdmVfYWRkcmVzcyB8fCAhcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyBhIGRlcG9zaXQgbWVtbyAobGlrZSBldGhlcmV1bSksIHdlIG5lZWQgdG8gZGlzcGxheSBib3RoIHRoZSBhZGRyZXNzIGFuZCB0aGUgbWVtbyB0aGV5IG5lZWQgdG8gc2VuZFxuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLm1lbW87XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPntyZWNlaXZlX2FkZHJlc3MubWVtb308L3NwYW4+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY2xpZW50IHRoYXQgdXNlcyB1bmlxdWUgZGVwb3NpdCBhZGRyZXNzZXMgdG8gc2VsZWN0IHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0ID0gcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpdGhkcmF3X21lbW9fcHJlZml4ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9zdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS55b3VyX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdEFsbG93ZWQgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmFtb3VudD17dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudF93YXJuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5hbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0Q29uZmlybWF0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aT57ZGVwb3NpdENvbmZpcm1hdGlvbn08L2k+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCIsIGZvbnRTaXplOiBcIjEuMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREUkVTUzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzYWJsZUNvcHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb3B5VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnVzZV9jb3B5X2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2hvd1FyY29kZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5xcmNvZGUubGFiZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9tZW1vID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29weVRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS51c2VfY29weV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUVNTzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntkZXBvc2l0X21lbW99PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlzYWJsZUNvcHlUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TaG93UXJjb2RlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb1RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLnFyY29kZS5sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVRck1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXJNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZVFyTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRRckNvZGVNb2RhbCB0ZXh0PXtxcmNvZGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtjbGlwYm9hcmRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub3RpZnkoXCJhZGRyZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vVGV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e21lbW9UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuX25vdGlmeShcIm1lbW9cIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBtZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnVuZGVyX2NvbnN0cnVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b193aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwPldoZW4geW91IHdpdGhkcmF3IHt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSwgeW91IHdpbGwgcmVjZWl2ZSB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fSBhdCBhIDE6MSByYXRpbyAobWludXMgZmVlcykuPC9wPiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2l0aGRyYXdhbEFsbG93ZWQgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd190b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMS4zcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbldpdGhkcmF3LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnVuZGVyX2NvbnN0cnVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkud2l0aGRyYXdfY29pblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbjogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnNob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9uYW1lPXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl9zeW1ib2w9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlPXt0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF93YWxsZXRfdHlwZT17dGhpcy5wcm9wcy5kZXBvc2l0X3dhbGxldF90eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VwcG9ydHNfb3V0cHV0X21lbW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dF9zdXBwb3J0c1B1YmxpY0tleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb19wcmVmaXg9e3dpdGhkcmF3X21lbW9fcHJlZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsX2lkPXt3aXRoZHJhd19tb2RhbF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXt0aGlzLnByb3BzLm1pbl9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZT17dGhpcy5wcm9wcy5nYXRlRmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3ByZWNpc2lvbj17dGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKClbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBEZXBvc2l0UXJDb2RlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5wcm9wcy50ZXh0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMlwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgPFFSQ29kZSBzaXplPXsyMDB9IHZhbHVlPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwibm9uZVwifX0+e3RleHR9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IHt2YWxpZGF0ZUFkZHJlc3MsIFdpdGhkcmF3QWRkcmVzc2VzfSBmcm9tIFwiY29tbW9uL1J1RGV4TWV0aG9kc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge2NoZWNrRmVlU3RhdHVzQXN5bmMsIGNoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcbmltcG9ydCB7UHJpY2UsIEFzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBSdURleFdpdGhkcmF3TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGlzc3VlcjogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG91dHB1dF9jb2luX3N5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3V0cHV0X3dhbGxldF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb3V0cHV0X3N1cHBvcnRzX21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXk6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIGFtb3VudF90b193aXRoZHJhdzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcbiAgICAgICAgbWluX2Ftb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZ2F0ZUZlZTogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogdGhpcy5wcm9wcy5hbW91bnRfdG9fd2l0aGRyYXcsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KFxuICAgICAgICAgICAgICAgIHByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9uc19pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb25faXNfdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcbiAgICAgICAgICAgICAgICBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IFwiXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5OiB0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICBtZW1vOiBcIlwiLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19maXJzdDogdHJ1ZSxcbiAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogcHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZDpcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmFzc2V0c19ieV9zeW1ib2wuZ2V0KHByb3BzLmZlZV9hc3NldF9zeW1ib2wpIHx8XG4gICAgICAgICAgICAgICAgXCIxLjMuMFwiLFxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MsIHByb3BzKTtcblxuICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UgPSB0aGlzLl9jaGVja0JhbGFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2hlY2tNaW5BbW91bnQgPSB0aGlzLl9jaGVja01pbkFtb3VudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUgPSBkZWJvdW5jZSh0aGlzLl91cGRhdGVGZWUuYmluZCh0aGlzKSwgMjUwKTtcblxuICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsID0gdGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bk1vdW50ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLmFjY291bnQgIT09IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50ICYmXG4gICAgICAgICAgICBucC5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBucC5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IG5ldyBBc3NldCh7YW1vdW50OiAwfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dDb25maXJtYXRpb25Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlQ29uZmlybWF0aW9uTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF91cGRhdGVGZWUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X2lkLCBmcm9tX2FjY291bnR9ID0gc3RhdGU7XG4gICAgICAgIGNvbnN0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzWzBdICE9PSBmZWVfYXNzZXRfaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQgPSBmZWVfYXNzZXRfdHlwZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgYWNjb3VudElEOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmZWVJRDogZmVlX2Fzc2V0X2lkLFxuICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoe2ZlZSwgaGFzQmFsYW5jZSwgaGFzUG9vbEJhbGFuY2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51bk1vdW50ZWQpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBhY2NvdW50ID0gc3RhdGUuZnJvbV9hY2NvdW50O1xuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzOiBhc3NldHN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKHN0YXRlKTtcbiAgICAgICAgLy8gY29uc3QgYXNzZXRzID0gW1wiMS4zLjBcIiwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV07XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tZW1vID8gXCI6XCIgKyBzdGF0ZS5tZW1vIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYV0gPSBzdGF0dXNbaWR4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHN0YXRlLmZlZVN0YXR1cywgZmVlU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QW1vdW50Q2hhbmdlKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCAhPT0gdW5kZWZpbmVkICYmICFwYXJzZUZsb2F0KGFtb3VudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja01pbkFtb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q2hhbmdlZChpbmRleCkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApW2luZGV4XTtcbiAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3QWRkcmVzc0NoYW5nZWQoZSkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X2FkZHJlc3MgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IG5ld193aXRoZHJhd19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGZWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBvbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZChlKSB7XG4gICAgICAgIGxldCBuZXdfd2l0aGRyYXdfcHVibGljS2V5ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleTogbmV3X3dpdGhkcmF3X3B1YmxpY0tleSxcbiAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHk6XG4gICAgICAgICAgICAgICAgbmV3X3dpdGhkcmF3X3B1YmxpY0tleSAhPSBcIlwiID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUFkZHJlc3MobmV3X3dpdGhkcmF3X2FkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe1xuICAgICAgICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICAgICAgICB3YWxsZXRUeXBlOiBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBuZXdBZGRyZXNzOiBuZXdfd2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICB9KS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAganNvbiA9IHtpc1ZhbGlkOiBmYWxzZX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzID09PSBuZXdfd2l0aGRyYXdfYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDoganNvbi5pc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IGpzb24uaGFzT3duUHJvcGVydHkoXCJwdWJsaWNLZXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ganNvbi5wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTogdGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBqc29uLmhhc093blByb3BlcnR5KFwicHVibGljS2V5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja0JhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIHdpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGJhbGFuY2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFiYWxhbmNlIHx8ICFmZWVBbW91bnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICAgICAgYmFsYW5jZVxuICAgICAgICApO1xuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6ICFoYXNCYWxhbmNlfSk7XG4gICAgICAgIHJldHVybiBoYXNCYWxhbmNlO1xuICAgIH1cblxuICAgIF9jaGVja01pbkFtb3VudCgpIHtcbiAgICAgICAgY29uc3Qge3dpdGhkcmF3X2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICh3aXRoZHJhd19hbW91bnQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbGVzc1RoYW5NaW5pbXVtID1cbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCA8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24pO1xuICAgICAgICAvKiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKVxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbkFtb3VudEVycm9yOiBsZXNzVGhhbk1pbmltdW19KTtcbiAgICAgICAgcmV0dXJuIGxlc3NUaGFuTWluaW11bTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzcyAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICYmIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcy5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50KSA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIVdpdGhkcmF3QWRkcmVzc2VzLmhhcyh0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLmluZGV4T2YodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKSA9PSAtMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGZlZV9hc3NldF9pZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLC9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZEFtb3VudCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXIuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUubWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudCA/IGZlZUFtb3VudC5hc3NldF9pZCA6IGZlZV9hc3NldF9pZFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXRDb25maXJtYXRpb24oKSB7XG4gICAgICAgIHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCk7XG5cbiAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBbXTtcbiAgICAgICAgICAgIHdpdGhkcmF3YWxzLnB1c2godGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzKTtcbiAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IHdpdGhkcmF3YWxzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFdpdGhkcmF3QWRkcmVzc2VzLmdldChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xuICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldDtcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAvLC9nLFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGZlZV9hc3NldF9pZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc3N1ZXIuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBwYXJzZUludChhbW91bnQgKiBwcmVjaXNpb24sIDEwKSxcbiAgICAgICAgICAgIGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIHRoaXMuc3RhdGUud2l0aGRyYXdfcHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgPyBcIjpcIiArIG5ldyBCdWZmZXIodGhpcy5zdGF0ZS5tZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgZmVlQW1vdW50ID8gZmVlQW1vdW50LmFzc2V0X2lkIDogZmVlX2Fzc2V0X2lkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Ecm9wRG93bkxpc3QoKSB7XG4gICAgICAgIGlmIChXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaXNfdmFsaWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aXRoZHJhd19hZGRyZXNzX2ZpcnN0OiBmYWxzZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uc19pc192YWxpZDogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFdpdGhkcmF3TW9kYWxJZCgpIHtcbiAgICAgICAgcmV0dXJuIFwiY29uZmlybWF0aW9uXCI7XG4gICAgfVxuXG4gICAgb25BY2NvdW50QmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpKS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHRvdGFsID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpLFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgZmVlIGlmIGl0IGlzIHVzaW5nIHRoZSBzYW1lIGFzc2V0XG4gICAgICAgICAgICBpZiAodG90YWwuYXNzZXRfaWQgPT09IGZlZUFtb3VudC5hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIHRvdGFsLm1pbnVzKGZlZUFtb3VudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRvdGFsLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE5lc3RlZFJlZihyZWYpIHtcbiAgICAgICAgdGhpcy5uZXN0ZWRSZWYgPSByZWY7XG4gICAgfVxuXG4gICAgb25GZWVDaGFuZ2VkKHthc3NldH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZmVlU3RhdHVzfSA9IHN0YXRlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZlZVBvb2xCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzUG9vbEJhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICBpZiAoZmVlU3RhdHVzW2lkXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcbiAgICAgICAgaWYgKCEoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFjY291bnRfYmFsYW5jZXMpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGtleSk7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgYXNzZXRzIHRoYXQgZG8gbm90IGhhdmUgdmFsaWQgY29yZSBleGNoYW5nZSByYXRlc1xuICAgICAgICAgICAgICAgIGxldCBwcmljZUlzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG5ldyBBc3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcmljZUlzVmFsaWQgPSBwLmlzVmFsaWQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0LmdldChcImlkXCIpICE9PSBcIjEuMy4wXCIgJiYgIXByaWNlSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IGZlZV9hc3NldF90eXBlcy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGFzRmVlUG9vbEJhbGFuY2UoYSkgJiYgaGFzQmFsYW5jZShhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtmZWVfYXNzZXRfdHlwZXN9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkLCB3aXRoZHJhd19wdWJsaWNLZXksIG1lbW99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHN0b3JlZEFkZHJlc3MgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcblxuICAgICAgICBsZXQgd2l0aGRyYXdNb2RhbElkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGludmFsaWRfYWRkcmVzc19tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBudWxsO1xuICAgICAgICBsZXQgY29uZmlybWF0aW9uID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICFzdG9yZWRBZGRyZXNzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJydWRleC1kaXNhYmxlZC1vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicnVkZXgtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdG9yZWRBZGRyZXNzLm1hcChmdW5jdGlvbihuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VsZWN0Q2hhbmdlZC5iaW5kKHRoaXMsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3MgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyAmJiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbl90eXBlPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXRDb25maXJtYXRpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNvbmZpcm1hdGlvbi5hY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwuY29uZmlybWF0aW9uLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmNvbmZpcm1hdGlvbi50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKVxuICAgICAgICAgICAgLy8gICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IDxJY29uIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5jaGVja21hcmtfY2lyY2xlLm9wZXJhdGlvbl9zdWNjZWVkXCIgY2xhc3NOYW1lPVwic3VjY2Vzc1wiIC8+O1xuICAgICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgICAgLy8gICBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IDxJY29uIG5hbWU9XCJjcm9zcy1jaXJjbGVcIiB0aXRsZT1cImljb25zLmNyb3NzX2NpcmNsZS5vcGVyYXRpb25fZmFpbGVkXCIgY2xhc3NOYW1lPVwiYWxlcnRcIiAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XG4gICAgICAgIGxldCB3aXRoZHJhd19tZW1vID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNfbWVtb3MpIHtcbiAgICAgICAgICAgIHdpdGhkcmF3X21lbW8gPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5tZW1vXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZW1vQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVzdGltYXRlIGZlZSBWQVJJQUJMRVNcbiAgICAgICAgbGV0IHtmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG5cbiAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X2Fzc2V0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7OiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXQtY3Vyc29yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjb3VudEJhbGFuY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWxhbmNlID0gXCJObyBmdW5kc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIwcHhcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcgYW1vdW50ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibW9kYWwud2l0aGRyYXcuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbldpdGhkcmF3QW1vdW50Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtcHR5X3dpdGhkcmF3X3ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy52YWxpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5taW5BbW91bnRFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRfZXJyb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmFtb3VudD17dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRmVlIHNlbGVjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmVlQW1vdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGdhdGVfZmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkNhbGxiYWNrPXt0aGlzLnNldE5lc3RlZFJlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5nZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmZlZUFtb3VudC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtmZWVfYXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmhhc0JhbGFuY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GZWVCYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5oYXNQb29sQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub1Bvb2xCYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBHYXRlIGZlZSAqL31cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZ2F0ZUZlZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3IgcmlnaHQtc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZmVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5zdGF0ZS53aXRoZHJhd19hbW91bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZUZlZSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5vdXRwdXRfY29pbl9zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4LXNlbGVjdC1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25Ecm9wRG93bkxpc3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzk2NjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1wb3NpdGlvbi1vcHRpb25zXCI+e29wdGlvbnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW52YWxpZF9hZGRyZXNzX21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBmb3IgUHVibGljS2V5IGlucHV0IChleC5QUklaTSkgKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm91dHB1dF9zdXBwb3J0c1B1YmxpY0tleSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LnB1YmxpY19rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1zZWxlY3QtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdfcHVibGljS2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbldpdGhkcmF3UHVibGljS2V5Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1lbW8gaW5wdXQgKi99XG4gICAgICAgICAgICAgICAgICAgIHt3aXRoZHJhd19tZW1vfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaXRoZHJhdy9DYW5jZWwgYnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5BbW91bnRFcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLndpdGhkcmF3LnN1Ym1pdFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5wZXJtLmNhbmNlbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1hdGlvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJ1RGV4V2l0aGRyYXdNb2RhbCA9IEJpbmRUb0NoYWluU3RhdGUoUnVEZXhXaXRoZHJhd01vZGFsKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChSdURleFdpdGhkcmF3TW9kYWwsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmZWVfYXNzZXRfc3ltYm9sOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwiZmVlX2Fzc2V0XCIpXG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7cmVxdWVzdERlcG9zaXRBZGRyZXNzfSBmcm9tIFwibGliL2NvbW1vbi9SdURleE1ldGhvZHNcIjtcbmltcG9ydCBBY2NvdW50QmFsYW5jZSBmcm9tIFwiLi4vLi4vLi4vQWNjb3VudC9BY2NvdW50QmFsYW5jZVwiO1xuaW1wb3J0IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL1J1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHthdmFpbGFibGVHYXRld2F5c30gZnJvbSBcImxpYi9jb21tb24vZ2F0ZXdheXNcIjtcblxuLy9SQUlET1xuaW1wb3J0IFJhaWRvUGF5bWVudE1ldGhvZCBmcm9tIFwiLi9SYWlkb1BheW1lbnRNZXRob2RcIjtcbmltcG9ydCBcIi4vUmFpZG8uY3NzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmNsYXNzIFJhaWRvRGVwb3NpdFJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdhdGV3YXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2Fzc2V0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBpc3N1ZXJfYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGRlcG9zaXRfYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9pbl9mYXZvcl9vZjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZSA9IG5ldyBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBudWxsLFxuXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lbW86IG51bGxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN1Ym1pdEFsbG93ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWluX21heF92YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Q6IFwibWluXCIgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRBbW91bnQ6IDAsXG4gICAgICAgICAgICBnaXZlQW1vdW50OiAwLFxuXG4gICAgICAgICAgICByYWlkbzoge1xuICAgICAgICAgICAgICAgIGFmZmlsaWF0ZV9pZDogMTAwNTgsXG5cbiAgICAgICAgICAgICAgICBnaXZlX3JhdzogdGhpcy5wcm9wcy5hY3RpdmVQYXltZW50TWV0aG9kLCAvL2ZpYXRzXG4gICAgICAgICAgICAgICAgZ2l2ZTogdGhpcy5wcm9wcy5hY3RpdmVQYXltZW50TWV0aG9kLFxuICAgICAgICAgICAgICAgIGdpdmVfZGVjaW1hbDogNSxcblxuICAgICAgICAgICAgICAgIC8vZ2V0OiBcIkJUQ1wiLFxuICAgICAgICAgICAgICAgIGdldDogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgZ2V0X2RlY2ltYWw6IDUsXG5cbiAgICAgICAgICAgICAgICBwcmljZTogMSxcblxuICAgICAgICAgICAgICAgIGluOiBudWxsLFxuICAgICAgICAgICAgICAgIG91dDogbnVsbCxcbiAgICAgICAgICAgICAgICBpbl9taW5fZmVlOiAwLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2ZlZTogMCxcblxuICAgICAgICAgICAgICAgIGluX2ZlZTogMCxcbiAgICAgICAgICAgICAgICBjb21taXNzaW9uOiAwLFxuXG4gICAgICAgICAgICAgICAgbWluX2RlcG9zaXQ6IDAsXG4gICAgICAgICAgICAgICAgbWF4X2RlcG9zaXQ6IDEwMDAwMDAsXG5cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYnV5XCIsIC8vQlVZIG9yIFNFTExcblxuICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM6IFtdLFxuICAgICAgICAgICAgICAgIHByaWNlczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzID0gdGhpcy5hZGREZXBvc2l0QWRkcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9tYWtlVXJpUmFpZG8gPSB0aGlzLl9tYWtlVXJpUmFpZG8uYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9zZXRDb2luc1JhaWRvID0gdGhpcy5fc2V0Q29pbnNSYWlkby5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9zZXRQcmljZXNSYWlkbyA9IHRoaXMuX3NldFByaWNlc1JhaWRvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2luaXRQcmljZXMgPSB0aGlzLl9pbml0UHJpY2VzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2QgPSB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2QuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluaXRDdXJyZW5jaWVzKHRoaXMuX3NldENvaW5zUmFpZG8pO1xuICAgIH1cblxuICAgIGluaXRDdXJyZW5jaWVzKHN0YXRlQ2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGNvaW5zID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9tZXJjaGFudC1kYXRhY2VudGVyLnJhaWRvZmluYW5jZS5ldTo4MDk1L2N1cnJlbmNpZXMvXCI7XG4gICAgICAgIGZldGNoKGNvaW5zLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIn0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKSBzdGF0ZUNhbGxiYWNrKGpzb24uZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRDb2luc1JhaWRvKGN1cnJlbmNpZXMpIHtcbiAgICAgICAgY3VycmVuY2llcyA9IGN1cnJlbmNpZXMucm93cztcblxuICAgICAgICBsZXQgY3Vycl9jb2luX29yaWdpbmFsID0gdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWU7XG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVuY2llc1tpXS5jb2RlID09PSBjdXJyX2NvaW5fb3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndpdGhkcmF3X2ZlZTogXCIgKyBjdXJyZW5jaWVzW2ldLndpdGhkcmF3X2ZlZSAqIDEpO1xuXG4gICAgICAgICAgICAgICAgcmFpZG8uZ2l2ZSA9IHRoaXMuc3RhdGUucmFpZG8uZ2l2ZTtcbiAgICAgICAgICAgICAgICByYWlkby5nZXQgPSBjdXJyZW5jaWVzW2ldLmNvZGU7XG5cbiAgICAgICAgICAgICAgICByYWlkby5jdXJyZW5jaWVzID0gY3VycmVuY2llcztcblxuICAgICAgICAgICAgICAgIC8vcmFpZG8uaW5fZW5hYmxlID0gY3VycmVuY2llc1tpXS5pbl9lbmFibGU7Ly9UT0RPXG4gICAgICAgICAgICAgICAgcmFpZG8ub3V0ID0gY3VycmVuY2llc1tpXS5pZDtcbiAgICAgICAgICAgICAgICByYWlkby5taW5fZGVwb3NpdCA9IGN1cnJlbmNpZXNbaV0ubWluX2RlcG9zaXQ7XG4gICAgICAgICAgICAgICAgcmFpZG8ubWF4X2RlcG9zaXQgPSBjdXJyZW5jaWVzW2ldLm1heF9kZXBvc2l0O1xuICAgICAgICAgICAgICAgIHJhaWRvLndpdGhkcmF3X2ZlZSA9IGN1cnJlbmNpZXNbaV0ud2l0aGRyYXdfZmVlICogMTtcblxuICAgICAgICAgICAgICAgIHJhaWRvLmdpdmVfZGVjaW1hbCA9IGN1cnJlbmNpZXNbaV0uZGVjaW1hbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdFByaWNlcyh0aGlzLl9zZXRQcmljZXNSYWlkbyk7XG4gICAgfVxuXG4gICAgX2luaXRQcmljZXMoc3RhdGVDYWxsYmFjaykge1xuICAgICAgICBsZXQgcHJpY2VzID0gXCJodHRwczovL21lcmNoYW50LWRhdGFjZW50ZXIucmFpZG9maW5hbmNlLmV1OjgwOTUvcHJpY2VzL1wiO1xuXG4gICAgICAgIGZldGNoKHByaWNlcywge1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe0FjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaykgc3RhdGVDYWxsYmFjayhqc29uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0UHJpY2VzUmFpZG8ocHJpY2VzKSB7XG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG4gICAgICAgIGxldCBjdXJyZW5jaWVzID0gcmFpZG8uY3VycmVuY2llcztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW5jaWVzW2ldLmNvZGUgPT09IHJhaWRvLmdpdmVfcmF3KSB7XG4gICAgICAgICAgICAgICAgLy9pZiAoY3VycmVuY2llc1tpXS5jdXIgPT09IHJhaWRvLmdpdmVfcmF3KSB7XG4gICAgICAgICAgICAgICAgcmFpZG8uY29tbWlzc2lvbiA9IHBhcnNlRmxvYXQoY3VycmVuY2llc1tpXS5jb21taXNzaW9uKTtcbiAgICAgICAgICAgICAgICByYWlkby5pbl9mZWUgPSBwYXJzZUZsb2F0KGN1cnJlbmNpZXNbaV0uaW5fZmVlKTtcbiAgICAgICAgICAgICAgICByYWlkby5pbl9taW5fZmVlID0gcGFyc2VGbG9hdChjdXJyZW5jaWVzW2ldLmluX21pbl9mZWUpO1xuICAgICAgICAgICAgICAgIHJhaWRvLmdldF9kZWNpbWFsID0gY3VycmVuY2llc1tpXS5kZWNpbWFsO1xuICAgICAgICAgICAgICAgIHJhaWRvLmdpdmUgPSBjdXJyZW5jaWVzW2ldLmN1cjtcbiAgICAgICAgICAgICAgICByYWlkby5pbiA9IGN1cnJlbmNpZXNbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkb30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhaXIgPSByYWlkby5nZXQgKyBcIlwiICsgcmFpZG8uZ2l2ZTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHJhaWRvLmRpcmVjdGlvbjtcblxuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZXNbcGFpcl1bZGlyZWN0aW9uXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmljZTogXCIgKyBwcmljZSk7XG5cbiAgICAgICAgaWYgKHByaWNlKSB7XG4gICAgICAgICAgICByYWlkby5wcmljZSA9IHByaWNlICogMTtcbiAgICAgICAgICAgIHJhaWRvLnByaWNlcyA9IHByaWNlcztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvOiByYWlkb30pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXCJhdXRvXCIpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSh0eXBlLCBldmVudCkge1xuICAgICAgICBsZXQgbmFtZSwgdmFsdWU7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IFwiYXV0b1wiKSB7XG4gICAgICAgICAgICBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vRGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0b2dnbGUgc3RhdGljIGdldEFtb3VudFxuICAgICAgICAgICAgbmFtZSA9IFwiZ2V0QW1vdW50XCI7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUuZ2V0QW1vdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtnZXRBbW91bnQ6IFwiXCJ9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dpdmVBbW91bnQ6IFwiXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUgKiAxO1xuXG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG5cbiAgICAgICAgbGV0IHJlc19nZXRBbW91bnQ7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZ2l2ZUFtb3VudFwiKSB7XG4gICAgICAgICAgICByZXNfZ2V0QW1vdW50ID1cbiAgICAgICAgICAgICAgICB2YWx1ZSAvXG4gICAgICAgICAgICAgICAgKHJhaWRvLnByaWNlIC9cbiAgICAgICAgICAgICAgICAgICAgKCgxMDAgLSAocmFpZG8uY29tbWlzc2lvbiArIHJhaWRvLmluX2ZlZSkpIC8gMTAwKSk7XG4gICAgICAgICAgICBsZXQgcmVzX2dpdmVBbW91bnQgPSB2YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2V0QW1vdW50OlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzX2dldEFtb3VudCAtIHJhaWRvLndpdGhkcmF3X2ZlZSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCByYWlkby5naXZlX2RlY2ltYWwpXG4gICAgICAgICAgICAgICAgICAgICkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBnaXZlQW1vdW50OlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNfZ2l2ZUFtb3VudCAqIE1hdGgucG93KDEwLCByYWlkby5nZXRfZGVjaW1hbClcbiAgICAgICAgICAgICAgICAgICAgKSAvIE1hdGgucG93KDEwLCByYWlkby5nZXRfZGVjaW1hbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiZ2V0QW1vdW50XCIpIHtcbiAgICAgICAgICAgIHJlc19nZXRBbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCByZXNfZ2l2ZUFtb3VudCA9XG4gICAgICAgICAgICAgICAgKHJhaWRvLnByaWNlICogKHZhbHVlICsgcmFpZG8ud2l0aGRyYXdfZmVlKSkgL1xuICAgICAgICAgICAgICAgICAgICAoKDEwMCAtIChyYWlkby5jb21taXNzaW9uICsgcmFpZG8uaW5fZmVlKSkgLyAxMDApICtcbiAgICAgICAgICAgICAgICByYWlkby5pbl9taW5fZmVlO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBnZXRBbW91bnQ6XG4gICAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc19nZXRBbW91bnQgKiBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKVxuICAgICAgICAgICAgICAgICAgICApIC8gTWF0aC5wb3coMTAsIHJhaWRvLmdpdmVfZGVjaW1hbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2l2ZUFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzX2dpdmVBbW91bnQgKiBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpXG4gICAgICAgICAgICAgICAgICAgICkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlc19nZXRBbW91bnQgPj0gcmFpZG8ubWluX2RlcG9zaXQgJiZcbiAgICAgICAgICAgIChyYWlkby5tYXhfZGVwb3NpdCA9PSAwIHx8IHJlc19nZXRBbW91bnQgPD0gcmFpZG8ubWF4X2RlcG9zaXQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWluX21heF92YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0OiBcIm1pblwiIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0QWxsb3dlZDogdHJ1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlc19nZXRBbW91bnQgPj0gcmFpZG8ubWluX2RlcG9zaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWluX21heF92YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0OiBcIm1heFwiIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5fbWF4X3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6IFwibWluXCIgLy9NSU4gb3IgTUFYXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0QWxsb3dlZDogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFN0YXRlLnJhaWRvICE9PSB0aGlzLnN0YXRlLnJhaWRvIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZGVwb3NpdF9jb2luX3R5cGUgIT09IHRoaXMucHJvcHMuZ2V0QW1vdW50IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuZ2V0QW1vdW50ICE9PSB0aGlzLnN0YXRlLmdldEFtb3VudCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmdpdmVBbW91bnQgIT09IHRoaXMuc3RhdGUuZ2l2ZUFtb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnJlY2VpdmVfYXNzZXQgIT09IHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmRlcG9zaXRfYXNzZXRfbmFtZSAhPT0gdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY3Rpb24gIT09IHRoaXMucHJvcHMuYWN0aW9uIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudExvY2FsZSAhPT0gdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGF5bWVudE1ldGhvZChlKSB7XG4gICAgICAgIGxldCBwYXlNZXRob2QgPSBlLnRhcmdldFtcIm5hbWVcIl07XG4gICAgICAgIGxldCBzdHIgPSBcInBheW1lbnRtZXRob2RcIjtcbiAgICAgICAgcGF5TWV0aG9kID0gcGF5TWV0aG9kXG4gICAgICAgICAgICAuc3Vic3RyKHN0ci5sZW5ndGggKyAxLCBwYXlNZXRob2QubGVuZ3RoIC0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG4gICAgICAgIHJhaWRvLmdpdmVfcmF3ID0gcGF5TWV0aG9kO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JhaWRvOiByYWlkb30pO1xuXG4gICAgICAgIHRoaXMuX3NldFByaWNlc1JhaWRvKHRoaXMuc3RhdGUucmFpZG8ucHJpY2VzKTtcblxuICAgICAgICBsZXQgZmluZGluZ19lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbC5idG4tcmFkaW9cIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZGluZ19lbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmluZGluZ19lbFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZXRBY3RpdmVSYWlkb0NvaW4ocGF5TWV0aG9kKTtcbiAgICB9XG5cbiAgICBfZ2V0RGVwb3NpdE9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRDb2luVHlwZTogdGhpcy5wcm9wcy5yZWNlaXZlX2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dEFkZHJlc3M6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgc3RhdGVDYWxsYmFjazogdGhpcy5hZGREZXBvc2l0QWRkcmVzc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZERlcG9zaXRBZGRyZXNzKHJlY2VpdmVfYWRkcmVzcykge1xuICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnRfbmFtZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlX2FkZHJlc3N9KTtcbiAgICB9XG5cbiAgICBfbWFrZVVyaVJhaWRvKCkge1xuICAgICAgICBsZXQgc3RyVXJpID0gXCJcIjtcbiAgICAgICAgbGV0IHJhaWRvID0gdGhpcy5zdGF0ZS5yYWlkbztcbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xuXG4gICAgICAgIGxldCBvYmpQYXJhbXMgPSB7XG4gICAgICAgICAgICBhZmZpbGlhdGVfaWQ6IHJhaWRvLmFmZmlsaWF0ZV9pZCxcbiAgICAgICAgICAgIG9mZmVyX2lkOiAzLFxuICAgICAgICAgICAgdm9sdW1lOiB0aGlzLnN0YXRlLmdpdmVBbW91bnQsXG4gICAgICAgICAgICBpbjogcmFpZG8uaW4sXG4gICAgICAgICAgICBvdXQ6IHJhaWRvLm91dCxcbiAgICAgICAgICAgIFwib3V0LXBcIjogcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHJhaWRvLmRpcmVjdGlvblxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpdGVtIGluIG9ialBhcmFtcykge1xuICAgICAgICAgICAgc3RyVXJpICs9IFwiJlwiICsgaXRlbSArIFwiPVwiICsgb2JqUGFyYW1zW2l0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJVcmk7XG4gICAgfVxuXG4gICAgb25TdWJtaXRSZXF1ZXN0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogbnVsbH0pO1xuICAgICAgICBsZXQgcmFpZG9fbGluayA9XG4gICAgICAgICAgICBcImh0dHBzOi8vcmFpZG9maW5hbmNlLmV1L2J1eS1zZWxsP1wiICsgdGhpcy5fbWFrZVVyaVJhaWRvKCk7XG4gICAgICAgIHdpbmRvdy5vcGVuKHJhaWRvX2xpbmssIFwiX2JsYW5rXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVtcHR5Um93ID0gPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwiLCBtaW5IZWlnaHQ6IDE1MH19IC8+O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMucmVjZWl2ZV9hc3NldFxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXNfb2JqZWN0ID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YpIHtcbiAgICAgICAgICAgIGxldCBoYXNfbm9uemVyb19iYWxhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZV9vYmplY3RfaWQgPSBhY2NvdW50X2JhbGFuY2VzX29iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2Vfb2JqZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZV9vYmplY3RfaWQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IGJhbGFuY2Vfb2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlICE9IDApIGhhc19ub256ZXJvX2JhbGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzX25vbnplcm9fYmFsYW5jZSkgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuc3RhdGUucmVjZWl2ZV9hZGRyZXNzO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NvdW50X25hbWUgPT09IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGUgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nYXRld2F5LFxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzX2Zyb21fY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyA9IHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vcykge1xuICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVwb3NpdENvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMgJiYgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJpcnJldmVyc2libGVcIikge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubGFzdF9pcnJldmVyc2libGVcIiAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImJsb2Nrc1wiICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0Q29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5uX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3RoaXMucHJvcHMuY29uZmlybWF0aW9ucy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IG51bGw7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRHYXRld2F5ID0gXCJSVURFWFwiO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhIWF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5zaW1wbGVBc3NldEdhdGV3YXkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudH08L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICghcmVjZWl2ZV9hZGRyZXNzIHx8ICFyZWNlaXZlX2FkZHJlc3MuYWRkcmVzcykgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5zdXBwb3J0c01lbW9zXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjZWl2ZV9hZGRyZXNzLm1lbW8pIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgdW5pcXVlIGRlcG9zaXQgYWRkcmVzc2VzIHRvIHNlbGVjdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uZGVwb3NpdF9zdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmJ1eV9pbnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERFJFU1M6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnR9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBvc2l0Q29uZmlybWF0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aT57ZGVwb3NpdENvbmZpcm1hdGlvbn08L2k+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIiwgZm9udFNpemU6IFwiMS4xcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jb2wtMjQgcmFpZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW50LWNvbC0yNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfaWQ9e1wiY2FyZHVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJCYW5rIENhcmQgKFVTRClcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfaWQ9e1wiY2FyZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJCYW5rIENhcmQgKEVVUilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWRvUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfaWQ9e1wid2lyZWVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJTZXBhIChFVVIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLnJhaWRvLmdpdmVfcmF3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNvbC0xMCBnaXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ueW91X2dpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdpdmVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdpdmVBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2l2ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by55b3VfZ2l2ZV9wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtfX0JBU0VfVVJMX199aW1hZ2VzXFwvcmFpZG8tcGF5bWVudC0ke3RoaXMuc3RhdGUucmFpZG8uZ2l2ZV9yYXcudG9Mb3dlckNhc2UoKX0ucG5nKWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW50LWNvbC0xMCBnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjEwJVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnlvdV9nZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by55b3VfZ2V0X3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzXFwvcnVkZXguJHt0aGlzLnN0YXRlLnJhaWRvLmdldC50b0xvd2VyQ2FzZSgpfS5wbmcpYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5taW5fbWF4X3ZhbGlkYXRlLnZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmFpZG9fbWluX21heF92YWxpZGF0ZSBhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJhaWRvX21pbl9tYXhfdmFsaWRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5fbWF4X3ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpcmVjdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yYWlkb1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5fbWF4X3ZhbGlkYXRlLmRpcmVjdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdICogMX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmFpZG8uZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jb2wtMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhaWRvX3RleHRfYmxvY2tcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLndpdGhkcmF3X2ZlZV9pbmNsdWRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2ZlZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJhaWRvLndpdGhkcmF3X2ZlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLnJhaWRvLmdldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhaWRvX3RleHRfYmxvY2tcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmFwcHJveGltYXRlX2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFpZG9fdGV4dF9ibG9ja1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8uZmluYWxfdGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jb2wtMTAgYW50LWNvbC1vZmZzZXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnN1Ym1pdEFsbG93ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdWJtaXRBbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmJ1eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd19zdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShSYWlkb0RlcG9zaXRSZXF1ZXN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uLy4uLy4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHtcbiAgICBSZWNlbnRUcmFuc2FjdGlvbnMsXG4gICAgVHJhbnNhY3Rpb25XcmFwcGVyXG59IGZyb20gXCJjb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFwicmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1wiO1xuXG5pbXBvcnQgUmFpZG9EZXBvc2l0UmVxdWVzdCBmcm9tIFwiLi9SYWlkb0RlcG9zaXRSZXF1ZXN0XCI7XG5cbmNsYXNzIFJhaWRvRmluYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlQ29pbjogdGhpcy5fZ2V0QWN0aXZlQ29pbihwcm9wcywge2FjdGlvbjogXCJkZXBvc2l0XCJ9KSxcbiAgICAgICAgICAgIGFjdGlvbjogcHJvcHMudmlld1NldHRpbmdzLmdldChcInJ1ZGV4QWN0aW9uUmFpZG9cIiwgXCJkZXBvc2l0XCIpLFxuXG4gICAgICAgICAgICBhY3RpdmVQYXltZW50TWV0aG9kOiBcIkNBUkRFXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlUmFpZG9Db2luID0gdGhpcy5fc2V0QWN0aXZlUmFpZG9Db2luLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX3NldEFjdGl2ZVJhaWRvQ29pbihtZXRoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVBheW1lbnRNZXRob2Q6IG1ldGh9KTtcbiAgICB9XG5cbiAgICBfZ2V0QWN0aXZlQ29pbihwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgbGV0IGNhY2hlZENvaW47XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luO1xuICAgICAgICBsZXQgYWN0aXZlQ29pbjtcblxuICAgICAgICBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fUmFpZG9cIiwgXCJkZXBvc2l0XCIpO1xuICAgICAgICAvL2xldCBmaXJzdFRpbWVDb2luID0gXCJCVENcIjtcbiAgICAgICAgZmlyc3RUaW1lQ29pbiA9IHByb3BzLmNvaW5zWzBdO1xuXG4gICAgICAgIGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbi8qICAgICAgICBpZiAoc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW4gPSB0aGlzLl9maW5kQ29pbkJ5TmFtZShwcm9wcywgYWN0aXZlQ29pbikuc3ltYm9sO1xuICAgICAgICB9Ki9cblxuICAgICAgICByZXR1cm4gYWN0aXZlQ29pbjtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5wcm92aWRlciAhPT0gdGhpcy5wcm9wcy5wcm92aWRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29pbjogdGhpcy5fZ2V0QWN0aXZlQ29pbihuZXh0UHJvcHMsIHRoaXMuc3RhdGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0Q29pbihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlQ29pbjogZS52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBsZXQgY29pbk5hbWUgPSBlLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX1JhaWRvXCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVDb2luOiBhY3RpdmVDb2luXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7W1wicnVkZXhBY3Rpb25SYWlkb1wiXTogdHlwZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjb2lucywgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUNvaW4sIGFjdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghY29pbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyZWRDb2lucyA9IGNvaW5zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIGlmICghYSB8fCAhYS5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYS5kZXBvc2l0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICA6IGEud2l0aGRyYXdhbEFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luT3B0aW9ucyA9IGZpbHRlcmVkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZml4ID0gbmFtZSA9PT0gXCJQUFlcIiA/IFwiXCIgOiBcIlJVREVYLlwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJlZml4ICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW4gPSBmaWx0ZXJlZENvaW5zLmZpbHRlcihjb2luID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IGFjdGl2ZUNvaW5cbiAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sID09PSBhY3RpdmVDb2luO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAoIWNvaW4pIGNvaW4gPSBmaWx0ZXJlZENvaW5zWzBdO1xuXG4gICAgICAgIGxldCBpc0RlcG9zaXQgPSB0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IHN1cHBvcnRVcmwgPSBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbVwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5jaG9vc2VfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjoqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBzZWdtZW50ZWQgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZUFjdGlvbi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8udGl0bGVfdGFiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb0RlcG9zaXRSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29pbi5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17XCJydWRleFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17Y29pbi5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e2NvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfY29pbl90eXBlPXtjb2luLmJhY2tpbmdDb2luLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYWNjb3VudD17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UeXBlPXtjb2luLm1lbW9UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXtjb2luLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYXltZW50TWV0aG9kPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVJhaWRvQ29pbj17bSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0QWN0aXZlUmFpZG9Db2luKG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3VwcG9ydDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5zdXBwb3J0X2Jsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luICYmIGNvaW4uc3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Fzc2V0LCB0bywgZnJvbUFjY291bnR9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNMaXN0PXtJbW11dGFibGUuTGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucmVjZW50X1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB0by5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tQWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zYWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SYWlkb0ZpbmFuY2UuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQlRDXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCaXRjb2luIC0gQlRDXCIsXG4gICAgICAgICAgICBiYWNraW5nQ29pbjogXCJCVENcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5CVENcIixcbiAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIGlzc3VlcjogXCJydWRleC1iaXRjb2luXCIsXG4gICAgICAgICAgICBpc3N1ZXJJZDogXCIxLjIuOTU1XCIsXG4gICAgICAgICAgICAvL1wibWluQW1vdW50XCI6IDE4MDAwMCxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJsb2Nrc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJFVEhcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV0aGVyZXVtIC0gRVRIXCIsXG4gICAgICAgICAgICBiYWNraW5nQ29pbjogXCJFVEhcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5FVEhcIixcbiAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIGlzc3VlcjogXCJydWRleC1ldGhlcmV1bVwiLFxuICAgICAgICAgICAgaXNzdWVySWQ6IFwiMS4yLjk1NlwiLFxuICAgICAgICAgICAgLy9cIm1pbkFtb3VudFwiOiA1MDAwMDAsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiB7XG4gICAgICAgICAgICAgbmFtZTogXCJVU0RUXCIsXG4gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGV0aGVyIC0gVVNEVCAob24gRXRoZXJldW0pXCIsXG4gICAgICAgICAgICAgYmFja2luZ0NvaW46IFwiVVNEVFwiLFxuICAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgICAgICAgZGVwb3NpdEFsbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgICBpc3N1ZXI6IFwicnVkZXgtdXNkdFwiLFxuICAgICAgICAgICAgIGlzc3VlcklkOiBcIjEuMi45Mjc0NThcIixcbiAgICAgICAgICAgICAvL1wibWluQW1vdW50XCI6IDUwMDAwMCxcbiAgICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgIHR5cGU6IFwiYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOiAyMFxuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0qL1xuICAgIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUmFpZG9GaW5hbmNlLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBSYWlkb1BheW1lbnRNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3RpdGxlLCBwYXltZW50X2lkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZS50b0xvd2VyQ2FzZSgpID09XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnRfaWQudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgICAgICBjbGFzc05uYW1lID0gXCJhY3RpdmVcIjtcbiAgICAgICAgZWxzZSBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcImJ0biBidG4tc20gYnRuLXJhZGlvXCIgKyBcIiBcIiArIGNsYXNzTm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGF5bWVudG1ldGhvZC1cIiArIHBheW1lbnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfX0JBU0VfVVJMX199aW1hZ2VzL3JhaWRvLXBheW1lbnQtYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWlkb1BheW1lbnRNZXRob2Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0RlY2ltYWxDaGVja2VyfSBmcm9tIFwiLi9EZWNpbWFsQ2hlY2tlclwiO1xyXG5cclxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhc3NldCBpZFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5hc3NldHMsIHRoaXMucHJvcHMuYXNzZXRzKSB8fFxyXG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxyXG4gICAgICAgICAgICBucC5zY3JvbGxfbGVuZ3RoICE9PSB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXNzZXRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzPXt0aGlzLnByb3BzLmFzc2V0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYSA9PiBhICYmIGEuZ2V0KFwic3ltYm9sXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnByb3BzLmFzc2V0cy5yZWR1Y2UoKG1hcCwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhICYmIGEuZ2V0KFwic3ltYm9sXCIpKSBtYXBbYS5nZXQoXCJzeW1ib2xcIildID0gYTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgICAgICAgICAgfSwge30pfVxyXG4gICAgICAgICAgICAgICAgc2luZ2xlRW50cnk9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0c1swXS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17dGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0U2VsZWN0b3IgPSBBc3NldFdyYXBwZXIoQXNzZXRTZWxlY3Rvciwge2FzTGlzdDogdHJ1ZX0pO1xyXG5cclxuY2xhc3MgQW1vdW50U2VsZWN0b3IgZXh0ZW5kcyBEZWNpbWFsQ2hlY2tlciB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXHJcbiAgICAgICAgYXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgYW1vdW50OiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMub25Bc3NldENoYW5nZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRBbW91bnQodikge1xyXG4gICAgICAgIC8qLy8gVE9ETzogdXNlIGFzc2V0J3MgcHJlY2lzaW9uIHRvIGZvcm1hdCB0aGUgbnVtYmVyKi9cclxuICAgICAgICBpZiAoIXYpIHYgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikgdiA9IHYudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB2LnRyaW0oKS5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuZ2V0TnVtZXJpY0V2ZW50VmFsdWUoZSksXHJcbiAgICAgICAgICAgICAgICBhc3NldDogdGhpcy5wcm9wcy5hc3NldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2V0Q2hhbmdlKHNlbGVjdGVkX2Fzc2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0OiBzZWxlY3RlZF9hc3NldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNhbGxpbmcgQW1vdW50U2VsZWN0b3I6IFwiICsgdGhpcy5wcm9wcy5sYWJlbCArIHRoaXMucHJvcHMuYXNzZXQgKyB0aGlzLnByb3BzLmFzc2V0cyArIHRoaXMucHJvcHMuYW1vdW50ICsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciArIHRoaXMucHJvcHMuZXJyb3IpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMuZXJyb3JcclxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5lcnJvcilcclxuICAgICAgICAgICAgOiB0aGlzLmZvcm1hdEFtb3VudCh0aGlzLnByb3BzLmFtb3VudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJpZ2h0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheV9iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhc3RlPXt0aGlzLnByb3BzLm9uUGFzdGUgfHwgdGhpcy5vblBhc3RlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNQcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX0vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e0ltbXV0YWJsZS5MaXN0KHRoaXMucHJvcHMuYXNzZXRzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFzc2V0Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17dGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkFtb3VudFNlbGVjdG9yID0gQXNzZXRXcmFwcGVyKEFtb3VudFNlbGVjdG9yKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFtb3VudFNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge2dldEltYWdlTmFtZX0gZnJvbSBcImJyYW5kaW5nXCI7XG5cbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxuICAgICAgICBtYXhXaWR0aDogMjBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID1cbiAgICAgICAgICAgICAgICAgICAgXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VXcmFwcGVyKGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoYXNzZXQgPT09IG51bGwpIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VOYW1lKHN5bWJvbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VXcmFwcGVyKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0vPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiA5XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbF9sZW5ndGggPSBwcm9wcy5zY3JvbGxfbGVuZ3RoO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQm9keUNsaWNrID0gdGhpcy5vbkJvZHlDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5lbnRyaWVzLCB0aGlzLnByb3BzLmVudHJpZXMpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9zZXRMaXN0ZW5lcihwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmVudHJpZXMubGVuZ3RoID4gMSAmJiAhdGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQm9keUNsaWNrLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2spO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLmVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG5wLmVudHJpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIobnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgb25Cb2R5Q2xpY2soZSkge1xuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IGluc2lkZUFjdGlvblNoZWV0ID0gZmFsc2U7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdCAmJlxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duXCIpICYmXG4gICAgICAgICAgICAgICAgZWwuaWQgPT09IHRoaXMucHJvcHMuaWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGluc2lkZUFjdGlvblNoZWV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuXG4gICAgICAgIGlmICghaW5zaWRlQWN0aW9uU2hlZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZURyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2VudHJpZXMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW5nbGVFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5zaW5nbGVFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cmllc1swXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBlbnRyaWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMudXBwZXJDYXNlID8gXCJ1cHBlci1jYXNlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24td3JhcHBlclwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUgPyB2YWx1ZSA6IDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPkE8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLmxlbmd0aCA+IHRoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBEaXNhYmxlQ29weVRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBkaXNhYmxlQ29weTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgcmVwbGFjZUNvcHlUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVDb3B5ID0gdGhpcy5faGFuZGxlQ29weS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkUmVmKSB0aGlzLm5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmNoaWxkUmVmKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSAmJiB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5faGFuZGxlQ29weSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLl9oYW5kbGVDb3B5KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlQ29weShldnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlQ29weSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZUNvcHlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBldnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC9wbGFpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwbGFjZUNvcHlUZXh0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIHJlZj17cmVmID0+ICh0aGlzLmNoaWxkUmVmID0gcmVmKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2FibGVDb3B5VGV4dDtcclxuIiwiaW1wb3J0IGxzIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtydWRleEFQSXMsIGJlcDIwcnVkZXhBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xuY29uc3QgcnVkZXhTdG9yYWdlID0gbHMoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvaW5MaXN0KHVybCA9IHJ1ZGV4QVBJcy5CQVNFICsgcnVkZXhBUElzLkNPSU5TX0xJU1QpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kOiBcInBvc3RcIn0pXG4gICAgICAgIC50aGVuKHJlcGx5ID0+XG4gICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmZXRjaGluZyBydWRleCBsaXN0IG9mIGNvaW5zXCIsIGVyciwgdXJsKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGVwb3NpdEFkZHJlc3Moe1xuICAgIHdhbGxldFR5cGUsXG4gICAgaW5wdXRDb2luVHlwZSxcbiAgICBvdXRwdXRDb2luVHlwZSxcbiAgICBvdXRwdXRBZGRyZXNzLFxuICAgIC8vdXJsID0gcnVkZXhBUElzLkJBU0UsXG4gICAgdXJsID0gcnVkZXhBUElzLFxuICAgIHN0YXRlQ2FsbGJhY2tcbn0pIHtcbiAgICBsZXQgYm9keSA9IHtcbiAgICAgICAgd2FsbGV0VHlwZSxcbiAgICAgICAgaW5wdXRDb2luVHlwZSxcbiAgICAgICAgb3V0cHV0Q29pblR5cGUsXG4gICAgICAgIG91dHB1dEFkZHJlc3NcbiAgICB9O1xuXG4gICAgbGV0IGJvZHlfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICBpZiAod2FsbGV0VHlwZSA9PT0gXCJic2MtdG9rZW5zXCIpIHtcbiAgICAgICAgdXJsID0gYmVwMjBydWRleEFQSXM7XG4gICAgfVxuXG4gICAgLy9mZXRjaCh1cmwgKyBydWRleEFQSXMuTkVXX0RFUE9TSVRfQUREUkVTUywge1xuICAgIGZldGNoKHVybC5CQVNFICsgdXJsLk5FV19ERVBPU0lUX0FERFJFU1MsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBib2R5X3N0cmluZ1xuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInJlcGx5OiBcIiwganNvbiApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBqc29uLmlucHV0QWRkcmVzcyB8fCBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vOiBqc29uLmlucHV0TWVtbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoganNvbi5lcnJvciB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcImVycm9yOiBcIixlcnJvciAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWRkcmVzcyh7XG4gICAgLy91cmwgPSBydWRleEFQSXMuQkFTRSxcbiAgICB1cmwgPSBydWRleEFQSXMsXG4gICAgd2FsbGV0VHlwZSxcbiAgICBuZXdBZGRyZXNzXG59KSB7XG4gICAgaWYgKHdhbGxldFR5cGUgPT09IFwiYnNjLXRva2Vuc1wiKSB7XG4gICAgICAgIHVybCA9IGJlcDIwcnVkZXhBUElzO1xuICAgIH1cblxuICAgIGlmICghbmV3QWRkcmVzcykgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiByZXMoKSk7XG4gICAgcmV0dXJuIGZldGNoKHVybC5CQVNFICsgXCIvd2FsbGV0cy9cIiArIHdhbGxldFR5cGUgKyBcIi9jaGVjay1hZGRyZXNzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7YWRkcmVzczogbmV3QWRkcmVzc30pXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVwbHkgPT4gcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiBqc29uKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzV2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5oYXMoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gKTtcbn1cblxuZnVuY3Rpb24gc2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh7d2FsbGV0LCBhZGRyZXNzZXN9KSB7XG4gICAgcnVkZXhTdG9yYWdlLnNldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIGFkZHJlc3Nlcyk7XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhkcmF3YWxBZGRyZXNzZXMod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyh7d2FsbGV0LCBhZGRyZXNzfSkge1xuICAgIHJ1ZGV4U3RvcmFnZS5zZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIGFkZHJlc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIFwiXCIpO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aGRyYXdBZGRyZXNzZXMgPSB7XG4gICAgaGFzOiBoYXNXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBzZXQ6IHNldFdpdGhkcmF3YWxBZGRyZXNzZXMsXG4gICAgZ2V0OiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxuICAgIHNldExhc3Q6IHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBnZXRMYXN0OiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Ncbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvcHlUb0NsaXBib2FyZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNvcHktdG8tY2xpcGJvYXJkXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ29weVRvQ2xpcGJvYXJkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29weVRvQ2xpcGJvYXJkLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29weVRvQ2xpcGJvYXJkKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlUb0NsaXBib2FyZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihDb3B5VG9DbGlwYm9hcmQpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzLnRleHQsXG4gICAgICAgICAgb25Db3B5ID0gX3RoaXMkcHJvcHMub25Db3B5LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzLm9wdGlvbnM7XG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBfY29weVRvQ2xpcGJvYXJkW1wiZGVmYXVsdFwiXSkodGV4dCwgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChvbkNvcHkpIHtcbiAgICAgICAgb25Db3B5KHRleHQsIHJlc3VsdCk7XG4gICAgICB9IC8vIEJ5cGFzcyBvbkNsaWNrIGlmIGl0IHdhcyBwcmVzZW50XG5cblxuICAgICAgaWYgKGVsZW0gJiYgZWxlbS5wcm9wcyAmJiB0eXBlb2YgZWxlbS5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsZW0ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29weVRvQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RleHQgPSBfdGhpcyRwcm9wczIudGV4dCxcbiAgICAgICAgICBfb25Db3B5ID0gX3RoaXMkcHJvcHMyLm9uQ29weSxcbiAgICAgICAgICBfb3B0aW9ucyA9IF90aGlzJHByb3BzMi5vcHRpb25zLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1widGV4dFwiLCBcIm9uQ29weVwiLCBcIm9wdGlvbnNcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGVsZW0sIF9vYmplY3RTcHJlYWQoe30sIHByb3BzLCB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja1xuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb3B5VG9DbGlwYm9hcmQ7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gQ29weVRvQ2xpcGJvYXJkO1xuXG5fZGVmaW5lUHJvcGVydHkoQ29weVRvQ2xpcGJvYXJkLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIG9uQ29weTogdW5kZWZpbmVkLFxuICBvcHRpb25zOiB1bmRlZmluZWRcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpLFxuICAgIENvcHlUb0NsaXBib2FyZCA9IF9yZXF1aXJlLkNvcHlUb0NsaXBib2FyZDtcblxuQ29weVRvQ2xpcGJvYXJkLkNvcHlUb0NsaXBib2FyZCA9IENvcHlUb0NsaXBib2FyZDtcbm1vZHVsZS5leHBvcnRzID0gQ29weVRvQ2xpcGJvYXJkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==