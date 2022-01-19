"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[9],{

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2052);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2081);





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

/***/ 2869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(595);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2058);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1927);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2098);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(578);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(645);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(646);
/* harmony import */ var _DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2870);
/* harmony import */ var _DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2878);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2053);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2076);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Modal_DepositModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2274);
/* harmony import */ var _Modal_WithdrawModalNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2309);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2400);







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
      activeService: props.viewSettings.get("activeService", 0),
      RudexNotice1Informed: false,
      RudexNotice1Informed_BuyCrypto: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.account !== this.props.account || nextProps.servicesDown !== this.props.servicesDown || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.citadelBackedCoins, this.props.citadelBackedCoins) || nextState.rudexService !== this.state.rudexService || nextState.activeService !== this.state.activeService || nextState.RudexNotice1Informed !== this.state.RudexNotice1Informed || nextState.RudexNotice1Informed_BuyCrypto !== this.state.RudexNotice1Informed_BuyCrypto || nextProps.currentLocale !== this.props.currentLocale;
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

  onRudexNotice1Informed() {
    this.setState({
      RudexNotice1Informed: !this.state.RudexNotice1Informed
    });
  }

  onRudexNotice1Informed_BuyCrypto() {
    this.setState({
      RudexNotice1Informed_BuyCrypto: !this.state.RudexNotice1Informed_BuyCrypto
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

  onSetService(e) {
    //let index = this.state.services.indexOf(e.target.value);
    this.setState({
      activeService: parseInt(e.target.value)
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
      activeService: parseInt(e.target.value)
    });
  }

  renderServices(rudexGatewayCoins) {
    //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
    let serList = [];
    let {
      account
    } = this.props;
    let {
      rudexService,
      RudexNotice1Informed,
      RudexNotice1Informed_BuyCrypto
    } = this.state;
    let agreement_ru = "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза";
    let agreement_en = "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement";
    serList.push({
      name: "RuDEX (RUDEX.X)",
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
        defaultChecked: this.state.RudexNotice1Informed,
        onChange: this.onRudexNotice1Informed.bind(this)
      }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.rudex.rudex_notice1_informed"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), RudexNotice1Informed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DepositWithdraw_rudex_RuDexGateway__WEBPACK_IMPORTED_MODULE_12__["default"], {
        account: account,
        coins: rudexGatewayCoins
      }) : null) : null, rudexService === "fiat" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "https://merchant.raidofinance.eu/media/83eef3d5a17bf300af9986e913c2c99d.pdf",
        content: "gateway.rudex.rudex_notice_third_party",
        component: "a",
        target: "_blank"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.RudexNotice1Informed_BuyCrypto,
        onChange: this.onRudexNotice1Informed_BuyCrypto.bind(this)
      }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "gateway.rudex.rudex_notice1_informed_third_party_service"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), RudexNotice1Informed_BuyCrypto ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DepositWithdraw_rudex_raido_RaidoFinance__WEBPACK_IMPORTED_MODULE_13__["default"], {
        account: account
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
    let services = this.renderServices(rudexGatewayCoins);
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

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1928);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
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

/***/ 2870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _RuDexGatewayDepositRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2871);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1804);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(645);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(646);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2662);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2814);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1905);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2773);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2758);














class RuDexGateway extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      activeCoin: this._getActiveCoin(props, {
        action: "deposit"
      }),
      action: props.viewSettings.get("rudexAction", "deposit")
    };
  }

  _getActiveCoin(props, state) {
    let cachedCoin = props.viewSettings.get("activeCoin_rudex", null);
    let firstTimeCoin = "RUDEX.GOLOS";
    let activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;

    if (state.action === "withdraw") {
      activeCoin = this._findCoinByName(props, activeCoin).symbol;
    }

    return activeCoin;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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


  onSelectCoin(e) {
    this.setState({
      activeCoin: e.value
    });
    let setting = {};
    let coinName = e.value;

    if (this.state.action === "withdraw") {
      coinName = this._findCoinBySymbol(this.props, coinName).backingCoin;
    }

    setting["activeCoin_rudex"] = coinName;
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

/***/ 2871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var _DisableCopyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2872);
/* harmony import */ var _RuDexWithdrawModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2873);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2875);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2275);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2874);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2052);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2374);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2876);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2056);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2289);
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
        minAmount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
        symbol: this.props.deposit_coin_type
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "left-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "gateway.rudex.min_amount_warn",
        minAmount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
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

/***/ 2873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var components_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2081);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2796);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(594);
/* harmony import */ var common_RuDexMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2874);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1804);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(645);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(426);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(625);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(626);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* provided dependency */ var Buffer = __webpack_require__(432)["Buffer"];



















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
      minAmount: common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.props.min_amount / common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_precision(this.props.asset_precision), this.props.asset_precision, false),
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

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var lib_common_RuDexMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var _Account_AccountBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2875);
/* harmony import */ var common_RuDexDepositAddressCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2275);
/* harmony import */ var components_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2052);
/* harmony import */ var components_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2374);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lib_common_gateways__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2056);
/* harmony import */ var _RaidoPaymentMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2880);
/* harmony import */ var _Raido_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2881);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(612);
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

/***/ 2878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(645);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(646);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2662);
/* harmony import */ var components_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2814);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1905);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2773);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2758);
/* harmony import */ var _RaidoDepositRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2879);














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
    let cachedCoin = props.viewSettings.get("activeCoin_Raido", null);
    let firstTimeCoin = "BTC";
    let activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;

    if (state.action === "withdraw") {
      activeCoin = this._findCoinByName(props, activeCoin).symbol;
    }

    return activeCoin;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.provider !== this.props.provider) {
      this.setState({
        activeCoin: this._getActiveCoin(nextProps, this.state.action)
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

/***/ 2880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);


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

/***/ 2796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2082);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2699);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2049);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(596);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _DecimalChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2050);











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

/***/ 2662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2663);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
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

    function getImageName(asset) {
      if (asset === null) return null;
      let symbol = asset.get("symbol");
      return symbol;
    }

    const imgName = getImageName(asset);
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

/***/ 2699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
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

/***/ 2872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(420);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
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

/***/ 2874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCoinList": () => (/* binding */ fetchCoinList),
/* harmony export */   "requestDepositAddress": () => (/* binding */ requestDepositAddress),
/* harmony export */   "validateAddress": () => (/* binding */ validateAddress),
/* harmony export */   "WithdrawAddresses": () => (/* binding */ WithdrawAddresses)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(651);


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
  inputCoinType,
  outputCoinType,
  outputAddress,
  url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs.BASE,
  stateCallback
}) {
  let body = {
    inputCoinType,
    outputCoinType,
    outputAddress
  };
  let body_string = JSON.stringify(body);
  fetch(url + api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs.NEW_DEPOSIT_ADDRESS, {
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
  url = api_apiConfig__WEBPACK_IMPORTED_MODULE_1__.rudexAPIs.BASE,
  walletType,
  newAddress
}) {
  if (!newAddress) return new Promise(res => res());
  return fetch(url + "/wallets/" + walletType + "/check-address", {
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

/***/ 2877:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(417));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(1439));

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

/***/ 2876:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _require = __webpack_require__(2877),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC13aXRoZHJhdy4zYjhiMWQzMGIwNjAyM2I1MDEyNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUZBO0FBTUE7O0FBOUJBOztBQWlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQXVCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBSUE7QUFMQTtBQVlBO0FBQUE7QUFJQTtBQUlBO0FBTEE7QUFXQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFhQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBYUE7QUFDQTtBQUdBO0FBTEE7QUFVQTtBQUFBO0FBT0E7QUFDQTtBQUZBO0FBWUE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFJQTtBQU5BO0FBV0E7QUFBQTtBQU1BO0FBQUE7QUEvSEE7QUF1SUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQW9EQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFhQTs7QUFsYUE7O0FBb2FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFQQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBaENBO0FBa0NBOztBQXZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7O0FBekJBOztBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUtBOztBQS9DQTs7QUFpREE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQVBBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBYUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFEQTtBQU9BO0FBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFjQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBTUE7QUFEQTtBQU1BO0FBQUE7QUFJQTtBQURBO0FBTUE7QUFEQTtBQU1BO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBMEJBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWFBO0FBQ0E7QUFLQTtBQVBBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBaEJBO0FBOEJBO0FBT0E7O0FBclRBOztBQXdUQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBOztBQXdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUlBO0FBR0E7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBV0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBR0E7QUFKQTtBQVVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFTQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQURBO0FBU0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBR0E7QUFHQTtBQVBBO0FBZ0JBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQVZBO0FBY0E7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQVZBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBT0E7QUFEQTtBQWFBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFRQTtBQURBO0FBV0E7QUFDQTtBQUZBO0FBT0E7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBYkE7QUFlQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFHQTtBQUpBO0FBVUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBWUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFEQTtBQVNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUdBO0FBR0E7QUFQQTtBQWtCQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUErQkE7QUFDQTs7QUFsdEJBOztBQXF0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBZkE7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzd2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7O0FBa0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBeEJBOztBQTJCQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BOztBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFTQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBYUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBa0JBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBaUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUtBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUdBOztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUF2QkE7QUEwQkE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7OztBQUdBO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFRQTtBQVZBO0FBa0JBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBYUE7QUFoQkE7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFTQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFWQTtBQXVCQTtBQU1BO0FBQ0E7QUFSQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFXQTs7QUFqNkJBOztBQW82QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3o3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUEzQkE7QUFqQkE7QUFnREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFNQTs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFEQTtBQU1BOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBU0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTs7QUFFQTtBQUVBOztBQUNBO0FBSUE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBMERBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFTQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFHQTtBQUdBO0FBUEE7QUFnQkE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBWEE7QUFrQkE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBWEE7QUFnQkE7QUFEQTtBQVFBO0FBREE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBR0E7QUFKQTtBQVVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFTQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFHQTtBQUdBO0FBUEE7QUFlQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBOztBQXowQkE7O0FBNDBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDLzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQWFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBc0NBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFsQkE7QUFzQkE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBYUE7QUFDQTtBQUtBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFoQkE7QUE4QkE7QUFPQTs7QUEvU0E7O0FBa1RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBREE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFSQTs7Ozs7Ozs7Ozs7O0FDM1hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFEQTtBQVVBOztBQW5DQTs7QUFzQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBOztBQXpDQTs7QUE0Q0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWUE7O0FBL0ZBOztBQWlHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQVlBOztBQWhFQTs7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFhQTtBQUNBOztBQTVKQTs7QUErSkE7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBOztBQTVDQTs7QUErQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnRCYWxhbmNlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnREZXBvc2l0V2l0aGRyYXcuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXkuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9SdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L1J1RGV4V2l0aGRyYXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L3J1ZGV4L3JhaWRvL1JhaWRvRGVwb3NpdFJlcXVlc3QuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb0ZpbmFuY2UuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9ydWRleC9yYWlkby9SYWlkb1BheW1lbnRNZXRob2QuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9GbG9hdGluZ0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvRGlzYWJsZUNvcHlUZXh0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvY29tbW9uL1J1RGV4TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiAgR2l2ZW4gYSBiYWxhbmNlX29iamVjdCwgZGlzcGxheXMgaXQgaW4gYSBwcmV0dHkgd2F5XHJcbiAqXHJcbiAqICBFeHBlY3RzIG9uZSBwcm9wZXJ0eSwgJ2JhbGFuY2UnIHdoaWNoIHNob3VsZCBiZSBhIGJhbGFuY2Vfb2JqZWN0IGlkXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudEJhbGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgYXNzZXRfaWQgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGxldCBiYWxhbmNlX2lkID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0X2lkXSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxhbmNlX2lkKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgMCZuYnNwOzxBc3NldE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRCYWxhbmNlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IHt1cGRhdGVHYXRld2F5QmFja2Vyc30gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG4vL2ltcG9ydCBPcGVubGVkZ2VyR2F0ZXdheSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L09wZW5sZWRnZXJHYXRld2F5XCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9PcGVuTGVkZ2VyRmlhdERlcG9zaXRXaXRoZHJhd2FsXCI7XG4vL2ltcG9ydCBPcGVuTGVkZ2VyRmlhdFRyYW5zYWN0aW9uSGlzdG9yeSBmcm9tIFwiLi4vRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvT3BlbkxlZGdlckZpYXRUcmFuc2FjdGlvbkhpc3RvcnlcIjtcbi8vaW1wb3J0IEJsb2NrVHJhZGVzQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9ibG9ja3RyYWRlcy9CbG9ja1RyYWRlc0JyaWRnZURlcG9zaXRSZXF1ZXN0XCI7XG4vL2ltcG9ydCBDaXRhZGVsQnJpZGdlRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4uL0RlcG9zaXRXaXRoZHJhdy9jaXRhZGVsL0NpdGFkZWxCcmlkZ2VEZXBvc2l0UmVxdWVzdFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5IGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvUnVEZXhHYXRld2F5XCI7XG5pbXBvcnQgUmFpZG9GaW5hbmNlIGZyb20gXCIuLi9EZXBvc2l0V2l0aGRyYXcvcnVkZXgvcmFpZG8vUmFpZG9GaW5hbmNlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRGVwb3NpdE1vZGFsIGZyb20gXCIuLi9Nb2RhbC9EZXBvc2l0TW9kYWxcIjtcbmltcG9ydCBXaXRoZHJhd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9XaXRoZHJhd01vZGFsTmV3XCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuXG5jbGFzcyBBY2NvdW50RGVwb3NpdFdpdGhkcmF3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjb250YWluZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZTogcHJvcHMudmlld1NldHRpbmdzLmdldChcInJ1ZGV4U2VydmljZVwiLCBcImdhdGV3YXlcIiksXG4gICAgICAgICAgICBhY3RpdmVTZXJ2aWNlOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlU2VydmljZVwiLCAwKSxcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0bzogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5zZXJ2aWNlc0Rvd24gIT09IHRoaXMucHJvcHMuc2VydmljZXNEb3duIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrVHJhZGVzQmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ibG9ja1RyYWRlc0JhY2tlZENvaW5zXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLm9wZW5MZWRnZXJCYWNrZWRDb2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wZW5MZWRnZXJCYWNrZWRDb2luc1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jaXRhZGVsQmFja2VkQ29pbnMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaXRhZGVsQmFja2VkQ29pbnNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5ydWRleFNlcnZpY2UgIT09IHRoaXMuc3RhdGUucnVkZXhTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYWN0aXZlU2VydmljZSAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVTZXJ2aWNlIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuUnVkZXhOb3RpY2UxSW5mb3JtZWQgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0byAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0byB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRMb2NhbGUgIT09IHRoaXMucHJvcHMuY3VycmVudExvY2FsZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFjY291bnRVdGlscy5nZXRGaW5hbEZlZUFzc2V0KHRoaXMucHJvcHMuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPTFNlcnZpY2Uoc2VydmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9sU2VydmljZTogc2VydmljZVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb2xTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLlJ1ZGV4Tm90aWNlMUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0bzogIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAuUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVJ1REVYU2VydmljZShzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcnVkZXhTZXJ2aWNlOiBzZXJ2aWNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBydWRleFNlcnZpY2U6IHNlcnZpY2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TZXRTZXJ2aWNlKGUpIHtcbiAgICAgICAgLy9sZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlcnZpY2VzLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNlcnZpY2U6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlU2VydmljZTogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNlcnZpY2VzKHJ1ZGV4R2F0ZXdheUNvaW5zKSB7XG4gICAgICAgIC8vbGV0IHNlcnZpY2VzID0gW1wiT3BlbmxlZGdlciAoT1BFTi5YKVwiLCBcIkJsb2NrVHJhZGVzIChUUkFERS5YKVwiLCBcIlRyYW5zd2lzZXJcIiwgXCJCaXRLYXBpdGFsXCJdO1xuICAgICAgICBsZXQgc2VyTGlzdCA9IFtdO1xuICAgICAgICBsZXQge2FjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHJ1ZGV4U2VydmljZSxcbiAgICAgICAgICAgIFJ1ZGV4Tm90aWNlMUluZm9ybWVkLFxuICAgICAgICAgICAgUnVkZXhOb3RpY2UxSW5mb3JtZWRfQnV5Q3J5cHRvXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBhZ3JlZW1lbnRfcnUgPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDctY9C+0LPQu9Cw0YjQtdC90LjQtS3QvtCxLdC+0LrQsNC30LDQvdC40Lgt0YPRgdC70YPQsy3RiNC70Y7Qt9CwXCI7XG4gICAgICAgIGxldCBhZ3JlZW1lbnRfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDUtZ2F0ZXdheS1zZXJ2aWNlLWFncmVlbWVudFwiO1xuXG4gICAgICAgIHNlckxpc3QucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcIlJ1REVYIChSVURFWC5YKVwiLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogXCJSVURFWFwiLFxuICAgICAgICAgICAgdGVtcGxhdGU6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIHNlZ21lbnRlZCBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVSdURFWFNlcnZpY2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVkZXhTZXJ2aWNlID09PSBcImdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJ1REVYU2VydmljZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWRleFNlcnZpY2UgPT09IFwiZmlhdFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0I0Yld4dWN6cGpZejBpYUhSMGNEb3ZMMk55WldGMGFYWmxZMjl0Ylc5dWN5NXZjbWN2Ym5Naklnb2dJQ0I0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pQ2lBZ0lIaHRiRzV6T25OMlp6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUFnSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2RtVnljMmx2YmowaU1TNHhJZ29nSUNCcFpEMGljM1puTVRBek1EWWlDaUFnSUhacFpYZENiM2c5SWpBZ01DQTFNREF1TURBd01ERWdNVFl5TGpneE5UazBJZ29nSUNBK0NpQWdQR1JsWm5NS0lDQWdJQ0JwWkQwaVpHVm1jekV3TXpBNElqNEtJQ0FnSUR4amJHbHdVR0YwYUFvZ0lDQWdJQ0FnYVdROUltTnNhWEJRWVhSb01UQXlOekVpQ2lBZ0lDQWdJQ0JqYkdsd1VHRjBhRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0NpQWdJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQWdJR2xrUFNKd1lYUm9NVEF5TnpNaUNpQWdJQ0FnSUNBZ0lHUTlJbTBnTkRFekxqYzBNaXc1TUM0ME16VWdZeUF0TUM0d05UY3NMVFF1TkRrMElEUXVNREExTEMwM0xqQXdNaUEzTGpBMk5Td3RPQzQwT1RNZ015NHhORFFzTFRFdU5UTWdOQzR5TEMweUxqVXhNU0EwTGpFNE9Dd3RNeTQ0TnprZ0xUQXVNREkwTEMweUxqQTVOQ0F0TWk0MU1EZ3NMVE11TURFNElDMDBMamd6TXl3dE15NHdOVFFnTFRRdU1EVTJMQzB3TGpBMk15QXROaTQwTVRRc01TNHdPVFVnTFRndU1qZzVMREV1T1RjeElHd2dMVEV1TkRZeExDMDJMamd6TnlCaklERXVPRGd4TEMwd0xqZzJOeUExTGpNMk5Dd3RNUzQyTWpNZ09DNDVOellzTFRFdU5qVTJJRGd1TkRjNExEQWdNVFF1TURJMUxEUXVNVGcxSURFMExqQTFOU3d4TUM0Mk56UWdNQzR3TXpNc09DNHlNelVnTFRFeExqTTVNU3c0TGpZNU1TQXRNVEV1TXpFekxERXlMak0zTWlBd0xqQXlOeXd4TGpFeE5pQXhMakE1TWl3eUxqTXdOeUF6TGpReU5pd3lMall4SURFdU1UVTFMREF1TVRVeklEUXVNelEwTERBdU1qY2dOeTQ1TlRrc0xURXVNemsxSUd3Z01TNDBNVGtzTmk0Mk1UVWdZeUF0TVM0NU5EUXNNQzQzTURnZ0xUUXVORFF6TERFdU16ZzJJQzAzTGpVMU5Dd3hMak00TmlBdE55NDVPQ3d3SUMweE15NDFPVE1zTFRRdU1qUXlJQzB4TXk0Mk16Z3NMVEV3TGpNeE5DQnRJRE0wTGpneU55dzVMamMwTkNCaklDMHhMalUwT0N3d0lDMHlMamcxTXl3dE1DNDVNRE1nTFRNdU5ETTFMQzB5TGpJNE9TQnNJQzB4TWk0eE1URXNMVEk0TGpreE55QTRMalEzTWl3d0lERXVOamcyTERRdU5qVTVJREV3TGpNMU15d3dJREF1T1RjNExDMDBMalkxT1NBM0xqUTJOeXd3SUMwMkxqVXhOaXd6TVM0eU1EWWdMVFl1T0RrMExEQWdiU0F4TGpFNE5Td3RPQzQwTXlBeUxqUTBOU3d0TVRFdU56RTRJQzAyTGpZNU5pd3dJRFF1TWpVeExERXhMamN4T0NCdElDMDBOaTR5T0RRc09DNDBNeUF0Tmk0Mk56Z3NMVE14TGpJd05pQTRMakEzTXl3d0lEWXVOamMxTERNeExqSXdOaUF0T0M0d055d3dJRzBnTFRFeExqazBNeXd3SUMwNExqUXdNeXd0TWpFdU1qUWdMVE11TXprNUxERTRMakEySUdNZ0xUQXVNems1TERJdU1ERTJJQzB4TGprM05Dd3pMakU0SUMwekxqY3lNeXd6TGpFNElHd2dMVEV6TGpjek55d3dJQzB3TGpFNU1pd3RNQzQ1TURZZ1l5QXlMamd5TEMwd0xqWXhNaUEyTGpBeU5Dd3RNUzQxT1RrZ055NDVOalVzTFRJdU5qVTFJREV1TVRnNExDMHdMalkwTlNBeExqVXlOeXd0TVM0eU1Ea2dNUzQ1TVRjc0xUSXVOelF5SUd3Z05pNDBNemdzTFRJMExqa3dNeUE0TGpVek1pd3dJREV6TGpBNExETXhMakl3TmlBdE9DNDBOemdzTUNJZ0x6NEtJQ0FnSUR3dlkyeHBjRkJoZEdnK0NpQWdJQ0E4YkdsdVpXRnlSM0poWkdsbGJuUUtJQ0FnSUNBZ0lHbGtQU0pzYVc1bFlYSkhjbUZrYVdWdWRERXdNamMzSWdvZ0lDQWdJQ0FnYzNCeVpXRmtUV1YwYUc5a1BTSndZV1FpQ2lBZ0lDQWdJQ0JuY21Ga2FXVnVkRlJ5WVc1elptOXliVDBpYldGMGNtbDRLRGcwTGpFNU9UVXNNekV1TURBNE9Dd3pNUzR3TURnNExDMDROQzR4T1RrMUxERTVMalV4TWl3dE1qY3VOREU1TWlraUNpQWdJQ0FnSUNCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSUtJQ0FnSUNBZ0lIa3lQU0l3SWdvZ0lDQWdJQ0FnZURJOUlqRWlDaUFnSUNBZ0lDQjVNVDBpTUNJS0lDQWdJQ0FnSUhneFBTSXdJajRLSUNBZ0lDQWdQSE4wYjNBS0lDQWdJQ0FnSUNBZ2FXUTlJbk4wYjNBeE1ESTNPU0lLSUNBZ0lDQWdJQ0FnYjJabWMyVjBQU0l3SWdvZ0lDQWdJQ0FnSUNCemRIbHNaVDBpYzNSdmNDMXZjR0ZqYVhSNU9qRTdjM1J2Y0MxamIyeHZjam9qTWpJeU16VTNJaUF2UGdvZ0lDQWdJQ0E4YzNSdmNBb2dJQ0FnSUNBZ0lDQnBaRDBpYzNSdmNERXdNamd4SWdvZ0lDQWdJQ0FnSUNCdlptWnpaWFE5SWpFaUNpQWdJQ0FnSUNBZ0lITjBlV3hsUFNKemRHOXdMVzl3WVdOcGRIazZNVHR6ZEc5d0xXTnZiRzl5T2lNeU5UUmhZVFVpSUM4K0NpQWdJQ0E4TDJ4cGJtVmhja2R5WVdScFpXNTBQZ29nSUR3dlpHVm1jejRLSUNBOGJXVjBZV1JoZEdFS0lDQWdJQ0JwWkQwaWJXVjBZV1JoZEdFeE1ETXhNU0krQ2lBZ0lDQThjbVJtT2xKRVJqNEtJQ0FnSUNBZ1BHTmpPbGR2Y21zS0lDQWdJQ0FnSUNBZ2NtUm1PbUZpYjNWMFBTSWlQZ29nSUNBZ0lDQWdJRHhrWXpwbWIzSnRZWFErYVcxaFoyVXZjM1puSzNodGJEd3ZaR002Wm05eWJXRjBQZ29nSUNBZ0lDQWdJRHhrWXpwMGVYQmxDaUFnSUNBZ0lDQWdJQ0FnY21SbU9uSmxjMjkxY21ObFBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaR050YVhSNWNHVXZVM1JwYkd4SmJXRm5aU0lnTHo0S0lDQWdJQ0FnSUNBOFpHTTZkR2wwYkdVK1BDOWtZenAwYVhSc1pUNEtJQ0FnSUNBZ1BDOWpZenBYYjNKclBnb2dJQ0FnUEM5eVpHWTZVa1JHUGdvZ0lEd3ZiV1YwWVdSaGRHRStDaUFnUEdjS0lDQWdJQ0IwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNndE16TXpMamN3TVRVM0xDMDFNell1TkRJME16RXBJZ29nSUNBZ0lHbGtQU0pzWVhsbGNqRWlQZ29nSUNBZ1BHY0tJQ0FnSUNBZ0lHbGtQU0puTVRBeU5qY2lDaUFnSUNBZ0lDQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZzBMams0TkRZNE5UWXNNQ3d3TEMwMExqazRORFk0TlRZc0xURTBOekF1TVRFNE5Td3hNRE01TGpZeU5qUXBJajRLSUNBZ0lDQWdQR2NLSUNBZ0lDQWdJQ0FnWTJ4cGNDMXdZWFJvUFNKMWNtd29JMk5zYVhCUVlYUm9NVEF5TnpFcElnb2dJQ0FnSUNBZ0lDQnBaRDBpWnpFd01qWTVJajRLSUNBZ0lDQWdJQ0E4WndvZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRE0xTVM0Mk1URXNPVFl1T0RrMktTSUtJQ0FnSUNBZ0lDQWdJQ0JwWkQwaVp6RXdNamMxSWo0S0lDQWdJQ0FnSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0FnSUNBZ0lDQnBaRDBpY0dGMGFERXdNamd6SWdvZ0lDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVOUltWnBiR3c2ZFhKc0tDTnNhVzVsWVhKSGNtRmthV1Z1ZERFd01qYzNLVHRtYVd4c0xXOXdZV05wZEhrNk1UdG1hV3hzTFhKMWJHVTZibTl1ZW1WeWJ6dHpkSEp2YTJVNmJtOXVaU0lLSUNBZ0lDQWdJQ0FnSUNBZ0lHUTlJazBnTUN3d0lEazRMalF6Tnl3ek5pNHlOVElnTVRJd0xqZ3pNU3d0TWpRdU5UVTNJREl5TGpNNU5Td3ROakF1T0RBNUlpQXZQZ29nSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnUEM5blBnb2dJQ0FnUEM5blBnb2dJRHd2Wno0S1BDOXpkbWMrQ2c9PVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMTBweCAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p4emRtY0tJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNCNGJXeHVjenBqWXowaWFIUjBjRG92TDJOeVpXRjBhWFpsWTI5dGJXOXVjeTV2Y21jdmJuTWpJZ29nSUNCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaUNpQWdJSGh0Ykc1ek9uTjJaejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpQ2lBZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdkbWxsZDBKdmVEMGlNQ0F3SURZME9TNDVPVGs1T0NBME1EVXVOak15TWpZaUNpQWdJSFpsY25OcGIyNDlJakV1TVNJS0lDQWdhV1E5SW5OMlp6ZzVOU0krQ2lBZ1BHMWxkR0ZrWVhSaENpQWdJQ0FnYVdROUltMWxkR0ZrWVhSaE9EazVJajRLSUNBZ0lEeHlaR1k2VWtSR1Bnb2dJQ0FnSUNBOFkyTTZWMjl5YXdvZ0lDQWdJQ0FnSUNCeVpHWTZZV0p2ZFhROUlpSStDaUFnSUNBZ0lDQWdQR1JqT21admNtMWhkRDVwYldGblpTOXpkbWNyZUcxc1BDOWtZenBtYjNKdFlYUStDaUFnSUNBZ0lDQWdQR1JqT25SNWNHVUtJQ0FnSUNBZ0lDQWdJQ0J5WkdZNmNtVnpiM1Z5WTJVOUltaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWtZMjFwZEhsd1pTOVRkR2xzYkVsdFlXZGxJaUF2UGdvZ0lDQWdJQ0FnSUR4a1l6cDBhWFJzWlQ1QmMzTmxkQ0F4UEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR1JsWm5NS0lDQWdJQ0JwWkQwaVpHVm1jemczT1NJK0NpQWdJQ0E4YzNSNWJHVUtJQ0FnSUNBZ0lIUjVjR1U5SW5SbGVIUXZZM056SWdvZ0lDQWdJQ0FnYVdROUluTjBlV3hsT0RjM0lqNHVZWHR2Y0dGamFYUjVPakE3ZlM1aWUyWnBiR3c2STJabVpqdDlMbU43Wm1sc2JEb2pabVkxWmpBd08zMHVaSHRtYVd4c09pTmxZakF3TVdJN2ZTNWxlMlpwYkd3NkkyWTNPV1V4WWp0OVBDOXpkSGxzWlQ0S0lDQThMMlJsWm5NK0NpQWdQSFJwZEd4bENpQWdJQ0FnYVdROUluUnBkR3hsT0RneElqNUJjM05sZENBeFBDOTBhWFJzWlQ0S0lDQThjbVZqZEFvZ0lDQWdJSE4wZVd4bFBTSmthWE53YkdGNU9tbHViR2x1WlR0bWFXeHNPaU5tWmpWbU1EQTdjM1J5YjJ0bExYZHBaSFJvT2pVdU5Ea3pPREV4TmpFaUNpQWdJQ0FnWTJ4aGMzTTlJbU1pQ2lBZ0lDQWdlRDBpTWpJNUxqZ3pNall6SWdvZ0lDQWdJSGs5SWpRM0xqSTVOemN6TnlJS0lDQWdJQ0IzYVdSMGFEMGlNVGt3TGpReE5UVXhJZ29nSUNBZ0lHaGxhV2RvZEQwaU16RXhMakF3TkRjaUNpQWdJQ0FnYVdROUluSmxZM1E0T0RjaUlDOCtDaUFnUEhCaGRHZ0tJQ0FnSUNCemRIbHNaVDBpWm1sc2JEb2paV0l3TURGaU8zTjBjbTlyWlMxM2FXUjBhRG8xTGpRNU16Z3hNVFl4SWdvZ0lDQWdJR05zWVhOelBTSmtJZ29nSUNBZ0lHUTlJbTBnTWpRNUxqUTBOVFUwTERJd01pNDRNamMxTmlCaElERTVOeTQwTkRjMU9Td3hPVGN1TkRRM05Ua2dNQ0F3SURFZ056VXVOVE01T1RFc0xURTFOUzQwTnpRNE5qY2dNVGszTGpjM056SXlMREU1Tnk0M056Y3lNaUF3SURFZ01DQXdMRE14TVM0d01EUTJOemNnTVRrM0xqUTBOelU1TERFNU55NDBORGMxT1NBd0lEQWdNU0F0TnpVdU5UTTVPVEVzTFRFMU5TNDFNams0TVNCNklnb2dJQ0FnSUdsa1BTSndZWFJvT0RnNUlpQXZQZ29nSUR4d1lYUm9DaUFnSUNBZ2MzUjViR1U5SW1acGJHdzZJMlkzT1dVeFlqdHpkSEp2YTJVdGQybGtkR2c2TlM0ME9UTTRNVEUyTVNJS0lDQWdJQ0JqYkdGemN6MGlaU0lLSUNBZ0lDQmtQU0p0SURZeU5pNHhNREV6TERNeU5TNHpPVFExSUhZZ0xUWXVNemN5T0RJZ2FDQXlMamMwTmprZ2RpQXRNUzR6TVRnMU1pQm9JQzAyTGpVek56WTBJSFlnTVM0ek1UZzFNaUJvSURJdU5UZ3lNU0IySURZdU16Y3lPRElnZWlCdElERXlMalk1TURjc01DQjJJQzAzTGpZNU1UTTBJR2dnTFRFdU9UYzNOemdnYkNBdE1pNHpNRGMwTERVdU5Ea3pPREVnTFRJdU16QTNOQ3d0TlM0ME9UTTRNU0JvSUMweExqazNOemMzSUhZZ055NDJPVEV6TkNCb0lERXVOREk0TXprZ2RpQXROUzQ0TWpNME5DQnNJREl1TVRReU5Ua3NOQzQ1T1Rrek55Qm9JREV1TkRnek16TWdiQ0F5TGpFME1qVTRMQzAwTGprNU9UTTNJSFlnTlM0NE1qTTBOQ0I2SWdvZ0lDQWdJR2xrUFNKd1lYUm9PRGt4SWlBdlBnb2dJRHh3WVhSb0NpQWdJQ0FnYzNSNWJHVTlJbVpwYkd3NkkyWTNPV1V4WWp0emRISnZhMlV0ZDJsa2RHZzZOUzQwT1RNNE1URTJNU0lLSUNBZ0lDQmpiR0Z6Y3owaVpTSUtJQ0FnSUNCa1BTSnRJRFkwTlN3eU1ESXVPREkzTlRZZ1lTQXhPVGN1TnpjM01qSXNNVGszTGpjM056SXlJREFnTUNBeElDMHpNakF1TURFME5UVXNNVFUxTGpRM05EZzNJREU1Tnk0M056Y3lNaXd4T1RjdU56YzNNaklnTUNBd0lEQWdNQ3d0TXpFeExqQXdORFkzTlNCQklERTVOeTQzTnpjeU1pd3hPVGN1TnpjM01qSWdNQ0F3SURFZ05qUTFMREl3TWk0M056STJNaUJhSWdvZ0lDQWdJR2xrUFNKd1lYUm9PRGt6SWlBdlBnbzhMM04yWno0S1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiNDBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXlMakV1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJbk4yWnpFd09UQTRJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJS0NTQjJhV1YzUW05NFBTSXdJREFnTnpVd0lESXdOU0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdOelV3SURJd05Uc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGdvOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQZ29KTG5OME1IdG1hV3hzT2lNeE1ESTVPRVU3ZlFvSkxuTjBNWHRtYVd4c09pTkdSa0pGTURBN2ZRbzhMM04wZVd4bFBnbzhkR2wwYkdVK2MyVndZVHd2ZEdsMGJHVStDanh3WVhSb0lHbGtQU0p3WVhSb05UWTRPU0lnWTJ4aGMzTTlJbk4wTUNJZ1pEMGlUVEUyTmk0MkxEWTFMalJvTFRVeExqTmpNQzA0TGpRdE1TMHhOQzR4TFRNdE1UZGpMVE10TkM0ekxURXhMalF0Tmk0MExUSTFMakl0Tmk0MFl5MHhNeTQwTERBdE1qSXVNeXd4TGpJdE1qWXVOaXd6TGpjS0NWTTFOQ3cxTXk0MkxEVTBMRFl4TGpoak1DdzNMalVzTVM0NUxERXlMalFzTlM0M0xERTBMamRqTXk0MExERXVPQ3czTGpFc01pNDRMREV3TGprc01pNDVURGd4TERnd0xqSmpNakl1TWl3eExqVXNNellzTWk0MUxEUXhMallzTXk0eFl6RTNMalVzTVM0NExETXdMak1zTmk0MExETTRMakVzTVRRS0NXTTJMaklzTlM0NUxEa3VPU3d4TXk0MkxERXhMakVzTWpNdU1XTXdMamNzTmk0MExERXVNU3d4TWk0NUxERXNNVGt1TTJNd0xERTJMalV0TVM0MkxESTRMall0TkM0M0xETTJMakpqTFRVdU55d3hOQzR4TFRFNExqVXNNakl1T1Mwek9DNDFMREkyTGpZS0NXTXRPQzR6TERFdU5pMHlNUzR4TERJdU5DMHpPQzR6TERJdU5HTXRNamd1Tnl3d0xUUTRMamd0TVM0M0xUWXdMakV0TlM0eFl5MHhNeTQ1TFRRdU1pMHlNeTB4TWk0NExUSTNMalV0TWpVdU5rTXhMaklzTVRZM0xqRXNNQ3d4TlRVdU1pd3dMREV6T0M0MWFEVXhMak4yTkM0ekNnbGpNQ3c0TGprc01pNDJMREUwTGpZc055NDNMREUzTGpKak5Dd3hMamtzT0M0MExESXVPQ3d4TWk0NExESXVPR2d4T0M0NVl6a3VOaXd3TERFMUxqZ3RNQzQxTERFNExqUXRNUzQxWXpRdU55MHhMamtzTnk0NExUUXVPU3c1TGpNdE9XTXdMamt0TXk0eUxERXVNeTAyTGpVc01TNHlMVGt1T1FvSll6QXRPUzB6TGpNdE1UUXVOUzA1TGprdE1UWXVOV010TWk0MUxUQXVPQzB4TXk0NUxURXVPUzB6TkM0ekxUTXVNbU10TVRZdU5DMHhMakl0TWpjdU9DMHlMak10TXpRdU1pMHpMalJqTFRFMkxqZ3RNeTR4TFRJNExUa3VOaTB6TXk0MkxURTVMalFLQ1VNeUxqY3NPVEV1TlN3d0xqSXNOemd1T1N3d0xqSXNOakpqTUMweE1pNDRMREV1TXkweU15NHhMRFF0TXpBdU9YTTJMamt0TVRNdU5pd3hNaTQ0TFRFM0xqWmpPQzQyTFRZdU1pd3hPUzQzTFRrdU9Dd3pNeTR5TFRFd0xqbGpNVEV1TWkweExESXpMamN0TVM0MUxETTNMak10TVM0MUNnbGpNakV1TlN3d0xETTJMamtzTVM0eUxEUTJMRE11TjJNeU1pNHpMRFlzTXpNdU5Td3lNaTQ0TERNekxqVXNOVEF1TkVNeE5qY3VNU3cxTnk0MUxERTJOaTQ1TERZd0xqa3NNVFkyTGpZc05qVXVOQ0l2UGdvOGNHRjBhQ0JwWkQwaWNHRjBhRFUyT1RNaUlHTnNZWE56UFNKemREQWlJR1E5SWswek9USXVNeXd5TURWV01HZ3hNREl1T0dNeE5DNHhMREFzTWpRdU9Dd3hMakVzTXpJdU1pd3pMalZqTVRZdU9TdzFMak1zTWpndU1pd3hOaTR4TERNMExETXlMalVLQ1dNekxEZ3VOaXcwTGpVc01qRXVOU3cwTGpVc016Z3VPR013TERJd0xqZ3RNUzQzTERNMUxqY3ROU3cwTkM0NFl5MDJMallzTVRndE1qQXVNU3d5T0M0ekxUUXdMallzTXpGakxUSXVOQ3d3TGpRdE1USXVOeXd3TGpndE16QXVPQ3d4TGpGc0xUa3VNaXd3TGpOb0xUTXlMamgyTlROSU16a3lMak42Q2drZ1RUUTBOeTQxTERFd05DNDFhRE0wTGpSak1UQXVPUzB3TGpRc01UY3VOUzB4TGpJc01Ua3VPUzB5TGpWak15NHlMVEV1T0N3MUxqVXROUzQwTERZdU5TMHhNQzQ0WXpBdU9DMDFMak1zTVM0eUxURXdMallzTVMweE5tTXdMVGd1Tnkwd0xqY3RNVFV1TVMweUxqRXRNVGt1TXdvSll5MHlMVFV1T1MwMkxqZ3RPUzQxTFRFMExqSXRNVEF1T0dNdE1TNDFMVEF1TWkwMUxqRXRNQzR6TFRFd0xqY3RNQzR6YUMwek5DNDRWakV3TkM0MWVpSXZQZ284Y0dGMGFDQnBaRDBpY0dGMGFEVTJPVGNpSUdOc1lYTnpQU0p6ZERBaUlHUTlJazAyT0RNdU5pd3hOamt1TldndE56TXVPR3d0T1M0NUxETTFMalZvTFRVM0xqRk1OakEwTGpVc01HZzRNeTR5VERjMU1Dd3lNRFZvTFRVMUxqbE1Oamd6TGpZc01UWTVMalY2SUUwMk56SXVOaXd4TWprdU5nb0piQzB5TlM0NExUZzRMamxzTFRJMUxqRXNPRGd1T1VnMk56SXVObm9pTHo0S1BIQmhkR2dnYVdROUluQmhkR2cxTnpBeElpQmpiR0Z6Y3owaWMzUXhJaUJrUFNKTk16RTJMaklzTWpndU9HTXlNUzQ1TERBc05ESXVOaXc1TGprc05UWXVOQ3d5Tmk0NWJERXhMamt0TWpVdU5VTXpOalVzTVRFdU9Td3pNemt1TXl3eExqY3NNekV5TGpZc01TNDRDZ2xqTFRRekxqVXNNQzA0TUM0MkxESTJMakl0T1RVdU9TdzJNeTQwYUMweU15NHliQzB4TXk0M0xESTVMak5vTWprdU9HTXRNQzR5TERJdU55MHdMalFzTlM0MExUQXVOQ3c0TGpKak1Dd3pMak1zTUM0eUxEWXVOeXd3TGpVc01UQm9MVEUxYkMweE15NDNMREk1TGpSb016WXVNd29KWXpFMUxqY3NNell1TWl3MU1pNDBMRFl4TGpjc09UVXVNaXcyTVM0M1l6SXdMamNzTUN3ME1DNDVMVFlzTlRndU1TMHhOeTQxZGkwek5tTXRNall1TkN3ek1DNHlMVGN5TGpJc016TXVNaTB4TURJdU5DdzJMamhqTFRVdE5DNDBMVGt1TkMwNUxqUXRNVE10TVRWb056WnNNVE11TnkweU9TNDBDZ2xJTWpRMExqSmpMVEF1TlMwekxqWXRNQzQ0TFRjdU1pMHdMamd0TVRBdU9HTXdMVEl1TlN3d0xqRXROQzQ1TERBdU5DMDNMalJvTVRBNUxqaHNNVE11TnkweU9TNHphQzB4TVRSRE1qWTJMaklzTkRJdU55d3lPVEF1TWl3eU9DNDVMRE14Tmk0eUxESTRMamdpTHo0S1BIQmhkR2dnYVdROUluQmhkR2cxTnpBMUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16RTJMaklzTWprdU4yTXlNUzQyTERBc05ESXVNU3c1TGpnc05UVXVOeXd5Tmk0MmJEQXVPU3d4TGpGc01DNDJMVEV1TTJ3eE1TNDVMVEkxTGpWc01DNHpMVEF1Tm13dE1DNDFMVEF1TkFvSll5MHpOaTB6TXk0M0xUa3dMalV0TXpndU1pMHhNekV1TlMweE1DNDNZeTB4Tmk0NExERXhMak10TXpBc01qY3VNeTB6Tnk0M0xEUTJiREF1T0Mwd0xqWklNVGt6YkMwd0xqSXNNQzQxYkMweE15NDNMREk1TGpSc0xUQXVOaXd4TGpOb016RXVNbXd0TUM0NUxURUtDV010TUM0eUxETXRNQzQwTERVdU9DMHdMalFzT0M0ell6QXNNeTQwTERBdU1pdzJMamNzTUM0MUxERXdMakZzTUM0NUxURm9MVEUxTGpWc0xUQXVNaXd3TGpWc0xURXpMamNzTWprdU5Hd3RNQzQyTERFdU1tZ3pOeTQzYkMwd0xqZ3RNQzQxWXpFMkxqUXNNemN1T0N3MU5DdzJNaTR5TERrMkxEWXlMaklLQ1dNeU1DNDVMREF1TVN3ME1TNHpMVFl1TVN3MU9DNDJMVEUzTGpac01DNDBMVEF1TTFZeE5EaHNMVEV1TlN3eExqaGpMVEkyTGpFc01qa3VPQzAzTVM0MExETXlMamd0TVRBeExqSXNOaTQzWXkwMExqa3ROQzR6TFRrdU1pMDVMak10TVRJdU9DMHhOQzQ0YkMwd0xqY3NNUzQwYURjMkxqWUtDV3d3TGpJdE1DNDFiREV6TGpjdE1qa3VOR3d3TGpZdE1TNHlTREkwTkM0eWJEQXVPU3d3TGpoakxUQXVOUzB6TGpVdE1DNDRMVGN1TVMwd0xqZ3RNVEF1TjJNd0xUSXVOQ3d3TGpFdE5DNDVMREF1TkMwM0xqTnNMVEF1T1N3d0xqaG9NVEV3TGpSc01DNHlMVEF1TlV3ek5qZ3NOalV1TmdvSmJEQXVOaTB4TGpOSU1qVXpMakpzTUM0NExERXVNME15TmpZdU9DdzBNeTQxTERJNU1DNDFMREk1TGpnc016RTJMaklzTWprdU55Qk5NalV6TGpJc05qWXVNV2d4TVRSc0xUQXVPQzB4TGpKc0xURXpMamNzTWprdU5Hd3dMamd0TUM0MVNESTBNaTQ1YkMwd0xqRXNNQzQ0Q2dsakxUQXVNaXd5TGpVdE1DNDBMRFV0TUM0MExEY3VOV013TERNdU55d3dMak1zTnk0MExEQXVPQ3d4TVd3d0xqRXNNQzQ0U0RNME5Xd3RNQzQ0TFRFdU0yd3RNVE11Tnl3eU9TNDBiREF1T0Mwd0xqVm9MVGMzTGpkc01DNDVMREV1TkdNeU1pNHlMRE0wTERZM0xqY3NORE11Tml3eE1ERXVOeXd5TVM0MENnbGpOUzQyTFRNdU55d3hNQzQzTFRndU1Td3hOUzR5TFRFekxqSnNMVEV1TlMwd0xqWjJNelpzTUM0MExUQXVOME16TlRNdU1pd3hPVGNzTXpNekxqRXNNakF6TERNeE1pNDJMREl3TTJNdE5ERXVNaXd3TFRjNExqTXRNalF0T1RRdU5DMDJNUzR4YkMwd0xqSXRNQzQxYUMwek5pNDViREF1T0N3eExqTUtDV3d4TXk0M0xUSTVMalJzTFRBdU9Dd3dMalZvTVRac0xUQXVNUzB4WXkwd0xqTXRNeTR6TFRBdU5TMDJMamN0TUM0MUxUa3VPV013TFRJdU5Td3dMakV0TlM0eUxEQXVOQzA0TGpKc01DNHhMVEZvTFRNd0xqaHNNQzQ0TERFdU1td3hNeTQzTFRJNUxqTnNMVEF1T0N3d0xqVm9Nak11T0FvSmJEQXVNaTB3TGpWak55NDJMVEU0TGpRc01qQXVOUzB6TkM0eExETTNMakV0TkRVdU1tTTBNQzR6TFRJM0xEa3pMamt0TWpJdU5pd3hNamt1TWl3eE1DNDFiQzB3TGpJdE1Xd3RNVEV1T1N3eU5TNDFiREV1TlMwd0xqSmpMVEkxTGpZdE16RXVOUzAzTVM0NExUTTJMalF0TVRBekxqUXRNVEF1T0FvSll5MDNMRFV1TnkweE1pNDVMREV5TGpZdE1UY3VOQ3d5TUM0MGJDMHdMamdzTVM0elRESTFNeTR5TERZMkxqRjZJaTgrQ2p3dmMzWm5QZ289XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge3J1ZGV4U2VydmljZSA9PT0gXCJnYXRld2F5XCIgJiYgcnVkZXhHYXRld2F5Q29pbnMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRMb2NhbGUgPT0gXCJydVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWdyZWVtZW50X3J1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWdyZWVtZW50X2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5SdWRleE5vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJ1ZGV4Tm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5ydWRleF9ub3RpY2UxX2luZm9ybWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSdWRleE5vdGljZTFJbmZvcm1lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4R2F0ZXdheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5zPXtydWRleEdhdGV3YXlDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7cnVkZXhTZXJ2aWNlID09PSBcImZpYXRcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL21lcmNoYW50LnJhaWRvZmluYW5jZS5ldS9tZWRpYS84M2VlZjNkNWExN2JmMzAwYWY5OTg2ZTkxM2MyYzk5ZC5wZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlX3RoaXJkX3BhcnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJ1ZGV4Tm90aWNlMUluZm9ybWVkX0J1eUNyeXB0by5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXgucnVkZXhfbm90aWNlMV9pbmZvcm1lZF90aGlyZF9wYXJ0eV9zZXJ2aWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSdWRleE5vdGljZTFJbmZvcm1lZF9CdXlDcnlwdG8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb0ZpbmFuY2UgYWNjb3VudD17YWNjb3VudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIHNlcnZpY2VzRG93bn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZVNlcnZpY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgcnVkZXhHYXRld2F5Q29pbnMgPSB0aGlzLnByb3BzLnJ1ZGV4QmFja2VkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvaW47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXJ2aWNlcyA9IHRoaXMucmVuZGVyU2VydmljZXMocnVkZXhHYXRld2F5Q29pbnMpO1xuXG4gICAgICAgIGNvbnN0IHNlcnZpY2VOYW1lcyA9IFtdO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHNlcnZpY2VzLm1hcCgoc2VydmljZXNfb2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2VydmljZU5hbWVzLnB1c2goc2VydmljZXNfb2JqLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc19vYmoubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lc1thY3RpdmVTZXJ2aWNlXTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2VEb3duID0gc2VydmljZXNEb3duLmdldChjdXJyZW50U2VydmljZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250YWluZWQgPyBcImdyaWQtY29udGVudFwiIDogXCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbnRhaW5lZCA/IFwiXCIgOiBcImdyaWQtY29udGVudFwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJkZXBvc2l0X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD1cImRlcG9zaXRfbW9kYWxfbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VkQ29pbnM9e3RoaXMucHJvcHMuYmFja2VkQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0aGRyYXdNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ3aXRoZHJhd19tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9XCJ3aXRoZHJhd19tb2RhbF9uZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZWRDb2lucz17dGhpcy5wcm9wcy5iYWNrZWRDb2luc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZ2F0ZXdheS5waGFzZV9vdXRfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVwb3NpdF9tb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy5kZXBvc2l0X21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmRlcG9zaXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIndpdGhkcmF3X21vZGFsX2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLndpdGhkcmF3X21vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMud2l0aGRyYXdfbW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwud2l0aGRyYXcuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnRpdGxlXCIgY29tcG9uZW50PVwiaDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJkZXBvc2l0LXNob3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJyZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBzbWFsbC1vcmRlci0yIG1lZGl1bS1vcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuc2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2V0U2VydmljZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlU2VydmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlcnZpY2VEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YGdhdGV3YXkudW5hdmFpbGFibGVfJHtjdXJyZW50U2VydmljZU5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaXVtLTUgbWVkaXVtLW9mZnNldC0xIHNtYWxsLW9yZGVyLTEgbWVkaXVtLW9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA0MCwgd2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXJ2aWNlRG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aXZlU2VydmljZSAmJiBzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VydmljZXNbYWN0aXZlU2VydmljZV0udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNlcnZpY2VzWzBdLnRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbkFjY291bnREZXBvc2l0V2l0aGRyYXcgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnREZXBvc2l0V2l0aGRyYXcpO1xuXG5jbGFzcyBEZXBvc2l0U3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB1cGRhdGVHYXRld2F5QmFja2VycygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBY2NvdW50RGVwb3NpdFdpdGhkcmF3IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRGVwb3NpdFN0b3JlV3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZSwgR2F0ZXdheVN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBhY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXCJsb2NhbGVcIiksXG4gICAgICAgICAgICBiYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMsXG4gICAgICAgICAgICBvcGVuTGVkZ2VyQmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICBcIk9QRU5cIixcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHJ1ZGV4QmFja2VkQ29pbnM6IEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJhY2tlZENvaW5zLmdldChcbiAgICAgICAgICAgICAgICBcIlJVREVYXCIsXG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBiaXRzcGFya0JhY2tlZENvaW5zOiBHYXRld2F5U3RvcmUuZ2V0U3RhdGUoKS5iYWNrZWRDb2lucy5nZXQoXG4gICAgICAgICAgICAgICAgXCJTUEFSS0RFWFwiLFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYmxvY2tUcmFkZXNCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgIFwiVFJBREVcIixcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNpdGFkZWxCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgIFwiQ0lUQURFTFwiLFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgeGJ0c3hCYWNrZWRDb2luczogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgIFwiWEJUU1hcIixcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNlcnZpY2VzRG93bjogR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuZG93biB8fCB7fVxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXREaXNwbGF5TmFtZX0gZnJvbSBcImNvbW1vbi9yZWFjdFV0aWxzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmNsYXNzIER5bmFtaWNPYmplY3RSZXNvbHZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZG9zOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3RcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRvczogTGlzdCgpXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ2V0RHluYW1pY09iamVjdCA9IHRoaXMuZ2V0RHluYW1pY09iamVjdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldER5bmFtaWNPYmplY3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZG9zLmZpbmQoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSAmJiBhLmdldChcImlkXCIpID09PSBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgICBnZXREeW5hbWljT2JqZWN0OiB0aGlzLmdldER5bmFtaWNPYmplY3RcbiAgICAgICAgfSk7XG4gICAgfVxufVxuRHluYW1pY09iamVjdFJlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShEeW5hbWljT2JqZWN0UmVzb2x2ZXIpO1xuXG4vKipcbiAqIEhPQyB0aGF0IHJlc29sdmVzIGVpdGhlciBhIG51bWJlciBvZiBhc3NldHMgZGlyZWN0bHkgd2l0aCBDaGFpbkFzc2V0LFxuICogb3IgYSBsaXN0IG9mIGFzc2V0cyB3aXRoIENoYWluQXNzZXRzXG4gKlxuICogIE9wdGlvbnNcbiAqICAtJ3Byb3BOYW1lcycgYW4gYXJyYXkgb2YgcHJvcCBuYW1lcyB0byBiZSByZXNvbHZlZCBhcyBhc3NldHMuIChkZWZhdWx0cyB0byBcImFzc2V0XCIgb3IgXCJhc3NldHNcIilcbiAqICAtJ2RlZmF1bHRQcm9wcycgZGVmYXVsdCB2YWx1ZXMgdG8gdXNlIGZvciBvYmplY3RzIChvcHRpb25hbClcbiAqICAtJ2FzTGlzdCcgZGVmaW5lcyB3aGV0aGVyIHRvIHVzZSBDaGFpbkFzc2V0c0xpc3Qgb3Igbm90ICh1c2VmdWwgZm9yIHJlc29sdmluZyBsYXJnZSBxdWFudGl0aWVzIG9mIGFzc2V0cylcbiAqICAtJ3dpdGhEeW5hbWljJyBkZWZpbmVzIHdoZXRoZXIgdG8gYWxzbyByZXNvbHZlIGR5bmFtaWMgb2JqZWN0cyBvciBub3RcbiAqL1xuXG5mdW5jdGlvbiBBc3NldFdyYXBwZXIoQ29tcG9uZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnByb3BOYW1lcyA9IG9wdGlvbnMucHJvcE5hbWVzIHx8IFtcbiAgICAgICAgISFvcHRpb25zLmFzTGlzdCA/IFwiYXNzZXRzXCIgOiBcImFzc2V0XCJcbiAgICBdO1xuICAgIGNvbnN0IGZpbmFsUHJvcFR5cGVzID0gb3B0aW9ucy5wcm9wTmFtZXMucmVkdWNlKChyZXMsIHR5cGUpID0+IHtcbiAgICAgICAgcmVzW3R5cGVdID0gb3B0aW9ucy5hc0xpc3RcbiAgICAgICAgICAgID8gQ2hhaW5UeXBlcy5DaGFpbkFzc2V0c0xpc3RcbiAgICAgICAgICAgIDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQ7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgbGV0IGRlZmF1bHRQcm9wcyA9IE9iamVjdC5rZXlzKGZpbmFsUHJvcFR5cGVzKS5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMgJiYgb3B0aW9ucy5kZWZhdWx0UHJvcHNba2V5XTtcbiAgICAgICAgcmVzW2tleV0gPSAhIW9wdGlvbnMuYXNMaXN0ID8gTGlzdChjdXJyZW50IHx8IFtdKSA6IGN1cnJlbnQgfHwgXCIxLjMuMFwiO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcblxuICAgIGlmIChvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiAhIW9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQpIHtcbiAgICAgICAgZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50O1xuICAgIH1cblxuICAgIGNsYXNzIEFzc2V0c1Jlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IGZpbmFsUHJvcFR5cGVzO1xuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbEFzc2V0cyA9IHt9O1xuICAgICAgICAgICAgbGV0IHBhc3NUcm91Z2hQcm9wcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGRvcyA9IExpc3QoKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdICYmXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvcE5hbWVzLmluZGV4T2YocHJvcCkgIT09IC0xXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndpdGhEeW5hbWljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuYXNMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zID0gZG9zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0uZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zID0gZG9zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxBc3NldHNbcHJvcF0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzW3Byb3BdLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXNzVHJvdWdoUHJvcHNbcHJvcF0gPSB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgd3JhcHBlZCA9IFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIHsuLi5wYXNzVHJvdWdoUHJvcHMsIC4uLmZpbmFsQXNzZXRzfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNPYmplY3RSZXNvbHZlciBkb3M9e2Rvc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d3JhcHBlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljT2JqZWN0UmVzb2x2ZXI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHdyYXBwZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXNzZXRzUmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0c1Jlc29sdmVyKTtcblxuICAgIGNsYXNzIFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBc3NldHNSZXNvbHZlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgcmVmPVwiYm91bmRfY29tcG9uZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Fzc2V0c1Jlc29sdmVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBXcmFwcGVyLmRpc3BsYXlOYW1lID0gYFdyYXBwZXIoJHtnZXREaXNwbGF5TmFtZShDb21wb25lbnQpfSlgO1xuICAgIHJldHVybiBXcmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4vUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHtcbiAgICBSZWNlbnRUcmFuc2FjdGlvbnMsXG4gICAgVHJhbnNhY3Rpb25XcmFwcGVyXG59IGZyb20gXCJjb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFwicmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1wiO1xuXG5jbGFzcyBSdURleEdhdGV3YXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHthY3Rpb246IFwiZGVwb3NpdFwifSksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblwiLCBcImRlcG9zaXRcIilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZ2V0QWN0aXZlQ29pbihwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgbGV0IGNhY2hlZENvaW4gPSBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlQ29pbl9ydWRleFwiLCBudWxsKTtcbiAgICAgICAgbGV0IGZpcnN0VGltZUNvaW4gPSBcIlJVREVYLkdPTE9TXCI7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gY2FjaGVkQ29pbiA/IGNhY2hlZENvaW4gOiBmaXJzdFRpbWVDb2luO1xuXG4gICAgICAgIGlmIChzdGF0ZS5hY3Rpb24gPT09IFwid2l0aGRyYXdcIikge1xuICAgICAgICAgICAgYWN0aXZlQ29pbiA9IHRoaXMuX2ZpbmRDb2luQnlOYW1lKHByb3BzLCBhY3RpdmVDb2luKS5zeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlQ29pbjtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5wcm92aWRlciAhPT0gdGhpcy5wcm9wcy5wcm92aWRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29pbjogdGhpcy5fZ2V0QWN0aXZlQ29pbihuZXh0UHJvcHMsIHRoaXMuc3RhdGUuYWN0aW9uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAgICBvblNlbGVjdENvaW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzZXR0aW5nID0ge307XG4gICAgICAgIHNldHRpbmdbYGFjdGl2ZUNvaW5fcnVkZXhfJHt0aGlzLnN0YXRlLmFjdGlvbn1gXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoc2V0dGluZyk7XG4gICAgfSovXG5cbiAgICBvblNlbGVjdENvaW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGUudmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcbiAgICAgICAgbGV0IGNvaW5OYW1lID0gZS52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uID09PSBcIndpdGhkcmF3XCIpIHtcbiAgICAgICAgICAgIGNvaW5OYW1lID0gdGhpcy5fZmluZENvaW5CeVN5bWJvbCh0aGlzLnByb3BzLCBjb2luTmFtZSkuYmFja2luZ0NvaW47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ1tcImFjdGl2ZUNvaW5fcnVkZXhcIl0gPSBjb2luTmFtZTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5TmFtZShwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzLmNvaW5zWzBdO1xuICAgIH1cblxuICAgIF9maW5kQ29pbkJ5U3ltYm9sKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuY29pbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2luID0gcHJvcHMuY29pbnNbaV07XG4gICAgICAgICAgICBpZiAoY29pbi5zeW1ib2wudG9VcHBlckNhc2UoKSA9PT0gbmFtZSkgcmV0dXJuIGNvaW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aW9uKHR5cGUpIHtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSB0aGlzLl9nZXRBY3RpdmVDb2luKHRoaXMucHJvcHMsIHthY3Rpb246IHR5cGV9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IGFjdGl2ZUNvaW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtbXCJydWRleEFjdGlvblwiXTogdHlwZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjb2lucywgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUNvaW4sIGFjdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghY29pbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyZWRDb2lucyA9IGNvaW5zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIGlmICghYSB8fCAhYS5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIC8qcmV0dXJuIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBhLmRlcG9zaXRBbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgIDogYS53aXRoZHJhd2FsQWxsb3dlZDsqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29pbk9wdGlvbnMgPSBmaWx0ZXJlZENvaW5zXG4gICAgICAgICAgICAubWFwKGNvaW4gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLnN5bWJvbDtcblxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gb3B0aW9uLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgLy9sZXQgcHJlZml4ID0gbmFtZSA9PT0gXCJQUFlcIiA/IFwiXCIgOiBcIlJVREVYLlwiO1xuICAgICAgICAgICAgICAgIGxldCBwcmVmaXggPSBcIlJVREVYLlwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJlZml4ICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW4gPSBmaWx0ZXJlZENvaW5zLmZpbHRlcihjb2luID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IGFjdGl2ZUNvaW5cbiAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sID09PSBhY3RpdmVDb2luO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAoIWNvaW4pIGNvaW4gPSBmaWx0ZXJlZENvaW5zWzBdO1xuXG4gICAgICAgIGxldCBpc0RlcG9zaXQgPSB0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IHN1cHBvcnRVcmwgPSBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbVwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImdhdGV3YXkuY2hvb3NlX1wiICsgYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT1cImV4dGVybmFsLWNvaW4tdHlwZXMgYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDb2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q29pbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZUNvaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvaW5PcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L1NlbGVjdD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS02IG1lZGl1bS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfdGV4dFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXAgc2VnbWVudGVkIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcImRlcG9zaXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwid2l0aGRyYXdcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBY3Rpb24uYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyFjb2luID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ1RGV4R2F0ZXdheURlcG9zaXRSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29pbi5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17XCJydWRleFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17Y29pbi5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e2NvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfY29pbl90eXBlPXtjb2luLmJhY2tpbmdDb2luLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYWNjb3VudD17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X3dhbGxldF90eXBlPXtjb2luLndhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkPXtjb2luLmRlcG9zaXRBbGxvd2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2FsQWxsb3dlZD17Y29pbi53aXRoZHJhd2FsQWxsb3dlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvaW4uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2NvaW5fdHlwZT17Y29pbi5zeW1ib2wudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zPXtjb2luLnN1cHBvcnRzTWVtb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUHVibGljS2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uc3VwcG9ydHNQdWJsaWNLZXkgfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vVHlwZT17Y29pbi5tZW1vVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17Y29pbi5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e2NvaW4uZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfcHJlY2lzaW9uPXtjb2luLnByZWNpc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TdXBwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LnN1cHBvcnRfYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdXBwb3J0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4gJiYgY29pbi5zeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29pbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5pc3N1ZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXQsIHRvLCBmcm9tQWNjb3VudH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e0ltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5yZWNlbnRfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmlsdGVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNhY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUnVEZXhHYXRld2F5LCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgRGlzYWJsZUNvcHlUZXh0IGZyb20gXCIuLi9EaXNhYmxlQ29weVRleHRcIjtcbmltcG9ydCBSdURleFdpdGhkcmF3TW9kYWwgZnJvbSBcIi4vUnVEZXhXaXRoZHJhd01vZGFsXCI7XG5pbXBvcnQgQWNjb3VudEJhbGFuY2UgZnJvbSBcIi4uLy4uL0FjY291bnQvQWNjb3VudEJhbGFuY2VcIjtcbmltcG9ydCBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUgZnJvbSBcImNvbW1vbi9SdURleERlcG9zaXRBZGRyZXNzQ2FjaGVcIjtcbmltcG9ydCB7cmVxdWVzdERlcG9zaXRBZGRyZXNzfSBmcm9tIFwibGliL2NvbW1vbi9SdURleE1ldGhvZHNcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tIFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIjtcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHthdmFpbGFibGVHYXRld2F5c30gZnJvbSBcImxpYi9jb21tb24vZ2F0ZXdheXNcIjtcblxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZS5yZWFjdFwiO1xuXG5jbGFzcyBSdURleEdhdGV3YXlEZXBvc2l0UmVxdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2F0ZXdheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9jb2luX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlcG9zaXRfYXNzZXRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWNlaXZlX2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsXG4gICAgICAgIGlzc3Vlcl9hY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgZGVwb3NpdF9hc3NldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF93YWxsZXRfdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgZGVwcmVjYXRlZF9pbl9mYXZvcl9vZjogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBkZXByZWNhdGVkX21lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3VwcG9ydHNfb3V0cHV0X21lbW9zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBzdXBwb3J0c1B1YmxpY0tleTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVtb1R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGFzc2V0X3ByZWNpc2lvbjogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IFJ1RGV4RGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1FyTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHFyY29kZTogXCJcIixcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MgPSB0aGlzLmFkZERlcG9zaXRBZGRyZXNzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93UXJNb2RhbCA9IHRoaXMuc2hvd1FyTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXJNb2RhbCA9IHRoaXMuaGlkZVFyTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNob3dRcmNvZGUodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxcmNvZGU6IHRleHR9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dRck1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dRck1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXJNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZVFyTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNRck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfbm90aWZ5KHN1KSB7XG4gICAgICAgIGxldCBzdHJOID0gXCJjb3B5X2FkZHJlc3NcIjtcblxuICAgICAgICBpZiAoc3UgPT0gXCJtZW1vXCIpIHN0ck4gPSBcImNvcHlfbWVtb1wiO1xuXG4gICAgICAgIE5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubm90aWZ5LlwiICsgc3RyTilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgIC8vICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKHRoaXMucHJvcHMuZ2F0ZXdheSwgYWNjb3VudF9uYW1lLCB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLCB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlKTtcbiAgICAvLyB9XG5cbiAgICBhZGREZXBvc2l0QWRkcmVzcyhyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NvdW50X25hbWV9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzfSk7XG4gICAgfVxuXG4gICAgZ2V0V2l0aGRyYXdNb2RhbElkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJ0aGlzLnByb3BzLmlzc3VlcjogXCIsIHRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQudG9KUygpIClcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwidGhpcy5yZWNlaXZlX2Fzc2V0Lmlzc3VlcjogXCIsIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC50b0pTKCkgKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJ3aXRoZHJhd19hc3NldF9cIiArXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIikgK1xuICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uV2l0aGRyYXcoKSB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZW1wdHlSb3cgPSA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCIsIG1pbkhlaWdodDogMTUwfX0gLz47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVJvdztcblxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlc19vYmplY3QgPSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIik7XG5cbiAgICAgICAgLy8gbGV0IGJhbGFuY2UgPSBcIjAgXCIgKyB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKSB7XG4gICAgICAgICAgICBsZXQgaGFzX25vbnplcm9fYmFsYW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0X2lkID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdF9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2Vfb2JqZWN0X2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSBiYWxhbmNlX29iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZSAhPSAwKSBoYXNfbm9uemVyb19iYWxhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc19ub256ZXJvX2JhbGFuY2UpIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBhY2NvdW50X2JhbGFuY2VzID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QudG9KUygpO1xuICAgICAgICAvLyBsZXQgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKTtcbiAgICAgICAgLy8gaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpO1xuICAgICAgICAvLyAgICAgaWYoIGN1cnJlbnRfYXNzZXRfaWQgKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGJhbGFuY2UgPSAoPHNwYW4+PFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiLz46IDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19Lz48L3NwYW4+KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLnN0YXRlLnJlY2VpdmVfYWRkcmVzcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWNjb3VudF9uYW1lID09PSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSkge1xuICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgPSByZWNlaXZlX2FkZHJlc3NfZnJvbV9jYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5zdXBwb3J0c19vdXRwdXRfbWVtb3MpIHtcbiAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHFyY29kZSA9IHRoaXMuc3RhdGUucXJjb2RlO1xuICAgICAgICBsZXQgZGVwb3NpdENvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMgJiYgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJpcnJldmVyc2libGVcIikge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRDb25maXJtYXRpb24gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubGFzdF9pcnJldmVyc2libGVcIiAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlID09PSBcImJsb2Nrc1wiICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0Q29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X2RlcG9zaXQuY29uZmlybWF0aW9ucy5uX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3RoaXMucHJvcHMuY29uZmlybWF0aW9ucy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3X21vZGFsX2lkID0gdGhpcy5nZXRXaXRoZHJhd01vZGFsSWQoKTtcbiAgICAgICAgbGV0IGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBkZXBvc2l0X21lbW8gPSBudWxsO1xuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSA8c3Bhbj5wbGVhc2UgdXNlIHt0aGlzLnByb3BzLmRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2YuZ2V0KFwic3ltYm9sXCIpfSBpbnN0ZWFkLiA8c3BhbiBkYXRhLXRpcD17dGhpcy5wcm9wcy5kZXByZWNhdGVkX21lc3NhZ2V9IGRhdGEtcGxhY2U9XCJyaWdodFwiIGRhdGEtaHRtbD17dHJ1ZX0+PEljb24gbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCIgLz48L3NwYW4+PFJlYWN0VG9vbHRpcCAvPjwvc3Bhbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyB7XG4gICAgICAgIGxldCBjbGlwYm9hcmRUZXh0ID0gXCJcIjtcbiAgICAgICAgbGV0IG1lbW9UZXh0O1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtb19wcmVmaXg7XG4gICAgICAgIGxldCBjdXJyZW50R2F0ZXdheSA9IFwiUlVERVhcIjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uc2ltcGxlQXNzZXRHYXRld2F5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudDtcbiAgICAgICAgICAgIGlmICghIXRoaXMucHJvcHMubWVtb1R5cGUgJiYgdGhpcy5wcm9wcy5tZW1vVHlwZSA9PT0gXCJidHNpZFwiKSB7XG4gICAgICAgICAgICAgICAgbWVtb1RleHQgPVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uZml4ZWRNZW1vW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kX2J0c2lkXCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKS5yZXBsYWNlKFwiMS4yLlwiLCBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUdhdGV3YXlzW2N1cnJlbnRHYXRld2F5XS5maXhlZE1lbW9bXCJhcHBlbmRcIl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbW9UZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZF9kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgXSArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpICtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlR2F0ZXdheXNbY3VycmVudEdhdGV3YXldLmZpeGVkTWVtb1tcImFwcGVuZFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcG9zaXRfbWVtbyA9IDxzcGFuPnttZW1vVGV4dH08L3NwYW4+O1xuICAgICAgICAgICAgd2l0aGRyYXdfbWVtb19wcmVmaXggPSB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlICsgXCI6XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKCFyZWNlaXZlX2FkZHJlc3MgfHwgIXJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzKSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcy5tZW1vKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgYSBkZXBvc2l0IG1lbW8gKGxpa2UgZXRoZXJldW0pLCB3ZSBuZWVkIHRvIGRpc3BsYXkgYm90aCB0aGUgYWRkcmVzcyBhbmQgdGhlIG1lbW8gdGhleSBuZWVkIHRvIHNlbmRcbiAgICAgICAgICAgICAgICBtZW1vVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZFRleHQgPSByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcztcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkZXBvc2l0X21lbW8gPSA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLm1lbW99PC9zcGFuPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNsaWVudCB0aGF0IHVzZXMgdW5pcXVlIGRlcG9zaXQgYWRkcmVzc2VzIHRvIHNlbGVjdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dCA9IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZEJyZWFrOiBcImJyZWFrLXdvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlX2FkZHJlc3MuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vX3ByZWZpeCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5pbnRlcm1lZGlhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuaXNzdWVyX2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkueW91cl9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRBbGxvd2VkID09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWluX2Ftb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17dGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4Lm1pbl9hbW91bnRfd2FyblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3RoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdENvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGk+e2RlcG9zaXRDb25maXJtYXRpb259PC9pPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwiLCBmb250U2l6ZTogXCIxLjFyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERFJFU1M6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2FibGVDb3B5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29weVRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS51c2VfY29weV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2FibGVDb3B5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNob3dRcmNvZGUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcGJvYXJkVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwucXJjb2RlLmxhYmVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlcG9zaXRfbWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNhYmxlQ29weVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUNvcHlUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkudXNlX2NvcHlfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1FTU86e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZGVwb3NpdF9tZW1vfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc2FibGVDb3B5VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2hvd1FyY29kZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5xcmNvZGUubGFiZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlUXJNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc1FyTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVRck1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXBvc2l0UXJDb2RlTW9kYWwgdGV4dD17cXJjb2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y2xpcGJvYXJkVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm90aWZ5KFwiYWRkcmVzc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtb1RleHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXttZW1vVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLl9ub3RpZnkoXCJtZW1vXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgbWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC51bmRlcl9jb25zdHJ1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXhfX2dhdGV3YXkgZ3JpZC1ibG9jayBuby1wYWRkaW5nIG5vLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X3N1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fd2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYXNzZXRfdG9fcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmludGVybWVkaWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5pc3N1ZXJfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cD5XaGVuIHlvdSB3aXRoZHJhdyB7dGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcInN5bWJvbFwiKX0sIHlvdSB3aWxsIHJlY2VpdmUge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH0gYXQgYSAxOjEgcmF0aW8gKG1pbnVzIGZlZXMpLjwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhkcmF3YWxBbGxvd2VkID09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjEuM3JlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25XaXRoZHJhdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X25vd1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC51bmRlcl9jb25zdHJ1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnYXRld2F5LndpdGhkcmF3X2NvaW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW46IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSdURleFdpdGhkcmF3TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyPXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fbmFtZT17dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fc3ltYm9sPXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0X2NvaW5fdHlwZT17dGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfd2FsbGV0X3R5cGU9e3RoaXMucHJvcHMuZGVwb3NpdF93YWxsZXRfdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNfbWVtb3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRzX291dHB1dF9tZW1vc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9fcHJlZml4PXt3aXRoZHJhd19tZW1vX3ByZWZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbF9pZD17d2l0aGRyYXdfbW9kYWxfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluX2Ftb3VudD17dGhpcy5wcm9wcy5taW5fYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdGVGZWU9e3RoaXMucHJvcHMuZ2F0ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9wcmVjaXNpb249e3RoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgRGVwb3NpdFFyQ29kZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudGV4dDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTJcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxRUkNvZGUgc2l6ZT17MjAwfSB2YWx1ZT17dGV4dH0gLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIn19Pnt0ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoUnVEZXhHYXRld2F5RGVwb3NpdFJlcXVlc3QpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCB7dmFsaWRhdGVBZGRyZXNzLCBXaXRoZHJhd0FkZHJlc3Nlc30gZnJvbSBcImNvbW1vbi9SdURleE1ldGhvZHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jLCBjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XG5pbXBvcnQge1ByaWNlLCBBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge0J1dHRvbiwgTW9kYWx9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgUnVEZXhXaXRoZHJhd01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBpc3N1ZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvdXRwdXRfY29pbl9zeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG91dHB1dF93YWxsZXRfdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG91dHB1dF9zdXBwb3J0c19tZW1vczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgb3V0cHV0X3N1cHBvcnRzUHVibGljS2V5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBhbW91bnRfdG9fd2l0aGRyYXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIG1pbl9hbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGdhdGVGZWU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0NvbmZpcm1hdGlvbk1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQ6IHRoaXMucHJvcHMuYW1vdW50X3RvX3dpdGhkcmF3LFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChcbiAgICAgICAgICAgICAgICBwcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19pc192YWxpZDogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uX2lzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3Nfc2VsZWN0ZWQ6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QoXG4gICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0X3dhbGxldF90eXBlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5OiBcIlwiLFxuICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eTogdGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgbWVtbzogXCJcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfZmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBlbXB0eV93aXRoZHJhd192YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IHByb3BzLmFjY291bnQsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6XG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldChwcm9wcy5mZWVfYXNzZXRfc3ltYm9sKSB8fFxuICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcbiAgICAgICAgICAgIGZlZVN0YXR1czoge31cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLCBwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NoZWNrTWluQW1vdW50ID0gdGhpcy5fY2hlY2tNaW5BbW91bnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlID0gZGVib3VuY2UodGhpcy5fdXBkYXRlRmVlLmJpbmQodGhpcyksIDI1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwgPSB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCA9IHRoaXMuaGlkZUNvbmZpcm1hdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5Nb3VudGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5hY2NvdW50ICE9PSB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCAmJlxuICAgICAgICAgICAgbnAuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnAuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50OiBuZXcgQXNzZXQoe2Ftb3VudDogMH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29uZmlybWF0aW9uTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ29uZmlybWF0aW9uTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlRmVlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQge2ZlZV9hc3NldF9pZCwgZnJvbV9hY2NvdW50fSA9IHN0YXRlO1xuICAgICAgICBjb25zdCB7ZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlc1swXSAhPT0gZmVlX2Fzc2V0X2lkXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkID0gZmVlX2Fzc2V0X3R5cGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmcm9tX2FjY291bnQpIHJldHVybiBudWxsO1xuICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcbiAgICAgICAgICAgIGFjY291bnRJRDogZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgZmVlSUQ6IGZlZV9hc3NldF9pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLndpdGhkcmF3X2FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAoc3RhdGUubWVtbyA/IFwiOlwiICsgc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHtmZWUsIGhhc0JhbGFuY2UsIGhhc1Bvb2xCYWxhbmNlfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudW5Nb3VudGVkKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IGZlZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzUG9vbEJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAhaGFzQmFsYW5jZSB8fCAhaGFzUG9vbEJhbGFuY2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrRmVlU3RhdHVzKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQgYWNjb3VudCA9IHN0YXRlLmZyb21fYWNjb3VudDtcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlczogYXNzZXRzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSk7XG4gICAgICAgIC8vIGNvbnN0IGFzc2V0cyA9IFtcIjEuMy4wXCIsIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildO1xuICAgICAgICBsZXQgZmVlU3RhdHVzID0ge307XG4gICAgICAgIGxldCBwID0gW107XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgcC5wdXNoKFxuICAgICAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGZlZUlEOiBhLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF9jb2luX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53aXRoZHJhd19hZGRyZXNzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUubWVtbyA/IFwiOlwiICsgc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKHApXG4gICAgICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2FdID0gc3RhdHVzW2lkeF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhzdGF0ZS5mZWVTdGF0dXMsIGZlZVN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTWVtb0NoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBlLnRhcmdldC52YWx1ZX0sIHRoaXMuX3VwZGF0ZUZlZSk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd0Ftb3VudENoYW5nZSh7YW1vdW50fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOlxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgIT09IHVuZGVmaW5lZCAmJiAhcGFyc2VGbG9hdChhbW91bnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tNaW5BbW91bnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdENoYW5nZWQoaW5kZXgpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKVtpbmRleF07XG4gICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldExhc3Qoe1xuICAgICAgICAgICAgd2FsbGV0OiB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG5ld193aXRoZHJhd19hZGRyZXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZDogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgb3B0aW9uc19pc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd0FkZHJlc3NDaGFuZ2VkKGUpIHtcbiAgICAgICAgbGV0IG5ld193aXRoZHJhd19hZGRyZXNzID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiBuZXdfd2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyhuZXdfd2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgb25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQoZSkge1xuICAgICAgICBsZXQgbmV3X3dpdGhkcmF3X3B1YmxpY0tleSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXk6IG5ld193aXRoZHJhd19wdWJsaWNLZXksXG4gICAgICAgICAgICB3aXRoZHJhd19wdWJsaWNLZXlfbm90X2VtcHR5OlxuICAgICAgICAgICAgICAgIG5ld193aXRoZHJhd19wdWJsaWNLZXkgIT0gXCJcIiA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKG5ld193aXRoZHJhd19hZGRyZXNzLCBwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHtcbiAgICAgICAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgICAgICAgd2FsbGV0VHlwZTogcHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgbmV3QWRkcmVzczogbmV3X3dpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGpzb24gPSB7aXNWYWxpZDogZmFsc2V9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyA9PT0gbmV3X3dpdGhkcmF3X2FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfaXNfdmFsaWQ6IGpzb24uaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfcHVibGljS2V5OiBqc29uLmhhc093blByb3BlcnR5KFwicHVibGljS2V5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGpzb24ucHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X3B1YmxpY0tleV9ub3RfZW1wdHk6IHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8ganNvbi5oYXNPd25Qcm9wZXJ0eShcInB1YmxpY0tleVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCB3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBiYWxhbmNlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghYmFsYW5jZSB8fCAhZmVlQW1vdW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGhhc0JhbGFuY2UgPSBjaGVja0JhbGFuY2UoXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGJhbGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGhhc0JhbGFuY2UgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xuICAgICAgICByZXR1cm4gaGFzQmFsYW5jZTtcbiAgICB9XG5cbiAgICBfY2hlY2tNaW5BbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHt3aXRoZHJhd19hbW91bnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAod2l0aGRyYXdfYW1vdW50ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxlc3NUaGFuTWluaW11bSA9XG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQgPFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uKTtcbiAgICAgICAgLyogICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJYXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbl9hbW91bnQgL1xuICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbih0aGlzLnByb3BzLmFzc2V0X3ByZWNpc2lvbilcbiAgICAgICAgKTsqL1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5BbW91bnRFcnJvcjogbGVzc1RoYW5NaW5pbXVtfSk7XG4gICAgICAgIHJldHVybiBsZXNzVGhhbk1pbmltdW07XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3MgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyAmJiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFXaXRoZHJhd0FkZHJlc3Nlcy5oYXModGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRoZHJhd2FscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQ6IHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm91dHB1dF93YWxsZXRfdHlwZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5pbmRleE9mKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcykgPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2l0aGRyYXdBZGRyZXNzZXMuc2V0TGFzdCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWFsOiBhbW91bnRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfY29pbl90eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgdGhpcy5zdGF0ZS53aXRoZHJhd19wdWJsaWNLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiOlwiICsgbmV3IEJ1ZmZlcih0aGlzLnN0YXRlLm1lbW8sIFwidXRmLThcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQgPyBmZWVBbW91bnQuYXNzZXRfaWQgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5X3dpdGhkcmF3X3ZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbCgpO1xuXG4gICAgICAgIGlmICghV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWxzID0gW107XG4gICAgICAgICAgICB3aXRoZHJhd2Fscy5wdXNoKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyk7XG4gICAgICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXQoe1xuICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzOiB3aXRoZHJhd2Fsc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbHMgPSBXaXRoZHJhd0FkZHJlc3Nlcy5nZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbHMuaW5kZXhPZih0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdhbHMucHVzaCh0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgIFdpdGhkcmF3QWRkcmVzc2VzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlczogd2l0aGRyYXdhbHNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBXaXRoZHJhd0FkZHJlc3Nlcy5zZXRMYXN0KHtcbiAgICAgICAgICAgIHdhbGxldDogdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGUsXG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3NcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQ7XG4gICAgICAgIGxldCBwcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgIGxldCBhbW91bnQgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50LFxuICAgICAgICAgICAgLywvZyxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBmZWVfYXNzZXRfaWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBBY2NvdW50QWN0aW9ucy50cmFuc2ZlcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNzdWVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoYW1vdW50ICogcHJlY2lzaW9uLCAxMCksXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0cHV0X2NvaW5fdHlwZSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzcyArXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzUHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyB0aGlzLnN0YXRlLndpdGhkcmF3X3B1YmxpY0tleVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGZlZUFtb3VudCA/IGZlZUFtb3VudC5hc3NldF9pZCA6IGZlZV9hc3NldF9pZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRHJvcERvd25MaXN0KCkge1xuICAgICAgICBpZiAoV2l0aGRyYXdBZGRyZXNzZXMuaGFzKHRoaXMucHJvcHMub3V0cHV0X3dhbGxldF90eXBlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zX2lzX3ZhbGlkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2l0aGRyYXdfYWRkcmVzc19maXJzdDogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnNfaXNfdmFsaWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRXaXRoZHJhd01vZGFsSWQoKSB7XG4gICAgICAgIHJldHVybiBcImNvbmZpcm1hdGlvblwiO1xuICAgIH1cblxuICAgIG9uQWNjb3VudEJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKSkuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU3VidHJhY3QgdGhlIGZlZSBpZiBpdCBpcyB1c2luZyB0aGUgc2FtZSBhc3NldFxuICAgICAgICAgICAgaWYgKHRvdGFsLmFzc2V0X2lkID09PSBmZWVBbW91bnQuYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICB0b3RhbC5taW51cyhmZWVBbW91bnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYW1vdW50OiB0b3RhbC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlfd2l0aGRyYXdfdmFsdWU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXROZXN0ZWRSZWYocmVmKSB7XG4gICAgICAgIHRoaXMubmVzdGVkUmVmID0gcmVmO1xuICAgIH1cblxuICAgIG9uRmVlQ2hhbmdlZCh7YXNzZXR9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZlZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHtmcm9tX2FjY291bnQsIGZlZVN0YXR1c30gPSBzdGF0ZTtcblxuICAgICAgICBmdW5jdGlvbiBoYXNGZWVQb29sQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmVlX2Fzc2V0X3R5cGVzID0gW107XG4gICAgICAgIGlmICghKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2ZlZV9hc3NldF90eXBlc307XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldE9iamVjdChrZXkpO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50X2JhbGFuY2VzW2tleV0pO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5zcGxpY2UoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGFzc2V0cyB0aGF0IGRvIG5vdCBoYXZlIHZhbGlkIGNvcmUgZXhjaGFuZ2UgcmF0ZXNcbiAgICAgICAgICAgICAgICBsZXQgcHJpY2VJc1ZhbGlkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBuZXcgQXNzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbmV3IEFzc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VJc1ZhbGlkID0gcC5pc1ZhbGlkKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhc3NldC5nZXQoXCJpZFwiKSAhPT0gXCIxLjMuMFwiICYmICFwcmljZUlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBmZWVfYXNzZXRfdHlwZXMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZVBvb2xCYWxhbmNlKGEpICYmIGhhc0JhbGFuY2UoYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7ZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7d2l0aGRyYXdfYWRkcmVzc19zZWxlY3RlZCwgd2l0aGRyYXdfcHVibGljS2V5LCBtZW1vfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBzdG9yZWRBZGRyZXNzID0gV2l0aGRyYXdBZGRyZXNzZXMuZ2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRwdXRfd2FsbGV0X3R5cGVcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgbGV0IGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcyk7XG5cbiAgICAgICAgbGV0IHdpdGhkcmF3TW9kYWxJZCA9IHRoaXMuZ2V0V2l0aGRyYXdNb2RhbElkKCk7XG4gICAgICAgIGxldCBpbnZhbGlkX2FkZHJlc3NfbWVzc2FnZSA9IG51bGw7XG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbmZpcm1hdGlvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9uc19pc192YWxpZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhc3RvcmVkQWRkcmVzcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicnVkZXgtZGlzYWJsZWQtb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJ1ZGV4LW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3RvcmVkQWRkcmVzcy5tYXAoZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdENoYW5nZWQuYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2NoZWNrX2luX3Byb2dyZXNzICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhkcmF3X2FkZHJlc3MgJiYgdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS53aXRoZHJhd19hZGRyZXNzX2lzX3ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnZhbGlkX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5fdHlwZT17dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0Q29uZmlybWF0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC5jb25maXJtYXRpb24uYWNjZXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVDb25maXJtYXRpb25Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLmNvbmZpcm1hdGlvbi5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNDb25maXJtYXRpb25Nb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlQ29uZmlybWF0aW9uTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5jb25maXJtYXRpb24udGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUud2l0aGRyYXdfYWRkcmVzc19pc192YWxpZClcbiAgICAgICAgICAgIC8vICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSA8SWNvbiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiIHRpdGxlPVwiaWNvbnMuY2hlY2ttYXJrX2NpcmNsZS5vcGVyYXRpb25fc3VjY2VlZFwiIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIiAvPjtcbiAgICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAgIC8vICAgaW52YWxpZF9hZGRyZXNzX21lc3NhZ2UgPSA8SWNvbiBuYW1lPVwiY3Jvc3MtY2lyY2xlXCIgdGl0bGU9XCJpY29ucy5jcm9zc19jaXJjbGUub3BlcmF0aW9uX2ZhaWxlZFwiIGNsYXNzTmFtZT1cImFsZXJ0XCIgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuICAgICAgICBsZXQgd2l0aGRyYXdfbWVtbyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3V0cHV0X3N1cHBvcnRzX21lbW9zKSB7XG4gICAgICAgICAgICB3aXRoZHJhd19tZW1vID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIubWVtb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW99XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFc3RpbWF0ZSBmZWUgVkFSSUFCTEVTXG4gICAgICAgIGxldCB7ZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuXG4gICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICBpZiAoY3VycmVudF9hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXTtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0LWN1cnNvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjY291bnRCYWxhbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBiYWxhbmNlID0gXCJObyBmdW5kc1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgZnVsbC13aWR0aC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMHB4XCJ9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFdpdGhkcmF3IGFtb3VudCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIm1vZGFsLndpdGhkcmF3LmFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLndpdGhkcmF3X2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1t0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaXRoZHJhd0Ftb3VudENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbXB0eV93aXRoZHJhd192YWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMudmFsaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWluQW1vdW50RXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5taW5fYW1vdW50X2Vycm9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXgubWluX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5taW5fYW1vdW50IC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3RoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEZlZSBzZWxlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZlZUFtb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBnYXRlX2ZlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZDYWxsYmFjaz17dGhpcy5zZXROZXN0ZWRSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5mZWVBbW91bnQuZ2V0QW1vdW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5mZWVBbW91bnQuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZmVlX2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5oYXNCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRmVlQmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGFzUG9vbEJhbGFuY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9Qb29sQmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7LyogR2F0ZSBmZWUgKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdhdGVGZWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yIHJpZ2h0LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmZlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmdhdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLndpdGhkcmF3LmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuc3RhdGUud2l0aGRyYXdfYW1vdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdhdGVGZWUpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMub3V0cHV0X2NvaW5fc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleC1zZWxlY3QtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdBZGRyZXNzQ2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uRHJvcERvd25MaXN0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM5NjYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtcG9zaXRpb24tb3B0aW9uc1wiPntvcHRpb25zfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2ludmFsaWRfYWRkcmVzc19tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogZm9yIFB1YmxpY0tleSBpbnB1dCAoZXguUFJJWk0pICovfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vdXRwdXRfc3VwcG9ydHNQdWJsaWNLZXkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC53aXRoZHJhdy5wdWJsaWNfa2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVkZXgtc2VsZWN0LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpdGhkcmF3X3B1YmxpY0tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2l0aGRyYXdQdWJsaWNLZXlDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25XaXRoZHJhd1B1YmxpY0tleUNoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNZW1vIGlucHV0ICovfVxuICAgICAgICAgICAgICAgICAgICB7d2l0aGRyYXdfbWVtb31cblxuICAgICAgICAgICAgICAgICAgICB7LyogV2l0aGRyYXcvQ2FuY2VsIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluQW1vdW50RXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUud2l0aGRyYXdfcHVibGljS2V5X25vdF9lbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQucGVybS5jYW5jZWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtYXRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SdURleFdpdGhkcmF3TW9kYWwgPSBCaW5kVG9DaGFpblN0YXRlKFJ1RGV4V2l0aGRyYXdNb2RhbCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUnVEZXhXaXRoZHJhd01vZGFsLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImZlZV9hc3NldFwiKVxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge3JlcXVlc3REZXBvc2l0QWRkcmVzc30gZnJvbSBcImxpYi9jb21tb24vUnVEZXhNZXRob2RzXCI7XG5pbXBvcnQgQWNjb3VudEJhbGFuY2UgZnJvbSBcIi4uLy4uLy4uL0FjY291bnQvQWNjb3VudEJhbGFuY2VcIjtcbmltcG9ydCBSdURleERlcG9zaXRBZGRyZXNzQ2FjaGUgZnJvbSBcImNvbW1vbi9SdURleERlcG9zaXRBZGRyZXNzQ2FjaGVcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCB7YXZhaWxhYmxlR2F0ZXdheXN9IGZyb20gXCJsaWIvY29tbW9uL2dhdGV3YXlzXCI7XG5cbi8vUkFJRE9cbmltcG9ydCBSYWlkb1BheW1lbnRNZXRob2QgZnJvbSBcIi4vUmFpZG9QYXltZW50TWV0aG9kXCI7XG5pbXBvcnQgXCIuL1JhaWRvLmNzc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5jbGFzcyBSYWlkb0RlcG9zaXRSZXF1ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnYXRld2F5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2NvaW5fdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZXBvc2l0X2FjY291bnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlY2VpdmVfY29pbl90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCxcbiAgICAgICAgaXNzdWVyX2FjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LFxuICAgICAgICBkZXBvc2l0X2Fzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWNlaXZlX2Fzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGRlcHJlY2F0ZWRfaW5fZmF2b3Jfb2Y6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBtaW5fYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjb25maXJtYXRpb25zOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUgPSBuZXcgUnVEZXhEZXBvc2l0QWRkcmVzc0NhY2hlKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnRfbmFtZTogbnVsbCxcblxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgICBtZW1vOiBudWxsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXRBbGxvd2VkOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbl9tYXhfdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlyZWN0OiBcIm1pblwiIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0QW1vdW50OiAwLFxuICAgICAgICAgICAgZ2l2ZUFtb3VudDogMCxcblxuICAgICAgICAgICAgcmFpZG86IHtcbiAgICAgICAgICAgICAgICBhZmZpbGlhdGVfaWQ6IDEwMDU4LFxuXG4gICAgICAgICAgICAgICAgZ2l2ZV9yYXc6IHRoaXMucHJvcHMuYWN0aXZlUGF5bWVudE1ldGhvZCwgLy9maWF0c1xuICAgICAgICAgICAgICAgIGdpdmU6IHRoaXMucHJvcHMuYWN0aXZlUGF5bWVudE1ldGhvZCxcbiAgICAgICAgICAgICAgICBnaXZlX2RlY2ltYWw6IDUsXG5cbiAgICAgICAgICAgICAgICAvL2dldDogXCJCVENcIixcbiAgICAgICAgICAgICAgICBnZXQ6IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lLFxuICAgICAgICAgICAgICAgIGdldF9kZWNpbWFsOiA1LFxuXG4gICAgICAgICAgICAgICAgcHJpY2U6IDEsXG5cbiAgICAgICAgICAgICAgICBpbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgaW5fbWluX2ZlZTogMCxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd19mZWU6IDAsXG5cbiAgICAgICAgICAgICAgICBpbl9mZWU6IDAsXG4gICAgICAgICAgICAgICAgY29tbWlzc2lvbjogMCxcblxuICAgICAgICAgICAgICAgIG1pbl9kZXBvc2l0OiAwLFxuICAgICAgICAgICAgICAgIG1heF9kZXBvc2l0OiAxMDAwMDAwLFxuXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImJ1eVwiLCAvL0JVWSBvciBTRUxMXG5cbiAgICAgICAgICAgICAgICBjdXJyZW5jaWVzOiBbXSxcbiAgICAgICAgICAgICAgICBwcmljZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGREZXBvc2l0QWRkcmVzcyA9IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fbWFrZVVyaVJhaWRvID0gdGhpcy5fbWFrZVVyaVJhaWRvLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fc2V0Q29pbnNSYWlkbyA9IHRoaXMuX3NldENvaW5zUmFpZG8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2V0UHJpY2VzUmFpZG8gPSB0aGlzLl9zZXRQcmljZXNSYWlkby5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9pbml0UHJpY2VzID0gdGhpcy5faW5pdFByaWNlcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kID0gdGhpcy5oYW5kbGVQYXltZW50TWV0aG9kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0Q3VycmVuY2llcyh0aGlzLl9zZXRDb2luc1JhaWRvKTtcbiAgICB9XG5cbiAgICBpbml0Q3VycmVuY2llcyhzdGF0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBjb2lucyA9XG4gICAgICAgICAgICBcImh0dHBzOi8vbWVyY2hhbnQtZGF0YWNlbnRlci5yYWlkb2ZpbmFuY2UuZXU6ODA5NS9jdXJyZW5jaWVzL1wiO1xuICAgICAgICBmZXRjaChjb2lucywge1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe0FjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjaykgc3RhdGVDYWxsYmFjayhqc29uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0Q29pbnNSYWlkbyhjdXJyZW5jaWVzKSB7XG4gICAgICAgIGN1cnJlbmNpZXMgPSBjdXJyZW5jaWVzLnJvd3M7XG5cbiAgICAgICAgbGV0IGN1cnJfY29pbl9vcmlnaW5hbCA9IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lO1xuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVuY2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbmNpZXNbaV0uY29kZSA9PT0gY3Vycl9jb2luX29yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3aXRoZHJhd19mZWU6IFwiICsgY3VycmVuY2llc1tpXS53aXRoZHJhd19mZWUgKiAxKTtcblxuICAgICAgICAgICAgICAgIHJhaWRvLmdpdmUgPSB0aGlzLnN0YXRlLnJhaWRvLmdpdmU7XG4gICAgICAgICAgICAgICAgcmFpZG8uZ2V0ID0gY3VycmVuY2llc1tpXS5jb2RlO1xuXG4gICAgICAgICAgICAgICAgcmFpZG8uY3VycmVuY2llcyA9IGN1cnJlbmNpZXM7XG5cbiAgICAgICAgICAgICAgICAvL3JhaWRvLmluX2VuYWJsZSA9IGN1cnJlbmNpZXNbaV0uaW5fZW5hYmxlOy8vVE9ET1xuICAgICAgICAgICAgICAgIHJhaWRvLm91dCA9IGN1cnJlbmNpZXNbaV0uaWQ7XG4gICAgICAgICAgICAgICAgcmFpZG8ubWluX2RlcG9zaXQgPSBjdXJyZW5jaWVzW2ldLm1pbl9kZXBvc2l0O1xuICAgICAgICAgICAgICAgIHJhaWRvLm1heF9kZXBvc2l0ID0gY3VycmVuY2llc1tpXS5tYXhfZGVwb3NpdDtcbiAgICAgICAgICAgICAgICByYWlkby53aXRoZHJhd19mZWUgPSBjdXJyZW5jaWVzW2ldLndpdGhkcmF3X2ZlZSAqIDE7XG5cbiAgICAgICAgICAgICAgICByYWlkby5naXZlX2RlY2ltYWwgPSBjdXJyZW5jaWVzW2ldLmRlY2ltYWw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkb30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luaXRQcmljZXModGhpcy5fc2V0UHJpY2VzUmFpZG8pO1xuICAgIH1cblxuICAgIF9pbml0UHJpY2VzKHN0YXRlQ2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHByaWNlcyA9IFwiaHR0cHM6Ly9tZXJjaGFudC1kYXRhY2VudGVyLnJhaWRvZmluYW5jZS5ldTo4MDk1L3ByaWNlcy9cIjtcblxuICAgICAgICBmZXRjaChwcmljZXMsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwifSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcGx5ID0+IHtcbiAgICAgICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldFByaWNlc1JhaWRvKHByaWNlcykge1xuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuICAgICAgICBsZXQgY3VycmVuY2llcyA9IHJhaWRvLmN1cnJlbmNpZXM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVuY2llc1tpXS5jb2RlID09PSByYWlkby5naXZlX3Jhdykge1xuICAgICAgICAgICAgICAgIC8vaWYgKGN1cnJlbmNpZXNbaV0uY3VyID09PSByYWlkby5naXZlX3Jhdykge1xuICAgICAgICAgICAgICAgIHJhaWRvLmNvbW1pc3Npb24gPSBwYXJzZUZsb2F0KGN1cnJlbmNpZXNbaV0uY29tbWlzc2lvbik7XG4gICAgICAgICAgICAgICAgcmFpZG8uaW5fZmVlID0gcGFyc2VGbG9hdChjdXJyZW5jaWVzW2ldLmluX2ZlZSk7XG4gICAgICAgICAgICAgICAgcmFpZG8uaW5fbWluX2ZlZSA9IHBhcnNlRmxvYXQoY3VycmVuY2llc1tpXS5pbl9taW5fZmVlKTtcbiAgICAgICAgICAgICAgICByYWlkby5nZXRfZGVjaW1hbCA9IGN1cnJlbmNpZXNbaV0uZGVjaW1hbDtcbiAgICAgICAgICAgICAgICByYWlkby5naXZlID0gY3VycmVuY2llc1tpXS5jdXI7XG4gICAgICAgICAgICAgICAgcmFpZG8uaW4gPSBjdXJyZW5jaWVzW2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmFpZG99KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWlyID0gcmFpZG8uZ2V0ICsgXCJcIiArIHJhaWRvLmdpdmU7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSByYWlkby5kaXJlY3Rpb247XG5cbiAgICAgICAgbGV0IHByaWNlID0gcHJpY2VzW3BhaXJdW2RpcmVjdGlvbl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpY2U6IFwiICsgcHJpY2UpO1xuXG4gICAgICAgIGlmIChwcmljZSkge1xuICAgICAgICAgICAgcmFpZG8ucHJpY2UgPSBwcmljZSAqIDE7XG4gICAgICAgICAgICByYWlkby5wcmljZXMgPSBwcmljZXM7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkbzogcmFpZG99KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKFwiYXV0b1wiKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UodHlwZSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IG5hbWUsIHZhbHVlO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBcImF1dG9cIikge1xuICAgICAgICAgICAgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0RlZmF1bHQgcHJvcGVydGllcyBmb3IgdG9nZ2xlIHN0YXRpYyBnZXRBbW91bnRcbiAgICAgICAgICAgIG5hbWUgPSBcImdldEFtb3VudFwiO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLmdldEFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2V0QW1vdW50OiBcIlwifSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtnaXZlQW1vdW50OiBcIlwifSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTtcblxuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuXG4gICAgICAgIGxldCByZXNfZ2V0QW1vdW50O1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcImdpdmVBbW91bnRcIikge1xuICAgICAgICAgICAgcmVzX2dldEFtb3VudCA9XG4gICAgICAgICAgICAgICAgdmFsdWUgL1xuICAgICAgICAgICAgICAgIChyYWlkby5wcmljZSAvXG4gICAgICAgICAgICAgICAgICAgICgoMTAwIC0gKHJhaWRvLmNvbW1pc3Npb24gKyByYWlkby5pbl9mZWUpKSAvIDEwMCkpO1xuICAgICAgICAgICAgbGV0IHJlc19naXZlQW1vdW50ID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdldEFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc19nZXRBbW91bnQgLSByYWlkby53aXRoZHJhd19mZWUpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgcmFpZG8uZ2l2ZV9kZWNpbWFsKVxuICAgICAgICAgICAgICAgICAgICApIC8gTWF0aC5wb3coMTAsIHJhaWRvLmdpdmVfZGVjaW1hbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2l2ZUFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzX2dpdmVBbW91bnQgKiBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpXG4gICAgICAgICAgICAgICAgICAgICkgLyBNYXRoLnBvdygxMCwgcmFpZG8uZ2V0X2RlY2ltYWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImdldEFtb3VudFwiKSB7XG4gICAgICAgICAgICByZXNfZ2V0QW1vdW50ID0gdmFsdWU7XG4gICAgICAgICAgICBsZXQgcmVzX2dpdmVBbW91bnQgPVxuICAgICAgICAgICAgICAgIChyYWlkby5wcmljZSAqICh2YWx1ZSArIHJhaWRvLndpdGhkcmF3X2ZlZSkpIC9cbiAgICAgICAgICAgICAgICAgICAgKCgxMDAgLSAocmFpZG8uY29tbWlzc2lvbiArIHJhaWRvLmluX2ZlZSkpIC8gMTAwKSArXG4gICAgICAgICAgICAgICAgcmFpZG8uaW5fbWluX2ZlZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZ2V0QW1vdW50OlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNfZ2V0QW1vdW50ICogTWF0aC5wb3coMTAsIHJhaWRvLmdpdmVfZGVjaW1hbClcbiAgICAgICAgICAgICAgICAgICAgKSAvIE1hdGgucG93KDEwLCByYWlkby5naXZlX2RlY2ltYWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGdpdmVBbW91bnQ6XG4gICAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc19naXZlQW1vdW50ICogTWF0aC5wb3coMTAsIHJhaWRvLmdldF9kZWNpbWFsKVxuICAgICAgICAgICAgICAgICAgICApIC8gTWF0aC5wb3coMTAsIHJhaWRvLmdldF9kZWNpbWFsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXNfZ2V0QW1vdW50ID49IHJhaWRvLm1pbl9kZXBvc2l0ICYmXG4gICAgICAgICAgICAocmFpZG8ubWF4X2RlcG9zaXQgPT0gMCB8fCByZXNfZ2V0QW1vdW50IDw9IHJhaWRvLm1heF9kZXBvc2l0KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1pbl9tYXhfdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdDogXCJtaW5cIiAvL01JTiBvciBNQVhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdEFsbG93ZWQ6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZXNfZ2V0QW1vdW50ID49IHJhaWRvLm1pbl9kZXBvc2l0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1pbl9tYXhfdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdDogXCJtYXhcIiAvL01JTiBvciBNQVhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWluX21heF92YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0OiBcIm1pblwiIC8vTUlOIG9yIE1BWFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdEFsbG93ZWQ6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRTdGF0ZS5yYWlkbyAhPT0gdGhpcy5zdGF0ZS5yYWlkbyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmRlcG9zaXRfY29pbl90eXBlICE9PSB0aGlzLnByb3BzLmdldEFtb3VudCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmdldEFtb3VudCAhPT0gdGhpcy5zdGF0ZS5nZXRBbW91bnQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5naXZlQW1vdW50ICE9PSB0aGlzLnN0YXRlLmdpdmVBbW91bnQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5yZWNlaXZlX2Fzc2V0ICE9PSB0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5kZXBvc2l0X2Fzc2V0X25hbWUgIT09IHRoaXMucHJvcHMuZGVwb3NpdF9hc3NldF9uYW1lIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYWN0aW9uICE9PSB0aGlzLnByb3BzLmFjdGlvbiB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRMb2NhbGUgIT09IHRoaXMucHJvcHMuY3VycmVudExvY2FsZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZVBheW1lbnRNZXRob2QoZSkge1xuICAgICAgICBsZXQgcGF5TWV0aG9kID0gZS50YXJnZXRbXCJuYW1lXCJdO1xuICAgICAgICBsZXQgc3RyID0gXCJwYXltZW50bWV0aG9kXCI7XG4gICAgICAgIHBheU1ldGhvZCA9IHBheU1ldGhvZFxuICAgICAgICAgICAgLnN1YnN0cihzdHIubGVuZ3RoICsgMSwgcGF5TWV0aG9kLmxlbmd0aCAtIHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBsZXQgcmFpZG8gPSB0aGlzLnN0YXRlLnJhaWRvO1xuICAgICAgICByYWlkby5naXZlX3JhdyA9IHBheU1ldGhvZDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyYWlkbzogcmFpZG99KTtcblxuICAgICAgICB0aGlzLl9zZXRQcmljZXNSYWlkbyh0aGlzLnN0YXRlLnJhaWRvLnByaWNlcyk7XG5cbiAgICAgICAgbGV0IGZpbmRpbmdfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWwuYnRuLXJhZGlvXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmRpbmdfZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZpbmRpbmdfZWxbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0QWN0aXZlUmFpZG9Db2luKHBheU1ldGhvZCk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiB0aGlzLnByb3BzLmRlcG9zaXRfY29pbl90eXBlLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHRoaXMucHJvcHMucmVjZWl2ZV9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhZGREZXBvc2l0QWRkcmVzcyhyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwb3NpdF9jb2luX3R5cGUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NvdW50X25hbWV9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzfSk7XG4gICAgfVxuXG4gICAgX21ha2VVcmlSYWlkbygpIHtcbiAgICAgICAgbGV0IHN0clVyaSA9IFwiXCI7XG4gICAgICAgIGxldCByYWlkbyA9IHRoaXMuc3RhdGUucmFpZG87XG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLnN0YXRlLnJlY2VpdmVfYWRkcmVzcztcblxuICAgICAgICBsZXQgb2JqUGFyYW1zID0ge1xuICAgICAgICAgICAgYWZmaWxpYXRlX2lkOiByYWlkby5hZmZpbGlhdGVfaWQsXG4gICAgICAgICAgICBvZmZlcl9pZDogMyxcbiAgICAgICAgICAgIHZvbHVtZTogdGhpcy5zdGF0ZS5naXZlQW1vdW50LFxuICAgICAgICAgICAgaW46IHJhaWRvLmluLFxuICAgICAgICAgICAgb3V0OiByYWlkby5vdXQsXG4gICAgICAgICAgICBcIm91dC1wXCI6IHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiByYWlkby5kaXJlY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBvYmpQYXJhbXMpIHtcbiAgICAgICAgICAgIHN0clVyaSArPSBcIiZcIiArIGl0ZW0gKyBcIj1cIiArIG9ialBhcmFtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyVXJpO1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcbiAgICAgICAgbGV0IHJhaWRvX2xpbmsgPVxuICAgICAgICAgICAgXCJodHRwczovL3JhaWRvZmluYW5jZS5ldS9idXktc2VsbD9cIiArIHRoaXMuX21ha2VVcmlSYWlkbygpO1xuICAgICAgICB3aW5kb3cub3BlbihyYWlkb19saW5rLCBcIl9ibGFua1wiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbXB0eVJvdyA9IDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIiwgbWluSGVpZ2h0OiAxNTB9fSAvPjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNzdWVyX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXRcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuXG4gICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzX29iamVjdCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXByZWNhdGVkX2luX2Zhdm9yX29mKSB7XG4gICAgICAgICAgICBsZXQgaGFzX25vbnplcm9fYmFsYW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGJhbGFuY2Vfb2JqZWN0X2lkID0gYWNjb3VudF9iYWxhbmNlc19vYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiYWxhbmNlX29iamVjdF9pZCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlX29iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2Vfb2JqZWN0X2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZV9vYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSBiYWxhbmNlX29iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZSAhPSAwKSBoYXNfbm9uemVyb19iYWxhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc19ub256ZXJvX2JhbGFuY2UpIHJldHVybiBlbXB0eVJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLnN0YXRlLnJlY2VpdmVfYWRkcmVzcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWNjb3VudF9uYW1lID09PSB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSkge1xuICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlID0gdGhpcy5kZXBvc2l0X2FkZHJlc3NfY2FjaGUuZ2V0Q2FjaGVkSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2F0ZXdheSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXBvc2l0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlY2VpdmVfY29pbl90eXBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzc19mcm9tX2NhY2hlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgPSByZWNlaXZlX2FkZHJlc3NfZnJvbV9jYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5zdXBwb3J0c19vdXRwdXRfbWVtb3MpIHtcbiAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlcG9zaXRDb25maXJtYXRpb24gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maXJtYXRpb25zICYmIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy50eXBlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maXJtYXRpb25zLnR5cGUgPT09IFwiaXJyZXZlcnNpYmxlXCIpIHtcbiAgICAgICAgICAgICAgICBkZXBvc2l0Q29uZmlybWF0aW9uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdhdGV3YXlfZGVwb3NpdC5jb25maXJtYXRpb25zLmxhc3RfaXJyZXZlcnNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudHlwZSA9PT0gXCJibG9ja3NcIiAmJlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybWF0aW9ucy52YWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdENvbmZpcm1hdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZ2F0ZXdheV9kZXBvc2l0LmNvbmZpcm1hdGlvbnMubl9ibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXt0aGlzLnByb3BzLmNvbmZpcm1hdGlvbnMudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXBvc2l0X2FkZHJlc3NfZnJhZ21lbnQgPSBudWxsO1xuXG4gICAgICAgIGxldCBjdXJyZW50R2F0ZXdheSA9IFwiUlVERVhcIjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFhdmFpbGFibGVHYXRld2F5c1tjdXJyZW50R2F0ZXdheV0uc2ltcGxlQXNzZXRHYXRld2F5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlcG9zaXRfYWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kZXBvc2l0X2FjY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoIXJlY2VpdmVfYWRkcmVzcyB8fCAhcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuc3VwcG9ydHNNZW1vc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Um93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY2VpdmVfYWRkcmVzcy5tZW1vKSB7XG4gICAgICAgICAgICAgICAgZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBjbGllbnQgdGhhdCB1c2VzIHVuaXF1ZSBkZXBvc2l0IGFkZHJlc3NlcyB0byBzZWxlY3QgdGhlIG91dHB1dFxuICAgICAgICAgICAgICAgIGRlcG9zaXRfYWRkcmVzc19mcmFnbWVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY2VpdmVfYWRkcmVzcy5hZGRyZXNzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1ZGV4X19nYXRld2F5IGdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmRlcG9zaXRfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXBvc2l0X2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LmFzc2V0X3RvX3JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwNDljY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnlvdXJfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5idXlfaW5zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBRERSRVNTOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZGVwb3NpdF9hZGRyZXNzX2ZyYWdtZW50fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwb3NpdENvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGk+e2RlcG9zaXRDb25maXJtYXRpb259PC9pPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwXCIsIGZvbnRTaXplOiBcIjEuMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTI0IHJhaWRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFudC1jb2wtMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb1BheW1lbnRNZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2lkPXtcImNhcmR1XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQmFuayBDYXJkIChVU0QpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLnJhaWRvLmdpdmVfcmF3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb1BheW1lbnRNZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2lkPXtcImNhcmRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQmFuayBDYXJkIChFVVIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLnJhaWRvLmdpdmVfcmF3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGF5bWVudE1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb1BheW1lbnRNZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2lkPXtcIndpcmVlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiU2VwYSAoRVVSKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5yYWlkby5naXZlX3Jhd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBheW1lbnRNZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jb2wtMTAgZ2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLnlvdV9naXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnaXZlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5naXZlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdpdmVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ueW91X2dpdmVfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7X19CQVNFX1VSTF9ffWltYWdlc1xcL3JhaWRvLXBheW1lbnQtJHt0aGlzLnN0YXRlLnJhaWRvLmdpdmVfcmF3LnRvTG93ZXJDYXNlKCl9LnBuZylgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFudC1jb2wtMTAgZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxMCVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by55b3VfZ2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdldEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8ueW91X2dldF9wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9sc1xcL3J1ZGV4LiR7dGhpcy5zdGF0ZS5yYWlkby5nZXQudG9Mb3dlckNhc2UoKX0ucG5nKWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUubWluX21heF92YWxpZGF0ZS52YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJhaWRvX21pbl9tYXhfdmFsaWRhdGUgYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyYWlkb19taW5fbWF4X3ZhbGlkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluX21heF92YWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXJlY3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmFpZG9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluX21heF92YWxpZGF0ZS5kaXJlY3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAqIDF9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJhaWRvLmdldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWlkb190ZXh0X2Jsb2NrXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by53aXRoZHJhd19mZWVfaW5jbHVkZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19mZWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yYWlkby53aXRoZHJhd19mZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5yYWlkby5nZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWlkb190ZXh0X2Jsb2NrXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5hcHByb3hpbWF0ZV9hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhaWRvX3RleHRfYmxvY2tcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5idXlfY3J5cHRvLmZpbmFsX3RleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLTEwIGFudC1jb2wtb2Zmc2V0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5zdWJtaXRBbGxvd2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3VibWl0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vblN1Ym1pdFJlcXVlc3QuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5idXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWRleF9fZ2F0ZXdheSBncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b193aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMucmVjZWl2ZV9hc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5hc3NldF90b19yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVwb3NpdF9hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuaW50ZXJtZWRpYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDQ5Y2NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmlzc3Vlcl9hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzA0OWNjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLnJlY2VpdmVfYXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2luc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd190b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmRlcG9zaXRfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoUmFpZG9EZXBvc2l0UmVxdWVzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIFRyYW5zYWN0aW9uV3JhcHBlclxufSBmcm9tIFwiY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZ0luZGljYXRvclwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcblxuaW1wb3J0IFJhaWRvRGVwb3NpdFJlcXVlc3QgZnJvbSBcIi4vUmFpZG9EZXBvc2l0UmVxdWVzdFwiO1xuXG5jbGFzcyBSYWlkb0ZpbmFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUNvaW46IHRoaXMuX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHthY3Rpb246IFwiZGVwb3NpdFwifSksXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJydWRleEFjdGlvblJhaWRvXCIsIFwiZGVwb3NpdFwiKSxcblxuICAgICAgICAgICAgYWN0aXZlUGF5bWVudE1ldGhvZDogXCJDQVJERVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbiA9IHRoaXMuX3NldEFjdGl2ZVJhaWRvQ29pbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zZXRBY3RpdmVSYWlkb0NvaW4obWV0aCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVQYXltZW50TWV0aG9kOiBtZXRofSk7XG4gICAgfVxuXG4gICAgX2dldEFjdGl2ZUNvaW4ocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGxldCBjYWNoZWRDb2luID0gcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZUNvaW5fUmFpZG9cIiwgbnVsbCk7XG4gICAgICAgIGxldCBmaXJzdFRpbWVDb2luID0gXCJCVENcIjtcbiAgICAgICAgbGV0IGFjdGl2ZUNvaW4gPSBjYWNoZWRDb2luID8gY2FjaGVkQ29pbiA6IGZpcnN0VGltZUNvaW47XG5cbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBhY3RpdmVDb2luID0gdGhpcy5fZmluZENvaW5CeU5hbWUocHJvcHMsIGFjdGl2ZUNvaW4pLnN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVDb2luO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnByb3ZpZGVyICE9PSB0aGlzLnByb3BzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2luOiB0aGlzLl9nZXRBY3RpdmVDb2luKG5leHRQcm9wcywgdGhpcy5zdGF0ZS5hY3Rpb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0Q29pbihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlQ29pbjogZS52YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICBsZXQgY29pbk5hbWUgPSBlLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJ3aXRoZHJhd1wiKSB7XG4gICAgICAgICAgICBjb2luTmFtZSA9IHRoaXMuX2ZpbmRDb2luQnlTeW1ib2wodGhpcy5wcm9wcywgY29pbk5hbWUpLmJhY2tpbmdDb2luO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdbXCJhY3RpdmVDb2luX1JhaWRvXCJdID0gY29pbk5hbWU7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeU5hbWUocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5jb2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvaW4gPSBwcm9wcy5jb2luc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy5jb2luc1swXTtcbiAgICB9XG5cbiAgICBfZmluZENvaW5CeVN5bWJvbChwcm9wcywgbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmNvaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29pbiA9IHByb3BzLmNvaW5zW2ldO1xuICAgICAgICAgICAgaWYgKGNvaW4uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT09IG5hbWUpIHJldHVybiBjb2luO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCBhY3RpdmVDb2luID0gdGhpcy5fZ2V0QWN0aXZlQ29pbih0aGlzLnByb3BzLCB7YWN0aW9uOiB0eXBlfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVDb2luOiBhY3RpdmVDb2luXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7W1wicnVkZXhBY3Rpb25SYWlkb1wiXTogdHlwZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjb2lucywgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUNvaW4sIGFjdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghY29pbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyZWRDb2lucyA9IGNvaW5zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIGlmICghYSB8fCAhYS5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYS5kZXBvc2l0QWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICA6IGEud2l0aGRyYXdhbEFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb2luT3B0aW9ucyA9IGZpbHRlcmVkQ29pbnNcbiAgICAgICAgICAgIC5tYXAoY29pbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gXCJkZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29pbi5iYWNraW5nQ29pbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZml4ID0gbmFtZSA9PT0gXCJQUFlcIiA/IFwiXCIgOiBcIlJVREVYLlwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJlZml4ICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvaW4gPSBmaWx0ZXJlZENvaW5zLmZpbHRlcihjb2luID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPT09IFwiZGVwb3NpdFwiXG4gICAgICAgICAgICAgICAgPyBjb2luLmJhY2tpbmdDb2luLnRvVXBwZXJDYXNlKCkgPT09IGFjdGl2ZUNvaW5cbiAgICAgICAgICAgICAgICA6IGNvaW4uc3ltYm9sID09PSBhY3RpdmVDb2luO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAoIWNvaW4pIGNvaW4gPSBmaWx0ZXJlZENvaW5zWzBdO1xuXG4gICAgICAgIGxldCBpc0RlcG9zaXQgPSB0aGlzLnN0YXRlLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IHN1cHBvcnRVcmwgPSBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbVwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucnVkZXguYnV5X2NyeXB0by5jaG9vc2VfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENvaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3RpdmVDb2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2luT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9TZWxlY3Q+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNiBtZWRpdW0tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5nYXRld2F5X3RleHRcIiAvPjoqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBzZWdtZW50ZWQgbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT09IFwiZGVwb3NpdFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZUFjdGlvbi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmJ1eV9jcnlwdG8udGl0bGVfdGFiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID09PSBcIndpdGhkcmF3XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlQWN0aW9uLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aGRyYXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS53aXRoZHJhd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHshY29pbiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlkb0RlcG9zaXRSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29pbi5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheT17XCJydWRleFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD17Y29pbi5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e2NvaW4uYmFja2luZ0NvaW4udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwb3NpdF9hc3NldF9uYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfY29pbl90eXBlPXtjb2luLmJhY2tpbmdDb2luLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYWNjb3VudD17Y29pbi5nYXRld2F5V2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXtjb2luLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9jb2luX3R5cGU9e2NvaW4uc3ltYm9sLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9UeXBlPXtjb2luLm1lbW9UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5fYW1vdW50PXtjb2luLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucz17Y29pbi5jb25maXJtYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYXltZW50TWV0aG9kPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlUGF5bWVudE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVJhaWRvQ29pbj17bSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0QWN0aXZlUmFpZG9Db2luKG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3VwcG9ydDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5zdXBwb3J0X2Jsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VwcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luICYmIGNvaW4uc3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvaW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlcG9zaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvaW4uaXNzdWVySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2luLmlzc3VlcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Fzc2V0LCB0bywgZnJvbUFjY291bnR9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNMaXN0PXtJbW11dGFibGUuTGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkucmVjZW50X1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB0by5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tQWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zYWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SYWlkb0ZpbmFuY2UuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQlRDXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCaXRjb2luIC0gQlRDXCIsXG4gICAgICAgICAgICBiYWNraW5nQ29pbjogXCJCVENcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5CVENcIixcbiAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIGlzc3VlcjogXCJydWRleC1iaXRjb2luXCIsXG4gICAgICAgICAgICBpc3N1ZXJJZDogXCIxLjIuOTU1XCIsXG4gICAgICAgICAgICAvL1wibWluQW1vdW50XCI6IDE4MDAwMCxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJsb2Nrc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJFVEhcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV0aGVyZXVtIC0gRVRIXCIsXG4gICAgICAgICAgICBiYWNraW5nQ29pbjogXCJFVEhcIixcbiAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5FVEhcIixcbiAgICAgICAgICAgIGRlcG9zaXRBbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgIGlzc3VlcjogXCJydWRleC1ldGhlcmV1bVwiLFxuICAgICAgICAgICAgaXNzdWVySWQ6IFwiMS4yLjk1NlwiLFxuICAgICAgICAgICAgLy9cIm1pbkFtb3VudFwiOiA1MDAwMDAsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiB7XG4gICAgICAgICAgICAgbmFtZTogXCJVU0RUXCIsXG4gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGV0aGVyIC0gVVNEVCAob24gRXRoZXJldW0pXCIsXG4gICAgICAgICAgICAgYmFja2luZ0NvaW46IFwiVVNEVFwiLFxuICAgICAgICAgICAgIHN5bWJvbDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgICAgICAgZGVwb3NpdEFsbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICAgLy9cIndpdGhkcmF3YWxBbGxvd2VkXCI6IHRydWUsXG5cbiAgICAgICAgICAgICBpc3N1ZXI6IFwicnVkZXgtdXNkdFwiLFxuICAgICAgICAgICAgIGlzc3VlcklkOiBcIjEuMi45Mjc0NThcIixcbiAgICAgICAgICAgICAvL1wibWluQW1vdW50XCI6IDUwMDAwMCxcbiAgICAgICAgICAgICBjb25maXJtYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgIHR5cGU6IFwiYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOiAyMFxuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0qL1xuICAgIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUmFpZG9GaW5hbmNlLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBSYWlkb1BheW1lbnRNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3RpdGxlLCBwYXltZW50X2lkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZS50b0xvd2VyQ2FzZSgpID09XG4gICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnRfaWQudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgICAgICBjbGFzc05uYW1lID0gXCJhY3RpdmVcIjtcbiAgICAgICAgZWxzZSBjbGFzc05uYW1lID0gXCJcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtY29sLThcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcImJ0biBidG4tc20gYnRuLXJhZGlvXCIgKyBcIiBcIiArIGNsYXNzTm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wicGF5bWVudG1ldGhvZC1cIiArIHBheW1lbnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfX0JBU0VfVVJMX199aW1hZ2VzL3JhaWRvLXBheW1lbnQtYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWlkb1BheW1lbnRNZXRob2Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0RlY2ltYWxDaGVja2VyfSBmcm9tIFwiLi9EZWNpbWFsQ2hlY2tlclwiO1xyXG5cclxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhc3NldCBpZFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5hc3NldHMsIHRoaXMucHJvcHMuYXNzZXRzKSB8fFxyXG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxyXG4gICAgICAgICAgICBucC5zY3JvbGxfbGVuZ3RoICE9PSB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXNzZXRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzPXt0aGlzLnByb3BzLmFzc2V0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYSA9PiBhICYmIGEuZ2V0KFwic3ltYm9sXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnByb3BzLmFzc2V0cy5yZWR1Y2UoKG1hcCwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhICYmIGEuZ2V0KFwic3ltYm9sXCIpKSBtYXBbYS5nZXQoXCJzeW1ib2xcIildID0gYTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgICAgICAgICAgfSwge30pfVxyXG4gICAgICAgICAgICAgICAgc2luZ2xlRW50cnk9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0c1swXS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17dGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0U2VsZWN0b3IgPSBBc3NldFdyYXBwZXIoQXNzZXRTZWxlY3Rvciwge2FzTGlzdDogdHJ1ZX0pO1xyXG5cclxuY2xhc3MgQW1vdW50U2VsZWN0b3IgZXh0ZW5kcyBEZWNpbWFsQ2hlY2tlciB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXHJcbiAgICAgICAgYXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgYW1vdW50OiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMub25Bc3NldENoYW5nZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRBbW91bnQodikge1xyXG4gICAgICAgIC8qLy8gVE9ETzogdXNlIGFzc2V0J3MgcHJlY2lzaW9uIHRvIGZvcm1hdCB0aGUgbnVtYmVyKi9cclxuICAgICAgICBpZiAoIXYpIHYgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikgdiA9IHYudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB2LnRyaW0oKS5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuZ2V0TnVtZXJpY0V2ZW50VmFsdWUoZSksXHJcbiAgICAgICAgICAgICAgICBhc3NldDogdGhpcy5wcm9wcy5hc3NldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2V0Q2hhbmdlKHNlbGVjdGVkX2Fzc2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0OiBzZWxlY3RlZF9hc3NldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNhbGxpbmcgQW1vdW50U2VsZWN0b3I6IFwiICsgdGhpcy5wcm9wcy5sYWJlbCArIHRoaXMucHJvcHMuYXNzZXQgKyB0aGlzLnByb3BzLmFzc2V0cyArIHRoaXMucHJvcHMuYW1vdW50ICsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciArIHRoaXMucHJvcHMuZXJyb3IpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMuZXJyb3JcclxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5lcnJvcilcclxuICAgICAgICAgICAgOiB0aGlzLmZvcm1hdEFtb3VudCh0aGlzLnByb3BzLmFtb3VudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJpZ2h0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheV9iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhc3RlPXt0aGlzLnByb3BzLm9uUGFzdGUgfHwgdGhpcy5vblBhc3RlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNQcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX0vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e0ltbXV0YWJsZS5MaXN0KHRoaXMucHJvcHMuYXNzZXRzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFzc2V0Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17dGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkFtb3VudFNlbGVjdG9yID0gQXNzZXRXcmFwcGVyKEFtb3VudFNlbGVjdG9yKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFtb3VudFNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxuICAgICAgICBtYXhXaWR0aDogMjBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID1cbiAgICAgICAgICAgICAgICAgICAgXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoYXNzZXQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogOVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBjb25zdCBzY3JvbGxfbGVuZ3RoID0gcHJvcHMuc2Nyb2xsX2xlbmd0aDtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJvZHlDbGljayA9IHRoaXMub25Cb2R5Q2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnAuZW50cmllcywgdGhpcy5wcm9wcy5lbnRyaWVzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgbnAudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfc2V0TGlzdGVuZXIocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5lbnRyaWVzLmxlbmd0aCA+IDEgJiYgIXRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljaywge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQm9keUNsaWNrKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5lbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChucC5lbnRyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExpc3RlbmVyKG5wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uQm9keUNsaWNrKGUpIHtcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCBpbnNpZGVBY3Rpb25TaGVldCA9IGZhbHNlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93blwiKSAmJlxuICAgICAgICAgICAgICAgIGVsLmlkID09PSB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbnNpZGVBY3Rpb25TaGVldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKChlbCA9IGVsLnBhcmVudE5vZGUpKTtcblxuICAgICAgICBpZiAoIWluc2lkZUFjdGlvblNoZWV0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlbnRyaWVzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVudHJpZXNbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZW50cmllcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwidXBwZXItY2FzZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZURyb3Bkb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXJcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5BPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5sZW5ndGggPiB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgRGlzYWJsZUNvcHlUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgZGlzYWJsZUNvcHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHJlcGxhY2VDb3B5VGV4dDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ29weSA9IHRoaXMuX2hhbmRsZUNvcHkuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZFJlZikgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5jaGlsZFJlZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuX2hhbmRsZUNvcHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5faGFuZGxlQ29weSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUNvcHkoZXZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUNvcHkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZXZ0LmNsaXBib2FyZERhdGEuc2V0RGF0YShcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQvcGxhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlcGxhY2VDb3B5VGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiByZWY9e3JlZiA9PiAodGhpcy5jaGlsZFJlZiA9IHJlZil9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNhYmxlQ29weVRleHQ7XHJcbiIsImltcG9ydCBscyBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7cnVkZXhBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xuY29uc3QgcnVkZXhTdG9yYWdlID0gbHMoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvaW5MaXN0KHVybCA9IHJ1ZGV4QVBJcy5CQVNFICsgcnVkZXhBUElzLkNPSU5TX0xJU1QpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7bWV0aG9kOiBcInBvc3RcIn0pXG4gICAgICAgIC50aGVuKHJlcGx5ID0+XG4gICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmZXRjaGluZyBydWRleCBsaXN0IG9mIGNvaW5zXCIsIGVyciwgdXJsKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0RGVwb3NpdEFkZHJlc3Moe1xuICAgIGlucHV0Q29pblR5cGUsXG4gICAgb3V0cHV0Q29pblR5cGUsXG4gICAgb3V0cHV0QWRkcmVzcyxcbiAgICB1cmwgPSBydWRleEFQSXMuQkFTRSxcbiAgICBzdGF0ZUNhbGxiYWNrXG59KSB7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICAgIGlucHV0Q29pblR5cGUsXG4gICAgICAgIG91dHB1dENvaW5UeXBlLFxuICAgICAgICBvdXRwdXRBZGRyZXNzXG4gICAgfTtcblxuICAgIGxldCBib2R5X3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgZmV0Y2godXJsICsgcnVkZXhBUElzLk5FV19ERVBPU0lUX0FERFJFU1MsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBib2R5X3N0cmluZ1xuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcGx5Lmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInJlcGx5OiBcIiwganNvbiApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBqc29uLmlucHV0QWRkcmVzcyB8fCBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vOiBqc29uLmlucHV0TWVtbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoganNvbi5lcnJvciB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spIHN0YXRlQ2FsbGJhY2soYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcImVycm9yOiBcIixlcnJvciAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJlcnJvcjogXCIsZXJyb3IgICk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2soe2FkZHJlc3M6IFwidW5rbm93blwiLCBtZW1vOiBudWxsfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWRkcmVzcyh7XG4gICAgdXJsID0gcnVkZXhBUElzLkJBU0UsXG4gICAgd2FsbGV0VHlwZSxcbiAgICBuZXdBZGRyZXNzXG59KSB7XG4gICAgaWYgKCFuZXdBZGRyZXNzKSByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcygpKTtcbiAgICByZXR1cm4gZmV0Y2godXJsICsgXCIvd2FsbGV0cy9cIiArIHdhbGxldFR5cGUgKyBcIi9jaGVjay1hZGRyZXNzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7YWRkcmVzczogbmV3QWRkcmVzc30pXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVwbHkgPT4gcmVwbHkuanNvbigpLnRoZW4oanNvbiA9PiBqc29uKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzV2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5oYXMoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gKTtcbn1cblxuZnVuY3Rpb24gc2V0V2l0aGRyYXdhbEFkZHJlc3Nlcyh7d2FsbGV0LCBhZGRyZXNzZXN9KSB7XG4gICAgcnVkZXhTdG9yYWdlLnNldChgaGlzdG9yeV9hZGRyZXNzXyR7d2FsbGV0fWAsIGFkZHJlc3Nlcyk7XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhkcmF3YWxBZGRyZXNzZXMod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc18ke3dhbGxldH1gLCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyh7d2FsbGV0LCBhZGRyZXNzfSkge1xuICAgIHJ1ZGV4U3RvcmFnZS5zZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIGFkZHJlc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Mod2FsbGV0KSB7XG4gICAgcmV0dXJuIHJ1ZGV4U3RvcmFnZS5nZXQoYGhpc3RvcnlfYWRkcmVzc19sYXN0XyR7d2FsbGV0fWAsIFwiXCIpO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aGRyYXdBZGRyZXNzZXMgPSB7XG4gICAgaGFzOiBoYXNXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBzZXQ6IHNldFdpdGhkcmF3YWxBZGRyZXNzZXMsXG4gICAgZ2V0OiBnZXRXaXRoZHJhd2FsQWRkcmVzc2VzLFxuICAgIHNldExhc3Q6IHNldExhc3RXaXRoZHJhd2FsQWRkcmVzcyxcbiAgICBnZXRMYXN0OiBnZXRMYXN0V2l0aGRyYXdhbEFkZHJlc3Ncbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvcHlUb0NsaXBib2FyZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNvcHktdG8tY2xpcGJvYXJkXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ29weVRvQ2xpcGJvYXJkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29weVRvQ2xpcGJvYXJkLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29weVRvQ2xpcGJvYXJkKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlUb0NsaXBib2FyZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihDb3B5VG9DbGlwYm9hcmQpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzLnRleHQsXG4gICAgICAgICAgb25Db3B5ID0gX3RoaXMkcHJvcHMub25Db3B5LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzLm9wdGlvbnM7XG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBfY29weVRvQ2xpcGJvYXJkW1wiZGVmYXVsdFwiXSkodGV4dCwgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChvbkNvcHkpIHtcbiAgICAgICAgb25Db3B5KHRleHQsIHJlc3VsdCk7XG4gICAgICB9IC8vIEJ5cGFzcyBvbkNsaWNrIGlmIGl0IHdhcyBwcmVzZW50XG5cblxuICAgICAgaWYgKGVsZW0gJiYgZWxlbS5wcm9wcyAmJiB0eXBlb2YgZWxlbS5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsZW0ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29weVRvQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RleHQgPSBfdGhpcyRwcm9wczIudGV4dCxcbiAgICAgICAgICBfb25Db3B5ID0gX3RoaXMkcHJvcHMyLm9uQ29weSxcbiAgICAgICAgICBfb3B0aW9ucyA9IF90aGlzJHByb3BzMi5vcHRpb25zLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1widGV4dFwiLCBcIm9uQ29weVwiLCBcIm9wdGlvbnNcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGVsZW0sIF9vYmplY3RTcHJlYWQoe30sIHByb3BzLCB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja1xuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb3B5VG9DbGlwYm9hcmQ7XG59KF9yZWFjdFtcImRlZmF1bHRcIl0uUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydHMuQ29weVRvQ2xpcGJvYXJkID0gQ29weVRvQ2xpcGJvYXJkO1xuXG5fZGVmaW5lUHJvcGVydHkoQ29weVRvQ2xpcGJvYXJkLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIG9uQ29weTogdW5kZWZpbmVkLFxuICBvcHRpb25zOiB1bmRlZmluZWRcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpLFxuICAgIENvcHlUb0NsaXBib2FyZCA9IF9yZXF1aXJlLkNvcHlUb0NsaXBib2FyZDtcblxuQ29weVRvQ2xpcGJvYXJkLkNvcHlUb0NsaXBib2FyZCA9IENvcHlUb0NsaXBib2FyZDtcbm1vZHVsZS5leHBvcnRzID0gQ29weVRvQ2xpcGJvYXJkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==